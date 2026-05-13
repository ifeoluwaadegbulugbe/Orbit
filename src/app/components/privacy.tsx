import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function Privacy() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[32px] md:text-5xl font-bold text-gray-800 mb-2">Privacy Policy</h1>
          <p className="text-sm md:text-base text-gray-600 mb-8 md:mb-12">
            Last updated: May 13, 2026 &nbsp;|&nbsp; Applies to: https://orbit-vert-three.vercel.app/
          </p>

          <div className="space-y-8 md:space-y-12 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Introduction
              </h2>
              <p className="mb-4">
                This Privacy Policy describes how Orbit ("we," "us," or "our") collects, uses, and shares information about you when you use our website at https://orbit-vert-three.vercel.app/ (the "Service").
              </p>
              <p>
                By using our Service, you agree to the collection and use of information in accordance with this policy. This policy applies to all visitors, users, and others who access or use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Information We Collect
              </h2>
              <p className="mb-4">We collect several types of information in connection with the Service:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Information you provide directly:</strong> Name, Email address, Phone number, Payment information, Location data, IP address, Cookies & usage data, Device information</li>
                <li><strong>Information collected automatically:</strong> When you use our Service, we automatically collect certain information, including IP address, browser type, operating system, referring URLs, and device information.</li>
                <li><strong>Information from third-party services:</strong> We may receive information about you from third-party services you connect to our Service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                How We Use Your Information
              </h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, and maintain our Service</li>
                <li>Improve and personalize your experience</li>
                <li>Understand how you use our Service</li>
                <li>Communicate with you, including for customer service and marketing purposes</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, and security alerts</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                How We Share Your Information
              </h2>
              <p className="mb-4">We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Service providers:</strong> We share information with third-party vendors who provide services on our behalf, including Stripe, Google Analytics.</li>
                <li><strong>Legal requirements:</strong> We may disclose information if required by law or in response to valid legal processes.</li>
                <li><strong>Business transfers:</strong> We may share information in connection with a merger, acquisition, or sale of assets.</li>
              </ul>
              <p>We do not sell or share your personal information with third parties for their marketing purposes.</p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Cookies and Tracking Technologies
              </h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to track activity on our Service and to hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
              <p>
                We use cookies for the following purposes: analytics and performance, functional preferences, and marketing (where applicable). Third-party services we use — such as Stripe, Google Analytics — may also set their own cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Data Retention
              </h2>
              <p className="mb-4">
                We will retain your personal information for as long as necessary. Data must not be kept longer than necessary for the specified purpose. Retention periods must be documented and enforced.
              </p>
              <p>When we no longer need to retain your information, we will securely delete or anonymize it.</p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Your Rights Under the GDPR
              </h2>
              <p className="mb-4">If you are located in the European Economic Area, you have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Right of access:</strong> You can request a copy of the personal data we hold about you.</li>
                <li><strong>Right to rectification:</strong> You can ask us to correct inaccurate or incomplete information.</li>
                <li><strong>Right to erasure ("right to be forgotten"):</strong> You can ask us to delete your personal data in certain circumstances.</li>
                <li><strong>Right to restriction of processing:</strong> You can ask us to limit how we use your data.</li>
                <li><strong>Right to data portability:</strong> You can request your data in a machine-readable format.</li>
                <li><strong>Right to object:</strong> You can object to our processing of your data based on legitimate interests.</li>
              </ul>
              <p className="mb-4">
                To exercise any of these rights, please contact us at <a href="mailto:ifeoluwaadegbulugbe@gmail.com" className="text-blue-600 hover:underline">ifeoluwaadegbulugbe@gmail.com</a>. We will respond within 30 days.
              </p>
              <p>
                <strong>Lawful basis for processing:</strong> We process your personal data on the basis of consent, contract performance, legitimate interests, and legal obligations as applicable.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Children's Privacy
              </h2>
              <p className="mb-4">
                Our Service is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete that information promptly.
              </p>
              <p>
                If you are a parent or guardian and believe your child has provided us with personal information, please contact us at <a href="mailto:ifeoluwaadegbulugbe@gmail.com" className="text-blue-600 hover:underline">ifeoluwaadegbulugbe@gmail.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Data Security
              </h2>
              <p className="mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.
              </p>
              <p>
                However, no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Third-Party Links
              </h2>
              <p>
                Our Service may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the privacy policy of every site you visit.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Changes to This Privacy Policy
              </h2>
              <p className="mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Contact Us
              </h2>
              <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>By email: <a href="mailto:ifeoluwaadegbulugbe@gmail.com" className="text-blue-600 hover:underline">ifeoluwaadegbulugbe@gmail.com</a></li>
                <li>By visiting our website: <a href="https://orbit-vert-three.vercel.app/" className="text-blue-600 hover:underline">https://orbit-vert-three.vercel.app/</a></li>
              </ul>
            </section>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 md:p-6 mt-8 md:mt-12">
              <p className="text-sm md:text-base text-yellow-900">
                <strong>Legal Disclaimer:</strong> This document was generated using a template generator for informational purposes only. It does not constitute legal advice. Please consult with a qualified attorney to ensure this document meets your specific legal requirements.
              </p>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
