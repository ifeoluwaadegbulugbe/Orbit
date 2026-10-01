import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ProductPageTemplate, type ProductPageData } from "@/components/templates/ProductPageTemplate";
import { ClientProfileMockup } from "@/components/mockups/ClientProfileMockup";

export const metadata: Metadata = buildMetadata({
  title: "Client Management Software for Service Businesses",
  description:
    "Orbit keeps every client's history, preferences, and payments in one profile, replacing scattered notes and spreadsheets.",
  path: "/product/clients",
});

const data: ProductPageData = {
  breadcrumbLabel: "Clients",
  path: "/product/clients",
  eyebrow: "Clients",
  h1: "Every client, one profile, no more guessing",
  intro:
    "Visit history, preferences, lifetime spend, and notes, all in one place, so you never have to re-ask a returning client what they got last time.",
  mockup: <ClientProfileMockup />,
  problemTitle: "Client details scattered across chats and memory don't scale",
  problemBody: [
    "When client history lives in your head and a few old WhatsApp threads, every returning client means scrolling back to remember what they like, what they paid, and when they last came in.",
    "A client profile that updates itself every time someone books or pays means you walk into every appointment already knowing the details that make a client feel remembered.",
  ],
  features: [
    { title: "Full visit history", description: "Every booking and payment automatically logged against the right client." },
    { title: "Notes and preferences", description: "Keep details on past services, product notes, or anything worth remembering." },
    { title: "Lifetime value at a glance", description: "See how much a client has spent with you over time." },
    { title: "Rebooking signals", description: "Spot clients who haven't been back in a while, before they drift away." },
  ],
  faqs: [
    {
      question: "Does a client profile update automatically?",
      answer: "Yes. Every booking, invoice, and payment is logged against the client automatically, no manual data entry required.",
    },
    {
      question: "How many clients can I add on the free plan?",
      answer: "Up to 10 clients on the free plan. Pro removes the limit entirely.",
    },
  ],
};

export default function ClientsProductPage() {
  return <ProductPageTemplate data={data} />;
}
