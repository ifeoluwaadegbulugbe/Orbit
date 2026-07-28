import { Link } from "react-router-dom";
import { motion } from "motion/react";

export function Footer() {
  const navigation = {
    product: ["Features", "Bookings", "Payments", "Pricing", "Roadmap"],
    company: ["About", "Blog", "Careers", "Contact"],
    resources: ["Documentation", "Help Center", "Community", "API"],
    legal: ["Privacy", "Terms", "Security"]
  };

  // Links that use React Router <Link> (internal pages, including in-page anchors on "/")
  const internalRoutes: Record<string, string> = {
    Privacy: "/privacy",
    Terms: "/terms",
    Pricing: "/pricing",
    Bookings: "/features/booking",
    Payments: "/features/payments",
    About: "/#hero",
    Features: "/#platform-overview",
  };

  // Links that use plain <a> with hash or external href
  const getHref = (link: string) => {
    switch (link) {
      case "Contact":  return "mailto:getorbitcrm@gmail.com";
      default:         return "#";
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="Orbit logo" className="w-8 h-8" />
              <span className="text-lg font-semibold text-gray-700">Orbit</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Your entire business in one workspace.
            </p>
          </div>

          {Object.entries(navigation).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-800 mb-4 capitalize">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    {internalRoutes[link] ? (
                      <Link
                        to={internalRoutes[link]}
                        className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        {link}
                      </Link>
                    ) : (
                      <a
                        href={getHref(link)}
                        className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © 2026 Orbit. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://x.com/orbitcrm?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              X
            </a>
            <a
              href="https://www.linkedin.com/company/useorbitcrm/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.tiktok.com/@useorbitapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
