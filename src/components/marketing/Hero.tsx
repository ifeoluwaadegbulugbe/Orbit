"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BookingApprovalMockup } from "@/components/mockups/BookingApprovalMockup";
import { appLink } from "@/site.config";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  return (
    <section className="hero-wash relative overflow-hidden px-6 pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <Badge>Built for African service businesses</Badge>
          </div>
          <h1 className="text-5xl font-semibold leading-[1.03] tracking-tight text-ink md:text-7xl">
            Run your business.
            <br />
            <span className="text-primary-500">Not the admin.</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl lg:mx-0">
            {"Get booked. Get paid. Keep your clients. Orbit gives you one place to manage clients, bookings, payments, and follow-ups, while automation handles the admin in between."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Button href={appLink("/signup")} size="lg" onClick={() => trackEvent({ name: "signup_start", location: "hero" })}>
              Start free
            </Button>
            <Button href="/pricing" variant="secondary" size="lg">
              See pricing
            </Button>
          </div>
          <p className="text-sm text-ink-muted">Free to start. No credit card required.</p>
        </div>
        <div>
          <BookingApprovalMockup />
        </div>
      </div>
    </section>
  );
}
