import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Floating UI panel used to show product content. A clean white card with a
 * hairline border and layered shadow, no color wash behind it.
 */
export function MockupPanel({
  children,
  eyebrow,
  className,
  maxWidth = "max-w-sm",
}: {
  children: ReactNode;
  eyebrow?: string;
  className?: string;
  maxWidth?: string;
}) {
  return (
    <div className={cn("mx-auto", maxWidth)}>
      <div
        className={cn(
          "rounded-3xl border border-border bg-surface p-6 transition-transform duration-300 hover:-translate-y-1",
          className
        )}
        style={{ boxShadow: "var(--shadow-float)" }}
      >
        {eyebrow && (
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-ink-muted/70">{eyebrow}</p>
        )}
        {children}
      </div>
    </div>
  );
}
