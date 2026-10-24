import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ProductPageTemplate, type ProductPageData } from "@/components/templates/ProductPageTemplate";
import { InvoiceMockup } from "@/components/mockups/InvoiceMockup";

export const metadata: Metadata = buildMetadata({
  title: "Invoicing and Payment Software for Service Businesses",
  description:
    "Orbit Pay lets clients pay invoices and deposits by card or bank transfer, with invoices marked paid automatically. Payments settle straight into your bank account.",
  path: "/product/payments",
});

const data: ProductPageData = {
  breadcrumbLabel: "Payments",
  path: "/product/payments",
  eyebrow: "Payments",
  h1: "Get paid without chasing screenshots",
  intro:
    "Every invoice includes a secure payment page. When a client pays through Orbit Pay, the money goes straight to your bank account and the invoice marks itself paid.",
  mockup: <InvoiceMockup />,
  problemTitle: "A bank transfer and a screenshot isn't a payment system",
  problemBody: [
    "You send an account number over WhatsApp, wait for a transfer, and ask for proof. Then you have to remember which client paid, for what, and whether it's actually settled.",
    "Orbit removes that step. Every invoice carries its own payment page, and each payment is matched to the right client and invoice for you.",
  ],
  features: [
    { title: "Orbit Pay", description: "Clients pay by card or bank transfer. Paystack processes the payment and pays it into your bank account." },
    { title: "Automatic reconciliation", description: "An invoice marks itself paid the moment the payment clears." },
    { title: "Deposits and partial payments", description: "Request a deposit before you start work, or let clients pay in installments." },
    { title: "You choose who pays the fee", description: "Decide whether you or your client covers the Orbit Pay processing fee." },
  ],
  faqs: [
    {
      question: "Is Orbit a bank?",
      answer: "No. Orbit is business software. Payments are processed by Paystack and paid directly into your bank account.",
    },
    {
      question: "Do I have to use Orbit Pay?",
      answer: "No. You can record bank transfers and cash manually at no fee.",
    },
    {
      question: "Does Orbit hold my money?",
      answer: "No. Orbit never holds your money. Paystack, a licensed payment processor, settles payments into your own bank account.",
    },
    {
      question: "Where is Orbit Pay available?",
      answer: "Orbit Pay is available in Nigeria now. It is coming to other countries. See the pricing page for the fees.",
    },
  ],
};

export default function PaymentsProductPage() {
  return <ProductPageTemplate data={data} />;
}
