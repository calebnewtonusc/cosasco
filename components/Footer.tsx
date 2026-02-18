import Link from 'next/link'
import FooterNewsletterForm from './FooterNewsletterForm'

/* ─── Data ───────────────────────────────────────────────────────────────── */

const footerLinks = [
  {
    title: 'Products',
    items: [
      { label: 'Corrosion Monitoring', href: '/products/corrosion-monitoring' },
      { label: 'Erosion Monitoring', href: '/products/erosion-monitoring' },
      { label: 'Chemical Injection', href: '/products/chemical-injection' },
      { label: 'Data Acquisition', href: '/products/data-acquisition' },
      { label: 'Full Catalog', href: '/products' },
    ],
  },
  {
    title: 'Solutions',
    items: [
      { label: 'Oil & Gas', href: '/solutions/oil-and-gas' },
      { label: 'Petrochemical', href: '/solutions/petrochemical' },
      { label: 'Water Treatment', href: '/solutions/water-treatment' },
      { label: 'Chemical Processing', href: '/solutions/chemical-processing' },
      { label: 'Pulp & Paper', href: '/solutions/pulp-and-paper' },
      { label: 'Utilities', href: '/solutions/utilities' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About Cosasco', href: '/about' },
      { label: 'Resources', href: '/resources' },
      { label: 'Support', href: '/support' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

/* ─── Logo ───────────────────────────────────────────────────────────────── */

function FooterLogo() {
  return (
    <Link href="/" aria-label="Cosasco – Home" className="inline-flex flex-col items-start">
      <span
        className="text-2xl font-extrabold tracking-widest leading-none text-white"
        style={{ letterSpacing: '0.18em' }}
      >
        COSASCO
      </span>
      <span
        className="block mt-1 h-[3px] rounded-full"
        style={{ width: '2.2rem', background: '#E8500A' }}
      />
      <span className="text-[0.55rem] font-semibold tracking-[0.25em] mt-1 uppercase text-white/40">
        Corrosion Management
      </span>
    </Link>
  )
}

/* ─── Footer ─────────────────────────────────────────────────────────────── */

export default function Footer() {
  return (
    <footer style={{ background: '#0a1f38' }} aria-label="Site footer">
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <FooterLogo />
            <p className="mt-6 text-white/55 text-sm leading-relaxed max-w-xs">
              Cosasco has been the trusted name in corrosion and erosion monitoring
              for over 70 years. Headquartered in Santa Fe Springs, CA, we serve
              critical industries worldwide.
            </p>

            {/* Contact info */}
            <div className="mt-8 space-y-3">
              <a
                href="tel:+15624961519"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M10.68 11.37L9.55 12.5c-.16.16-.42.17-.6.04A17.95 17.95 0 013.46 6.05a.44.44 0 01.04-.6L4.63 4.32c.35-.35.35-.91 0-1.26L3.07 1.5a.89.89 0 00-1.26 0l-.88.88C.26 3.06.17 4.19.5 5.22A19.75 19.75 0 0010.78 15.5c1.03.33 2.16.24 2.84-.44l.88-.88a.89.89 0 000-1.26l-1.56-1.56a.89.89 0 00-1.26.01z"
                    fill="currentColor"
                  />
                </svg>
                +1 (562) 496-1519
              </a>
              <a
                href="mailto:info@cosasco.com"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                info@cosasco.com
              </a>
              <p className="flex items-start gap-3 text-sm text-white/60">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
                  <path
                    d="M8 1.5A4.75 4.75 0 013.25 6.25C3.25 9.5 8 14.5 8 14.5s4.75-5 4.75-8.25A4.75 4.75 0 008 1.5z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <circle cx="8" cy="6.25" r="1.5" fill="currentColor" />
                </svg>
                Santa Fe Springs, CA 90670
              </p>
            </div>

            {/* Newsletter */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#E8500A' }}>
                Industry Updates
              </p>
              <p className="text-xs text-white/45 mb-3 leading-relaxed">
                Stay current with corrosion technology news.
              </p>
              <FooterNewsletterForm />
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <p
                className="text-[0.65rem] font-bold uppercase tracking-[0.18em] mb-5"
                style={{ color: '#E8500A' }}
              >
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
      >
        <p className="text-white/35 text-xs">
          &copy; {new Date().getFullYear()} Cosasco Systems Inc. All rights reserved.
        </p>
        <div className="flex gap-6">
          {[
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms of Use', href: '/terms' },
            { label: 'Sitemap', href: '/sitemap.xml' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-white/35 hover:text-white/70 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
