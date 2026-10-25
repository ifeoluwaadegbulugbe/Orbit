import { siteConfig } from "@/site.config";
import { absoluteUrl } from "@/lib/metadata";
import type { NewsletterTip } from "@/data/newsletter";

const API = "https://api.resend.com";

interface ResendConfig {
  apiKey: string;
  from: string;
  segmentId: string;
}

/** Returns the Resend settings, or null when email is not set up (sign-ups still save). */
export function getResendConfig(): ResendConfig | null {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const segmentId = process.env.RESEND_SEGMENT_ID;
  if (!apiKey || !from || !segmentId) return null;
  return { apiKey, from, segmentId };
}

async function resend(cfg: ResendConfig, path: string, body: unknown) {
  const res = await fetch(`${API}${path}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${cfg.apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = (await res.json().catch(() => ({}))) as { id?: string; message?: string };
  if (!res.ok) throw new Error(`Resend ${path} ${res.status}: ${json.message ?? "request failed"}`);
  return json;
}

const wrap = (inner: string) => `<!doctype html>
<html><body style="margin:0;background:#fbf8f6;font-family:Inter,Arial,sans-serif;color:#17120f">
<div style="max-width:560px;margin:0 auto;padding:32px 24px;line-height:1.6;font-size:16px">
<p style="margin:0 0 24px;font-weight:600;font-size:18px">Orbit</p>
${inner}
</div></body></html>`;

const p = (text: string) => `<p style="margin:0 0 16px">${text}</p>`;

/** Adds the person to the newsletter list and sends a short welcome. Returns false if they were not newly added. */
export async function subscribeToNewsletter(email: string): Promise<boolean> {
  const cfg = getResendConfig();
  if (!cfg) return false;

  try {
    await resend(cfg, "/contacts", { email, unsubscribed: false, segments: [{ id: cfg.segmentId }] });
  } catch (err) {
    // Usually "already exists". Do not re-subscribe or re-welcome someone who is already on the list.
    console.error("Newsletter contact not added", err);
    return false;
  }

  const html = wrap(
    [
      p("You are on the list."),
      p("Once a week we will send one practical tip for running a service business: deposits, invoicing, bookings and keeping clients."),
      p(`In the meantime, the <a href="${absoluteUrl("/blog")}" style="color:#d13563">Orbit blog</a> has guides you can use today.`),
      p(`You can reply to this email any time. Every weekly email has an unsubscribe link.`),
    ].join("\n"),
  );
  const text = `You are on the list.\n\nOnce a week we will send one practical tip for running a service business: deposits, invoicing, bookings and keeping clients.\n\nGuides you can use today: ${absoluteUrl("/blog")}\n\nYou can reply to this email any time. Every weekly email has an unsubscribe link.\n`;

  try {
    await resend(cfg, "/emails", {
      from: cfg.from,
      to: [email],
      reply_to: siteConfig.email,
      subject: "You are on the list",
      html,
      text,
    });
  } catch (err) {
    console.error("Welcome email failed", err);
  }
  return true;
}

/** Creates and sends the weekly tip to everyone on the list. Resend adds the unsubscribe link. */
export async function sendWeeklyTip(tip: NewsletterTip) {
  const cfg = getResendConfig();
  if (!cfg) throw new Error("Resend is not configured");

  const html = wrap(
    [
      `<h1 style="margin:0 0 20px;font-size:24px;line-height:1.25">${tip.subject}</h1>`,
      ...tip.paragraphs.map(p),
      p(`<a href="${absoluteUrl(tip.link.path)}" style="color:#d13563;font-weight:600">${tip.link.label}</a>`),
      `<p style="margin:32px 0 0;font-size:13px;color:#5c544e">You get this because you signed up at getorbitcrm.com. <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#5c544e">Unsubscribe</a></p>`,
    ].join("\n"),
  );
  const text = `${tip.subject}\n\n${tip.paragraphs.join("\n\n")}\n\n${tip.link.label}: ${absoluteUrl(tip.link.path)}\n\nYou get this because you signed up at getorbitcrm.com. Unsubscribe: {{{RESEND_UNSUBSCRIBE_URL}}}\n`;

  return resend(cfg, "/broadcasts", {
    segment_id: cfg.segmentId,
    from: cfg.from,
    reply_to: siteConfig.email,
    name: `Weekly tip ${tip.sendOn}`,
    subject: tip.subject,
    html,
    text,
    send: true,
  });
}
