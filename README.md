# Orbit Marketing Site

A server-rendered Next.js (App Router) marketing site for Orbit: home, product pillar pages, profession-specific solution pages, pricing, competitor comparisons, a blog, free lead-magnet tools, and legal pages. Every page ships full HTML at request time (no client-rendered shell), which was the core problem with the previous Vite SPA.

## Status

This Next.js app now lives at the repo root, replacing the old Vite SPA (moved out of the working tree; still recoverable from git history prior to this commit if needed). The Vercel project should auto-detect Next.js and redeploy `www.getorbitcrm.com` from this on the next push to `main`, assuming the project's Root Directory setting isn't pinned to something else in the Vercel dashboard. After deploying:

1. Confirm the redirects in `next.config.mjs` actually fire in production (`/features/booking` → `/product/booking`, `/features/payments` → `/product/payments`).
2. Re-run `npm run check:links` and `npm run build` against the deployed URL.
3. Resubmit the sitemap in Google Search Console and Bing Webmaster Tools (see `docs/seo-launch-checklist.md`).

## Setup

```bash
npm install
cp .env.example .env.local   # fill in real values, see below
npm run dev
```

## Environment variables

| Variable | Required for | Notes |
|---|---|---|
| `SUPABASE_URL` | `/api/leads` | Project URL from Supabase. Not yet provisioned, see `content/TODO-verify.md`. |
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

See `content/TODO-verify.md` and `docs/seo-keyword-map.md` for everything flagged as needing a real answer before launch.
