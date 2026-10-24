"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { COUNTRY_COOKIE, OTHER_COUNTRY, countryName, switchableCountries, type PricingContext } from "@/data/regions";

const ONE_YEAR = 60 * 60 * 24 * 365;

/** Shows which country the prices are for and lets the visitor change it. The choice is saved in a cookie. */
export function CountrySwitch({ ctx }: { ctx: PricingContext }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();

  const codes = switchableCountries.includes(ctx.country) || ctx.country === OTHER_COUNTRY
    ? switchableCountries
    : [ctx.country, ...switchableCountries];
  const options = codes
    .map((code) => ({ code, name: countryName(code) }))
    .sort((a, b) => a.name.localeCompare(b.name));

  function choose(code: string) {
    document.cookie = `${COUNTRY_COOKIE}=${code}; path=/; max-age=${ONE_YEAR}; SameSite=Lax`;
    setOpen(false);
    startTransition(() => router.refresh());
  }

  return (
    <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-ink-muted" aria-live="polite">
      <span>
        Prices in {ctx.price.currencyName} ({ctx.price.symbol}) for {ctx.countryName}.
      </span>
      {open ? (
        <>
          <label htmlFor="country-select" className="sr-only">
            Country
          </label>
          <select
            id="country-select"
            autoFocus
            defaultValue={ctx.country}
            onChange={(e) => choose(e.target.value)}
            className="min-h-9 rounded-lg border border-ink/20 bg-surface px-3 text-sm text-ink"
          >
            {options.map((o) => (
              <option key={o.code} value={o.code}>
                {o.name}
              </option>
            ))}
            <option value={OTHER_COUNTRY}>{countryName(OTHER_COUNTRY)}</option>
          </select>
        </>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          disabled={pending}
          className="font-medium text-brand underline-offset-4 hover:underline disabled:opacity-60"
        >
          {pending ? "Updating..." : "Change country"}
        </button>
      )}
    </p>
  );
}
