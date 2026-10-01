import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { PricingCards } from "./PricingCards";

export function PricingTeaser() {
  return (
    <section className="px-6 py-20 md:py-28 bg-white border-y border-border">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Pricing" title="Simple, flat subscription pricing" />
        <div className="mt-14">
          <PricingCards />
        </div>
        <div className="mt-10 text-center">
          <Link href="/pricing" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600">
            Compare every feature
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
