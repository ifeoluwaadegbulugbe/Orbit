import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { LegalLayout } from "@/components/templates/LegalLayout";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "The terms that govern your use of Orbit.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="October 1, 2026" path="/terms">
      <section>
        <h2>Acceptance of terms</h2>
        <p>
          By accessing or using {siteConfig.url} or {siteConfig.appUrl} (the &quot;Service&quot;), operated by Orbit, you
          agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access
          the Service.
        </p>
      </section>

      <section>
        <h2>Description of service</h2>
        <p>
          Orbit provides booking, invoicing, payment, and client management software for service businesses, on both a
          free and paid subscription basis. We may modify, suspend, or discontinue the Service at any time.
        </p>
      </section>

      <section>
        <h2>User accounts</h2>
        <p>You are responsible for maintaining the confidentiality of your account and for all activity under it. Notify us immediately of any unauthorized use.</p>
      </section>

      <section>
        <h2>Intellectual property</h2>
        <p>
          The Service and its content, features, and functionality are the property of Orbit and its licensors. You
          retain ownership of content you submit, but grant Orbit a license to use it to operate the Service.
        </p>
      </section>

      <section>
        <h2>Prohibited uses</h2>
        <ul>
          <li>Violating applicable laws or regulations</li>
          <li>Impersonating any person or entity</li>
          <li>Attempting unauthorized access to any part of the Service</li>
          <li>Uploading viruses or malicious code</li>
        </ul>
      </section>

      <section>
        <h2>Payment terms</h2>
        <p>
          Paid plans are billed in advance on a recurring basis. Fees are non-refundable except as required by law or
          stated otherwise. We may change pricing with notice.
        </p>
      </section>

      <section>
        <h2>Disclaimer of warranties</h2>
        <p>
          The Service is provided &quot;as is&quot; without warranties of any kind, express or implied, including
          merchantability or fitness for a particular purpose.
        </p>
      </section>

      <section>
        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, Orbit is not liable for indirect, incidental, or consequential
          damages arising from your use of the Service.
        </p>
      </section>

      <section>
        <h2>Governing law</h2>
        <p>These Terms are governed by the laws of Nigeria, without regard to conflict-of-law provisions.</p>
      </section>

      <section>
        <h2>Changes to terms</h2>
        <p>We may modify these Terms at any time. Continued use of the Service after changes are posted means you accept the revised Terms.</p>
      </section>

      <section>
        <h2>Contact us</h2>
        <p>
          Questions about these Terms: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
