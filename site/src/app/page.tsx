import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero";
import { ProblemSection } from "@/components/marketing/ProblemSection";
import { FourJobsBento } from "@/components/marketing/FourJobsBento";
import { OwnerControlSection } from "@/components/marketing/OwnerControlSection";
import { AutomationFlowSection } from "@/components/marketing/AutomationFlowSection";
import { ProfessionTabs } from "@/components/marketing/ProfessionTabs";
import { PricingTeaser } from "@/components/marketing/PricingTeaser";
import { FAQSection } from "@/components/marketing/FAQSection";
import { CtaBand } from "@/components/marketing/CtaBand";
import { buildMetadata } from "@/lib/metadata";
import { homeFaqs } from "@/data/faq-home";

export const metadata: Metadata = buildMetadata({
  title: "Orbit: Get Booked, Get Paid, Keep Your Clients",
  description:
    "Orbit is booking, invoicing, and client management software for African service businesses. Flat pricing, no commission on bookings, and you approve every booking yourself.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* No social-proof strip: no real user counts or logos exist yet to show. See content/TODO-verify.md. */}
      <ProblemSection />
      <FourJobsBento />
      <OwnerControlSection />
      <AutomationFlowSection />
      <ProfessionTabs />
      <PricingTeaser />
      {/* No testimonials section: no real customer quotes exist yet. See content/TODO-verify.md. */}
      <FAQSection items={homeFaqs} id="faq" />
      <CtaBand location="home_final" />
    </>
  );
}
