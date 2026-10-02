import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "press inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 min-h-11 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-action text-white hover:bg-action-hover shadow-[var(--shadow-sm)]",
  secondary: "bg-surface text-ink border border-ink/15 hover:border-ink/35 hover:bg-sunken",
  ghost: "text-ink hover:bg-primary-50",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface ButtonProps extends ComponentPropsWithoutRef<"a"> {
  variant?: Variant;
  size?: Size;
  external?: boolean;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  external = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className ?? undefined);

  if (!href) {
    return (
      <button className={classes} {...(rest as ComponentPropsWithoutRef<"button">)}>
        {children}
      </button>
    );
  }

  if (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("https://wa.me")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
