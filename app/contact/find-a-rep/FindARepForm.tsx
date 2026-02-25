'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronRight, Mail, Phone, MapPin, Globe } from 'lucide-react'

// ─── Data ───────────────────────────────────────────────────────────────────

interface Office {
  country: string
  city?: string
  phone?: string
  email: string
  note?: string
  isHQ?: boolean
}

interface Region {
  id: string
  label: string
  offices: Office[]
}

const regions: Region[] = [
  {
    id: 'north-america',
    label: 'North America',
    offices: [
      {
        country: 'United States (HQ)',
        city: 'Santa Fe Springs, CA',
        phone: '+1 (562) 949-0123',
        email: 'info@cosasco.com',
        isHQ: true,
      },
      {
        country: 'United States (Gulf Coast)',
        city: 'Houston, TX',
        phone: '+1 (562) 949-0123',
        email: 'info@cosasco.com',
      },
      {
        country: 'Canada',
        city: 'Markham, Ontario',
        email: 'info@cosasco.com',
      },
    ],
  },
  {
    id: 'south-america',
    label: 'South America',
    offices: [
      { country: 'Brazil', email: 'info@cosasco.com' },
      { country: 'Colombia', email: 'info@cosasco.com' },
      { country: 'Ecuador', email: 'info@cosasco.com' },
      { country: 'Mexico', email: 'info@cosasco.com' },
      { country: 'Peru', email: 'info@cosasco.com' },
      { country: 'Trinidad & Tobago', email: 'info@cosasco.com' },
      { country: 'Venezuela', email: 'info@cosasco.com' },
    ],
  },
  {
    id: 'europe',
    label: 'Europe',
    offices: [
      { country: 'United Kingdom', city: 'Aberdeen, Scotland', email: 'info@cosasco.com' },
      { country: 'France', email: 'info@cosasco.com' },
      { country: 'Germany', email: 'info@cosasco.com' },
      { country: 'Italy', email: 'info@cosasco.com' },
      { country: 'Poland', email: 'info@cosasco.com' },
      { country: 'Portugal', email: 'info@cosasco.com' },
      { country: 'Spain', email: 'info@cosasco.com' },
      { country: 'Israel', email: 'info@cosasco.com' },
    ],
  },
  {
    id: 'middle-east',
    label: 'Middle East',
    offices: [
      { country: 'United Arab Emirates', city: 'Dubai', email: 'info@cosasco.com' },
      { country: 'Saudi Arabia', note: '2 offices', email: 'info@cosasco.com' },
      { country: 'Qatar', email: 'info@cosasco.com' },
      { country: 'Kuwait', email: 'info@cosasco.com' },
      { country: 'Bahrain', email: 'info@cosasco.com' },
      { country: 'Sultanate of Oman', email: 'info@cosasco.com' },
      { country: 'Pakistan', email: 'info@cosasco.com' },
    ],
  },
  {
    id: 'asia-pacific',
    label: 'Asia Pacific',
    offices: [
      { country: 'Malaysia', city: 'Kuala Lumpur', email: 'info@cosasco.com' },
      { country: 'Singapore', email: 'info@cosasco.com' },
      { country: 'Indonesia', email: 'info@cosasco.com' },
      { country: 'India', email: 'info@cosasco.com' },
      { country: 'Japan', email: 'info@cosasco.com' },
      { country: 'China (P.R.)', email: 'info@cosasco.com' },
      { country: 'South Korea', email: 'info@cosasco.com' },
      { country: 'Taiwan', email: 'info@cosasco.com' },
      { country: 'Thailand', email: 'info@cosasco.com' },
      { country: 'Vietnam', email: 'info@cosasco.com' },
      { country: 'Brunei', email: 'info@cosasco.com' },
    ],
  },
  {
    id: 'africa',
    label: 'Africa',
    offices: [
      { country: 'Nigeria', email: 'info@cosasco.com' },
      { country: 'South Africa', email: 'info@cosasco.com' },
      { country: 'Egypt', email: 'info@cosasco.com' },
      { country: 'Libya', email: 'info@cosasco.com' },
    ],
  },
  {
    id: 'australia',
    label: 'Australia',
    offices: [
      { country: 'Australia', city: 'Perth', email: 'info@cosasco.com' },
    ],
  },
]

// ─── Sub-components ──────────────────────────────────────────────────────────

function OfficeCard({ office }: { office: Office }) {
  return (
    <div className="bg-white border border-[#e8edf2] rounded-xl p-5 flex flex-col gap-3 hover:shadow-md hover:border-[#c8d8e8] transition-all">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[#0f2a4a] font-bold text-sm leading-snug">{office.country}</p>
          {office.isHQ && (
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.1em] text-[#f4a65d] bg-[#fef3e2] border border-[#f4a65d]/30 rounded-full px-2 py-0.5 mt-1">
              HQ
            </span>
          )}
        </div>
        {office.note && (
          <span className="text-[10px] font-semibold text-[#566677] bg-[#f0f4f8] rounded-full px-2 py-0.5 whitespace-nowrap mt-0.5">
            {office.note}
          </span>
        )}
      </div>

      <div className="space-y-1.5 text-xs text-[#566677]">
        {office.city && (
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-[#94aabb] shrink-0" />
            <span>{office.city}</span>
          </div>
        )}
        {office.phone && (
          <div className="flex items-center gap-1.5">
            <Phone className="w-3 h-3 text-[#94aabb] shrink-0" />
            <a
              href={`tel:${office.phone.replace(/[\s()+-]/g, '')}`}
              className="hover:text-[#0f2a4a] transition-colors"
            >
              {office.phone}
            </a>
          </div>
        )}
        {!office.phone && (
          <p className="text-[#94aabb] italic leading-snug">
            For local support, contact your regional HQ at info@cosasco.com
          </p>
        )}
      </div>

      <a
        href={`mailto:${office.email}`}
        className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#0f2a4a] hover:bg-[#1a3a5c] rounded-lg px-3 py-2 transition-colors w-fit"
      >
        <Mail className="w-3 h-3" />
        Email Rep
      </a>
    </div>
  )
}

interface AccordionSectionProps {
  region: Region
  isOpen: boolean
  onToggle: () => void
}

function AccordionSection({ region, isOpen, onToggle }: AccordionSectionProps) {
  return (
    <div className="border border-[#e8edf2] rounded-xl overflow-hidden bg-white">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#f7f9fc] transition-colors group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#0f2a4a] rounded-lg flex items-center justify-center shrink-0">
            <Globe className="w-4 h-4 text-[#f4a65d]" />
          </div>
          <div>
            <p className="text-[#0f2a4a] font-black text-base leading-tight">{region.label}</p>
            <p className="text-[#566677] text-xs mt-0.5">
              {region.offices.length} {region.offices.length === 1 ? 'location' : 'locations'}
            </p>
          </div>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-[#566677] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="px-6 pb-6 border-t border-[#e8edf2] pt-5">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {region.offices.map((office) => (
              <OfficeCard key={`${office.country}-${office.city ?? ''}`} office={office} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function FindARepForm() {
  const [activeTab, setActiveTab] = useState<string>('all')
  const [openAccordions, setOpenAccordions] = useState<Set<string>>(
    new Set(['north-america'])
  )

  function toggleAccordion(id: string) {
    setOpenAccordions((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  function expandAll() {
    setOpenAccordions(new Set(regions.map((r) => r.id)))
  }

  function collapseAll() {
    setOpenAccordions(new Set())
  }

  const filteredRegions =
    activeTab === 'all' ? regions : regions.filter((r) => r.id === activeTab)

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#0f2a4a] pt-[72px] pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-[#8ab4d4] mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Find a Rep</span>
          </nav>
          <p className="text-[#f4a65d] text-xs font-bold uppercase tracking-[0.1em] mb-4">Global Network</p>
          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight mb-4">
            Find a Representative
          </h1>
          <p className="text-[#8ab4d4] text-lg max-w-2xl leading-relaxed">
            Not sure who to contact? Our global network of sales representatives and
            distributors can help. Email us at{' '}
            <a href="mailto:sales@cosasco.com" className="text-[#f4a65d] hover:underline font-medium">
              sales@cosasco.com
            </a>
          </p>
        </div>
      </section>

      {/* ── Region Tab Strip ── */}
      <section className="bg-white border-b border-[#e8edf2] sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {/* "All" tab */}
            <button
              onClick={() => {
                setActiveTab('all')
                expandAll()
              }}
              className={`shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-[#0f2a4a] text-white'
                  : 'text-[#566677] hover:bg-[#f0f4f8] hover:text-[#0f2a4a]'
              }`}
            >
              All Regions
            </button>
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => {
                  setActiveTab(region.id)
                  setOpenAccordions(new Set([region.id]))
                }}
                className={`shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap ${
                  activeTab === region.id
                    ? 'bg-[#0f2a4a] text-white'
                    : 'text-[#566677] hover:bg-[#f0f4f8] hover:text-[#0f2a4a]'
                }`}
              >
                {region.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Directory ── */}
      <section className="bg-[#f7f9fc] py-16">
        <div className="max-w-6xl mx-auto px-6">

          {/* Controls row */}
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#f4a65d] mb-1">
                {activeTab === 'all' ? 'All Regions' : regions.find((r) => r.id === activeTab)?.label}
              </p>
              <h2 className="text-[#0f2a4a] font-black text-2xl">
                Representative Directory
              </h2>
            </div>
            {activeTab === 'all' && (
              <div className="flex items-center gap-2">
                <button
                  onClick={expandAll}
                  className="text-xs font-semibold text-[#566677] hover:text-[#0f2a4a] border border-[#e8edf2] bg-white rounded-lg px-3 py-2 transition-colors"
                >
                  Expand All
                </button>
                <button
                  onClick={collapseAll}
                  className="text-xs font-semibold text-[#566677] hover:text-[#0f2a4a] border border-[#e8edf2] bg-white rounded-lg px-3 py-2 transition-colors"
                >
                  Collapse All
                </button>
              </div>
            )}
          </div>

          {/* Accordion list */}
          <div className="space-y-3">
            {filteredRegions.map((region) => (
              <AccordionSection
                key={region.id}
                region={region}
                isOpen={openAccordions.has(region.id)}
                onToggle={() => toggleAccordion(region.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-[#0f2a4a] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[#f4a65d] text-xs font-bold uppercase tracking-[0.1em] mb-4">
              Global Coverage
            </p>
            <h2 className="text-white font-black text-3xl md:text-4xl mb-4 leading-tight">
              Don&apos;t see your country?
            </h2>
            <p className="text-[#8ab4d4] text-base leading-relaxed mb-8">
              We serve customers in 110+ countries worldwide. Contact us directly and we will
              connect you with the right representative for your region.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="mailto:info@cosasco.com"
                className="inline-flex items-center gap-2 bg-[#f4a65d] hover:bg-[#d4892a] text-white font-bold px-7 py-3.5 rounded-lg transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                info@cosasco.com
              </a>
              <a
                href="tel:+15629490123"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-lg transition-colors text-sm border border-white/20"
              >
                <Phone className="w-4 h-4" />
                +1 (562) 949-0123
              </a>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[#8ab4d4] hover:text-white text-sm font-semibold transition-colors"
            >
              Visit the full Contact page
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
