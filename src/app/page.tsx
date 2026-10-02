import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/marketing/Hero";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { ProfessionTabs } from "@/components/marketing/ProfessionTabs";
import { PricingTeaser } from "@/components/marketing/PricingTeaser";
import { FinePrint } from "@/components/marketing/FinePrint";
import { FAQSection } from "@/components/marketing/FAQSection";
import { CtaBand } from "@/components/marketing/CtaBand";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { ProductTabs } from "@/components/home/ProductTabs";
import { AutomationTimeline } from "@/components/home/AutomationTimeline";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { homeFaqs } from "@/data/faq-home";

export const metadata: Metadata = buildMetadata({
  title: "Orbit: Get Booked, Get Paid, Keep Your Clients",
  description:
    "Orbit is booking, invoicing, and client management software for African service businesses. One flat subscription, and you approve every booking yourself.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mt-20 border-y border-border bg-white px-6 py-20 md:mt-28 md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeader
            eyebrow="The problem"
            title={
              <>
                Your business lives in six places. <span className="text-ink-muted">Orbit puts it in one.</span>
              </>
            }
          />
          <div className="mt-12">
            <BeforeAfter />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-20 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="How it works"
            title={
              <>
                Four jobs, one system. <span className="text-ink-muted">Try them.</span>
              </>
            }
            description="These are working demos, not screenshots. Click around."
          />
          <div className="mt-12">
            <Reveal>
              <ProductTabs />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#17120f] px-6 py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-300">Automations</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.015em] md:text-5xl">
              The admin that runs itself. <span className="text-white/55">Set it once.</span>
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/65">
              Orbit confirms, reminds, collects deposits and nudges clients to rebook. You keep making the decisions. It
              handles the follow-through.
            </p>
            <Link
              href="/product/automations"
              className="group mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-primary-300"
            >
              See automations
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <AutomationTimeline />
          </Reveal>
        </div>
      </section>

      <ProfessionTabs />
      <PricingTeaser />
      <FinePrint />
      <FAQSection items={homeFaqs} id="faq" />
      <CtaBand location="home_final" />
    </>
  );
}
