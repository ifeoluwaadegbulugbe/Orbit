import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function Terms() {
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
          <h1 className="text-[32px] md:text-5xl font-bold text-gray-800 mb-2">Terms of Service</h1>
          <p className="text-sm md:text-base text-gray-600 mb-8 md:mb-12">
            Last updated: May 13, 2026 &nbsp;|&nbsp; Applies to: https://orbit-vert-three.vercel.app/
          </p>

          <div className="space-y-8 md:space-y-12 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Acceptance of Terms
              </h2>
              <p>
                By accessing or using https://orbit-vert-three.vercel.app/ (the "Service") operated by Orbit ("we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Description of Service
              </h2>
              <p>
                Orbit provides SaaS / Software services through our platform. The Service is provided on a Free basis. We reserve the right to modify, suspend, or discontinue the Service at any time with or without notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                User Accounts
              </h2>
              <p className="mb-4">When you create an account with us, you must provide accurate, complete, and current information. You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use of your account</li>
              </ul>
              <p>We reserve the right to terminate accounts that violate these Terms.</p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Age Requirements
              </h2>
              <p>
                You must be at least 13 years to use this Service. By using the Service, you represent that you meet this age requirement. If we become aware that a user does not meet this requirement, we will terminate their account.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Intellectual Property
              </h2>
              <p className="mb-4">
                The Service and its original content, features, and functionality are and will remain the exclusive property of Orbit and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Orbit.
              </p>
              <p>
                User-generated content remains the property of the user, but you grant Orbit a non-exclusive, royalty-free license to use, display, and distribute such content in connection with the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Prohibited Uses
              </h2>
              <p className="mb-4">You agree not to use the Service:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>In any way that violates applicable laws or regulations</li>
                <li>To transmit unsolicited commercial communications (spam)</li>
                <li>To impersonate any person or entity</li>
                <li>To engage in any conduct that restricts or inhibits others' use of the Service</li>
                <li>To attempt to gain unauthorized access to any part of the Service</li>
                <li>To use automated scripts to collect information from or interact with the Service</li>
                <li>To upload or transmit viruses or other malicious code</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Payment Terms
              </h2>
              <p className="mb-4">Our Service operates on a Free basis. If you subscribe to a paid plan:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fees are billed in advance on a recurring basis</li>
                <li>All fees are non-refundable unless otherwise stated in our Refund Policy</li>
                <li>We reserve the right to change our pricing with 30 days' notice</li>
                <li>Failure to pay may result in suspension or termination of your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Disclaimer of Warranties
              </h2>
              <p className="mb-4">
                The Service is provided on an "AS IS" and "AS AVAILABLE" basis without any warranties of any kind, whether express or implied. Orbit expressly disclaims all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
              <p>
                We do not warrant that: (a) the Service will function uninterrupted or error-free; (b) defects will be corrected; (c) the Service is free of viruses or other harmful components.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Limitation of Liability
              </h2>
              <p className="mb-4">
                To the maximum extent permitted by applicable law, Orbit shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, goodwill, or other intangible losses, resulting from your use of or inability to use the Service.
              </p>
              <p>
                In no event shall Orbit's total liability to you exceed the greater of one hundred dollars ($100) or the amounts paid by you to Orbit in the past twelve months.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Governing Law
              </h2>
              <p className="mb-4">
                These Terms shall be governed and construed in accordance with the laws of Nigeria, without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising under these Terms will be resolved through binding arbitration in Nigeria, except that either party may seek injunctive relief in any court of competent jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on this page with a new effective date. Your continued use of the Service after changes are posted constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Contact Us
              </h2>
              <p>
                If you have questions about these Terms, please contact us at <a href="mailto:ifeoluwaadegbulugbe@gmail.com" className="text-blue-600 hover:underline">ifeoluwaadegbulugbe@gmail.com</a> or visit <a href="https://orbit-vert-three.vercel.app/" className="text-blue-600 hover:underline">https://orbit-vert-three.vercel.app/</a>.
              </p>
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
