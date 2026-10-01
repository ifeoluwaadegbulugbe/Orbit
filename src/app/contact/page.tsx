import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/marketing/ContactForm";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = buildMetadata({
  title: "Contact Orbit",
  description: "Get in touch with Orbit by email or the contact form.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <div className="px-6 pt-10">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
        </div>
      </div>
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-3xl space-y-10">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-ink">Get in touch</h1>
            <p className="text-lg text-ink-muted">We usually reply within a business day.</p>
          </div>

          <div className="mx-auto max-w-xs rounded-2xl border border-border bg-white p-6 text-center space-y-3">
            <Mail className="h-6 w-6 mx-auto text-primary-600" aria-hidden="true" />
            <p className="font-medium text-ink">Email</p>
            <Button href={`mailto:${siteConfig.email}`} variant="secondary" className="w-full">
              {siteConfig.email}
            </Button>
          </div>

          <div className="rounded-2xl border border-border bg-white p-8">
            <h2 className="font-semibold text-ink mb-5">Or send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
