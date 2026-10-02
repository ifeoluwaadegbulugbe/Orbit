import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { helpGroups } from "@/data/help";
import { faqJsonLd, jsonLdGraph } from "@/lib/jsonld";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = buildMetadata({
  title: "Orbit Help Center",
  description: "Answers to common questions about bookings, payments, billing, and getting started with Orbit.",
  path: "/help",
});

export default function HelpPage() {
  const allFaqs = helpGroups.flatMap((g) => g.items);

  return (
    <>
      <div className="px-6 pt-10">
        <div className="mx-auto max-w-2xl">
          <Breadcrumbs items={[{ name: "Help", path: "/help" }]} />
        </div>
      </div>
      <section className="px-6 pb-16 text-center">
        <div className="mx-auto max-w-2xl space-y-5">
          <h1 className="text-4xl font-semibold tracking-tight text-ink">Help center</h1>
          <p className="text-lg text-ink-muted">
            Can't find what you need? Email{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-primary-600 underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </section>
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-2xl space-y-14">
          {helpGroups.map((group) => (
            <div key={group.topic}>
              <h2 className="text-xl font-semibold text-ink mb-5">{group.topic}</h2>
              <FAQAccordion items={group.items} />
            </div>
          ))}
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdGraph(faqJsonLd(allFaqs)) }} />
    </>
  );
}
