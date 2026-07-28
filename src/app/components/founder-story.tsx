import { motion } from "motion/react";

export function FounderStory() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm mb-6">
            <span className="text-sm font-medium text-gray-700">Built in Lagos</span>
          </div>

          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
            "I started Orbit after experiencing the same problems myself as a freelance UX designer. Managing clients across WhatsApp, spreadsheets, invoices, and different payment tools became frustrating, and I realized thousands of other service business owners were dealing with the exact same chaos."
          </p>

          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-700">
              IA
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-800">Ifeoluwa Adegbulugbe</div>
              <div className="text-sm text-gray-600">Founder, Orbit</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
