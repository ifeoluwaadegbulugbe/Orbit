export interface ProfessionContent {
  slug: string;
  label: string;
  headline: string;
  description: string;
  painPoints: string[];
  metaTitle: string;
  metaDescription: string;
  mockupBusinessName: string;
  mockupRole: string;
  mockupServices: string[];
}

export const professions: ProfessionContent[] = [
  {
    slug: "nail-technicians",
    label: "Nail technicians",
    headline: "Built for how a nail tech actually books clients",
    description:
      "Clients book your next slot, pay a deposit upfront, and get a reminder the day before. You spend less time on back-and-forth DMs and more time at the table.",
    painPoints: [
      "Stop double-booking the same slot from Instagram and WhatsApp",
      "Take a deposit so last-minute cancellations don't cost you a full slot",
      "Keep notes on nail shape, colors, and allergies for every regular",
    ],
    metaTitle: "Booking Software for Nail Technicians",
    metaDescription:
      "Orbit is booking and invoicing software built for nail technicians: a booking link, deposits, reminders, and client history in one place.",
    mockupBusinessName: "Glow by Ada",
    mockupRole: "Nail technician · Lagos",
    mockupServices: ["Gel manicure — 45 min", "Full set — 90 min", "Nail art add-on — 20 min"],
  },
  {
    slug: "hairstylists",
    label: "Hairstylists",
    headline: "A booking page that fits a stylist's real schedule",
    description:
      "Set your real availability, let clients pick a slot, and approve each one before it's confirmed, so your chair never gets double-booked over a service that runs long.",
    painPoints: [
      "Protect time for color services that run longer than a standard slot",
      "Send automatic reminders so clients actually show up",
      "Track formulas and preferences per client, not in a notebook",
    ],
    metaTitle: "Scheduling Software for Hairstylists",
    metaDescription:
      "Orbit gives hairstylists a booking page, deposits, reminders, and client history, so your chair stays full without the back-and-forth.",
    mockupBusinessName: "Studio by Yemi",
    mockupRole: "Hairstylist · Lagos",
    mockupServices: ["Silk press — 90 min", "Full color — 3 hrs", "Trim & style — 45 min"],
  },
  {
    slug: "photographers",
    label: "Photographers",
    headline: "From inquiry to final invoice, without the spreadsheet",
    description:
      "Shoots are projects, not slots. Orbit tracks each booking from inquiry through deposit, shoot day, and final payment, with a client history that remembers every past job.",
    painPoints: [
      "Request a deposit before you block out a shoot date",
      "Send a professional invoice the moment a shoot wraps",
      "See a client's full project history before a repeat booking call",
    ],
    metaTitle: "Client Management & Invoicing for Photographers",
    metaDescription:
      "Orbit helps photographers manage bookings, deposits, invoices, and client history in one place, from first inquiry to final payment.",
    mockupBusinessName: "Lens & Light Studio",
    mockupRole: "Photographer · Lagos",
    mockupServices: ["Portrait session — 1 hr", "Event coverage — half day", "Product shoot — 2 hrs"],
  },
  {
    slug: "makeup-artists",
    label: "Makeup artists",
    headline: "Deposits and reminders that cut down no-shows",
    description:
      "Bridal trials, event bookings, and last-minute requests all come through one link. A deposit locks in the date, and a reminder lands the day before.",
    painPoints: [
      "Separate trial bookings from event-day bookings without confusion",
      "Require a deposit on high-value bookings like weddings",
      "Keep a record of past looks and product notes per client",
    ],
    metaTitle: "Booking Software for Makeup Artists",
    metaDescription:
      "Orbit gives makeup artists a booking link, deposits, reminders, and client notes, built for trials, events, and bridal work.",
    mockupBusinessName: "Beat by Tolu",
    mockupRole: "Makeup artist · Lagos",
    mockupServices: ["Bridal trial — 1 hr", "Event makeup — 45 min", "Photoshoot glam — 1 hr"],
  },
  {
    slug: "barbers",
    label: "Barbers",
    headline: "Keep the chair full without living in your DMs",
    description:
      "A simple booking link for regulars and walk-in requests alike, with automatic reminders so slots don't go empty from a forgotten appointment.",
    painPoints: [
      "Let regulars rebook in two taps from your booking link",
      "Cut down no-shows with automatic appointment reminders",
      "See each client's cut history and preferences at a glance",
    ],
    metaTitle: "Booking App for Barbers",
    metaDescription:
      "Orbit is a booking app for barbers and barbershops: a booking link, automated reminders, and client history, built for a busy chair.",
    mockupBusinessName: "The Fade Room",
    mockupRole: "Barber · Lagos",
    mockupServices: ["Haircut & lineup — 30 min", "Beard trim — 20 min", "Full groom — 50 min"],
  },
  {
    slug: "lash-and-brow-technicians",
    label: "Lash & brow technicians",
    headline: "Built for fills, refills, and everything in between",
    description:
      "Set accurate durations for fills versus full sets, take a deposit on first-time clients, and keep a record of the exact style and products used for every regular.",
    painPoints: [
      "Give full sets and quick fills their own realistic time slots",
      "Require a deposit from new clients without the awkward conversation",
      "Keep a style and product history so regulars never have to re-explain",
    ],
    metaTitle: "Booking Software for Lash & Brow Technicians",
    metaDescription:
      "Orbit gives lash and brow technicians a booking link, deposits, reminders, and client history, built around fills, full sets, and regulars.",
    mockupBusinessName: "Lash Bar by Zainab",
    mockupRole: "Lash & brow technician · Lagos",
    mockupServices: ["Classic full set — 90 min", "Lash fill — 45 min", "Brow lamination — 40 min"],
  },
  {
    slug: "personal-trainers",
    label: "Personal trainers",
    headline: "Keep sessions, packages, and payments in one place",
    description:
      "Sell session packages, track how many sessions a client has left, and let clients book their next slot without a back-and-forth over text.",
    painPoints: [
      "Track remaining sessions on a package without a separate spreadsheet",
      "Send a reminder before every session so clients actually show up",
      "See a client's training history and notes before every session",
    ],
    metaTitle: "Booking & Client Management for Personal Trainers",
    metaDescription:
      "Orbit helps personal trainers manage bookings, session packages, payments, and client history, all in one place.",
    mockupBusinessName: "Peak Fitness Coaching",
    mockupRole: "Personal trainer · Lagos",
    mockupServices: ["1-on-1 session — 1 hr", "5-session package", "Fitness assessment — 30 min"],
  },
  {
    slug: "tutors-and-coaches",
    label: "Tutors & coaches",
    headline: "A booking link that fits recurring lessons, not just one-off slots",
    description:
      "Whether it's a weekly tutoring slot or a one-time coaching session, clients book what's actually open, and you get paid without chasing a parent or client for a transfer.",
    painPoints: [
      "Handle recurring weekly slots without re-booking manually every time",
      "Invoice parents or clients automatically after every session",
      "Keep notes on progress and topics covered per student",
    ],
    metaTitle: "Booking Software for Tutors & Coaches",
    metaDescription:
      "Orbit gives tutors and coaches a booking link, invoicing, and client history, built for recurring lessons and one-off sessions alike.",
    mockupBusinessName: "Bright Path Tutoring",
    mockupRole: "Tutor & coach · Lagos",
    mockupServices: ["1-on-1 lesson — 1 hr", "Weekly recurring slot", "Exam prep session — 90 min"],
  },
  {
    slug: "event-planners",
    label: "Event planners",
    headline: "From first inquiry to final invoice, without losing track",
    description:
      "Events are projects with a lot of moving pieces. Orbit tracks each one from inquiry through deposit, event day, and final payment, with a full history per client.",
    painPoints: [
      "Request a deposit before you block out a date for a client",
      "Send a professional invoice the moment an event wraps",
      "See a client's full event history before a repeat booking call",
    ],
    metaTitle: "Client Management & Invoicing for Event Planners",
    metaDescription:
      "Orbit helps event planners manage bookings, deposits, invoices, and client history in one place, from first inquiry to final payment.",
    mockupBusinessName: "Moments Event Co.",
    mockupRole: "Event planner · Lagos",
    mockupServices: ["Consultation — 30 min", "Full-day coordination", "Venue walkthrough — 1 hr"],
  },
];
