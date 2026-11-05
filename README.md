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
- `/programs` — program hub (6 cards)
- `/programs/[slug]` — individual program detail pages (fully populated for all 6)
- `/partners` — partner segments (schools, employers, dev orgs, communities)
- `/research` — research/insights hub
- `/stories` — stories/blog index
- `/work-with-us` — partner, employer and funding enquiries
- `/contact` — contact info + form
- `/policies` — safeguarding status and the approved privacy policy, with section anchors

## Handover and content updates

The site is a Next.js application. Page content is maintained in `app/` route
files and shared page sections/forms are in `components/`. Images and logos are
in `public/img/`; global styles and design tokens are in `app/globals.css` and
`tailwind.config.ts`. There is no content management system, so edits are made
in the relevant TSX file, reviewed locally with `npm run dev`, and published
through the hosting provider's deployment flow. Run `npm run build` before
publishing.

Circle Group should own the hosting, Supabase and Resend accounts under its
shared email address and invite developers as named users. Keep credentials and
recovery codes in the organisation's password manager, not in this repository.

## Remaining handover items

- Publish Circle Group's safeguarding policy after approval.
- Configure the Supabase and Resend environment variables in the hosting
  provider. Verify `circlegroupke.org` as a Resend sending domain, then publish
  the DNS records Resend generates.
- For an existing Supabase project, run
  `drop policy if exists "Allow authenticated reads" on public.contact_leads;`
  in the Supabase SQL Editor. Form submissions remain available to project
  administrators, but are no longer readable through the API by every signed-in
  user.
- The contact API saves submissions to `contact_leads`, notifies
  `CONTACT_EMAIL`, sets notification Reply-To to the submitter, and sends a
  separate confirmation to the submitter.
- Add approved team biographies and any outstanding partner logos when supplied.
