import { SectionHeader } from "./SectionHeader";
import { ArrowRight } from "lucide-react";

const steps = ["Booking approved", "Deposit requested", "Invoice sent", "Payment recorded", "Follow-up scheduled"];

export function AutomationFlowSection() {
  return (
    <section className="px-6 py-20 md:py-28 bg-white border-y border-border">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Automations"
          title="Set it up once, and the admin runs itself"
          description="Each job feeds the next automatically. You still make every real decision; Orbit just stops you from having to remember the busywork in between."
        />
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <div className="rounded-xl border border-border bg-[var(--color-bg)] px-5 py-3 text-sm font-medium text-ink">
                {step}
              </div>
              {i < steps.length - 1 && <ArrowRight className="h-4 w-4 text-ink-muted flex-shrink-0" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
