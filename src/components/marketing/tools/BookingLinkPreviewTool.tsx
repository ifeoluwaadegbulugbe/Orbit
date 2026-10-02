"use client";

import { useState } from "react";
import { BookingLinkMockup } from "@/components/mockups/BookingLinkMockup";
import { EmailCapture } from "@/components/marketing/EmailCapture";
import { professions } from "@/data/professions";

export function BookingLinkPreviewTool() {
  const [slug, setSlug] = useState(professions[0]!.slug);
  const [name, setName] = useState("");
  const profession = professions.find((p) => p.slug === slug) ?? professions[0]!;

  return (
    <div className="grid items-start gap-10 lg:grid-cols-2">
      <div className="space-y-5">
        <div>
          <label htmlFor="profession" className="mb-1.5 block text-sm font-medium text-ink">
            What do you do?
          </label>
          <select
            id="profession"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="min-h-11 w-full rounded-xl border border-border bg-white px-4 text-sm"
          >
            {professions.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="biz-name" className="mb-1.5 block text-sm font-medium text-ink">
            Business name
          </label>
          <input
            id="biz-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={profession.mockupBusinessName}
            className="min-h-11 w-full rounded-xl border border-border bg-white px-4 text-sm"
          />
        </div>
        <div className="rounded-xl border border-border bg-white p-4 text-sm text-ink-muted">
          This is a preview of what your Orbit Booking Link could look like. Your real link lets clients pick a service and
          time, and nothing is confirmed until you approve it.
        </div>
        <EmailCapture source="booking-link-preview" title="Get your own Booking Link" eventName="lead_magnet_submit" />
      </div>
      <BookingLinkMockup
        businessName={name.trim() || profession.mockupBusinessName}
        role={profession.mockupRole}
        services={profession.mockupServices}
      />
    </div>
  );
}
