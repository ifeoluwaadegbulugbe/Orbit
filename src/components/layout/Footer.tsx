import Link from "next/link";
import { siteConfig } from "@/site.config";
import { EmailCapture } from "@/components/marketing/EmailCapture";

const columns: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Product",
    links: [
      { label: "Overview", href: "/product" },
      { label: "Booking", href: "/product/booking" },
      { label: "Payments", href: "/product/payments" },
      { label: "Clients", href: "/product/clients" },
      { label: "Automations", href: "/product/automations" },
      { label: "Insights", href: "/product/insights" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Changelog", href: "/changelog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Free tools & templates", href: "/resources" },
      { label: "Help center", href: "/help" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-6 mb-12">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="font-semibold text-ink">
              Orbit
            </Link>
            <p className="text-sm text-ink-muted leading-relaxed max-w-xs">{siteConfig.tagline}</p>
            <EmailCapture source="footer" title="Get business tips in your inbox" />
          </div>
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold text-ink mb-4">{col.heading}</h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-ink-muted hover:text-ink transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border pt-8">
          <p className="text-sm text-ink-muted">© {new Date().getFullYear()} Orbit. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href={siteConfig.social.x} target="_blank" rel="noopener noreferrer" className="text-sm text-ink-muted hover:text-ink">
              X
            </a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-ink-muted hover:text-ink">
              LinkedIn
            </a>
            <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" className="text-sm text-ink-muted hover:text-ink">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
