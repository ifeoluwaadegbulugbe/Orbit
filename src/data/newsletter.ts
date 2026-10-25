/**
 * The weekly tips email. Each tip goes out on its `sendOn` date (UTC). A cron job
 * runs every Monday and sends the tip dated that day, so add one entry per week.
 * Write in plain language and link to a blog post so readers have somewhere to go next.
 */
export interface NewsletterTip {
  /** YYYY-MM-DD, must be a Monday for the weekly cron to pick it up. */
  sendOn: string;
  subject: string;
  /** Short line shown next to the subject in the inbox. */
  preheader: string;
  paragraphs: string[];
  link: { label: string; path: string };
}

export const newsletterTips: NewsletterTip[] = [
  {
    sendOn: "2026-11-02",
    subject: "Ask for a deposit before you hold the slot",
    preheader: "A small deposit turns a maybe into a booking.",
    paragraphs: [
      "A booking with no deposit costs the client nothing to skip. A booking with a deposit costs them something, so they show up or tell you early.",
      "Say it on your booking link, before the client picks a time: the amount, what it covers, and what happens if they need to move the date. Clear rules feel fair. Vague ones start arguments.",
      "Start small. Many service businesses ask for a fifth to a half of the price. Pick a number you are comfortable keeping if someone does not come.",
    ],
    link: { label: "How to take deposits so clients stop no-showing", path: "/blog/take-deposits-no-shows" },
  },
  {
    sendOn: "2026-11-09",
    subject: "Take bookings in one place, not three",
    preheader: "One link is easier to keep up than a pile of DMs.",
    paragraphs: [
      "If bookings arrive by WhatsApp, Instagram and phone calls, something will get lost. Usually it is the message you saw while with another client.",
      "Choose one place where a booking becomes real. Put that link in your bio and your WhatsApp status, and reply to every DM with the same link.",
      "It feels slower for the first week. After that, you stop answering the same three questions and you stop double booking yourself.",
    ],
    link: { label: "The WhatsApp booking trap", path: "/blog/whatsapp-booking-trap" },
  },
  {
    sendOn: "2026-11-16",
    subject: "Send the invoice before the client leaves",
    preheader: "Paid on the day beats chased next week.",
    paragraphs: [
      "The longer an invoice waits, the harder it is to collect. The easiest moment to get paid is while the client is still happy with the work.",
      "Send it the same day. Put the services, the total, how to pay and the due date on it. If you took a deposit, show it as already paid so the client sees only what is left.",
      "A clear invoice also protects you. It is a record of what was agreed if anyone asks later.",
    ],
    link: { label: "How to invoice as a service business in Nigeria", path: "/blog/invoice-for-service-business-nigeria" },
  },
  {
    sendOn: "2026-11-23",
    subject: "Message clients who have not been back",
    preheader: "Your best new bookings are people who already like you.",
    paragraphs: [
      "Most clients do not leave. They just forget to rebook. A short message at the right time is often all it takes.",
      "Pick a gap that makes sense for your work. For lashes it might be three weeks, for a haircut six. When a client passes it, send one friendly line with your booking link.",
      "Keep a note of what each client likes. Mentioning it shows you remember them, and that is what brings people back.",
    ],
    link: { label: "A simple client follow-up system", path: "/blog/client-follow-up-system" },
  },
  {
    sendOn: "2026-11-30",
    subject: "How to stop double bookings",
    preheader: "Two clients, one time slot is avoidable.",
    paragraphs: [
      "Double bookings happen when your calendar lives in your head, a notebook and a chat thread all at once.",
      "Keep one calendar that is the source of truth. Only add a booking after you have approved it, and let clients choose from times that are actually open.",
      "When you do need to move someone, tell them early and offer two new times. Most clients are fine with a change when they hear first.",
    ],
    link: { label: "How to stop double bookings", path: "/blog/stop-double-bookings" },
  },
];

export function tipForDate(isoDate: string): NewsletterTip | undefined {
  return newsletterTips.find((t) => t.sendOn === isoDate);
}
