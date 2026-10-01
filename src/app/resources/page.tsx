import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Calculator, Link2, FolderDown, ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Free Tools & Templates for Service Businesses",
  description: "Free invoice generator, pricing calculator, booking link preview, and downloadable templates for service business owners.",
  path: "/resources",
});

const tools = [
  { icon: FileText, title: "Invoice generator", description: "Create and download a professional invoice in minutes.", href: "/resources/invoice-generator" },
  { icon: Calculator, title: "Service pricing calculator", description: "Work out what to charge based on your costs and time.", href: "/resources/pricing-calculator" },
  { icon: Link2, title: "Booking Link preview", description: "See what your Orbit Booking Link could look like.", href: "/resources/booking-link-preview" },
  { icon: FolderDown, title: "Templates", description: "Client intake form, no-show policy, and WhatsApp follow-up messages.", href: "/resources/templates" },
];

export default function ResourcesPage() {
  return (
    <>
      <div className="px-6 pt-10">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs items={[{ name: "Resources", path: "/resources" }]} />
        </div>
      </div>
      <section className="px-6 pb-16 text-center">
        <div className="mx-auto max-w-2xl space-y-5">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink">Free tools & templates</h1>
          <p className="text-lg text-ink-muted">No sign-up required to use them. An email just sends you a copy to keep.</p>
        </div>
      </section>
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl grid gap-5 sm:grid-cols-2">
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="group flex flex-col rounded-2xl border border-border bg-white p-6 hover:border-primary-300">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50">
                <tool.icon className="h-5 w-5 text-primary-600" aria-hidden="true" />
              </div>
              <h2 className="font-semibold text-ink mb-1">{tool.title}</h2>
              <p className="text-sm text-ink-muted mb-4">{tool.description}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary-600">
                Open tool <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
