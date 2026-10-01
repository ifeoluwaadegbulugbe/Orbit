import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors duration-150 min-h-11 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-primary-500 text-white hover:bg-primary-600 shadow-[var(--shadow-sm)]",
  secondary: "bg-white text-ink border border-border hover:border-primary-300 hover:bg-primary-50",
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
