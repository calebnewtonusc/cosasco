'use client'

import Link from 'next/link'

const mainLinks = [
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/resources' },
  { label: 'Find a Rep', href: '/contact/find-a-rep' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0f2a4a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-sm">
          <a
            href="https://www.ampp.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8ab4d4] hover:text-white transition-colors"
          >
            Member
          </a>
          <p className="text-[#8ab4d4] leading-relaxed">
            11841 Smith Avenue / Santa Fe Springs, CA 90670 USA
            <br />
            Toll Free +1-800-635-6898 / Phone: +1-562-949-0123 / Fax: +1-562-949-3065
            <br />
            Worldwide: Los Angeles / Houston / Aberdeen / Dubai / Kuala Lumpur / Perth
          </p>
        </div>
        <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm" aria-label="Footer">
          {mainLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#b8cfe0] hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-[#6b8aa0]">
          <p>&copy; {new Date().getFullYear()} Cosasco. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">
              Accessibility
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
