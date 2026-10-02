"use client";

import { useEffect, useState } from "react";
import { Bell, CalendarCheck, Check, MessageCircle, Wallet } from "lucide-react";
import { useInView, usePrefersReducedMotion } from "@/lib/useInView";

const fragments = [
  { app: "WhatsApp", text: "hi are you free thursday??", rot: "-rotate-2", pos: "sm:col-start-1" },
  { app: "Instagram DM", text: "price for a full set?", rot: "rotate-1", pos: "" },
  { app: "Notes", text: "Ada: almond, no acrylic, allergic to ???", rot: "rotate-2", pos: "" },
  { app: "Bank alert", text: "Credit ₦2,500. Whose is this?", rot: "-rotate-1", pos: "" },
  { app: "Spreadsheet", text: "Chidinma, ₦35,000, paid?? check", rot: "rotate-1", pos: "" },
  { app: "Calendar", text: "2pm Ada / 2pm Blessing ???", rot: "-rotate-2", pos: "", warn: true },
];

const flow = [
  { icon: MessageCircle, label: "Client taps your link" },
  { icon: CalendarCheck, label: "Request arrives" },
  { icon: Check, label: "You approve" },
  { icon: Wallet, label: "Deposit lands" },
  { icon: Bell, label: "Reminder sent" },
];

export function BeforeAfter() {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const [mode, setMode] = useState<"before" | "after">("before");
  const [touched, setTouched] = useState(false);
  const [lit, setLit] = useState(flow.length - 1);

  useEffect(() => {
    if (touched || !inView || reduced) return;
    const t = setTimeout(() => setMode("after"), 2600);
    return () => clearTimeout(t);
  }, [inView, touched, reduced]);

  useEffect(() => {
    if (mode !== "after" || reduced) {
      setLit(flow.length - 1);
      return;
    }
    setLit(-1);
    let i = -1;
    const id = setInterval(() => {
      i += 1;
      setLit(i);
      if (i >= flow.length - 1) clearInterval(id);
    }, 520);
    return () => clearInterval(id);
  }, [mode, reduced]);

  function choose(next: "before" | "after") {
    setTouched(true);
    setMode(next);
  }

  return (
    <div ref={ref}>
      <div className="mx-auto flex w-fit rounded-full border border-border bg-surface p-1" role="tablist" aria-label="Before or with Orbit">
        {(["before", "after"] as const).map((m) => (
          <button
            key={m}
            role="tab"
            type="button"
            aria-selected={mode === m}
            onClick={() => choose(m)}
            className={`press rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 ${
              mode === m ? "bg-inverse text-on-inverse" : "text-ink-muted hover:text-ink"
            }`}
          >
            {m === "before" ? "Before Orbit" : "With Orbit"}
          </button>
        ))}
      </div>

      <div className="relative mx-auto mt-10 min-h-[27rem] max-w-4xl sm:min-h-[22rem]">
        <div
          aria-hidden={mode !== "before"}
          className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] ${
            mode === "before" ? "opacity-100" : "pointer-events-none scale-[0.97] opacity-0"
          }`}
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {fragments.map((f, i) => (
              <div
                key={f.app}
                className={`${f.rot} rounded-xl border bg-surface p-3.5 text-left transition-transform duration-300 hover:rotate-0 hover:scale-[1.03] ${
                  f.warn ? "border-danger/40" : "border-border"
                }`}
                style={{ boxShadow: "var(--shadow-card)", transitionDelay: `${i * 20}ms` }}
              >
                <p className={`text-[11px] font-semibold uppercase tracking-wider ${f.warn ? "text-danger" : "text-ink-muted"}`}>
                  {f.app}
                </p>
                <p className="mt-1.5 text-sm text-ink">{f.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-ink-muted">Six places. Nothing talks to anything else.</p>
        </div>

        <div
          aria-hidden={mode !== "after"}
          className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] ${
            mode === "after" ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-xl rounded-2xl bg-surface p-5 text-left" style={{ boxShadow: "var(--shadow-panel)" }}>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700">
                AT
              </div>
              <div>
                <p className="font-semibold text-ink">Ada T.</p>
                <p className="text-xs text-ink-muted">Client since March · 12 visits</p>
              </div>
              <span className="ml-auto rounded-full bg-success-soft px-2.5 py-1 text-xs font-medium text-success">Confirmed</span>
            </div>
            <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-border pt-4 text-sm">
              <div>
                <dt className="text-xs text-ink-muted">Next booking</dt>
                <dd className="font-medium text-ink">Thu, 2:00 PM · Gel manicure</dd>
              </div>
              <div>
                <dt className="text-xs text-ink-muted">Deposit</dt>
                <dd className="font-medium text-ink">₦2,500 paid</dd>
              </div>
              <div>
                <dt className="text-xs text-ink-muted">Notes</dt>
                <dd className="font-medium text-ink">Almond shape, no acrylic</dd>
              </div>
              <div>
                <dt className="text-xs text-ink-muted">Reminder</dt>
                <dd className="font-medium text-ink">Tomorrow, 9:00 AM</dd>
              </div>
            </dl>
          </div>

          <ol className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-x-2 gap-y-2">
            {flow.map((s, i) => (
              <li key={s.label}>
                <span
                  className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
                    i <= lit ? "border-primary-200 bg-primary-50 text-primary-800" : "border-border bg-surface text-ink-muted"
                  }`}
                >
                  <s.icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {s.label}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
