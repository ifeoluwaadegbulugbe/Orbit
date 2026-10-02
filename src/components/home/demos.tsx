"use client";

import { useEffect, useState } from "react";
import { Check, Loader2, Send } from "lucide-react";
import { CountUp } from "./CountUp";
import { useInView, usePrefersReducedMotion } from "@/lib/useInView";

/** Steps a looping demo forward only while visible and not hovered. */
function useDemoStep(last: number, ms: number) {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduced) {
      setStep(last);
      return;
    }
    if (!inView || paused) return;
    const id = setInterval(() => setStep((s) => (s >= last ? 0 : s + 1)), ms);
    return () => clearInterval(id);
  }, [inView, paused, reduced, last, ms]);

  return { ref, step, setStep, hover: { onMouseEnter: () => setPaused(true), onMouseLeave: () => setPaused(false) } };
}

const card = "rounded-xl border border-border bg-surface p-4";
const label = "text-[11px] font-semibold uppercase tracking-wider text-ink-muted/80";

/* ------------------------------------------------------------------ */
export function BookingDemo() {
  const { ref, step, setStep, hover } = useDemoStep(3, 2000);
  const caption = [
    "A client opens your Booking Link and picks a service.",
    "They choose a time that's really open.",
    "The request lands with you. Nothing is booked yet.",
    "You approve it. It's on your calendar.",
  ][step];

  return (
    <div ref={ref} {...hover} className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className={card}>
          <p className={label}>Client sees</p>
          <p className="mt-2 text-sm font-semibold text-ink">Glow by Ada</p>
          <ul className="mt-2 space-y-1.5">
            {["Gel manicure · 45 min", "Full set · 90 min"].map((s, i) => (
              <li
                key={s}
                className={`rounded-lg border px-3 py-2 text-sm transition-colors duration-300 ${
                  i === 0 && step >= 0 ? "border-primary-300 bg-primary-50 text-ink" : "border-border text-ink-muted"
                }`}
              >
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-3 flex gap-1.5">
            {["Wed 11:00", "Thu 2:00", "Fri 4:30"].map((t, i) => (
              <span
                key={t}
                className={`rounded-md border px-2 py-1 text-xs transition-colors duration-300 ${
                  i === 1 && step >= 1 ? "border-action bg-action text-white" : "border-border text-ink-muted"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
          <div
            className={`mt-3 rounded-lg px-3 py-2 text-center text-xs font-semibold transition-colors duration-300 ${
              step >= 3 ? "bg-success-soft text-success" : step === 2 ? "bg-accent-50 text-accent-700" : "bg-sunken text-ink-muted"
            }`}
          >
            {step >= 3 ? "Confirmed for Thu 2:00 PM" : step === 2 ? "Request sent. Waiting for approval" : "Request booking"}
          </div>
        </div>

        <div className={card}>
          <p className={label}>You see</p>
          <div className="mt-2 min-h-[8.5rem]">
            {step < 2 && <p className="pt-6 text-center text-sm text-ink-muted">No new requests</p>}
            {step === 2 && (
              <div className="feed-in rounded-lg border border-primary-200 bg-primary-50 p-3">
                <p className="text-sm font-semibold text-ink">Ada T. wants Thu 2:00 PM</p>
                <p className="text-xs text-ink-muted">Gel manicure · deposit ₦2,500 paid</p>
                <div className="mt-3 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="press flex items-center gap-1 rounded-md bg-action px-3 py-1.5 text-xs font-semibold text-white hover:bg-action-hover"
                  >
                    <Check className="h-3 w-3" aria-hidden="true" /> Approve
                  </button>
                  <span className="rounded-md border border-border bg-surface px-3 py-1.5 text-xs font-medium text-ink-muted">
                    Decline
                  </span>
                </div>
              </div>
            )}
            {step >= 3 && (
              <div className="feed-in rounded-lg border border-border p-3">
                <p className="text-xs font-semibold text-success">Added to calendar</p>
                <p className="mt-1 text-sm font-semibold text-ink">Thu 2:00 PM · Ada T.</p>
                <p className="text-xs text-ink-muted">Reminder goes out Wed 9:00 AM</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <p className="text-sm text-ink-muted" aria-live="polite">
        {caption}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
export function PaymentDemo() {
  const { ref, step, setStep, hover } = useDemoStep(3, 1900);
  const paid = step >= 2;
  const processing = step === 1;

  return (
    <div ref={ref} {...hover} className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-[1.2fr_1fr]">
        <div className={card}>
          <div className="flex items-center justify-between">
            <p className={label}>Invoice INV-0142</p>
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors duration-300 ${
                paid ? "bg-success-soft text-success" : processing ? "bg-accent-50 text-accent-700" : "bg-sunken text-ink-muted"
              }`}
            >
              {paid ? "Paid" : processing ? "Processing" : "Unpaid"}
            </span>
          </div>
          <dl className="mt-3 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-ink-muted">Client</dt>
              <dd className="font-medium text-ink">Chidinma O.</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-ink-muted">Full set + styling</dt>
              <dd className="font-medium text-ink">₦35,000</dd>
            </div>
            <div className="flex justify-between border-t border-border pt-2">
              <dt className="text-ink-muted">Due</dt>
              <dd className="font-medium text-ink">Today</dd>
            </div>
          </dl>
          <button
            type="button"
            onClick={() => setStep(paid ? 0 : 2)}
            className="press mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-action px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-action-hover"
          >
            {processing && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
            {paid ? "Replay payment" : "Pay ₦35,000"}
          </button>
        </div>

        <div className={card}>
          <p className={label}>Orbit Wallet</p>
          <p className="mt-2 font-display text-3xl font-semibold text-ink">
            <CountUp value={paid ? 155000 : 120000} prefix="₦" duration={800} />
          </p>
          <p className="text-xs text-ink-muted">Available to withdraw</p>
          <ul className="mt-4 space-y-1.5 text-xs">
            <li className={`flex items-center gap-2 transition-opacity duration-300 ${paid ? "opacity-100" : "opacity-40"}`}>
              <Check className="h-3.5 w-3.5 text-success" aria-hidden="true" /> Invoice marked paid
            </li>
            <li className={`flex items-center gap-2 transition-opacity duration-300 delay-150 ${paid ? "opacity-100" : "opacity-40"}`}>
              <Check className="h-3.5 w-3.5 text-success" aria-hidden="true" /> Receipt sent to Chidinma
            </li>
            <li className={`flex items-center gap-2 transition-opacity duration-300 delay-300 ${paid ? "opacity-100" : "opacity-40"}`}>
              <Check className="h-3.5 w-3.5 text-success" aria-hidden="true" /> Revenue updated
            </li>
          </ul>
        </div>
      </div>
      <p className="text-sm text-ink-muted" aria-live="polite">
        {paid ? "Paid. The invoice, your balance and your revenue all update at once." : "A client pays by card, transfer or mobile money."}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
const clients = [
  { name: "Blessing I.", last: "6 weeks ago", visits: 9, note: "Prefers short coffin shape. Always books Saturdays.", due: true },
  { name: "Funmi A.", last: "2 weeks ago", visits: 14, note: "Lash fill every 3 weeks. Sensitive to latex.", due: false },
  { name: "Chidinma O.", last: "3 days ago", visits: 4, note: "New client from Instagram. Pays by transfer.", due: false },
];

export function ClientsDemo() {
  const [selected, setSelected] = useState(0);
  const [sent, setSent] = useState<Record<string, boolean>>({});
  const c = clients[selected]!;
  const isSent = sent[c.name];

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-[1fr_1.3fr]">
        <ul className={`${card} space-y-1 p-2`} role="listbox" aria-label="Clients">
          {clients.map((cl, i) => (
            <li key={cl.name}>
              <button
                type="button"
                role="option"
                aria-selected={selected === i}
                onClick={() => setSelected(i)}
                className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors duration-200 ${
                  selected === i ? "bg-sunken" : "hover:bg-sunken"
                }`}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-xs font-semibold text-primary-700">
                  {cl.name.slice(0, 1)}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium text-ink">{cl.name}</span>
                  <span className="block text-[11px] text-ink-muted">{cl.last}</span>
                </span>
                {cl.due && !sent[cl.name] && (
                  <span className="rounded-full bg-accent-50 px-2 py-0.5 text-[10px] font-semibold text-accent-700">Due</span>
                )}
              </button>
            </li>
          ))}
        </ul>

        <div key={c.name} className={`${card} feed-in`}>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-ink">{c.name}</p>
            <p className="text-xs text-ink-muted">{c.visits} visits</p>
          </div>
          <p className="mt-2 text-sm text-ink-muted">{c.note}</p>
          <div className="mt-4 rounded-lg bg-sunken p-3 text-xs leading-relaxed text-ink-muted">
            <span className="font-semibold text-ink">Suggested follow-up</span>
            <br />
            Hi {c.name.split(" ")[0]}! It&apos;s been a little while since your last visit. Want me to hold a slot this week?
          </div>
          <button
            type="button"
            disabled={isSent}
            onClick={() => setSent((s) => ({ ...s, [c.name]: true }))}
            className="press mt-3 flex items-center gap-2 rounded-lg bg-action px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-action-hover disabled:bg-success-soft disabled:text-success"
          >
            {isSent ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Send className="h-3.5 w-3.5" aria-hidden="true" />}
            {isSent ? "Sent" : "Send follow-up"}
          </button>
        </div>
      </div>
      <p className="text-sm text-ink-muted">Pick a client. See their history. Follow up in one tap.</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
const ranges = {
  week: { revenue: 148500, repeat: 68, bookings: 17, bars: [38, 52, 44, 66, 58, 80, 72, 90] },
  month: { revenue: 612000, repeat: 71, bookings: 74, bars: [60, 48, 72, 64, 82, 70, 88, 96] },
};

export function InsightsDemo() {
  const [range, setRange] = useState<"week" | "month">("week");
  const d = ranges[range];

  return (
    <div className="space-y-4">
      <div className={card}>
        <div className="flex items-center justify-between">
          <p className={label}>Revenue</p>
          <div className="flex rounded-lg border border-border p-0.5" role="tablist" aria-label="Range">
            {(["week", "month"] as const).map((r) => (
              <button
                key={r}
                role="tab"
                type="button"
                aria-selected={range === r}
                onClick={() => setRange(r)}
                className={`rounded-md px-3 py-1 text-xs font-medium capitalize transition-colors duration-200 ${
                  range === r ? "bg-inverse text-on-inverse" : "text-ink-muted hover:text-ink"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
        <p className="mt-2 font-display text-3xl font-semibold text-ink">
          <CountUp value={d.revenue} prefix="₦" duration={800} />
        </p>
        <div className="mt-4 flex h-24 items-end gap-2">
          {d.bars.map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-sm ${i === d.bars.length - 1 ? "bg-action" : "bg-primary-100"}`}
              style={{ height: `${h}%`, transition: "height 600ms cubic-bezier(0.2,0,0,1)", transitionDelay: `${i * 30}ms` }}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className={card}>
          <p className={label}>Repeat clients</p>
          <p className="mt-1 font-display text-2xl font-semibold text-ink">
            <CountUp value={d.repeat} suffix="%" />
          </p>
        </div>
        <div className={card}>
          <p className={label}>Bookings</p>
          <p className="mt-1 font-display text-2xl font-semibold text-ink">
            <CountUp value={d.bookings} />
          </p>
        </div>
      </div>
    </div>
  );
}
