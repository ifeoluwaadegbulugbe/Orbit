import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { FeatureCard } from "@/components/marketing/FeatureCard";
import { CtaBand } from "@/components/marketing/CtaBand";
import { fourJobs } from "@/data/jobs";

export const metadata: Metadata = buildMetadata({
  title: "Product: Booking, Payments, Clients & Insights",
  description:
    "Orbit brings booking, payments, client management, automations, and insights into one workspace built for service businesses.",
  path: "/product",
});

export default function ProductOverviewPage() {
  return (
    <>
      <div className="px-6 pt-10">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ name: "Product", path: "/product" }]} />
        </div>
      </div>
      <section className="px-6 pb-16 md:pb-24 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink">
            One workspace for the four jobs your business runs on
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed">
            Booking, payments, clients, and insights, connected by automation, so progress in one shows up everywhere else.
          </p>
        </div>
      </section>
      <section className="px-6 py-20 bg-white border-y border-border">
        <div className="mx-auto max-w-6xl">
          <SectionHeader title="Explore each job" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {fourJobs.map((job) => (
              <FeatureCard
                key={job.href}
                icon={job.icon}
                title={job.title}
                description={job.description}
                href={job.href}
                tint={job.tint}
              />
            ))}
          </div>
        </div>
      </section>
      <CtaBand location="product_overview" />
    </>
  );
}
