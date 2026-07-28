import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Bell, CreditCard, Globe, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { Seo } from "./Seo";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { IndustryStrip } from "./industry-strip";

const bookingFeatures = [
  {
    icon: Calendar,
    title: "Custom booking pages",
    description: "Share one link and let clients pick a time that works, no back-and-forth needed. Your availability updates in real time, with automatic timezone detection so nobody books the wrong slot."
  },
  {
    icon: Globe,
    title: "Calendar sync (Google, Outlook)",
    description: "Orbit stays in sync with the calendar you already use. New bookings appear instantly, and your existing events block off time automatically so you never get double-booked."
  },
  {
    icon: Bell,
    title: "Automated reminders",
    description: "Reminders go out over email and WhatsApp automatically before every appointment, so clients show up, without you having to chase them down the day before."
  },
  {
    icon: CreditCard,
    title: "Deposits at booking",
    description: "Require a deposit when a client books, collected straight into your Orbit Wallet. It's the single most effective way to cut last-minute cancellations and no-shows."
  }
];

const bookingFaqs = [
  {
    question: "Do clients need an account to book an appointment?",
    answer: "No. Share your Orbit booking link and clients pick a time directly. No signup or app download is required on their end."
  },
  {
    question: "Will Orbit double-book me if I already have something on my calendar?",
    answer: "No. Orbit syncs with Google and Outlook calendars, so existing events automatically block out those times on your booking page."
  },
  {
    question: "Can I require a deposit to reduce no-shows?",
    answer: "Yes. You can require a deposit at the time of booking, collected directly into your Orbit Wallet, before the appointment is confirmed."
  },
  {
    question: "How do appointment reminders work?",
    answer: "Orbit automatically sends reminders by email and WhatsApp ahead of each appointment, so you don't have to manually follow up with every client."
  }
];

const bookingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: bookingFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

function BookingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Booking questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {bookingFaqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === i ? (
                  <Minus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                )}
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? "auto" : 0,
                  opacity: openIndex === i ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BookingPage() {
  return (
    <>
      <Seo
        title="Appointment Scheduling Software | Orbit"
        description="Orbit's appointment scheduling software gives service businesses a booking page, calendar sync, deposits, and automated reminders, so you stop double-booking and reduce no-shows."
        canonical="https://getorbitcrm.com/features/booking"
        schema={bookingFaqSchema}
      />
      <Navbar />
      <div className="min-h-screen bg-white pt-20">
        <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full shadow-sm"
            >
              <Calendar className="w-3 h-3 text-purple-500" />
              <span className="text-xs font-medium text-gray-700">Bookings</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-gray-800 tracking-tight leading-tight"
            >
              Appointment scheduling software that stops double-bookings for good
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              A simple online booking system that syncs with your calendar, collects deposits up front, and reminds clients automatically, so you spend less time managing schedules and more time doing the work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="https://getorbitapp.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-pink-500 px-8 py-4 font-semibold text-white shadow-lg shadow-pink-500/25 transition-all hover:bg-pink-600"
              >
                Start booking clients online for free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Booking shouldn't happen over 15 WhatsApp messages
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              "Are you free Tuesday?" "What time works?" "Actually can we push it to Wednesday?" For most service businesses, scheduling still happens as a slow back-and-forth over chat, and every extra message is a chance for a client to lose interest, book somewhere else, or end up double-booked against something already on your calendar.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Then there's the appointment that gets no-showed entirely, costing you the slot and the revenue with nothing to show for it. Without deposits or reminders, there's no real deterrent, and no easy way to recover that lost time.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Orbit replaces the back-and-forth with a single booking page that stays in sync with your real calendar, collects a deposit up front when you need one, and reminds clients automatically so appointments actually happen.
            </p>
          </div>
        </section>

        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
                Everything you need to run a full calendar
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {bookingFeatures.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border border-gray-200 rounded-2xl p-8"
                  >
                    <div className="w-12 h-12 bg-purple-50 border border-purple-100 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <IndustryStrip />
        <BookingFaq />

        <section className="py-20 px-6 bg-white text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Stop chasing bookings over chat
            </h2>
            <p className="text-lg text-gray-600">
              Set up your booking page in minutes and let Orbit handle the reminders.
            </p>
            <a
              href="https://getorbitapp.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-pink-500 px-8 py-4 font-semibold text-white shadow-lg shadow-pink-500/25 transition-all hover:bg-pink-600"
            >
              Start booking clients online for free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <div className="pt-2">
              <Link to="/pricing" className="text-sm text-gray-500 hover:text-gray-700 underline">
                See pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
