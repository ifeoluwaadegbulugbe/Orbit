"use client";

type OrbitEvent =
  | { name: "cta_click"; location: string }
  | { name: "signup_start"; location: string }
  | { name: "lead_magnet_submit"; tool: string }
  | { name: "newsletter_subscribe"; location: string }
  | { name: "whatsapp_click"; location: string }
  | { name: "pricing_view" }
  | { name: "blog_read_75"; slug: string };

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

/** Pushes a typed event to the GTM dataLayer. No-ops on the server or if GTM hasn't loaded. */
export function trackEvent(event: OrbitEvent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: event.name, ...event });
}
