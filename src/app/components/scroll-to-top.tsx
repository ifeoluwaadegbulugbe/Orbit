import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const scroll = () => {
      if (hash) {
        const el = document.getElementById(hash.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      window.scrollTo(0, 0);
    };

    // Defer slightly so a newly routed page has laid out its sections
    // before we measure/scroll to the target element. setTimeout (unlike
    // requestAnimationFrame) still fires even if the tab is backgrounded.
    const timer = setTimeout(scroll, 0);
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
