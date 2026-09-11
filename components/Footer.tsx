import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-sand text-ink">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/img/logo/Circle_Group-removebg-preview.png"
                alt="Circle Group"
                width={192}
                height={80}
                className="h-14 w-48 object-contain"
              />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink/80">
              Equipping young people, especially young women in underserved
              communities, with the skills, mentorship, and pathways to
              dignified work.
            </p>
          </div>

          <div>
            <h3 className="eyebrow text-forest">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm text-ink/85">
              <li><Link href="/about" className="hover:text-forest">About Us</Link></li>
              <li><Link href="/team" className="hover:text-forest">Our Team</Link></li>
              <li><Link href="/programs" className="hover:text-forest">Our Work</Link></li>
              <li><Link href="/stories" className="hover:text-forest">Stories</Link></li>
              <li><Link href="/partners" className="hover:text-forest">Partners</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-forest">Take Action</h3>
            <ul className="mt-5 space-y-3 text-sm text-ink/85">
              <li><Link href="/get-involved" className="hover:text-forest">Partner With Us</Link></li>
              <li><Link href="/get-involved#mentor" className="hover:text-forest">Become a Mentor</Link></li>
              <li><Link href="/get-involved#apply" className="hover:text-forest">Apply to a Programme</Link></li>
              <li><Link href="/policies" className="hover:text-forest">Safeguarding &amp; Privacy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-forest">Find Us</h3>
            <ul className="mt-5 space-y-3 text-sm text-ink/85">
              <li>Nairobi, Kenya</li>
              <li>
                <a href="mailto:info@circlegroup.co.ke" className="hover:text-forest">
                  info@circlegroup.co.ke
                </a>
              </li>
              <li>
                <a href="tel:+254181094157" className="hover:text-forest">
                  +254 181 094 157
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/circle-group-limited/" target="_blank" rel="noreferrer" className="hover:text-forest">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/circle__group?igsi=eXkyNXRkangwY2h1&utm_source=qr" target="_blank" rel="noreferrer" className="hover:text-forest">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ink/15 pt-8 text-xs text-ink/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Circle Group. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/policies" className="hover:text-forest">Privacy Policy</Link>
            <Link href="/policies#safeguarding" className="hover:text-forest">Safeguarding</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
