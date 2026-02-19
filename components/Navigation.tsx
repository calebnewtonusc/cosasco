'use client'

import { useReducer, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X, Phone, Search, ShoppingCart, Globe } from 'lucide-react'

const industriesDropdown = [
  { name: 'Upstream Oil & Gas', href: '/solutions/oil-gas' },
  { name: 'Midstream', href: '/solutions/oil-gas' },
  { name: 'Downstream / Refining', href: '/solutions/petrochemical' },
  { name: 'Gas Transmission', href: '/solutions/oil-gas' },
  { name: 'Pulp & Paper', href: '/solutions/pulp-paper' },
  { name: 'Specialty Applications', href: '/solutions/chemical-processing' },
]

const productsDropdown = [
  {
    heading: 'Corrosion Monitoring',
    items: [
      { name: 'ER Probes', description: 'Electrical resistance probe systems', href: '/products/corrosion-monitoring' },
      { name: 'LPR Systems', description: 'Linear polarization resistance', href: '/products/corrosion-monitoring' },
      { name: 'Access Fittings', description: 'Live retrieval equipment', href: '/products/corrosion-monitoring' },
      { name: 'Corrosion Coupons', description: 'Weight-loss analysis', href: '/products/corrosion-monitoring' },
    ],
  },
  {
    heading: 'Erosion Monitoring',
    items: [
      { name: 'Sand Detection', description: '', href: '/products/erosion-monitoring' },
      { name: 'UT Sensors', description: '', href: '/products/erosion-monitoring' },
      { name: 'Erosion Probes', description: '', href: '/products/erosion-monitoring' },
    ],
  },
  {
    heading: 'Chemical Injection',
    items: [
      { name: 'Quill Assemblies', description: '', href: '/products/chemical-injection' },
      { name: 'Injection Valves', description: '', href: '/products/chemical-injection' },
      { name: 'Dosing Systems', description: '', href: '/products/chemical-injection' },
    ],
  },
  {
    heading: 'Data Acquisition',
    items: [
      { name: 'FieldCom Systems', description: '', href: '/products/data-acquisition' },
      { name: 'Data Loggers', description: '', href: '/products/data-acquisition' },
      { name: 'Software', description: '', href: '/products/data-acquisition' },
    ],
  },
]

const companyDropdown = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'News & Events', href: '/news' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Software Login', href: '/software' },
]

type OpenMenu = 'industries' | 'products' | 'company' | null

// ── Nav state management ───────────────────────────────────────────────────────

type NavState = {
  open: OpenMenu
  mobileOpen: boolean
  mobileAccordion: string | null
  searchOpen: boolean
}

type NavAction =
  | { type: 'TOGGLE_MENU'; menu: OpenMenu }
  | { type: 'CLOSE_DROPDOWN' }
  | { type: 'TOGGLE_MOBILE' }
  | { type: 'CLOSE_MOBILE' }
  | { type: 'SET_ACCORDION'; value: string | null }
  | { type: 'TOGGLE_SEARCH' }
  | { type: 'CLOSE_SEARCH' }
  | { type: 'CLOSE_ALL' }

const initNav: NavState = { open: null, mobileOpen: false, mobileAccordion: null, searchOpen: false }

function navReducer(state: NavState, action: NavAction): NavState {
  switch (action.type) {
    case 'TOGGLE_MENU': return { ...state, open: state.open === action.menu ? null : action.menu }
    case 'CLOSE_DROPDOWN': return { ...state, open: null }
    case 'TOGGLE_MOBILE': return { ...state, mobileOpen: !state.mobileOpen }
    case 'CLOSE_MOBILE': return { ...state, mobileOpen: false }
    case 'SET_ACCORDION': return { ...state, mobileAccordion: action.value }
    case 'TOGGLE_SEARCH': return { ...state, searchOpen: !state.searchOpen }
    case 'CLOSE_SEARCH': return { ...state, searchOpen: false }
    case 'CLOSE_ALL': return { ...state, open: null, mobileOpen: false, searchOpen: false }
    default: return state
  }
}

// ── Sub-components ────────────────────────────────────────────────────────────

function IndustriesDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-[#e8edf2] animate-[fadeInDown_0.15s_ease]">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 gap-x-16 gap-y-3 max-w-xl">
          {industriesDropdown.map((ind) => (
            <Link
              key={ind.name}
              href={ind.href}
              onClick={onClose}
              className="flex items-center gap-2 text-[0.9rem] font-medium text-[#334150] hover:text-[#f4a65d] transition-colors duration-150 py-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#f4a65d] shrink-0" />
              {ind.name}
            </Link>
          ))}
        </div>
        <div className="mt-6 pt-5 border-t border-[#e8edf2]">
          <Link
            href="/solutions"
            onClick={onClose}
            className="text-sm font-semibold text-[#f4a65d] hover:text-[#d4892a] transition-colors duration-150"
          >
            View all industries →
          </Link>
        </div>
      </div>
    </div>
  )
}

function ProductsDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-[#e8edf2] animate-[fadeInDown_0.15s_ease]">
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
                      onClick={onClose}
                      className="block text-[0.875rem] font-medium text-[#334150] hover:text-[#f4a65d] transition-colors duration-150 py-0.5"
                    >
                      {item.name}
                      {item.description ? (
                        <span className="text-[#8898aa] text-xs block mt-0.5">{item.description}</span>
                      ) : null}
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
            onClick={onClose}
            className="text-sm font-semibold text-[#f4a65d] hover:text-[#d4892a] transition-colors duration-150"
          >
            View all products →
          </Link>
        </div>
      </div>
    </div>
  )
}

function CompanyDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-[#e8edf2] animate-[fadeInDown_0.15s_ease]">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-2 gap-x-12 gap-y-2 max-w-xs">
          {companyDropdown.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className="text-[0.9rem] font-medium text-[#334150] hover:text-[#f4a65d] transition-colors duration-150 py-1.5"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileMenu({
  onClose,
  mobileAccordion,
  setMobileAccordion,
}: {
  onClose: () => void
  mobileAccordion: string | null
  setMobileAccordion: (val: string | null) => void
}) {
  return (
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
                onClick={onClose}
                className="block py-2 text-sm text-[#334150] hover:text-[#f4a65d] transition-colors duration-150"
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
                    onClick={onClose}
                    className="block py-1.5 text-sm text-[#334150] hover:text-[#f4a65d] transition-colors duration-150"
                  >
                    {item.name}
                    {item.description ? (
                      <span className="text-[#8898aa] text-xs block mt-0.5">{item.description}</span>
                    ) : null}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}

        <Link
          href="/support"
          onClick={onClose}
          className="block px-3 py-3 text-[0.9rem] font-medium text-[#0f2a4a] rounded-md hover:bg-[#f4f6f8] transition-colors duration-150"
        >
          Services
        </Link>
        <Link
          href="/resources"
          onClick={onClose}
          className="block px-3 py-3 text-[0.9rem] font-medium text-[#0f2a4a] rounded-md hover:bg-[#f4f6f8] transition-colors duration-150"
        >
          Resources
        </Link>
        <Link
          href="/resources"
          onClick={onClose}
          className="block px-3 py-3 text-[0.9rem] font-medium text-[#0f2a4a] rounded-md hover:bg-[#f4f6f8] transition-colors duration-150"
        >
          Innovation
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
                onClick={onClose}
                className="block py-2 text-sm text-[#334150] hover:text-[#f4a65d] transition-colors duration-150"
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
            onClick={onClose}
            className="block w-full text-center bg-[#f4a65d] hover:bg-[#d4892a] text-white font-semibold text-sm py-3 rounded-md transition-colors duration-150"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  )
}

function SearchOverlay({
  onClose,
  inputRef,
}: {
  onClose: () => void
  inputRef: React.RefObject<HTMLInputElement | null>
}) {
  return (
    <div className="absolute top-full left-0 right-0 bg-white border-t border-[#e8edf2] shadow-md animate-[fadeInDown_0.15s_ease]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-3">
        <Search size={16} className="text-[#8898aa] shrink-0" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search products, industries, resources..."
          className="flex-1 text-[0.9rem] text-[#334150] placeholder-[#aab4bf] outline-none bg-transparent"
        />
        <button
          onClick={onClose}
          className="p-1 rounded text-[#8898aa] hover:text-[#334150] transition-colors duration-150"
          aria-label="Close search"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}

// ── Main Navigation ───────────────────────────────────────────────────────────

export default function Navigation() {
  const [navState, dispatch] = useReducer(navReducer, initNav)
  const { open, mobileOpen, mobileAccordion, searchOpen } = navState
  const searchInputRef = useRef<HTMLInputElement>(null)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        dispatch({ type: 'CLOSE_DROPDOWN' })
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dispatch({ type: 'CLOSE_ALL' })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchOpen])

  const toggle = (menu: OpenMenu) => dispatch({ type: 'TOGGLE_MENU', menu })

  const navLinkBase =
    'flex items-center gap-1 px-3 py-2 text-[0.9rem] font-medium rounded-md transition-colors duration-150'
  const navLinkIdle = 'text-[#334150] hover:text-[#0f2a4a] hover:bg-[#f4f6f8]'
  const navLinkActive = 'text-[#f4a65d] bg-[#fef8f0]'

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e8edf2]"
    >
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-[78px] focus:left-4 focus:z-50 focus:bg-[#f4a65d] focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Orange top strip */}
      <div className="h-[3px] bg-[#f4a65d] w-full" />

      {/* Main nav bar */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Cosasco home">
          <div className="w-[34px] h-[34px] bg-[#0f2a4a] rounded-md flex items-center justify-center shrink-0">
            <span className="text-white font-black text-sm leading-none">C</span>
          </div>
          <div className="leading-none">
            <div className="font-black text-[#0f2a4a] tracking-tight text-[1.05rem] leading-none">
              COSASCO<sup className="text-[0.55rem] font-normal align-super ml-[1px]">®</sup>
            </div>
            <div className="text-[10px] text-[#8898aa] tracking-wider uppercase mt-0.5 leading-none">
              A Halma Company
            </div>
          </div>
        </Link>

        {/* Desktop center nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
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
          <Link href="/resources" className={`${navLinkBase} ${navLinkIdle}`}>
            Innovation
          </Link>

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
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button className="flex items-center gap-1 text-[0.7rem] text-[#8898aa] hover:text-[#566677] transition-colors duration-150">
            <Globe size={12} />
            <span>Global — EN</span>
          </button>

          <button
            onClick={() => dispatch({ type: 'TOGGLE_SEARCH' })}
            aria-label="Toggle search"
            className="p-1.5 rounded-md text-[#566677] hover:text-[#0f2a4a] hover:bg-[#f4f6f8] transition-colors duration-150"
          >
            <Search size={16} />
          </button>

          <Link
            href="/contact?quote=true"
            aria-label="Quote cart"
            className="relative inline-flex p-1.5 rounded-md text-[#566677] hover:text-[#0f2a4a] hover:bg-[#f4f6f8] transition-colors duration-150"
          >
            <ShoppingCart size={16} />
            <span className="absolute -top-1 -right-1 bg-[#f4a65d] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-semibold leading-none">
              0
            </span>
          </Link>

          <a
            href="tel:+15629490123"
            className="flex items-center gap-1.5 text-[0.8rem] text-[#566677] hover:text-[#0f2a4a] transition-colors duration-150"
          >
            <Phone size={13} />
            <span>+1 (562) 949-0123</span>
          </a>
          <Link
            href="/contact"
            className="bg-[#f4a65d] hover:bg-[#d4892a] text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors duration-150"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-md text-[#0f2a4a] hover:bg-[#f4f6f8] transition-colors duration-150"
          onClick={() => dispatch({ type: 'TOGGLE_MOBILE' })}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Search overlay */}
      {searchOpen && (
        <SearchOverlay onClose={() => dispatch({ type: 'CLOSE_SEARCH' })} inputRef={searchInputRef} />
      )}

      {/* Desktop dropdowns */}
      {open === 'industries' && <IndustriesDropdown onClose={() => dispatch({ type: 'CLOSE_DROPDOWN' })} />}
      {open === 'products' && <ProductsDropdown onClose={() => dispatch({ type: 'CLOSE_DROPDOWN' })} />}
      {open === 'company' && <CompanyDropdown onClose={() => dispatch({ type: 'CLOSE_DROPDOWN' })} />}

      {/* Mobile menu */}
      {mobileOpen && (
        <MobileMenu
          onClose={() => dispatch({ type: 'CLOSE_MOBILE' })}
          mobileAccordion={mobileAccordion}
          setMobileAccordion={(val) => dispatch({ type: 'SET_ACCORDION', value: val })}
        />
      )}
    </header>
  )
}
