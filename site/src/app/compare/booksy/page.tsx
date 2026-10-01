import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ComparePageTemplate, type ComparePageData } from "@/components/templates/ComparePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: "Booksy Alternative: Orbit vs. Booksy",
  description:
    "Comparing Orbit and Booksy for African service businesses: flat subscription vs. marketplace pricing, and who approves each booking.",
  path: "/compare/booksy",
});

const data: ComparePageData = {
  slug: "booksy",
  competitorName: "Booksy",
  h1: "Orbit vs. Booksy",
  intro:
    "Booksy is a marketplace-style booking app popular with salons and barbershops. Orbit is a flat-subscription workspace built for African solo and small-team service businesses. Here's the structural difference.",
  columns: ["Orbit", "Booksy"],
  rows: [
    { label: "Pricing model", values: ["Flat monthly subscription", "Subscription plus marketplace features (verify current terms)"] },
    { label: "Owner approves each booking", values: [true, "Varies by setting"] },
    { label: "Built for African payment methods", values: [true, "Varies by market"] },
    { label: "Client history and notes", values: [true, true] },
  ],
  body: (
    <>
      <p>
        Booksy combines subscription pricing with marketplace discovery, so clients searching the app can find and book
        businesses directly. That's valuable if you want new clients from app search. If most of your bookings already come
        from Instagram, WhatsApp, or word of mouth, you're paying for a discovery layer you're not using.
      </p>
      <p>
        Orbit doesn't try to be a marketplace. It's the system behind your existing client relationships: a booking link you
        share yourself, payments that land in one wallet, and client history that builds itself as you work.
      </p>
    </>
  ),
  faqs: [
    {
      question: "Does Orbit help new clients discover my business the way Booksy does?",
      answer:
        "Not directly. Orbit is built for businesses that already attract clients through social media and word of mouth, and gives you a clean booking link to share on those channels.",
    },
    {
      question: "Can I use Orbit alongside Booksy?",
      answer: "Some businesses do use both during a transition. Most move fully to Orbit once their client base no longer depends on marketplace discovery.",
    },
  ],
};

export default function CompareBooksyPage() {
  return <ComparePageTemplate data={data} />;
}
