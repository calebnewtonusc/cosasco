'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'

/* ─── Types ──────────────────────────────────────────────────────────────── */
interface NavItem {
  label: string
  href?: string
  description?: string
  icon?: string
}

interface DropdownSection {
  title?: string
  items: NavItem[]
}

interface NavDropdown {
  label: string
  type: 'mega' | 'simple'
  sections?: DropdownSection[]
  cta?: {
    label: string
    href: string
    description: string
  }
}

/* ─── Navigation Data ────────────────────────────────────────────────────── */
const PRODUCTS_DROPDOWN: NavDropdown = {
  label: 'Products',
  type: 'mega',
  sections: [
    {
      title: 'Corrosion Monitoring',
      items: [
        {
          label: 'Electrical Resistance Probes',
          href: '/products/corrosion/er-probes',
          description: 'High-accuracy ER probe systems for real-time monitoring',
          icon: '⬡',
        },
        {
          label: 'Linear Polarization Resistance',
          href: '/products/corrosion/lpr',
          description: 'Instantaneous corrosion rate measurement',
          icon: '⬡',
        },
        {
          label: 'Coupon Systems',
          href: '/products/corrosion/coupons',
          description: 'Traditional weight-loss coupon holders and racks',
          icon: '⬡',
        },
        {
          label: 'Access Fittings',
          href: '/products/corrosion/access-fittings',
          description: 'Online retrieval fittings for live systems',
          icon: '⬡',
        },
      ],
    },
    {
      title: 'Erosion Monitoring',
      items: [
        {
          label: 'Sand & Erosion Probes',
          href: '/products/erosion/probes',
          description: 'Detect and quantify erosive sand production',
          icon: '⬡',
        },
        {
          label: 'Ultrasonic Wall Thickness',
          href: '/products/erosion/ultrasonic',
          description: 'Non-intrusive pipe wall monitoring systems',
          icon: '⬡',
        },
        {
          label: 'Intrusive Erosion Monitoring',
          href: '/products/erosion/intrusive',
          description: 'High-pressure intrusive monitoring solutions',
          icon: '⬡',
        },
      ],
    },
    {
      title: 'Chemical Injection',
      items: [
        {
          label: 'Injection Quills',
          href: '/products/chemical/injection-quills',
          description: 'Precise chemical delivery into pipelines',
          icon: '⬡',
        },
        {
          label: 'Check Valves & Fittings',
          href: '/products/chemical/check-valves',
          description: 'Backflow prevention for injection systems',
          icon: '⬡',
        },
        {
          label: 'Injection Pots & Tanks',
          href: '/products/chemical/pots-tanks',
          description: 'Chemical storage and dosing vessels',
          icon: '⬡',
        },
      ],
    },
    {
      title: 'Data Acquisition',
      items: [
        {
          label: 'CorrTran Transmitters',
          href: '/products/data/corrtran',
          description: 'Smart transmitters for live corrosion data',
          icon: '⬡',
        },
        {
          label: 'Microcor Systems',
          href: '/products/data/microcor',
          description: 'Compact multi-channel data acquisition units',
          icon: '⬡',
        },
        {
          label: 'Remote Monitoring Software',
          href: '/products/data/software',
          description: 'Cloud-enabled SCADA integration platform',
          icon: '⬡',
        },
      ],
    },
  ],
  cta: {
    label: 'View Full Product Catalog',
    href: '/products',
    description: '500+ products trusted across 90 countries',
  },
}

const SOLUTIONS_DROPDOWN: NavDropdown = {
  label: 'Solutions',
  type: 'simple',
  sections: [
    {
      items: [
        {
          label: 'Oil & Gas',
          href: '/solutions/oil-gas',
          description: 'Upstream, midstream & downstream pipeline integrity',
          icon: '🛢',
        },
        {
          label: 'Petrochemical',
          href: '/solutions/petrochemical',
          description: 'Refinery and chemical plant asset protection',
          icon: '🏭',
        },
        {
          label: 'Water Treatment',
          href: '/solutions/water-treatment',
          description: 'Municipal and industrial water infrastructure',
          icon: '💧',
        },
        {
          label: 'Chemical Processing',
          href: '/solutions/chemical-processing',
          description: 'Aggressive-media monitoring and safety',
          icon: '⚗️',
        },
        {
          label: 'Pulp & Paper',
          href: '/solutions/pulp-paper',
          description: 'High-humidity and acid-exposure protection',
          icon: '📄',
        },
        {
          label: 'Utilities',
          href: '/solutions/utilities',
          description: 'Power generation and grid asset management',
          icon: '⚡',
        },
      ],
    },
  ],
  cta: {
    label: 'Find Your Industry Solution',
    href: '/solutions',
    description: 'Tailored corrosion management for every sector',
  },
}

const TOP_NAV_LINKS = [
  { label: 'Resources', href: '/resources' },
  { label: 'Support',   href: '/support' },
  { label: 'About',     href: '/about' },
]

/* ─── Icons ──────────────────────────────────────────────────────────────── */
function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function HamburgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ─── Cosasco Logo ───────────────────────────────────────────────────────── */
function CosascoLogo() {
  return (
    <Link href="/" className="flex flex-col items-start group" aria-label="Cosasco – Home">
      <span
        className="text-[1.6rem] font-extrabold tracking-widest leading-none"
        style={{ color: '#0F2A4A', letterSpacing: '0.18em', fontFamily: 'Inter, sans-serif' }}
      >
        COSASCO
      </span>
      <span
        className="block mt-[3px] group-hover:w-full transition-all duration-300"
        style={{
          height: '3px',
          width: '2.4rem',
          background: '#E8500A',
          borderRadius: '2px',
          transition: 'width 0.35s cubic-bezier(0.4,0,0.2,1)',
        }}
      />
      <span
        className="text-[0.55rem] font-semibold tracking-[0.25em] mt-[3px]"
        style={{ color: '#64748B', textTransform: 'uppercase' }}
      >
        Corrosion Management
      </span>
    </Link>
  )
}

/* ─── Products Mega Menu ─────────────────────────────────────────────────── */
function ProductsMegaMenu({ isOpen }: { isOpen: boolean }) {
  const sections = PRODUCTS_DROPDOWN.sections ?? []
  const cta = PRODUCTS_DROPDOWN.cta

  return (
    <div
      className={[
        'absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50',
        'bg-white border border-slate-200 rounded-xl shadow-mega',
        'transition-all duration-200',
        isOpen
          ? 'opacity-100 visible translate-y-0'
          : 'opacity-0 invisible translate-y-2 pointer-events-none',
      ].join(' ')}
      style={{ width: '820px' }}
      role="region"
      aria-label="Products menu"
    >
      {/* Grid of sections */}
      <div className="grid grid-cols-4 gap-0 p-6">
        {sections.map((section, si) => (
          <div key={si} className={si > 0 ? 'border-l border-slate-100 pl-5 ml-1' : ''}>
            <p
              className="text-[0.65rem] font-bold uppercase tracking-[0.15em] mb-3"
              style={{ color: '#E8500A' }}
            >
              {section.title}
            </p>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href ?? '#'}
                    className="group/item flex flex-col gap-0.5 rounded-lg px-2 py-2 transition-colors hover:bg-slate-50"
                  >
                    <span
                      className="text-sm font-semibold transition-colors group-hover/item:text-[#1B5EA8]"
                      style={{ color: '#1E293B' }}
                    >
                      {item.label}
                    </span>
                    {item.description && (
                      <span className="text-[0.72rem] leading-snug" style={{ color: '#94A3B8' }}>
                        {item.description}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA bar */}
      {cta && (
        <div
          className="border-t border-slate-100 px-6 py-4 flex items-center justify-between rounded-b-xl"
          style={{ background: '#F8FAFC' }}
        >
          <div>
            <p className="text-xs font-semibold" style={{ color: '#475569' }}>
              {cta.description}
            </p>
          </div>
          <Link
            href={cta.href}
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-colors hover:bg-white"
            style={{ color: '#1B5EA8' }}
          >
            {cta.label}
            <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </div>
  )
}

/* ─── Solutions Dropdown ─────────────────────────────────────────────────── */
function SolutionsDropdown({ isOpen }: { isOpen: boolean }) {
  const items = SOLUTIONS_DROPDOWN.sections?.[0]?.items ?? []
  const cta = SOLUTIONS_DROPDOWN.cta

  return (
    <div
      className={[
        'absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50',
        'bg-white border border-slate-200 rounded-xl shadow-mega',
        'transition-all duration-200',
        isOpen
          ? 'opacity-100 visible translate-y-0'
          : 'opacity-0 invisible translate-y-2 pointer-events-none',
      ].join(' ')}
      style={{ width: '320px' }}
      role="region"
      aria-label="Solutions menu"
    >
      <div className="p-3">
        <p
          className="text-[0.65rem] font-bold uppercase tracking-[0.15em] px-3 pt-2 pb-2"
          style={{ color: '#E8500A' }}
        >
          Industries Served
        </p>
        <ul>
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href ?? '#'}
                className="group/item flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-50"
              >
                <span className="text-base mt-0.5 w-5 shrink-0">{item.icon}</span>
                <div>
                  <p
                    className="text-sm font-semibold transition-colors group-hover/item:text-[#1B5EA8]"
                    style={{ color: '#1E293B' }}
                  >
                    {item.label}
                  </p>
                  {item.description && (
                    <p className="text-[0.72rem] leading-snug mt-0.5" style={{ color: '#94A3B8' }}>
                      {item.description}
                    </p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {cta && (
        <div className="border-t border-slate-100 p-3">
          <Link
            href={cta.href}
            className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors hover:bg-slate-50"
            style={{ color: '#1B5EA8' }}
          >
            <span>{cta.label}</span>
            <ArrowRightIcon />
          </Link>
        </div>
      )}
    </div>
  )
}

/* ─── Mobile Menu ────────────────────────────────────────────────────────── */
function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [productsOpen, setProductsOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)

  if (!isOpen) return null

  return (
    <div className="lg:hidden fixed inset-0 z-40 flex flex-col" style={{ top: '72px' }}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="relative z-10 bg-white h-full overflow-y-auto border-r border-slate-200 shadow-xl max-w-sm w-full animate-fade-in-down">
        <nav className="p-6 space-y-1" aria-label="Mobile navigation">

          {/* Products accordion */}
          <div>
            <button
              onClick={() => setProductsOpen((v) => !v)}
              className="flex items-center justify-between w-full py-3 px-2 rounded-lg text-base font-semibold transition-colors hover:bg-slate-50"
              style={{ color: '#1E293B' }}
              aria-expanded={productsOpen}
            >
              Products
              <ChevronDownIcon
                className={`transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {productsOpen && (
              <div className="mt-1 pl-4 space-y-4 pb-4">
                {PRODUCTS_DROPDOWN.sections?.map((section, si) => (
                  <div key={si}>
                    <p
                      className="text-[0.65rem] font-bold uppercase tracking-[0.15em] px-2 py-1"
                      style={{ color: '#E8500A' }}
                    >
                      {section.title}
                    </p>
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href ?? '#'}
                        onClick={onClose}
                        className="block px-2 py-1.5 rounded text-sm font-medium transition-colors hover:bg-slate-50 hover:text-[#1B5EA8]"
                        style={{ color: '#475569' }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
                <Link
                  href="/products"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold px-2"
                  style={{ color: '#1B5EA8' }}
                >
                  View all products <ArrowRightIcon />
                </Link>
              </div>
            )}
          </div>

          {/* Solutions accordion */}
          <div>
            <button
              onClick={() => setSolutionsOpen((v) => !v)}
              className="flex items-center justify-between w-full py-3 px-2 rounded-lg text-base font-semibold transition-colors hover:bg-slate-50"
              style={{ color: '#1E293B' }}
              aria-expanded={solutionsOpen}
            >
              Solutions
              <ChevronDownIcon
                className={`transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {solutionsOpen && (
              <div className="mt-1 pl-4 space-y-1 pb-4">
                {SOLUTIONS_DROPDOWN.sections?.[0]?.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href ?? '#'}
                    onClick={onClose}
                    className="flex items-center gap-2.5 px-2 py-2 rounded text-sm font-medium transition-colors hover:bg-slate-50 hover:text-[#1B5EA8]"
                    style={{ color: '#475569' }}
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Simple links */}
          {TOP_NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="block py-3 px-2 rounded-lg text-base font-semibold transition-colors hover:bg-slate-50"
              style={{ color: '#1E293B' }}
            >
              {link.label}
            </Link>
          ))}

          {/* CTA */}
          <div className="pt-4 border-t border-slate-100">
            <Link
              href="/contact"
              onClick={onClose}
              className="btn-primary w-full justify-center"
            >
              Contact Sales
            </Link>
          </div>

          {/* Secondary info */}
          <div className="pt-4 space-y-2">
            <a
              href="tel:+15624961519"
              className="flex items-center gap-2 text-sm font-medium"
              style={{ color: '#475569' }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10.68 11.37L9.55 12.5c-.16.16-.42.17-.6.04A17.95 17.95 0 013.46 6.05a.44.44 0 01.04-.6L4.63 4.32c.35-.35.35-.91 0-1.26L3.07 1.5a.89.89 0 00-1.26 0l-.88.88C.26 3.06.17 4.19.5 5.22A19.75 19.75 0 0010.78 15.5c1.03.33 2.16.24 2.84-.44l.88-.88a.89.89 0 000-1.26l-1.56-1.56a.89.89 0 00-1.26.01z" fill="currentColor" />
              </svg>
              +1 (562) 496-1519
            </a>
            <a
              href="mailto:info@cosasco.com"
              className="flex items-center gap-2 text-sm font-medium"
              style={{ color: '#475569' }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              info@cosasco.com
            </a>
          </div>
        </nav>
      </div>
    </div>
  )
}

/* ─── Main Navigation ────────────────────────────────────────────────────── */
export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  /* Scroll detection */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Close on Escape */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const openDropdown = useCallback((name: string) => {
    if (hideTimer.current) clearTimeout(hideTimer.current)
    setActiveDropdown(name)
  }, [])

  const scheduleClose = useCallback(() => {
    hideTimer.current = setTimeout(() => setActiveDropdown(null), 120)
  }, [])

  const cancelClose = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current)
  }, [])

  return (
    <>
      <header
        ref={navRef}
        className={[
          'fixed top-0 left-0 right-0 z-30 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-nav border-b border-slate-200/70'
            : 'bg-white/80 backdrop-blur-sm',
        ].join(' ')}
        style={{ height: '72px' }}
        role="banner"
      >
        <div className="container-cosasco h-full flex items-center justify-between gap-8">

          {/* Logo */}
          <div className="shrink-0">
            <CosascoLogo />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">

            {/* Products dropdown trigger */}
            <div
              className="relative"
              onMouseEnter={() => openDropdown('products')}
              onMouseLeave={scheduleClose}
            >
              <button
                className="nav-link"
                onClick={() => setActiveDropdown((v) => (v === 'products' ? null : 'products'))}
                aria-expanded={activeDropdown === 'products'}
                aria-haspopup="true"
              >
                Products
                <ChevronDownIcon
                  className={`transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180' : ''}`}
                />
              </button>
              <div onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
                <ProductsMegaMenu isOpen={activeDropdown === 'products'} />
              </div>
            </div>

            {/* Solutions dropdown trigger */}
            <div
              className="relative"
              onMouseEnter={() => openDropdown('solutions')}
              onMouseLeave={scheduleClose}
            >
              <button
                className="nav-link"
                onClick={() => setActiveDropdown((v) => (v === 'solutions' ? null : 'solutions'))}
                aria-expanded={activeDropdown === 'solutions'}
                aria-haspopup="true"
              >
                Solutions
                <ChevronDownIcon
                  className={`transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`}
                />
              </button>
              <div onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
                <SolutionsDropdown isOpen={activeDropdown === 'solutions'} />
              </div>
            </div>

            {/* Simple links */}
            {TOP_NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Phone – desktop only */}
            <a
              href="tel:+15624961519"
              className="hidden xl:flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[#1B5EA8]"
              style={{ color: '#64748B' }}
              aria-label="Call Cosasco"
            >
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10.68 11.37L9.55 12.5c-.16.16-.42.17-.6.04A17.95 17.95 0 013.46 6.05a.44.44 0 01.04-.6L4.63 4.32c.35-.35.35-.91 0-1.26L3.07 1.5a.89.89 0 00-1.26 0l-.88.88C.26 3.06.17 4.19.5 5.22A19.75 19.75 0 0010.78 15.5c1.03.33 2.16.24 2.84-.44l.88-.88a.89.89 0 000-1.26l-1.56-1.56a.89.89 0 00-1.26.01z" fill="currentColor" />
              </svg>
              +1 (562) 496-1519
            </a>

            {/* CTA button */}
            <Link href="/contact" className="hidden lg:inline-flex btn-primary text-sm px-5 py-2.5">
              Contact Sales
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg transition-colors hover:bg-slate-100"
              style={{ color: '#0F2A4A' }}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>

        {/* Orange accent bar at very top of nav */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: 'linear-gradient(90deg, #E8500A 0%, #1B5EA8 100%)' }}
          aria-hidden="true"
        />
      </header>

      {/* Mobile menu */}
      <div id="mobile-menu">
        <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      </div>

      {/* Spacer so content starts below fixed nav */}
      <div style={{ height: '72px' }} aria-hidden="true" />
    </>
  )
}
