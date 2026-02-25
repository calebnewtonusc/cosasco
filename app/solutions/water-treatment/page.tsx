import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight, Phone, Mail, FileDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Water Treatment Corrosion Solutions | Cosasco',
  description:
    'Cosasco ER probes, coupon holders, and chemical dosing systems protect municipal water systems, industrial cooling loops, and wastewater facilities from MIC, pH attack, and scaling.',
}

const challenges = [
  {
    title: 'pH Fluctuation & Chemical Attack',
    body: 'Swings in pH from seasonal source water changes, coagulant overdose, or treatment upsets cause aggressive acidic or alkaline pipe attack in distribution networks. Cosasco bypass coupon assemblies and inline ER probes provide continuous corrosion rate data to alert operators before wall loss becomes critical.',
  },
  {
    title: 'Microbiologically Influenced Corrosion',
    body: 'MIC driven by sulfate-reducing bacteria and aerobic biofilm communities causes rapid localized pitting in low-velocity zones, dead legs, and stagnant sections of distribution and cooling systems. Cosasco MIC coupon holders with biological sampling ports provide simultaneous corrosion rate and microbial activity data at the same monitoring point.',
  },
  {
    title: 'Chemical Dosing Optimization',
    body: 'Scale inhibitors, corrosion inhibitors, and biocides must be dosed precisely to maintain protection without wasteful overdose. Cosasco precision chemical injection quills - sized for low-flow water systems - ensure complete dispersion of treatment chemicals into the process stream at every dosing point.',
  },
]

const products = [
  {
    name: 'Low-Profile ER Probes',
    desc: 'Compact ER probe designs for low-pressure water system flanges and threaded ports. Continuous corrosion rate measurement without process interruption.',
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Bypass Coupon Assemblies',
    desc: 'Side-stream coupon holders for periodic coupon retrieval and MIC sampling. Adjustable flow rates and multiple coupon positions in a single assembly.',
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Chemical Dosing Quills',
    desc: 'Low-pressure injection quills for water treatment chemical delivery. PVC and CPVC-compatible designs for potable and treated water applications.',
    href: '/products/chemical-injection',
  },
  {
    name: 'Microcor® Data Loggers',
    desc: 'Wireless and wired data loggers for remote corrosion monitoring across geographically distributed water infrastructure without dedicated fiber or SCADA wiring.',
    href: '/products/data-acquisition',
  },
]

const relatedIndustries = [
  { name: 'Oil & Gas', href: '/solutions/oil-gas' },
  { name: 'Utilities', href: '/solutions/utilities' },
  { name: 'Chemical Processing', href: '/solutions/chemical-processing' },
]

export default function WaterTreatmentPage() {
  return (
    <div className="min-h-screen bg-white">

      <div className="bg-[#f7f9fc] border-b border-[#e8edf2]">
        <div className="cx py-3">
          <nav className="flex items-center gap-2 text-sm text-[#566677]">
            <Link href="/" className="hover:text-[#0f2a4a] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/solutions" className="hover:text-[#0f2a4a] transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#1e2b3a] font-medium">Water Treatment</span>
          </nav>
        </div>
      </div>

      <section className="relative bg-[#0f2a4a] text-white overflow-hidden">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#f4a65d]" aria-hidden="true" />
        <div className="cx relative py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-4">Industry Solutions</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Water Treatment Solutions
            </h1>
            <p className="text-[#8ab4d4] text-lg md:text-xl leading-relaxed max-w-2xl">
              Municipal distribution networks, industrial cooling systems, and wastewater
              treatment facilities - Cosasco monitoring and dosing systems protect water
              infrastructure from MIC, pH attack, and chemical scaling.
            </p>
          </div>
        </div>
      </section>

      <div className="cx py-16 md:py-20">
        <div className="lg:grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">

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

            <section>
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-2">Proven Results</p>
              <h3 className="text-2xl md:text-3xl font-black text-[#0f2a4a] mb-6">Case Study</h3>
              <div className="bg-[#0f2a4a] rounded-xl p-8 text-white">
                <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-2">Municipal Water Utility - Southwest USA</p>
                <h4 className="text-xl font-black text-white mb-4">
                  Bypass Coupon Program Identifies MIC Source in Distribution System
                </h4>
                <p className="text-[#8ab4d4] text-sm leading-relaxed mb-8">
                  A southwestern US water utility deployed Cosasco bypass coupon assemblies
                  with integrated MIC sampling ports at 22 locations across their 380-mile
                  distribution network. Within 6 months, biological analysis on retrieved
                  coupons identified sulfate-reducing bacteria concentrations at five
                  dead-leg locations - enabling targeted biocide treatment and infrastructure
                  replacement that eliminated the corrosion risk before customer service disruptions occurred.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { value: '22', label: 'Monitoring Locations Deployed' },
                    { value: '5', label: 'MIC Hotspots Identified' },
                    { value: '6 mo', label: 'Time to Full Network Assessment' },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                      <div className="text-3xl font-black text-[#f4a65d] mb-1">{s.value}</div>
                      <div className="text-[#8ab4d4] text-xs leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-[#8ab4d4] text-xs">
                  Source: Internal performance data, Southwest municipal water utility, 2022. Results may vary.
                </p>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-1 mt-12 lg:mt-0 space-y-6">
            <div className="bg-[#0f2a4a] rounded-xl p-6 text-white">
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-3">Get Expert Guidance</p>
              <h3 className="font-black text-white text-lg mb-3">Speak with a Water Treatment Specialist</h3>
              <p className="text-[#8ab4d4] text-sm leading-relaxed mb-5">
                Our engineers understand municipal water system requirements, MIC control,
                and chemical treatment program design.
              </p>
              <div className="space-y-3 mb-5">
                <a href="tel:+15629490123" className="flex items-center gap-2 text-[#8ab4d4] text-sm hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-[#f4a65d] flex-shrink-0" />
                  +1 (562) 949-0123
                </a>
                <a href="mailto:water@cosasco.com" className="flex items-center gap-2 text-[#8ab4d4] text-sm hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-[#f4a65d] flex-shrink-0" />
                  water@cosasco.com
                </a>
              </div>
              <Link href="/contact" className="btn btn-primary w-full justify-center text-sm">Contact an Expert</Link>
            </div>

            <div className="bg-white border border-[#e8edf2] rounded-xl p-5">
              <FileDown className="w-6 h-6 text-[#f4a65d] mb-3" />
              <h3 className="font-black text-[#0f2a4a] text-sm mb-2">Water Treatment Application Guide PDF</h3>
              <p className="text-[#566677] text-xs leading-relaxed mb-4">
                Probe selection, coupon program design, and dosing system recommendations
                for municipal and industrial water treatment applications.
              </p>
              <Link href="/resources" className="btn btn-outline-navy w-full justify-center text-sm">Download PDF</Link>
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
                  <ChevronRight className="w-3.5 h-3.5" />View All Industries
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
