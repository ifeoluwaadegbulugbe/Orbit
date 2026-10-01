import { Check, X, Clock, Wallet } from "lucide-react";

/**
 * Hero product visual: a warm gradient canvas holding the booking-approval
 * card, with small floating stat chips at the edges for depth. Inspired by
 * how fintech product sites (e.g. layered gradient canvases with floating
 * UI chips) stage a single screenshot, adapted to Orbit's own palette and
 * content rather than copied.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-sm pt-6 pb-8 pl-2 pr-6 md:pl-4 md:pr-10">
      <div
        className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-primary-300 via-primary-400 to-accent-300 p-7 md:p-9"
        style={{ minHeight: 420 }}
      >
        <div className="glow absolute -left-10 -top-10 h-40 w-40 bg-white opacity-40 blur-3xl" aria-hidden="true" />
        <div className="glow glow-accent absolute -bottom-10 -right-6 h-36 w-36 opacity-50" aria-hidden="true" />

        <div className="relative z-10 rounded-[22px] bg-white p-5" style={{ boxShadow: "var(--shadow-float)" }}>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700">
              AT
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">Ada T.</p>
              <p className="text-xs text-ink-muted">Gel manicure, 45 min</p>
            </div>
            <Clock className="ml-auto h-4 w-4 text-ink-muted/60" aria-hidden="true" />
          </div>
          <div className="mt-4 space-y-1 border-t border-border pt-4 text-xs text-ink-muted">
            <p>Thursday, 2:00 PM</p>
            <p>Deposit: ₦2,500 paid</p>
          </div>
          <div className="mt-4 flex gap-2">
            <button className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary-500 py-2.5 text-xs font-semibold text-white">
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
              Approve
            </button>
            <button className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-border py-2.5 text-xs font-semibold text-ink-muted">
              <X className="h-3.5 w-3.5" aria-hidden="true" />
              Decline
            </button>
          </div>
        </div>
      </div>

      <div
        className="absolute -top-2 right-0 z-20 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3"
        style={{ boxShadow: "var(--shadow-float)" }}
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-50">
          <Check className="h-4 w-4 text-primary-600" aria-hidden="true" />
        </div>
        <div>
          <p className="text-[11px] text-ink-muted">Booking confirmed</p>
          <p className="text-sm font-semibold text-ink">Thu, 2:00 PM</p>
        </div>
      </div>

      <div
        className="absolute bottom-2 left-0 z-20 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3"
        style={{ boxShadow: "var(--shadow-float)" }}
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-50">
          <Wallet className="h-4 w-4 text-accent-700" aria-hidden="true" />
        </div>
        <div>
          <p className="text-[11px] text-ink-muted">Orbit Wallet</p>
          <p className="text-sm font-semibold text-ink">₦2,500 received</p>
        </div>
      </div>
    </div>
  );
}
