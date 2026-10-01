import { SectionHeader } from "./SectionHeader";
import { ScheduleMockup } from "@/components/mockups/ScheduleMockup";
import { ShieldCheck } from "lucide-react";

export function OwnerControlSection() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl grid items-center gap-14 lg:grid-cols-2">
        <div className="space-y-6 order-2 lg:order-1">
          <SectionHeader
            align="left"
            eyebrow="You stay in control"
            title="Nothing is confirmed until you say yes"
            description="A booking request shows up, you check it against your real schedule, and you approve or decline it yourself. Your calendar never fills up with something you didn't agree to."
          />
          <div className="flex items-start gap-3 rounded-xl border border-border bg-white p-4">
            <ShieldCheck className="h-5 w-5 flex-shrink-0 text-primary-600 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-ink-muted">
              This is different from marketplace apps that auto-confirm bookings for you. With Orbit, you're always the one deciding what goes on your schedule.
            </p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <ScheduleMockup />
        </div>
      </div>
    </section>
  );
}
