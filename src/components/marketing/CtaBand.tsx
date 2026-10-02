"use client";

import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
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
      <Reveal>
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#17120f] p-10 text-center md:p-16">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-white/70">{description}</p>
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
      </Reveal>
    </section>
  );
}
