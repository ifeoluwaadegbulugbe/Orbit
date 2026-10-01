import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { CtaBand } from "@/components/marketing/CtaBand";
import { fourJobs } from "@/data/jobs";
import { Check } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "About Orbit",
  description: "Orbit's mission, who it's built for, how it works, and the principles behind it.",
  path: "/about",
});

const principles = [
  "A flat subscription that doesn't change based on how much you book or earn.",
  "You approve every booking. Orbit never confirms one for you.",
  "Built for how African service businesses actually get booked: Instagram, WhatsApp, and word of mouth.",
  "The admin should be invisible. The business should be yours.",
];

export default function AboutPage() {
  return (
    <>
      <div className="px-6 pt-10">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs items={[{ name: "About", path: "/about" }]} />
        </div>
      </div>
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-3xl space-y-5">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink">About Orbit</h1>
          <p className="text-lg text-ink-muted leading-relaxed">
            Orbit is the system a service business runs on: one place to get booked, get paid, and keep clients coming back,
            built for solo and small-team service professionals across Africa.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 bg-white border-y border-border">
        <div className="mx-auto max-w-3xl space-y-5">
          <h2 className="text-2xl font-semibold text-ink">Who Orbit is for</h2>
          <p className="text-ink-muted leading-relaxed">
            Nail technicians, hairstylists, photographers, makeup artists, barbers, and similar solo or small-team service
            providers who get real, recurring clients and get paid directly by them, but currently coordinate it all by hand
            across WhatsApp, Instagram, and a notebook or spreadsheet.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeader title="How Orbit works" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {fourJobs.map((job) => (
              <div key={job.href} className="rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-sm)]">
                <div
                  className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${
                    job.tint === "primary" ? "bg-primary-50 text-primary-600" : "bg-accent-50 text-accent-700"
                  }`}
                >
                  <job.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-semibold text-ink">{job.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-white border-y border-border">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-ink mb-8 text-center">Principles</h2>
          <ul className="space-y-4">
            {principles.map((principle) => (
              <li key={principle} className="flex items-start gap-3">
                <Check className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary-500" aria-hidden="true" />
                <span className="text-ink">{principle}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand location="about" />
    </>
  );
}
