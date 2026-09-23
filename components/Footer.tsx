import Link from "next/link";
import Image from "next/image";
import NewsletterSignup from "@/components/NewsletterSignup";

const linkedinUrl = "https://www.linkedin.com/company/circle-group-limited/";
const instagramUrl = "https://www.instagram.com/circle__group?stkn=aGw2Zjk4NmloNjg=";

function SocialIcon({ type }: { type: "linkedin" | "instagram" }) {
  if (type === "linkedin") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.4 9.2h3.6v11.3H3.4V9.2Zm5.8 0h3.4v1.5h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6v6.1H17v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.5H9.2V9.2Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".8" className="fill-current stroke-none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <NewsletterSignup />
      <div className="container-page py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <Image src="/img/logo/Circle_Group-removebg-preview.png" alt="Circle Group" width={192} height={80} className="-ml-5 h-14 w-48 object-contain md:-ml-11 xl:-ml-16" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/80">Equipping young people, especially young women in underserved communities, with the skills, readiness and connections to build meaningful work.</p>
          </div>
          <div>
            <h3 className="eyebrow text-white/80">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/85">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/about#team">Our Team</Link></li>
              <li><Link href="/programs">Our Work</Link></li>
              <li><Link href="/partners">Partners</Link></li>
              <li><Link href="/work-with-us">Work With Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="eyebrow text-white/80">Take Action</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/85">
              <li><Link href="/work-with-us">Partner With Us</Link></li>
              <li><Link href="/work-with-us#fund">Invest in Young People</Link></li>
              <li><Link href="/work-with-us#industry-partner">Become an Industry Partner</Link></li>
              <li><Link href="/work-with-us#careers">Careers</Link></li>
              <li><Link href="/policies">Safeguarding &amp; Privacy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="eyebrow text-white/80">Find Us</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/85">
              <li>Nairobi, Kenya</li>
              <li><a href="mailto:info@circlegroup.co.ke">info@circlegroup.co.ke</a></li>
              <li><a href="tel:+254181094157">+254 181 094 157</a></li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="Circle Group on LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-amber-light hover:text-amber-light"><SocialIcon type="linkedin" /></a>
              <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Circle Group on Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-amber-light hover:text-amber-light"><SocialIcon type="instagram" /></a>
            </div>
          </div>
        </div>
        <div className="mt-14 border-t border-white/15 pt-8 text-xs text-white/60">
          <p>© 2026 Circle Group. All rights reserved.</p>
          <p className="mt-2 text-[0.7rem]">Circle Group is the shared name of Circle Group Limited and Circle Group Foundation, registered in Kenya.</p>
        </div>
      </div>
    </footer>
  );
}
