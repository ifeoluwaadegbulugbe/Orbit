import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PricingCalculatorTool } from "@/components/marketing/tools/PricingCalculatorTool";

export const metadata: Metadata = buildMetadata({
  title: "Service Pricing Calculator",
  description: "Work out what to charge for a service based on materials, time, and your target margin. Free calculator.",
  path: "/resources/pricing-calculator",
});

export default function PricingCalculatorPage() {
  return (
    <div className="px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <Breadcrumbs items={[{ name: "Resources", path: "/resources" }, { name: "Pricing calculator", path: "/resources/pricing-calculator" }]} />
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-3">Service pricing calculator</h1>
        <p className="text-ink-muted mb-10 max-w-2xl">
          A quick way to sanity-check what you're charging against your actual costs and time.
        </p>
        <PricingCalculatorTool />
      </div>
    </div>
  );
}
