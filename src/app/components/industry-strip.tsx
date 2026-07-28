import { motion } from "motion/react";
import { Gem, Scissors, Palette, Camera, GraduationCap } from "lucide-react";

export function IndustryStrip() {
  const industries = [
    { icon: Gem, label: "Nail Technicians" },
    { icon: Scissors, label: "Hair Stylists" },
    { icon: Palette, label: "Makeup Artists" },
    { icon: Camera, label: "Photographers" },
    { icon: GraduationCap, label: "Tutors & Coaches" }
  ];

  return (
    <section className="py-20 px-6 bg-white border-y border-gray-200">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-3"
        >
          <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">
            Built for service businesses like yours
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Whatever you do, Orbit fits how you run it
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 px-5 py-3 bg-gray-50 border border-gray-200 rounded-full"
              >
                <Icon className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">{industry.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
