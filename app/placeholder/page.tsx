import PlaceholderShowcase from "@/components/PlaceholderShowcase";

export default function PlaceholderPage() {
  return (
    <PlaceholderShowcase
      title="Circle Group — Content Showcase"
      description="This page collects every placeholder section across the site into one place, so the client can review and provide final content in a single pass. Each section below maps to a real page and slot on the live site."
      sections={[
        {
          eyebrow: "Home · Hero",
          heading: "1. Hero tagline & subheading",
          body: "Current: \"From learning to earning.\" — Confirm final tagline with Maximine. Also: the hero photo, the \"2013\" founding year badge, and the trust strip partner categories.",
        },
        {
          eyebrow: "Home · By the numbers",
          heading: "2. Impact statistics",
          body: "Current placeholders: 1,200+ young people trained · 70% young women · 4 counties · 35+ partners. Replace with verified figures from Circle Group.",
        },
        {
          eyebrow: "Home · Voices",
          heading: "3. Testimonial quotes",
          body: "Current: single anonymous quote. We now support a rotating testimonial carousel (3+ quotes) — supply named quotes from a mentee, mentor, or partner, with permission for photo.",
        },
        {
          eyebrow: "About",
          heading: "4. Origin story & team bios",
          body: "Team page currently shows names with \"Team profile coming soon.\" Provide each team member's role, 1-line bio, and headshot. Also confirm the 2013 founding story and 2025 Foundation transition.",
        },
        {
          eyebrow: "Programs",
          heading: "5. Programme detail content",
          body: "Six programme pages are fully built with structure (who it's for, how it works, outcomes). Review and refine the copy for each programme.",
        },
        {
          eyebrow: "Research",
          heading: "6. Research reports & PDFs",
          body: "Three research detail pages are seeded with draft content. Replace with real reports, add PDF downloads (/public/Doc/), and confirm authors and publish dates.",
        },
        {
          eyebrow: "Stories",
          heading: "7. Impact stories",
          body: "Three story pages are drafted. Replace with real participant/mentor/partner stories, photos, and permission confirmations.",
        },
        {
          eyebrow: "Partners",
          heading: "8. Partner logo wall",
          body: "Current page has 6 \"Logo\" placeholder tiles. Supply partner logos (.svg/.png) with usage permissions, segmented by Schools / Employers / Development Orgs / Communities.",
        },
        {
          eyebrow: "Contact",
          heading: "9. Office details & WhatsApp",
          body: "Placeholders remain for: full office address, phone/WhatsApp number. Both reference sites (Allamano) list full contact details — this should be confirmed before launch.",
        },
        {
          eyebrow: "Policies",
          heading: "10. Safeguarding, privacy & terms",
          body: "All three pages are placeholders. These MUST be real documents reviewed by client leadership before launch, especially safeguarding given the youth-facing programmes.",
        },
      ]}
    />
  );
}