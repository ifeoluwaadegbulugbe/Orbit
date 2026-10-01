import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { PricingCards } from "@/components/marketing/PricingCards";
import { ComparisonTable } from "@/components/marketing/ComparisonTable";
import { FAQSection } from "@/components/marketing/FAQSection";
import { CtaBand } from "@/components/marketing/CtaBand";
import { pricingFaqs } from "@/data/faq-pricing";

export const metadata: Metadata = buildMetadata({
  title: "Orbit Pricing: Simple, Flat Plans for Service Businesses",
  description:
    "Orbit pricing: start free with up to 10 clients, or go Pro for $12/month with unlimited clients and Orbit Wallet. Flat subscription, no hidden fees.",
  path: "/pricing",
});

const comparisonRows = [
  { label: "Clients", values: ["Up to 10", "Unlimited"] },
  { label: "Booking Link", values: [true, true] },
  { label: "Owner approval on bookings", values: [true, true] },
  { label: "Manual invoicing", values: [true, true] },
  { label: "Orbit Wallet", values: [false, true] },
  { label: "Orbit Wallet processing fee", values: ["—", "2.5% per transaction"] },
  { label: "Automations & follow-ups", values: [false, true] },
  { label: "Advanced insights", values: [false, true] },
  { label: "Custom templates", values: [false, true] },
  { label: "Priority support", values: [false, true] },
];

export default function PricingPage() {
  return (
    <>
      <div className="px-6 pt-10">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ name: "Pricing", path: "/pricing" }]} />
        </div>
      </div>
      <section className="px-6 pb-16 text-center">
        <div className="mx-auto max-w-2xl space-y-5">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink">Simple, flat subscription pricing</h1>
          <p className="text-lg text-ink-muted">Start free. Upgrade when Orbit Wallet pays for itself.</p>
        </div>
      </section>
      <section className="px-6 pb-20">
        <PricingCards />
      </section>
      <section className="px-6 py-20 bg-white border-y border-border">
        <div className="mx-auto max-w-4xl">
          <SectionHeader title="Compare plans" />
          <div className="mt-10">
            <ComparisonTable columns={["Free", "Pro — $12/mo"]} rows={comparisonRows} />
          </div>
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-ink">How Orbit Wallet pricing works</h2>
          <p className="text-ink-muted leading-relaxed">
            The $12/month Pro subscription is flat, whether you have 10 clients or 1,000. It never changes based on how much you book or earn.
          </p>
          <p className="text-ink-muted leading-relaxed">
            Orbit Wallet, the optional way to get paid directly through Orbit, carries a standard 2.5% processing fee per transaction, the same kind of fee any card processor charges. It only applies to payments that actually go through Orbit Wallet, not to your subscription or to invoices you track manually.
          </p>
        </div>
      </section>
      <FAQSection items={pricingFaqs} id="pricing-faq" />
      <CtaBand location="pricing_page" />
    </>
  );
}
