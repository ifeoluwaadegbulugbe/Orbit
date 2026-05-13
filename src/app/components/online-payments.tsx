import { motion } from "motion/react";
import { CreditCard, Check } from "lucide-react";

export function OnlinePayments() {
  return (
    <section id="payments" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Invoice</div>
                      <div className="font-semibold text-gray-800">INV-2024-042</div>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Amount</span>
                    <span className="font-semibold text-gray-800">$2,450.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Payment Method</span>
                    <span className="font-medium text-gray-800">Stripe</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Status</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                      Paid
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              {["USD", "EUR", "GBP"].map((currency) => (
                <div
                  key={currency}
                  className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-700"
                >
                  {currency}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 lg:order-2"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 tracking-tight leading-tight">
              Get paid from anywhere in the world
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Accept payments globally with seamless integration to leading payment providers. Support for 150+ currencies worldwide.
            </p>

            <div className="space-y-3">
              {[
                "Multiple payment providers",
                "Automatic tracking and receipts",
                "Secure encrypted transactions",
                "Instant notifications"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-xs text-gray-500 mb-3">Supported providers</p>
              <div className="flex gap-3">
                {["Stripe", "Paystack", "Flutterwave"].map((provider) => (
                  <div
                    key={provider}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700"
                  >
                    {provider}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
