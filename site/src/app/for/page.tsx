import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { professions } from "@/data/professions";
import { CtaBand } from "@/components/marketing/CtaBand";

export const metadata: Metadata = buildMetadata({
  title: "Orbit for Every Service Business",
  description: "See how Orbit fits nail technicians, hairstylists, photographers, makeup artists, and barbers.",
  path: "/for",
});

export default function SolutionsIndexPage() {
  return (
    <>
      <div className="px-6 pt-10">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ name: "Solutions", path: "/for" }]} />
        </div>
      </div>
      <section className="px-6 pb-16 text-center">
        <div className="mx-auto max-w-2xl space-y-5">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink">Built for your kind of business</h1>
          <p className="text-lg text-ink-muted">Orbit works the same way under the hood. The details change for how you actually work.</p>
        </div>
      </section>
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader title="Choose your profession" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {professions.map((p) => (
              <Link
                key={p.slug}
                href={`/for/${p.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-border bg-white p-6 hover:border-primary-300"
              >
                <span className="font-medium text-ink">{p.label}</span>
                <ArrowRight className="h-4 w-4 text-ink-muted transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand location="solutions_index" />
    </>
  );
}
