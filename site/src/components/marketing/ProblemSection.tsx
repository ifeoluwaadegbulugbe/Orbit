import { SectionHeader } from "./SectionHeader";
import { MessageSquare, FileSpreadsheet, StickyNote, Receipt } from "lucide-react";

const scattered = [
  { icon: MessageSquare, label: "Booking requests buried in WhatsApp chats" },
  { icon: StickyNote, label: "Client details in notes you can't search" },
  { icon: FileSpreadsheet, label: "A spreadsheet that's always a week out of date" },
  { icon: Receipt, label: "Invoices typed out by hand, every time" },
];

export function ProblemSection() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="The problem"
          title="Your business runs on tools that don't talk to each other"
          description="Nothing is wrong with WhatsApp, Instagram, or a notebook on their own. The problem is that none of them know what the others know, so you're the one holding it all together by hand."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {scattered.map((item) => (
            <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent-50">
                <item.icon className="h-5 w-5 text-accent-700" aria-hidden="true" />
              </div>
              <p className="text-sm text-ink">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
