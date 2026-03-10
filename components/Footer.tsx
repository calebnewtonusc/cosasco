'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Mail, Phone } from 'lucide-react'

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
        {/* Main row: logo | links | contact — aligned in a grid */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-8 md:gap-12 md:items-start">
          {/* Logo + tagline */}
          <div className="min-w-0">
            <Image
              src="/cosasco-logo.png"
              alt="Cosasco"
              width={140}
              height={32}
              style={{ width: 'auto', height: '32px', filter: 'brightness(0) invert(1)' }}
              className="object-contain"
            />
            <p className="text-[#8ab4d4] text-xs mt-2 max-w-[220px] leading-relaxed">
              Corrosion monitoring & chemical injection solutions. Part of Halma plc.
            </p>
          </div>

          {/* Key links — vertical list, left-aligned */}
          <nav className="flex flex-col gap-2 md:pl-4 md:border-l border-white/10" aria-label="Footer">
            {mainLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-[#b8cfe0] hover:text-white transition-colors w-fit"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact + social — stacked, right-aligned on desktop */}
          <div className="flex flex-col gap-3 md:items-end md:text-right">
            <a
              href="tel:+15629490123"
              className="inline-flex items-center gap-2 text-sm text-[#b8cfe0] hover:text-white transition-colors md:justify-end"
            >
              <Phone size={14} className="text-[#f4a65d] shrink-0" />
              +1 (562) 949-0123
            </a>
            <a
              href="mailto:info@cosasco.com"
              className="inline-flex items-center gap-2 text-sm text-[#b8cfe0] hover:text-white transition-colors md:justify-end"
            >
              <Mail size={14} className="text-[#f4a65d] shrink-0" />
              info@cosasco.com
            </a>
            <a
              href="https://www.linkedin.com/company/cosasco"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-md bg-white/10 hover:bg-[#f4a65d] flex items-center justify-center text-[#8ab4d4] hover:text-white transition-colors md:ml-auto"
            >
              <Linkedin size={14} />
            </a>
          </div>
        </div>

        {/* Bottom: copyright + legal — single clean row */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-[#6b8aa0]">
          <p>&copy; {new Date().getFullYear()} Cosasco. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
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
