import { PhoneFrame } from "./DeviceFrame";

export function BookingLinkMockup({ businessName = "Glow by Ada" }: { businessName?: string }) {
  return (
    <PhoneFrame>
      <div className="space-y-4 text-center">
        <div className="h-14 w-14 rounded-full bg-primary-100 mx-auto flex items-center justify-center font-semibold text-primary-700">
          {businessName
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div>
          <p className="font-semibold text-ink">{businessName}</p>
          <p className="text-xs text-ink-muted">Nail technician · Lagos</p>
        </div>
        <div className="space-y-2 text-left pt-2">
          {["Gel manicure — 45 min", "Full set — 90 min", "Nail art add-on — 20 min"].map((service) => (
            <button
              key={service}
              className="w-full rounded-xl border border-border px-4 py-3 text-sm text-ink text-left hover:border-primary-300"
            >
              {service}
            </button>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}
