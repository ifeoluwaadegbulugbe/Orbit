import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EmailCapture } from "@/components/marketing/EmailCapture";

export const metadata: Metadata = buildMetadata({
  title: "Free Templates: Client Intake, No-Show Policy & Follow-Ups",
  description: "Free templates for service businesses: a client intake form, a no-show policy, and WhatsApp follow-up messages.",
  path: "/resources/templates",
});

const templates = [
  {
    id: "intake",
    title: "Client intake form",
    body: [
      "Full name:",
      "Phone number / WhatsApp:",
      "Service requested:",
      "Preferred date and time:",
      "Any allergies or sensitivities we should know about?",
      "How did you hear about us?",
    ],
  },
  {
    id: "no-show",
    title: "No-show policy",
    body: [
      "We hold your appointment time just for you, so we ask for a deposit to confirm your booking.",
      "If you need to reschedule, please let us know at least 24 hours in advance and your deposit carries over.",
      "No-shows or cancellations with less than 24 hours' notice forfeit the deposit.",
    ],
  },
  {
    id: "followup",
    title: "WhatsApp follow-up messages",
    body: [
      "\"Hi [name]! It's been a few weeks since your last visit. Want me to pencil you in for a touch-up?\"",
      "\"Hi [name], just checking in after your [service] last week. How's it holding up?\"",
      "\"Hi [name]! I have a slot open this [day] if you've been thinking about rebooking.\"",
    ],
  },
];

export default function TemplatesPage() {
  return (
    <div className="px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs items={[{ name: "Resources", path: "/resources" }, { name: "Templates", path: "/resources/templates" }]} />
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-3">Free templates</h1>
        <p className="text-ink-muted mb-10">Copy these directly. Add your email below if you want new templates and tips as we publish them.</p>

        <div className="space-y-10">
          {templates.map((template) => (
            <div key={template.id} className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="font-semibold text-ink mb-4">{template.title}</h2>
              <ul className="space-y-2 text-sm text-ink-muted">
                {template.body.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-surface p-6">
          <EmailCapture source="templates" title="Get new templates and tips by email" eventName="lead_magnet_submit" />
        </div>
      </div>
    </div>
  );
}
