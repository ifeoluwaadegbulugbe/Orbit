// DRAFT: hero + pain-point framing only, per Day 2 evening scope.
// Not yet wired into App.tsx routes: publishing this live before the feature
// breakdown, FAQ, and schema are added would ship a thin page, which hurts
// SEO more than not having the page at all. Finish the rest, then add:
//   <Route path="/features/client-management" element={<ClientManagementPage />} />
import { motion } from "motion/react";
import { ArrowRight, Users } from "lucide-react";
import { Seo } from "./Seo";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function ClientManagementPage() {
  return (
    <>
      <Seo
        title="Client Management Software for Service Businesses | Orbit"
        description="Orbit's client management software keeps contacts, conversations, and project history in one place, not scattered across spreadsheets and WhatsApp threads."
        canonical="https://www.getorbitcrm.com/features/client-management"
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
              <Users className="w-3 h-3 text-pink-500" />
              <span className="text-xs font-medium text-gray-700">Client Management</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-gray-800 tracking-tight leading-tight"
            >
              Client management software that replaces the spreadsheet
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Every client detail, conversation, and project milestone in one organized workspace, instead of scattered across spreadsheets, notebooks, and WhatsApp threads.
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
                Organize your clients for free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Sound familiar?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A client's phone number lives in your contacts app. Their project notes are in a Google Doc. Their payment history is a scroll-back through old WhatsApp messages. Their booking is somewhere in your calendar, if you remembered to add it.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              As your client list grows past a handful of people, this patchwork stops working. Details get lost, follow-ups get missed, and every new client adds more places to check before you can answer a simple question about their account.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Orbit's client management brings contact details, activity history, notes, and files into a single record per client, so nothing depends on you remembering where you put it.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
