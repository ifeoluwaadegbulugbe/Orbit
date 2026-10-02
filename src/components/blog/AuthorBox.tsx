export function AuthorBox({ author }: { author: string }) {
  const initials = author
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-6 my-10">
      <div className="h-12 w-12 flex-shrink-0 rounded-full bg-primary-100 flex items-center justify-center font-semibold text-primary-700">
        {initials}
      </div>
      <div>
        <p className="font-semibold text-ink">{author}</p>
        <p className="text-sm text-ink-muted">Writes about running a service business, for Orbit.</p>
      </div>
    </div>
  );
}
