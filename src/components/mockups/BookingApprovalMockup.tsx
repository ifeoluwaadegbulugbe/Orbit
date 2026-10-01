import { Check, X, Clock } from "lucide-react";
import { PhoneFrame } from "./DeviceFrame";

/** HTML/CSS mockup of a booking request waiting on the owner's approval. */
export function BookingApprovalMockup() {
  return (
    <PhoneFrame>
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-medium text-ink-muted">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          New booking request
        </div>
        <div className="rounded-2xl border border-border p-4 space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center font-semibold text-primary-700 text-sm">
              AT
            </div>
            <div>
              <p className="font-semibold text-ink text-sm">Ada T.</p>
              <p className="text-xs text-ink-muted">Gel manicure, 45 min</p>
            </div>
          </div>
          <div className="text-xs text-ink-muted space-y-1 border-t border-border pt-3">
            <p>Thursday, 2:00 PM</p>
            <p>Deposit: ₦2,500 paid</p>
          </div>
          <div className="flex gap-2 pt-1">
            <button className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-primary-500 text-white text-xs font-semibold py-2.5">
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
              Approve
            </button>
            <button className="flex-1 flex items-center justify-center gap-1.5 rounded-lg border border-border text-ink-muted text-xs font-semibold py-2.5">
              <X className="h-3.5 w-3.5" aria-hidden="true" />
              Decline
            </button>
          </div>
        </div>
        <p className="text-xs text-center text-ink-muted px-2">
          Nothing lands on your calendar until you say yes.
        </p>
      </div>
    </PhoneFrame>
  );
}
