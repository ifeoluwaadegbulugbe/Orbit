# SEO Keyword Map

One primary keyword per URL. No two rows share a primary keyword, to avoid cannibalization. Secondary keywords are supporting phrases the page can naturally cover in H2s, FAQ, and body copy, not additional targets to chase with separate pages.

Search volumes are not included here since I have no keyword-research tool access from this environment; intent and phrasing are based on how the brief itself describes the audience (non-technical solo service professionals searching in plain language, often profession-first). Treat the specific phrasing as a draft to run through Google Keyword Planner / Ahrefs / Search Console (once verified) before locking final copy.

## Core pages

| URL | Primary keyword | Secondary keywords | Intent |
|---|---|---|---|
| `/` | booking and invoicing software for service businesses | run my service business, replace WhatsApp bookings, client management app | Navigational/commercial — brand + category discovery |
| `/pricing` | Orbit pricing | how much does Orbit cost, free booking software, Orbit Pro plan | Commercial — bottom of funnel |
| `/about` | about Orbit | who is Orbit for, Orbit mission | Informational — low volume, trust/E-E-A-T support |
| `/changelog` | Orbit changelog | Orbit new features, Orbit updates | Navigational — existing users |
| `/help` | Orbit help center | Orbit FAQ, how does Orbit work | Informational — support deflection |
| `/contact` | contact Orbit | Orbit support, Orbit WhatsApp | Navigational |

## Product pillar pages

| URL | Primary keyword | Secondary keywords | Intent |
|---|---|---|---|
| `/product` | business management software for service providers | all-in-one booking payments CRM, Orbit features | Commercial |
| `/product/booking` | online booking software for small businesses | appointment scheduling app, booking link for Instagram bio, stop double bookings | Commercial |
| `/product/payments` | invoicing and payment software for service businesses | get paid online Africa, accept card and mobile money payments, deposit for bookings | Commercial |
| `/product/clients` | client management software for service businesses | CRM for beauty professionals, client history app, replace client spreadsheet | Commercial |
| `/product/automations` | appointment reminder and follow-up automation | automated booking reminders, client follow-up system | Commercial |
| `/product/insights` | business analytics for solo service providers | revenue tracking app, know your business performance | Commercial, lower volume |

Each pillar is supported by 3+ blog posts (see cluster map below) that link up to it with descriptive anchor text.

## Solutions pages (shared template, profession-specific content)

| URL | Primary keyword | Secondary keywords | Intent |
|---|---|---|---|
| `/for/nail-technicians` | booking software for nail technicians | nail tech appointment app, nail salon client management | Commercial, profession-specific |
| `/for/hairstylists` | booking software for hairstylists | salon scheduling app, hairstylist invoicing | Commercial |
| `/for/photographers` | client management software for photographers | photography booking and invoicing, photographer deposit software | Commercial |
| `/for/makeup-artists` | booking software for makeup artists | MUA client management, makeup artist deposit app | Commercial |
| `/for/barbers` | booking app for barbers | barbershop scheduling software, barber client reminders | Commercial |

## Compare pages

| URL | Primary keyword | Secondary keywords | Intent |
|---|---|---|---|
| `/compare/fresha` | Fresha alternative | Fresha vs Orbit, Fresha commission fees | Commercial, comparison (bottom funnel) |
| `/compare/booksy` | Booksy alternative | Booksy vs Orbit, Booksy pricing | Commercial, comparison |
| `/compare/whatsapp-and-spreadsheets` | booking software vs WhatsApp and spreadsheets | why WhatsApp booking doesn't scale, spreadsheet to CRM | Commercial, problem-aware |

All competitor claims here must be sourced and dated at publish time (see `content/TODO-verify.md`); nothing about Fresha's or Booksy's actual pricing is asserted from memory.

## Resources (lead-magnet pages)

| URL | Primary keyword | Secondary keywords | Intent |
|---|---|---|---|
| `/resources` | free tools for service business owners | business templates, pricing calculator | Informational/commercial hub |
| `/resources/invoice-generator` | free invoice generator | make an invoice online, invoice template for service business | Tool/transactional |
| `/resources/pricing-calculator` | service pricing calculator | how to price my services, beauty business pricing tool | Tool/transactional |
| `/resources/booking-link-preview` | booking link for Instagram bio | free booking page, link in bio for appointments | Tool/transactional |
| `/resources/templates` | client intake form template | no-show policy template, WhatsApp follow-up message templates | Informational, lead magnet |

## Blog pillar-cluster map

| Blog post | Primary keyword | Links up to (pillar) |
|---|---|---|
| How to stop double bookings as a solo service professional | how to stop double bookings | `/product/booking` |
| How to write an invoice for a service business in Nigeria (with template) | how to write an invoice for a service business in Nigeria | `/product/payments`, `/resources/invoice-generator` |
| How to take deposits so clients stop no-showing | how to take deposits for bookings | `/product/payments`, `/product/booking` |
| Fresha vs Booksy vs Orbit: which pricing model suits an African solo business | Fresha vs Booksy vs Orbit | `/compare/fresha`, `/compare/booksy`, `/pricing` |
| The WhatsApp booking trap: why chat-based scheduling breaks as you grow | WhatsApp booking problems | `/product/booking`, `/compare/whatsapp-and-spreadsheets` |
| A simple client follow-up system for beauty and creative professionals | client follow-up system | `/product/automations`, `/product/clients` |

Each pillar page above needs a minimum of 3 supporting posts before launch is "done" per the brief's topic-cluster requirement; the 6 launch posts cover 2 posts each for booking/payments and 1 each for clients/automations, so clients and automations are under-served initially. Flagging this now: either write 1-2 more launch posts for `/product/clients` and `/product/insights`, or accept those two pillars launch without full cluster support and backfill in month 2.

## Programmatic pages (profession × city)

**Status: not built.** Template: `/for/[profession]/[city]` or `/[city]/[profession]-booking-software` (final URL pattern still to be decided based on which reads more naturally and avoids thin-content flags).

| Primary keyword pattern | Example | Publish condition |
|---|---|---|
| booking software for [profession] in [city] | booking software for nail technicians in Lagos | Only if locally-accurate payment/pricing/booking-norm content can be written; otherwise noindex or don't generate (see `content/TODO-verify.md` on Ghana/Kenya verification) |

These were deliberately skipped in the `site/` build since local accuracy for Accra and Nairobi specifically hasn't been verified, per the brief's own rule against publishing unverified local claims.

## Legal / utility (no keyword targeting, unique titles only)

`/privacy`, `/terms`, `/cookies`, `/sitemap.xml`, `/robots.txt`, `/rss.xml`, 404 — these get accurate, unique `<title>`s for usability and E-E-A-T signals, not keyword targeting. Not included in the cannibalization check above.
