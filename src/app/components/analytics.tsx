import { motion } from "motion/react";
import { TrendingUp } from "lucide-react";

export function Analytics() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 tracking-tight">
            Know exactly how your business is performing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Clear insights and analytics to help you make better business decisions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg"
        >
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              { label: "Total Revenue", value: "$48,392", change: "+32.5%" },
              { label: "Active Clients", value: "248", change: "+18%" },
              { label: "Avg. Project Value", value: "$2,845", change: "+12%" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-sm text-gray-500">{stat.label}</div>
                <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
                <div className="flex items-center gap-1 text-sm">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-green-600 font-medium">{stat.change}</span>
                  <span className="text-gray-500">vs last month</span>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="flex items-end justify-between h-48 gap-2">
              {[40, 52, 48, 65, 58, 72, 68, 85, 92, 88, 95, 100].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="flex-1 bg-gray-200 rounded-t"
                  style={{ minHeight: "20px" }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-4 text-xs text-gray-500">
              <span>Jan</span>
              <span>Dec</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
