import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Callout } from "@/components/ui/Callout";
import { ComparisonTable, type ComparisonRow } from "@/components/marketing/ComparisonTable";
import { FAQSection } from "@/components/marketing/FAQSection";
import { CtaBand } from "@/components/marketing/CtaBand";
import type { FaqItem } from "@/components/marketing/FAQAccordion";

export interface ComparePageData {
  slug: string;
  competitorName: string;
  h1: string;
  intro: string;
  columns: string[];
  rows: ComparisonRow[];
  body: ReactNode;
  faqs: FaqItem[];
}

export function ComparePageTemplate({ data }: { data: ComparePageData }) {
  return (
    <>
      <div className="px-6 pt-10">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs items={[{ name: "Compare", path: "/compare/whatsapp-and-spreadsheets" }, { name: data.competitorName, path: `/compare/${data.slug}` }]} />
        </div>
      </div>
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-3xl space-y-5">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink leading-[1.1]">{data.h1}</h1>
          <p className="text-lg text-ink-muted leading-relaxed">{data.intro}</p>
          <Callout type="info">
            Pricing and features on third-party platforms change over time. The comparison below reflects Orbit's own pricing model
            and structure; confirm {data.competitorName}'s current terms directly on their site before relying on this page for a
            purchase decision.
          </Callout>
        </div>
      </section>
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-3xl">
          <ComparisonTable columns={data.columns} rows={data.rows} />
        </div>
      </section>
      <section className="px-6 py-16 bg-white border-y border-border">
        <div className="mx-auto max-w-3xl prose-article">{data.body}</div>
      </section>
      <FAQSection items={data.faqs} id={`faq-${data.slug}`} />
      <CtaBand location={`compare_${data.slug}`} />
    </>
  );
}
