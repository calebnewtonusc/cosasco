import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight, Phone, Mail, FileDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chemical Processing Corrosion Solutions | Cosasco',
  description:
    'Cosasco high-alloy ER probes, PSM-compliant coupon programs, and chemical injection systems protect acid, caustic, and specialty chemical process environments from aggressive corrosion.',
}

const challenges = [
  {
    title: 'Aggressive Acid & Caustic Service',
    body: 'Hydrochloric, sulfuric, phosphoric, and nitric acid environments cause catastrophic corrosion in reactor vessels, storage tanks, and transfer piping when material selection or inhibitor programs fall short. Cosasco Hastelloy C276 and titanium ER probes survive the same environments as your process equipment, delivering reliable corrosion rate data in the fluids that destroy standard steel instruments.',
  },
  {
    title: 'PSM Compliance & Audit Trails',
    body: 'Process Safety Management regulations require documented corrosion monitoring programs with full audit trails for covered chemicals above threshold quantities. Cosasco corrosion coupon programs with NACE-compliant analysis reports and Cosasco\'s FieldCom data logging system provide the documented corrosion rate history that PSM inspections and management of change reviews demand.',
  },
  {
    title: 'Vapor-Phase & Overhead Condensate Attack',
    body: 'Acid vapors condensing in overhead systems and distillation column overhead piping cause localized corrosion that accelerates rapidly once condensate accumulates. Cosasco overhead monitoring probes and chemical neutralizer injection systems address corrosion in both the aqueous and vapor phases of your process.',
  },
]

const products = [
  {
    name: 'Hastelloy & Titanium ER Probes',
    desc: 'High-alloy probe elements in Hastelloy C276, titanium, tantalum, and other specialty alloys for the most aggressive acid and caustic process fluids.',
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Chemical Injection Systems',
    desc: 'Precision neutralizer, inhibitor, and biocide injection systems in alloy-wetted configurations. Complete check valve and quill assemblies for high-purity chemical service.',
    href: '/products/chemical-injection',
  },
  {
    name: 'Non-Intrusive Coupon Holders',
    desc: 'Bypass coupon assemblies for periodic sample retrieval without process entry. PSM-compliant traceability documentation and NACE-format analysis reports.',
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Data Acquisition Systems',
    desc: 'FieldCom wireless loggers and wired data acquisition systems for continuous corrosion monitoring with full audit trail logging for PSM compliance documentation.',
    href: '/products/data-acquisition',
  },
]

const relatedIndustries = [
  { name: 'Petrochemical', href: '/solutions/petrochemical' },
  { name: 'Oil & Gas', href: '/solutions/oil-gas' },
  { name: 'Pulp & Paper', href: '/solutions/pulp-paper' },
]

export default function ChemicalProcessingPage() {
  return (
    <div className="min-h-screen bg-white">

      <div className="bg-[#f7f9fc] border-b border-[#e8edf2]">
        <div className="cx py-3">
          <nav className="flex items-center gap-2 text-sm text-[#566677]">
            <Link href="/" className="hover:text-[#0f2a4a] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/solutions" className="hover:text-[#0f2a4a] transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#1e2b3a] font-medium">Chemical Processing</span>
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
              Chemical Processing Solutions
            </h1>
            <p className="text-[#8ab4d4] text-lg md:text-xl leading-relaxed max-w-2xl">
              Acid service, PSM compliance, and specialty alloy environments — Cosasco
              high-alloy monitoring systems and PSM-compliant coupon programs protect
              chemical plants operating with the most aggressive process fluids on earth.
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
                <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#e05000] mb-2">Specialty Chemical Manufacturer — Texas</p>
                <h4 className="text-xl font-black text-white mb-4">
                  PSM-Compliant ER Probe Program Passes OSHA Process Safety Audit
                </h4>
                <p className="text-[#8ab4d4] text-sm leading-relaxed mb-8">
                  A Texas specialty chemical manufacturer operating under OSHA PSM deployed
                  Cosasco Hastelloy ER probes and FieldCom data loggers at 8 monitoring
                  points across their HCl and sulfuric acid production and storage areas.
                  The program provided complete electronic audit trails that satisfied all
                  OSHA corrosion monitoring documentation requirements during their
                  first PSM compliance audit, with zero deficiency findings.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { value: '8', label: 'PSM Monitoring Points' },
                    { value: '0', label: 'Audit Deficiency Findings' },
                    { value: '100%', label: 'Documentation Compliance' },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                      <div className="text-3xl font-black text-[#e05000] mb-1">{s.value}</div>
                      <div className="text-[#8ab4d4] text-xs leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-[#8ab4d4] text-xs">
                  Source: Internal performance data, Texas chemical manufacturer, 2023. Results may vary.
                </p>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-1 mt-12 lg:mt-0 space-y-6">
            <div className="bg-[#0f2a4a] rounded-xl p-6 text-white">
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#e05000] mb-3">Get Expert Guidance</p>
              <h3 className="font-black text-white text-lg mb-3">Speak with a Chemical Processing Specialist</h3>
              <p className="text-[#8ab4d4] text-sm leading-relaxed mb-5">
                Our engineers understand alloy selection, PSM documentation requirements,
                and corrosion program design for aggressive chemical service.
              </p>
              <div className="space-y-3 mb-5">
                <a href="tel:+15629490123" className="flex items-center gap-2 text-[#8ab4d4] text-sm hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-[#e05000] flex-shrink-0" />
                  +1 (562) 949-0123
                </a>
                <a href="mailto:chemical@cosasco.com" className="flex items-center gap-2 text-[#8ab4d4] text-sm hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-[#e05000] flex-shrink-0" />
                  chemical@cosasco.com
                </a>
              </div>
              <Link href="/contact" className="btn btn-primary w-full justify-center text-sm">Contact an Expert</Link>
            </div>

            <div className="bg-white border border-[#e8edf2] rounded-xl p-5">
              <FileDown className="w-6 h-6 text-[#e05000] mb-3" />
              <h3 className="font-black text-[#0f2a4a] text-sm mb-2">Chemical Processing Application Guide PDF</h3>
              <p className="text-[#566677] text-xs leading-relaxed mb-4">
                Alloy probe selection, PSM compliance documentation framework, and monitoring
                program design for acid and caustic chemical service.
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
