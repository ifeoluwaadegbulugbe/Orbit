export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export const productLinks: NavLink[] = [
  { label: "Overview", href: "/product", description: "All four jobs, one workspace" },
  { label: "Booking", href: "/product/booking", description: "Approve every booking yourself" },
  { label: "Payments", href: "/product/payments", description: "Orbit Wallet, invoices, deposits" },
  { label: "Clients", href: "/product/clients", description: "Every client, one history" },
  { label: "Automations", href: "/product/automations", description: "Reminders and follow-ups that run themselves" },
  { label: "Insights", href: "/product/insights", description: "Know how your business is really doing" },
];

export const solutionLinks: NavLink[] = [
  { label: "Nail technicians", href: "/for/nail-technicians" },
  { label: "Hairstylists", href: "/for/hairstylists" },
  { label: "Photographers", href: "/for/photographers" },
  { label: "Makeup artists", href: "/for/makeup-artists" },
  { label: "Barbers", href: "/for/barbers" },
];

export const resourceLinks: NavLink[] = [
  { label: "Blog", href: "/blog", description: "Guides and tips for running a service business" },
  { label: "Free tools & templates", href: "/resources", description: "Invoice generator, pricing calculator, and more" },
  { label: "Help center", href: "/help", description: "Answers to common questions" },
  { label: "Compare", href: "/compare/whatsapp-and-spreadsheets", description: "Orbit vs. Fresha, Booksy, and spreadsheets" },
];
