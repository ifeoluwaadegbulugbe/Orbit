export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer?: string;
  landing_page?: string;
}

const COOKIE_NAME = "orbit_attribution";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 90; // 90 days

/** Reads first-touch UTM/referrer attribution from the request's cookie (server-side). */
export function readAttributionCookie(cookieHeader: string | undefined): UtmParams {
  if (!cookieHeader) return {};
  const match = cookieHeader.match(new RegExp(`${COOKIE_NAME}=([^;]+)`));
  if (!match || !match[1]) return {};
  try {
    return JSON.parse(decodeURIComponent(match[1])) as UtmParams;
  } catch {
    return {};
  }
}

export function serializeAttributionCookie(params: UtmParams): string {
  const value = encodeURIComponent(JSON.stringify(params));
  return `${COOKIE_NAME}=${value}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

export const ATTRIBUTION_COOKIE_NAME = COOKIE_NAME;
