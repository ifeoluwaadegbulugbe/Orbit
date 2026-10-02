"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { BookingLinkMockup } from "@/components/mockups/BookingLinkMockup";
import { professions } from "@/data/professions";

const shown = professions;

export function ProfessionTabs() {
  const [active, setActive] = useState(shown[0]!.slug);
  const current = shown.find((p) => p.slug === active) ?? shown[0]!;

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Built for your work" title="Whatever you do, Orbit fits how you run it" />
        <div className="mt-10 flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
          {shown.map((p) => (
            <button
              key={p.slug}
              onClick={() => setActive(p.slug)}
              aria-pressed={active === p.slug}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                active === p.slug ? "bg-primary-600 text-white" : "bg-white border border-border text-ink-muted hover:border-primary-300"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-12 rounded-2xl border border-border bg-white p-6 md:p-10 lg:grid-cols-2">
          <div className="space-y-5">
            <h3 className="font-display text-2xl font-semibold tracking-[-0.01em] text-ink md:text-3xl">{current.headline}</h3>
            <p className="text-ink-muted leading-relaxed">{current.description}</p>
            <ul className="space-y-3">
              {current.painPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-ink">
                  <Check className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary-500" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <Link href={`/for/${current.slug}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600">
              See the full {current.label.toLowerCase()} page
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="rounded-xl bg-[#f6f2ee] p-6 md:p-8">
            <BookingLinkMockup
              businessName={current.mockupBusinessName}
              role={current.mockupRole}
              services={current.mockupServices}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
