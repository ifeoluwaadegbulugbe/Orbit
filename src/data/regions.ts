/**
 * Location-based pricing. One currency is shown to a visitor at a time.
 *
 * Nigeria is the base price. Any country not listed in `regionPrices` sees the
 * naira price. To add a country, add one entry keyed by its ISO 3166-1 alpha-2
 * code. Nothing else needs to change.
 *
 * Orbit Pay is separate from currency: it only runs in the countries listed in
 * `orbitPayCountries`.
 */

export interface RegionPrice {
  /** ISO 4217 code, used in JSON-LD. */
  currency: string;
  /** Currency name shown to visitors, e.g. "Naira". */
  currencyName: string;
  /** Symbol put in front of amounts, e.g. "₦". */
  symbol: string;
  proMonthly: number;
  proYearly: number;
}

export const nigeriaPrice: RegionPrice = {
  currency: "NGN",
  currencyName: "Naira",
  symbol: "₦",
  proMonthly: 7500,
  proYearly: 75000,
};

// TODO: add the confirmed prices for other African countries here, for example:
//   GH: { currency: "GHS", currencyName: "Cedi", symbol: "GH₵", proMonthly: ..., proYearly: ... },
// Until a country is listed, it falls back to the naira price.
export const regionPrices: Record<string, RegionPrice> = {
  NG: nigeriaPrice,
};

export const orbitPayCountries = ["NG"];

/** Orbit Pay fees. Nigeria only, so these are always in naira. */
export const orbitPayFees = {
  free: { percent: 2.5, flat: 100, cap: 3500 },
  pro: { percent: 2, flat: 100, cap: 2500 },
};

export const DEFAULT_COUNTRY = "NG";
export const OTHER_COUNTRY = "ZZ";
export const COUNTRY_COOKIE = "orbit_country";

/** African countries offered in the country switch, by ISO code. */
export const switchableCountries = [
  "NG", "GH", "KE", "ZA", "UG", "TZ", "RW", "EG", "SN", "CI", "CM", "ET", "MA", "ZM", "ZW", "BW", "NA", "MW", "MZ", "AO",
  "DZ", "TN", "ML", "BF", "BJ", "TG", "SL", "LR", "GM", "GA", "CD", "CG", "MU", "SD", "SS", "SO", "LY", "NE", "TD", "GN",
];

export interface PricingContext {
  country: string;
  countryName: string;
  price: RegionPrice;
  orbitPay: boolean;
}

export function isCountryCode(value: string | null | undefined): value is string {
  return !!value && /^[A-Z]{2}$/.test(value);
}

export function countryName(code: string): string {
  if (code === OTHER_COUNTRY) return "Other country";
  try {
    return new Intl.DisplayNames(["en"], { type: "region" }).of(code) ?? code;
  } catch {
    return code;
  }
}

export function buildPricingContext(country: string): PricingContext {
  const code = isCountryCode(country) ? country : DEFAULT_COUNTRY;
  return {
    country: code,
    countryName: countryName(code),
    price: regionPrices[code] ?? nigeriaPrice,
    orbitPay: orbitPayCountries.includes(code),
  };
}

export function formatMoney(amount: number, price: Pick<RegionPrice, "symbol">): string {
  return `${price.symbol}${amount.toLocaleString("en-US")}`;
}

/** Fee line such as "2.5% + ₦100 per payment, capped at ₦3,500". Orbit Pay is naira only. */
export function orbitPayFeeText(tier: keyof typeof orbitPayFees): string {
  const f = orbitPayFees[tier];
  return `${f.percent}% + ${formatMoney(f.flat, nigeriaPrice)} per payment, capped at ${formatMoney(f.cap, nigeriaPrice)}`;
}
