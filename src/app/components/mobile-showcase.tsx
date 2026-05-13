import { motion } from "motion/react";
import { Smartphone, Zap, RefreshCw, Lock } from "lucide-react";

export function MobileShowcase() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <div className="inline-block px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm mb-4">
            <span className="text-sm font-medium text-gray-700">Mobile Apps</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 tracking-tight leading-tight">
            Your business
            <span className="text-gray-400"> in your pocket</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Native iOS and Android apps with offline support and real-time sync.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Real-time sync</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    All your data syncs instantly across your devices. Never miss an update.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Secure & private</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Enterprise-grade encryption keeps your business data safe and secure at all times.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Lightning fast</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Optimized performance means instant loading and smooth interactions on any device.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-200 rounded-full">
                <Smartphone className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-600">Available on iOS & Android</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all group max-w-md w-full"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-6"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-1">Mobile App</h4>
                  <p className="text-sm text-gray-600">iOS & Android apps</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}