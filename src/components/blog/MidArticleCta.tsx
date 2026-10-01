"use client";

import { Button } from "@/components/ui/Button";
import { appLink } from "@/site.config";
import { trackEvent } from "@/lib/analytics";

export function MidArticleCta({ text = "Tired of tracking this by hand? Orbit does it automatically." }: { text?: string }) {
  return (
    <div className="not-prose my-10 flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-primary-200 bg-primary-50 p-6">
      <p className="text-sm text-ink flex-1">{text}</p>
      <Button href={appLink("/signup")} onClick={() => trackEvent({ name: "signup_start", location: "blog_mid_article" })}>
        Start free
      </Button>
    </div>
  );
}
