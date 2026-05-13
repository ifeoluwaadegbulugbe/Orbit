import { motion } from "motion/react";

export function AnnouncementBar() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white border-b border-gray-200 py-2.5 px-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <p className="text-sm text-gray-600">
          Orbit Pro launches soon — Join the waitlist →
        </p>
      </div>
    </motion.div>
  );
}
