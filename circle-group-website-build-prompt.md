# Circle Group — Full Website Build Prompt

**Client:** Circle Group (verify legal name — see ⚠️ note below)
**Contact:** Maximine Oluoch
**Project start:** August 11, 2026 | 3 milestone payments | ~3-week delivery
**Reference benchmarks:** perurraysofhopeke.org (structure/tone) · mastercardfdn.org (scale/content depth, program architecture)
**Builder stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Supabase (CMS/leads), Vercel

---

## ⚠️ Verification note before you build

Public research turns up two unrelated entities sharing this name:

1. **Circle Group (the client)** — a youth-focused social enterprise/non-profit on LinkedIn (11–50 employees, 594 followers), working on life-skills training, career readiness, mentorship, and youth-employment research, with a strong focus on young women in underserved communities. Staff connections (e.g. Naom Oganga, previously of Global Give Back Circle) place this organization inside the same Kenyan youth-mentorship ecosystem as Global Give Back Circle, HER Lab, and Perur Rays of Hope — which is useful context since you've already built a site in that exact space.
2. **CIRCLE GROUP LTD** (UK, Companies House #04857483) — an unrelated business-support-services company registered in Stoke-on-Trent since 2003. Its registration data, directors, and address must **not** appear on this site.

Before publishing, get from Maximine directly:
- Legal registration country + number (Kenya NGO/CBO/Ltd registration, not the UK one)
- Physical/office address, official email, phone, WhatsApp
- Leadership and team bios + headshots
- Programme locations and real impact numbers (girls/youth reached, counties covered, mentors matched, partners)
- Logo, brand colors, any existing brand guide
- Partner logos and usage permissions
- Safeguarding policy and privacy policy text (non-profits working with minors/youth need this prominently — see Perur Rays of Hope's `/policies` page as precedent)

Everything below is written so these are drop-in content slots, not blockers to starting the build.

---

## 1. Positioning & narrative

Circle Group's public materials describe it as: helping young people — particularly young women from underserved communities — move from learning to earning, through life-skills training, career readiness, mentorship, skills development, research, and partnerships with schools, employers, and development organisations.

That's a strong, specific story. The two reference sites show two different scales of the same story:

- **Perur Rays of Hope** = grassroots, community-embedded, warm and personal. One region (West Pokot), tight numbers, named voices ("Mary C. · Caregiver"), photography-led.
- **Mastercard Foundation** = large-scale, multi-country, institutional. Program taxonomy (Programs / Focus Areas / Where We Work), research library, partner network, heavy content operation.

Circle Group sits between these. Recommend building the *information architecture and content depth* like Mastercard Foundation (Programs, Focus Areas, Research, Where We Work) but the *tone, pacing, and visual warmth* like Perur Rays of Hope (short human sentences, real faces, one clear ask per section, not overwhelming). Do not try to out-scale Mastercard Foundation's page count in week one — build the skeleton so it can grow into that depth later.

**Working tagline direction** (confirm with client, don't ship unapproved copy):
> "From learning to earning." / "Where skills meet opportunity." / "Closing the gap between potential and opportunity."

---

## 2. Sitemap

```
/                      Home
/about                 About Us (mission, approach, focus on young women & underserved communities)
/about/team            Leadership & team (optional sub-page if bios are substantial)
/programs              Our Work — hub page listing all programme areas
/programs/[slug]        Individual programme detail (life skills, career readiness,
                        mentorship, entrepreneurship, safeguarding training, etc.)
/research               Research & Insights (youth employment, rural economies,
                        women's empowerment — MERL outputs)
/research/[slug]        Individual report/insight page
/partners                Who We Work With (schools, employers, dev orgs, institutions)
/stories                 Impact stories / blog (learner and mentor stories)
/stories/[slug]
/get-involved             Partner with us / mentor / volunteer / hire a graduate
/get-involved/apply       Programme application form (for youth participants)
/contact                  Contact + office location
/policies                  Safeguarding policy, privacy policy, terms
/donate (optional)        If Circle Group accepts donations/funding, not just partnerships
```

Nav bar (desktop, 6 items max — mirror Perur Rays of Hope's restraint, not Mastercard's mega-menu):
`Home · About · Our Work · Research · Get Involved · Contact` with a persistent CTA button (`Partner With Us` or `Apply Now` — confirm which audience is primary: funders/partners, or youth applicants).

---

## 3. Page-by-page content spec

### Home
1. **Hero** — full-bleed photo of participants (real photography, not stock), one-line purpose statement, two CTAs (primary: "Partner with us" / secondary: "See our work"). Follow Perur Rays of Hope's hero pattern exactly: location tag + short declarative headline + one-sentence sub.
2. **Purpose strip** — one paragraph restating the mission in plain language.
3. **What we do** — 4–6 card grid (life-skills training, career readiness, mentorship, entrepreneurship support, research/MERL, safeguarding) each with photo + 1-line description, linking to `/programs/[slug]`.
4. **By the numbers** — impact stats (youth trained, young women reached, counties/schools covered, employer/partner count). Needs real figures from client; do not fabricate.
5. **Voices** — one or two testimonial quotes from a mentee, mentor, or partner, named and photographed if permission exists.
6. **From the field** — 3 latest stories/research pieces, card layout.
7. **Closing CTA band** — partnership/funding ask + secondary "Get involved" link.
8. **Newsletter signup** in footer area.
9. **Footer** — logo, mission one-liner, sitemap columns (Explore / Take Action / Find Us), address, email, phone, social icons, safeguarding/privacy links, copyright.

### About
- Origin story / why Circle Group exists
- Mission + approach (training → mentorship → research → partnerships loop)
- Focus statement on young women & underserved communities
- Team/leadership grid (photo, name, role, 1-line bio)
- Optional timeline of milestones

### Our Work (Programs hub → detail pages)
Programme categories to seed (from verified LinkedIn "What We Do" list):
- Life-skills training
- Career readiness & workforce transitions
- Mentorship programmes
- Youth employment & entrepreneurship support
- Training for schools & institutions
- Programme design for development organisations
- Research & community data (youth employment, rural economies, women's empowerment)
- Monitoring, Evaluation, Research & Learning (MERL)
- Safeguarding systems & training
- Community capacity building
- Strategic communications support

Each detail page: what it is, who it's for, how it works (steps), outcomes/impact, related stories, CTA to get involved.

### Research & Insights
List/grid of reports and data pieces, filterable by theme (Youth Employment / Rural Economies / Women's Empowerment / Safeguarding). PDF downloads where available (use the `pdf` toolchain for report generation if client supplies raw data). Mirrors Mastercard Foundation's "Research & Learning" but scoped small initially.

### Partners
Segmented by audience — Schools & Institutions / Employers & Workforce Partners / Development Organisations / Communities — each with a short "why partner with us" paragraph and a CTA specific to that audience (e.g., schools: "Bring this training to your students"; employers: "Hire our graduates").

### Stories
Editorial/blog layout, same pattern as Perur Rays of Hope's `/blog` — card grid, category tag, read time, full article page with pull quotes and photography.

### Get Involved
Segmented action paths (mirrors Perur Rays of Hope's `/get-involved` + `/donate` split):
- **Partner with us** (institutions/employers/donors) — contact form
- **Mentor** — application/interest form
- **Apply for a programme** (youth participants) — application form, possibly multi-step
- **Give/Fund** (if applicable) — confirm with client whether this is donation-based or purely partnership/grant-funded

### Contact
Address, email, phone, WhatsApp (Kenya-first — WhatsApp CTA should be prominent, matching Nathan's usual WhatsApp-as-primary-channel pattern), embedded map, simple contact form, office hours.

### Policies
Safeguarding policy (non-negotiable given the youth/minor-adjacent audience), privacy policy, terms of use.

---

## 4. Design direction

**Visual language:** warm documentary photography of real participants (not corporate stock), generous whitespace, one accent color drawn from a to-be-supplied brand kit, editorial serif or confident sans for headlines paired with a clean body sans (evaluate against Circle Group's actual logo once supplied — don't lock type before brand assets arrive).

**Motion:** subtle Framer Motion entrance animations on scroll (fade/slide-up on cards and stat counters), animated number count-up for the impact stats block, smooth anchor scrolling — restrained, not flashy. This should read as a serious development-sector institution, not a startup landing page.

**Imagery hierarchy:** hero photography full-bleed → programme cards with photo + short label → testimonial with portrait → stat block usually icon/number-led, no photo needed.

**Mobile-first:** majority of Kenyan traffic will be mobile — prioritize fast image loading (Next/Image, responsive `sizes`), large tap targets, WhatsApp CTA fixed/floating on mobile if appropriate.

**Accessibility:** semantic headings, alt text on every image (especially participant photos — write respectful, dignity-preserving alt text, never reduce a person to their circumstance), color contrast AA minimum, skip-to-content link (Perur Rays of Hope already does this — carry it over).

---

## 5. Technical architecture

- **Framework:** Next.js 14, App Router, TypeScript throughout
- **Styling:** Tailwind CSS, design tokens (colors/spacing/type scale) centralized in `tailwind.config.ts` once brand kit lands
- **Animation:** Framer Motion for scroll reveals, count-up stats, page transitions
- **Content/CMS:** Supabase tables for `programs`, `stories`, `research`, `team_members`, `testimonials`, `partners` — gives Maximine's team a lightweight way to update content without a redeploy, and gives you an admin dashboard pattern you've already built for Ledgerline's lead capture. Alternative if client wants zero CMS overhead: MDX content collections in-repo (faster to ship, less flexible for non-technical editors — confirm which the client's team can actually maintain).
- **Forms:** Get Involved / Contact / Apply forms → Supabase table + email notification (Resend or similar) + optional WhatsApp deep link for instant follow-up
- **Images:** `next/image` with remote pattern config, WebP/AVIF, blur placeholders
- **SEO:** per-page metadata, OpenGraph images (mirror Perur Rays of Hope's og:image pattern), sitemap.xml, robots.txt, JSON-LD `NGO`/`Organization` schema
- **Analytics:** Plausible or GA4 (confirm client preference/budget — Plausible is lighter and privacy-respecting, a better fit for an org working with minors)
- **Hosting:** Vercel, custom domain once client confirms final org name/domain
- **Performance target:** Lighthouse 90+ across the board; this is a credibility site for funders/partners, it needs to load fast on mid-range Android over 3G/4G in rural Kenya

---

## 6. Milestone mapping (3-payment structure)

Suggested split to match the engagement structure already agreed with Maximine:

1. **Milestone 1 — Foundation & Home:** IA finalized, design system/tokens, Home page fully built and responsive, CMS schema scaffolded, hosting/domain set up.
2. **Milestone 2 — Core content pages:** About, Our Work (hub + 2–3 seed programme pages), Partners, Contact, Get Involved forms wired to Supabase + email.
3. **Milestone 3 — Stories/Research + polish:** Stories/blog system, Research hub, Policies pages, SEO pass, performance/accessibility audit, client content training (how to add a story/programme via CMS), final QA and launch.

---

## 7. Open questions to send Maximine before/at kickoff

1. Confirmed legal name and registration details for the site footer/legal pages (to rule out the UK namesake).
2. Final domain name to register/point.
3. Brand assets: logo (vector), color palette, any existing brand guidelines.
4. Real impact numbers and permission to publish specific figures.
5. Participant/staff photography — existing library, or does the build need placeholder-then-swap treatment?
6. Is fundraising/donations part of this site, or is it purely a partnerships/institutional-facing site? (Changes whether a `/donate` flow with payment integration is in scope.)
7. Primary audience priority: funders/partners, schools, employers, or prospective youth applicants — this decides the homepage CTA hierarchy and Get Involved page order.
8. Who on Circle Group's team will maintain content post-launch (decides CMS vs. MDX decision above).
9. Safeguarding and privacy policy text — do they have existing documents, or does this need drafting support?

---

## 8. Suggested first prompt to hand to your build agent (Claude Code)

> Build a Next.js 14 (App Router, TypeScript) marketing site for Circle Group, a Kenyan youth-focused social enterprise. Use Tailwind CSS and Framer Motion. Structure and tone should sit between two references: perurraysofhopeke.org (warm, community-first, restrained nav, photography-led) and mastercardfdn.org (program taxonomy: Programs / Focus Areas / Research / Partners, at a much smaller initial scale). Start with the sitemap and Home page from the attached build prompt (`circle-group-website-build-prompt.md`). Use placeholder content clearly marked `[PLACEHOLDER — confirm with client]` for anything not yet supplied (impact numbers, team bios, photography, brand colors) so it's obvious what needs real client data before launch. Set up a Supabase schema for programs, stories, research, team_members, and testimonials, plus a Get Involved form that writes to Supabase and sends an email notification.

---

*Prepared from verified LinkedIn organization data for Circle Group plus live review of perurraysofhopeke.org and mastercardfdn.org on August 14, 2026. Impact numbers, legal registration details, and photography are placeholders pending confirmation from Maximine Oluoch — do not publish without client sign-off on those items.*
