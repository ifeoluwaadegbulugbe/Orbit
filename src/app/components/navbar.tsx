import { motion, useScroll, useTransform } from "motion/react";

export function Navbar() {
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 50], [0, 1]);

  return (
    <motion.nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl">
      <motion.div
        style={{ opacity: borderOpacity }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"
      />
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">O</span>
            </div>
            <span className="text-lg font-semibold text-gray-700">Orbit</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden md:flex items-center gap-8"
          >
            <a
              href="#hero"
              className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              About
            </a>
            <a
              href="#platform-overview"
              className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              Pricing
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3"
          >
            <a
              href="https://apps.apple.com/app/orbit"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Download app
            </a>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
