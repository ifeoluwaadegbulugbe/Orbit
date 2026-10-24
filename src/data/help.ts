export interface HelpGroup {
  topic: string;
  items: { question: string; answer: string }[];
}

export const helpGroups: HelpGroup[] = [
  {
    topic: "Getting started",
    items: [
      { question: "How do I create my Booking Link?", answer: "Sign up for a free account at app.getorbitcrm.com, add your services, and Orbit generates your Booking Link automatically." },
      { question: "Is there a free plan?", answer: "Yes. The free plan covers up to 10 clients, your booking link, client management and invoicing." },
      { question: "Do I need a website to use Orbit?", answer: "No. Your Booking Link works on its own, shared directly in your Instagram bio or WhatsApp status." },
    ],
  },
  {
    topic: "Bookings",
    items: [
      { question: "Do I have to approve every booking?", answer: "Yes, by design. Every request waits for your approval before it's confirmed on your calendar." },
      { question: "Can I set different durations for different services?", answer: "Yes. Each service has its own duration, so your schedule reflects how long work actually takes." },
    ],
  },
  {
    topic: "Payments",
    items: [
      { question: "What is Orbit Pay?", answer: "Orbit Pay lets clients pay deposits and invoices by card or bank transfer. Payments are processed by Paystack and settle straight into your own bank account. It is available in Nigeria." },
      { question: "Do I have to use Orbit Pay?", answer: "No. You can record bank transfers and cash manually at no fee." },
      { question: "Does Orbit hold my money?", answer: "No. Orbit never holds your money. Paystack pays each payment straight into your bank account." },
    ],
  },
  {
    topic: "Billing",
    items: [
      { question: "Can I cancel anytime?", answer: "Yes. Cancel your Pro subscription anytime from your account settings. No cancellation fees." },
      { question: "Is there a contract?", answer: "No. Pro is billed monthly with no long-term commitment." },
    ],
  },
];
