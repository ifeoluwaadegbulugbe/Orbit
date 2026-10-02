import { MockupPanel } from "./MockupPanel";

export function BookingLinkMockup({
  businessName = "Glow by Ada",
  role = "Nail technician · Lagos",
  services = ["Gel manicure — 45 min", "Full set — 90 min", "Nail art add-on — 20 min"],
}: {
  businessName?: string;
  role?: string;
  services?: string[];
}) {
  const initials = businessName
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <MockupPanel eyebrow="Booking Link">
      <div className="space-y-5 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 font-semibold text-primary-700">
          {initials}
        </div>
        <div>
          <p className="font-semibold text-ink">{businessName}</p>
          <p className="text-xs text-ink-muted">{role}</p>
        </div>
        <div className="space-y-2 pt-1 text-left">
          {services.map((service) => (
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
