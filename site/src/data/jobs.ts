import { Calendar, Wallet, Users, LineChart } from "lucide-react";

export const fourJobs = [
  {
    icon: Calendar,
    title: "Get booked",
    description: "Clients book from your link. You approve every request before it hits your calendar.",
    href: "/product/booking",
  },
  {
    icon: Wallet,
    title: "Get paid",
    description: "Invoices, deposits, and Orbit Wallet, so payment stops living in screenshots and bank alerts.",
    href: "/product/payments",
  },
  {
    icon: Users,
    title: "Keep clients",
    description: "Every client's history, preferences, and last visit, in one place instead of your memory.",
    href: "/product/clients",
  },
  {
    icon: LineChart,
    title: "Know your business",
    description: "Revenue, repeat-client rate, and what's actually working, without building a spreadsheet.",
    href: "/product/insights",
  },
];
