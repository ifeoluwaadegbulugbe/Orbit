import { orbitPayFeeText, type PricingContext } from "./regions";
import { TRIAL_DAYS } from "./pricing";

export function getPricingFaqs(ctx: PricingContext) {
  return [
    {
      question: "Does Orbit take a cut of what I charge my clients?",
      answer: ctx.orbitPay
        ? `Your subscription is a flat price. It does not change with how much you earn. If you take payments through Orbit Pay, a processing fee applies to each payment: ${orbitPayFeeText("free")} on Free, and ${orbitPayFeeText("pro")} on Pro. Bank transfers and cash that you record yourself have no fee.`
        : "Your subscription is a flat price. It does not change with how much you earn. Orbit Pay is not available in your country yet, so there are no payment fees. You can record bank transfers and cash yourself.",
    },
    {
      question: "What's the difference between Free and Pro?",
      answer:
        "Free covers up to 10 clients, your booking link, invoicing and email support. Pro removes the client limit and adds automations and follow-ups, advanced insights, custom templates and priority support.",
    },
    {
      question: "Is there a free trial for Pro?",
      answer: `Yes. You can try Pro free for ${TRIAL_DAYS} days.`,
    },
    {
      question: "What happens when I hit 10 clients on Free?",
      answer: "Your data stays. You just need Pro to add more clients.",
    },
    {
      question: "Is Orbit a bank?",
      answer: "No. Orbit is business software. Payments are processed by Paystack and paid directly into your bank account.",
    },
    {
      question: "Do I have to use Orbit Pay?",
      answer: "No. You can record bank transfers and cash manually at no fee.",
    },
  ];
}
