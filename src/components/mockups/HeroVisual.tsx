"use client";

import { useState } from "react";
import { Check, X, Clock, Wallet, RotateCcw } from "lucide-react";

type Decision = "pending" | "approved" | "declined";

const bars = [38, 52, 44, 66, 58, 80, 72];

/**
 * Hero product visual: a flat brand-color canvas holding two crisp UI cards.
 * The booking card is interactive (approve or decline it) to show the
 * owner-approval flow rather than just describing it.
 */
export function HeroVisual() {
  const [decision, setDecision] = useState<Decision>("pending");

  return (
    <div className="relative mx-auto max-w-sm pb-8 pl-2 pr-6 pt-6 md:pl-4 md:pr-10">
      <div className="relative rounded-[28px] bg-primary-500 p-6 md:p-8" style={{ minHeight: 440 }}>
        <div className="rounded-2xl bg-surface p-5" style={{ boxShadow: "var(--shadow-float)" }}>
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

          {decision === "pending" ? (
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={() => setDecision("approved")}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-action py-2.5 text-xs font-semibold text-white transition-colors hover:bg-action-hover"
              >
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
                Approve
              </button>
              <button
                type="button"
                onClick={() => setDecision("declined")}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-border py-2.5 text-xs font-semibold text-ink-muted transition-colors hover:bg-primary-50"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
                Decline
              </button>
            </div>
          ) : (
            <div className="mt-4 flex items-center justify-between rounded-xl bg-primary-50 px-3 py-2.5" role="status">
              <span className="text-xs font-semibold text-primary-800">
                {decision === "approved" ? "Approved, added to your calendar" : "Declined, client notified"}
              </span>
              <button
                type="button"
                onClick={() => setDecision("pending")}
                aria-label="Reset demo"
                className="text-primary-700 hover:text-primary-900"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>

        <div className="mt-4 rounded-2xl bg-surface p-5" style={{ boxShadow: "var(--shadow-float)" }}>
          <div className="flex items-baseline justify-between">
            <p className="text-xs text-ink-muted">This week</p>
            <p className="text-sm font-semibold text-ink">₦148,500</p>
          </div>
          <div className="mt-3 flex h-14 items-end gap-1.5">
            {bars.map((height, i) => (
              <div
                key={i}
                className={`flex-1 rounded-sm transition-colors ${i === bars.length - 2 ? "bg-primary-500" : "bg-primary-100"}`}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute -top-2 right-0 z-20 flex items-center gap-2.5 rounded-2xl bg-surface px-4 py-3"
        style={{ boxShadow: "var(--shadow-float)" }}
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-50">
          <Check className="h-4 w-4 text-brand" aria-hidden="true" />
        </div>
        <div>
          <p className="text-[11px] text-ink-muted">Booking confirmed</p>
          <p className="text-sm font-semibold text-ink">Thu, 2:00 PM</p>
        </div>
      </div>

      <div
        className="absolute bottom-2 left-0 z-20 flex items-center gap-2.5 rounded-2xl bg-surface px-4 py-3"
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
