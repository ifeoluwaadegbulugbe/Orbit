import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-16 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl md:rounded-3xl overflow-hidden border border-gray-200"
        >
          <div className="relative px-6 py-12 md:px-12 md:py-20 lg:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8 max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-white border border-gray-200 rounded-full mb-2 md:mb-4">
                <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-pink-500" />
                <span className="text-xs md:text-sm font-semibold text-gray-700">Limited Time Offer</span>
              </div>

              <h2 className="text-[32px] md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight tracking-tight">
                Ready to transform
                <br />
                <span className="text-gray-400">your business?</span>
              </h2>

              <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Join over 10,000 freelancers and business owners who've streamlined their operations with Orbit.
              </p>

              <div className="flex items-center justify-center pt-2 md:pt-4">
                <a
                  href="https://getorbitapp.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-3 md:px-8 md:py-4 bg-pink-500 hover:bg-pink-600 text-white text-base rounded-xl font-semibold transition-all shadow-xl shadow-pink-500/25 inline-flex items-center gap-2"
                >
                  Get started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}