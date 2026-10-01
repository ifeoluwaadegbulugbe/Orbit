export interface ProfessionContent {
  slug: string;
  label: string;
  headline: string;
  description: string;
  painPoints: string[];
  metaTitle: string;
  metaDescription: string;
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
  },
];
