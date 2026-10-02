"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { productLinks, solutionLinks, resourceLinks, type NavLink } from "@/data/nav";
import { appLink } from "@/site.config";
import { trackEvent } from "@/lib/analytics";

function MegaMenu({ label, links }: { label: string; links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-sm text-ink-muted hover:text-ink transition-colors py-2"
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      {open && (
        <div className="feed-in absolute top-full left-1/2 -translate-x-1/2 mt-1 w-72 rounded-xl bg-white p-2" style={{ boxShadow: "var(--shadow-card)" }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-2.5 hover:bg-primary-50"
            >
              <p className="text-sm font-medium text-ink">{link.label}</p>
              {link.description && <p className="text-xs text-ink-muted mt-0.5">{link.description}</p>}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-[var(--color-bg)]/85 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "border-border" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        <Link href="/" className="flex items-center gap-2 font-semibold text-ink">
          <Image src="/logo.svg" alt="Orbit" width={28} height={28} priority />
          Orbit
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          <MegaMenu label="Product" links={productLinks} />
          <MegaMenu label="Solutions" links={solutionLinks} />
          <Link href="/pricing" className="text-sm text-ink-muted hover:text-ink transition-colors">
            Pricing
          </Link>
          <MegaMenu label="Resources" links={resourceLinks} />
          <Link href="/blog" className="text-sm text-ink-muted hover:text-ink transition-colors">
            Blog
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={appLink("/login")} className="text-sm text-ink-muted hover:text-ink transition-colors">
            Log in
          </a>
          <Button href={appLink("/signup")} onClick={() => trackEvent({ name: "signup_start", location: "nav" })}>
            Start free
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 -mr-2"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white px-6 py-4 space-y-4">
          {[...productLinks, ...solutionLinks, { label: "Pricing", href: "/pricing" }, ...resourceLinks].map(
            (link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-ink py-1"
              >
                {link.label}
              </Link>
            )
          )}
          <div className="pt-3 border-t border-border flex flex-col gap-3">
            <a href={appLink("/login")} className="text-sm text-ink-muted">
              Log in
            </a>
            <Button href={appLink("/signup")} className="w-full">
              Start free
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
