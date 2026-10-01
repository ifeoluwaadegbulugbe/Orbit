import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ComparePageTemplate, type ComparePageData } from "@/components/templates/ComparePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: "Booking Software vs. WhatsApp and Spreadsheets",
  description:
    "Why WhatsApp threads and a client spreadsheet work at first, and what actually breaks as a service business grows past a few clients a week.",
  path: "/compare/whatsapp-and-spreadsheets",
});

const data: ComparePageData = {
  slug: "whatsapp-and-spreadsheets",
  competitorName: "WhatsApp & Spreadsheets",
  h1: "Orbit vs. WhatsApp and spreadsheets",
  intro:
    "Most service businesses start here, and there's nothing wrong with that. The question is what happens once you're booking more than a handful of clients a week.",
  columns: ["Orbit", "WhatsApp + Spreadsheet"],
  rows: [
    { label: "Booking requests", values: ["One link, owner-approved", "Scattered across chat threads"] },
    { label: "Client history", values: ["Automatic, per client", "Manual, easy to lose"] },
    { label: "Payment tracking", values: ["Automatic via Orbit Wallet", "Manual, via screenshots"] },
    { label: "Follow-up reminders", values: ["Automated", "Easy to forget"] },
    { label: "Revenue reporting", values: ["Built-in", "Manual spreadsheet work"] },
  ],
  body: (
    <>
      <p>
        WhatsApp and Instagram are genuinely good at what they're for: reaching clients where they already are. A spreadsheet is
        genuinely good at holding structured data. Neither was built to be a booking system, a client database, and a payment
        tracker at once, which is what most service business owners end up asking them to do.
      </p>
      <p>
        The cracks usually show up the same way: two clients booked for the same slot, a deposit nobody can find proof of, a
        regular client who quietly stopped coming back three months ago and nobody noticed. None of that is a tooling failure
        exactly. It's what happens when one tool is doing a job it wasn't built for.
      </p>
      <p>
        Orbit doesn't ask you to give up WhatsApp or Instagram. Your Booking Link works from either one. It just gives the
        booking, the client record, and the payment somewhere real to live once the conversation is over.
      </p>
    </>
  ),
  faqs: [
    {
      question: "Do I have to stop using WhatsApp to use Orbit?",
      answer: "No. Share your Orbit Booking Link in your WhatsApp status or Instagram bio exactly like you would any other link.",
    },
    {
      question: "At what point does a spreadsheet actually stop working?",
      answer:
        "It varies, but most owners notice it once they're juggling more than a handful of active clients a week, when remembering to update it by hand starts costing real time.",
    },
  ],
};

export default function CompareWhatsappPage() {
  return <ComparePageTemplate data={data} />;
}
