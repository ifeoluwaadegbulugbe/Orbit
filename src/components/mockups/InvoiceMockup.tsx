import { MockupPanel } from "./MockupPanel";

export function InvoiceMockup() {
  return (
    <MockupPanel eyebrow="Invoice" maxWidth="max-w-md">
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-ink">INV-0142</p>
          <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">Paid</span>
        </div>
        <div className="space-y-2.5 border-t border-border pt-4 text-sm">
          {[
            ["Client", "Chidinma O."],
            ["Service", "Full set + styling"],
            ["Amount", "₦35,000"],
            ["Payment method", "Orbit Wallet"],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between">
              <span className="text-ink-muted">{label}</span>
              <span className="font-medium text-ink">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </MockupPanel>
  );
}
