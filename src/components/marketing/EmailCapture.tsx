"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function EmailCapture({
  source,
  title = "Get it in your inbox",
  buttonLabel = "Send it to me",
  eventName = "newsletter_subscribe",
}: {
  source: string;
  title?: string;
  buttonLabel?: string;
  eventName?: "newsletter_subscribe" | "lead_magnet_submit";
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("done");
      if (eventName === "newsletter_subscribe") {
        trackEvent({ name: "newsletter_subscribe", location: source });
      } else {
        trackEvent({ name: "lead_magnet_submit", tool: source });
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Try again in a moment.");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="flex items-center gap-2 rounded-xl border border-primary-200 bg-primary-50 px-5 py-4 text-sm font-medium text-primary-700">
        <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
        Check your inbox. It's on its way.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {title && <p className="font-medium text-ink">{title}</p>}
      <div className="flex flex-col sm:flex-row gap-3">
        <label htmlFor={`email-${source}`} className="sr-only">
          Email address
        </label>
        <input
          id={`email-${source}`}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="min-h-11 flex-1 rounded-xl border border-border bg-white px-4 text-sm outline-none focus:border-primary-400"
        />
        {/* Honeypot: hidden from real users, bots tend to fill every field. */}
        <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <button
          type="submit"
          disabled={status === "loading"}
          className="min-h-11 rounded-xl bg-primary-600 px-6 text-sm font-semibold text-white hover:bg-primary-700 disabled:opacity-60"
        >
          {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin mx-auto" /> : buttonLabel}
        </button>
      </div>
      {status === "error" && (
        <p role="alert" className="text-sm text-danger">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
