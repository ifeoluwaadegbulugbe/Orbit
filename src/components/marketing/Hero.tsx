"use client";

import { Button } from "@/components/ui/Button";
import { OrbitDashboard } from "@/components/home/OrbitDashboard";
import { appLink } from "@/site.config";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  return (
    <section className="relative px-6 pt-14 md:pt-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="hero-enter mb-6 inline-flex items-center rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-ink-muted">
          The business OS for service businesses
        </p>
        <h1 className="hero-enter hero-enter-2 font-display text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.02em] text-ink sm:text-6xl md:text-7xl">
          Run your business.
          <br />
          <span className="text-brand">Not the admin.</span>
        </h1>
        <p className="hero-enter hero-enter-3 mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl">
          Orbit is booking, invoicing and client management software for service businesses in Africa. Take online
          bookings, get paid and keep every client in one place, not scattered across WhatsApp.
        </p>
        <div className="hero-enter hero-enter-4 mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Button href={appLink("/signup")} size="lg" onClick={() => trackEvent({ name: "signup_start", location: "hero" })}>
            Try Orbit free
          </Button>
          <Button href="#how-it-works" variant="secondary" size="lg">
            See how it works
          </Button>
        </div>
        <p className="hero-enter hero-enter-4 mt-4 text-sm text-ink-muted">Free for up to 10 clients. No card needed.</p>
      </div>

      <div className="hero-enter hero-enter-4 mx-auto mt-14 max-w-5xl pb-4 md:mt-16">
        <OrbitDashboard />
      </div>
    </section>
  );
}
