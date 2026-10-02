"use client";

import { useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BookingDemo, PaymentDemo, ClientsDemo, InsightsDemo } from "./demos";

const tabs = [
  {
    id: "book",
    label: "Get booked",
    lead: "Clients book from a link.",
    rest: "You approve every request before it touches your calendar.",
    href: "/product/booking",
    Demo: BookingDemo,
  },
  {
    id: "paid",
    label: "Get paid",
    lead: "Invoices and deposits that settle themselves.",
    rest: "When a client pays, the invoice, your balance and your revenue update together.",
    href: "/product/payments",
    Demo: PaymentDemo,
  },
  {
    id: "clients",
    label: "Keep clients",
    lead: "Every client's history in one place.",
    rest: "Notes, visits and the people who are due back, instead of a scroll through old chats.",
    href: "/product/clients",
    Demo: ClientsDemo,
  },
  {
    id: "know",
    label: "Know your business",
    lead: "Revenue and repeat clients, without a spreadsheet.",
    rest: "It builds itself from the bookings and payments you already record.",
    href: "/product/insights",
    Demo: InsightsDemo,
  },
];

export function ProductTabs() {
  const [active, setActive] = useState(0);
  const tab = tabs[active]!;

  function onKey(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      setActive((a) => (a + 1) % tabs.length);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      setActive((a) => (a - 1 + tabs.length) % tabs.length);
    }
  }

  return (
    <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl border border-border bg-surface md:grid-cols-[15rem_1fr]">
      <div
        role="tablist"
        aria-label="What Orbit does"
        aria-orientation="vertical"
        onKeyDown={onKey}
        className="flex gap-1 overflow-x-auto border-b border-border p-2 md:flex-col md:border-b-0 md:border-r md:p-3"
      >
        {tabs.map((t, i) => (
          <button
            key={t.id}
            id={`tab-${t.id}`}
            role="tab"
            type="button"
            aria-selected={active === i}
            aria-controls={`panel-${t.id}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            className={`relative flex-shrink-0 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors duration-200 md:py-3 ${
              active === i ? "bg-sunken text-ink" : "text-ink-muted hover:text-ink"
            }`}
          >
            <span
              aria-hidden="true"
              className={`absolute left-0 top-2 hidden h-[calc(100%-1rem)] w-0.5 rounded-full bg-action transition-opacity duration-200 md:block ${
                active === i ? "opacity-100" : "opacity-0"
              }`}
            />
            {t.label}
          </button>
        ))}
      </div>

      <div key={tab.id} id={`panel-${tab.id}`} role="tabpanel" aria-labelledby={`tab-${tab.id}`} className="feed-in p-5 md:p-8">
        <p className="max-w-lg text-xl leading-snug md:text-2xl">
          <span className="font-semibold text-ink">{tab.lead}</span>{" "}
          <span className="text-ink-muted">{tab.rest}</span>
        </p>
        <div className="mt-6 rounded-xl bg-sunken p-3 md:p-5">
          <tab.Demo />
        </div>
        <Link
          href={tab.href}
          className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800"
        >
          Learn more about {tab.label.toLowerCase()}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
