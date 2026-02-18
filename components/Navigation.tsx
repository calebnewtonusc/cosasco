'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X, Phone } from 'lucide-react'

const industriesDropdown = [
  { name: 'Oil & Gas', href: '/solutions/oil-gas' },
  { name: 'Petrochemical', href: '/solutions/petrochemical' },
  { name: 'Water Treatment', href: '/solutions/water-treatment' },
  { name: 'Chemical Processing', href: '/solutions/chemical-processing' },
  { name: 'Pulp & Paper', href: '/solutions/pulp-paper' },
  { name: 'Utilities', href: '/solutions/utilities' },
]

const productsDropdown = [
  {
    heading: 'Corrosion Monitoring',
    items: [
      { name: 'ER Probes', href: '/products/corrosion-monitoring' },
      { name: 'LPR Systems', href: '/products/corrosion-monitoring' },
      { name: 'Access Fittings', href: '/products/corrosion-monitoring' },
      { name: 'Corrosion Coupons', href: '/products/corrosion-monitoring' },
    ],
  },
  {
    heading: 'Erosion Monitoring',
    items: [
      { name: 'Sand Detection', href: '/products/erosion-monitoring' },
      { name: 'UT Sensors', href: '/products/erosion-monitoring' },
      { name: 'Erosion Probes', href: '/products/erosion-monitoring' },
    ],
  },
  {
    heading: 'Chemical Injection',
    items: [
      { name: 'Quill Assemblies', href: '/products/chemical-injection' },
      { name: 'Injection Valves', href: '/products/chemical-injection' },
      { name: 'Dosing Systems', href: '/products/chemical-injection' },
    ],
  },
  {
    heading: 'Data Acquisition',
    items: [
      { name: 'FieldCom Systems', href: '/products/data-acquisition' },
      { name: 'Data Loggers', href: '/products/data-acquisition' },
      { name: 'Software', href: '/products/data-acquisition' },
    ],
  },
]

const companyDropdown = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'News & Events', href: '/news' },
  { name: 'Contact Us', href: '/contact' },
]

type OpenMenu = 'industries' | 'products' | 'company' | null

export default function Navigation() {
  const [open, setOpen] = useState<OpenMenu>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(null)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(null)
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const toggle = (menu: OpenMenu) => setOpen(open === menu ? null : menu)

  const navLinkBase =
    'flex items-center gap-1 px-3 py-2 text-[0.9rem] font-medium rounded-md transition-colors duration-150'
  const navLinkIdle = 'text-[#334150] hover:text-[#0f2a4a] hover:bg-[#f4f6f8]'
  const navLinkActive = 'text-[#e05000] bg-[#fef3ee]'

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e8edf2]"
    >
      {/* Orange top strip */}
      <div className="h-[3px] bg-[#e05000] w-full" />

      {/* Main nav bar */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Cosasco home">
          <div className="w-[34px] h-[34px] bg-[#0f2a4a] rounded-md flex items-center justify-center shrink-0">
            <span className="text-white font-black text-sm leading-none">C</span>
          </div>
          <div className="leading-none">
            <div className="font-black text-[#0f2a4a] tracking-tight text-[1.05rem] leading-none">
              COSASCO
            </div>
            <div className="text-[10px] text-[#8898aa] tracking-wider uppercase mt-0.5 leading-none">
              A Halma Company
            </div>
          </div>
        </Link>

        {/* Desktop center nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {/* Industries */}
          <button
            onClick={() => toggle('industries')}
            aria-expanded={open === 'industries'}
            className={`${navLinkBase} ${open === 'industries' ? navLinkActive : navLinkIdle}`}
          >
            Industries
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${open === 'industries' ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Products */}
          <button
            onClick={() => toggle('products')}
            aria-expanded={open === 'products'}
            className={`${navLinkBase} ${open === 'products' ? navLinkActive : navLinkIdle}`}
          >
            Products
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${open === 'products' ? 'rotate-180' : ''}`}
            />
          </button>

          <Link href="/support" className={`${navLinkBase} ${navLinkIdle}`}>
            Services
          </Link>
          <Link href="/resources" className={`${navLinkBase} ${navLinkIdle}`}>
            Resources
          </Link>
          <Link href="/products/data-acquisition" className={`${navLinkBase} ${navLinkIdle}`}>
            Software
          </Link>

          {/* Company */}
          <button
            onClick={() => toggle('company')}
            aria-expanded={open === 'company'}
            className={`${navLinkBase} ${open === 'company' ? navLinkActive : navLinkIdle}`}
          >
            Company
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${open === 'company' ? 'rotate-180' : ''}`}
            />
          </button>
        </nav>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <a
            href="tel:+15629490123"
            className="flex items-center gap-1.5 text-[0.8rem] text-[#566677] hover:text-[#0f2a4a] transition-colors duration-150"
          >
            <Phone size={13} />
            <span>+1 (562) 949-0123</span>
          </a>
          <Link
            href="/contact"
            className="bg-[#e05000] hover:bg-[#c94700] text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors duration-150"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-md text-[#0f2a4a] hover:bg-[#f4f6f8] transition-colors duration-150"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── INDUSTRIES MEGA DROPDOWN ── */}
      {open === 'industries' && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-[#e8edf2]">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-2 gap-x-16 gap-y-3 max-w-xl">
              {industriesDropdown.map((ind) => (
                <Link
                  key={ind.name}
                  href={ind.href}
                  onClick={() => setOpen(null)}
                  className="flex items-center gap-2 text-[0.9rem] font-medium text-[#334150] hover:text-[#e05000] transition-colors duration-150 py-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e05000] shrink-0" />
                  {ind.name}
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-[#e8edf2]">
              <Link
                href="/solutions"
                onClick={() => setOpen(null)}
                className="text-sm font-semibold text-[#e05000] hover:text-[#c94700] transition-colors duration-150"
              >
                View all industries →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── PRODUCTS MEGA DROPDOWN ── */}
      {open === 'products' && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-[#e8edf2]">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-4 gap-8">
              {productsDropdown.map((col) => (
                <div key={col.heading}>
                  <div className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-[#8898aa] mb-3">
                    {col.heading}
                  </div>
                  <ul className="space-y-1.5">
                    {col.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(null)}
                          className="block text-[0.875rem] font-medium text-[#334150] hover:text-[#e05000] transition-colors duration-150 py-0.5"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-[#e8edf2]">
              <Link
                href="/products"
                onClick={() => setOpen(null)}
                className="text-sm font-semibold text-[#e05000] hover:text-[#c94700] transition-colors duration-150"
              >
                View all products →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── COMPANY DROPDOWN ── */}
      {open === 'company' && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-[#e8edf2]">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="grid grid-cols-2 gap-x-12 gap-y-2 max-w-xs">
              {companyDropdown.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(null)}
                  className="text-[0.9rem] font-medium text-[#334150] hover:text-[#e05000] transition-colors duration-150 py-1.5"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── MOBILE MENU ── */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-[#e8edf2] shadow-xl max-h-[calc(100vh-75px)] overflow-y-auto">
          <div className="px-4 py-3 space-y-0.5">

            {/* Industries accordion */}
            <button
              className="w-full flex items-center justify-between px-3 py-3 text-[0.9rem] font-medium text-[#0f2a4a] rounded-md hover:bg-[#f4f6f8] transition-colors duration-150"
              onClick={() => setMobileAccordion(mobileAccordion === 'industries' ? null : 'industries')}
            >
              Industries
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${mobileAccordion === 'industries' ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileAccordion === 'industries' && (
              <div className="pl-5 pb-2 space-y-1">
                {industriesDropdown.map((ind) => (
                  <Link
                    key={ind.name}
                    href={ind.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-[#334150] hover:text-[#e05000] transition-colors duration-150"
                  >
                    {ind.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Products accordion */}
            <button
              className="w-full flex items-center justify-between px-3 py-3 text-[0.9rem] font-medium text-[#0f2a4a] rounded-md hover:bg-[#f4f6f8] transition-colors duration-150"
              onClick={() => setMobileAccordion(mobileAccordion === 'products' ? null : 'products')}
            >
              Products
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${mobileAccordion === 'products' ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileAccordion === 'products' && (
              <div className="pl-5 pb-2 space-y-4">
                {productsDropdown.map((col) => (
                  <div key={col.heading}>
                    <div className="text-[0.65rem] font-bold uppercase tracking-widest text-[#8898aa] mb-1.5">
                      {col.heading}
                    </div>
                    {col.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1.5 text-sm text-[#334150] hover:text-[#e05000] transition-colors duration-150"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}

            <Link
              href="/support"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-3 text-[0.9rem] font-medium text-[#0f2a4a] rounded-md hover:bg-[#f4f6f8] transition-colors duration-150"
            >
              Services
            </Link>
            <Link
              href="/resources"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-3 text-[0.9rem] font-medium text-[#0f2a4a] rounded-md hover:bg-[#f4f6f8] transition-colors duration-150"
            >
              Resources
            </Link>
            <Link
              href="/products/data-acquisition"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-3 text-[0.9rem] font-medium text-[#0f2a4a] rounded-md hover:bg-[#f4f6f8] transition-colors duration-150"
            >
              Software
            </Link>

            {/* Company accordion */}
            <button
              className="w-full flex items-center justify-between px-3 py-3 text-[0.9rem] font-medium text-[#0f2a4a] rounded-md hover:bg-[#f4f6f8] transition-colors duration-150"
              onClick={() => setMobileAccordion(mobileAccordion === 'company' ? null : 'company')}
            >
              Company
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${mobileAccordion === 'company' ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileAccordion === 'company' && (
              <div className="pl-5 pb-2 space-y-1">
                {companyDropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-[#334150] hover:text-[#e05000] transition-colors duration-150"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="pt-4 pb-3 border-t border-[#e8edf2] mt-2">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-[#e05000] hover:bg-[#c94700] text-white font-semibold text-sm py-3 rounded-md transition-colors duration-150"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
