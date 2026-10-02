"use client";

import { Bell, Check, Wallet } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { appLink } from "@/site.config";
import { trackEvent } from "@/lib/analytics";

const chips = [
  { icon: Check, text: "Booking confirmed", pos: "left-[4%] top-[18%] -rotate-3", tone: "bg-primary-50 text-primary-700" },
  { icon: Wallet, text: "₦2,500 received", pos: "right-[5%] top-[30%] rotate-2", tone: "bg-success-soft text-success" },
  { icon: Bell, text: "Reminder sent", pos: "left-[9%] bottom-[14%] rotate-2", tone: "bg-accent-50 text-accent-700" },
];

export function CtaBand({
  title,
  description = "Free for up to 10 clients. No card needed.",
  location,
}: {
  title?: React.ReactNode;
  description?: string;
  location: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-border bg-surface px-6 py-24 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        {chips.map((c) => (
          <div
            key={c.text}
            className={`absolute ${c.pos} flex items-center gap-2 rounded-xl bg-surface px-3.5 py-2.5 text-sm font-medium text-ink`}
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <span className={`flex h-6 w-6 items-center justify-center rounded-md ${c.tone}`}>
              <c.icon className="h-3.5 w-3.5" />
            </span>
            {c.text}
          </div>
        ))}
      </div>

      <Reveal>
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-6xl">
            {title ?? (
              <>
                Run your business.
                <br />
                <span className="text-brand">Not the admin.</span>
              </>
            )}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg text-ink-muted">{description}</p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button
              href={appLink("/signup")}
              size="lg"
              onClick={() => trackEvent({ name: "signup_start", location })}
            >
              Try Orbit free
            </Button>
            <Button href="/pricing" variant="secondary" size="lg">
              See pricing
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
