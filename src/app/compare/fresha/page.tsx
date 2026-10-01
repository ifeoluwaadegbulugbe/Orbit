import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ComparePageTemplate, type ComparePageData } from "@/components/templates/ComparePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: "Fresha Alternative: Orbit vs. Fresha",
  description:
    "Comparing Orbit and Fresha for African service businesses: flat subscription vs. marketplace pricing, and who stays in control of each booking.",
  path: "/compare/fresha",
});

const data: ComparePageData = {
  slug: "fresha",
  competitorName: "Fresha",
  h1: "Orbit vs. Fresha",
  intro:
    "Fresha is a marketplace booking platform. Orbit is a flat-subscription workspace built specifically for African solo and small-team service businesses. Here's how the models differ.",
  columns: ["Orbit", "Fresha"],
  rows: [
    { label: "Pricing model", values: ["Flat monthly subscription", "Marketplace, with optional paid add-ons (verify current terms)"] },
    { label: "Commission on bookings", values: ["None", "Varies by feature and market (verify current terms)"] },
    { label: "Owner approves each booking", values: [true, "Varies by setting"] },
    { label: "Built for African payment methods", values: [true, "Varies by market"] },
    { label: "Client management", values: [true, true] },
  ],
  body: (
    <>
      <p>
        Fresha is a widely used booking platform built primarily around a marketplace model: it lists your business for discovery
        and layers in paid add-ons for things like payment processing and marketing placement. For some businesses that trade-off
        makes sense. For others, especially solo operators who already have their own client base from Instagram and WhatsApp, it
        means paying for discovery they don't need.
      </p>
      <p>
        Orbit takes a different approach. It's a flat monthly subscription, not a marketplace. You're not listed for discovery
        and you're not charged a percentage of what you earn. The trade-off is the mirror image of Fresha's: Orbit assumes you
        already have clients finding you, and focuses on the admin of running that business well.
      </p>
    </>
  ),
  faqs: [
    {
      question: "Does Orbit list my business in a public marketplace like Fresha does?",
      answer: "No. Orbit is a private workspace for your business. Your Booking Link is something you share yourself.",
    },
    {
      question: "Is Orbit cheaper than Fresha?",
      answer:
        "It depends on your volume and which Fresha plan and add-ons you'd use. Orbit's Pro plan is a flat $12/month with no per-booking fees, which makes costs predictable as you grow. Compare against Fresha's current published pricing for your specific case.",
    },
  ],
};

export default function CompareFreshaPage() {
  return <ComparePageTemplate data={data} />;
}
