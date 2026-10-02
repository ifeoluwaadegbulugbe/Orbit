"use client";

import { useEffect, useState } from "react";
import { Bell, CalendarCheck, Check, Repeat, Wallet } from "lucide-react";
import { useInView, usePrefersReducedMotion } from "@/lib/useInView";

const nodes = [
  { icon: CalendarCheck, title: "You approve a booking", sub: "Trigger", detail: "Thu 2:00 PM · Ada T." },
  { icon: Bell, title: "Confirmation goes out", sub: "Instantly", detail: "Plus a reminder 24 hours before" },
  { icon: Wallet, title: "Deposit requested", sub: "If a deposit is set", detail: "Paid through your Booking Link" },
  { icon: Repeat, title: "Follow-up scheduled", sub: "4 weeks after the visit", detail: "A ready-to-send rebooking message" },
];

export function AutomationTimeline() {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const [active, setActive] = useState(nodes.length);

  useEffect(() => {
    if (reduced) {
      setActive(nodes.length);
      return;
    }
    if (!inView) return;
    setActive(0);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setActive(i);
      if (i > nodes.length + 2) {
        i = 0;
        setActive(0);
      }
    }, 1500);
    return () => clearInterval(id);
  }, [inView, reduced]);

  return (
    <div ref={ref}>
      <ol className="relative space-y-3">
        <span aria-hidden="true" className="absolute left-[2.1rem] top-6 h-[calc(100%-3rem)] w-px bg-border" />
        <span
          aria-hidden="true"
          className="absolute left-[2.1rem] top-6 w-px bg-primary-500"
          style={{
            height: `${Math.min(active, nodes.length - 1) * 33.3}%`,
            maxHeight: "calc(100% - 3rem)",
            transition: "height 1200ms cubic-bezier(0.2,0,0,1)",
          }}
        />
        {nodes.map((n, i) => {
          const done = i < active;
          const current = i === active;
          return (
            <li
              key={n.title}
              className={`relative flex items-start gap-4 rounded-xl border p-4 transition-all duration-500 ${
                current ? "border-primary-200 bg-primary-50" : "border-border bg-surface"
              } ${!done && !current ? "opacity-60" : "opacity-100"}`}
            >
              <span
                className={`relative z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-500 ${
                  done ? "bg-success text-white" : current ? "bg-action text-white" : "bg-sunken text-ink-muted"
                }`}
              >
                {done ? <Check className="h-4 w-4" aria-hidden="true" /> : <n.icon className="h-4 w-4" aria-hidden="true" />}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-ink">{n.title}</p>
                <p className="text-sm text-ink-muted">{n.detail}</p>
              </div>
              <span className="ml-auto hidden flex-shrink-0 rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-ink-muted sm:inline">
                {done ? "Done" : current ? "Running" : n.sub}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
