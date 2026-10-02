import { SectionHeader } from "./SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const rows = [
  { label: "Price", value: "Free, then $12/month", note: "Pro doesn't change with how much you book or earn." },
  { label: "Free plan", value: "Up to 10 clients", note: "Booking Link and manual invoicing included." },
  { label: "Orbit Wallet", value: "2.5% per transaction", note: "Only on payments that go through Orbit Wallet." },
  { label: "Your calendar", value: "You approve every booking", note: "Nothing reaches it without your yes." },
  { label: "Contract", value: "None", note: "Billed monthly. Cancel anytime." },
  { label: "Getting paid", value: "Cards, transfer, mobile money", note: "Depending on your country." },
];

/** The proof section: verifiable facts about the product, laid out like a spec sheet. */
export function FinePrint() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="The fine print"
          title={
            <>
              Everything up front. <span className="text-ink-muted">Nothing hidden.</span>
            </>
          }
        />
        <Reveal className="mt-12">
          <dl className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
            {rows.map((r) => (
              <div
                key={r.label}
                className="grid gap-1 px-5 py-4 transition-colors duration-200 hover:bg-sunken sm:grid-cols-[10rem_1fr_1.2fr] sm:items-baseline sm:gap-6 sm:px-6"
              >
                <dt className="text-sm text-ink-muted">{r.label}</dt>
                <dd className="font-semibold text-ink">{r.value}</dd>
                <dd className="text-sm text-ink-muted">{r.note}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
