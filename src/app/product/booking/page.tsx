import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ProductPageTemplate, type ProductPageData } from "@/components/templates/ProductPageTemplate";
import { BookingLinkMockup } from "@/components/mockups/BookingLinkMockup";

export const metadata: Metadata = buildMetadata({
  title: "Online Booking Software for Service Businesses",
  description:
    "Orbit's booking software gives clients a link to book your real availability, while you approve every request before it's confirmed. No double bookings.",
  path: "/product/booking",
});

const data: ProductPageData = {
  breadcrumbLabel: "Booking",
  path: "/product/booking",
  eyebrow: "Booking",
  h1: "A booking link clients actually use, and a calendar only you control",
  intro:
    "Share one link in your Instagram bio or WhatsApp status. Clients pick a time that's really open. You approve it before it's confirmed.",
  mockup: <BookingLinkMockup />,
  problemTitle: "Booking over chat doesn't scale past a few clients a week",
  problemBody: [
    "When every booking happens in a WhatsApp or Instagram thread, you're manually checking your calendar, replying to the same questions, and hoping you don't mix up two people asking for the same slot.",
    "It works when you have five regular clients. It breaks down fast once you're jugging twenty, and a missed message starts costing you real bookings.",
  ],
  features: [
    { title: "Shareable Booking Link", description: "One link for Instagram, WhatsApp, or anywhere else clients find you." },
    { title: "Owner approval on every booking", description: "Review each request against your real schedule before it's confirmed." },
    { title: "Automatic reminders", description: "Clients get a reminder before their appointment, without you sending it yourself." },
    { title: "Service-specific durations", description: "Set how long each service actually takes, so your day doesn't run over." },
  ],
  faqs: [
    {
      question: "Can clients book instantly without my approval?",
      answer:
        "No, by design. Every booking request waits for you to approve or decline it, so nothing lands on your calendar without your say-so.",
    },
    {
      question: "Does the Booking Link work on the free plan?",
      answer: "Yes. The Booking Link is included on Orbit's free plan, up to 10 clients.",
    },
    {
      question: "Can I set different availability for different services?",
      answer: "Yes. Each service can have its own duration, so a 90-minute service doesn't get squeezed into a 45-minute slot.",
    },
  ],
};

export default function BookingProductPage() {
  return <ProductPageTemplate data={data} />;
}
