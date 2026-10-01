import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { changelogEntries } from "@/data/changelog";

export const metadata: Metadata = buildMetadata({
  title: "Orbit Changelog",
  description: "What's new in Orbit: product updates, improvements, and fixes.",
  path: "/changelog",
});

export default function ChangelogPage() {
  return (
    <>
      <div className="px-6 pt-10">
        <div className="mx-auto max-w-2xl">
          <Breadcrumbs items={[{ name: "Changelog", path: "/changelog" }]} />
        </div>
      </div>
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-ink mb-12">Changelog</h1>
          <div className="space-y-10">
            {changelogEntries.map((entry) => (
              <div key={entry.title} className="border-l-2 border-primary-200 pl-6">
                <time dateTime={entry.date} className="text-sm text-ink-muted">
                  {new Date(entry.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </time>
                <h2 className="text-lg font-semibold text-ink mt-1 mb-2">{entry.title}</h2>
                <p className="text-ink-muted leading-relaxed">{entry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
