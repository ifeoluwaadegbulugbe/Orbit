import { MockupPanel } from "./MockupPanel";

export function ClientProfileMockup() {
  return (
    <MockupPanel eyebrow="Client profile" maxWidth="max-w-md">
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 font-semibold text-primary-700">
            AT
          </div>
          <div>
            <p className="font-semibold text-ink">Ada T.</p>
            <p className="text-xs text-ink-muted">Client since March 2026</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 border-y border-border py-4 text-center">
          {[
            ["12", "Visits"],
            ["₦187k", "Lifetime spend"],
            ["4 wks", "Avg. rebook"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-lg font-semibold text-ink">{value}</p>
              <p className="text-xs text-ink-muted">{label}</p>
            </div>
          ))}
        </div>
        <div className="text-sm">
          <p className="mb-1 text-ink-muted">Last visit note</p>
          <p className="text-ink">Prefers almond-shaped nails, slightly shorter than last time.</p>
        </div>
      </div>
    </MockupPanel>
  );
}
