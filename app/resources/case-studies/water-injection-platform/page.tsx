import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Water Injection Wells Case Study | Cosasco',
  description: 'How Cosasco standardized corrosion monitoring across 23 water injection wells for a Middle East NOC, cutting inhibitor spend by 40%.',
}

const results = [
  { stat: '23', label: 'Wells consistently monitored' },
  { stat: '40%', label: 'Reduction in inhibitor spend' },
  { stat: '100%', label: 'Portfolio standardization achieved' },
  { stat: '6mo', label: 'Full deployment timeline' },
]

const relatedProducts = [
  { name: 'Corrosion Coupons', href: '/products/corrosion-coupons', desc: 'Weight-loss analysis across multiple wells' },
  { name: 'Quill Assemblies', href: '/products/quill-assembly', desc: 'Precise chemical injection delivery' },
  { name: 'Microcor® Wireless', href: '/products/data-acquisition', desc: 'Wireless data acquisition' },
]

export default function WaterInjectionPlatformPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-[#0f2a4a] pt-[72px] pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="text-[#5a7a94] text-sm mb-6 flex flex-wrap gap-1 items-center">
            <Link href="/resources" className="hover:text-[#f4a65d] transition-colors">Resources</Link>
            <span className="mx-1">/</span>
            <Link href="/resources/case-studies" className="hover:text-[#f4a65d] transition-colors">Case Studies</Link>
            <span className="mx-1">/</span>
            <span className="text-white">Water Injection Wells</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-5">
            {['Upstream Oil & Gas', 'Corrosion Coupons', 'Chemical Injection'].map((tag) => (
              <span key={tag} className="bg-[#f4a65d]/20 text-[#f4a65d] text-xs font-semibold px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight max-w-4xl">
            Scaling Corrosion Monitoring Across 23 Water Injection Wells
          </h1>
        </div>
      </section>

      {/* BODY */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-[#0f2a4a] font-black text-2xl mb-4">The Challenge</h2>
                <p className="text-[#566677] leading-relaxed mb-4">
                  A national oil company in the Middle East operating 23 seawater injection wells across two offshore platforms had accumulated years of inconsistent corrosion data. Different service providers, varying coupon retrieval schedules, and non-standardized coupon materials meant the integrity team could not reliably compare corrosion rates across the portfolio or make defensible decisions about inhibitor dosing.
                </p>
                <p className="text-[#566677] leading-relaxed mb-4">
                  Oxygen ingress and sulfate-reducing bacteria (SRB) were identified as the primary corrosion drivers. Without a standardized baseline, the operator defaulted to conservative over-dosing of biocide and oxygen scavenger - spending significantly more on chemicals than the actual corrosion threat warranted, while still lacking confidence in the data.
                </p>
                <p className="text-[#566677] leading-relaxed">
                  The integrity team needed a standardized, comparable corrosion monitoring program across all 23 wells with centralized data management - and needed it deployable within a six-month maintenance window.
                </p>
              </div>

              <div>
                <h2 className="text-[#0f2a4a] font-black text-2xl mb-4">The Cosasco Solution</h2>
                <p className="text-[#566677] leading-relaxed mb-4">
                  Cosasco designed a standardized corrosion coupon program covering all 23 injection wells. A single coupon rack design - using L-80 carbon steel and 316L stainless steel coupons - was specified across all locations, eliminating the material variability that had made cross-well comparisons meaningless.
                </p>
                <p className="text-[#566677] leading-relaxed mb-4">
                  Cosasco quill assemblies with integral check valves were installed at each well for biocide and oxygen scavenger injection, replacing a mix of legacy equipment with a single, maintainable standard. All chemical injection rates were sized to actual well flow conditions rather than conservative blanket rates.
                </p>
                <p className="text-[#566677] leading-relaxed mb-4">
                  Microcor® Wireless was deployed to all field technicians, replacing paper-based coupon retrieval records. Weight-loss data, inspection photographs, and condition notes were captured digitally at the wellhead and automatically synced to CDO cloud portfolio dashboard, giving the integrity team a real-time portfolio view for the first time.
                </p>
                <ul className="space-y-3">
                  {[
                    'Standardized coupon racks: L-80 and 316L coupons, identical geometry across all 23 wells',
                    'Cosasco quill assemblies with integral check valves, sized per well flowrate',
                    'Microcor® Wireless for digital coupon retrieval records and photo documentation',
                    'CDO cloud portfolio dashboard: corrosion rate trends per well, per platform, aggregate',
                    'Cosasco corrosion engineer quarterly review of chemical injection optimization',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#566677] text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#f4a65d] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-[#0f2a4a] font-black text-2xl mb-6">Results</h2>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {results.map((r) => (
                    <div key={r.label} className="bg-[#f0f4f8] rounded-xl p-6 text-center">
                      <div className="text-[#f4a65d] font-black text-4xl mb-2">{r.stat}</div>
                      <div className="text-[#566677] text-sm leading-snug">{r.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-[#566677] leading-relaxed">
                  With actual corrosion rate data from standardized coupons, the integrity team was able to right-size chemical injection across the portfolio. Average biocide dosing fell 35% and oxygen scavenger fell 44% - without any increase in observed corrosion rates. The operator achieved full ROI on the program investment within nine months through chemical cost savings alone.
                </p>
              </div>

              <blockquote className="border-l-4 border-[#f4a65d] pl-6 py-2">
                <p className="text-[#0f2a4a] text-lg font-medium italic leading-relaxed mb-3">
                  &ldquo;For the first time, we can look at corrosion data from every well in the portfolio on a single screen and make decisions with confidence. The standardization Cosasco brought us was worth as much as the hardware.&rdquo;
                </p>
                <footer className="text-[#566677] text-sm font-semibold">
                  - Corrosion & Integrity Lead, Middle East NOC
                </footer>
              </blockquote>

              <div>
                <h2 className="text-[#0f2a4a] font-black text-2xl mb-5">Products Used</h2>
                <div className="grid gap-4">
                  {relatedProducts.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="flex items-center justify-between border border-[#e8edf2] rounded-xl p-5 hover:border-[#f4a65d] hover:shadow-sm transition-all group"
                    >
                      <div>
                        <p className="text-[#0f2a4a] font-bold group-hover:text-[#f4a65d] transition-colors">{p.name}</p>
                        <p className="text-[#566677] text-sm mt-0.5">{p.desc}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#8898aa] group-hover:text-[#f4a65d] transition-colors flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#f0f4f8] rounded-xl p-6 sticky top-[90px]">
                <h3 className="text-[#0f2a4a] font-black text-lg mb-5">Project Overview</h3>
                <dl className="space-y-4">
                  {[
                    { dt: 'Client', dd: 'Middle East National Oil Company' },
                    { dt: 'Location', dd: 'Arabian Gulf, Offshore' },
                    { dt: 'Wells Covered', dd: '23 injection wells' },
                    { dt: 'Platforms', dd: '2 offshore platforms' },
                    { dt: 'Challenge', dd: 'O₂ and SRB corrosion, inconsistent data' },
                    { dt: 'Deployment', dd: '6-month maintenance window' },
                    { dt: 'Coupon Cycle', dd: '30-day retrieval program' },
                  ].map(({ dt, dd }) => (
                    <div key={dt} className="border-b border-[#e8edf2] pb-4 last:border-0 last:pb-0">
                      <dt className="text-[#8898aa] text-xs font-semibold uppercase tracking-wider mb-1">{dt}</dt>
                      <dd className="text-[#0f2a4a] font-semibold text-sm">{dd}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0f2a4a] py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white font-black text-3xl mb-4">Ready to standardize your monitoring program?</h2>
          <p className="text-[#94aabb] mb-8">Talk to a Cosasco upstream specialist about your injection system.</p>
          <Link
            href="/contact"
            className="inline-block bg-[#f4a65d] hover:bg-[#d4892a] text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  )
}
