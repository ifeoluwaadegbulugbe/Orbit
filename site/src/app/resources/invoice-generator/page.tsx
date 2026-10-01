import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { InvoiceGeneratorTool } from "@/components/marketing/tools/InvoiceGeneratorTool";

export const metadata: Metadata = buildMetadata({
  title: "Free Invoice Generator",
  description: "Create a professional invoice for your service business in minutes, free, no sign-up required.",
  path: "/resources/invoice-generator",
});

export default function InvoiceGeneratorPage() {
  return (
    <div className="px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <Breadcrumbs items={[{ name: "Resources", path: "/resources" }, { name: "Invoice generator", path: "/resources/invoice-generator" }]} />
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-3">Free invoice generator</h1>
        <p className="text-ink-muted mb-10 max-w-2xl">
          Fill in your details below and download a clean, professional invoice as a PDF. No account needed. If you want this
          built into your bookings automatically, that's what Orbit's <a href="/product/payments" className="text-primary-700 underline">payments</a> are for.
        </p>
        <InvoiceGeneratorTool />
      </div>
    </div>
  );
}
