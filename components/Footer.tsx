import Link from "next/link";
import { contactInfo, siteConfig, navLinks } from "@/lib/data";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏥</span>
              <span className="font-bold text-lg">{siteConfig.shortName}</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-accent-light mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-accent-light transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-accent-light mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/-/g, "")}`}
                  className="flex items-start gap-3 text-white/60 hover:text-accent-light transition-colors text-sm group"
                >
                  <HiPhone className="mt-0.5 text-accent-light flex-shrink-0" size={16} />
                  <div>
                    <div className="font-medium text-white/80">{contactInfo.phoneLabel}</div>
                    <div>{contactInfo.phone}</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone2.replace(/-/g, "")}`}
                  className="flex items-start gap-3 text-white/60 hover:text-accent-light transition-colors text-sm group"
                >
                  <HiPhone className="mt-0.5 text-accent-light flex-shrink-0" size={16} />
                  <div>
                    <div className="font-medium text-white/80">{contactInfo.phone2Label}</div>
                    <div>{contactInfo.phone2}</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-white/60 hover:text-accent-light transition-colors text-sm"
                >
                  <HiMail className="text-accent-light flex-shrink-0" size={16} />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/60 text-sm">
                  <HiLocationMarker className="mt-0.5 text-accent-light flex-shrink-0" size={16} />
                  <div>
                    <div>{contactInfo.addressLine1}</div>
                    <div>{contactInfo.addressLine2}</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} by {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Proudly serving the Houston area since 2005.
          </p>
        </div>
      </div>
    </footer>
  );
}
