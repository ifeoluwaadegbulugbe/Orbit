import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-pink-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm"
          >
            <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
            <span className="text-sm text-gray-600">Now in early access</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h1 className="text-[40px] md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-800 leading-[1.2] md:leading-[1.1] tracking-tight">
              Your entire business
              <br />
              <span className="text-gray-400">in one workspace</span>
            </h1>

            <p className="text-base md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Manage clients, bookings, invoices, and payments with AI-powered automation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="https://apps.apple.com/app/orbit"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-xl font-semibold transition-all shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/30 inline-flex items-center gap-2"
            >
              Download app
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}