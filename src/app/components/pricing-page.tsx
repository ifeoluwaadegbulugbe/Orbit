import { useState } from "react";
import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { Seo } from "./Seo";
import { Navbar } from "./navbar";
import { Pricing } from "./pricing";
import { Footer } from "./footer";

const pricingFaqs = [
  {
    question: "Is there a contract or long-term commitment?",
    answer: "No. Orbit Pro is billed monthly with no long-term contract. Upgrade, downgrade, or cancel anytime."
  },
  {
    question: "Can I cancel my Pro subscription anytime?",
    answer: "Yes. You can cancel anytime from your account settings, and you'll keep Pro access until the end of your current billing period. No cancellation fees."
  },
  {
    question: "Can I pay for my Pro subscription with local payment methods?",
    answer: "Yes. In addition to major cards, you can pay for your Pro subscription with Paystack, making it easy to subscribe from anywhere in Africa."
  }
];

const pricingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricingFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

function PricingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Pricing questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {pricingFaqs.map((faq, i) => (
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

export function PricingPage() {
  return (
    <>
      <Seo
        title="Orbit Pricing: Simple, Transparent Plans for Service Businesses"
        description="See Orbit's pricing. Start free with up to 10 clients, or upgrade to Pro for $12/month with unlimited clients, AI assistant, online payments, and more."
        canonical="https://www.getorbitcrm.com/pricing"
        schema={pricingFaqSchema}
      />
      <Navbar />
      <div className="min-h-screen bg-white pt-20">
        <Pricing />

        <section className="py-12 px-6 bg-white text-center">
          <p className="text-sm text-gray-500 mb-4">Want more detail on what's included?</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/features/booking" className="text-sm font-medium text-gray-700 hover:text-gray-900 underline">
              Explore Bookings
            </Link>
            <Link to="/features/payments" className="text-sm font-medium text-gray-700 hover:text-gray-900 underline">
              Explore Orbit Wallet & Payments
            </Link>
          </div>
        </section>

        <PricingFaq />
      </div>
      <Footer />
    </>
  );
}
