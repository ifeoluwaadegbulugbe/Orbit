/**
 * Single source of truth for brand identity, URLs, and socials.
 * Every component reads from here instead of hardcoding a URL.
 *
 * TikTok handle resolved to @getorbitcrm per the rebuild brief (the old
 * repo's footer/JSON-LD had @useorbitapp, a stale value). X and LinkedIn
 * were consistent across the old repo and weren't flagged as conflicting,
 * so they're carried forward unchanged. See content/TODO-verify.md.
 */

export const siteConfig = {
  name: "Orbit",
  url: "https://www.getorbitcrm.com",
  appUrl: "https://app.getorbitcrm.com",
  tagline: "Run your business. Not the admin.",
  supportingLine: "Get booked. Get paid. Keep your clients.",
  description:
    "Orbit gives African service businesses one simple place to manage clients, bookings, payments, and follow-ups, while automation handles the admin work in between.",
  email: "getorbitcrm@gmail.com",
  whatsapp: {
    number: "2340000000000", // TODO-verify: confirm real WhatsApp Business number
    baseUrl: "https://wa.me/2340000000000",
  },
  social: {
    x: "https://x.com/orbitcrm",
    linkedin: "https://www.linkedin.com/company/useorbitcrm/",
    tiktok: "https://www.tiktok.com/@getorbitcrm",
  },
  gtmId: "GTM-MQRPTJ78",
  pricing: {
    free: { name: "Free", price: 0 },
    pro: { name: "Pro", price: 12, period: "month" },
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** Builds a WhatsApp click-to-chat link with a page-specific prefilled message. */
export function whatsappLink(message: string): string {
  return `${siteConfig.whatsapp.baseUrl}?text=${encodeURIComponent(message)}`;
}

/** Builds a deep link into the app, carrying UTM params through to signup. */
export function appLink(path = "/", utm?: Record<string, string>): string {
  const url = new URL(path, siteConfig.appUrl);
  if (utm) {
    for (const [key, value] of Object.entries(utm)) {
      if (value) url.searchParams.set(key, value);
    }
  }
  return url.toString();
}
