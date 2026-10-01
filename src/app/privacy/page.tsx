import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { LegalLayout } from "@/components/templates/LegalLayout";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Orbit collects, uses, and shares information when you use the Orbit website and app.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="October 1, 2026" path="/privacy">
      <section>
        <h2>Introduction</h2>
        <p>
          This Privacy Policy describes how Orbit (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and
          shares information about you when you use {siteConfig.url} and {siteConfig.appUrl} (together, the
          &quot;Service&quot;).
        </p>
        <p>By using the Service, you agree to the collection and use of information in accordance with this policy.</p>
      </section>

      <section>
        <h2>Information we collect</h2>
        <ul>
          <li>
            <strong>Information you provide directly:</strong> name, email address, phone number, payment information,
            and anything you submit through a form on the site.
          </li>
          <li>
            <strong>Information collected automatically:</strong> IP address, browser type, device information, and
            pages visited, via analytics tools.
          </li>
          <li>
            <strong>Information from third-party services:</strong> if you connect a third-party account to the Service.
          </li>
        </ul>
      </section>

      <section>
        <h2>How we use your information</h2>
        <ul>
          <li>To provide, operate, and maintain the Service</li>
          <li>To understand how the Service is used and improve it</li>
          <li>To communicate with you, including customer support</li>
          <li>To process transactions and payments</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>

      <section>
        <h2>How we share your information</h2>
        <ul>
          <li>
            <strong>Service providers:</strong> third-party vendors who provide services on our behalf, including
            payment processors and analytics providers.
          </li>
          <li>
            <strong>Legal requirements:</strong> if required by law or valid legal process.
          </li>
          <li>
            <strong>Business transfers:</strong> in connection with a merger, acquisition, or sale of assets.
          </li>
        </ul>
        <p>We do not sell your personal information to third parties for their marketing purposes.</p>
      </section>

      <section>
        <h2>Cookies and tracking</h2>
        <p>
          We use cookies for analytics, functional preferences, and attribution (so we know which marketing channel
          brought you here). See our <a href="/cookies">Cookie Policy</a> for details.
        </p>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>
          Depending on where you live, you may have rights to access, correct, delete, or export your personal data.
          To exercise any of these rights, contact us at{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. We respond within 30 days.
        </p>
      </section>

      <section>
        <h2>Data security</h2>
        <p>
          We use reasonable technical and organizational measures to protect your information. No method of
          transmission over the internet is 100% secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2>Children&apos;s privacy</h2>
        <p>The Service is not directed to children under 13, and we do not knowingly collect information from them.</p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>We may update this Privacy Policy from time to time. Material changes will be reflected by updating the date above.</p>
      </section>

      <section>
        <h2>Contact us</h2>
        <p>
          Questions about this policy: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
