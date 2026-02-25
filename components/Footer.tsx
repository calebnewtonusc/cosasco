'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, CheckCircle, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const industryLinks = [
  { label: 'Oil & Gas', href: '/solutions/oil-gas' },
  { label: 'Petrochemical', href: '/solutions/petrochemical' },
  { label: 'Water Treatment', href: '/solutions/water-treatment' },
  { label: 'Chemical Processing', href: '/solutions/chemical-processing' },
  { label: 'Pulp & Paper', href: '/solutions/pulp-paper' },
  { label: 'Utilities', href: '/solutions/utilities' },
  { label: 'Mining & Minerals', href: '/solutions/mining' },
  { label: 'Gas Transmission', href: '/solutions/gas-transmission' },
]

const productLinks = [
  { label: 'ER Probes', href: '/products/er-probe' },
  { label: 'Access Fittings', href: '/products/access-fittings' },
  { label: 'Corrosion Coupons', href: '/products/corrosion-coupons' },
  { label: 'Erosion Monitoring', href: '/products/erosion-monitoring' },
  { label: 'Chemical Injection', href: '/products/chemical-injection' },
  { label: 'Microcor® CDO Systems', href: '/products/data-acquisition' },
  { label: 'View All Products', href: '/products' },
]

const companyLinks = [
  { label: 'About Cosasco', href: '/about' },
  { label: 'Innovation', href: '/innovation' },
  { label: 'Careers', href: '/careers' },
  { label: 'News & Events', href: '/news' },
  { label: 'Resources', href: '/resources' },
]

const supportLinks = [
  { label: 'Technical Support', href: '/support' },
  { label: 'RMA Request', href: '/support/rma' },
  { label: 'Find a Rep', href: '/contact/find-a-rep' },
  { label: 'Software Login', href: '/software' },
  { label: 'Device Calculator', href: '/tools/device-length-calculator' },
]

const certBadges = [
  'AMPP Member',
  'Halma Group',
]

type NewsletterStatus = 'idle' | 'loading' | 'success'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [nlStatus, setNlStatus] = useState<NewsletterStatus>('idle')

  async function handleNewsletter(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim() || nlStatus === 'loading') return
    setNlStatus('loading')
    await new Promise((r) => setTimeout(r, 700))
    setNlStatus('success')
    setEmail('')
  }

  return (
    <footer className="bg-[#0f2a4a] text-white">

      {/* ── Newsletter band ── */}
      <div className="bg-[#0a1f38]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 py-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-md">
              <h3 className="text-white font-bold text-lg leading-snug">
                Stay ahead of corrosion.
              </h3>
              <p className="text-[#8ab4d4] text-sm mt-1 leading-relaxed">
                Get technical articles, application notes, and product updates from Cosasco engineers, no marketing fluff.
              </p>
            </div>

            <div className="flex-1 max-w-lg w-full">
              {nlStatus === 'success' ? (
                <div className="flex items-center gap-3 text-sm text-green-300 bg-white/10 rounded-lg px-5 py-3.5">
                  <CheckCircle size={16} className="text-green-400 shrink-0" />
                  <span>You&apos;re subscribed! Watch your inbox for Cosasco updates.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <div className="relative flex-1">
                    <label htmlFor="footer-nl-email" className="sr-only">Work email address</label>
                    <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8ab4d4]" />
                    <input
                      id="footer-nl-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your work email"
                      aria-label="Work email for newsletter"
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-[#8ab4d4] text-sm rounded-lg pl-9 pr-4 py-3 outline-none focus:border-[#f4a65d] focus:ring-1 focus:ring-[#f4a65d]/30 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={nlStatus === 'loading'}
                    className="bg-[#f4a65d] hover:bg-[#d4892a] disabled:opacity-60 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors shrink-0 whitespace-nowrap flex items-center gap-2"
                  >
                    {nlStatus === 'loading' ? 'Subscribing…' : (<>Subscribe <ArrowRight size={14} /></>)}
                  </button>
                </form>
              )}
              <p className="text-[#5a7a94] text-[0.68rem] mt-2">
                No spam. Unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Top CTA band ── */}
      <div className="bg-[#1a3a5c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <p className="text-white font-bold text-lg leading-snug">
            Ready to solve your corrosion challenge?
          </p>
          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <Link
              href="/contact"
              className="bg-[#f4a65d] hover:bg-[#d4892a] text-white font-semibold text-sm px-5 py-2.5 rounded-md transition-colors duration-150 whitespace-nowrap"
            >
              Contact an Expert
            </Link>
            <Link
              href="/resources"
              className="border border-white/30 text-white hover:bg-white/10 font-semibold text-sm px-5 py-2.5 rounded-md transition-colors duration-150 whitespace-nowrap"
            >
              View Resources
            </Link>
          </div>
        </div>
      </div>

      {/* ── Certification badges strip ── */}
      <div className="bg-[#1a3a5c] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 py-4 flex flex-wrap items-center gap-3">
          <span className="text-[#8ab4d4] text-xs font-semibold tracking-wider shrink-0">
            Certified &amp; Compliant:
          </span>
          {certBadges.map((badge) => (
            <span
              key={badge}
              className="bg-white/5 border border-white/10 text-[#b8cfe0] text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:bg-white/10 transition-colors"
            >
              <CheckCircle size={11} className="text-[#f4a65d] shrink-0" />
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-12">

          {/* Col 1 - Brand (2 cols wide) */}
          <div className="md:col-span-2">
            <div className="mb-5">
              <Image
                src="/cosasco-logo.png"
                alt="Cosasco"
                width={160}
                height={40}
                style={{ width: 'auto', height: '36px', filter: 'brightness(0) invert(1)' }}
                className="object-contain"
              />
            </div>

            <p className="text-[#b8cfe0] text-sm leading-relaxed mb-6 max-w-xs">
              Industry-leading corrosion and erosion monitoring solutions for
              critical infrastructure worldwide since 1950. Trusted by the world&apos;s
              leading oil &amp; gas, petrochemical, and water treatment operators.
              A Halma Company.
            </p>

            <address className="not-italic space-y-2.5 text-sm text-[#b8cfe0] mb-6">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#f4a65d] shrink-0 mt-0.5" />
                <p className="text-white font-medium leading-snug">
                  11841 Smith Avenue, Santa Fe Springs, CA 90670 USA
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-[#f4a65d] shrink-0" />
                <div className="space-y-0.5">
                  <a href="tel:+18006356898" className="block hover:text-white transition-colors duration-150 font-medium">
                    Toll Free: +1-800-635-6898
                  </a>
                  <a href="tel:+15629490123" className="block hover:text-white transition-colors duration-150">
                    +1-562-949-0123
                  </a>
                  <span className="block text-[#b8cfe0]">
                    Fax: +1-562-949-3065
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-[#f4a65d] shrink-0" />
                <a href="mailto:info@cosasco.com" className="hover:text-white transition-colors duration-150">
                  info@cosasco.com
                </a>
              </div>
            </address>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/cosasco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cosasco on LinkedIn"
                className="w-8 h-8 rounded-md bg-white/10 hover:bg-[#f4a65d] flex items-center justify-center text-[#8ab4d4] hover:text-white transition-all duration-150"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>

          {/* Col 2 - Industries */}
          <div>
            <h4 className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#8ab4d4] mb-4">Industries</h4>
            <ul className="space-y-2.5">
              {industryLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#b8cfe0] hover:text-white transition-colors duration-150 flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-[#f4a65d] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Products */}
          <div>
            <h4 className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#8ab4d4] mb-4">Products</h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors duration-150 flex items-center gap-1.5 ${
                      link.label === 'View All Products'
                        ? 'text-[#f4a65d] font-semibold hover:text-white'
                        : 'text-[#b8cfe0] hover:text-white'
                    }`}
                  >
                    {link.label === 'View All Products' && <ArrowRight size={12} className="shrink-0" />}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Company + Support */}
          <div>
            <h4 className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#8ab4d4] mb-4">Company</h4>
            <ul className="space-y-2.5 mb-7">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#b8cfe0] hover:text-white transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#8ab4d4] mb-4">Support</h4>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#b8cfe0] hover:text-white transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#6b8aa0]">
            <p>&copy; 2026 Rohrback Cosasco Systems, Inc. All rights reserved.</p>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <Link href="/privacy" className="hover:text-white transition-colors duration-150">Privacy Policy</Link>
              <span className="text-white/20">·</span>
              <Link href="/accessibility" className="hover:text-white transition-colors duration-150">Accessibility</Link>
              <span className="text-white/20">·</span>
              <Link href="/terms" className="hover:text-white transition-colors duration-150">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
