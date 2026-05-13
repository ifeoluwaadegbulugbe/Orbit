import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Automation() {
  const steps = [
    { label: "Client Added", description: "New client automatically added to your CRM" },
    { label: "Reminder Scheduled", description: "Smart reminders set based on timeline" },
    { label: "Invoice Sent", description: "Professional invoice generated and sent" },
    { label: "Payment Received", description: "Payment tracked and logged automatically" }
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 tracking-tight">
            Automate your workflow
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Set up once and let Orbit handle the repetitive tasks automatically.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gray-200 text-gray-700 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1">{step.label}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>

              {i < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
