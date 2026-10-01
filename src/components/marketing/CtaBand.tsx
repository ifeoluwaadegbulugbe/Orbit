"use client";

import { Button } from "@/components/ui/Button";
import { appLink } from "@/site.config";
import { trackEvent } from "@/lib/analytics";

export function CtaBand({
  title = "Run your business. Not the admin.",
  description = "Start free in minutes. No card required.",
  location,
}: {
  title?: string;
  description?: string;
  location: string;
}) {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-gradient-to-br from-primary-50 to-white p-10 md:p-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-4">{title}</h2>
        <p className="text-lg text-ink-muted mb-8 max-w-xl mx-auto">{description}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            href={appLink("/signup")}
            size="lg"
            onClick={() => trackEvent({ name: "signup_start", location })}
          >
            Start free
          </Button>
          <Button href="/pricing" variant="secondary" size="lg">
            See pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
