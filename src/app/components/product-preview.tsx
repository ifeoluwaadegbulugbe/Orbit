import { motion } from "motion/react";
import { BarChart3, Users, FileText, CreditCard, Calendar, Sparkles } from "lucide-react";

export function ProductPreview() {
  const stats = [
    { icon: BarChart3, label: "Revenue", value: "$48.3k", change: "+12.5%", color: "text-gray-700" },
    { icon: Users, label: "Clients", value: "248", change: "+18%", color: "text-gray-700" },
    { icon: FileText, label: "Invoices", value: "142", change: "+8%", color: "text-gray-700" },
    { icon: CreditCard, label: "Payments", value: "98%", change: "on time", color: "text-green-600" },
    { icon: Calendar, label: "Bookings", value: "64", change: "this month", color: "text-gray-700" },
    { icon: Sparkles, label: "AI Insights", value: "12", change: "active", color: "text-pink-500" },
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 tracking-tight leading-tight">
            Everything in
            <span className="text-gray-400"> one place</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A complete view of your business with real-time insights and automation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center group-hover:border-gray-300 transition-colors">
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-xs font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                    {stat.change}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-2">{stat.label}</div>
                  <div className="text-4xl font-bold text-gray-700">{stat.value}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-12 overflow-hidden relative border border-gray-200"
        >
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full">
                <Sparkles className="w-3 h-3 text-pink-500" />
                <span className="text-xs font-medium text-gray-700">Powered by AI</span>
              </div>

              <h3 className="text-4xl font-bold text-gray-800">
                Smart insights that help you grow
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                Orbit's AI analyzes your business patterns and provides actionable recommendations to increase revenue and improve client relationships.
              </p>

              <div className="flex items-center gap-3 pt-4">
                <a
                  href="#ai-assistant"
                  className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-xl font-medium transition-colors text-center inline-block"
                >
                  Learn more
                </a>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { title: "Revenue optimization", value: "+$12,400", desc: "Suggested pricing adjustments" },
                { title: "Client retention", value: "94%", desc: "Follow-up completion rate" },
                { title: "Time saved", value: "8.5 hrs", desc: "Automated tasks this week" }
              ].map((insight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">{insight.title}</span>
                    <span className="text-2xl font-bold text-gray-700">{insight.value}</span>
                  </div>
                  <div className="text-xs text-gray-500">{insight.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
