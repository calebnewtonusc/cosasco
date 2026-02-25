import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'New Retractable ER Probe for High-Pressure Applications | Cosasco News',
  description:
    'Cosasco introduces a fully retractable electrical resistance probe rated for pressures up to 3,000 PSI, enabling safe in-service retrieval without process shutdown.',
}

export default function RetractableERProbePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-[#0f2a4a] pt-[72px] pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="text-[#5a7a94] text-sm mb-6 flex flex-wrap gap-1 items-center">
            <Link href="/news" className="hover:text-[#f4a65d] transition-colors">
              News &amp; Insights
            </Link>
            <span className="mx-1">/</span>
            <span className="text-white">Retractable ER Probe</span>
          </nav>
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#f4a65d]/20 text-[#f4a65d] mb-5">
            Product Update
          </span>
          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight max-w-4xl mb-5">
            New Retractable ER Probe for High-Pressure Applications
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#94aabb]">
            <span className="font-semibold text-white">Cosasco Engineering Team</span>
            <span className="text-[#3a5a74]">|</span>
            <span>January 8, 2026</span>
            <span className="text-[#3a5a74]">|</span>
            <span>5 min read</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2">
            <div className="text-[#566677] leading-relaxed space-y-6 text-[1.05rem]">
              <p className="text-xl text-[#0f2a4a] font-semibold leading-snug">
                Cosasco has released a new retractable electrical resistance (ER) probe designed
                specifically for high-pressure pipeline and vessel applications. Rated to 3,000 PSI
                (207 bar) at operating temperature, the probe enables safe, in-service element
                retrieval without process shutdown — eliminating the most operationally disruptive
                aspect of conventional ER monitoring programs.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                The Problem with Conventional ER Probes in High-Pressure Service
              </h2>
              <p>
                Electrical resistance probes are the workhorse of continuous corrosion monitoring,
                providing real-time metal loss data across virtually all fluid types. However,
                conventional fixed-insertion probes have a significant limitation: element
                replacement requires either a process shutdown or the use of a separate
                under-pressure retrieval tool — a specialist operation requiring certified personnel
                and typically only possible at pressure ratings below 1,500 PSI.
              </p>
              <p>
                For operators in high-pressure gas transmission, deep subsea topsides, and
                high-pressure injection systems, this has historically meant either extended
                monitoring gaps during turnarounds or costly specialist service mobilizations for
                routine element changes.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                Engineering the 3,000 PSI Solution
              </h2>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: Shield,
                    stat: '3,000 PSI',
                    label: 'Maximum working pressure rating (207 bar)',
                  },
                  {
                    icon: Zap,
                    stat: '150°C',
                    label: 'Maximum process temperature (302°F)',
                  },
                  {
                    icon: Settings,
                    stat: '< 5 min',
                    label: 'Element exchange time under full pressure',
                  },
                ].map(({ icon: Icon, stat, label }) => (
                  <div key={stat} className="bg-[#f0f4f8] border border-[#e8edf2] rounded-xl p-5 text-center">
                    <Icon className="w-6 h-6 text-[#f4a65d] mx-auto mb-3" />
                    <p className="text-[#0f2a4a] font-black text-2xl mb-2">{stat}</p>
                    <p className="text-[#566677] text-xs leading-relaxed">{label}</p>
                  </div>
                ))}
              </div>

              <p>
                The new probe uses a dual-seal retraction mechanism with a primary metal-to-metal
                seal and a secondary elastomeric backup, verified to API 6A PSL3 requirements.
                The retraction handle integrates a visual pressure indicator — a simple go/no-go
                check that confirms full seating before the access valve is closed.
              </p>
              <p>
                Probe bodies are available in 316L stainless steel, Alloy 625, and Duplex 2205 to
                cover the full range of process fluid corrosivity requirements from sweet service
                through H₂S-bearing sour service per NACE MR0175 / ISO 15156.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">Features at a Glance</h2>
              <ul className="space-y-3">
                {[
                  '3,000 PSI / 207 bar working pressure — suitable for high-pressure gas and liquid service',
                  'In-service element retrieval in under 5 minutes by a single technician',
                  'Compatible with all standard Cosasco ER element types (flush, tubular, cylindrical)',
                  'ATEX/IECEx Zone 1 certified body available for classified area installations',
                  'Full 1" NPT and flanged (150# through 900#) end connection options',
                  'Material certifications to EN 10204 3.1 available for all wetted components',
                  'Backward compatible with existing Cosasco Microcor® Wireless and standalone logger systems',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f4a65d] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">Operational Impact</h2>
              <p>
                For a typical midstream operator running 40–60 ER monitoring points on a
                high-pressure pipeline network, annual element replacement previously required
                either a partial shutdown or 4–6 specialist mobilizations per year. With the
                retractable probe, the same work is performed by regular field technicians during
                routine walk-arounds, with no process interruption and no specialist certification
                required beyond standard Cosasco retrieval tool training.
              </p>
              <p>
                Early adopters in gas transmission applications have reported a greater than 70%
                reduction in annual monitoring maintenance cost for ER-monitored sections when
                switching from fixed-insertion to the retractable design.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">Availability</h2>
              <p>
                The retractable ER probe is available now for order. Standard lead time is 4–6 weeks
                for 316L SS bodies; 6–10 weeks for alloy bodies. Custom pressure and temperature
                ratings, bespoke connection configurations, and NACE-compliant documentation
                packages are available — contact your Cosasco representative for a detailed
                specification review.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-[#0f2a4a] rounded-xl p-6 text-white">
              <p className="font-black text-lg mb-2">Request a Specification</p>
              <p className="text-[#94aabb] text-sm leading-relaxed mb-4">
                Get full technical specifications and pricing for the retractable ER probe system
                for your application.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-[#f4a65d] hover:bg-[#d4892a] text-white font-bold py-3 rounded-lg transition-colors text-sm"
              >
                Request Specs &amp; Pricing
              </Link>
            </div>

            <div className="bg-[#f0f4f8] border border-[#e8edf2] rounded-xl p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#566677] mb-4">
                Related Products
              </p>
              <ul className="space-y-3">
                {[
                  { href: '/products/er-probe', label: 'ER Probe Systems' },
                  { href: '/products/access-fittings', label: 'Access Fittings' },
                  { href: '/products/corrosion-monitoring', label: 'Corrosion Monitoring Overview' },
                  { href: '/services', label: 'Installation Services' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[#0f2a4a] text-sm font-medium hover:text-[#f4a65d] transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-[#f4a65d] flex-shrink-0" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-[#e8edf2] rounded-xl p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#566677] mb-4">
                Recent News
              </p>
              <ul className="space-y-4">
                {[
                  {
                    href: '/news/microcor-wireless-update',
                    title: 'Cosasco Introduces Microcor® Wireless Transmitter Updates',
                  },
                  {
                    href: '/news/industry-recognition-2025',
                    title: 'Cosasco Recognized as Leading Corrosion Monitor Supplier',
                  },
                ].map((a) => (
                  <li key={a.href} className="border-b border-[#e8edf2] pb-4 last:border-0 last:pb-0">
                    <Link
                      href={a.href}
                      className="text-sm text-[#0f2a4a] font-semibold hover:text-[#f4a65d] transition-colors leading-snug block"
                    >
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* BACK NAV */}
      <section className="bg-[#f0f4f8] border-t border-[#e8edf2] py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
          <Link
            href="/news"
            className="text-[#0f2a4a] font-semibold flex items-center gap-2 hover:text-[#f4a65d] transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to News
          </Link>
          <Link
            href="/news/industry-recognition-2025"
            className="text-[#0f2a4a] font-semibold flex items-center gap-2 hover:text-[#f4a65d] transition-colors text-sm"
          >
            Next: Industry Recognition 2025 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
