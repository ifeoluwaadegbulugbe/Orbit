import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
  size = "md",
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  size?: "md" | "lg";
}) {
  return (
    <Link
      href={href}
      className={`group flex flex-col justify-between rounded-2xl border border-border bg-white p-6 md:p-8 transition-all hover:border-primary-300 hover:shadow-[var(--shadow-md)] ${
        size === "lg" ? "md:col-span-2" : ""
      }`}
    >
      <div>
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50">
          <Icon className="h-5 w-5 text-primary-600" aria-hidden="true" />
        </div>
        <h3 className="text-lg font-semibold text-ink mb-2">{title}</h3>
        <p className="text-sm text-ink-muted leading-relaxed">{description}</p>
      </div>
      <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary-600">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </div>
    </Link>
  );
}
