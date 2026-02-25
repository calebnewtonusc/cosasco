'use client'

import { useReducer, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Search,
  MessageSquare,
  Shield,
  Activity,
  Droplet,
  BarChart2,
  Flame,
  FlaskConical,
  Droplets,
  TestTube,
  BookOpen,
  Zap,
  ArrowRight,
  Route,
  Atom,
  Pickaxe,
  Gauge,
  Settings2,
} from 'lucide-react'

const industriesDropdown = [
  { name: 'Upstream Oil & Gas', href: '/solutions/oil-gas#upstream', icon: Flame, desc: 'Production, injection & wellhead' },
  { name: 'Midstream / Pipelines', href: '/solutions/oil-gas#midstream', icon: Route, desc: 'Transmission & gas compression' },
  { name: 'Downstream / Refining', href: '/solutions/oil-gas#downstream', icon: FlaskConical, desc: 'Process units & storage tanks' },
  { name: 'Petrochemical', href: '/solutions/petrochemical', icon: Atom, desc: 'Reactors, columns & transfer lines' },
  { name: 'Water Treatment', href: '/solutions/water-treatment', icon: Droplets, desc: 'Distribution & treatment systems' },
  { name: 'Chemical Processing', href: '/solutions/chemical-processing', icon: TestTube, desc: 'Aggressive media environments' },
  { name: 'Pulp & Paper', href: '/solutions/pulp-paper', icon: BookOpen, desc: 'Digesters & bleach plant' },
  { name: 'Utilities / Power', href: '/solutions/utilities', icon: Zap, desc: 'Generation & cooling water' },
  { name: 'Mining & Minerals', href: '/solutions/mining', icon: Pickaxe, desc: 'Mineral processing & extraction' },
  { name: 'Gas Transmission', href: '/solutions/gas-transmission', icon: Gauge, desc: 'High-pressure pipeline networks' },
  { name: 'Specialty Applications', href: '/solutions/specialty-applications', icon: Settings2, desc: 'Custom & niche environments' },
]

const productsDropdown = [
  {
    heading: 'Corrosion Monitoring',
    icon: Shield,
    href: '/products/corrosion-monitoring',
    items: [
      { name: 'ER Probes', description: 'Electrical resistance probe systems', href: '/products/er-probe' },
      { name: 'Access Fittings', description: 'Live retrieval equipment', href: '/products/access-fittings' },
      { name: 'Corrosion Coupons', description: 'Weight-loss analysis racks', href: '/products/corrosion-coupons' },
      { name: 'LPR Systems', description: 'Linear polarization resistance', href: '/products/corrosion-monitoring' },
    ],
  },
  {
    heading: 'Erosion Monitoring',
    icon: Activity,
    href: '/products/erosion-monitoring',
    items: [
      { name: 'UT Sensors', description: 'Ultrasonic thickness monitoring', href: '/products/ut-sensor' },
      { name: 'Sand Detection', description: 'Particle erosion probes', href: '/products/erosion-monitoring' },
      { name: 'Erosion ER Probes', description: 'Quantitative erosion data', href: '/products/erosion-monitoring' },
    ],
  },
  {
    heading: 'Chemical Injection',
    icon: Droplet,
    href: '/products/chemical-injection',
    items: [
      { name: 'Quill Assemblies', description: 'Fixed & retractable quills', href: '/products/quill-assembly' },
      { name: 'Injection Valves', description: 'Check & isolation valves', href: '/products/chemical-injection' },
      { name: 'Dosing Skids', description: 'Complete injection packages', href: '/products/chemical-injection' },
    ],
  },
  {
    heading: 'Data Acquisition',
    icon: BarChart2,
    href: '/products/data-acquisition',
    items: [
      { name: 'Data Loggers', description: 'Wired & multiplexed systems', href: '/products/data-acquisition' },
      { name: 'Cloud Analytics', description: 'Real-time dashboards', href: '/products/data-acquisition' },
    ],
  },
]

const companyDropdown = [
  { name: 'About Cosasco', href: '/about', desc: '70+ years of innovation' },
  { name: 'Leadership', href: '/about#leadership', desc: 'Meet our team' },
  { name: 'Careers', href: '/careers', desc: 'Join our global team' },
  { name: 'News & Events', href: '/news', desc: 'Latest updates' },
  { name: 'Find A Rep', href: '/contact/find-a-rep', desc: 'Locate your regional rep' },
  { name: 'Contact Us', href: '/contact', desc: 'Get in touch' },
]

const softwareDropdown = [
  { name: 'Software Overview', href: '/software' },
  { name: 'CDO (Cosasco Data Online)', href: '/products/data-acquisition' },
  { name: 'Data Key Activation', href: '/software/data-key' },
  { name: 'Device Length Calculator', href: '/tools/device-length-calculator' },
  { name: 'Legacy Software', href: '/software/legacy' },
  { name: 'Partner Payment', href: '/software/partner-payment' },
]

type OpenMenu = 'solutions' | 'products' | 'about' | 'software' | null

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
    <div className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t-2 border-[#f4a65d] animate-[fadeInDown_0.15s_ease]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 py-8">
        <div className="grid grid-cols-4 gap-x-6 gap-y-2">
          {industriesDropdown.map((ind) => {
            const Icon = ind.icon
            return (
              <Link
                key={ind.name}
                href={ind.href}
                onClick={onClose}
                className="flex items-start gap-3 py-2.5 px-3 rounded-lg hover:bg-[#f7f9fc] transition-colors duration-150 group"
              >
                <div className="w-7 h-7 rounded-md bg-[#f0f4f8] group-hover:bg-[#fef3e2] flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                  <Icon size={13} className="text-[#566677] group-hover:text-[#f4a65d] transition-colors" />
                </div>
                <div>
                  <div className="text-[0.85rem] font-semibold text-[#334150] group-hover:text-[#f4a65d] transition-colors leading-tight">
                    {ind.name}
                  </div>
                  <div className="text-[0.72rem] text-[#8898aa] mt-0.5 leading-tight">{ind.desc}</div>
                </div>
              </Link>
            )
          })}
        </div>
        <div className="mt-5 pt-4 border-t border-[#e8edf2] flex items-center justify-between">
          <Link
            href="/solutions"
            onClick={onClose}
            className="text-sm font-semibold text-[#f4a65d] hover:text-[#d4892a] transition-colors duration-150 inline-flex items-center gap-1"
          >
            View all industries
            <ArrowRight size={13} />
          </Link>
          <span className="text-xs text-[#8898aa]">Solutions tailored for each sector</span>
        </div>
      </div>
    </div>
  )
}

function ProductsDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t-2 border-[#f4a65d] animate-[fadeInDown_0.15s_ease]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 py-8">
        <div className="grid grid-cols-4 gap-8">
          {productsDropdown.map((col) => {
            const Icon = col.icon
            return (
              <div key={col.heading}>
                {/* Column header - clickable */}
                <Link
                  href={col.href}
                  onClick={onClose}
                  className="flex items-center gap-2 mb-4 group"
                >
                  <div className="w-7 h-7 rounded-md bg-[#0f2a4a] group-hover:bg-[#f4a65d] flex items-center justify-center shrink-0 transition-colors">
                    <Icon size={13} className="text-white" />
                  </div>
                  <span className="text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[#0f2a4a] group-hover:text-[#f4a65d] transition-colors">
                    {col.heading}
                  </span>
                </Link>

                <ul className="space-y-1">
                  {col.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="block px-2 py-1.5 rounded-md text-[0.85rem] font-medium text-[#334150] hover:text-[#f4a65d] hover:bg-[#fef8f0] transition-all duration-150"
                      >
                        {item.name}
                        {item.description ? (
                          <span className="text-[#8898aa] text-xs block mt-0.5 font-normal">{item.description}</span>
                        ) : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-6 pt-5 border-t border-[#e8edf2]">
          <div className="flex items-center justify-between">
            <Link
              href="/products"
              onClick={onClose}
              className="text-sm font-semibold text-[#f4a65d] hover:text-[#d4892a] transition-colors duration-150 inline-flex items-center gap-1"
            >
              View all products
              <ArrowRight size={13} />
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/tools/device-length-calculator"
                onClick={onClose}
                className="text-xs text-[#566677] hover:text-[#0f2a4a] transition-colors"
              >
                Device Length Calculator
              </Link>
              <span className="text-[#e8edf2]">|</span>
              <Link
                href="/contact"
                onClick={onClose}
                className="text-xs text-[#566677] hover:text-[#0f2a4a] transition-colors"
              >
                Talk to an Engineer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CompanyDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t-2 border-[#f4a65d] animate-[fadeInDown_0.15s_ease]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 py-8">
        <div className="grid grid-cols-3 gap-x-6 gap-y-2 max-w-2xl">
          {companyDropdown.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className="flex flex-col py-2.5 px-3 rounded-lg hover:bg-[#f7f9fc] transition-colors duration-150 group"
            >
              <span className="text-[0.85rem] font-semibold text-[#334150] group-hover:text-[#f4a65d] transition-colors">
                {item.name}
              </span>
              <span className="text-[0.72rem] text-[#8898aa] mt-0.5">{item.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function SoftwareDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t-2 border-[#f4a65d] animate-[fadeInDown_0.15s_ease]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 py-6">
        <div className="grid grid-cols-3 gap-x-8 gap-y-2 max-w-xl">
          {softwareDropdown.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className="py-2.5 px-3 rounded-lg text-[0.85rem] font-medium text-[#334150] hover:text-[#f4a65d] hover:bg-[#fef8f0] transition-colors duration-150"
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
    <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t-2 border-[#f4a65d] shadow-2xl max-h-[calc(100vh-75px)] overflow-y-auto" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <div className="px-4 py-3 space-y-0.5">

        {/* Industries accordion */}
        <button
          className="w-full flex items-center justify-between px-3 py-3.5 text-[0.9rem] font-semibold text-[#0f2a4a] rounded-md hover:bg-[#f4f6f8] transition-colors duration-150"
          onClick={() => setMobileAccordion(mobileAccordion === 'solutions' ? null : 'solutions')}
        >
          Solutions
          <ChevronDown
            size={15}
            className={`transition-transform duration-200 text-[#566677] ${mobileAccordion === 'solutions' ? 'rotate-180 text-[#f4a65d]' : ''}`}
          />
        </button>
        {mobileAccordion === 'solutions' && (
          <div className="pl-4 pb-2 space-y-0.5">
            {industriesDropdown.map((ind) => {
              const Icon = ind.icon
              return (
                <Link
                  key={ind.name}
                  href={ind.href}
                  onClick={onClose}
                  className="flex items-center gap-3 py-2.5 px-3 rounded-md text-sm text-[#334150] hover:text-[#f4a65d] hover:bg-[#fef8f0] transition-colors duration-150"
                >
                  <Icon size={14} className="text-[#8898aa] shrink-0" />
                  {ind.name}
                </Link>
              )
            })}
            <Link
              href="/solutions"
              onClick={onClose}
              className="block py-2.5 px-3 text-sm font-semibold text-[#f4a65d]"
            >
              View all industries →
            </Link>
          </div>
        )}

        {/* Products accordion */}
        <button
          className="w-full flex items-center justify-between px-3 py-3.5 text-[0.9rem] font-semibold text-[#0f2a4a] rounded-md hover:bg-[#f4f6f8] transition-colors duration-150"
          onClick={() => setMobileAccordion(mobileAccordion === 'products' ? null : 'products')}
        >
          Products
          <ChevronDown
            size={15}
            className={`transition-transform duration-200 text-[#566677] ${mobileAccordion === 'products' ? 'rotate-180 text-[#f4a65d]' : ''}`}
          />
        </button>
        {mobileAccordion === 'products' && (
          <div className="pl-4 pb-2 space-y-4">
            {productsDropdown.map((col) => {
              const Icon = col.icon
              return (
                <div key={col.heading}>
                  <div className="flex items-center gap-2 px-3 mb-1.5">
                    <Icon size={12} className="text-[#f4a65d] shrink-0" />
                    <div className="text-[0.65rem] font-bold uppercase tracking-widest text-[#8898aa]">
                      {col.heading}
                    </div>
                  </div>
                  {col.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={onClose}
                      className="block py-2 px-3 rounded-md text-sm text-[#334150] hover:text-[#f4a65d] hover:bg-[#fef8f0] transition-colors duration-150"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )
            })}
            <Link
              href="/products"
              onClick={onClose}
              className="block py-2.5 px-3 text-sm font-semibold text-[#f4a65d]"
            >
              View all products →
            </Link>
          </div>
        )}

        <Link
          href="/services"
          onClick={onClose}
          className="block px-3 py-3.5 text-[0.9rem] font-semibold text-[#0f2a4a] rounded-md hover:bg-[#f4f6f8] transition-colors duration-150"
        >
          Services
        </Link>
        <Link
          href="/resources"
          onClick={onClose}
          className="block px-3 py-3.5 text-[0.9rem] font-semibold text-[#0f2a4a] rounded-md hover:bg-[#f4f6f8] transition-colors duration-150"
        >
          Resources
        </Link>


        {/* Software accordion */}
        <button
          className="w-full flex items-center justify-between px-3 py-3.5 text-[0.9rem] font-semibold text-[#0f2a4a] rounded-md hover:bg-[#f4f6f8] transition-colors duration-150"
          onClick={() => setMobileAccordion(mobileAccordion === 'software' ? null : 'software')}
        >
          Software
          <ChevronDown
            size={15}
            className={`transition-transform duration-200 text-[#566677] ${mobileAccordion === 'software' ? 'rotate-180 text-[#f4a65d]' : ''}`}
          />
        </button>
        {mobileAccordion === 'software' && (
          <div className="pl-4 pb-2 space-y-0.5">
            {softwareDropdown.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="block py-2 px-3 rounded-md text-sm text-[#334150] hover:text-[#f4a65d] hover:bg-[#fef8f0] transition-colors duration-150"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}

        {/* Company accordion */}
        <button
          className="w-full flex items-center justify-between px-3 py-3.5 text-[0.9rem] font-semibold text-[#0f2a4a] rounded-md hover:bg-[#f4f6f8] transition-colors duration-150"
          onClick={() => setMobileAccordion(mobileAccordion === 'about' ? null : 'about')}
        >
          About
          <ChevronDown
            size={15}
            className={`transition-transform duration-200 text-[#566677] ${mobileAccordion === 'about' ? 'rotate-180 text-[#f4a65d]' : ''}`}
          />
        </button>
        {mobileAccordion === 'about' && (
          <div className="pl-4 pb-2 space-y-0.5">
            {companyDropdown.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="block py-2 px-3 rounded-md text-sm text-[#334150] hover:text-[#f4a65d] hover:bg-[#fef8f0] transition-colors duration-150"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}

        {/* Contact */}
        <Link
          href="/contact"
          onClick={onClose}
          className="block px-3 py-3.5 text-[0.9rem] font-semibold text-[#0f2a4a] rounded-md hover:bg-[#f4f6f8] transition-colors duration-150"
        >
          Contact
        </Link>

        {/* CTA */}
        <div className="pt-4 pb-3 border-t border-[#e8edf2] mt-2 space-y-2">
          <Link
            href="/contact"
            onClick={onClose}
            className="block w-full text-center bg-[#f4a65d] hover:bg-[#d4892a] text-white font-semibold text-sm py-3 rounded-md transition-colors duration-150"
          >
            Request a Quote
          </Link>
          <a
            href="tel:+15629490123"
            className="flex items-center justify-center gap-2 w-full text-center border border-[#e8edf2] text-[#0f2a4a] font-semibold text-sm py-3 rounded-md transition-colors hover:bg-[#f4f6f8]"
          >
            <Phone size={14} />
            +1 (562) 949-0123
          </a>
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
    <div className="absolute top-full left-0 right-0 bg-white border-t border-[#e8edf2] shadow-lg animate-[fadeInDown_0.15s_ease]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 py-4 flex items-center gap-3">
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const toggle = (menu: OpenMenu) => dispatch({ type: 'TOGGLE_MENU', menu })

  const navLinkBase =
    'flex items-center gap-1 px-3 py-2 text-[0.875rem] font-semibold rounded-md transition-colors duration-150'
  const navLinkIdle = 'text-[#334150] hover:text-[#0f2a4a] hover:bg-[#f4f6f8]'
  const navLinkActive = 'text-[#f4a65d] bg-[#fef8f0]'

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background,backdrop-filter,box-shadow] duration-300 ${
        scrolled
          ? 'bg-white/96 backdrop-blur-sm border-[#e8edf2] shadow-sm'
          : 'bg-white border-transparent'
      }`}
    >
      {/* Orange top accent */}
      <div className="h-[3px] bg-gradient-to-r from-[#f4a65d] via-[#d4892a] to-[#f4a65d] w-full" />

      {/* Main nav bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 flex items-center justify-between h-[72px]">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" aria-label="Cosasco home">
          <Image
            src="/cosasco-logo.png"
            alt="Cosasco"
            width={160}
            height={40}
            style={{ width: 'auto', height: '40px', position: 'relative', zIndex: 1 }}
            className="object-contain"
          />
        </Link>

        {/* Desktop center nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          <button
            onClick={() => toggle('solutions')}
            aria-expanded={open === 'solutions'}
            aria-haspopup="true"
            className={`${navLinkBase} ${open === 'solutions' ? navLinkActive : navLinkIdle}`}
          >
            Solutions
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${open === 'solutions' ? 'rotate-180' : ''}`}
            />
          </button>

          <button
            onClick={() => toggle('products')}
            aria-expanded={open === 'products'}
            aria-haspopup="true"
            className={`${navLinkBase} ${open === 'products' ? navLinkActive : navLinkIdle}`}
          >
            Products
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${open === 'products' ? 'rotate-180' : ''}`}
            />
          </button>

          <Link href="/services" className={`${navLinkBase} ${navLinkIdle}`}>
            Services
          </Link>
          <Link href="/resources" className={`${navLinkBase} ${navLinkIdle}`}>
            Resources
          </Link>

          <button
            onClick={() => toggle('software')}
            aria-expanded={open === 'software'}
            aria-haspopup="true"
            className={`${navLinkBase} ${open === 'software' ? navLinkActive : navLinkIdle}`}
          >
            Software
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${open === 'software' ? 'rotate-180' : ''}`}
            />
          </button>

          <button
            onClick={() => toggle('about')}
            aria-expanded={open === 'about'}
            aria-haspopup="true"
            className={`${navLinkBase} ${open === 'about' ? navLinkActive : navLinkIdle}`}
          >
            About
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${open === 'about' ? 'rotate-180' : ''}`}
            />
          </button>

          <Link href="/contact" className={`${navLinkBase} ${navLinkIdle}`}>
            Contact
          </Link>
        </nav>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
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
            <MessageSquare size={16} />
          </Link>

          <a
            href="tel:+15629490123"
            className="flex items-center gap-1.5 text-[0.78rem] text-[#566677] hover:text-[#0f2a4a] transition-colors duration-150 px-2"
          >
            <Phone size={13} />
            <span>+1 (562) 949-0123</span>
          </a>
          <Link
            href="/contact"
            className="bg-[#f4a65d] hover:bg-[#d4892a] text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors duration-150 whitespace-nowrap"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-md text-[#0f2a4a] hover:bg-[#f4f6f8] transition-colors duration-150"
          onClick={() => dispatch({ type: 'TOGGLE_MOBILE' })}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Search overlay */}
      {searchOpen && (
        <SearchOverlay onClose={() => dispatch({ type: 'CLOSE_SEARCH' })} inputRef={searchInputRef} />
      )}

      {/* Desktop dropdowns */}
      {open === 'solutions' && <IndustriesDropdown onClose={() => dispatch({ type: 'CLOSE_DROPDOWN' })} />}
      {open === 'products' && <ProductsDropdown onClose={() => dispatch({ type: 'CLOSE_DROPDOWN' })} />}
      {open === 'software' && <SoftwareDropdown onClose={() => dispatch({ type: 'CLOSE_DROPDOWN' })} />}
      {open === 'about' && <CompanyDropdown onClose={() => dispatch({ type: 'CLOSE_DROPDOWN' })} />}

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
