import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getPricingContext } from "@/lib/pricingRegion";
import { jsonLdGraph, pricingJsonLd } from "@/lib/jsonld";
import { orbitPayFeeText, type PricingContext } from "@/data/regions";
import { getPricingFaqs } from "@/data/faq-pricing";
import { COMING_SOON_LINE } from "@/data/pricing";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { PricingCards } from "@/components/marketing/PricingCards";
import { CountrySwitch } from "@/components/marketing/CountrySwitch";
import { ComparisonTable } from "@/components/marketing/ComparisonTable";
import { FAQSection } from "@/components/marketing/FAQSection";
import { CtaBand } from "@/components/marketing/CtaBand";

const title = "Orbit pricing: free for up to 10 clients";

export const metadata: Metadata = {
  ...buildMetadata({
    title,
    description:
      "Run bookings, clients and payments in one place. Start free, upgrade to Pro for unlimited clients. Payments settle straight to your bank via Paystack.",
    path: "/pricing",
  }),
  // The site title template would add "| Orbit" after a title that already starts with Orbit.
  title: { absolute: title },
};

function comparisonRows(ctx: PricingContext) {
  return [
    { label: "Clients", values: ["Up to 10", "Unlimited"] },
    { label: "Booking link", values: [true, true] },
    { label: "Owner approval on bookings", values: [true, true] },
    { label: "Client management and reminders", values: [true, true] },
    { label: "Invoicing", values: [true, true] },
    {
      label: "Orbit Pay fee",
      values: ctx.orbitPay ? [orbitPayFeeText("free"), orbitPayFeeText("pro")] : ["Coming soon", "Coming soon"],
    },
    { label: "Automations and follow-ups", values: [false, true] },
    { label: "Advanced insights", values: [false, true] },
    { label: "Custom templates", values: [false, true] },
    { label: "Support", values: ["Email", "Priority"] },
  ];
}

export default async function PricingPage() {
  const ctx = await getPricingContext();

  return (
    <>
      <div className="px-6 pt-10">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ name: "Pricing", path: "/pricing" }]} />
        </div>
      </div>
      <section className="px-6 pb-10 text-center">
        <div className="mx-auto max-w-2xl space-y-5">
          <h1 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">Simple pricing. Start free.</h1>
          <p className="text-lg text-ink-muted">
            Run your bookings, clients and payments in one place. Upgrade when you outgrow 10 clients.
          </p>
          <CountrySwitch ctx={ctx} />
        </div>
      </section>
      <section className="px-6 pb-20">
        <PricingCards ctx={ctx} />
      </section>
      <section className="border-y border-border bg-surface px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeader title="Compare plans" />
          <div className="mt-10">
            <ComparisonTable columns={["Free", "Pro"]} rows={comparisonRows(ctx)} />
          </div>
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <h2 className="text-2xl font-semibold text-ink md:text-3xl">How Orbit Pay works</h2>
          {ctx.orbitPay ? (
            <>
              <p className="leading-relaxed text-ink-muted">
                Orbit Pay lets clients pay deposits and invoices by card or bank transfer. Payments are processed by Paystack, a
                licensed payment processor, and settle straight into your own bank account. Orbit never holds your money.
              </p>
              <p className="leading-relaxed text-ink-muted">
                You choose whether you or your client covers the processing fee. Your subscription price never changes with how
                much you earn.
              </p>
            </>
          ) : (
            <>
              <p className="leading-relaxed text-ink-muted">{COMING_SOON_LINE}.</p>
              <p className="leading-relaxed text-ink-muted">
                Until then you can send invoices and record bank transfers and cash yourself at no fee. Your subscription price
                never changes with how much you earn.
              </p>
            </>
          )}
        </div>
      </section>
      <FAQSection items={getPricingFaqs(ctx)} id="pricing-faq" />
      <CtaBand location="pricing_page" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdGraph(pricingJsonLd(ctx)) }} />
    </>
  );
}
