# Premium SaaS Website Design System

Derived from studying attio.com in a live browser (homepage, pricing, mobile, computed styles, keyframes, transitions) and applied to Orbit with an original identity. Nothing here is a copy of Attio's visuals, copy, or palette. It records *why* the site feels premium, so the principles can be reused.

## 1. What Attio actually does (observed)

**Structure.** Announcement bar, sticky translucent nav (95% white, 0.67px hairline), hero, one big product composite, a long "platform" section with a sticky scroll-spy tab rail, a single dark "moment" section, proof numbers, customer story, changelog, final CTA. Rhythm of surfaces: white, light gray, white, **near-black**, white. One dark section only, used for the brand's biggest idea.

**Hero.** 64px headline, weight 600, line-height 0.95, tracking -2%. One short subline in muted gray at 18px. Two CTAs: a dark primary (36px tall, 10px radius, 14px/500) and a quiet outline. On load the headline *blurs into focus* (opacity + blur), a one-time entrance, not a loop. Under it, a composite of overlapping real product windows at different depths (chat, terminal, main app, call recording). The product is the hero image. No stock photography, no illustrations of people.

**Mobile hero is re-composed, not shrunk.** The collage becomes a single focused window with a typing animation, and the two CTAs become an email field + full-width button.

**Typography.** Inter for UI, "Inter Display" for headings. Sizes: 72 (stat/moment), 64 (h1), 40 (h2), 18 (lead), 14 (UI). Headings are tightly tracked (-1% to -2.4%) and tightly leaded (0.95 to 1.1). Body weight is 500, not 400, on a muted blue-gray. Section titles use a **two-tone sentence**: the dark lead sentence plus a muted continuation, so the eye reads the claim first and the detail second.

**Spacing.** Sections breathe at 112px vertical. Content lives in a framed grid: 1px hairlines divide sections into cells, so whitespace feels architectural, not empty.

**Color.** Near-white page (#fefefe), near-black text with a slight blue cast, one muted gray for secondary text, hairline borders. Accent color appears only in tiny status chips and the active tab bar. Large color areas are rare and deliberate (one dark section, one pale-lavender hero glow). Depth comes from borders and layered shadows, not from saturation.

**Cards and radii.** Radii cluster at 8, 10, 12, and a few 23. Shadows are layered: a 1px ring, a soft 4px/12px, and a tight contact shadow, all low-alpha and cool-tinted. Product windows are the only elevated elements. Everything else is flat with a hairline.

**Motion.** The whole site shares one easing, `cubic-bezier(0.2, 0, 0, 1)` (fast start, soft landing). Durations are short: 50ms for press feedback, 200 to 300ms for hover, color, and opacity. Entrances use opacity plus small translate. The expensive motion is *scoped product micro-animations* (a radar sweep, a border that draws itself, a card cycling roles, a workflow node lighting up), each looping quietly inside its own feature panel and starting only when visible. Dialogs scale in. There is no page-wide parallax and no cursor effects.

**Interaction.** Sticky left tab rail with scroll-spy (active = dark text + thin accent bar, inactive = muted). Clicking scrolls to that block. Pricing has a monthly/annual segmented control. Nav dropdowns slide in from the side of the item you came from.

**Proof.** A single large pull quote, a customer story with one hard metric ("83% faster"), four big infrastructure numbers, and a live changelog with dates. Proof is specific and quantified, never adjectives.

**Copy.** Declarative and short. "Agents dig. You close." Two-beat sentences, verbs first, no filler adjectives.

## 2. Why it feels premium (the actual reasons)

1. The product is shown as real UI, in dense plausible detail, so it reads as a finished product.
2. Restraint: one typeface family, one easing, one dark moment, accent color almost never.
3. Hierarchy through weight and tone, not size alone (two-tone headings, muted body).
4. Architecture: hairlines and a consistent grid make everything feel engineered.
5. Motion is functional (it demonstrates the product) and scoped (it never competes with reading).
6. Specificity in copy and numbers.

## 3. Orbit principles (original adaptation)

**Identity.** Warm paper surfaces, near-black ink, **Fraunces** serif for display (the playful, human signature Attio doesn't have), **Inter** for UI. Pink (#E8557A family) is an *accent*: primary buttons, one highlighted word, status, active states. Never a section background, never a wash. No dark sections: surfaces alternate paper and white, divided by hairlines (a decision after seeing a black block clash with the warm identity).

**Surface rhythm.** paper, white, paper, ink (the single dark moment), paper. Cells divided by hairlines.

**Hierarchy rules.**
- One idea per section, stated as a claim in the heading and demonstrated by a product panel.
- Two-tone section headings: ink lead sentence, muted continuation.
- Eyebrow labels are small caps-ish 12px, tracked, pink only when they label the section's job.
- Body copy max 62ch; leads at 18 to 20px.

**Show, don't describe.** Every feature section contains a small working product demo, not a screenshot. Demos start when scrolled into view, loop calmly, and pause off-screen. Interactions (approve, pay, toggle) are real state changes.

**No device frames.** Product appears as flat "app panels" (hairline + layered shadow). No phone bezels, no fake browser chrome.

**Honest proof.** No invented logos, testimonials, or user counts. Until real proof exists, the trust section states verifiable product facts (pricing, approval control, free tier).

## 4. Tokens

| Token | Value | Use |
|---|---|---|
| Display / H1 | Fraunces 600, clamp(2.75rem, 6vw, 4.75rem), lh 1.02, tracking -0.02em | Hero only |
| H2 | Fraunces 600, clamp(2rem, 4vw, 3rem), lh 1.08, tracking -0.015em | Section titles |
| H3 | Inter 600, 1.125rem, lh 1.35 | Card titles |
| Lead | Inter 400, 1.125 to 1.25rem, lh 1.6, muted | Hero/section sub |
| Body | Inter 400, 1rem, lh 1.6 | Paragraphs |
| Small / Caption | Inter 500, 0.875rem / 0.75rem | UI labels, eyebrows |
| Spacing | 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 | 4px base. Section padding 96 (desktop), 64 (mobile) |
| Radius | 8 (controls), 12 (cards/panels), 16 (large panels), 999 (pills) | |
| Shadow | `ring` 0 0 0 1px border; `card` ring + 0 1px 2px + 0 8px 24px -8px; `float` adds 0 32px 64px -24px | Panels only |
| Motion | fast 120ms, normal 240ms, slow 600ms; easing cubic-bezier(0.2, 0, 0, 1) | All |
| Status | success #1f8a52, warning #a6762a, error #c73e3e | Chips |

## 5. Motion rules

- **Entrance:** opacity 0 to 1, translateY 14px to 0, 600ms slow, once, on first view. Hero headline: opacity + 6px blur to sharp, 700ms, on load, CSS only.
- **Hover (cards):** translateY -2px, border darkens, shadow steps up; 240ms.
- **Buttons:** color/background 240ms; active state scales to 0.98 in 120ms.
- **Product demos:** sequence timer, 1 step per 1.6 to 2.4s, starts on view, pauses off-screen, respects `prefers-reduced-motion` (renders the final state).
- **Numbers:** count up over 900ms with ease-out, once, on view.
- **Never:** parallax, cursor trails, infinite bouncing, motion on body copy.

## 6. Components (Orbit)

Navbar (sticky, translucent, hairline on scroll) · Hero (headline + live dashboard) · Before/After toggle · Scroll-aware feature tabs with live demos · Dark automation timeline · Profession picker · Pricing preview · Trust grid · FAQ accordion · CTA card · Footer. See `src/components/home/`.

## 7. Responsive rules

- Recompose, don't shrink: the dashboard hero drops its sidebar and shows one focused panel on mobile.
- Tabs become a horizontally scrollable pill row; demos stack under the copy.
- Tap targets 44px minimum. CTAs go full width under 640px.
- Animations that depend on hover have a tap equivalent (active state).

## 8. Accessibility

Semantic landmarks, one h1, visible focus rings (2px primary-600, 2px offset), 4.5:1 text contrast (white on #d13563 is 5:1), `prefers-reduced-motion` disables loops and entrance transforms, demo controls are real buttons with labels, auto-playing demos have a pause-on-hover/focus behavior.
