export interface Heading {
  id: string;
  text: string;
}

/** Extracts H2 headings from raw markdown to build a simple table of contents. */
export function extractHeadings(markdown: string): Heading[] {
  const matches = [...markdown.matchAll(/^##\s+(.+)$/gm)];
  return matches.map((m) => {
    const text = m[1]!.trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
    return { id, text };
  });
}

export function TableOfContents({ headings }: { headings: Heading[] }) {
  if (headings.length === 0) return null;
  return (
    <nav aria-label="Table of contents" className="sticky top-24 hidden lg:block rounded-2xl border border-border bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">On this page</p>
      <ul className="space-y-2">
        {headings.map((h) => (
          <li key={h.id}>
            <a href={`#${h.id}`} className="text-sm text-ink-muted hover:text-primary-600">
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
