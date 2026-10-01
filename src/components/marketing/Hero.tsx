"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BookingApprovalMockup } from "@/components/mockups/BookingApprovalMockup";
import { appLink, whatsappLink } from "@/site.config";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  return (
    <section className="px-6 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="mx-auto max-w-7xl grid items-center gap-16 lg:grid-cols-2">
        <div className="space-y-7 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <Badge>Built for African service businesses</Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-ink leading-[1.08]">
            Run your business.
            <br />
            <span className="text-primary-500">Not the admin.</span>
          </h1>
          <p className="text-lg md:text-xl text-ink-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
            {"Get booked. Get paid. Keep your clients. Orbit gives you one place to manage clients, bookings, payments, and follow-ups, while automation handles the admin in between."}
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Button href={appLink("/signup")} size="lg" onClick={() => trackEvent({ name: "signup_start", location: "hero" })}>
              Start free
            </Button>
            <Button
              href={whatsappLink("Hi! I'd like to know more about Orbit.")}
              variant="secondary"
              size="lg"
              onClick={() => trackEvent({ name: "whatsapp_click", location: "hero" })}
            >
              Chat on WhatsApp
            </Button>
          </div>
          <p className="text-sm text-ink-muted">Free to start. No commission on your bookings.</p>
        </div>
        <div>
          <BookingApprovalMockup />
        </div>
      </div>
    </section>
  );
}
