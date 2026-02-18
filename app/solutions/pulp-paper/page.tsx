import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight, Phone, Mail, FileDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pulp & Paper Corrosion Solutions | Cosasco',
  description:
    'Cosasco chemical-resistant ER probes and retractable monitoring systems protect kraft digesters, bleach plant piping, and black liquor recovery systems from aggressive process corrosion.',
}

const challenges = [
  {
    title: 'Kraft Digester & Caustic Attack',
    body: 'Caustic digester liquor at elevated temperature attacks carbon steel and stainless steel vessels, wash lines, and blow lines throughout the kraft pulping circuit. Cosasco retractable probe assemblies allow safe monitoring in high-pressure, high-temperature digester environments without process shutdown, delivering continuous corrosion rate data to guide maintenance planning.',
  },
  {
    title: 'Bleach Plant Chemistry',
    body: 'Chlorine dioxide, sodium hypochlorite, and hydrogen peroxide used in ECF and TCF bleaching sequences create highly oxidizing environments that cause rapid corrosion of titanium-bare equipment and stress corrosion cracking in austenitic stainless. Cosasco titanium and high-alloy probes and coupons deliver accurate corrosion rate measurement in bleach plant conditions that destroy conventional 316SS instruments.',
  },
  {
    title: 'Black Liquor Recovery Corrosion',
    body: 'High-temperature, high-concentration black liquor in evaporators, recovery boiler feed systems, and smelt dissolving tanks causes severe corrosion and plugging that threatens production continuity. Cosasco insertion coupon holders and retractable probe systems provide quantitative wall-loss data without requiring hot work or process entry.',
  },
]

const products = [
  {
    name: 'Chemical-Resistant ER Probes',
    desc: 'Titanium, Hastelloy, and polymer-insulated ER probe elements for bleach plant and caustic kraft service. Retractable configurations rated for digester operating pressures.',
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Insertion Corrosion Coupons',
    desc: 'Alloy corrosion coupons for periodic weight-loss analysis across the full kraft and bleach circuit. PSM-format analysis reports with full traceability.',
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Retractable Probe Systems',
    desc: 'Safe probe and coupon retrieval under full digester and evaporator operating pressure. Eliminates hot work permits and production interruptions during routine monitoring.',
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Chemical Injection Quills',
    desc: 'Precision corrosion inhibitor and scale control chemical delivery into wash filtrate, evaporator feed, and black liquor circuits. High-alloy wetted components for process compatibility.',
    href: '/products/chemical-injection',
  },
]

const relatedIndustries = [
  { name: 'Chemical Processing', href: '/solutions/chemical-processing' },
  { name: 'Water Treatment', href: '/solutions/water-treatment' },
  { name: 'Utilities', href: '/solutions/utilities' },
]

export default function PulpPaperPage() {
  return (
    <div className="min-h-screen bg-white">

      <div className="bg-[#f7f9fc] border-b border-[#e8edf2]">
        <div className="cx py-3">
          <nav className="flex items-center gap-2 text-sm text-[#566677]">
            <Link href="/" className="hover:text-[#0f2a4a] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/solutions" className="hover:text-[#0f2a4a] transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#1e2b3a] font-medium">Pulp &amp; Paper</span>
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
              Pulp &amp; Paper Solutions
            </h1>
            <p className="text-[#8ab4d4] text-lg md:text-xl leading-relaxed max-w-2xl">
              Digesters, bleach plants, and black liquor recovery systems — Cosasco
              chemical-resistant monitoring instruments and retractable systems protect
              pulp and paper assets in the most corrosive wet process environments.
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
                <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-2">Kraft Pulp Mill — Pacific Northwest</p>
                <h4 className="text-xl font-black text-white mb-4">
                  Retractable ER Probes Eliminate Unplanned Digester Outages
                </h4>
                <p className="text-[#8ab4d4] text-sm leading-relaxed mb-8">
                  A Pacific Northwest kraft pulp mill installed Cosasco retractable ER probe
                  assemblies at the continuous digester blow line and chip feed system — two
                  locations that had experienced two unplanned outages in three years due to
                  wall loss. Real-time corrosion rate trending from the Cosasco monitoring
                  program provided early warning on both occasions when process upsets
                  accelerated corrosion, enabling planned maintenance instead of emergency repair.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { value: '0', label: 'Unplanned Outages in 2 Years' },
                    { value: '57%', label: 'Reduction in Emergency Repairs' },
                    { value: '18 mo', label: 'Extended Turnaround Interval' },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                      <div className="text-3xl font-black text-[#f4a65d] mb-1">{s.value}</div>
                      <div className="text-[#8ab4d4] text-xs leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-[#8ab4d4] text-xs">
                  Source: Internal performance data, Pacific Northwest kraft mill, 2022. Results may vary.
                </p>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-1 mt-12 lg:mt-0 space-y-6">
            <div className="bg-[#0f2a4a] rounded-xl p-6 text-white">
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-3">Get Expert Guidance</p>
              <h3 className="font-black text-white text-lg mb-3">Speak with a Pulp &amp; Paper Specialist</h3>
              <p className="text-[#8ab4d4] text-sm leading-relaxed mb-5">
                Our engineers understand kraft process chemistry, bleach plant corrosion
                mechanisms, and retractable system requirements for high-pressure service.
              </p>
              <div className="space-y-3 mb-5">
                <a href="tel:+15629490123" className="flex items-center gap-2 text-[#8ab4d4] text-sm hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-[#f4a65d] flex-shrink-0" />
                  +1 (562) 949-0123
                </a>
                <a href="mailto:pulppaper@cosasco.com" className="flex items-center gap-2 text-[#8ab4d4] text-sm hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-[#f4a65d] flex-shrink-0" />
                  pulppaper@cosasco.com
                </a>
              </div>
              <Link href="/contact" className="btn btn-primary w-full justify-center text-sm">Contact an Expert</Link>
            </div>

            <div className="bg-white border border-[#e8edf2] rounded-xl p-5">
              <FileDown className="w-6 h-6 text-[#f4a65d] mb-3" />
              <h3 className="font-black text-[#0f2a4a] text-sm mb-2">Pulp &amp; Paper Application Guide PDF</h3>
              <p className="text-[#566677] text-xs leading-relaxed mb-4">
                Probe and coupon selection, retractable system design, and monitoring program
                recommendations for kraft and bleach plant environments.
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
