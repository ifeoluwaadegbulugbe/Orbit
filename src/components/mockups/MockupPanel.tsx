import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Floating UI panel used to show product content without pretending to be
 * a literal phone or browser screenshot. A soft ambient glow sits behind
 * it; the panel itself is just a clean card.
 */
export function MockupPanel({
  children,
  eyebrow,
  glow = "primary",
  className,
  maxWidth = "max-w-sm",
}: {
  children: ReactNode;
  eyebrow?: string;
  glow?: "primary" | "accent" | "none";
  className?: string;
  maxWidth?: string;
}) {
  return (
    <div className={cn("relative mx-auto", maxWidth)}>
      {glow !== "none" && (
        <div
          aria-hidden="true"
          className={cn("glow -top-10 -right-6 h-56 w-56", glow === "primary" ? "glow-primary" : "glow-accent")}
        />
      )}
      <div
        className={cn(
          "relative z-10 rounded-[28px] border border-border bg-white p-6",
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
