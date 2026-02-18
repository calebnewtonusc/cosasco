import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight, Phone, Mail, FileDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Utilities Corrosion Solutions | Cosasco',
  description:
    'Cosasco ER probes, cooling water injection systems, and steam cycle monitoring instruments protect power generation plants and district cooling infrastructure from corrosion-related outages.',
}

const challenges = [
  {
    title: 'Cooling Water & Condenser Tube Corrosion',
    body: 'Cooling tower water systems and once-through cooling circuits develop microbiologically influenced corrosion, scale deposition, and under-deposit attack on condenser tubing and heat exchanger surfaces. Cosasco retractable ER probes in cooling water bypass assemblies deliver real-time corrosion rate data to validate treatment program effectiveness and detect chemistry excursions before equipment is damaged.',
  },
  {
    title: 'Steam Cycle Chemistry Degradation',
    body: 'Boiler feedwater and steam chemistry deviations cause flow-accelerated corrosion in heat recovery steam generators, feedwater heaters, and economizer circuits. Cosasco ER probes and in-line corrosion coupons installed in feedwater and condensate return lines provide the continuous monitoring required by ASME and EPRI water chemistry guidelines.',
  },
  {
    title: 'Atmospheric & Structural Corrosion',
    body: 'Power plant structural steel, pipe supports, and below-grade piping in coastal and industrial environments face aggressive atmospheric and soil-side corrosion. Cosasco atmospheric exposure racks and soil corrosivity probes quantify corrosion rates for asset integrity management programs required by NERC and utility operating licenses.',
  },
]

const products = [
  {
    name: 'Retractable ER Probes',
    desc: 'Safe probe insertion and retrieval in cooling water and steam cycle piping under operating pressure. Continuous corrosion rate measurement without process interruption.',
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Cooling Water Injection Quills',
    desc: 'Precision corrosion inhibitor, scale inhibitor, and biocide delivery into cooling tower circuits and condenser water boxes. Full-bore designs for large-diameter cooling water headers.',
    href: '/products/chemical-injection',
  },
  {
    name: 'Steam Cycle Coupons',
    desc: 'Alloy corrosion coupons for boiler feedwater, condensate return, and steam system monitoring in compliance with ASME water chemistry guidelines.',
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Automated Data Loggers',
    desc: 'FieldCom wireless loggers for remote corrosion monitoring across geographically distributed utility assets. SCADA-compatible with configurable alarm thresholds.',
    href: '/products/data-acquisition',
  },
]

const relatedIndustries = [
  { name: 'Water Treatment', href: '/solutions/water-treatment' },
  { name: 'Petrochemical', href: '/solutions/petrochemical' },
  { name: 'Chemical Processing', href: '/solutions/chemical-processing' },
]

export default function UtilitiesPage() {
  return (
    <div className="min-h-screen bg-white">

      <div className="bg-[#f7f9fc] border-b border-[#e8edf2]">
        <div className="cx py-3">
          <nav className="flex items-center gap-2 text-sm text-[#566677]">
            <Link href="/" className="hover:text-[#0f2a4a] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/solutions" className="hover:text-[#0f2a4a] transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#1e2b3a] font-medium">Utilities</span>
          </nav>
        </div>
      </div>

      <section className="relative bg-[#0f2a4a] text-white overflow-hidden">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#e05000]" aria-hidden="true" />
        <div className="cx relative py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#e05000] mb-4">Industry Solutions</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Utilities Solutions
            </h1>
            <p className="text-[#8ab4d4] text-lg md:text-xl leading-relaxed max-w-2xl">
              Power generation, cooling water systems, and steam cycles — Cosasco
              monitoring instruments and chemical injection systems extend asset life
              and reduce the unplanned outages that cost utilities millions per incident.
            </p>
          </div>
        </div>
      </section>

      <div className="cx py-16 md:py-20">
        <div className="lg:grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">

            <section>
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#e05000] mb-2">What We Solve</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#0f2a4a] mb-6">Key Challenges</h2>
              <div className="bg-[#f7f9fc] rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {challenges.map((ch) => (
                    <div key={ch.title} className="bg-white border border-[#e8edf2] rounded-xl p-5">
                      <div className="w-2 h-2 rounded-full bg-[#e05000] mb-4" />
                      <h3 className="font-black text-[#0f2a4a] text-base mb-3">{ch.title}</h3>
                      <p className="text-[#566677] text-sm leading-relaxed">{ch.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#e05000] mb-2">Product Recommendations</p>
              <h3 className="text-2xl md:text-3xl font-black text-[#0f2a4a] mb-6">Recommended Solutions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {products.map((p) => (
                  <div key={p.name} className="bg-white border border-[#e8edf2] rounded-xl p-6 hover:shadow-lg hover:border-[#e05000] transition-all group flex flex-col">
                    <h4 className="font-black text-[#0f2a4a] text-base mb-2 group-hover:text-[#e05000] transition-colors">{p.name}</h4>
                    <p className="text-[#566677] text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
                    <Link href={p.href} className="text-[#e05000] text-sm font-semibold flex items-center gap-1 mt-auto">
                      View Product <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#e05000] mb-2">Proven Results</p>
              <h3 className="text-2xl md:text-3xl font-black text-[#0f2a4a] mb-6">Case Study</h3>
              <div className="bg-[#0f2a4a] rounded-xl p-8 text-white">
                <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#e05000] mb-2">Combined-Cycle Power Plant — Mid-Atlantic USA</p>
                <h4 className="text-xl font-black text-white mb-4">
                  Cooling Water ER Program Prevents Condenser Tube Failure
                </h4>
                <p className="text-[#8ab4d4] text-sm leading-relaxed mb-8">
                  A Mid-Atlantic combined-cycle power plant deployed Cosasco ER probes
                  and automatic chemical injection quills in their 45,000 GPM cooling
                  tower circuit following a condenser tube failure that caused a 72-hour
                  forced outage. The monitoring and treatment system detected a chemistry
                  excursion 11 days into operation and automatically adjusted biocide
                  dosing — preventing a recurrence and delivering measurable improvement
                  in corrosion performance across the first operating season.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { value: '78%', label: 'Reduction in Corrosion Rate' },
                    { value: '0', label: 'Unplanned Outages in 18 Months' },
                    { value: '22%', label: 'Decrease in Biocide Consumption' },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                      <div className="text-3xl font-black text-[#e05000] mb-1">{s.value}</div>
                      <div className="text-[#8ab4d4] text-xs leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-[#8ab4d4] text-xs">
                  Source: Internal performance data, Mid-Atlantic power operator, 2023. Results may vary.
                </p>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-1 mt-12 lg:mt-0 space-y-6">
            <div className="bg-[#0f2a4a] rounded-xl p-6 text-white">
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#e05000] mb-3">Get Expert Guidance</p>
              <h3 className="font-black text-white text-lg mb-3">Speak with a Utilities Specialist</h3>
              <p className="text-[#8ab4d4] text-sm leading-relaxed mb-5">
                Our engineers understand power plant cooling chemistry, steam cycle requirements,
                and NERC compliance monitoring program design.
              </p>
              <div className="space-y-3 mb-5">
                <a href="tel:+15629490123" className="flex items-center gap-2 text-[#8ab4d4] text-sm hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-[#e05000] flex-shrink-0" />
                  +1 (562) 949-0123
                </a>
                <a href="mailto:utilities@cosasco.com" className="flex items-center gap-2 text-[#8ab4d4] text-sm hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-[#e05000] flex-shrink-0" />
                  utilities@cosasco.com
                </a>
              </div>
              <Link href="/contact" className="btn btn-primary w-full justify-center text-sm">Contact an Expert</Link>
            </div>

            <div className="bg-white border border-[#e8edf2] rounded-xl p-5">
              <FileDown className="w-6 h-6 text-[#e05000] mb-3" />
              <h3 className="font-black text-[#0f2a4a] text-sm mb-2">Utilities Application Guide PDF</h3>
              <p className="text-[#566677] text-xs leading-relaxed mb-4">
                Cooling water monitoring system design, steam cycle coupon program, and
                chemical injection recommendations for power generation and utilities.
              </p>
              <Link href="/resources" className="btn btn-outline-navy w-full justify-center text-sm">Download PDF</Link>
            </div>

            <div className="bg-white border border-[#e8edf2] rounded-xl p-5">
              <h3 className="font-black text-[#0f2a4a] text-sm mb-4">Related Industries</h3>
              <ul className="space-y-2">
                {relatedIndustries.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="flex items-center gap-2 text-sm text-[#566677] hover:text-[#e05000] transition-colors font-medium">
                      <ArrowRight className="w-3.5 h-3.5 text-[#e05000]" />
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
