import { motion } from "motion/react";
import { Users, Calendar, FileText, CreditCard, Sparkles, TrendingUp, ArrowRight } from "lucide-react";

export function TabbedFeatures() {
  const features = [
    {
      id: "crm",
      label: "CRM",
      icon: Users,
      title: "Client relationships that matter",
      description: "Keep every client detail, conversation history, and project milestone in one beautiful, organized workspace.",
      features: [
        "Contact management with custom fields",
        "Activity timeline and notes",
        "Project tracking and milestones",
        "File attachments and documents"
      ],
      gradient: "from-pink-500 to-pink-600",
      bgGradient: "from-pink-50 to-pink-100/50"
    },
    {
      id: "bookings",
      label: "Bookings",
      icon: Calendar,
      title: "Scheduling made effortless",
      description: "Let clients book time with you automatically. Sync with your calendar and send smart reminders.",
      features: [
        "Custom booking pages",
        "Calendar sync (Google, Outlook)",
        "Automated reminders via email & WhatsApp",
        "Timezone detection"
      ],
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100/50"
    },
    {
      id: "invoices",
      label: "Invoices",
      icon: FileText,
      title: "Professional invoicing in seconds",
      description: "Create beautiful, branded invoices that get paid faster. Track everything from draft to payment.",
      features: [
        "Custom templates and branding",
        "Recurring invoices",
        "Payment tracking",
        "PDF generation"
      ],
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100/50"
    },
    {
      id: "payments",
      label: "Payments",
      icon: CreditCard,
      title: "Get paid anywhere in the world",
      description: "Accept payments globally through Stripe, Paystack, and Flutterwave with automatic reconciliation.",
      features: [
        "Multiple payment gateways",
        "150+ currencies supported",
        "Automatic payment matching",
        "Instant notifications"
      ],
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100/50"
    },
    {
      id: "ai",
      label: "AI Assistant",
      icon: Sparkles,
      title: "AI that works for you",
      description: "Smart automation that learns your business patterns and suggests the next best action.",
      features: [
        "Intelligent follow-up suggestions",
        "Personalized message generation",
        "Priority client ranking",
        "Revenue optimization tips"
      ],
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100/50"
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: TrendingUp,
      title: "Insights that drive growth",
      description: "Real-time dashboards showing revenue, client trends, and business health at a glance.",
      features: [
        "Revenue tracking",
        "Client lifetime value",
        "Payment analytics",
        "Custom reports"
      ],
      gradient: "from-indigo-500 to-indigo-600",
      bgGradient: "from-indigo-50 to-indigo-100/50"
    }
  ];

  return (
    <section id="platform-overview" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <div className="inline-block px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm mb-4">
            <span className="text-sm font-medium text-gray-700">Platform Overview</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 tracking-tight leading-tight">
            One platform,
            <span className="text-gray-400"> infinite possibilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore how Orbit brings together all your business tools in one seamless experience.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:border-gray-300 hover:shadow-xl transition-all cursor-pointer"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Label */}
                <div className="inline-block px-3 py-1 bg-gray-100 rounded-full mb-4">
                  <span className="text-xs font-medium text-gray-700">{feature.label}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <a
                  href="#ai-assistant"
                  className="group/btn inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}