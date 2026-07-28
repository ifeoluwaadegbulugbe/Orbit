import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const featureLinks = [
  { label: "Overview", to: "/#platform-overview" },
  { label: "Bookings", to: "/features/booking" },
  { label: "Payments", to: "/features/payments" }
];

export function Navbar() {
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 50], [0, 1]);
  const [featuresOpen, setFeaturesOpen] = useState(false);

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
          >
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="Orbit logo" className="w-8 h-8" />
              <span className="text-lg font-semibold text-gray-700">Orbit</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden md:flex items-center gap-8"
          >
            <Link
              to="/#hero"
              className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              About
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setFeaturesOpen(true)}
              onMouseLeave={() => setFeaturesOpen(false)}
            >
              <button
                onClick={() => setFeaturesOpen((v) => !v)}
                className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                Features
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${featuresOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {featuresOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg py-2"
                  >
                    {featureLinks.map((link) => (
                      <Link
                        key={link.label}
                        to={link.to}
                        onClick={() => setFeaturesOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link
              to="/pricing"
              className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              Pricing
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3"
          >
            <a
              href="https://getorbitapp.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Get started
            </a>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
