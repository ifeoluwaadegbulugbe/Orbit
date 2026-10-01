import { BrowserFrame } from "./DeviceFrame";

export function ClientProfileMockup() {
  return (
    <BrowserFrame url="app.getorbitcrm.com/clients/ada-t">
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center font-semibold text-primary-700">
            AT
          </div>
          <div>
            <p className="font-semibold text-ink">Ada T.</p>
            <p className="text-xs text-ink-muted">Client since March 2026</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center border-t border-b border-border py-4">
          <div>
            <p className="text-lg font-semibold text-ink">12</p>
            <p className="text-xs text-ink-muted">Visits</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-ink">₦187k</p>
            <p className="text-xs text-ink-muted">Lifetime spend</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-ink">4 wks</p>
            <p className="text-xs text-ink-muted">Avg. rebook</p>
          </div>
        </div>
        <div className="text-sm">
          <p className="text-ink-muted mb-1">Last visit note</p>
          <p className="text-ink">Prefers almond-shaped nails, slightly shorter than last time.</p>
        </div>
      </div>
    </BrowserFrame>
  );
}
