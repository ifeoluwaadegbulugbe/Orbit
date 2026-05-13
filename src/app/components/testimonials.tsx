import { motion } from "motion/react";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Freelance Photographer",
      company: "SM Photography",
      avatar: "SM",
      content: "Orbit transformed how I manage my photography business. The AI follow-ups alone have helped me book 3x more sessions than before.",
      rating: 5
    },
    {
      name: "Marcus Chen",
      role: "Creative Director",
      company: "Studio Chen",
      avatar: "MC",
      content: "Finally, a business tool that's as thoughtfully designed as our work. The automation features save me 10+ hours every single week.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Business Consultant",
      company: "Thompson Advisory",
      avatar: "ET",
      content: "The analytics are incredible. I can see exactly which clients are most profitable and where to focus my energy. Game changer.",
      rating: 5
    },
    {
      name: "David Rodriguez",
      role: "Salon Owner",
      company: "Urban Cuts",
      avatar: "DR",
      content: "Managing bookings and payments used to be a nightmare. Orbit makes it effortless. My clients love how professional everything looks.",
      rating: 5
    },
    {
      name: "Lisa Park",
      role: "Fitness Coach",
      company: "Peak Performance",
      avatar: "LP",
      content: "The mobile app is beautiful and so easy to use. I can manage everything between client sessions without missing a beat.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Agency Founder",
      company: "Wilson Digital",
      avatar: "JW",
      content: "We've tried every CRM out there. Orbit is the only one that feels designed for modern creative businesses. Absolutely love it.",
      rating: 5
    }
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <div className="inline-block px-4 py-2 bg-gray-50 border border-gray-200 rounded-full shadow-sm mb-4">
            <span className="text-sm font-medium text-gray-700">Testimonials</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 tracking-tight leading-tight">
            Loved by
            <span className="text-gray-400"> thousands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join over 10,000 freelancers and business owners who trust Orbit every day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 space-y-6 hover:border-gray-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gray-700 text-gray-700" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-700 font-bold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
