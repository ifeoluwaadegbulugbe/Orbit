export interface ChangelogEntry {
  date: string;
  title: string;
  description: string;
}

// TODO-verify: seed entries below are placeholders describing recent work
// visible from the codebase/commit history. Replace with the real changelog
// before launch, and keep this file updated going forward.
export const changelogEntries: ChangelogEntry[] = [
  {
    date: "2026-10-01",
    title: "Marketing site rebuilt",
    description: "Rebuilt the marketing site as a fast, fully server-rendered site with a blog, solution pages, and comparison pages.",
  },
  {
    date: "2026-09-15",
    title: "Dashboard moved to app.getorbitcrm.com",
    description: "The Orbit dashboard now lives at its own subdomain, separate from the marketing site.",
  },
];
