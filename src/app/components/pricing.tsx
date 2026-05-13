import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started",
      features: [
        "Up to 50 clients",
        "Client management",
        "Reminders & notifications",
        "Bookings & scheduling",
        "Basic invoice creation",
        "Email support"
      ],
      cta: "Get started free",
      highlighted: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "For growing businesses",
      features: [
        "Unlimited clients",
        "Everything in Free, plus:",
        "AI assistant & follow-ups",
        "Online payments (Stripe, Paystack, Flutterwave)",
        "Advanced analytics & insights",
        "Automation workflows",
        "WhatsApp integration",
        "Custom templates",
        "Export & reporting",
        "Priority support",
        "Early access to new features"
      ],
      cta: "Start free trial",
      highlighted: true
    }
  ];

  return (
    <section id="pricing" className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <div className="inline-block px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm mb-4">
            <span className="text-sm font-medium text-gray-700">Pricing</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 tracking-tight leading-tight">
            Simple,
            <span className="text-gray-400"> transparent pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free and upgrade as you grow. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white rounded-3xl p-10 ${
                plan.highlighted
                  ? "border-2 border-pink-500 shadow-2xl shadow-pink-500/10"
                  : "border-2 border-gray-200"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-pink-500 text-white rounded-full text-sm font-medium shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="flex items-end gap-1 mb-2">
                  <span className="text-6xl font-bold text-gray-800">{plan.price}</span>
                  {plan.period && <span className="text-xl text-gray-600 mb-2">{plan.period}</span>}
                </div>

                {plan.highlighted && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 text-pink-700 rounded-lg text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-medium">7-day free trial</span>
                  </div>
                )}
              </div>

              <button
                className={`w-full py-4 rounded-xl font-medium mb-8 transition-all inline-flex items-center justify-center gap-2 group ${
                  plan.highlighted
                    ? "bg-pink-500 hover:bg-pink-600 text-white shadow-lg shadow-pink-500/25"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <div className="space-y-4">
                <div className="text-sm font-semibold text-gray-800 mb-4">What's included:</div>
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 space-y-4"
        >
          <p className="text-gray-600">
            All plans include a <span className="font-semibold text-gray-800">7-day free trial</span>. No credit card required.
          </p>

          <div className="flex items-center justify-center gap-8 pt-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Money-back guarantee</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}