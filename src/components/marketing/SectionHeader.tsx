import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal>
    <div className={`space-y-4 ${align === "center" ? "text-center mx-auto max-w-2xl" : "text-left max-w-2xl"}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">{eyebrow}</p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-ink leading-[1.1]">
        {title}
      </h2>
      {description && <p className="text-lg text-ink-muted leading-relaxed">{description}</p>}
    </div>
    </Reveal>
  );
}
