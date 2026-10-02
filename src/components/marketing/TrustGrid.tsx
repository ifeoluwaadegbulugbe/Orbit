import { Tag, ShieldCheck, Globe2, Gift, Unlock, Lock } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const points = [
  { icon: Tag, title: "Flat $12/month", description: "Pro never changes based on how much you book or earn." },
  { icon: ShieldCheck, title: "You approve every booking", description: "Nothing lands on your calendar without your say-so." },
  { icon: Globe2, title: "Built for African payments", description: "Cards, bank transfers, and mobile money, depending on your country." },
  { icon: Gift, title: "Free to start", description: "Up to 10 clients, no card required." },
  { icon: Unlock, title: "Cancel anytime", description: "Monthly billing, no long-term contract." },
  { icon: Lock, title: "Encrypted transactions", description: "Orbit Wallet payments are encrypted end to end." },
];

export function TrustGrid() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Why Orbit" title="What you're actually signing up for" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={i * 60} className="h-full">
            <div className="group flex h-full items-start gap-3 rounded-2xl border border-border bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-[var(--shadow-md)]">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50">
                <point.icon className="h-4 w-4 text-primary-600" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">{point.title}</p>
                <p className="mt-0.5 text-sm text-ink-muted leading-relaxed">{point.description}</p>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
