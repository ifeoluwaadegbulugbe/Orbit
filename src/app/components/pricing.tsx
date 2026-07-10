"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight, X, Loader2 } from "lucide-react";

const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY as string;
const PAYSTACK_PLAN_CODE = process.env.NEXT_PUBLIC_PAYSTACK_PLAN_CODE as string;

export function Pricing() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started",
      features: [
        "Up to 10 clients",
        "Client management",
        "Reminders & notifications",
        "Bookings & scheduling",
        "Basic invoice creation",
        "Email support"
      ],
      cta: "Get started free",
      href: "https://getorbitapp.vercel.app/",
      highlighted: false
    },
    {
      name: "Pro",
      price: "$17",
      period: "/month",
      description: "For growing businesses",
      features: [
        "Unlimited clients",
        "Everything in Free, plus:",
        "AI assistant & follow-ups",
        "Online payments (Flutterwave, Stripe)",
        "Advanced analytics & insights",
        "Automation workflows",
        "WhatsApp integration",
        "Custom templates",
        "Export & reporting",
        "Priority support",
        "Early access to new features"
      ],
      cta: "Start free trial",
      href: null,
      highlighted: true
    }
  ];

  function validateEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function handleProClick() {
    setShowModal(true);
    setEmail("");
    setEmailError("");
  }

  function handleCheckout(e: React.FormEvent) {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    const handler = window.PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email,
      plan: PAYSTACK_PLAN_CODE,
      currency: "NGN",
      callback(response) {
        console.log("Payment successful:", response.reference);
        setLoading(false);
        setShowModal(false);
        window.location.href = "https://getorbitapp.vercel.app/";
      },
      onClose() {
        setLoading(false);
      },
    });

    handler.openIframe();
  }

  return (
    <>
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

                {plan.highlighted ? (
                  <button
                    onClick={handleProClick}
                    className="w-full py-4 rounded-xl font-medium mb-8 transition-all inline-flex items-center justify-center gap-2 group bg-pink-500 hover:bg-pink-600 text-white shadow-lg shadow-pink-500/25"
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ) : (
                  <a
                    href={plan.href!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-xl font-medium mb-8 transition-all inline-flex items-center justify-center gap-2 group bg-gray-200 hover:bg-gray-300 text-gray-700"
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                )}

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
              Pro plan includes a <span className="font-semibold text-gray-800">7-day free trial</span>. Cancel anytime.
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

      {/* Paystack email capture modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => !loading && setShowModal(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md z-10"
            >
              {/* Close button */}
              <button
                onClick={() => !loading && setShowModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm font-medium mb-5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                7-day free trial
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-1">Start your free trial</h3>
              <p className="text-gray-500 text-sm mb-6">
                Enter your email to continue. You won't be charged for 7 days — cancel anytime.
              </p>

              <form onSubmit={handleCheckout} className="space-y-4">
                <div>
                  <label htmlFor="trial-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email address
                  </label>
                  <input
                    id="trial-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError("");
                    }}
                    placeholder="you@example.com"
                    autoFocus
                    disabled={loading}
                    className={`w-full px-4 py-3 rounded-xl border text-gray-800 placeholder-gray-400 text-sm outline-none transition-all
                      ${emailError
                        ? "border-red-400 focus:ring-2 focus:ring-red-200"
                        : "border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
                      } disabled:opacity-50`}
                  />
                  {emailError && (
                    <p className="mt-1.5 text-xs text-red-500">{emailError}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-pink-500 hover:bg-pink-600 disabled:opacity-60 text-white rounded-xl font-semibold text-sm transition-all shadow-lg shadow-pink-500/25 inline-flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Opening checkout…
                    </>
                  ) : (
                    <>
                      Continue to payment
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <p className="mt-4 text-center text-xs text-gray-400">
                Secured by{" "}
                <span className="font-semibold text-gray-500">Paystack</span>. Your card info is never stored by us.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
