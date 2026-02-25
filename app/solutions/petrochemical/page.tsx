import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight, Phone, Mail, FileDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Petrochemical Corrosion Solutions | Cosasco',
  description:
    'Cosasco high-temperature ER probes, flush-mount fittings, and chemical injection systems protect refineries and petrochemical plants from sulfidic corrosion, naphthenic acid attack, and coke erosion.',
}

const challenges = [
  {
    title: 'Sulfidic & Naphthenic Acid Corrosion',
    body: 'High-temperature sulfidic corrosion above 450°F and naphthenic acid attack in crude distillation units cause severe localized wall loss in furnace transfer lines, heat exchangers, and column internals. Cosasco high-temperature ER probes with ceramic-insulated elements provide continuous corrosion rate data in environments that destroy conventional sensors.',
  },
  {
    title: 'Coke Deposition & Erosion-Corrosion',
    body: 'Coke deposits in FCC units and thermal cracker transfer lines create underdeposit corrosion and localized erosion at bends and tees. Retractable Cosasco probe assemblies allow safe inspection at operating temperature and pressure, providing quantitative wall-loss data to support run-length extension decisions.',
  },
  {
    title: 'Turnaround Optimization',
    body: 'Extending turnaround intervals from 18 to 36 months can save refineries tens of millions in maintenance and lost production. Continuous ER probe data and corrosion coupon programs provide the documented corrosion rate trends that integrity engineers and regulators need to justify extended inspection intervals.',
  },
]

const products = [
  {
    name: 'High-Temperature ER Probes',
    desc: 'Ceramic-insulated ER probe elements rated for continuous service above 450°F. Retractable configurations enable safe removal at operating conditions without hot work.',
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Flush-Mount Access Fittings',
    desc: 'Low-profile weld-on fittings for probe and coupon access in high-velocity process streams. Full-bore designs minimize turbulence and flow restriction in transfer lines.',
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Intrusive Corrosion Coupons',
    desc: 'Weighted and strip coupons in alloy materials matched to process fluid chemistry. Full traceability documentation for PSM compliance and inspection audit trails.',
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Chemical Injection Systems',
    desc: 'Precision corrosion inhibitor and neutralizer injection for crude column overhead and atmospheric distillation units. Hastelloy and titanium wetted components for high-acid-number service.',
    href: '/products/chemical-injection',
  },
]

const relatedIndustries = [
  { name: 'Oil & Gas', href: '/solutions/oil-gas' },
  { name: 'Chemical Processing', href: '/solutions/chemical-processing' },
  { name: 'Utilities', href: '/solutions/utilities' },
]

export default function PetrochemicalPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Breadcrumb ── */}
      <div className="bg-[#f7f9fc] border-b border-[#e8edf2]">
        <div className="cx py-3">
          <nav className="flex items-center gap-2 text-sm text-[#566677]">
            <Link href="/" className="hover:text-[#0f2a4a] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/solutions" className="hover:text-[#0f2a4a] transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#1e2b3a] font-medium">Petrochemical</span>
          </nav>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-[#0f2a4a] text-white overflow-hidden">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#f4a65d]" aria-hidden="true" />
        <div className="cx relative py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-4">Industry Solutions</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Petrochemical Solutions
            </h1>
            <p className="text-[#8ab4d4] text-lg md:text-xl leading-relaxed max-w-2xl">
              Refineries, cracking units, and heat exchangers operating at extreme temperatures -
              Cosasco high-temperature monitoring systems protect your most critical assets
              without interrupting process continuity.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main 2-col layout ── */}
      <div className="cx py-16 md:py-20">
        <div className="lg:grid lg:grid-cols-3 gap-12">

          {/* ── MAIN CONTENT ── */}
          <div className="lg:col-span-2 space-y-16">

            {/* Key Challenges */}
            <section>
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-2">What We Solve</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#0f2a4a] mb-6">Key Challenges</h2>
              <div className="bg-[#f7f9fc] rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {challenges.map((ch) => (
                    <div key={ch.title} className="bg-white border border-[#e8edf2] rounded-xl p-5">
                      <div className="w-2 h-2 rounded-full bg-[#f4a65d] mb-4" />
                      <h3 className="font-black text-[#0f2a4a] text-base mb-3">{ch.title}</h3>
                      <p className="text-[#566677] text-sm leading-relaxed">{ch.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Recommended Solutions */}
            <section>
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-2">Product Recommendations</p>
              <h3 className="text-2xl md:text-3xl font-black text-[#0f2a4a] mb-6">Recommended Solutions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {products.map((p) => (
                  <div key={p.name} className="bg-white border border-[#e8edf2] rounded-xl p-6 hover:shadow-lg hover:border-[#f4a65d] transition-all group flex flex-col">
                    <h4 className="font-black text-[#0f2a4a] text-base mb-2 group-hover:text-[#f4a65d] transition-colors">{p.name}</h4>
                    <p className="text-[#566677] text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
                    <Link href={p.href} className="text-[#f4a65d] text-sm font-semibold flex items-center gap-1 mt-auto">
                      View Product <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* Case Study */}
            <section>
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-2">Proven Results</p>
              <h3 className="text-2xl md:text-3xl font-black text-[#0f2a4a] mb-6">Case Study</h3>
              <div className="bg-[#0f2a4a] rounded-xl p-8 text-white">
                <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-2">Gulf Coast Refinery</p>
                <h4 className="text-xl font-black text-white mb-4">
                  High-Temp ER Probes Enable Turnaround Extension at Crude Unit
                </h4>
                <p className="text-[#8ab4d4] text-sm leading-relaxed mb-8">
                  A major Gulf Coast refinery deployed Cosasco high-temperature ER probes
                  at 12 locations on the crude distillation unit overhead system and transfer
                  lines. Continuous corrosion rate trending over 24 months provided the
                  documented evidence required to extend the unit turnaround interval from
                  18 to 30 months, avoiding a planned shutdown and delivering substantial savings.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { value: '30 mo', label: 'Extended Turnaround Interval' },
                    { value: '41%', label: 'Reduction in Corrosion Events' },
                    { value: '$2.4M', label: 'Avoided Shutdown Cost' },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                      <div className="text-3xl font-black text-[#f4a65d] mb-1">{s.value}</div>
                      <div className="text-[#8ab4d4] text-xs leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-[#8ab4d4] text-xs">
                  Source: Internal performance data, Gulf Coast refinery operator, 2023. Results may vary.
                </p>
              </div>
            </section>
          </div>

          {/* ── SIDEBAR ── */}
          <aside className="lg:col-span-1 mt-12 lg:mt-0 space-y-6">
            <div className="bg-[#0f2a4a] rounded-xl p-6 text-white">
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-3">Get Expert Guidance</p>
              <h3 className="font-black text-white text-lg mb-3">Speak with a Petrochemical Specialist</h3>
              <p className="text-[#8ab4d4] text-sm leading-relaxed mb-5">
                Our application engineers understand refinery process chemistry, turnaround
                planning, and inspection compliance requirements.
              </p>
              <div className="space-y-3 mb-5">
                <a href="tel:+15629490123" className="flex items-center gap-2 text-[#8ab4d4] text-sm hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-[#f4a65d] flex-shrink-0" />
                  +1 (562) 949-0123
                </a>
                <a href="mailto:petrochem@cosasco.com" className="flex items-center gap-2 text-[#8ab4d4] text-sm hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-[#f4a65d] flex-shrink-0" />
                  petrochem@cosasco.com
                </a>
              </div>
              <Link href="/contact" className="btn btn-primary w-full justify-center text-sm">
                Contact an Expert
              </Link>
            </div>

            <div className="bg-white border border-[#e8edf2] rounded-xl p-5">
              <FileDown className="w-6 h-6 text-[#f4a65d] mb-3" />
              <h3 className="font-black text-[#0f2a4a] text-sm mb-2">Petrochemical Application Guide PDF</h3>
              <p className="text-[#566677] text-xs leading-relaxed mb-4">
                High-temperature probe selection, installation requirements, and corrosion
                program recommendations for refinery and petrochemical environments.
              </p>
              <Link href="/resources" className="btn btn-outline-navy w-full justify-center text-sm">
                Download PDF
              </Link>
            </div>

            <div className="bg-white border border-[#e8edf2] rounded-xl p-5">
              <h3 className="font-black text-[#0f2a4a] text-sm mb-4">Related Industries</h3>
              <ul className="space-y-2">
                {relatedIndustries.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="flex items-center gap-2 text-sm text-[#566677] hover:text-[#f4a65d] transition-colors font-medium">
                      <ArrowRight className="w-3.5 h-3.5 text-[#f4a65d]" />
                      {r.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="border-t border-[#e8edf2] mt-4 pt-4">
                <Link href="/solutions" className="flex items-center gap-1.5 text-sm text-[#566677] hover:text-[#0f2a4a] transition-colors">
                  <ChevronRight className="w-3.5 h-3.5" />
                  View All Industries
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
