# SEO Launch Checklist

Run through this before pointing the live domain at the new site (`site/`).

## Before cutover

- [ ] Resolve every open item in `content/TODO-verify.md`, at minimum: Orbit Wallet's live status, the exact Free/Pro feature split, and the social handles in `site/src/site.config.ts`.
- [ ] `npm run build` succeeds with zero errors in `site/`.
- [ ] `npm run check:links` passes with zero broken, empty, or `#` links.
- [ ] `npx next build` output reviewed: confirm every page in the site map is listed as `○` (static) or `●` (SSG), not an unexpected `ƒ` (dynamic) that should have been static.
- [ ] View source (not DevTools' rendered DOM) on `/`, `/pricing`, and one blog post. Confirm the H1, body copy, and links are present in the raw HTML.
- [ ] Run `curl -s https://www.getorbitcrm.com/ | grep "<h1"` (after deploy) to confirm the same from the actual production response.

## Canonical host and redirects

- [ ] Vercel project's production domain is `www.getorbitcrm.com`, with the bare domain and any `http://` variant redirecting to it (301, not a client-side redirect).
- [ ] `next.config.mjs` redirects (`/features/booking` → `/product/booking`, `/features/payments` → `/product/payments`) are live and return 301, not 307/308 that then gets cached incorrectly. Test with `curl -I`.
- [ ] No redirect chains: a redirected URL lands on its final destination in one hop.
- [ ] Every canonical tag is self-referencing except where intentionally pointing elsewhere (there are none of the latter on this site).

## Structured data

- [ ] Run Google's [Rich Results Test](https://search.google.com/test/rich-results) against: `/`, `/pricing`, one product page, one solution page, one blog post, `/help`.
- [ ] Confirm Organization, WebSite, and SoftwareApplication JSON-LD validate on every page (emitted from the root layout).
- [ ] Confirm BreadcrumbList validates on every nested page.
- [ ] Confirm FAQPage validates on `/`, `/pricing`, `/help`, each product page, each solution page, and each compare page.
- [ ] Confirm BlogPosting validates on every published post.
- [ ] Fix every warning the tool reports, not just errors.

## Sitemap and robots

- [ ] `/sitemap.xml` loads and lists every page in the site map, including all 6 blog posts.
- [ ] `/robots.txt` allows all public paths, disallows `/api/`, and references the sitemap at the correct canonical host.
- [ ] `/llms.txt` and `/rss.xml` both load and return the expected content type.

## Search engine accounts

- [ ] Verify `www.getorbitcrm.com` as a domain property in Google Search Console.
- [ ] Verify in Bing Webmaster Tools.
- [ ] Submit the sitemap URL in both.
- [ ] If the old Vite site was previously indexed, check Search Console's Coverage report over the following weeks for 404s on old URLs that weren't caught by the redirect map.

## Performance

- [ ] Run Lighthouse (mobile) against the deployed `/`, `/pricing`, and one blog post. Target: 95+ on Performance, Accessibility, Best Practices, and SEO.
- [ ] Confirm the hero image/mockup isn't causing layout shift (CLS).
- [ ] Confirm GTM, loaded via `next/script` with `strategy="afterInteractive"`, isn't blocking the main thread at first paint.

## Accessibility

- [ ] Keyboard-only pass: tab through the nav (including the mega-menus), a form (contact or newsletter), and the FAQ accordion. Everything should be reachable and operable without a mouse.
- [ ] Skip-to-content link works (Tab once on page load, Enter).
- [ ] Color contrast check on primary buttons and body text against the background, in both light and the dark-mode media query.

## Analytics

- [ ] Confirm GTM container `GTM-MQRPTJ78` fires on page load (check the GTM preview mode against the live URL).
- [ ] Confirm GA4 and Microsoft Clarity are configured as tags inside that GTM container (this repo doesn't load them directly, see `content/TODO-verify.md`).
- [ ] Trigger each custom event manually once (click "Start free," submit a resource tool's email capture, click a WhatsApp link) and confirm it appears in GTM's preview/debug view as `signup_start`, `lead_magnet_submit`, `whatsapp_click`, etc.

## Content

- [ ] No `/customers` page exists or is linked (no real testimonials yet, per the brief's own rule).
- [ ] No programmatic city pages exist yet (local accuracy unverified, per `content/TODO-verify.md`).
- [ ] Legal pages (`/privacy`, `/terms`, `/cookies`) have been reviewed by a lawyer, not just drafted. The in-page Callout disclaiming this should be removed only after that review.
