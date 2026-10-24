# TODO: Verify Before Publishing

Every item below is a claim, number, or identity detail I could not confirm from the repo alone. Nothing on the new site should assert these as fact until they're checked off here. Where the site needs to say *something* in the meantime, the placeholder noted is what's actually live, not the unverified claim. Items marked **RESOLVED** were decided explicitly and are reflected in the code as of the `site/` rebuild.

## Brand identity

- [x] **RESOLVED — brand color.** `site/src/app/globals.css` now uses `#E8557A` as `--color-primary-500`, with a full generated tint scale (50-900), as the rebuild brief instructed. The old Vite site's `#ec4899` was the pre-rebrand value and has been superseded.
- [x] **RESOLVED — TikTok handle.** `site/src/site.config.ts` uses `https://www.tiktok.com/@getorbitcrm`, per the brief's explicit statement, superseding the old repo's `@useorbitapp`. X (`x.com/orbitcrm`) and LinkedIn (`linkedin.com/company/useorbitcrm/`) were consistent across the old repo already (not actually in conflict) and were carried forward unchanged. If any of these three are wrong, they're a one-line fix in `site.config.ts`, every component reads from there.

## Product claims

- [x] **RESOLVED: the wallet concept is gone.** Payments are now "Orbit Pay" (Paystack, settles straight into the owner's bank account, Nigeria only). Fees: Free 2.5% + ₦100 capped at ₦3,500; Pro 2% + ₦100 capped at ₦2,500. Still to confirm: that Orbit Pay is live for Nigerian users and that every dashboard string matches the site.
- [ ] **Exact Free vs Pro feature split.** Site now says: Free = up to 10 clients, booking link with owner approval, client management and reminders, invoicing, Orbit Pay at the higher fee, email support. Pro = unlimited clients, lower Orbit Pay fee, automations and follow-ups, advanced insights, custom templates, priority support, 7 day free trial, ₦7,500/month or ₦75,000/year in Nigeria. Confirm the trial and the yearly price are live in the app.
- [ ] **Prices for other African countries.** `src/data/regions.ts` only lists Nigeria. Other countries see the naira price and "Orbit Pay: coming soon in your country". Add confirmed prices to `regionPrices` when ready.
- [ ] **"150+ currencies supported."** Appears in the FAQ, JSON-LD, and feature lists. No source for this number in the repo. Confirm or replace with an accurate claim (e.g., "accepts cards, bank transfers, and mobile money" without a currency count).
- [ ] **"Native iOS and Android apps are coming soon."** Confirm this is still true and get a rough timeframe, or soften to avoid an unkeepable promise.
- [ ] **7-day free trial on Pro.** Confirm this billing mechanic is actually wired up (the live checkout flow in the orphaned root `pricing.tsx` uses Paystack with a plan code env var; unclear if this is production-ready).
- [ ] **Owner-approval booking flow** ("the owner approves each booking before it's confirmed") is asserted in the new brief as a key differentiator but isn't described anywhere in the current marketing copy. Confirm this is live in the product (not roadmap) before it becomes a homepage hero visual.
- [x] **RESOLVED — "no commission, ever" claim was false.** Orbit actually charges a processing fee on every payment that goes through Orbit Pay's payment link, confirmed directly by the business owner. Every "flat pricing, never a commission" / "Orbit never takes a commission on bookings" claim across the site (hero, pricing page, home FAQ, solution-page FAQ, about principles, llms.txt) has been corrected to: the $12/month subscription is flat regardless of volume, and Orbit Pay separately carries a 2.5% per-transaction processing fee, the same kind of fee any card processor charges.
- [x] **RESOLVED — `/compare/fresha` and `/compare/booksy` removed.** Both pages (and the blog post `fresha-vs-booksy-vs-orbit.mdx`) were built entirely around the now-false "flat subscription vs. marketplace commission" differentiation. Per direct instruction, they're deleted rather than reworked; only `/compare/whatsapp-and-spreadsheets` remains in the Compare section.

## Social proof

- [ ] **No real testimonials or customer stories exist.** The previous session already removed fabricated testimonials and a fabricated "10,000 users" claim from this codebase. The dead `testimonials.tsx` component still contains six fictional names/quotes; it isn't wired into any route today, so it's not live, but it must not be reused as source material for the rebuild. Per the brief's own rule, **`/customers` will not be built or linked until at least one real customer story is supplied.**
- [ ] **Mockup numbers in `product-preview.tsx` and `analytics.tsx`** (e.g., "$48,392 revenue," "248 active clients," "+32.5%") are illustrative dashboard-mockup data, not real statistics. They're fine to keep as clearly-a-mockup UI decoration but must never be captioned as real Orbit metrics.

## Infrastructure / accounts

- [ ] **Does a Supabase project already exist for Orbit**, or does one need to be created for the `leads` table? Need project URL + anon/service keys as env vars either way.
- [ ] **Resend account** for lead confirmation emails: exists or needs setup?
- [ ] **GA4 and Microsoft Clarity**: the current site only loads GTM (`GTM-MQRPTJ78`) directly; GA4/Clarity are not visible as separate script tags in the repo, so they're presumably configured as tags *inside* the GTM container already. Confirm this via GTM's own dashboard rather than assuming, since I cannot see inside the container from the codebase.
- [ ] **Google Search Console / Bing Webmaster Tools**: confirm current verification status and access, so I know whether Phase 8's "submit sitemap" step is a first-time setup or a re-submission.

## Canonical host mismatch

- [x] **RESOLVED.** `site/` standardizes on `https://www.getorbitcrm.com` everywhere (`site.config.ts`, `sitemap.ts`, `robots.ts`, every `buildMetadata()` canonical). The old repo's `public/robots.txt` (no `www`) is superseded; don't carry it over on cutover.

## Markets for programmatic SEO

- [ ] **Not built.** Profession × city pages (e.g. "booking software for nail technicians in Lagos") were not generated in `site/`, since local payment/pricing/booking-norm accuracy for Ghana and Kenya specifically hasn't been verified, and the brief's own rule is to noindex or skip generation rather than publish unverified local claims. If this is wanted, confirm verified local content per city first, then add a `/for/[profession]/[city]` route.

## New items found during the production cutover

- [ ] **Next.js pinned to 15.5.27, not the latest 16.x.** The initial build used 15.1.6, which `npm install` flagged with 33 security advisories including several critical RCE/DoS issues; upgraded to 15.5.27 (latest 15.x patch) before this went live, which clears all but 3 moderate/high advisories nested in Next's own bundled dependencies. A 16.x upgrade is a breaking change and wasn't attempted right before a production push, it should be scheduled and tested separately.

## New items found while building the site

- [ ] **WhatsApp Business number is a placeholder.** `site.config.ts` has `whatsapp.number: "2340000000000"`, which is not a real number. Every WhatsApp CTA across the site (hero, nav, footer, contact, pricing, blog share buttons) reads from this one value, so it's a single-line fix once the real number is confirmed.
- [ ] **Lead capture stores to Supabase but sends no confirmation email.** The brief mentions an "optional" Resend confirmation; `/api/leads` currently only inserts into the `leads` table. If a confirmation email is wanted, a Resend account needs to exist and `/api/leads` needs the send call added.
- [ ] **Changelog entries in `src/data/changelog.ts` are placeholders** describing recent repo activity, not a real product changelog. Replace with actual release notes before launch.
- [ ] **Cookie Policy (`/cookies`) is a new page**, drafted for this rebuild since the old site didn't have one. Like Privacy and Terms, it carries an on-page notice that it hasn't been reviewed by a lawyer.
- [ ] **WhatsApp removed as a contact channel sitewide** (nav, footer, hero, CTA bands, contact page, help page) per direct instruction, since no real WhatsApp Business number exists to publish and a personal number shouldn't be exposed publicly. Email and the contact form are the only contact channels now. The blog's "share this post on WhatsApp" link was kept since it doesn't expose any business number.
