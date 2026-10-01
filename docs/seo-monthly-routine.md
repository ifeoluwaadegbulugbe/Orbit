# SEO Monthly Routine

A recurring checklist for after launch. Takes about 30-45 minutes once a month.

## Google Search Console

- **Coverage**: any new "Excluded" or "Error" pages? A sudden jump usually means a broken internal link, an accidental `noindex`, or a redirect loop introduced in a recent change.
- **Performance → Queries**: which queries are gaining impressions but have low click-through? That's a signal the title/meta description for that page's ranking query could be rewritten to be more compelling.
- **Performance → Pages**: which pages are losing clicks month over month? Check whether the content is stale (an old price, an outdated feature claim) before assuming it's a ranking issue.
- **Core Web Vitals**: any pages newly flagged as "Needs improvement" or "Poor"? Cross-check against anything shipped that month, a new embed, an unoptimized image, a new third-party script.
- **Links**: check the "Links" report for new referring domains. A sudden unfamiliar spike can be spam; a legitimate new backlink is worth a thank-you or a relationship follow-up.

## Bing Webmaster Tools

- Same Coverage and Performance checks as above, Bing's index behaves differently from Google's and sometimes surfaces issues Google hasn't yet.

## Content

- Pick the lowest-performing blog post from the Performance report and either update it (fresher examples, corrected claims, better internal links) or decide it's not worth maintaining.
- Check `content/TODO-verify.md` for anything that's since been confirmed, remove it from the list and update the live copy if it was published with a placeholder.
- Confirm the Pro price, Free plan limits, and any feature claims on `/pricing` still match reality.

## Technical

- Spot-check `view-source:` on 2-3 random pages to confirm server-rendered HTML still contains real content (a regression here, like an accidental client-only wrapper, is easy to miss visually but devastating for SEO).
- Re-run `npm run check:links` against production if a crawl-based version of the script is set up for it, or manually click through nav and footer links.
- Re-run Lighthouse on `/`, `/pricing`, and the newest blog post. Flag any regression against the launch baseline recorded at launch time.

## Backlinks and off-page

- Check whether any of the outreach from `docs/seo-offsite.md` landed. Follow up on anything pending more than 3 weeks.
- Search `site:getorbitcrm.com` to spot-check what's indexed and catch anything that shouldn't be (e.g., a draft page accidentally left indexable).
