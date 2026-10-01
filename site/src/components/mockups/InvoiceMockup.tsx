import { BrowserFrame } from "./DeviceFrame";

export function InvoiceMockup() {
  return (
    <BrowserFrame url="app.getorbitcrm.com/invoices">
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-ink-muted">Invoice</p>
            <p className="font-semibold text-ink">INV-0142</p>
          </div>
          <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">Paid</span>
        </div>
        <div className="space-y-2 border-t border-border pt-4 text-sm">
          <div className="flex justify-between">
            <span className="text-ink-muted">Client</span>
            <span className="text-ink font-medium">Chidinma O.</span>
          </div>
          <div className="flex justify-between">
            <span className="text-ink-muted">Service</span>
            <span className="text-ink font-medium">Full set + styling</span>
          </div>
          <div className="flex justify-between">
            <span className="text-ink-muted">Amount</span>
            <span className="text-ink font-medium">₦35,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-ink-muted">Payment method</span>
            <span className="text-ink font-medium">Orbit Wallet</span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
