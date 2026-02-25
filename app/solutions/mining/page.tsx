import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight, Phone, Mail, FileDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mining & Minerals Corrosion Monitoring | Cosasco',
  description:
    'Erosion-corrosion monitoring solutions for ore slurry, acid mine drainage, and leach circuit environments. Cosasco abrasion-resistant probes and chemical injection systems extend equipment life in the world\'s most aggressive mineral processing conditions.',
}

const challenges = [
  {
    title: 'Ore Slurry Abrasion & Erosion',
    body: 'Hydrotransport pipelines and mill circuit equipment carry high-velocity slurries of abrasive ore particles that combine mechanical erosion with electrochemical corrosion. The synergistic erosion-corrosion mechanism attacks pipe walls at rates far exceeding either mechanism alone; making dedicated erosion-corrosion probes essential for accurate wall-loss monitoring.',
  },
  {
    title: 'Acid Mine Drainage Extremes',
    body: 'Oxidation of sulfide minerals generates sulfuric acid that lowers drainage pH to levels approaching 2, attacking structural steelwork, sumps, and water-handling circuits. Without continuous pH-correlated corrosion monitoring and targeted chemical dosing, AMD environments consume metal rapidly and unpredictably, driving unplanned shutdowns in dewatering and tailings systems.',
  },
  {
    title: 'Leach Circuit Aggressive Chemistry',
    body: 'Heap leach and tank leach circuits for copper, gold, and uranium use concentrated sulfuric acid, cyanide, or ammonium solutions that aggressively attack carbon steel and even stainless alloys. Process upsets can shift chemistry rapidly; requiring real-time ER probe data to detect corrosion rate changes before equipment integrity is compromised.',
  },
]

const products = [
  {
    name: 'Erosion-Corrosion Probe Systems',
    desc: 'Dual-element ER probes quantify both erosion and corrosion wall loss simultaneously in slurry pipelines and pump casings. Available in abrasion-resistant tungsten carbide and ceramic-tipped configurations rated to 6,000 psi.',
    href: '/products/erosion-monitoring',
  },
  {
    name: 'ER Corrosion Monitoring',
    desc: 'Continuous electrical-resistance corrosion rate measurement in leach circuits and AMD drainage networks. Retractable and fixed designs allow hot installation without process shutdown.',
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Chemical Injection Systems',
    desc: 'Precision dosing of scale inhibitors, pH neutralizers, and corrosion inhibitors into process streams. Hastelloy C276 and titanium wetted parts withstand highly acidic leach and AMD chemistries.',
    href: '/products/chemical-injection',
  },
  {
    name: 'Microcor® Wireless Loggers',
    desc: 'Real-time probe data from remote tailings lines and in-pit monitoring points transmitted wirelessly to SCADA; no cable runs required across active mine areas.',
    href: '/products/data-acquisition',
  },
]

const relatedIndustries = [
  { name: 'Chemical Processing', href: '/solutions/chemical-processing' },
  { name: 'Water Treatment', href: '/solutions/water-treatment' },
  { name: 'Oil & Gas', href: '/solutions/oil-gas' },
]

export default function MiningPage() {
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
            <span className="text-[#1e2b3a] font-medium">Mining &amp; Minerals</span>
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
              Mining &amp; Minerals
            </h1>
            <p className="text-[#8ab4d4] text-lg md:text-xl leading-relaxed max-w-2xl">
              Erosion-corrosion monitoring for the world&apos;s most abrasive environments: ore slurry
              hydrotransport, acid mine drainage, and aggressive leach circuits. Cosasco abrasion-resistant
              probes and chemical injection systems protect mineral processing infrastructure and extend
              equipment life where conventional monitoring fails.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main 2-col layout ── */}
      <div className="cx py-16 md:py-20">
        <div className="lg:grid lg:grid-cols-3 gap-12">

          {/* ── MAIN CONTENT (col-span-2) ── */}
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
                    <Link
                      href={p.href}
                      className="text-[#f4a65d] text-sm font-semibold flex items-center gap-1 mt-auto"
                    >
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
                <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-2">South American Copper Producer</p>
                <h4 className="text-xl font-black text-white mb-4">
                  Erosion-Corrosion Probe Network Reduces Slurry Pipeline Failures
                </h4>
                <p className="text-[#8ab4d4] text-sm leading-relaxed mb-8">
                  A major copper concentrator in Chile deployed Cosasco abrasion-resistant dual-element
                  ER probes across 22 monitoring points on the 18-kilometer hydrotransport pipeline
                  carrying copper concentrate slurry at 4 m/s. The system replaced reactive shutdown-driven
                  inspections with continuous wall-loss trending, enabling the integrity team to identify
                  high-erosion zones and schedule targeted pipe section replacements during planned maintenance
                  windows rather than emergency outages. Corrosion inhibitor dosing was also optimized using
                  real-time probe feedback, cutting chemical costs without sacrificing protection.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { value: '71%', label: 'Reduction in Unplanned Pipeline Shutdowns' },
                    { value: '34%', label: 'Decrease in Inhibitor Chemical Costs' },
                    { value: '18 months', label: 'Full Program ROI' },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                      <div className="text-3xl font-black text-[#f4a65d] mb-1">{s.value}</div>
                      <div className="text-[#8ab4d4] text-xs leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-[#8ab4d4] text-xs">
                  Source: Internal performance data, South American copper operations, 2023.
                  Results may vary by application and operating conditions.
                </p>
              </div>
            </section>
          </div>

          {/* ── SIDEBAR (col-span-1) ── */}
          <aside className="lg:col-span-1 mt-12 lg:mt-0 space-y-6">

            {/* Engineer contact card */}
            <div className="bg-[#0f2a4a] rounded-xl p-6 text-white">
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-3">Get Expert Guidance</p>
              <h3 className="font-black text-white text-lg mb-3">
                Speak with a Mining Specialist
              </h3>
              <p className="text-[#8ab4d4] text-sm leading-relaxed mb-5">
                Our corrosion engineers have deep experience in ore slurry, acid mine drainage,
                and hydrometallurgical processing environments. Contact us for a tailored monitoring
                and chemical treatment recommendation.
              </p>
              <div className="space-y-3 mb-5">
                <a href="tel:+15629490123" className="flex items-center gap-2 text-[#8ab4d4] text-sm hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-[#f4a65d] flex-shrink-0" />
                  +1 (562) 949-0123
                </a>
                <a href="mailto:mining@cosasco.com" className="flex items-center gap-2 text-[#8ab4d4] text-sm hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-[#f4a65d] flex-shrink-0" />
                  mining@cosasco.com
                </a>
              </div>
              <Link href="/contact" className="btn btn-primary w-full justify-center text-sm">
                Contact an Expert
              </Link>
            </div>

            {/* Download */}
            <div className="bg-white border border-[#e8edf2] rounded-xl p-5">
              <FileDown className="w-6 h-6 text-[#f4a65d] mb-3" />
              <h3 className="font-black text-[#0f2a4a] text-sm mb-2">
                Mining Application Guide PDF
              </h3>
              <p className="text-[#566677] text-xs leading-relaxed mb-4">
                Probe material selection guide, erosion-corrosion monitoring best practices, and
                recommended chemical injection programs for slurry, AMD, and leach circuit applications.
              </p>
              <Link href="/resources" className="btn btn-outline-navy w-full justify-center text-sm">
                Download PDF
              </Link>
            </div>

            {/* Related industries */}
            <div className="bg-white border border-[#e8edf2] rounded-xl p-5">
              <h3 className="font-black text-[#0f2a4a] text-sm mb-4">Related Industries</h3>
              <ul className="space-y-2">
                {relatedIndustries.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className="flex items-center gap-2 text-sm text-[#566677] hover:text-[#f4a65d] transition-colors font-medium"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-[#f4a65d]" />
                      {r.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="border-t border-[#e8edf2] mt-4 pt-4">
                <Link
                  href="/solutions"
                  className="flex items-center gap-1.5 text-sm text-[#566677] hover:text-[#0f2a4a] transition-colors"
                >
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
