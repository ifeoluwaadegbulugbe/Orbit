import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BookingLinkPreviewTool } from "@/components/marketing/tools/BookingLinkPreviewTool";

export const metadata: Metadata = buildMetadata({
  title: "Booking Link Preview",
  description: "See what a free booking page for your business, shareable on Instagram or WhatsApp, could look like.",
  path: "/resources/booking-link-preview",
});

export default function BookingLinkPreviewPage() {
  return (
    <div className="px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <Breadcrumbs items={[{ name: "Resources", path: "/resources" }, { name: "Booking Link preview", path: "/resources/booking-link-preview" }]} />
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-3">Booking Link preview</h1>
        <p className="text-ink-muted mb-10 max-w-2xl">Type your business name to see a live preview of your booking page.</p>
        <BookingLinkPreviewTool />
      </div>
    </div>
  );
}
