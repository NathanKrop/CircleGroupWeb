import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-savanna text-sand-light">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/img/logo/Circle_Group-removebg-preview.png"
                alt="Circle Group"
                width={192}
                height={80}
                className="h-16 w-48 object-contain"
              />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-sand/80">
              Equipping young people, especially young women in underserved
              communities, with the skills, mentorship, and pathways to
              dignified work.
            </p>
          </div>

          <div>
            <h3 className="eyebrow text-amber">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm text-sand-light/85">
              <li><Link href="/about" className="hover:text-amber">About Us</Link></li>
              <li><Link href="/team" className="hover:text-amber">Our Team</Link></li>
              <li><Link href="/programs" className="hover:text-amber">Our Work</Link></li>
              <li><Link href="/stories" className="hover:text-amber">Stories</Link></li>
              <li><Link href="/partners" className="hover:text-amber">Partners</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-amber">Take Action</h3>
            <ul className="mt-5 space-y-3 text-sm text-sand-light/85">
              <li><Link href="/get-involved" className="hover:text-amber">Partner With Us</Link></li>
              <li><Link href="/get-involved#mentor" className="hover:text-amber">Become a Mentor</Link></li>
              <li><Link href="/get-involved#apply" className="hover:text-amber">Apply to a Programme</Link></li>
              <li><Link href="/policies" className="hover:text-amber">Safeguarding &amp; Privacy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-amber">Find Us</h3>
            <ul className="mt-5 space-y-3 text-sm text-sand-light/85">
              <li>Nairobi, Kenya</li>
              <li>
                <a href="mailto:info@circlegroup.co.ke" className="hover:text-amber">
                  info@circlegroup.co.ke
                </a>
              </li>
              <li>
                Phone / WhatsApp details coming soon
              </li>
              <li>
                <a href="https://www.linkedin.com/company/circle-group-limited/" target="_blank" rel="noreferrer" className="hover:text-amber">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/circle__group?igsi=eXkyNXRkangwY2h1&utm_source=qr" target="_blank" rel="noreferrer" className="hover:text-amber">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-sand-light/15 pt-8 text-xs text-sand-light/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Circle Group. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/policies" className="hover:text-amber">Privacy Policy</Link>
            <Link href="/policies#safeguarding" className="hover:text-amber">Safeguarding</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
