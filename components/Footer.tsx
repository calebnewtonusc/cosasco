import Link from 'next/link'
import { Linkedin, Youtube } from 'lucide-react'

const productLinks = [
  { label: 'ER Probes', href: '/products/corrosion-monitoring' },
  { label: 'Access Fittings', href: '/products/corrosion-monitoring' },
  { label: 'Corrosion Coupons', href: '/products/corrosion-monitoring' },
  { label: 'Chemical Injection', href: '/products/chemical-injection' },
  { label: 'Erosion Monitoring', href: '/products/erosion-monitoring' },
  { label: 'Data Acquisition', href: '/products/data-acquisition' },
]

const industryLinks = [
  { label: 'Oil & Gas', href: '/solutions/oil-gas' },
  { label: 'Petrochemical', href: '/solutions/petrochemical' },
  { label: 'Water Treatment', href: '/solutions/water-treatment' },
  { label: 'Chemical Processing', href: '/solutions/chemical-processing' },
  { label: 'Pulp & Paper', href: '/solutions/pulp-paper' },
  { label: 'Utilities', href: '/solutions/utilities' },
]

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/resources' },
  { label: 'News & Events', href: '/news' },
  { label: 'Careers', href: '/careers' },
]

const supportLinks = [
  { label: 'FAQ', href: '/support/faq' },
  { label: 'Technical Support', href: '/support/technical' },
  { label: 'Submit Request', href: '/support/submit' },
  { label: 'Warranty', href: '/support/warranty' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0a1628' }} className="text-white">
      <div className="cx py-16">
        {/* Top 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-14">

          {/* Column 1 — Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="text-xl font-bold tracking-tight text-white">COSASCO</span>
              <p className="text-xs mt-0.5" style={{ color: '#637c95' }}>
                Corrosion Management Since 1955
              </p>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#637c95' }}>
              Industry-leading corrosion and erosion monitoring solutions for
              critical infrastructure worldwide.
            </p>

            {/* Contact info */}
            <ul className="space-y-1.5 text-sm mb-6" style={{ color: '#637c95' }}>
              <li>14492 Sherwood Ave, Santa Fe Springs, CA 90670</li>
              <li>
                <a
                  href="tel:+15629490123"
                  className="hover:text-white transition-colors duration-200"
                >
                  +1 (562) 949-0123
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@cosasco.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  info@cosasco.com
                </a>
              </li>
            </ul>

            {/* ISO badge */}
            <span
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border"
              style={{ color: '#637c95', borderColor: 'rgba(255,255,255,0.12)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              ISO 9001 Certified
            </span>
          </div>

          {/* Column 2 — Products */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#637c95' }}
            >
              Products
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: '#637c95' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Industries */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#637c95' }}
            >
              Industries
            </h4>
            <ul className="space-y-2.5">
              {industryLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: '#637c95' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Company + Support */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#637c95' }}
            >
              Company
            </h4>
            <ul className="space-y-2.5 mb-8">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: '#637c95' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#637c95' }}
            >
              Support
            </h4>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: '#637c95' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-10 h-px"
          style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm" style={{ color: '#637c95' }}>
          {/* Left */}
          <p>&copy; 2025 Cosasco. All rights reserved.</p>

          {/* Center */}
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>&middot;</span>
            <Link href="/terms" className="hover:text-white transition-colors duration-200">
              Terms of Use
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>&middot;</span>
            <Link href="/sitemap" className="hover:text-white transition-colors duration-200">
              Sitemap
            </Link>
          </div>

          {/* Right — social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/cosasco"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
              aria-label="Cosasco on LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.youtube.com/@cosasco"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
              aria-label="Cosasco on YouTube"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
