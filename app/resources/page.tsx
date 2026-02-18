'use client';

import { useState, useMemo } from 'react';
import {
  Search,
  FileText,
  BookOpen,
  Download,
  Filter,
  BarChart3,
  FlaskConical,
  Layers,
  ArrowRight,
  X,
} from 'lucide-react';

// ─── Types & Data ──────────────────────────────────────────────────────────────

type DocType = 'Datasheet' | 'Installation Guide' | 'White Paper' | 'Case Study' | 'Application Note' | 'Overview' | 'Technical Brief';
type Industry = 'Oil & Gas' | 'Petrochemical' | 'Pipeline' | 'Water Treatment' | 'Chemical' | 'Pulp & Paper' | 'Utilities' | 'General';

interface Resource {
  id: number;
  title: string;
  description: string;
  type: DocType;
  industries: Industry[];
  fileSize: string;
  pages: number;
  icon: React.ReactNode;
}

const docTypes: ('All' | DocType)[] = [
  'All',
  'Datasheets',
  'Installation Guides',
  'White Papers',
  'Case Studies',
  'Application Notes',
] as unknown as ('All' | DocType)[];

const industryOptions: ('All Industries' | Industry)[] = [
  'All Industries',
  'Oil & Gas',
  'Petrochemical',
  'Pipeline',
  'Water Treatment',
  'Chemical',
  'Pulp & Paper',
  'Utilities',
];

const typeColors: Record<DocType, { bg: string; color: string }> = {
  'Datasheet': { bg: '#e0e8f4', color: '#0d1f3c' },
  'Installation Guide': { bg: '#fde8d8', color: '#b83a00' },
  'White Paper': { bg: '#eef2f7', color: '#334150' },
  'Case Study': { bg: '#d4e8f8', color: '#1a3d6e' },
  'Application Note': { bg: '#fde8d8', color: '#c94700' },
  'Overview': { bg: '#eef2f7', color: '#4a5e72' },
  'Technical Brief': { bg: '#e0e8f4', color: '#122b52' },
};

// Map filter pill labels to actual DocType values
const filterToType: Record<string, DocType> = {
  'Datasheets': 'Datasheet',
  'Installation Guides': 'Installation Guide',
  'White Papers': 'White Paper',
  'Case Studies': 'Case Study',
  'Application Notes': 'Application Note',
};

const resources: Resource[] = [
  {
    id: 1,
    title: 'ER Probe Selection Guide',
    description: 'Comprehensive guide to selecting the right electrical resistance probe element for your process conditions, including material, geometry, and environmental considerations.',
    type: 'Datasheet',
    industries: ['Oil & Gas', 'Petrochemical', 'Pipeline'],
    fileSize: '2.4 MB',
    pages: 12,
    icon: <FileText size={22} />,
  },
  {
    id: 2,
    title: 'Chemical Injection System Specification Sheet',
    description: 'Full specifications for Cosasco chemical injection quill assemblies, isolation valves, and dosing systems — including pressure ratings, materials, and connection options.',
    type: 'Datasheet',
    industries: ['Oil & Gas', 'Petrochemical', 'Water Treatment'],
    fileSize: '1.8 MB',
    pages: 8,
    icon: <FlaskConical size={22} />,
  },
  {
    id: 3,
    title: 'Access Fitting Catalog',
    description: 'Complete catalog of Cosasco access fittings, retrieval tools, and plug valves for all standard probe insertion and retrieval systems operating under live process conditions.',
    type: 'Datasheet',
    industries: ['Oil & Gas', 'Petrochemical', 'Pipeline', 'Chemical'],
    fileSize: '5.1 MB',
    pages: 32,
    icon: <Layers size={22} />,
  },
  {
    id: 4,
    title: 'FieldCom Wireless System Installation Guide',
    description: 'Step-by-step installation, configuration, and commissioning guide for the Cosasco FieldCom wireless corrosion monitoring network — including antenna placement and Modbus setup.',
    type: 'Installation Guide',
    industries: ['Oil & Gas', 'Pipeline', 'Petrochemical'],
    fileSize: '3.7 MB',
    pages: 48,
    icon: <BookOpen size={22} />,
  },
  {
    id: 5,
    title: 'Corrosion Monitoring Best Practices for O&G',
    description: 'Industry white paper covering the engineering fundamentals of a robust corrosion monitoring program for oil and gas operations, including probe selection, placement, and data interpretation methodologies.',
    type: 'White Paper',
    industries: ['Oil & Gas', 'Pipeline'],
    fileSize: '1.2 MB',
    pages: 18,
    icon: <FileText size={22} />,
  },
  {
    id: 6,
    title: 'Pipeline Corrosion Monitoring ROI Analysis',
    description: 'Financial analysis and case modeling demonstrating the return on investment for continuous corrosion monitoring programs versus reactive maintenance strategies in pipeline operations.',
    type: 'White Paper',
    industries: ['Oil & Gas', 'Pipeline'],
    fileSize: '0.9 MB',
    pages: 14,
    icon: <BarChart3 size={22} />,
  },
  {
    id: 7,
    title: 'Gulf Coast Pipeline Case Study',
    description: 'How a major Gulf Coast pipeline operator reduced unplanned corrosion-related downtime by 73% over 36 months using a Cosasco multi-point ER monitoring program.',
    type: 'Case Study',
    industries: ['Oil & Gas', 'Pipeline'],
    fileSize: '1.5 MB',
    pages: 6,
    icon: <BarChart3 size={22} />,
  },
  {
    id: 8,
    title: 'Petrochemical Refinery Monitoring Program',
    description: 'A leading US refinery deployed 48 Cosasco monitoring points across three process units, achieving full corrosion visibility and eliminating two emergency shutdowns annually.',
    type: 'Case Study',
    industries: ['Petrochemical'],
    fileSize: '2.1 MB',
    pages: 8,
    icon: <BarChart3 size={22} />,
  },
  {
    id: 9,
    title: 'Chemical Injection for H2S Service',
    description: 'Application note detailing best practices for corrosion inhibitor injection in high-H2S environments, including quill design, injection point selection, and dosing rate optimization.',
    type: 'Application Note',
    industries: ['Oil & Gas', 'Petrochemical'],
    fileSize: '0.8 MB',
    pages: 10,
    icon: <FlaskConical size={22} />,
  },
  {
    id: 10,
    title: 'UT Monitoring for High-Erosion Environments',
    description: 'Technical application note for ultrasonic thickness monitoring in high-velocity, sand-laden flow environments — covering sensor placement, data logging intervals, and threshold alarm setup.',
    type: 'Application Note',
    industries: ['Oil & Gas', 'Pipeline', 'Petrochemical'],
    fileSize: '1.1 MB',
    pages: 12,
    icon: <Layers size={22} />,
  },
  {
    id: 11,
    title: 'Cosasco Corporate Overview',
    description: 'Introduction to Cosasco\'s history, product portfolio, global capabilities, quality certifications, and application engineering services. Suitable for procurement and project teams.',
    type: 'Overview',
    industries: ['General'],
    fileSize: '3.2 MB',
    pages: 20,
    icon: <FileText size={22} />,
  },
  {
    id: 12,
    title: 'Quality Manual Excerpt',
    description: 'Publicly available excerpt from Cosasco\'s ISO 9001:2015 quality management system manual, covering manufacturing controls, inspection procedures, and non-conformance processes.',
    type: 'Technical Brief',
    industries: ['General'],
    fileSize: '0.6 MB',
    pages: 9,
    icon: <FileText size={22} />,
  },
];

const featuredCaseStudies = [
  {
    headline: 'Gulf Coast Pipeline Operator Cuts Corrosion Downtime by 73%',
    industry: 'Oil & Gas / Pipeline',
    stats: [
      { value: '73%', label: 'Downtime Reduction' },
      { value: '48', label: 'Monitoring Points' },
      { value: '$2.4M', label: 'Annual Cost Savings' },
    ],
    description: 'A major Gulf Coast pipeline operator deployed a multi-point Cosasco ER monitoring program and transformed their corrosion management from reactive to predictive.',
  },
  {
    headline: 'Refinery Achieves Zero Corrosion-Related ESDs Across Three Process Units',
    industry: 'Petrochemical',
    stats: [
      { value: '0', label: 'Emergency Shutdowns' },
      { value: '3', label: 'Process Units Covered' },
      { value: '36', label: 'Months Monitored' },
    ],
    description: 'A US Gulf Coast refinery deployed Cosasco\'s integrated monitoring and chemical injection platform, eliminating unplanned shutdowns attributed to internal corrosion.',
  },
  {
    headline: 'Offshore Platform Extends Equipment Life by 40% with FieldCom Wireless',
    industry: 'Oil & Gas / Offshore',
    stats: [
      { value: '40%', label: 'Equipment Life Extension' },
      { value: '120', label: 'Wireless Data Points' },
      { value: '18mo', label: 'Deployment Timeline' },
    ],
    description: 'An offshore production platform in the North Sea implemented Cosasco FieldCom to remotely monitor 120 corrosion measurement points — eliminating manual data collection in hazardous zones.',
  },
];

// ─── Resource Card ─────────────────────────────────────────────────────────────

function ResourceCard({ resource }: { resource: Resource }) {
  const typeStyle = typeColors[resource.type];
  return (
    <div className="card flex flex-col p-6 h-full">
      <div className="flex items-start gap-4 mb-4">
        <div
          className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: '#0d1f3c', color: '#e05000' }}
        >
          {resource.icon}
        </div>
        <span
          className="badge"
          style={{ background: typeStyle.bg, color: typeStyle.color, alignSelf: 'flex-start' }}
        >
          {resource.type}
        </span>
      </div>

      <h3 className="text-[#0d1f3c] font-bold text-base leading-snug mb-2">{resource.title}</h3>
      <p className="text-[#637c95] text-xs leading-relaxed mb-4 flex-grow line-clamp-3">
        {resource.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {resource.industries.slice(0, 3).map((ind) => (
          <span key={ind} className="badge badge-slate text-[10px]">{ind}</span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid #dde4ef' }}>
        <div className="flex items-center gap-3">
          <span className="text-[#b8c8da] text-xs">{resource.fileSize}</span>
          <span className="text-[#b8c8da] text-xs">&bull;</span>
          <span className="text-[#b8c8da] text-xs">{resource.pages} pages</span>
        </div>
        <button
          className="flex items-center gap-1.5 text-xs font-semibold transition-colors hover:opacity-80"
          style={{ color: '#e05000' }}
          onClick={() => {}}
        >
          <Download size={14} /> Download
        </button>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResourcesPage() {
  const [search, setSearch] = useState('');
  const [activeType, setActiveType] = useState<string>('All');
  const [activeIndustry, setActiveIndustry] = useState<string>('All Industries');

  const filtered = useMemo(() => {
    return resources.filter((r) => {
      const matchSearch =
        !search ||
        r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.description.toLowerCase().includes(search.toLowerCase());

      const matchType =
        activeType === 'All' ||
        r.type === filterToType[activeType] ||
        r.type === activeType;

      const matchIndustry =
        activeIndustry === 'All Industries' ||
        r.industries.includes(activeIndustry as Industry);

      return matchSearch && matchType && matchIndustry;
    });
  }, [search, activeType, activeIndustry]);

  const clearFilters = () => {
    setSearch('');
    setActiveType('All');
    setActiveIndustry('All Industries');
  };

  const hasFilters = search || activeType !== 'All' || activeIndustry !== 'All Industries';

  return (
    <main className="min-h-screen bg-white">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden grid-bg"
        style={{ background: '#0d1f3c', paddingTop: '6rem', paddingBottom: '5rem' }}
      >
        <div className="cx">
          <p className="eyebrow mb-3">Knowledge Center</p>
          <h1
            className="text-white font-extrabold tracking-tight leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
          >
            Technical Resources & Downloads
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            Access datasheets, installation guides, white papers, case studies, and application
            notes from Cosasco's engineering library.
          </p>
        </div>
      </section>

      {/* ── SEARCH + FILTER BAR ───────────────────────────────────────────────── */}
      <div
        className="sticky top-0 z-30 border-b"
        style={{ background: '#ffffff', borderColor: '#dde4ef' }}
      >
        <div className="cx py-4">
          <div className="flex flex-wrap items-center gap-4">

            {/* Search */}
            <div className="flex items-center gap-2 rounded-lg px-4 py-2.5 flex-grow min-w-[200px]" style={{ border: '1px solid #dde4ef', background: '#f7f9fc' }}>
              <Search size={16} style={{ color: '#637c95', flexShrink: 0 }} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search resources..."
                className="text-sm text-[#1a2535] w-full bg-transparent outline-none placeholder:text-[#b8c8da]"
              />
            </div>

            {/* Type filter pills */}
            <div className="flex flex-wrap gap-2">
              {docTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className="px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-150"
                  style={
                    activeType === type
                      ? { background: '#0d1f3c', color: '#fff' }
                      : { background: '#eef2f7', color: '#4a5e72' }
                  }
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Industry dropdown */}
            <div className="flex items-center gap-2">
              <Filter size={14} style={{ color: '#637c95' }} />
              <select
                value={activeIndustry}
                onChange={(e) => setActiveIndustry(e.target.value)}
                className="text-sm text-[#334150] font-medium rounded-lg px-3 py-2 outline-none"
                style={{ border: '1px solid #dde4ef', background: '#f7f9fc' }}
              >
                {industryOptions.map((ind) => (
                  <option key={ind}>{ind}</option>
                ))}
              </select>
            </div>

            {/* Clear + Count */}
            <div className="flex items-center gap-3 ml-auto">
              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-xs font-semibold text-[#637c95] hover:text-[#e05000] transition-colors"
                >
                  <X size={13} /> Clear
                </button>
              )}
              <span className="text-xs font-semibold text-[#637c95] whitespace-nowrap">
                {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* ── RESOURCE GRID ─────────────────────────────────────────────────────── */}
      <section className="section" style={{ background: '#f7f9fc' }}>
        <div className="cx">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((r) => (
                <ResourceCard key={r.id} resource={r} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
              <FileText size={40} style={{ color: '#b8c8da' }} />
              <p className="text-[#0d1f3c] font-bold text-lg">No resources match your filters</p>
              <p className="text-[#637c95] text-sm max-w-sm">
                Try adjusting your search terms or clearing the active filters to see all available documents.
              </p>
              <button onClick={clearFilters} className="btn btn-outline-navy text-sm mt-2">
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── CASE STUDIES FEATURE ─────────────────────────────────────────────── */}
      <section className="section grid-bg" style={{ background: '#0d1f3c' }}>
        <div className="cx">
          <div className="text-center mb-12">
            <p className="eyebrow mb-2">Customer Success</p>
            <h2
              className="text-white font-extrabold tracking-tight mb-4"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
            >
              Featured Case Studies
            </h2>
            <p className="text-white/60 text-base max-w-lg mx-auto">
              Real outcomes from real customers across the world's most demanding industrial environments.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {featuredCaseStudies.map((cs) => (
              <div
                key={cs.headline}
                className="rounded-xl p-7 flex flex-col md:flex-row gap-7 items-start"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}
              >
                {/* Content */}
                <div className="flex-grow min-w-0">
                  <span className="badge badge-orange mb-3">{cs.industry}</span>
                  <h3 className="text-white font-bold text-lg leading-snug mb-3">{cs.headline}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{cs.description}</p>
                </div>

                {/* Stats */}
                <div className="flex md:flex-col gap-5 md:gap-6 shrink-0">
                  {cs.stats.map((stat) => (
                    <div key={stat.label} className="text-center md:text-right">
                      <div className="stat-number" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                        {stat.value}
                      </div>
                      <div className="text-white/50 text-xs font-medium uppercase tracking-wide mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="shrink-0 self-center">
                  <button
                    className="btn btn-outline-white text-sm"
                    onClick={() => {}}
                  >
                    Read Case Study <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
