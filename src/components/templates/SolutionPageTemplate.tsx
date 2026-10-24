import { Check } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BookingLinkMockup } from "@/components/mockups/BookingLinkMockup";
import { FAQSection } from "@/components/marketing/FAQSection";
import { CtaBand } from "@/components/marketing/CtaBand";
import type { ProfessionContent } from "@/data/professions";

const sharedFaqs = [
  {
    question: "What does Orbit cost?",
    answer:
      "Orbit is free for up to 10 clients. Pro has a flat price however many clients or bookings you have, and the price depends on your country. See the pricing page for yours.",
  },
  {
    question: "Is there a free plan?",
    answer: "Yes, up to 10 clients, with your booking link and invoicing included.",
  },
];

export function SolutionPageTemplate({ profession }: { profession: ProfessionContent }) {
  return (
    <>
      <div className="px-6 pt-10">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ name: "Solutions", path: "/for" }, { name: profession.label, path: `/for/${profession.slug}` }]} />
        </div>
      </div>

      <section className="px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl grid items-center gap-14 lg:grid-cols-2">
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <Badge>For {profession.label.toLowerCase()}</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink leading-[1.1]">{profession.headline}</h1>
            <p className="text-lg text-ink-muted leading-relaxed max-w-lg mx-auto lg:mx-0">{profession.description}</p>
            <div className="flex justify-center lg:justify-start">
              <Button href="/pricing">Start free</Button>
            </div>
          </div>
          <div>
            <BookingLinkMockup
              businessName={profession.mockupBusinessName}
              role={profession.mockupRole}
              services={profession.mockupServices}
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-surface border-y border-border">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-8 text-center">
            Built around what {profession.label.toLowerCase()} actually need
          </h2>
          <ul className="space-y-4">
            {profession.painPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 rounded-2xl border border-border bg-[var(--color-bg)] p-5">
                <Check className="h-5 w-5 flex-shrink-0 mt-0.5 text-brand" aria-hidden="true" />
                <span className="text-ink">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQSection items={sharedFaqs} id={`faq-${profession.slug}`} />
      <CtaBand location={`solutions_${profession.slug}`} />
    </>
  );
}
