"use client";

import { useState } from "react";
import { MockupPanel } from "./MockupPanel";

type Status = "confirmed" | "pending" | "open";

const initialSlots: { time: string; client: string; service: string; status: Status }[] = [
  { time: "9:00 AM", client: "Funmi A.", service: "Lash fill", status: "confirmed" },
  { time: "11:30 AM", client: "Blessing I.", service: "Full set", status: "confirmed" },
  { time: "2:00 PM", client: "Ada T.", service: "Gel manicure", status: "pending" },
  { time: "4:00 PM", client: "Open slot", service: "", status: "open" },
];

export function ScheduleMockup() {
  const [slots, setSlots] = useState(initialSlots);

  function approve(time: string) {
    setSlots((prev) => prev.map((s) => (s.time === time ? { ...s, status: "confirmed" } : s)));
  }

  const hasPending = slots.some((s) => s.status === "pending");

  return (
    <MockupPanel eyebrow="Today's schedule" maxWidth="max-w-md">
      <div className="space-y-2">
        {slots.map((slot) => (
          <div
            key={slot.time}
            className={`flex items-center justify-between gap-2 rounded-xl border p-3 text-sm transition-colors ${
              slot.status === "open" ? "border-dashed border-border text-ink-muted" : "border-border"
            }`}
          >
            <span className="w-20 flex-shrink-0 font-medium text-ink">{slot.time}</span>
            <span className="flex-1 text-ink-muted">
              {slot.client}
              {slot.service && ` · ${slot.service}`}
            </span>
            {slot.status === "pending" && (
              <button
                type="button"
                onClick={() => approve(slot.time)}
                className="rounded-full bg-accent-100 px-2.5 py-1 text-xs font-medium text-accent-700 transition-colors hover:bg-action hover:text-white"
              >
                Approve
              </button>
            )}
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-ink-muted" role="status">
        {hasPending ? "Try it: approve the pending request." : "Approved. It's on your calendar."}
      </p>
    </MockupPanel>
  );
}
