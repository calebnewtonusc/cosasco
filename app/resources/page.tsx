'use client'

import { useState, useMemo } from 'react'
import { Search, FileText, BookOpen, Mail } from 'lucide-react'
import Link from 'next/link'

type ResourceType =
  | 'Datasheet'
  | 'Instruction Sheet'
  | 'White Paper'
  | 'Case Study'
  | 'Brochure'
  | 'Technical Paper'
  | 'User Manual'
  | 'Product Selection Guide'
  | 'Article'
  | 'Agency Certificate'
  | 'Supplier Form'

interface Resource {
  id: number
  title: string
  description: string
  type: ResourceType
  industries: string[]
  pages: number
  size: string
}

const resources: Resource[] = [
  {
    id: 1,
    title: 'Echo Point UT Sensor Datasheet',
    description: 'Technical specifications and performance data for the Echo Point non-intrusive ultrasonic thickness sensor, including installation dimensions, measurement range, and environmental ratings.',
    type: 'Datasheet',
    industries: ['Oil & Gas', 'Petrochemical'],
    pages: 4,
    size: '0.8MB',
  },
  {
    id: 2,
    title: 'Microcor® Wireless Transmitter Installation Guide',
    description: 'Step-by-step installation and commissioning instructions for the Microcor Wireless Transmitter, including wiring diagrams, mounting requirements, and network configuration.',
    type: 'Instruction Sheet',
    industries: ['All Industries'],
    pages: 16,
    size: '1.4MB',
  },
  {
    id: 3,
    title: 'Fixed Process ER Probe 2500/2520 Datasheet',
    description: 'Full technical datasheet for the 2500 and 2520 series fixed process electrical resistance probes, including element types, pressure ratings, and connection standards.',
    type: 'Datasheet',
    industries: ['Oil & Gas', 'Chemical'],
    pages: 6,
    size: '1.0MB',
  },
  {
    id: 4,
    title: 'Retractable ER Probe 3500/3700 User Manual',
    description: 'Comprehensive user manual for 3500 and 3700 series retractable ER probes, covering safe insertion and retrieval procedures, maintenance schedules, and troubleshooting.',
    type: 'User Manual',
    industries: ['Oil & Gas', 'Petrochemical'],
    pages: 48,
    size: '4.2MB',
  },
  {
    id: 5,
    title: 'ICMS™ Integrated Corrosion Monitoring System Brochure',
    description: 'Product overview brochure for the ICMS Integrated Corrosion Monitoring System, highlighting multi-technique measurement, cloud connectivity, and remote diagnostics capabilities.',
    type: 'Brochure',
    industries: ['All Industries'],
    pages: 8,
    size: '2.1MB',
  },
  {
    id: 6,
    title: 'Access Fitting Selection Guide',
    description: 'Comprehensive guide for selecting the correct Cosasco retrieval-type access fitting based on operating pressure, temperature, pipe diameter, and fluid service conditions.',
    type: 'Product Selection Guide',
    industries: ['All Industries'],
    pages: 24,
    size: '2.4MB',
  },
  {
    id: 7,
    title: 'Corrosion Monitoring in Gas Transmission Pipelines',
    description: 'Technical paper covering probe placement strategy, data acquisition frequency, alarm threshold design, and program management for natural gas transmission infrastructure.',
    type: 'Technical Paper',
    industries: ['Oil & Gas'],
    pages: 18,
    size: '2.0MB',
  },
  {
    id: 8,
    title: 'Pipeline Integrity Case Study: Midstream Operator',
    description: 'How a major midstream operator deployed Cosasco ER probes and Microcor® wireless systems to reduce corrosion-related incidents by 94% across 1,200 miles of transmission pipeline.',
    type: 'Case Study',
    industries: ['Oil & Gas'],
    pages: 8,
    size: '1.1MB',
  },
  {
    id: 9,
    title: 'AirIQ Airborne Corrosion Monitor Datasheet',
    description: 'Technical specifications for the AirIQ airborne corrosion monitor, including sensitivity levels, supported gas environments, output options, and data center deployment guidance.',
    type: 'Datasheet',
    industries: ['Data Centers', 'Electronics'],
    pages: 4,
    size: '0.7MB',
  },
  {
    id: 10,
    title: 'SafeGuard Service Valve Datasheet',
    description: 'Product datasheet for the Cosasco SafeGuard Service Valve, detailing pressure-temperature ratings, body materials, locking mechanism operation, and safety certifications.',
    type: 'Datasheet',
    industries: ['Oil & Gas', 'Petrochemical'],
    pages: 4,
    size: '0.9MB',
  },
  {
    id: 11,
    title: 'Downhole Corrosion Monitoring System (DCMS™) Datasheet',
    description: 'Technical overview of the DCMS downhole corrosion monitoring system, covering tool string configuration, downhole electronics, data telemetry, and wellbore compatibility.',
    type: 'Datasheet',
    industries: ['Oil & Gas'],
    pages: 6,
    size: '1.3MB',
  },
  {
    id: 12,
    title: 'LPR Probe 6080/6112 Installation Sheet',
    description: 'Installation and connection instructions for 6080 and 6112 series linear polarization resistance probes, including torque specifications and material compatibility tables.',
    type: 'Instruction Sheet',
    industries: ['Oil & Gas', 'Water Treatment'],
    pages: 8,
    size: '0.9MB',
  },
]

const typeBadgeStyle: Record<ResourceType, string> = {
  Datasheet: 'bg-[#dbeafe] text-[#1d4ed8]',
  'Instruction Sheet': 'bg-[#d1fae5] text-[#065f46]',
  'White Paper': 'bg-[#fef3c7] text-[#92400e]',
  'Case Study': 'bg-[#fce7f3] text-[#9d174d]',
  Brochure: 'bg-[#ede9fe] text-[#5b21b6]',
  'Technical Paper': 'bg-[#fef9c3] text-[#854d0e]',
  'User Manual': 'bg-[#e0f2fe] text-[#0369a1]',
  'Product Selection Guide': 'bg-[#dcfce7] text-[#166534]',
  Article: 'bg-[#fef3c7] text-[#92400e]',
  'Agency Certificate': 'bg-[#f0fdf4] text-[#15803d]',
  'Supplier Form': 'bg-[#f1f5f9] text-[#475569]',
}

const typeFilters = [
  'All',
  'Agency Certificates',
  'Articles',
  'Brochures',
  'Case Studies',
  'Datasheets',
  'Instruction Sheets',
  'Product Selection Guides',
  'Supplier Forms',
  'Technical Papers',
  'User Manuals',
  'White Papers',
] as const
type FilterLabel = (typeof typeFilters)[number]

const filterToType: Record<FilterLabel, ResourceType | null> = {
  All: null,
  'Agency Certificates': 'Agency Certificate',
  Articles: 'Article',
  Brochures: 'Brochure',
  'Case Studies': 'Case Study',
  Datasheets: 'Datasheet',
  'Instruction Sheets': 'Instruction Sheet',
  'Product Selection Guides': 'Product Selection Guide',
  'Supplier Forms': 'Supplier Form',
  'Technical Papers': 'Technical Paper',
  'User Manuals': 'User Manual',
  'White Papers': 'White Paper',
}

function ResourceIcon({ type }: { type: ResourceType }) {
  if (type === 'Instruction Sheet' || type === 'User Manual') return <BookOpen className="w-5 h-5 text-[#0f2a4a]" />
  if (type === 'Case Study' || type === 'White Paper' || type === 'Technical Paper') return <BookOpen className="w-5 h-5 text-[#0f2a4a]" />
  return <FileText className="w-5 h-5 text-[#0f2a4a]" />
}

export default function ResourcesPage() {
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState<FilterLabel>('All')

  const filtered = useMemo(() => {
    const typeMatch = filterToType[activeFilter]
    return resources.filter((r) => {
      const matchesType = typeMatch === null || r.type === typeMatch
      const matchesSearch =
        search.trim() === '' ||
        r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.description.toLowerCase().includes(search.toLowerCase()) ||
        r.industries.some((i) => i.toLowerCase().includes(search.toLowerCase()))
      return matchesType && matchesSearch
    })
  }, [search, activeFilter])

  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-[#0f2a4a] pb-16 pt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 text-center">
          <p className="text-[#94aabb] text-sm font-semibold uppercase tracking-widest mb-4">Resource Library</p>
          <h1 className="text-white font-black text-5xl md:text-6xl leading-tight mb-5">
            Technical Resources & Document Requests
          </h1>
          <p className="text-[#94aabb] text-lg max-w-2xl mx-auto leading-relaxed">
            Request technical documentation from our engineering team. We'll send requested documents directly to your email.
          </p>
        </div>
      </section>

      {/* TECHNICAL LIBRARY NOTE */}
      <div className="bg-[#f0f4f8] border-b border-[#e8edf2] py-5 px-6">
        <div className="max-w-6xl mx-auto flex items-start gap-3">
          <Mail className="w-5 h-5 text-[#f4a65d] flex-shrink-0 mt-0.5" />
          <p className="text-[#566677] text-sm leading-relaxed">
            <span className="font-bold text-[#0f2a4a]">Full Technical Library:</span> Our complete library contains 400+ documents including datasheets, installation guides, white papers, and case studies. To request specific documents, contact{' '}
            <a href="mailto:info@cosasco.com?subject=Document Request" className="text-[#f4a65d] font-semibold hover:text-[#d4892a] transition-colors underline">
              info@cosasco.com
            </a>.
          </p>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="sticky top-[72px] z-40 bg-white border-b border-[#e8edf2] py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8898aa]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search resources..."
              className="pl-10 pr-4 border border-[#e8edf2] rounded-lg w-64 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:border-[#f4a65d]"
            />
          </div>

          {/* Type Filters + Count */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex flex-wrap gap-2">
              {typeFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeFilter === f
                      ? 'bg-[#f4a65d] text-white'
                      : 'bg-white border border-[#e8edf2] text-[#566677] hover:border-[#f4a65d] hover:text-[#f4a65d]'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <span className="text-[#566677] text-sm whitespace-nowrap">
              {filtered.length} result{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </div>

      {/* RESOURCE GRID */}
      <section className="bg-[#f7f9fc] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#0f2a4a] font-bold text-xl mb-2">No resources found</p>
              <p className="text-[#566677] text-sm">Try adjusting your search or filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-white border border-[#e8edf2] rounded-xl p-6 hover:shadow-md transition-all flex flex-col"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#f0f4f8] rounded-lg p-3 flex-shrink-0">
                      <ResourceIcon type={resource.type} />
                    </div>
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${typeBadgeStyle[resource.type]}`}
                    >
                      {resource.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-[#0f2a4a] mt-3 text-base leading-snug">{resource.title}</h3>

                  {/* Description */}
                  <p className="text-[#566677] text-sm mt-2 line-clamp-2 leading-relaxed flex-1">
                    {resource.description}
                  </p>

                  {/* Industry Tags */}
                  <div className="flex gap-1.5 mt-3 flex-wrap">
                    {resource.industries.map((ind) => (
                      <span
                        key={ind}
                        className="text-xs bg-[#f0f4f8] text-[#566677] px-2 py-0.5 rounded font-medium"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#e8edf2]">
                    <span className="text-[#8898aa] text-xs">
                      PDF &middot; {resource.pages} pages &middot; {resource.size}
                    </span>
                    <a
                      href={`mailto:info@cosasco.com?subject=Document Request: ${encodeURIComponent(resource.title)}`}
                      className="bg-[#f4a65d] text-white text-xs px-3 py-1.5 rounded-md font-semibold flex items-center gap-1 hover:bg-[#d4892a] transition-colors"
                    >
                      <Mail className="w-3 h-3" />
                      Request
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* WEBINARS */}
      <section className="bg-white py-16 border-b border-[#e8edf2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-3">Live Events</p>
            <h2 className="text-[#0f2a4a] font-black text-3xl md:text-4xl mb-3">Upcoming Webinars</h2>
            <p className="text-[#566677] max-w-xl mx-auto text-base">
              Free technical webinars from Cosasco corrosion engineers. Register to attend live or receive the recording.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                date: 'Mar 12',
                year: '2026',
                time: '10:00 AM PT',
                duration: '60 min',
                title: 'Corrosion Monitoring Best Practices for H₂S Environments',
                presenter: 'Cosasco Applications Engineering Team',
                badge: 'Registration Open',
                badgeClass: 'bg-[#d1fae5] text-[#065f46]',
                open: true,
              },
              {
                date: 'Mar 26',
                year: '2026',
                time: '2:00 PM PT',
                duration: '45 min',
                title: 'CDO Platform: Live Product Demo & Q&A',
                presenter: 'Cosasco Software Team',
                badge: 'Registration Open',
                badgeClass: 'bg-[#d1fae5] text-[#065f46]',
                open: true,
              },
              {
                date: 'Apr 9',
                year: '2026',
                time: '10:00 AM PT',
                duration: '90 min',
                title: 'Corrosion Under Insulation (CUI): Detection Strategies',
                presenter: 'Cosasco Integrity Engineering',
                badge: 'Coming Soon',
                badgeClass: 'bg-[#e8edf2] text-[#566677]',
                open: false,
              },
            ].map((w) => (
              <div key={w.title} className="bg-white border border-[#e8edf2] rounded-xl overflow-hidden hover:shadow-md transition-all flex flex-col">
                <div className="bg-[#f4a65d] px-6 py-4 flex items-center justify-between">
                  <div className="text-white">
                    <div className="font-black text-2xl leading-none">{w.date}</div>
                    <div className="text-sm opacity-80 mt-0.5">{w.year} &middot; {w.time}</div>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${w.badgeClass}`}>
                    {w.badge}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-[#8898aa] text-xs font-semibold uppercase tracking-wider mb-2">{w.duration}</p>
                  <h3 className="text-[#0f2a4a] font-black text-base leading-snug mb-3 flex-1">{w.title}</h3>
                  <p className="text-[#566677] text-xs mb-5">{w.presenter}</p>
                  {w.open ? (
                    <a
                      href="mailto:info@cosasco.com?subject=Webinar Registration"
                      className="block w-full text-center py-2.5 rounded-lg text-sm font-semibold transition-colors bg-[#0f2a4a] text-white hover:bg-[#1a3d6b]"
                    >
                      Register via Email
                    </a>
                  ) : (
                    <span className="block w-full text-center py-2.5 rounded-lg text-sm font-semibold bg-[#f0f4f8] text-[#8898aa] cursor-default">
                      Notify Me
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="bg-[#f7f9fc] py-16 border-b border-[#e8edf2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-3">Technical Insights</p>
              <h2 className="text-[#0f2a4a] font-black text-3xl md:text-4xl">From the Blog</h2>
            </div>
            <Link href="/news" className="text-[#f4a65d] font-semibold text-sm hover:text-[#d4892a] transition-colors whitespace-nowrap flex items-center gap-1">
              View All Articles →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                href: '/news/safeguard-service-valve',
                category: 'Product Innovation',
                title: 'The SafeGuard Service Valve: Cosasco\'s Latest Innovation',
                date: 'Feb 18, 2026',
                read: '5 min',
              },
              {
                href: '/news/airborne-corrosion-data-centers',
                category: 'Data Centers',
                title: 'How Can Data Centers Go Green? The Role of Airborne Corrosion Monitoring',
                date: 'Feb 5, 2026',
                read: '6 min',
              },
              {
                href: '/news/chemical-dosage-optimization',
                category: 'Chemical Injection',
                title: 'Optimizing Chemical Dosage and Reducing Waste',
                date: 'Jan 22, 2026',
                read: '5 min',
              },
              {
                href: '/news/africa-oil-gas-corrosion',
                category: 'Field Applications',
                title: 'Corrosion Monitoring in African Oil & Gas Markets',
                date: 'Jan 10, 2026',
                read: '7 min',
              },
              {
                href: '/news/er-vs-lpr-probe-technology',
                category: 'Technical Guide',
                title: 'Understanding ER vs LPR Probe Technology',
                date: 'Dec 18, 2025',
                read: '8 min',
              },
              {
                href: '/news/phmsa-mega-rules-pipeline',
                category: 'Regulatory',
                title: 'Pipeline Integrity in the Era of PHMSA Mega-Rules',
                date: 'Dec 4, 2025',
                read: '6 min',
              },
            ].map((post) => (
              <Link key={post.href} href={post.href} className="bg-white border border-[#e8edf2] rounded-xl p-6 hover:shadow-md hover:border-[#f4a65d] transition-all group flex flex-col">
                <span className="text-[#f4a65d] text-xs font-bold uppercase tracking-wider mb-3">{post.category}</span>
                <h3 className="text-[#0f2a4a] font-black text-base leading-snug mb-4 flex-1 group-hover:text-[#f4a65d] transition-colors">{post.title}</h3>
                <div className="flex items-center gap-3 text-[#8898aa] text-xs">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.read} read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section className="bg-[#0f2a4a] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
          <h2 className="text-white font-black text-4xl text-center mb-3">Featured Case Studies</h2>
          <p className="text-[#94aabb] text-center mb-12">
            Real-world results from Cosasco corrosion monitoring deployments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                industry: 'Gas Transmission',
                title: 'Eliminating Unplanned Shutdowns on a 400km North Sea Pipeline',
                href: '/resources/case-studies/north-sea-pipeline',
                stats: [
                  { value: '0', label: 'Unplanned shutdowns in 36 months' },
                  { value: '$2.4M', label: 'Daily shutdown exposure eliminated' },
                  { value: '14', label: 'Active monitoring points' },
                ],
              },
              {
                industry: 'Downstream / Refining',
                title: 'Real-Time Corrosion Intelligence at a Gulf Coast CDU',
                href: '/resources/case-studies/gulf-coast-refinery',
                stats: [
                  { value: '73%', label: 'Reduction in corrosion events' },
                  { value: '$6.2M', label: 'Annual maintenance savings' },
                  { value: '8', label: 'Monitoring zones instrumented' },
                ],
              },
              {
                industry: 'Upstream Oil & Gas',
                title: 'Scaling Corrosion Monitoring Across 23 Water Injection Wells',
                href: '/resources/case-studies/water-injection-platform',
                stats: [
                  { value: '23', label: 'Wells consistently monitored' },
                  { value: '40%', label: 'Reduction in inhibitor spend' },
                  { value: '100%', label: 'Portfolio standardization' },
                ],
              },
            ].map((cs) => (
              <div
                key={cs.title}
                className="bg-[#1a3a5c] border border-[#2a4a6c] rounded-xl p-7 flex flex-col"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-[#94aabb] mb-4">
                  {cs.industry}
                </span>
                <h3 className="text-white font-bold text-lg leading-snug mb-6">{cs.title}</h3>
                <div className="grid grid-cols-1 gap-4 flex-1">
                  {cs.stats.map((s) => (
                    <div key={s.label} className="border-b border-[#2a4a6c] pb-3 last:border-0 last:pb-0">
                      <p className="text-[#f4a65d] font-black text-3xl leading-none">{s.value}</p>
                      <p className="text-white text-sm mt-1 opacity-80">{s.label}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={cs.href}
                  className="mt-6 border border-white/30 text-white rounded-lg px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition-colors w-full text-center block"
                >
                  Read Case Study
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
