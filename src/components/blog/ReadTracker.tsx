"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

export function ReadTracker({ slug }: { slug: string }) {
  const fired = useRef(false);

  useEffect(() => {
    function onScroll() {
      if (fired.current) return;
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      if (total > 0 && scrolled / total >= 0.75) {
        fired.current = true;
        trackEvent({ name: "blog_read_75", slug });
        window.removeEventListener("scroll", onScroll);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug]);

  return null;
}
