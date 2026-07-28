import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[80vh] items-center overflow-hidden px-6 pt-32 pb-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-pink-100/40 blur-3xl" />
      <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-purple-100/30 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-pink-500" />
            <span className="text-sm text-gray-600">
              Built for service businesses
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h1 className="text-[40px] font-bold leading-[1.2] tracking-tight text-gray-800 md:text-6xl md:leading-[1.1] lg:text-7xl xl:text-8xl">
              Run your entire service business
              <br />
              <span className="text-gray-400">in one workspace</span>
            </h1>

            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 md:text-xl lg:text-2xl">
              Orbit is the AI-powered business management platform for service
              businesses, helping you manage clients, bookings, invoicing, and
              payments in one place.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="https://getorbitapp.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-pink-500 px-8 py-4 font-semibold text-white shadow-lg shadow-pink-500/25 transition-all hover:bg-pink-600 hover:shadow-xl hover:shadow-pink-500/30"
            >
              Get started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}