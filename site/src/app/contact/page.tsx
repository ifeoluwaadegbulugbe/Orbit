import type { Metadata } from "next";
import { MessageCircle, Mail } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/marketing/ContactForm";
import { siteConfig, whatsappLink } from "@/site.config";

export const metadata: Metadata = buildMetadata({
  title: "Contact Orbit",
  description: "Get in touch with Orbit over WhatsApp, email, or the contact form.",
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
            <p className="text-lg text-ink-muted">Most questions get answered fastest on WhatsApp.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-6 text-center space-y-3">
              <MessageCircle className="h-6 w-6 mx-auto text-primary-600" aria-hidden="true" />
              <p className="font-medium text-ink">WhatsApp</p>
              <Button href={whatsappLink("Hi! I have a question about Orbit.")} variant="secondary" className="w-full">
                Chat now
              </Button>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6 text-center space-y-3">
              <Mail className="h-6 w-6 mx-auto text-primary-600" aria-hidden="true" />
              <p className="font-medium text-ink">Email</p>
              <Button href={`mailto:${siteConfig.email}`} variant="secondary" className="w-full">
                {siteConfig.email}
              </Button>
            </div>
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
