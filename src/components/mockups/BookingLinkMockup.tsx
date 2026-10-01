import { MockupPanel } from "./MockupPanel";

export function BookingLinkMockup({ businessName = "Glow by Ada" }: { businessName?: string }) {
  const initials = businessName
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <MockupPanel eyebrow="Booking Link" glow="primary">
      <div className="space-y-5 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 font-semibold text-primary-700">
          {initials}
        </div>
        <div>
          <p className="font-semibold text-ink">{businessName}</p>
          <p className="text-xs text-ink-muted">Nail technician · Lagos</p>
        </div>
        <div className="space-y-2 pt-1 text-left">
          {["Gel manicure — 45 min", "Full set — 90 min", "Nail art add-on — 20 min"].map((service) => (
            <button
              key={service}
              className="w-full rounded-xl border border-border px-4 py-3 text-left text-sm text-ink hover:border-primary-300"
            >
              {service}
            </button>
          ))}
        </div>
      </div>
    </MockupPanel>
  );
}
