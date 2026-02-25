import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight, Phone, Mail, FileDown, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Oil & Gas Corrosion Solutions | Cosasco',
  description:
    'Cosasco ER probes, chemical injection quills, and access fittings protect upstream wellheads, midstream pipelines, and downstream refinery units from H2S, CO2, and produced-water corrosion.',
}

const challenges = [
  {
    title: 'Pipeline Internal Corrosion',
    body: 'H₂S and CO₂ dissolved in produced water drive aggressive internal corrosion in gathering lines and long-haul transmission systems. Localized pitting under deposits, microbiologically influenced corrosion (MIC), and flow-velocity-driven erosion-corrosion threaten structural integrity and regulatory compliance across the pipeline network.',
  },
  {
    title: 'Production Equipment Integrity',
    body: 'Separators, treaters, heat exchangers, and ESP systems operate continuously in sour produced-water environments. Cyclic process upsets and high-velocity flow at inlets cause localized attack that periodic inspection alone cannot catch in time — making real-time ER probe data essential for proactive integrity management.',
  },
  {
    title: 'Chemical Dosing Optimization',
    body: 'Over-dosing inhibitors wastes capital; under-dosing risks failures that cost orders of magnitude more. Cosasco chemical injection systems pair precision-engineered quills and integral check valves with real-time ER probe feedback, enabling operators to optimize dosing rates continuously based on actual corrosion response.',
  },
]

const products = [
  {
    name: 'ER Probe Systems',
    desc: 'Continuous real-time corrosion-rate measurement in high-pressure sour service. Retractable and fixed configurations, compatible with Microcor® wireless loggers.',
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Chemical Injection Quills',
    desc: 'Precision inhibitor and biocide delivery into flowing pipelines. Full-port and angled-tip styles in 316SS, Hastelloy C276, and titanium with integral check valves.',
    href: '/products/chemical-injection',
  },
  {
    name: 'Microcor® Wireless Loggers',
    desc: 'Real-time corrosion data from remote pipeline monitoring points — SCADA-compatible, cloud-connected, and hazardous-area certified.',
    href: '/products/data-acquisition',
  },
  {
    name: 'Access Fittings',
    desc: 'Hot-tap weld-on and threaded fittings for safe probe and coupon installation without process shutdown. Full material traceability on all pressure-containing parts.',
    href: '/products/corrosion-monitoring',
  },
]

const relatedIndustries = [
  { name: 'Petrochemical', href: '/solutions/petrochemical' },
  { name: 'Water Treatment', href: '/solutions/water-treatment' },
  { name: 'Chemical Processing', href: '/solutions/chemical-processing' },
]

export default function OilGasPage() {
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
            <span className="text-[#1e2b3a] font-medium">Oil &amp; Gas</span>
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
              Oil &amp; Gas Solutions
            </h1>
            <p className="text-[#8ab4d4] text-lg md:text-xl leading-relaxed max-w-2xl">
              Upstream, midstream, and downstream corrosion management — from wellhead chemistry
              to pipeline integrity monitoring. Cosasco has protected oil and gas infrastructure
              on six continents for over 70 years.
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
                <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-2">Gulf Coast Pipeline Operator</p>
                <h4 className="text-xl font-black text-white mb-4">
                  ER Probe Network Enables Condition-Based Treatment
                </h4>
                <p className="text-[#8ab4d4] text-sm leading-relaxed mb-8">
                  A major Gulf Coast pipeline operator deployed Cosasco retractable ER probes
                  across 17 monitoring stations on a 340-mile crude oil transmission line.
                  Real-time corrosion data replaced monthly manual coupon retrieval, enabling
                  the integrity team to correlate corrosion rate spikes with batch fluid chemistry
                  changes and optimize inhibitor dosing accordingly. Within 14 months the program
                  delivered measurable improvements across every tracked metric.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { value: '63%', label: 'Reduction in Corrosion Failures' },
                    { value: '28%', label: 'Decrease in Inhibitor Costs' },
                    { value: '14 months', label: 'Full Program ROI' },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                      <div className="text-3xl font-black text-[#f4a65d] mb-1">{s.value}</div>
                      <div className="text-[#8ab4d4] text-xs leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-[#8ab4d4] text-xs">
                  Source: Internal performance data, Gulf Coast midstream operator, 2023.
                  Results may vary by application and operating conditions.
                </p>
              </div>
            </section>
          </div>


            {/* Upstream */}
            <section id="upstream" className="scroll-mt-24">
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-2">Upstream</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#0f2a4a] mb-4">Upstream Oil &amp; Gas</h2>
              <div className="bg-[#f7f9fc] border border-[#e8edf2] rounded-xl p-7">
                <p className="text-[#566677] text-sm leading-relaxed mb-4">
                  Wellheads, production tubing, separators, and water injection systems operate in aggressive sour service from day one. Cosasco retractable ER probes and chemical injection quills provide real-time corrosion intelligence and precise inhibitor delivery at every critical point — from the wellhead to the production manifold.
                </p>
                <ul className="space-y-2">
                  {[
                    'Retractable ER probes for high-pressure sour wellhead service',
                    'Chemical injection quills with integral check valves for H₂S and CO₂ scavengers',
                    'Downhole Corrosion Monitoring System (DCMS™) for production tubing integrity',
                    'SCADA-compatible Microcor® wireless loggers for remote field deployment',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#566677]">
                      <CheckCircle className="w-4 h-4 text-[#f4a65d] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Midstream */}
            <section id="midstream" className="scroll-mt-24">
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-2">Midstream</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#0f2a4a] mb-4">Midstream &amp; Pipelines</h2>
              <div className="bg-[#f7f9fc] border border-[#e8edf2] rounded-xl p-7">
                <p className="text-[#566677] text-sm leading-relaxed mb-4">
                  Long-haul transmission lines, compressor stations, and gas processing facilities span thousands of miles and operate under continuous regulatory scrutiny. Cosasco access fittings, ER probe networks, and Microcor® wireless infrastructure deliver the density of monitoring data required for PHMSA-compliant integrity management programs.
                </p>
                <ul className="space-y-2">
                  {[
                    'Hot-tap weld-on access fittings for non-shutdown probe installation on live pipelines',
                    'Fixed and retractable ER probes rated for ANSI Class 1500 and above',
                    'Microcor® wireless transmitters for cost-effective remote monitoring across dispersed stations',
                    'Inhibitor injection quills engineered for full-bore high-velocity gas service',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#566677]">
                      <CheckCircle className="w-4 h-4 text-[#f4a65d] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Downstream */}
            <section id="downstream" className="scroll-mt-24">
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-2">Downstream</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#0f2a4a] mb-4">Downstream &amp; Refining</h2>
              <div className="bg-[#f7f9fc] border border-[#e8edf2] rounded-xl p-7">
                <p className="text-[#566677] text-sm leading-relaxed mb-4">
                  Crude distillation units, hydrotreaters, FCC units, and storage tanks present some of the most complex corrosion environments in the industry — high temperatures, naphthenic acid, ammonium bisulfide, and chloride attack all require targeted monitoring strategies. Cosasco provides fixed ER probes, corrosion coupons, and LPR probes specifically qualified for refinery service.
                </p>
                <ul className="space-y-2">
                  {[
                    'Fixed process ER probes for CDU overhead and hydroprocessing units',
                    'LPR probes for aqueous phase corrosion rate measurement in refinery streams',
                    'Corrosion coupon assemblies for heat exchanger and storage tank monitoring',
                    'Chemical injection systems for neutralizer and filming-amine delivery in overhead circuits',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#566677]">
                      <CheckCircle className="w-4 h-4 text-[#f4a65d] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

          {/* ── SIDEBAR (col-span-1) ── */}
          <aside className="lg:col-span-1 mt-12 lg:mt-0 space-y-6">

            {/* Engineer contact card */}
            <div className="bg-[#0f2a4a] rounded-xl p-6 text-white">
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-3">Get Expert Guidance</p>
              <h3 className="font-black text-white text-lg mb-3">
                Speak with an Oil &amp; Gas Specialist
              </h3>
              <p className="text-[#8ab4d4] text-sm leading-relaxed mb-5">
                Our NACE-certified corrosion engineers will assess your pipeline or facility
                and recommend the right monitoring and treatment strategy.
              </p>
              <div className="space-y-3 mb-5">
                <a href="tel:+15629490123" className="flex items-center gap-2 text-[#8ab4d4] text-sm hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-[#f4a65d] flex-shrink-0" />
                  +1 (562) 949-0123
                </a>
                <a href="mailto:oilgas@cosasco.com" className="flex items-center gap-2 text-[#8ab4d4] text-sm hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-[#f4a65d] flex-shrink-0" />
                  oilgas@cosasco.com
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
                Oil &amp; Gas Application Guide PDF
              </h3>
              <p className="text-[#566677] text-xs leading-relaxed mb-4">
                Product selection guide, installation specs, and recommended monitoring
                programs for upstream, midstream, and downstream applications.
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
