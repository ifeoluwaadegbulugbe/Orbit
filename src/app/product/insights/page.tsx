import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ProductPageTemplate, type ProductPageData } from "@/components/templates/ProductPageTemplate";
import { BrowserFrame } from "@/components/mockups/DeviceFrame";

export const metadata: Metadata = buildMetadata({
  title: "Business Analytics for Solo Service Providers",
  description:
    "Orbit shows revenue, repeat-client rate, and your top services, built from the bookings and payments already running through your account.",
  path: "/product/insights",
});

const data: ProductPageData = {
  breadcrumbLabel: "Insights",
  path: "/product/insights",
  eyebrow: "Insights",
  h1: "Know how your business is actually doing",
  intro:
    "Revenue, repeat-client rate, and your top services, calculated from the bookings and payments you're already recording in Orbit.",
  mockup: (
    <BrowserFrame url="app.getorbitcrm.com/insights">
      <div className="space-y-4 text-sm">
        <div className="flex justify-between">
          <span className="text-ink-muted">Repeat-client rate</span>
          <span className="font-semibold text-ink">68%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-ink-muted">Top service this month</span>
          <span className="font-semibold text-ink">Gel manicure</span>
        </div>
        <div className="flex justify-between">
          <span className="text-ink-muted">Outstanding balance</span>
          <span className="font-semibold text-ink">₦14,000</span>
        </div>
      </div>
    </BrowserFrame>
  ),
  problemTitle: "\"How much did I actually make this month\" shouldn't take an hour",
  problemBody: [
    "Reconstructing revenue by scrolling through bank alerts and old invoices is slow and easy to get wrong.",
    "Since your bookings, invoices, and payments already run through Orbit, your numbers build themselves instead of you rebuilding them by hand every month.",
  ],
  features: [
    { title: "Revenue tracking", description: "See revenue by day, week, or month without exporting anything." },
    { title: "Repeat-client rate", description: "Know how much of your business comes from clients who come back." },
    { title: "Top services", description: "See which services actually drive your revenue." },
    { title: "Outstanding balances", description: "A clear view of what's unpaid, so nothing slips through." },
  ],
  faqs: [
    {
      question: "Do I need to set anything up to see insights?",
      answer: "No. Insights are built automatically from the bookings, invoices, and payments already in your account.",
    },
    {
      question: "Is Insights available on the free plan?",
      answer: "Basic insights (revenue this month, client count) are on the free plan. Advanced insights are part of Pro.",
    },
  ],
  ctaWhatsappMessage: "Hi! I'd like to know more about Orbit's insights.",
};

export default function InsightsProductPage() {
  return <ProductPageTemplate data={data} />;
}
