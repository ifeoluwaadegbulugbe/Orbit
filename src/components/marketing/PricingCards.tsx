"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { appLink } from "@/site.config";
import { trackEvent } from "@/lib/analytics";
import { formatMoney, type PricingContext } from "@/data/regions";
import { getPlans, proMonthlyText, proYearlyText, yearlySaving } from "@/data/pricing";

type Billing = "monthly" | "yearly";

export function PricingCards({ ctx }: { ctx: PricingContext }) {
  const [billing, setBilling] = useState<Billing>("monthly");
  const plans = getPlans(ctx);
  const saving = yearlySaving(ctx);

  return (
    <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
      {plans.map((plan) => {
        const isPro = plan.name === "Pro";
        const price = isPro
          ? billing === "monthly"
            ? proMonthlyText(ctx)
            : proYearlyText(ctx)
          : formatMoney(0, ctx.price);
        const period = isPro ? (billing === "monthly" ? "/month" : "/year") : null;

        return (
          <div
            key={plan.name}
            className={`relative rounded-3xl bg-surface p-6 sm:p-8 md:p-10 ${
              plan.highlighted ? "border-2 border-primary-500 shadow-[var(--shadow-lg)]" : "border border-border"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-action px-4 py-1 text-xs font-semibold text-white">
                Most popular
              </span>
            )}
            <h3 className="text-xl font-semibold text-ink">{plan.name}</h3>
            <p className="mb-5 mt-1 text-sm text-ink-muted">{plan.description}</p>

            {isPro && (
              <div className="mb-5 flex w-fit rounded-full border border-border bg-sunken p-1" role="group" aria-label="Billing period">
                {(["monthly", "yearly"] as const).map((b) => (
                  <button
                    key={b}
                    type="button"
                    aria-pressed={billing === b}
                    onClick={() => setBilling(b)}
                    className={`press min-h-9 rounded-full px-4 text-sm font-medium transition-colors duration-200 ${
                      billing === b ? "bg-inverse text-on-inverse" : "text-ink-muted hover:text-ink"
                    }`}
                  >
                    {b === "monthly" ? "Monthly" : "Yearly"}
                  </button>
                ))}
              </div>
            )}

            <div className="mb-6 flex flex-wrap items-end gap-x-1">
              <span className="text-4xl font-semibold text-ink sm:text-5xl">{price}</span>
              {period && <span className="mb-1.5 text-ink-muted">{period}</span>}
            </div>

            <Button
              href={appLink("/signup", { utm_source: "pricing", utm_campaign: plan.name.toLowerCase() })}
              variant={plan.highlighted ? "primary" : "secondary"}
              className="mb-8 w-full"
              onClick={() => trackEvent({ name: "signup_start", location: `pricing_${plan.name.toLowerCase()}` })}
            >
              {plan.cta}
            </Button>

            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-ink">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" aria-hidden="true" />
                  {feature}
                </li>
              ))}
              {isPro && (
                <li className="flex items-start gap-2.5 text-sm text-ink">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" aria-hidden="true" />
                  {billing === "monthly"
                    ? `Save with yearly: ${proYearlyText(ctx)}/year`
                    : saving > 0
                      ? `Yearly saves ${formatMoney(saving, ctx.price)} compared with paying monthly`
                      : `Billed once a year`}
                </li>
              )}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
