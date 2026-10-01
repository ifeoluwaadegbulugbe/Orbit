import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Callout } from "@/components/ui/Callout";

export function LegalLayout({
  title,
  lastUpdated,
  path,
  children,
}: {
  title: string;
  lastUpdated: string;
  path: string;
  children: ReactNode;
}) {
  return (
    <div className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs items={[{ name: title, path }]} />
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-2">{title}</h1>
        <p className="text-sm text-ink-muted mb-10">Last updated: {lastUpdated}</p>
        <div className="space-y-10 text-ink leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink [&_h2]:mb-3 [&_h2]:pb-2 [&_h2]:border-b [&_h2]:border-border [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_p]:text-ink-muted [&_a]:text-primary-700 [&_a]:underline">
          {children}
        </div>
        <Callout type="warning">
          This document is a draft prepared for launch and has not been reviewed by a lawyer. Have it reviewed by qualified legal
          counsel for your jurisdiction before relying on it.
        </Callout>
      </div>
    </div>
  );
}
