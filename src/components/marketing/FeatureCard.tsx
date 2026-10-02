import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const tints = {
  primary: "bg-primary-50 text-primary-600",
  accent: "bg-accent-50 text-accent-700",
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
  size = "md",
  tint = "primary",
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  size?: "md" | "lg";
  tint?: keyof typeof tints;
}) {
  return (
    <Reveal className="h-full">
    <Link
      href={href}
      className={`group flex h-full flex-col justify-between rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-sm)] transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-[var(--shadow-md)] md:p-8 ${
        size === "lg" ? "md:col-span-2" : ""
      }`}
    >
      <div>
        <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${tints[tint]}`}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-ink">{title}</h3>
        <p className="text-sm leading-relaxed text-ink-muted">{description}</p>
      </div>
      <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary-600">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </div>
    </Link>
    </Reveal>
  );
}
