import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { LegalLayout } from "@/components/templates/LegalLayout";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description: "How Orbit uses cookies and similar technologies.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="October 1, 2026" path="/cookies">
      <section>
        <h2>What cookies are</h2>
        <p>Cookies are small text files placed on your device when you visit a website. We use them, and similar technologies, for the purposes below.</p>
      </section>

      <section>
        <h2>How we use cookies</h2>
        <ul>
          <li><strong>Essential:</strong> required for the site to function, such as remembering your attribution source during signup.</li>
          <li><strong>Analytics:</strong> Google Analytics and Google Tag Manager, to understand how visitors use the site.</li>
          <li><strong>Attribution:</strong> a first-party cookie that records the campaign, source, and referrer of your first visit, so we can attribute signups accurately.</li>
        </ul>
      </section>

      <section>
        <h2>Managing cookies</h2>
        <p>Most browsers let you refuse or delete cookies. Doing so may affect how parts of the site work.</p>
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
