'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X, Phone, ArrowRight } from 'lucide-react'

const products = [
  {
    category: 'Corrosion Monitoring',
    items: [
      { name: 'ER Probes', desc: 'Electrical resistance probe systems', href: '/products/corrosion-monitoring' },
      { name: 'Access Fittings', desc: 'Live retrieval for pressurized lines', href: '/products/corrosion-monitoring' },
      { name: 'Corrosion Coupons', desc: 'Weight-loss coupon holders & racks', href: '/products/corrosion-monitoring' },
      { name: 'LPR Monitors', desc: 'Linear polarization resistance', href: '/products/corrosion-monitoring' },
    ],
  },
  {
    category: 'Erosion Monitoring',
    items: [
      { name: 'Sand & Erosion Probes', desc: 'Detect and quantify erosive production', href: '/products/erosion-monitoring' },
      { name: 'Ultrasonic Wall Thickness', desc: 'Non-intrusive pipe wall monitoring', href: '/products/erosion-monitoring' },
      { name: 'Intrusive ER Systems', desc: 'Online erosion rate measurement', href: '/products/erosion-monitoring' },
    ],
  },
  {
    category: 'Chemical Injection',
    items: [
      { name: 'Quill Assemblies', desc: 'Chemical dispersion into flow stream', href: '/products/chemical-injection' },
      { name: 'Injection Valves', desc: 'Check and isolation valve systems', href: '/products/chemical-injection' },
      { name: 'Chemical Dosing', desc: 'Precision delivery and metering', href: '/products/chemical-injection' },
    ],
  },
  {
    category: 'Data Acquisition',
    items: [
      { name: 'FieldCom Systems', desc: 'Wireless corrosion data loggers', href: '/products/data-acquisition' },
      { name: 'Software & Analytics', desc: 'Cloud-based monitoring dashboard', href: '/products/data-acquisition' },
      { name: 'Remote Monitoring', desc: 'Real-time pipeline surveillance', href: '/products/data-acquisition' },
    ],
  },
]

const solutions = [
  { name: 'Oil & Gas', href: '/solutions/oil-gas', desc: 'Upstream, midstream & downstream' },
  { name: 'Petrochemical', href: '/solutions/petrochemical', desc: 'Refineries and process plants' },
  { name: 'Water Treatment', href: '/solutions/water-treatment', desc: 'Municipal and industrial water' },
  { name: 'Chemical Processing', href: '/solutions/chemical-processing', desc: 'Acid, caustic and specialty service' },
  { name: 'Pulp & Paper', href: '/solutions/pulp-paper', desc: 'Digesters, bleach plants and more' },
  { name: 'Utilities', href: '/solutions/utilities', desc: 'Power generation and distribution' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState<'products' | 'solutions' | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(null); setMobileOpen(false) } }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 accent-line bg-white transition-all duration-200 ${
        scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.10)]' : ''
      }`}
    >
      <div className="cx flex items-center justify-between h-[68px] pt-[3px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Cosasco home">
          <div className="w-9 h-9 rounded-md flex items-center justify-center" style={{ background: '#0d1f3c' }}>
            <span className="text-white font-black text-sm tracking-tight">CO</span>
          </div>
          <div>
            <div className="font-black text-[1.1rem] tracking-tight leading-none" style={{ color: '#0d1f3c' }}>
              COSASCO
            </div>
            <div className="text-[0.6rem] tracking-[0.12em] uppercase font-semibold" style={{ color: '#637c95' }}>
              Corrosion Management
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Products */}
          <button
            onClick={() => setOpen(open === 'products' ? null : 'products')}
            className={`flex items-center gap-1 px-4 py-2 text-[0.9375rem] font-medium rounded transition-colors ${
              open === 'products' ? 'text-orange-500 bg-slate-50' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
            }`}
            style={{ color: open === 'products' ? '#e05000' : undefined }}
            aria-expanded={open === 'products'}
          >
            Products
            <ChevronDown size={15} className={`transition-transform duration-200 ${open === 'products' ? 'rotate-180' : ''}`} />
          </button>

          {/* Solutions */}
          <button
            onClick={() => setOpen(open === 'solutions' ? null : 'solutions')}
            className={`flex items-center gap-1 px-4 py-2 text-[0.9375rem] font-medium rounded transition-colors ${
              open === 'solutions' ? 'text-orange-500 bg-slate-50' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
            }`}
            style={{ color: open === 'solutions' ? '#e05000' : undefined }}
            aria-expanded={open === 'solutions'}
          >
            Solutions
            <ChevronDown size={15} className={`transition-transform duration-200 ${open === 'solutions' ? 'rotate-180' : ''}`} />
          </button>

          <Link href="/resources" className="px-4 py-2 text-[0.9375rem] font-medium rounded transition-colors text-slate-700 hover:text-slate-900 hover:bg-slate-50">
            Resources
          </Link>
          <Link href="/about" className="px-4 py-2 text-[0.9375rem] font-medium rounded transition-colors text-slate-700 hover:text-slate-900 hover:bg-slate-50">
            About
          </Link>
          <Link href="/support" className="px-4 py-2 text-[0.9375rem] font-medium rounded transition-colors text-slate-700 hover:text-slate-900 hover:bg-slate-50">
            Support
          </Link>
        </nav>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+15629490123" className="flex items-center gap-1.5 text-sm font-medium" style={{ color: '#4a5e72' }}>
            <Phone size={14} />
            <span>+1 (562) 949-0123</span>
          </a>
          <Link href="/contact" className="btn btn-primary text-sm py-2 px-5">
            Contact Sales
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ color: '#0d1f3c' }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Products mega menu */}
      {open === 'products' && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-slate-200 shadow-[0_20px_60px_-10px_rgba(13,31,60,0.18)]">
          <div className="cx py-8">
            <div className="grid grid-cols-4 gap-8">
              {products.map((group) => (
                <div key={group.category}>
                  <div className="text-xs font-bold uppercase tracking-[0.1em] mb-4" style={{ color: '#637c95' }}>
                    {group.category}
                  </div>
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(null)}
                          className="block px-3 py-2.5 rounded-md hover:bg-slate-50 group transition-colors"
                        >
                          <div className="text-[0.9rem] font-semibold group-hover:text-orange-500 transition-colors" style={{ color: '#1a2535' }}>
                            {item.name}
                          </div>
                          <div className="text-xs mt-0.5" style={{ color: '#637c95' }}>{item.desc}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-sm" style={{ color: '#637c95' }}>Not sure what you need?</span>
              <Link
                href="/products"
                onClick={() => setOpen(null)}
                className="flex items-center gap-1.5 text-sm font-semibold transition-colors"
                style={{ color: '#e05000' }}
              >
                Browse all products <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Solutions dropdown */}
      {open === 'solutions' && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-slate-200 shadow-[0_20px_60px_-10px_rgba(13,31,60,0.18)]">
          <div className="cx py-8">
            <div className="grid grid-cols-3 gap-4">
              {solutions.map((sol) => (
                <Link
                  key={sol.name}
                  href={sol.href}
                  onClick={() => setOpen(null)}
                  className="flex items-start gap-3 px-4 py-3.5 rounded-lg hover:bg-slate-50 group transition-colors border border-transparent hover:border-slate-200"
                >
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-colors" style={{ background: '#e05000' }} />
                  <div>
                    <div className="font-semibold group-hover:text-orange-500 transition-colors" style={{ color: '#1a2535' }}>
                      {sol.name}
                    </div>
                    <div className="text-sm mt-0.5" style={{ color: '#637c95' }}>{sol.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 flex justify-end">
              <Link
                href="/solutions"
                onClick={() => setOpen(null)}
                className="flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: '#e05000' }}
              >
                View all industries <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-200 shadow-xl max-h-[calc(100vh-68px)] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            <button
              className="w-full flex items-center justify-between px-3 py-3 rounded-md font-medium text-left"
              style={{ color: '#1a2535' }}
              onClick={() => setMobileAccordion(mobileAccordion === 'products' ? null : 'products')}
            >
              <span>Products</span>
              <ChevronDown size={16} className={`transition-transform ${mobileAccordion === 'products' ? 'rotate-180' : ''}`} />
            </button>
            {mobileAccordion === 'products' && (
              <div className="pl-4 pb-2 space-y-4">
                {products.map((g) => (
                  <div key={g.category}>
                    <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#637c95' }}>{g.category}</div>
                    {g.items.map((i) => (
                      <Link key={i.name} href={i.href} onClick={() => setMobileOpen(false)}
                        className="block py-1.5 text-sm font-medium" style={{ color: '#334150' }}>
                        {i.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}

            <button
              className="w-full flex items-center justify-between px-3 py-3 rounded-md font-medium text-left"
              style={{ color: '#1a2535' }}
              onClick={() => setMobileAccordion(mobileAccordion === 'solutions' ? null : 'solutions')}
            >
              <span>Solutions</span>
              <ChevronDown size={16} className={`transition-transform ${mobileAccordion === 'solutions' ? 'rotate-180' : ''}`} />
            </button>
            {mobileAccordion === 'solutions' && (
              <div className="pl-4 pb-2 space-y-1">
                {solutions.map((s) => (
                  <Link key={s.name} href={s.href} onClick={() => setMobileOpen(false)}
                    className="block py-1.5 text-sm font-medium" style={{ color: '#334150' }}>
                    {s.name}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/resources" onClick={() => setMobileOpen(false)} className="block px-3 py-3 font-medium" style={{ color: '#1a2535' }}>Resources</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block px-3 py-3 font-medium" style={{ color: '#1a2535' }}>About</Link>
            <Link href="/support" onClick={() => setMobileOpen(false)} className="block px-3 py-3 font-medium" style={{ color: '#1a2535' }}>Support</Link>

            <div className="pt-4 pb-2 border-t border-slate-100">
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn btn-primary w-full justify-center">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
