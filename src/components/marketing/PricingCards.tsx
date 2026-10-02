"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { appLink } from "@/site.config";
import { trackEvent } from "@/lib/analytics";
import { pricingPlans } from "@/data/pricing";

export function PricingCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
      {pricingPlans.map((plan) => (
        <div
          key={plan.name}
          className={`relative rounded-3xl bg-white p-8 md:p-10 ${
            plan.highlighted ? "border-2 border-primary-500 shadow-[var(--shadow-lg)]" : "border border-border"
          }`}
        >
          {plan.highlighted && (
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-4 py-1 text-xs font-semibold text-white">
              Most popular
            </span>
          )}
          <h3 className="text-xl font-semibold text-ink">{plan.name}</h3>
          <p className="text-sm text-ink-muted mt-1 mb-6">{plan.description}</p>
          <div className="flex items-end gap-1 mb-6">
            <span className="text-5xl font-semibold text-ink">{plan.price}</span>
            {plan.period && <span className="text-ink-muted mb-1.5">{plan.period}</span>}
          </div>
          <Button
            href={appLink("/signup", { utm_source: "pricing", utm_campaign: plan.name.toLowerCase() })}
            variant={plan.highlighted ? "primary" : "secondary"}
            className="w-full mb-8"
            onClick={() => trackEvent({ name: "signup_start", location: `pricing_${plan.name.toLowerCase()}` })}
          >
            {plan.cta}
          </Button>
          <ul className="space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-ink">
                <Check className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary-500" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
