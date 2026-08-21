# Circle Group Website

A Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion site for
Circle Group, built from `circle-group-website-build-prompt.md`.

## Design system

- **Palette:** Savanna green `#1B3A2B` (primary), Sunrise amber `#E8A33D` (accent),
  Warm sand `#F1E8D6` / `#FBF7EE` (backgrounds), Ink `#201C16` (text), Rust `#B5533C`
  (secondary accent / hover state).
- **Type:** Fraunces (display/headlines), Inter (body), IBM Plex Mono (eyebrows,
  labels, stat numbers) — loaded via `next/font/google`.
- **Signature element:** the "Pathway" — a four-stage ascending step motif
  (Learn → Train → Mentor → Earn) used in the hero and as a dedicated homepage
  section (`components/Pathway.tsx`), echoing the site's core message: this is
  a pipeline from education into dignified work.

## Getting started

Requires Node 18+.

```bash
npm install
npm run dev
```

Open http://localhost:3000. `next/font/google` needs internet access on first
build/dev to fetch Fraunces, Inter, and IBM Plex Mono — normal for any Next.js
project, just flagging it since some sandboxed environments block Google Fonts.

```bash
npm run build   # production build
npm start       # serve the production build
```

## What's built

- `/` — Home (hero, focus areas, Pathway signature, animated stats, testimonial, CTA)
- `/about` — mission, approach, team grid
- `/programs` — programme hub (6 cards)
- `/programs/[slug]` — individual programme detail pages (fully populated for all 6)
- `/partners` — partner segments (schools, employers, dev orgs, communities)
- `/research` — research/insights hub
- `/stories` — stories/blog index
- `/get-involved` — three segmented forms (partner / mentor / apply)
- `/contact` — contact info + form
- `/policies` — safeguarding & privacy placeholder

## What's still pending — do not launch without replacing or confirming these

Pending content is marked in-page or listed below so it is easy to find and
replace. In particular:

1. **Impact numbers** on the homepage stats block — currently illustrative.
2. **Team bios** on `/team` — official portraits and names are in place; confirm Jane Oduka's title and add approved short biographies.
3. **All photography** — hero and section images are currently styled
   placeholder blocks (amber ascending-line graphic on savanna green). Swap in
   real participant photography via `next/image` once supplied, with
   dignity-preserving alt text.
4. **Phone number & office address** — footer, `/contact`.
5. **Partner logos** — `/partners` logo wall.
6. **Safeguarding & privacy policy text** — `/policies`. This is non-negotiable
   before launch given the youth-focused audience.
7. **Forms** — `components/ContactForm.tsx` currently just flips local state on
   submit. Wire it to a Supabase table + email notification (see the original
   build prompt's Technical Architecture section) before this goes live.

## Next steps (per the original build prompt)

- Set up the Supabase schema (`programs`, `stories`, `research`, `team_members`,
  `testimonials`, `partners`) and wire the three forms to it.
- Swap placeholder imagery for real photography, using `next/image` with
  proper `sizes` and blur placeholders.
- Add JSON-LD `Organization`/`NGO` schema and per-page OpenGraph images.
- Confirm final domain and point DNS once client confirms the legal entity
  details flagged in the original build prompt.
