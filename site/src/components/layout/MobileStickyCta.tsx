"use client";

import { Button } from "@/components/ui/Button";
import { appLink } from "@/site.config";
import { trackEvent } from "@/lib/analytics";

export function MobileStickyCta() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-white/95 backdrop-blur-md p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
      <Button
        href={appLink("/signup")}
        className="w-full"
        size="lg"
        onClick={() => trackEvent({ name: "signup_start", location: "mobile_sticky" })}
      >
        Start free
      </Button>
    </div>
  );
}
