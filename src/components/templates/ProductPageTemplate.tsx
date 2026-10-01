import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { FAQSection } from "@/components/marketing/FAQSection";
import { CtaBand } from "@/components/marketing/CtaBand";
import type { FaqItem } from "@/components/marketing/FAQAccordion";

export interface ProductPageData {
  breadcrumbLabel: string;
  path: string;
  eyebrow: string;
  h1: string;
  intro: string;
  mockup: ReactNode;
  problemTitle: string;
  problemBody: string[];
  features: { title: string; description: string }[];
  faqs: FaqItem[];
  ctaWhatsappMessage: string;
}

export function ProductPageTemplate({ data }: { data: ProductPageData }) {
  return (
    <>
      <div className="px-6 pt-10">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ name: "Product", path: "/product" }, { name: data.breadcrumbLabel, path: data.path }]} />
        </div>
      </div>

      <section className="px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl grid items-center gap-14 lg:grid-cols-2">
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <Badge>{data.eyebrow}</Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink leading-[1.1]">{data.h1}</h1>
            <p className="text-lg text-ink-muted leading-relaxed max-w-lg mx-auto lg:mx-0">{data.intro}</p>
            <div className="flex justify-center lg:justify-start">
              <Button href="/pricing">See pricing</Button>
            </div>
          </div>
          <div>{data.mockup}</div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20 bg-white border-y border-border">
        <div className="mx-auto max-w-3xl space-y-5">
          <h2 className="text-2xl md:text-3xl font-semibold text-ink">{data.problemTitle}</h2>
          {data.problemBody.map((paragraph, i) => (
            <p key={i} className="text-ink-muted leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeader title="What's included" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {data.features.map((feature) => (
              <div key={feature.title} className="flex gap-3 rounded-2xl border border-border bg-white p-6">
                <Check className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary-500" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-ink mb-1">{feature.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={data.faqs} id={`faq-${data.breadcrumbLabel.toLowerCase().replace(/\s+/g, "-")}`} />
      <CtaBand location={`product_${data.breadcrumbLabel.toLowerCase()}`} whatsappMessage={data.ctaWhatsappMessage} />
    </>
  );
}
