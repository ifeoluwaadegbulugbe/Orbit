import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function AIAssistant() {
  return (
    <section id="ai-assistant" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 border border-gray-200 rounded-full">
              <Sparkles className="w-3 h-3 text-pink-500" />
              <span className="text-xs font-medium text-gray-700">AI-Powered</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 tracking-tight leading-tight">
              Never miss a follow-up again
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Orbit's AI analyzes your client relationships and suggests the perfect message at the perfect time. Get intelligent reminders and automated follow-ups that feel personal.
            </p>

            <div className="space-y-3 pt-4">
              {[
                "Intelligent priority ranking",
                "Personalized message generation",
                "WhatsApp integration",
                "Smart scheduling"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-pink-500" />
                  </div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Sparkles className="w-4 h-4 text-pink-500" />
                  <span>AI Suggested</span>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                  <p className="text-sm text-gray-800">
                    "Hi Sarah! I noticed your project milestone is coming up. Just checking in to see if you need any support."
                  </p>

                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-xs font-medium">
                      High Priority
                    </span>
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs">
                      Due in 3 days
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white text-sm rounded-lg transition-colors">
                    Send
                  </button>
                  <button className="px-4 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 text-sm rounded-lg transition-colors">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
