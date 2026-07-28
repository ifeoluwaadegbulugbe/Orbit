import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Wallet, Repeat, Receipt, ShieldCheck, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { Seo } from "./Seo";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

const paymentFeatures = [
  {
    icon: Wallet,
    title: "Orbit Wallet",
    description: "Every payment your clients make — by card, bank transfer, or mobile money — lands directly in your Orbit Wallet. See your current balance, pending balance, and full transaction history in one dashboard."
  },
  {
    icon: Repeat,
    title: "Automatic reconciliation",
    description: "The moment a payment succeeds, Orbit marks the invoice paid, updates your revenue analytics, and records the transaction against the right client and project — no manual matching of bank alerts to invoices."
  },
  {
    icon: Receipt,
    title: "Deposits, partial payments & refunds",
    description: "Request a deposit before starting work, let clients pay an invoice in installments, or issue a refund when you need to — all from the same wallet, with a receipt generated automatically every time."
  },
  {
    icon: ShieldCheck,
    title: "Built-in security",
    description: "Transactions are encrypted and processed through licensed payment partners including Flutterwave and Stripe. Your clients' card details are never exposed to Orbit directly, and every transaction is logged."
  }
];

const paymentsFaqs = [
  {
    question: "What payment methods can my clients use to pay me?",
    answer: "Clients can pay by card, bank transfer, or mobile money, depending on what's available in their country. The funds land directly in your Orbit Wallet."
  },
  {
    question: "Do I need to set up my own Stripe, Flutterwave, or Paystack account?",
    answer: "No. Orbit Wallet handles the payment processing setup behind the scenes using licensed payment partners like Flutterwave and Stripe, so you can start accepting payments without creating a separate merchant account yourself."
  },
  {
    question: "How do I get my money out of Orbit Wallet?",
    answer: "Whenever you choose, you can withdraw your Orbit Wallet balance to your linked bank account."
  },
  {
    question: "Is my money safe in Orbit Wallet?",
    answer: "Yes. Transactions are encrypted in transit, processed through licensed payment partners, and your clients' card details are never exposed to Orbit directly."
  }
];

const paymentsFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: paymentsFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

function PaymentsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Payments questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {paymentsFaqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === i ? (
                  <Minus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                )}
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? "auto" : 0,
                  opacity: openIndex === i ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PaymentsPage() {
  return (
    <>
      <Seo
        title="Accept Payments Online in Nigeria | Orbit Wallet"
        description="Accept payments online in Nigeria and beyond with Orbit Wallet — invoice clients, collect deposits, get paid by card, bank transfer, or mobile money, and withdraw to your bank anytime."
        canonical="https://getorbitcrm.com/features/payments"
        schema={paymentsFaqSchema}
      />
      <Navbar />
      <div className="min-h-screen bg-white pt-20">
        <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full shadow-sm"
            >
              <Wallet className="w-3 h-3 text-green-600" />
              <span className="text-xs font-medium text-gray-700">Payments</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-gray-800 tracking-tight leading-tight"
            >
              Accept payments online in Nigeria — without chasing bank transfers
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Orbit Wallet lets clients pay you by card, bank transfer, or mobile money, deposits straight into your wallet, and lets you withdraw to your bank whenever you're ready — all without setting up a separate merchant account.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="https://getorbitapp.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-pink-500 px-8 py-4 font-semibold text-white shadow-lg shadow-pink-500/25 transition-all hover:bg-pink-600"
              >
                Start accepting payments in minutes
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Getting paid shouldn't mean a folder of screenshots
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              You send a bank account number over WhatsApp, wait for a transfer, and ask for a screenshot as proof. Then you have to remember which client paid, for what, and whether the invoice is actually settled — usually by scrolling back through chat history.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Most payment tools don't make this easier for a solo business owner. They expect you to set up a merchant account, get through an approval process, and manage a separate dashboard — before you've collected a single payment.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Orbit removes that step entirely. Every invoice you send includes a secure payment page. When a client pays, the money goes straight into your Orbit Wallet, the invoice is marked paid automatically, and your revenue numbers update on their own — no spreadsheet, no screenshots, no separate Stripe, Flutterwave, or Paystack account to set up yourself.
            </p>
          </div>
        </section>

        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
                One wallet for everything you get paid
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Orbit Wallet is built into invoices, bookings, and services — not a separate app to manage.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {paymentFeatures.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border border-gray-200 rounded-2xl p-8"
                  >
                    <div className="w-12 h-12 bg-green-50 border border-green-100 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              From invoice to your bank account
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Send an invoice or request a booking deposit. Your client pays with a card, bank transfer, or mobile money — whatever's available to them. The payment lands in your Orbit Wallet immediately, and Orbit records everything: the client, the project, the invoice, the date, and the method.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From there, the balance is yours to withdraw to your linked bank account whenever you choose. Nothing sits in limbo waiting for you to reconcile it manually, and your client profiles show a full payment timeline — invoices, deposits, and completed payments — without you having to track any of it by hand.
            </p>
          </div>
        </section>

        <PaymentsFaq />

        <section className="py-20 px-6 bg-white text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Get paid without the back-and-forth
            </h2>
            <p className="text-lg text-gray-600">
              Send your first invoice with Orbit Wallet built in.
            </p>
            <a
              href="https://getorbitapp.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-pink-500 px-8 py-4 font-semibold text-white shadow-lg shadow-pink-500/25 transition-all hover:bg-pink-600"
            >
              Start accepting payments in minutes
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <div className="pt-2">
              <Link to="/pricing" className="text-sm text-gray-500 hover:text-gray-700 underline">
                See pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
