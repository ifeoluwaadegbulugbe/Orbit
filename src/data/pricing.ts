import { formatMoney, orbitPayFeeText, type PricingContext } from "./regions";

export const COMING_SOON_LINE = "Orbit Pay: coming soon in your country";

export const TRIAL_DAYS = 7;

export interface PricingPlan {
  name: "Free" | "Pro";
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

/** Plan copy for the pricing cards. Orbit Pay lines depend on the visitor's country. */
export function getPlans(ctx: PricingContext): PricingPlan[] {
  return [
    {
      name: "Free",
      description: "For getting started",
      features: [
        "Up to 10 clients",
        "Booking link and owner approval on bookings",
        "Client management, reminders and notifications",
        "Invoicing",
        ctx.orbitPay ? `Orbit Pay: ${orbitPayFeeText("free")} (Nigeria only)` : COMING_SOON_LINE,
        "Email support",
      ],
      cta: "Start free",
      highlighted: false,
    },
    {
      name: "Pro",
      description: "For when you outgrow 10 clients",
      features: [
        "Unlimited clients",
        "Everything in Free",
        ctx.orbitPay ? `Lower Orbit Pay fee: ${orbitPayFeeText("pro")} (Nigeria only)` : COMING_SOON_LINE,
        "Automations and follow-ups",
        "Advanced insights",
        "Custom templates",
        "Priority support",
      ],
      cta: `Try Pro free for ${TRIAL_DAYS} days`,
      highlighted: true,
    },
  ];
}

/** What a yearly plan saves compared with twelve monthly payments. Zero if it does not. */
export function yearlySaving(ctx: PricingContext): number {
  return Math.max(0, ctx.price.proMonthly * 12 - ctx.price.proYearly);
}

export function proMonthlyText(ctx: PricingContext): string {
  return formatMoney(ctx.price.proMonthly, ctx.price);
}

export function proYearlyText(ctx: PricingContext): string {
  return formatMoney(ctx.price.proYearly, ctx.price);
}
