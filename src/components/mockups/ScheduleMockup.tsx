import { MockupPanel } from "./MockupPanel";

const slots = [
  { time: "9:00 AM", client: "Funmi A.", service: "Lash fill", status: "confirmed" },
  { time: "11:30 AM", client: "Blessing I.", service: "Full set", status: "confirmed" },
  { time: "2:00 PM", client: "Ada T.", service: "Gel manicure", status: "pending" },
  { time: "4:00 PM", client: "Open slot", service: "", status: "open" },
];

export function ScheduleMockup() {
  return (
    <MockupPanel eyebrow="Today's schedule" glow="primary" maxWidth="max-w-md">
      <div className="space-y-2">
        {slots.map((slot) => (
          <div
            key={slot.time}
            className={`flex items-center justify-between rounded-xl border p-3 text-sm ${
              slot.status === "open" ? "border-dashed border-border text-ink-muted" : "border-border"
            }`}
          >
            <span className="w-20 font-medium text-ink">{slot.time}</span>
            <span className="flex-1 text-ink-muted">
              {slot.client}
              {slot.service && ` · ${slot.service}`}
            </span>
            {slot.status === "pending" && (
              <span className="rounded-full bg-accent-100 px-2.5 py-0.5 text-xs font-medium text-accent-700">
                Awaiting approval
              </span>
            )}
          </div>
        ))}
      </div>
    </MockupPanel>
  );
}
