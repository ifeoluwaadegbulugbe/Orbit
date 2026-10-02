"use client";

import { useEffect, useState } from "react";
import { BarChart3, Bell, Pause, Play, CalendarDays, Check, Home, UserPlus, Users, Wallet, Inbox } from "lucide-react";
import { CountUp } from "./CountUp";
import { useInView, usePrefersReducedMotion } from "@/lib/useInView";

const STEP_MS = 2200;
const LAST_STEP = 6;

type EventItem = { icon: typeof Check; text: string; sub: string; tone: "pink" | "green" | "gold" | "muted" };

const events: EventItem[] = [
  { icon: Wallet, text: "Funmi A. paid ₦15,000", sub: "Orbit Wallet · 8:52 AM", tone: "green" },
  { icon: Inbox, text: "New request from Ada T.", sub: "Gel manicure · Thu 2:00 PM", tone: "pink" },
  { icon: Check, text: "You approved Ada T.", sub: "Added to your calendar", tone: "muted" },
  { icon: Wallet, text: "Ada T. paid ₦2,500 deposit", sub: "Orbit Wallet · just now", tone: "green" },
  { icon: Bell, text: "Reminder queued for Ada T.", sub: "Sends tomorrow, 9:00 AM", tone: "gold" },
  { icon: UserPlus, text: "Chidinma O. added as a client", sub: "From your Booking Link", tone: "muted" },
  { icon: Bell, text: "Follow-up scheduled for Funmi A.", sub: "In 4 weeks, WhatsApp-ready text", tone: "gold" },
];

const toneClass = {
  pink: "bg-primary-50 text-primary-700",
  green: "bg-[#e8f5ee] text-success",
  gold: "bg-accent-50 text-accent-700",
  muted: "bg-[#f1ece8] text-ink-muted",
};

const sidebar = [
  { icon: Home, label: "Home", active: true },
  { icon: CalendarDays, label: "Calendar" },
  { icon: Users, label: "Clients" },
  { icon: Wallet, label: "Money" },
  { icon: BarChart3, label: "Insights" },
];

/**
 * The hero product. A small, believable Orbit dashboard that plays a single
 * story on a loop (request, approval, payment, reminder). Starts when visible,
 * pauses on hover/focus and off-screen, and shows the final state for people
 * who prefer reduced motion. The pending request can be approved by hand.
 */
export function OrbitDashboard() {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>(0.35);
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const [held, setHeld] = useState(false);

  useEffect(() => {
    if (reduced) {
      setStep(LAST_STEP);
      return;
    }
    if (!inView || paused || held) return;
    const id = setInterval(() => setStep((s) => (s >= LAST_STEP ? 0 : s + 1)), STEP_MS);
    return () => clearInterval(id);
  }, [inView, paused, held, reduced]);

  const requestIn = step >= 1;
  const approved = step >= 2;
  const paid = step >= 3;
  const revenue = paid ? 45000 : 42500;
  const bookings = approved ? 3 : 2;
  const awaiting = requestIn && !approved ? 1 : 0;
  const feed = events.slice(0, step + 1).reverse().slice(0, 4);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="overflow-hidden rounded-2xl bg-white text-left"
      style={{ boxShadow: "var(--shadow-panel)" }}
      aria-label="Orbit dashboard demo"
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-ink">
          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-primary-600 text-[10px] font-bold text-white">O</span>
          Glow by Ada
        </div>
        <div className="flex items-center gap-3 text-xs text-ink-muted">
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2 text-success pulse-dot">
              <span className="relative h-2 w-2 rounded-full bg-success" />
            </span>
            Live · Today
          </span>
          {!reduced && (
            <button
              type="button"
              onClick={() => setHeld((h) => !h)}
              aria-label={held ? "Play demo" : "Pause demo"}
              className="flex h-6 w-6 items-center justify-center rounded-md border border-border text-ink-muted transition-colors hover:text-ink"
            >
              {held ? <Play className="h-3 w-3" aria-hidden="true" /> : <Pause className="h-3 w-3" aria-hidden="true" />}
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-[168px_minmax(0,1fr)]">
        <nav aria-label="Demo navigation" className="hidden border-r border-border p-3 md:block">
          <ul className="space-y-0.5">
            {sidebar.map((item) => (
              <li key={item.label}>
                <span
                  className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm ${
                    item.active ? "bg-[#f6f2ee] font-medium text-ink" : "text-ink-muted"
                  }`}
                >
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </nav>

        <div className="min-w-0 p-4 md:p-5">
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            <Stat label="Revenue" value={<CountUp value={revenue} prefix="₦" duration={700} />} />
            <Stat label="Bookings" value={<CountUp value={bookings} duration={500} />} />
            <Stat
              label="Awaiting you"
              value={<CountUp value={awaiting} duration={300} />}
              highlight={awaiting > 0}
            />
          </div>

          <div className="mt-4 grid grid-cols-[minmax(0,1fr)] gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-muted/80">Today</p>
              <ul className="space-y-1.5">
                <Slot time="9:00 AM" name="Funmi A." detail="Lash fill" state="confirmed" />
                <Slot time="11:30 AM" name="Blessing I." detail="Full set" state="confirmed" />
                {requestIn ? (
                  <li key={approved ? "ada-ok" : "ada-pending"} className="feed-in">
                    <Slot
                      time="2:00 PM"
                      name="Ada T."
                      detail="Gel manicure"
                      state={approved ? "confirmed" : "pending"}
                      onApprove={() => setStep((s) => Math.max(s, 2))}
                    />
                  </li>
                ) : (
                  <Slot time="2:00 PM" name="Open slot" detail="" state="open" />
                )}
              </ul>
            </div>

            <div className="hidden lg:block">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-muted/80">Activity</p>
              <ul className="space-y-1.5" aria-live="polite">
                {feed.map((e, i) => (
                  <li
                    key={e.text}
                    className={`flex items-start gap-2.5 rounded-lg border border-border p-2 ${i === 0 ? "feed-in" : ""}`}
                  >
                    <span className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md ${toneClass[e.tone]}`}>
                      <e.icon className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-xs font-medium text-ink">{e.text}</span>
                      <span className="block truncate text-[11px] text-ink-muted">{e.sub}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-4 rounded-lg bg-[#f6f2ee] px-3 py-2 text-xs text-ink-muted lg:hidden" aria-live="polite">
            <span className="font-medium text-ink">{events[step]!.text}</span> · {events[step]!.sub}
          </p>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, highlight }: { label: string; value: React.ReactNode; highlight?: boolean }) {
  return (
    <div
      className={`rounded-xl border p-2.5 transition-colors duration-300 md:p-3 ${
        highlight ? "border-primary-200 bg-primary-50" : "border-border bg-white"
      }`}
    >
      <p className="truncate text-[11px] text-ink-muted md:text-xs">{label}</p>
      <p className="mt-0.5 font-display text-lg font-semibold text-ink md:text-2xl">{value}</p>
    </div>
  );
}

function Slot({
  time,
  name,
  detail,
  state,
  onApprove,
}: {
  time: string;
  name: string;
  detail: string;
  state: "confirmed" | "pending" | "open";
  onApprove?: () => void;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-lg border px-3 py-2 text-sm transition-colors duration-300 ${
        state === "open"
          ? "border-dashed border-border text-ink-muted"
          : state === "pending"
            ? "border-primary-200 bg-primary-50"
            : "border-border"
      }`}
    >
      <span className="w-[4.25rem] flex-shrink-0 text-xs font-medium text-ink">{time}</span>
      <span className="min-w-0 flex-1 truncate text-ink-muted">
        <span className="font-medium text-ink">{name}</span>
        {detail && ` · ${detail}`}
      </span>
      {state === "pending" && (
        <button
          type="button"
          onClick={onApprove}
          className="press rounded-md bg-primary-600 px-2.5 py-1 text-xs font-semibold text-white transition-colors hover:bg-primary-700"
        >
          Approve
        </button>
      )}
      {state === "confirmed" && <Check className="h-4 w-4 flex-shrink-0 text-success" aria-label="Confirmed" />}
    </div>
  );
}
