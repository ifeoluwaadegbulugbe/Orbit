"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { EmailCapture } from "@/components/marketing/EmailCapture";

const SESSION_KEY = "orbit_newsletter_prompt_dismissed";

export function NewsletterPrompt() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        if (!sessionStorage.getItem(SESSION_KEY)) {
          setVisible(true);
        }
      } catch {
        // sessionStorage unavailable (private browsing, etc.); skip the prompt.
      }
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setVisible(false);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // ignore
    }
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:w-96 z-50 rounded-2xl border border-border bg-white p-5 shadow-[var(--shadow-lg)]">
      <button type="button" onClick={dismiss} aria-label="Dismiss" className="absolute top-3 right-3 text-ink-muted hover:text-ink">
        <X className="h-4 w-4" />
      </button>
      <p className="font-medium text-ink mb-1 pr-6">Enjoying this?</p>
      <p className="text-sm text-ink-muted mb-4">Get one email a week with tips like this.</p>
      <EmailCapture source="blog_prompt" title="" buttonLabel="Subscribe" />
    </div>
  );
}
