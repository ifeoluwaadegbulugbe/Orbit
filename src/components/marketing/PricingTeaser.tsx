import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { appLink } from "@/site.config";

const plans = [
  {
    name: "Free",
    line: "Up to 10 clients",
    points: ["Booking link and owner approval", "Client management and reminders", "Invoicing", "Email support"],
  },
  {
    name: "Pro",
    line: "Unlimited clients",
    points: ["Everything in Free", "Automations and follow-ups", "Advanced insights and custom templates", "Priority support"],
  },
];

/**
 * Homepage pricing summary. It shows no amounts on purpose: prices depend on the
 * visitor's country and live on /pricing, so this page can stay static.
 */
export function PricingTeaser() {
  return (
    <section className="border-y border-border bg-surface px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Pricing" title="Simple pricing. Start free." description="Upgrade when you outgrow 10 clients." />
        <Reveal className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-ink">{plan.name}</h3>
              <p className="mt-1 text-sm text-ink-muted">{plan.line}</p>
              <ul className="mt-6 space-y-3">
                {plan.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-ink">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href={appLink("/signup", { utm_source: "home_pricing", utm_campaign: "free" })}>Start free</Button>
          <Link href="/pricing" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand">
            See prices for your country
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
