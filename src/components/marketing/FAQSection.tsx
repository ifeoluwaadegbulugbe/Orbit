import { SectionHeader } from "./SectionHeader";
import { FAQAccordion, type FaqItem } from "./FAQAccordion";
import { faqJsonLd, jsonLdGraph } from "@/lib/jsonld";

export function FAQSection({ items, id = "faq" }: { items: FaqItem[]; id?: string }) {
  return (
    <section id={id} className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeader eyebrow="FAQ" title="Questions people ask before they start" />
        <div className="mt-12">
          <FAQAccordion items={items} />
        </div>
      </div>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdGraph(faqJsonLd(items)) }}
      />
    </section>
  );
}
