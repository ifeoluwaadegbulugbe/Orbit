export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

// TODO-verify: confirm Orbit Wallet's live status against the actual
// product before launch. See content/TODO-verify.md. Feature split and
// the 2.5% per-transaction processing fee confirmed by the business owner.
export const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "Up to 10 clients",
      "Booking Link",
      "Client management",
      "Reminders & notifications",
      "Manual invoicing (no Orbit Wallet)",
      "Email support",
    ],
    cta: "Start free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    description: "For growing businesses",
    features: [
      "Unlimited clients",
      "Orbit Wallet (2.5% per transaction), get paid automatically",
      "Automations & follow-ups",
      "Advanced insights",
      "Custom templates",
      "Priority support",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
];
