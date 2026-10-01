import { Check, X, Clock } from "lucide-react";
import { MockupPanel } from "./MockupPanel";

/** Product UI panel showing a booking request waiting on the owner's approval. */
export function BookingApprovalMockup() {
  return (
    <MockupPanel eyebrow="New booking request" glow="primary">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700">
            AT
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Ada T.</p>
            <p className="text-xs text-ink-muted">Gel manicure, 45 min</p>
          </div>
          <Clock className="ml-auto h-4 w-4 text-ink-muted/60" aria-hidden="true" />
        </div>
        <div className="space-y-1 border-t border-border pt-4 text-xs text-ink-muted">
          <p>Thursday, 2:00 PM</p>
          <p>Deposit: ₦2,500 paid</p>
        </div>
        <div className="flex gap-2 pt-1">
          <button className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary-500 py-2.5 text-xs font-semibold text-white">
            <Check className="h-3.5 w-3.5" aria-hidden="true" />
            Approve
          </button>
          <button className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-border py-2.5 text-xs font-semibold text-ink-muted">
            <X className="h-3.5 w-3.5" aria-hidden="true" />
            Decline
          </button>
        </div>
      </div>
    </MockupPanel>
  );
}
