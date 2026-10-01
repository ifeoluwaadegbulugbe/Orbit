"use client";

import { useState } from "react";
import { BookingLinkMockup } from "@/components/mockups/BookingLinkMockup";
import { EmailCapture } from "@/components/marketing/EmailCapture";

export function BookingLinkPreviewTool() {
  const [name, setName] = useState("Your business name");

  return (
    <div className="grid gap-10 lg:grid-cols-2 items-start">
      <div className="space-y-5">
        <div>
          <label htmlFor="biz-name" className="block text-sm font-medium text-ink mb-1.5">
            Business name
          </label>
          <input
            id="biz-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full min-h-11 rounded-xl border border-border px-4 text-sm"
          />
        </div>
        <div className="rounded-xl border border-border bg-white p-4 text-sm text-ink-muted">
          This is a preview of what your Orbit Booking Link could look like. Your real link lets clients pick a service and
          time, and nothing is confirmed until you approve it.
        </div>
        <EmailCapture source="booking-link-preview" title="Get your own Booking Link" eventName="lead_magnet_submit" />
      </div>
      <BookingLinkMockup businessName={name || "Your business name"} />
    </div>
  );
}
