import { cookies, headers } from "next/headers";
import { COUNTRY_COOKIE, DEFAULT_COUNTRY, buildPricingContext, isCountryCode, type PricingContext } from "@/data/regions";

/**
 * Works out which country's pricing to show. Order: the visitor's saved choice,
 * then the edge network's country header (Vercel or Cloudflare), then Nigeria.
 * Reading cookies and headers makes the calling page render per request.
 */
export async function getPricingContext(): Promise<PricingContext> {
  const [cookieStore, headerStore] = await Promise.all([cookies(), headers()]);

  const saved = cookieStore.get(COUNTRY_COOKIE)?.value?.toUpperCase();
  const detected = (headerStore.get("x-vercel-ip-country") ?? headerStore.get("cf-ipcountry"))?.toUpperCase();

  const country = [saved, detected].find((c) => isCountryCode(c) && c !== "XX" && c !== "T1") ?? DEFAULT_COUNTRY;
  return buildPricingContext(country);
}
