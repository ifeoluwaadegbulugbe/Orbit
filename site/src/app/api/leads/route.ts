import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSupabaseServerClient } from "@/lib/supabase";
import { readAttributionCookie } from "@/lib/utm";

const leadSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  message: z.string().max(2000).optional(),
  source: z.string().min(1),
  // Honeypot field: real users never fill this in; bots usually do.
  company_website: z.string().max(0).optional(),
});

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const hits = new Map<string, { count: number; windowStart: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    hits.set(ip, { count: 1, windowStart: now });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  if (parsed.data.company_website) {
    // Honeypot tripped: pretend success so the bot doesn't learn anything.
    return NextResponse.json({ ok: true });
  }

  const attribution = readAttributionCookie(request.headers.get("cookie") ?? undefined);

  try {
    const supabase = getSupabaseServerClient();
    const { error } = await supabase.from("leads").insert({
      email: parsed.data.email,
      name: parsed.data.name ?? null,
      message: parsed.data.message ?? null,
      source: parsed.data.source,
      utm_source: attribution.utm_source ?? null,
      utm_medium: attribution.utm_medium ?? null,
      utm_campaign: attribution.utm_campaign ?? null,
      referrer: attribution.referrer ?? null,
      landing_page: attribution.landing_page ?? null,
    });
    if (error) throw error;
  } catch (err) {
    console.error("Failed to store lead", err);
    return NextResponse.json({ error: "Could not save lead" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
