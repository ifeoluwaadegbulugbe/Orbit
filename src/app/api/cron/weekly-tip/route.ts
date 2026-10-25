import { NextRequest, NextResponse } from "next/server";
import { tipForDate } from "@/data/newsletter";
import { getResendConfig, sendWeeklyTip } from "@/lib/resend";

export const dynamic = "force-dynamic";

/**
 * Runs from a Vercel cron every Monday (see vercel.json). Sends the tip dated today,
 * if there is one. Vercel calls this with `Authorization: Bearer <CRON_SECRET>`.
 */
export async function GET(request: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!getResendConfig()) {
    return NextResponse.json({ sent: false, reason: "Resend is not configured" });
  }

  const today = new Date().toISOString().slice(0, 10);
  const tip = tipForDate(today);
  if (!tip) return NextResponse.json({ sent: false, reason: `No tip scheduled for ${today}` });

  try {
    const result = await sendWeeklyTip(tip);
    return NextResponse.json({ sent: true, date: today, broadcast: result.id });
  } catch (err) {
    console.error("Weekly tip failed", err);
    return NextResponse.json({ sent: false, error: "Send failed" }, { status: 500 });
  }
}
