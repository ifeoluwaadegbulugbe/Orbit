# Orbit Marketing Site

A server-rendered Next.js (App Router) marketing site for Orbit: home, product pillar pages, profession-specific solution pages, pricing, competitor comparisons, a blog, free lead-magnet tools, and legal pages. Every page ships full HTML at request time (no client-rendered shell), which was the core problem with the previous Vite SPA.

## Before this replaces the live site

This was built alongside the existing Vite SPA at the repo root, not in place of it, so the live `www.getorbitcrm.com` deploy keeps working while this is reviewed. To cut over:

1. Point the Vercel project's **Root Directory** setting to `site/` (or move this directory's contents to the repo root and remove the old Vite app).
2. Confirm the redirects in `next.config.mjs` cover every URL the old site had indexed (`/features/booking` → `/product/booking`, `/features/payments` → `/product/payments`).
3. Re-run `npm run check:links` and `npm run build` against the final deployed URL.
4. Resubmit the sitemap in Google Search Console and Bing Webmaster Tools (see `docs/seo-launch-checklist.md` at the repo root, one level up).

## Setup

```bash
npm install
cp .env.example .env.local   # fill in real values, see below
npm run dev
```

## Environment variables

| Variable | Required for | Notes |
|---|---|---|
| `SUPABASE_URL` | `/api/leads` | Project URL from Supabase. Not yet provisioned, see `content/TODO-verify.md` at the repo root. |
| `SUPABASE_SERVICE_ROLE_KEY` | `/api/leads` | Server-only, never exposed to the client. |

Run the migration in `supabase/migrations/0001_leads.sql` against your Supabase project (via the SQL editor or the Supabase CLI) before the lead forms will actually save anything. Until then, form submissions will fail with a 500 and log the error server-side; the UI shows a generic "something went wrong" message rather than crashing.

## Adding a blog post

1. Create `src/content/blog/your-slug.mdx`.
2. Add frontmatter matching the schema in `src/lib/content.ts` (`postFrontmatterSchema`): `title`, `description` (≤160 chars), `slug`, `date`, `author`, `category` (one of `Guides`, `Business tips`, `Product updates`, `Money and invoicing`), `tags`, and optionally `updated`, `cover`, `coverAlt`, `faq`.
3. Write the body in Markdown. Use `## Heading` for sections that should appear in the table of contents.
4. To add a mid-article CTA, drop `<MidArticleCta text="..." />` anywhere in the body, it's registered as an MDX component.
5. The post is automatically picked up by `/blog`, its category archive, any tag archives, the sitemap, and the RSS feed. No route file to touch.

## Adding a solution (profession) page

Solution pages at `/for/[profession]` are generated from `src/data/professions.ts`. Add a new entry to that array (slug, headline, description, pain points, meta title/description) and `src/app/for/[profession]/page.tsx` will statically generate it automatically. Also add the new profession to `src/data/nav.ts` (`solutionLinks`) so it appears in the nav, and to `src/app/sitemap.ts`.

## Adding a changelog entry

Add an object to the top of the array in `src/data/changelog.ts` (date, title, description). No other changes needed.

## Checking for broken links

```bash
npm run check:links
```

This runs `next build` output through a crawler that fails on any `href="#"`, empty href, or broken internal link. Run it before considering any content change "done." It requires a `.next` build to already exist (`npm run build` first).

## What's deliberately not built yet

- `/customers`: no real customer testimonials exist. Per the project brief, this page is not built or linked until real stories are supplied.
- Programmatic profession × city pages (e.g. "booking software for nail technicians in Accra"): not generated, since local payment/pricing accuracy for Ghana and Kenya hasn't been verified. See `content/TODO-verify.md`.
- Real Lighthouse scores and Search Console verification: these require a live deployment and account access this environment doesn't have. Run them after deploying.

See `content/TODO-verify.md` and `docs/seo-keyword-map.md` (both at the repo root, one level up from `site/`) for everything flagged as needing a real answer before launch.
