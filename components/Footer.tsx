import Link from 'next/link'
import { Linkedin } from 'lucide-react'

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
              <p>14492 Sherwood Ave</p>
              <p>Santa Fe Springs, CA 90670</p>
              <p>
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

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/cosasco"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cosasco on LinkedIn"
              className="inline-flex items-center gap-2 text-[#8ab4d4] hover:text-white transition-colors duration-150 text-sm"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
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
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#6b8aa0]">
          <p>&copy; 2025 Cosasco. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link href="/privacy" className="hover:text-white transition-colors duration-150">
              Privacy Policy
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/terms" className="hover:text-white transition-colors duration-150">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
