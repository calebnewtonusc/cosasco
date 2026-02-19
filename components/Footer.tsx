import Link from 'next/link'
import { Linkedin, Twitter, Youtube, CheckCircle } from 'lucide-react'

const industryLinks = [
  { label: 'Oil & Gas', href: '/solutions/oil-gas' },
  { label: 'Petrochemical', href: '/solutions/petrochemical' },
  { label: 'Water Treatment', href: '/solutions/water-treatment' },
  { label: 'Chemical Processing', href: '/solutions/chemical-processing' },
  { label: 'Pulp & Paper', href: '/solutions/pulp-paper' },
  { label: 'Utilities', href: '/solutions/utilities' },
]

const productLinks = [
  { label: 'ER Probes', href: '/products/corrosion-monitoring' },
  { label: 'Access Fittings', href: '/products/corrosion-monitoring' },
  { label: 'Erosion Monitoring', href: '/products/erosion-monitoring' },
  { label: 'Chemical Injection', href: '/products/chemical-injection' },
  { label: 'FieldCom Systems', href: '/products/data-acquisition' },
  { label: 'View All Products', href: '/products' },
]

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'News & Events', href: '/news' },
]

const supportLinks = [
  { label: 'Technical Support', href: '/support/technical' },
  { label: 'FAQ', href: '/support/faq' },
  { label: 'Submit Request', href: '/support/submit' },
  { label: 'Software Login', href: '/software-login' },
]

const certBadges = [
  'ISO 9001:2015',
  'NACE Member',
  'API Compliant',
  'ATEX Certified',
  'A Halma Company',
]

export default function Footer() {
  return (
    <footer className="bg-[#0f2a4a] text-white">

      {/* Top CTA band */}
      <div className="bg-[#1a3a5c]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <p className="text-white font-bold text-xl leading-snug">
            Ready to solve your corrosion challenge?
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="bg-[#f4a65d] hover:bg-[#d4892a] text-white font-semibold text-sm px-5 py-2.5 rounded-md transition-colors duration-150 whitespace-nowrap"
            >
              Contact an Expert
            </Link>
            <Link
              href="/resources/catalog"
              className="border border-white text-white hover:bg-white hover:text-[#0f2a4a] font-semibold text-sm px-5 py-2.5 rounded-md transition-colors duration-150 whitespace-nowrap"
            >
              Download Product Catalog
            </Link>
          </div>
        </div>
      </div>

      {/* Certification badges strip */}
      <div className="bg-[#1a3a5c] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center gap-3">
          <span className="text-[#8ab4d4] text-xs font-semibold tracking-wider shrink-0">
            Certified &amp; Compliant:
          </span>
          {certBadges.map((badge) => (
            <span
              key={badge}
              className="bg-white/5 border border-white/10 text-[#b8cfe0] text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5"
            >
              <CheckCircle size={12} className="text-[#f4a65d] shrink-0" />
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-14">

          {/* Col 1 — Brand */}
          <div className="md:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-[34px] h-[34px] bg-white rounded-md flex items-center justify-center shrink-0">
                <span className="text-[#0f2a4a] font-black text-sm leading-none">C</span>
              </div>
              <div className="leading-none">
                <div className="font-black text-white tracking-tight text-[1.05rem] leading-none">
                  COSASCO
                </div>
                <div className="text-[10px] text-[#8ab4d4] tracking-wider uppercase mt-0.5 leading-none">
                  A Halma Company
                </div>
              </div>
            </div>

            <p className="text-[#b8cfe0] text-sm leading-relaxed mb-5">
              Industry-leading corrosion and erosion monitoring solutions for
              critical infrastructure worldwide since 1955.
            </p>

            {/* Address & contact */}
            <address className="not-italic space-y-1.5 text-sm text-[#b8cfe0] mb-5">
              <p className="font-medium text-white">14492 Sherwood Ave</p>
              <p className="font-medium text-white">Santa Fe Springs, CA 90670, USA</p>
              <p className="mt-2">
                <a
                  href="tel:+15629490123"
                  className="hover:text-white transition-colors duration-150"
                >
                  +1 (562) 949-0123
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@cosasco.com"
                  className="hover:text-white transition-colors duration-150"
                >
                  info@cosasco.com
                </a>
              </p>
            </address>

            {/* Newsletter signup */}
            <p className="text-[#8ab4d4] text-xs font-bold uppercase tracking-wider mt-6 mb-3">
              Stay Updated
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border border-white/20 text-white placeholder-[#8ab4d4] text-sm rounded-l-md px-3 py-2 flex-1 min-w-0 outline-none focus:border-[#f4a65d]"
              />
              <button
                type="submit"
                className="bg-[#f4a65d] hover:bg-[#d4892a] text-white text-sm font-semibold px-4 py-2 rounded-r-md transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Col 2 — Industries */}
          <div>
            <h4 className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#8ab4d4] mb-4">
              Industries
            </h4>
            <ul className="space-y-2.5">
              {industryLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#b8cfe0] hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Products */}
          <div>
            <h4 className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#8ab4d4] mb-4">
              Products
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#b8cfe0] hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Company + Support */}
          <div>
            <h4 className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#8ab4d4] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 mb-7">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#b8cfe0] hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#8ab4d4] mb-4">
              Support
            </h4>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#b8cfe0] hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10">
          {/* Social icons row */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/cosasco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cosasco on LinkedIn"
                className="text-[#8ab4d4] hover:text-white transition-colors duration-150"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com/cosasco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cosasco on Twitter"
                className="text-[#8ab4d4] hover:text-white transition-colors duration-150"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.youtube.com/@cosasco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cosasco on YouTube"
                className="text-[#8ab4d4] hover:text-white transition-colors duration-150"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Copyright + legal links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#6b8aa0]">
            <p>&copy; 2025 Cosasco. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <Link href="/privacy" className="hover:text-white transition-colors duration-150">
                Privacy Policy
              </Link>
              <span className="text-white/20">·</span>
              <Link href="/privacy" className="hover:text-white transition-colors duration-150">
                Privacy
              </Link>
              <span className="text-white/20">·</span>
              <Link href="/accessibility" className="hover:text-white transition-colors duration-150">
                Accessibility
              </Link>
              <span className="text-white/20">·</span>
              <Link href="/terms" className="hover:text-white transition-colors duration-150">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
