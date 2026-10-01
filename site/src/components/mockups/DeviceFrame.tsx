import type { ReactNode } from "react";

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-[280px] rounded-[2.5rem] border-[6px] border-ink bg-ink p-2 shadow-[var(--shadow-lg)]">
      <div className="rounded-[2rem] bg-white overflow-hidden">
        <div className="h-6 flex items-center justify-center bg-white">
          <div className="h-1.5 w-16 rounded-full bg-border" />
        </div>
        <div className="p-4 min-h-[480px]">{children}</div>
      </div>
    </div>
  );
}

export function BrowserFrame({ children, url = "getorbitcrm.com" }: { children: ReactNode; url?: string }) {
  return (
    <div className="rounded-2xl border border-border bg-white shadow-[var(--shadow-lg)] overflow-hidden">
      <div className="flex items-center gap-2 border-b border-border bg-[var(--color-bg)] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="ml-3 text-xs text-ink-muted">{url}</span>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}
