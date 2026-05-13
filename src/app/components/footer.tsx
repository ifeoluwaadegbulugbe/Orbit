import { motion } from "motion/react";

export function Footer() {
  const navigation = {
    product: ["Features", "Pricing", "Security", "Roadmap"],
    company: ["About", "Blog", "Careers", "Contact"],
    resources: ["Documentation", "Help Center", "Community", "API"],
    legal: ["Privacy", "Terms", "Security"]
  };

  const getHref = (link: string) => {
    switch(link) {
      case "About":
        return "#hero";
      case "Features":
        return "#platform-overview";
      case "Pricing":
        return "#pricing";
      default:
        return "#";
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">O</span>
              </div>
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
                    <a
                      href={getHref(link)}
                      className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      {link}
                    </a>
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
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
              Twitter
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
