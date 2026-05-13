import { motion } from "motion/react";

export function TrustedBy() {
  const companies = ["Studio", "Creative Co", "Agency", "Makers", "Ventures"];

  return (
    <section className="py-16 px-6 bg-white border-y border-gray-200">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">
            Trusted by modern businesses
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
          {companies.map((company, i) => (
            <motion.div
              key={company}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-lg font-semibold text-gray-700"
            >
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
