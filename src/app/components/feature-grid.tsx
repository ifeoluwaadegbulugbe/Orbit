import { motion } from "motion/react";
import {
  Users,
  Bell,
  Calendar,
  FileText,
  CreditCard,
  TrendingUp,
  Zap,
  Sparkles,
  Globe,
  MessageSquare,
  Layout,
  Shield
} from "lucide-react";

export function FeatureGrid() {
  const features = [
    {
      icon: Users,
      title: "Client Management",
      description: "Keep all your client information, project history, and communications in one organized place."
    },
    {
      icon: Sparkles,
      title: "AI Follow-Ups",
      description: "Smart assistant that generates personalized messages and knows exactly when to reach out."
    },
    {
      icon: Calendar,
      title: "Smart Bookings",
      description: "Automated scheduling that syncs with your calendar and sends reminders to clients."
    },
    {
      icon: FileText,
      title: "Professional Invoices",
      description: "Create beautiful, branded invoices in seconds with automatic payment tracking."
    },
    {
      icon: CreditCard,
      title: "Global Payments",
      description: "Accept payments worldwide through Stripe, Paystack, and Flutterwave integration."
    },
    {
      icon: TrendingUp,
      title: "Revenue Analytics",
      description: "Real-time insights into your business performance with actionable recommendations."
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and save hours every week with smart workflows."
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Integration",
      description: "Send invoices, reminders, and updates directly through WhatsApp."
    },
    {
      icon: Globe,
      title: "Multi-Currency",
      description: "Support for 150+ currencies with automatic conversion and localization."
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Intelligent notifications that help you stay on top of deadlines and follow-ups."
    },
    {
      icon: Layout,
      title: "Custom Templates",
      description: "Pre-built templates for invoices, proposals, and contracts tailored to your industry."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Bank-level encryption and GDPR compliance to keep your data safe."
    }
  ];

  return (
    <section id="features" className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <div className="inline-block px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm mb-4">
            <span className="text-sm font-medium text-gray-700">Features</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 tracking-tight leading-tight">
            Everything you need
            <span className="text-gray-400"> to succeed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful tools designed specifically for freelancers, creators, and small business owners.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center mb-6 group-hover:border-gray-300 group-hover:bg-white transition-all">
                  <Icon className="w-6 h-6 text-gray-700" />
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="#" className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium">
            See all features
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
