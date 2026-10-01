import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ProductPageTemplate, type ProductPageData } from "@/components/templates/ProductPageTemplate";
import { InvoiceMockup } from "@/components/mockups/InvoiceMockup";

export const metadata: Metadata = buildMetadata({
  title: "Invoicing and Payment Software for Service Businesses",
  description:
    "Orbit Wallet lets clients pay by card, bank transfer, or mobile money, with invoices marked paid automatically. No merchant account to set up yourself.",
  path: "/product/payments",
});

const data: ProductPageData = {
  breadcrumbLabel: "Payments",
  path: "/product/payments",
  eyebrow: "Payments",
  h1: "Get paid without chasing screenshots",
  intro:
    "Every invoice includes a secure payment page. When a client pays, it lands in your Orbit Wallet and the invoice marks itself paid.",
  mockup: <InvoiceMockup />,
  problemTitle: "A bank transfer and a screenshot isn't a payment system",
  problemBody: [
    "You send an account number over WhatsApp, wait for a transfer, and ask for proof. Then you have to remember which client paid, for what, and whether it's actually settled.",
    "Orbit removes that step. Every invoice carries its own payment page, and the money lands in one place: your Orbit Wallet.",
  ],
  features: [
    { title: "Orbit Wallet", description: "Every payment, by card, bank transfer, or mobile money, lands in one place." },
    { title: "Automatic reconciliation", description: "An invoice marks itself paid the moment the payment clears." },
    { title: "Deposits and partial payments", description: "Request a deposit before you start work, or let clients pay in installments." },
    { title: "No merchant account setup", description: "Orbit handles the payment processing behind the scenes." },
  ],
  faqs: [
    {
      question: "Do I need to set up my own payment provider account?",
      answer: "No. Orbit Wallet handles payment processing behind the scenes using licensed payment partners.",
    },
    {
      question: "How do I withdraw my money?",
      answer: "Whenever you choose, you can withdraw your Orbit Wallet balance to your linked bank account.",
    },
    {
      question: "Is Orbit Wallet available on the free plan?",
      answer: "No. Orbit Wallet is part of the Pro plan. The free plan supports manual invoicing, where you mark invoices paid yourself.",
    },
  ],
  ctaWhatsappMessage: "Hi! I'd like to know more about Orbit Wallet.",
};

export default function PaymentsProductPage() {
  return <ProductPageTemplate data={data} />;
}
