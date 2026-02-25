'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const filters = ['All', 'Press Releases', 'Product Updates', 'Technical Articles', 'Events']

const articles = [
  {
    title: "The SafeGuard Service Valve: Cosasco's Latest Innovation",
    category: 'Product Update',
    date: 'Jan 15, 2026',
    excerpt:
      "Cosasco introduces the SafeGuard Service Valve, a fire-rated, PED-certified double isolation valve made with NACE-compliant 4130 or Duplex stainless steel. The lightest available service valve that meets the highest safety standards.",
    href: null,
  },
  {
    title: 'New Retractable ER Probe for High-Pressure Applications',
    category: 'Product Update',
    date: 'Jan 8, 2026',
    excerpt:
      'Cosasco introduces a fully retractable electrical resistance probe rated for pressures up to 3,000 PSI, enabling safe in-service retrieval without process shutdown.',
    href: '/news/retractable-er-probe',
  },
  {
    title: 'Cosasco Recognized as Leading Corrosion Monitor Supplier',
    category: 'Press Release',
    date: 'Dec 20, 2025',
    excerpt:
      'Independent industry analysts ranked Cosasco among the top global suppliers of corrosion monitoring equipment for the fourth consecutive year.',
    href: '/news/industry-recognition-2025',
  },
  {
    title: 'Optimizing Chemical Dosage and Reducing Waste',
    category: 'Technical Article',
    date: 'Dec 12, 2025',
    excerpt:
      'Real-time LPR and ER monitoring data enables operators to optimize chemical inhibitor dosing, reducing waste, cutting costs, and improving corrosion protection simultaneously.',
    href: null,
  },
  {
    title: 'Cosasco at AMPP Annual Conference & Expo 2026 \u2014 Booth #1247',
    category: 'Events',
    date: 'Dec 5, 2025',
    excerpt:
      "Visit us at AMPP Annual Conference & Expo 2026. Live product demonstrations of the Microcor\u00ae Wireless Transmitter, SafeGuard Service Valve, and Echo Point UT sensor will be on display.",
    href: null,
  },
  {
    title: 'Pipeline Integrity in the Era of PHMSA Mega-Rules',
    category: 'Technical Article',
    date: 'Nov 28, 2025',
    excerpt:
      'New PHMSA regulations are driving gas transmission operators to implement comprehensive internal corrosion monitoring programs. We outline the key requirements and how ER probe networks and chemical injection systems help achieve compliance.',
    href: null,
  },
  {
    title: 'Cosasco Appoints New Nigerian Distributor',
    category: 'Press Release',
    date: 'Nov 15, 2025',
    excerpt:
      "Cosasco announces a new distribution partnership in Nigeria, expanding direct product access and technical support across West Africa's growing oil and gas sector.",
    href: null,
  },
  {
    title: 'How Can Data Centers Go Green? The Role of Airborne Corrosion Monitoring',
    category: 'Technical Article',
    date: 'Nov 8, 2025',
    excerpt:
      "As data centers move to free-air cooling, airborne corrosive gases become a serious threat to electronics. Cosasco's AirIQ system provides continuous monitoring to protect critical infrastructure while enabling sustainable operations.",
    href: null,
  },
  {
    title: 'ISO 9001:2015 Surveillance Audit Passed with Zero Nonconformances',
    category: 'Press Release',
    date: 'Oct 30, 2025',
    excerpt:
      'Cosasco successfully completed its ISO 9001:2015 surveillance audit with zero nonconformances, reaffirming our commitment to quality management across all manufacturing operations.',
    href: null,
  },
  {
    title: 'Understanding ER vs LPR Probe Technology',
    category: 'Technical Article',
    date: 'Oct 22, 2025',
    excerpt:
      'A deep-dive comparison of electrical resistance and linear polarization resistance probe technologies, helping engineers select the right sensor for their specific process conditions.',
    href: '/resources/blog/corrosion-monitoring-fundamentals',
  },
  {
    title: 'Q3 2025 Product Catalog Now Available',
    category: 'Product Update',
    date: 'Oct 10, 2025',
    excerpt:
      'The updated catalog includes new SKUs across our probe, chemical injection, and access fitting product lines, along with revised technical specifications for legacy products.',
    href: null,
  },
  {
    title: 'Interview: 75+ Years of Corrosion Innovation',
    category: 'Technical Article',
    date: 'Sep 25, 2025',
    excerpt:
      "Cosasco's Director of Engineering reflects on seven decades of corrosion monitoring innovation, from early mechanical coupons to today's wireless sensor networks and cloud-based analytics.",
    href: '/news/fieldcom-5-launch',
  },
]

const categoryColors: Record<string, string> = {
  'Product Update': 'text-[#f4a65d] bg-[#f4a65d]/20',
  'Press Release': 'text-emerald-400 bg-emerald-400/20',
  'Technical Article': 'text-sky-400 bg-sky-400/20',
  Events: 'text-violet-400 bg-violet-400/20',
}

const headerAccents: Record<string, string> = {
  'Product Update': 'from-[#0f2a4a] to-[#1a3d6b]',
  'Press Release': 'from-[#0f2a4a] to-[#0d3b2f]',
  'Technical Article': 'from-[#0f2a4a] to-[#0c2a40]',
  Events: 'from-[#0f2a4a] to-[#1e1a4a]',
}

const filterToCategory: Record<string, string> = {
  'Press Releases': 'Press Release',
  'Product Updates': 'Product Update',
  'Technical Articles': 'Technical Article',
  Events: 'Events',
}

export default function NewsClient() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [nlEmail, setNlEmail] = useState('')
  const [nlSuccess, setNlSuccess] = useState(false)

  const visible =
    activeFilter === 'All'
      ? articles
      : articles.filter((a) => a.category === filterToCategory[activeFilter])

  function handleSubscribe() {
    if (!nlEmail) return
    setTimeout(() => {
      setNlSuccess(true)
    }, 700)
  }

  return (
    <>
      {/* FILTER BAR */}
      <div className="sticky top-[72px] z-30 bg-white border-b border-[#e8edf2] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
          <div className="flex gap-2 overflow-x-auto py-3 no-scrollbar">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                aria-pressed={f === activeFilter}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                  f === activeFilter
                    ? 'bg-[#0f2a4a] text-white border-[#0f2a4a]'
                    : 'bg-white text-[#566677] border-[#e8edf2] hover:border-[#0f2a4a] hover:text-[#0f2a4a]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ARTICLES GRID */}
      <section className="bg-[#f7f9fc] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
          {visible.length === 0 ? (
            <p className="text-[#566677] text-center py-12">No articles in this category yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((article) => {
                const card = (
                  <div
                    className={`bg-white border border-[#e8edf2] rounded-xl overflow-hidden hover:shadow-lg transition-all group ${
                      article.href ? 'cursor-pointer' : ''
                    }`}
                  >
                    {/* Card header */}
                    <div
                      className={`bg-gradient-to-br ${
                        headerAccents[article.category] ?? 'from-[#0f2a4a] to-[#1a3d6b]'
                      } px-6 py-8 relative h-32`}
                    >
                      <span
                        className={`absolute top-4 left-4 text-xs font-semibold px-2.5 py-1 rounded-full ${
                          categoryColors[article.category]
                        }`}
                      >
                        {article.category}
                      </span>
                      <span className="absolute bottom-4 left-6 text-[#8ab4d4] text-xs">
                        {article.date}
                      </span>
                    </div>

                    {/* Card body */}
                    <div className="p-6">
                      <h3 className="font-black text-[#0f2a4a] text-base leading-snug group-hover:text-[#f4a65d] transition-colors mb-2">
                        {article.title}
                      </h3>
                      <p className="text-[#566677] text-sm line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                      {article.href ? (
                        <p className="text-[#f4a65d] text-sm font-semibold mt-4 flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read More <ArrowRight className="w-3.5 h-3.5" />
                        </p>
                      ) : (
                        <p className="text-[#94aabb] text-xs mt-4">Full article coming soon</p>
                      )}
                    </div>
                  </div>
                )

                return article.href ? (
                  <Link key={article.title} href={article.href}>
                    {card}
                  </Link>
                ) : (
                  <div key={article.title}>{card}</div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="bg-[#0f2a4a] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 text-center">
          <h2 className="text-white font-black text-3xl mb-3">Stay Up to Date</h2>
          <p className="text-[#94aabb] mb-8 max-w-md mx-auto leading-relaxed text-sm">
            Subscribe to receive the latest Cosasco product news, technical articles, and event
            announcements directly in your inbox.
          </p>
          {nlSuccess ? (
            <p className="text-[#f4a65d] font-semibold text-base">
              You&apos;re subscribed! Thanks for signing up.
            </p>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                value={nlEmail}
                onChange={(e) => setNlEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-[#8ab4d4] focus:outline-none focus:border-[#f4a65d] text-sm"
              />
              <button
                onClick={handleSubscribe}
                className="bg-[#f4a65d] hover:bg-[#d4892a] text-white font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap text-sm"
              >
                Subscribe
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
