import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ProductPageTemplate, type ProductPageData } from "@/components/templates/ProductPageTemplate";
import { ScheduleMockup } from "@/components/mockups/ScheduleMockup";

export const metadata: Metadata = buildMetadata({
  title: "Appointment Reminders & Follow-Up Automation",
  description:
    "Orbit automates the reminders and follow-ups you'd otherwise have to send by hand, so clients show up and come back.",
  path: "/product/automations",
});

const data: ProductPageData = {
  breadcrumbLabel: "Automations",
  path: "/product/automations",
  eyebrow: "Automations",
  h1: "The reminders and follow-ups you'd never have time to send by hand",
  intro:
    "Set it up once: a reminder before every appointment, a nudge to a client who hasn't rebooked. Orbit runs it quietly in the background.",
  mockup: <ScheduleMockup />,
  problemTitle: "Follow-ups are the first thing to slip when you're busy",
  problemBody: [
    "Remembering to message every client a day before their appointment, or reaching out to someone who hasn't booked in two months, is easy to mean to do and easy to forget.",
    "Automations don't replace your judgment. They just make sure the routine messages go out even on your busiest day.",
  ],
  features: [
    { title: "Appointment reminders", description: "Clients get reminded automatically before their booking." },
    { title: "Rebooking nudges", description: "A quiet alert when a regular client has gone quiet." },
    { title: "Invoice reminders", description: "Automatic follow-up on an invoice that's gone unpaid." },
    { title: "Sensible defaults", description: "Automations ship switched on with defaults that make sense, not a workflow you have to build." },
  ],
  faqs: [
    {
      question: "Do I have to build my own automation workflows?",
      answer:
        "No. Orbit ships with automations already configured with sensible defaults, like a reminder 24 hours before a booking. You can turn individual ones on or off.",
    },
    {
      question: "Are automations available on the free plan?",
      answer: "Basic manual reminders are available on the free plan. Automated sequences are part of Pro.",
    },
  ],
};

export default function AutomationsProductPage() {
  return <ProductPageTemplate data={data} />;
}
