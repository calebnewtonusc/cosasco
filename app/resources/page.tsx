"use client";

import Link from "next/link";
import { useState } from "react";

type DocType = "Datasheet" | "Installation Guide" | "Specifications" | "Application Note" | "White Paper";
type Industry = "Oil & Gas" | "Petrochemical" | "Water Treatment" | "Chemical Processing" | "Pulp & Paper" | "Utilities" | "All Industries";

interface TechDoc {
  id: string;
  title: string;
  type: DocType;
  industry: Industry;
  description: string;
  fileSize: string;
  updated: string;
  pages: number;
}

interface CaseStudy {
  id: string;
  title: string;
  industry: Industry;
  summary: string;
  stats: { label: string; value: string }[];
  updated: string;
}

interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
}

const techDocs: TechDoc[] = [
  {
    id: "ds-er-probe-standard",
    title: "ER Probe Series — Standard Configuration Datasheet",
    type: "Datasheet",
    industry: "All Industries",
    description: "Full technical specifications for Cosasco standard electrical resistance (ER) probe series, including element types, pressure ratings, temperature limits, and connector options.",
    fileSize: "1.2 MB",
    updated: "Jan 2026",
    pages: 8,
  },
  {
    id: "ds-er-probe-hightemp",
    title: "High-Temperature ER Probe Datasheet",
    type: "Datasheet",
    industry: "Petrochemical",
    description: "Specifications for Cosasco ER probes rated to 500°C for refinery and petrochemical high-temperature service. Includes Hastelloy and Inconel element options.",
    fileSize: "0.9 MB",
    updated: "Jan 2026",
    pages: 6,
  },
  {
    id: "ds-chemical-injection",
    title: "Chemical Injection Quill & System Datasheet",
    type: "Datasheet",
    industry: "Oil & Gas",
    description: "Technical data for Cosasco chemical injection quills, check valves, and full injection system packages. Materials, pressure ratings, and flow configurations.",
    fileSize: "1.4 MB",
    updated: "Dec 2025",
    pages: 10,
  },
  {
    id: "ds-access-fittings",
    title: "Access Fittings — Full Product Line Datasheet",
    type: "Datasheet",
    industry: "All Industries",
    description: "Comprehensive specification sheet for Cosasco hot-tap and weld-on access fittings. ANSI pressure class ratings, materials, and dimensional data.",
    fileSize: "2.1 MB",
    updated: "Nov 2025",
    pages: 16,
  },
  {
    id: "ig-er-probe-install",
    title: "ER Probe Installation & Commissioning Guide",
    type: "Installation Guide",
    industry: "All Industries",
    description: "Step-by-step installation procedures for Cosasco ER probes including site selection, access fitting preparation, electrical connections, and initial commissioning verification.",
    fileSize: "3.4 MB",
    updated: "Jan 2026",
    pages: 24,
  },
  {
    id: "ig-retractable-assembly",
    title: "Retractable Assembly Installation Guide",
    type: "Installation Guide",
    industry: "Oil & Gas",
    description: "Detailed procedures for installing and operating Cosasco retractable probe and coupon assemblies under live process pressure. Safety protocols and pressure testing.",
    fileSize: "2.8 MB",
    updated: "Dec 2025",
    pages: 20,
  },
  {
    id: "ig-chemical-injection",
    title: "Chemical Injection System Installation Guide",
    type: "Installation Guide",
    industry: "Oil & Gas",
    description: "Installation and commissioning guide for chemical injection packages including quill insertion, pressure testing, pump commissioning, and initial dosing verification.",
    fileSize: "2.2 MB",
    updated: "Oct 2025",
    pages: 18,
  },
  {
    id: "sp-materials-selection",
    title: "Probe Material Selection Specification",
    type: "Specifications",
    industry: "Chemical Processing",
    description: "Engineering specification for selecting ER probe element materials based on process chemistry, temperature, and corrosion mechanism. Includes compatibility tables for 40+ process fluids.",
    fileSize: "1.8 MB",
    updated: "Jan 2026",
    pages: 14,
  },
  {
    id: "sp-pressure-ratings",
    title: "System Pressure & Temperature Rating Specification",
    type: "Specifications",
    industry: "All Industries",
    description: "Consolidated pressure and temperature rating specification for all Cosasco access hardware, retractable assemblies, and probe systems. Includes de-rating curves.",
    fileSize: "1.1 MB",
    updated: "Nov 2025",
    pages: 12,
  },
  {
    id: "an-oil-gas-pipeline",
    title: "Pipeline Corrosion Monitoring — Application Note",
    type: "Application Note",
    industry: "Oil & Gas",
    description: "Practical guidance for ER probe placement, monitoring frequency, and data interpretation in crude oil and natural gas pipeline applications.",
    fileSize: "0.7 MB",
    updated: "Jan 2026",
    pages: 8,
  },
  {
    id: "an-water-mic",
    title: "MIC Detection in Water Treatment Systems — Application Note",
    type: "Application Note",
    industry: "Water Treatment",
    description: "Technical application note on using bypass coupon assemblies and biofilm monitoring to detect and manage microbiologically induced corrosion in water treatment and distribution systems.",
    fileSize: "0.8 MB",
    updated: "Dec 2025",
    pages: 10,
  },
  {
    id: "wp-rbi-corrosion",
    title: "Continuous Corrosion Monitoring for Risk-Based Inspection Programs",
    type: "White Paper",
    industry: "Petrochemical",
    description: "Engineering white paper on integrating continuous ER probe corrosion data into API 580/581 risk-based inspection frameworks to optimize inspection intervals and reduce integrity risk.",
    fileSize: "1.6 MB",
    updated: "Dec 2025",
    pages: 20,
  },
];

const caseStudies: CaseStudy[] = [
  {
    id: "cs-gulf-coast-pipeline",
    title: "Gulf Coast Pipeline Operator Reduces Corrosion Failures by 60%",
    industry: "Oil & Gas",
    summary: "A major Gulf Coast pipeline operator deployed Cosasco retractable ER probes across 14 monitoring stations on a 300-mile crude oil transmission line, enabling optimized inhibitor dosing and dramatically reducing corrosion failures.",
    stats: [
      { label: "Failure Reduction", value: "60%" },
      { label: "Chemical Savings", value: "22%" },
      { label: "Monitoring Stations", value: "14" },
    ],
    updated: "Jan 2026",
  },
  {
    id: "cs-midwest-refinery",
    title: "Midwest Refinery Extends Turnaround by 14 Months Using ER Probe Data",
    industry: "Petrochemical",
    summary: "A 120,000 BPD Midwest refinery deployed Cosasco high-temperature ER probes to monitor naphthenic acid corrosion, generating continuous integrity data that justified a 14-month turnaround extension.",
    stats: [
      { label: "Turnaround Extension", value: "14 Mo" },
      { label: "Avoided Outage Cost", value: "$8M" },
      { label: "Probe Installations", value: "32" },
    ],
    updated: "Dec 2025",
  },
  {
    id: "cs-municipal-water",
    title: "Municipal Water Authority Eliminates MIC Failures",
    industry: "Water Treatment",
    summary: "A large municipal water authority deployed Cosasco bypass coupon assemblies to identify and eliminate MIC-driven pinhole leaks through targeted biocide injection.",
    stats: [
      { label: "MIC Failures Eliminated", value: "100%" },
      { label: "Monitoring Points", value: "8" },
      { label: "Program Duration", value: "12 Mo" },
    ],
    updated: "Nov 2025",
  },
  {
    id: "cs-specialty-chemical",
    title: "Specialty Chemical Manufacturer Cuts Alloy Replacement Costs by 40%",
    industry: "Chemical Processing",
    summary: "Cosasco Hastelloy ER probes deployed across 12 reactor and column locations enabled early detection of localized corrosion events, dramatically reducing high-alloy equipment replacement spend.",
    stats: [
      { label: "Cost Reduction", value: "40%" },
      { label: "Shutdowns Avoided", value: "2" },
      { label: "Monitoring Locations", value: "12" },
    ],
    updated: "Oct 2025",
  },
  {
    id: "cs-kraft-mill",
    title: "Kraft Mill Reduces Bleach Plant Equipment Failures by 75%",
    industry: "Pulp & Paper",
    summary: "Cosasco titanium ER probes across 6 bleach plant stages identified real-time corrosivity trends, enabling process adjustments that eliminated 75% of bleach plant equipment failures.",
    stats: [
      { label: "Failure Reduction", value: "75%" },
      { label: "Extended Component Life", value: "+3 Yr" },
      { label: "Stages Monitored", value: "6" },
    ],
    updated: "Oct 2025",
  },
  {
    id: "cs-combined-cycle",
    title: "Combined Cycle Plant Eliminates Cooling Water Condenser Failures",
    industry: "Utilities",
    summary: "Cosasco bypass coupon assemblies identified a MIC contribution to condenser tube failures. Targeted biocide injection eliminated failures and saved $2.4M annually.",
    stats: [
      { label: "Annual Savings", value: "$2.4M" },
      { label: "Condenser Failures", value: "0" },
      { label: "Plant Capacity", value: "500 MW" },
    ],
    updated: "Sep 2025",
  },
];

const newsItems: NewsItem[] = [
  {
    id: "news-2026-01-new-hightemp",
    title: "Cosasco Launches Next-Generation High-Temperature ER Probe Rated to 550°C",
    date: "January 2026",
    category: "Product Launch",
    summary: "Cosasco's new HT-550 ER probe series expands the operating envelope for refinery and petrochemical monitoring applications with extended temperature ratings and improved element longevity.",
  },
  {
    id: "news-2025-12-nace-award",
    title: "Cosasco Recognized at CORROSION 2025 for Innovation in ER Probe Technology",
    date: "December 2025",
    category: "Industry Recognition",
    summary: "Cosasco received the NACE International Technology Achievement Award at CORROSION 2025, recognizing the CorrDATA automated corrosion data management platform.",
  },
  {
    id: "news-2025-11-partnership",
    title: "Cosasco Expands Distribution Partnership Network Across Southeast Asia",
    date: "November 2025",
    category: "Company News",
    summary: "Cosasco has expanded its authorized distribution and service network across Malaysia, Indonesia, Vietnam, and Thailand to better support Asia-Pacific oil, gas, and petrochemical customers.",
  },
  {
    id: "news-2025-10-webinar",
    title: "Webinar Recording: Integrating Corrosion Monitoring Data into RBI Programs",
    date: "October 2025",
    category: "Technical Content",
    summary: "Watch our recorded webinar where Cosasco engineers walk through practical strategies for leveraging continuous ER probe data in API 580 risk-based inspection frameworks.",
  },
];

const ALL_TYPES: ("All" | DocType)[] = ["All", "Datasheet", "Installation Guide", "Specifications", "Application Note", "White Paper"];
const ALL_INDUSTRIES: ("All" | Industry)[] = ["All", "Oil & Gas", "Petrochemical", "Water Treatment", "Chemical Processing", "Pulp & Paper", "Utilities", "All Industries"];

const typeColors: Record<DocType, string> = {
  "Datasheet": "bg-cosasco-blue text-white",
  "Installation Guide": "bg-green-600 text-white",
  "Specifications": "bg-purple-600 text-white",
  "Application Note": "bg-cosasco-orange text-white",
  "White Paper": "bg-gray-700 text-white",
};

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<"All" | DocType>("All");
  const [selectedIndustry, setSelectedIndustry] = useState<"All" | Industry>("All");

  const filteredDocs = techDocs.filter((doc) => {
    const matchesSearch =
      searchQuery === "" ||
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "All" || doc.type === selectedType;
    const matchesIndustry =
      selectedIndustry === "All" ||
      doc.industry === selectedIndustry ||
      doc.industry === "All Industries";
    return matchesSearch && matchesType && matchesIndustry;
  });

  const filteredCaseStudies = caseStudies.filter((cs) => {
    const matchesSearch =
      searchQuery === "" ||
      cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry =
      selectedIndustry === "All" ||
      selectedIndustry === "All Industries" ||
      cs.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-cosasco-blue transition-colors">Home</Link>
            <span>/</span>
            <span className="text-cosasco-navy font-medium">Resources</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-cosasco-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block bg-cosasco-orange px-3 py-1 rounded text-sm font-semibold tracking-wider uppercase mb-4">
              Technical Library
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Resources &amp; Technical Library
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Access Cosasco's complete library of product datasheets, installation guides,
              engineering specifications, application notes, case studies, and technical
              white papers. All documents are available for free download.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="bg-gray-50 border-b border-gray-200 py-6 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search input */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search documents, case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cosasco-blue focus:border-transparent"
              />
            </div>

            {/* Type filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as "All" | DocType)}
              className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-cosasco-blue bg-white min-w-[180px]"
            >
              {ALL_TYPES.map((t) => (
                <option key={t} value={t}>{t === "All" ? "All Document Types" : t}</option>
              ))}
            </select>

            {/* Industry filter */}
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value as "All" | Industry)}
              className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-cosasco-blue bg-white min-w-[180px]"
            >
              {ALL_INDUSTRIES.map((i) => (
                <option key={i} value={i}>{i === "All" ? "All Industries" : i}</option>
              ))}
            </select>

            {/* Clear */}
            {(searchQuery || selectedType !== "All" || selectedIndustry !== "All") && (
              <button
                onClick={() => { setSearchQuery(""); setSelectedType("All"); setSelectedIndustry("All"); }}
                className="px-4 py-2.5 text-sm text-gray-500 hover:text-cosasco-navy transition-colors border border-gray-300 rounded-lg bg-white whitespace-nowrap"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">

        {/* Technical Library */}
        <section>
          <div className="flex items-end justify-between mb-2">
            <div>
              <h2 className="text-3xl font-bold text-cosasco-navy">Technical Library</h2>
              <div className="w-12 h-1 bg-cosasco-orange mt-2 rounded" />
            </div>
            <span className="text-sm text-gray-500">
              {filteredDocs.length} document{filteredDocs.length !== 1 ? "s" : ""}
            </span>
          </div>
          <p className="text-gray-600 mt-4 mb-8 max-w-2xl">
            Download product datasheets, installation guides, technical specifications,
            and application notes for Cosasco corrosion monitoring equipment.
          </p>

          {filteredDocs.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <p className="text-lg">No documents match your current filters.</p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedType("All"); setSelectedIndustry("All"); }}
                className="mt-4 text-cosasco-blue hover:underline text-sm"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocs.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-cosasco-blue transition-all flex flex-col"
                >
                  <div className="p-6 flex-1">
                    {/* Type badge + industry */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${typeColors[doc.type]}`}>
                        {doc.type}
                      </span>
                      {doc.industry !== "All Industries" && (
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                          {doc.industry}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-cosasco-navy leading-snug mb-2">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {doc.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span>{doc.pages} pages</span>
                      <span>{doc.fileSize}</span>
                      <span>Updated {doc.updated}</span>
                    </div>
                  </div>

                  {/* Download CTA */}
                  <div className="border-t border-gray-100 p-4">
                    <button className="w-full flex items-center justify-center gap-2 bg-cosasco-navy hover:bg-cosasco-blue text-white text-sm font-semibold py-2.5 rounded-lg transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Case Studies */}
        <section>
          <div className="flex items-end justify-between mb-2">
            <div>
              <h2 className="text-3xl font-bold text-cosasco-navy">Case Studies</h2>
              <div className="w-12 h-1 bg-cosasco-orange mt-2 rounded" />
            </div>
            <span className="text-sm text-gray-500">
              {filteredCaseStudies.length} case stud{filteredCaseStudies.length !== 1 ? "ies" : "y"}
            </span>
          </div>
          <p className="text-gray-600 mt-4 mb-8 max-w-2xl">
            Real-world results from Cosasco corrosion monitoring deployments across oil &amp; gas,
            refining, water treatment, and industrial process industries.
          </p>

          {filteredCaseStudies.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <p>No case studies match your current filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredCaseStudies.map((cs) => (
                <div
                  key={cs.id}
                  className="bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-cosasco-blue transition-all flex flex-col"
                >
                  <div className="p-7 flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-cosasco-navy text-white">
                        Case Study
                      </span>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                        {cs.industry}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-cosasco-navy leading-snug mb-3">
                      {cs.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {cs.summary}
                    </p>

                    {/* Stats */}
                    <div className="flex gap-6 py-4 border-t border-b border-gray-100">
                      {cs.stats.map((stat) => (
                        <div key={stat.label}>
                          <div className="text-2xl font-bold text-cosasco-orange">{stat.value}</div>
                          <div className="text-xs text-gray-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="text-xs text-gray-400 mt-3">Updated {cs.updated}</div>
                  </div>

                  <div className="border-t border-gray-100 p-4 flex gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-cosasco-navy hover:bg-cosasco-blue text-white text-sm font-semibold py-2.5 rounded-lg transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download PDF
                    </button>
                    <Link
                      href={`/resources/case-studies/${cs.id}`}
                      className="flex-1 flex items-center justify-center gap-1 border-2 border-cosasco-blue text-cosasco-blue hover:bg-cosasco-blue hover:text-white text-sm font-semibold py-2.5 rounded-lg transition-colors"
                    >
                      Read Full Story
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* News & Updates */}
        <section>
          <div className="mb-2">
            <h2 className="text-3xl font-bold text-cosasco-navy">News &amp; Updates</h2>
            <div className="w-12 h-1 bg-cosasco-orange mt-2 rounded" />
          </div>
          <p className="text-gray-600 mt-4 mb-8 max-w-2xl">
            Product launches, industry news, technical webinars, and company announcements from Cosasco.
          </p>

          <div className="space-y-6">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row gap-6 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-cosasco-blue transition-all"
              >
                <div className="md:w-48 flex-shrink-0">
                  <div className="text-sm font-medium text-gray-500">{item.date}</div>
                  <div className="mt-2">
                    <span className="text-xs font-bold px-2 py-1 rounded bg-gray-100 text-gray-600">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-cosasco-navy mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {item.summary}
                  </p>
                  <Link
                    href={`/resources/news/${item.id}`}
                    className="text-cosasco-blue font-semibold text-sm hover:text-cosasco-orange transition-colors"
                  >
                    Read More &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-cosasco-navy rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our corrosion engineering team is available
            to provide application-specific guidance, custom product configurations, and
            detailed technical support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-cosasco-orange hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Contact Our Experts
            </Link>
            <Link
              href="/solutions"
              className="border-2 border-white text-white hover:bg-white hover:text-cosasco-navy font-bold px-8 py-4 rounded-lg transition-colors"
            >
              View Industry Solutions
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
