'use client'

import { useState, useMemo } from 'react'
import { Search, FileText, BookOpen, Download } from 'lucide-react'

type ResourceType = 'Datasheet' | 'Installation' | 'White Paper' | 'Case Study' | 'App Note'

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
    title: 'ER Probe Selection Guide',
    description: 'Comprehensive guide for selecting the correct electrical resistance probe element type, material, and geometry for your corrosion monitoring application.',
    type: 'Datasheet',
    industries: ['Oil & Gas', 'Petrochemical'],
    pages: 24,
    size: '2.1MB',
  },
  {
    id: 2,
    title: 'Chemical Injection System Specification',
    description: 'Full technical specification for Cosasco chemical injection quill and packer systems, including materials of construction, pressure ratings, and connection standards.',
    type: 'Datasheet',
    industries: ['All Industries'],
    pages: 18,
    size: '1.4MB',
  },
  {
    id: 3,
    title: 'Access Fitting Catalog 2025',
    description: 'Complete product catalog for Cosasco retrieval-type access fittings, plug valves, and hot-tap equipment with dimensional drawings and pressure-temperature ratings.',
    type: 'Datasheet',
    industries: ['All Industries'],
    pages: 48,
    size: '5.8MB',
  },
  {
    id: 4,
    title: 'FieldCom Installation & User Guide',
    description: 'Step-by-step installation, wiring, configuration, and operation manual for the FieldCom wireless data acquisition unit for corrosion monitoring networks.',
    type: 'Installation',
    industries: ['All'],
    pages: 62,
    size: '4.3MB',
  },
  {
    id: 5,
    title: 'Corrosion Monitoring Best Practices for O&G',
    description: 'Industry white paper covering probe placement strategy, data acquisition frequency, alarm thresholds, and program management for oil and gas facilities.',
    type: 'White Paper',
    industries: ['Oil & Gas'],
    pages: 32,
    size: '3.2MB',
  },
  {
    id: 6,
    title: 'Pipeline Corrosion Monitoring ROI Study',
    description: 'Quantitative analysis of corrosion monitoring program return on investment, including failure prevention costs, inspection savings, and regulatory compliance benefits.',
    type: 'White Paper',
    industries: ['Oil & Gas', 'Utilities'],
    pages: 28,
    size: '2.7MB',
  },
  {
    id: 7,
    title: 'Gulf Coast Pipeline Case Study',
    description: 'How a major Gulf Coast pipeline operator deployed Cosasco ER probes to reduce corrosion-related incidents by 94% across 1,200 miles of transmission infrastructure.',
    type: 'Case Study',
    industries: ['Oil & Gas'],
    pages: 8,
    size: '1.1MB',
  },
  {
    id: 8,
    title: 'Refinery Monitoring Program Success',
    description: 'Implementation of an integrated corrosion monitoring program at a 180,000 BPD refinery, resulting in extended turnaround intervals and zero unplanned shutdowns over 36 months.',
    type: 'Case Study',
    industries: ['Petrochemical'],
    pages: 6,
    size: '0.9MB',
  },
  {
    id: 9,
    title: 'Chemical Injection for H2S Service',
    description: 'Application note covering chemical inhibitor injection system design and material selection for sour service environments with elevated hydrogen sulfide concentrations.',
    type: 'App Note',
    industries: ['Oil & Gas', 'Chemical'],
    pages: 12,
    size: '1.0MB',
  },
  {
    id: 10,
    title: 'Non-Intrusive UT for High-Erosion Zones',
    description: 'Technical guidance on deploying non-intrusive ultrasonic thickness monitoring in high-velocity, high-erosion pipeline elbows and tees where intrusive monitoring is impractical.',
    type: 'App Note',
    industries: ['Oil & Gas', 'Petrochemical'],
    pages: 10,
    size: '0.8MB',
  },
  {
    id: 11,
    title: 'Cosasco Corporate Overview',
    description: 'Company overview covering Cosasco history, global capabilities, manufacturing facilities, quality management systems, and key product and service offerings.',
    type: 'Datasheet',
    industries: ['All'],
    pages: 16,
    size: '3.5MB',
  },
  {
    id: 12,
    title: 'MIC Detection in Water Systems',
    description: 'Application note on detecting and mitigating microbiologically influenced corrosion (MIC) in potable and industrial water systems using electrochemical monitoring techniques.',
    type: 'App Note',
    industries: ['Water Treatment'],
    pages: 14,
    size: '1.2MB',
  },
]

const typeBadgeStyle: Record<ResourceType, string> = {
  Datasheet: 'bg-[#dbeafe] text-[#1d4ed8]',
  Installation: 'bg-[#d1fae5] text-[#065f46]',
  'White Paper': 'bg-[#fef3c7] text-[#92400e]',
  'Case Study': 'bg-[#fce7f3] text-[#9d174d]',
  'App Note': 'bg-[#ede9fe] text-[#5b21b6]',
}

const typeFilters = ['All', 'Datasheets', 'Installation', 'White Papers', 'Case Studies', 'App Notes'] as const
type FilterLabel = (typeof typeFilters)[number]

const filterToType: Record<FilterLabel, ResourceType | null> = {
  All: null,
  Datasheets: 'Datasheet',
  Installation: 'Installation',
  'White Papers': 'White Paper',
  'Case Studies': 'Case Study',
  'App Notes': 'App Note',
}

function ResourceIcon({ type }: { type: ResourceType }) {
  if (type === 'Installation') return <BookOpen className="w-5 h-5 text-[#0f2a4a]" />
  if (type === 'Case Study' || type === 'White Paper') return <BookOpen className="w-5 h-5 text-[#0f2a4a]" />
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
      <section className="bg-[#0f2a4a] pt-[72px] pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#94aabb] text-sm font-semibold uppercase tracking-widest mb-4">Resource Library</p>
          <h1 className="text-white font-black text-5xl md:text-6xl leading-tight mb-5">
            Technical Resources &amp; Downloads
          </h1>
          <p className="text-[#94aabb] text-lg max-w-2xl mx-auto leading-relaxed">
            Access datasheets, installation guides, white papers, case studies, and application notes for Cosasco corrosion monitoring and chemical injection systems.
          </p>
        </div>
      </section>

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
        <div className="max-w-6xl mx-auto px-6">
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
                    <button className="bg-[#f4a65d] text-white text-xs px-3 py-1.5 rounded-md font-semibold flex items-center gap-1 hover:bg-[#d4892a] transition-colors">
                      <Download className="w-3 h-3" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section className="bg-[#0f2a4a] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-white font-black text-4xl text-center mb-3">Featured Case Studies</h2>
          <p className="text-[#94aabb] text-center mb-12">
            Real-world results from Cosasco corrosion monitoring deployments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                industry: 'Oil & Gas — Midstream',
                title: 'Gulf Coast Transmission Pipeline Network',
                stats: [
                  { value: '94%', label: 'Reduction in corrosion incidents' },
                  { value: '$4.2M', label: 'Annual maintenance savings' },
                  { value: '1,200', label: 'Miles of pipeline monitored' },
                ],
              },
              {
                industry: 'Petrochemical — Refining',
                title: 'Integrated Refinery Corrosion Program',
                stats: [
                  { value: '0', label: 'Unplanned shutdowns over 36 months' },
                  { value: '18mo', label: 'Extended turnaround interval' },
                  { value: '340+', label: 'Monitoring points installed' },
                ],
              },
              {
                industry: 'Water Treatment',
                title: 'Municipal Water Distribution MIC Control',
                stats: [
                  { value: '78%', label: 'Decrease in MIC-related failures' },
                  { value: '12yr', label: 'Extended asset service life' },
                  { value: '60+', label: 'Monitoring locations deployed' },
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
                <button className="mt-6 border border-white/30 text-white rounded-lg px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition-colors w-full">
                  Read Case Study
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
