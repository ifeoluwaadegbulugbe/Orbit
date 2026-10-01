"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "contact-form" }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="flex items-center gap-2 rounded-xl border border-primary-200 bg-primary-50 px-5 py-4 text-sm font-medium text-primary-700">
        <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
        Message sent. We'll get back to you soon.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-ink mb-1.5">
          Name
        </label>
        <input
          id="contact-name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full min-h-11 rounded-xl border border-border bg-white px-4 text-sm outline-none focus:border-primary-400"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-ink mb-1.5">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full min-h-11 rounded-xl border border-border bg-white px-4 text-sm outline-none focus:border-primary-400"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-ink mb-1.5">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary-400"
        />
      </div>
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <button
        type="submit"
        disabled={status === "loading"}
        className="min-h-11 rounded-xl bg-primary-500 px-6 text-sm font-semibold text-white hover:bg-primary-600 disabled:opacity-60"
      >
        {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send message"}
      </button>
      {status === "error" && <p role="alert" className="text-sm text-danger">Something went wrong. Try WhatsApp or email instead.</p>}
    </form>
  );
}
