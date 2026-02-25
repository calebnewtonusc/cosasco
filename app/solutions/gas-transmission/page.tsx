import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight, Phone, Mail, FileDown, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gas Transmission Corrosion Monitoring | Cosasco',
  description:
    'Internal corrosion monitoring and chemical injection solutions for high-pressure natural gas transmission pipelines.',
}

const challenges = [
  {
    title: 'CO₂/H₂S Corrosion at Low Points',
    body: 'Carbon dioxide and hydrogen sulfide dissolved in natural gas streams form carbonic and sulfuric acids when they contact liquid water accumulating at pipeline low points and dead legs. Sweet corrosion from CO₂ and sour corrosion from H₂S create aggressive localized attack that accelerates rapidly in stagnant accumulations — ER probes positioned at known low points deliver continuous corrosion rate data before integrity is compromised.',
  },
  {
    title: 'Water Dropout and Condensation',
    body: 'As high-pressure gas cools along a transmission line, water condenses and drops out of the gas stream, accumulating at low-elevation points and in slug catchers. This liquid water — often containing dissolved CO₂, H₂S, and chlorides — creates localized corrosion cells that cannot be detected by routine inline inspection in gas-filled lines. Real-time monitoring at known water accumulation points is essential for proactive integrity management.',
  },
  {
    title: 'High-Pressure Access for In-Service Monitoring',
    body: 'Gas transmission pipelines operate at pressures from 200 to over 1,500 psi, requiring specialized pressure-rated access fittings for safe installation and retrieval of monitoring instruments without pipeline shutdown. Cosasco retractable ER probe systems and full-bore access fittings are designed and pressure-rated for in-service probe retrieval under maximum allowable operating pressure, eliminating the cost and disruption of system depressurization.',
  },
]

const products = [
  {
    name: 'ER Probe Systems',
    desc: 'Continuous real-time corrosion-rate measurement at pipeline low points and water accumulation zones. Retractable configurations allow in-service retrieval under full operating pressure.',
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Chemical Injection Systems',
    desc: 'Precision corrosion inhibitor delivery into high-pressure gas streams. Full-port quills and check valve assemblies in 316SS and Hastelloy C276 rated for gas transmission service pressures.',
    href: '/products/chemical-injection',
  },
  {
    name: 'FieldCom Wireless Loggers',
    desc: 'Real-time corrosion data from remote pipeline monitoring points — SCADA-compatible, cloud-connected, and certified for hazardous gas areas (Class I, Division 1).',
    href: '/products/data-acquisition',
  },
  {
    name: 'High-Pressure Access Fittings',
    desc: 'Hot-tap weld-on and threaded access fittings pressure-rated for gas transmission service. Full material traceability and MTRs on all pressure-containing components.',
    href: '/products/corrosion-monitoring',
  },
]

const capabilities = [
  'Continuous ER probe monitoring at pipeline low points and water dropout zones',
  'Chemical injection for corrosion inhibitor and biocide delivery into gas streams',
  'SCADA and FieldCom wireless integration for remote monitoring and alarming',
  'Retractable probe access for in-service retrieval under full operating pressure',
  'Compliance with API 570 pipeline inspection and NACE SP0106 internal corrosion standards',
  'Full material traceability and pressure-rated documentation for all pressure-boundary components',
]

const relatedIndustries = [
  { name: 'Oil & Gas', href: '/solutions/oil-gas' },
  { name: 'Petrochemical', href: '/solutions/petrochemical' },
  { name: 'Utilities', href: '/solutions/utilities' },
]

export default function GasTransmissionPage() {
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
            <span className="text-[#1e2b3a] font-medium">Gas Transmission</span>
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
              Gas Transmission
            </h1>
            <p className="text-[#8ab4d4] text-lg md:text-xl leading-relaxed max-w-2xl">
              Internal corrosion monitoring and chemical injection for high-pressure natural
              gas transmission pipelines — detecting CO₂, H₂S, and water dropout corrosion
              at the points that matter before integrity is compromised.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main 2-col layout ── */}
      <div className="cx py-16 md:py-20">
        <div className="lg:grid lg:grid-cols-3 gap-12">

          {/* ── MAIN CONTENT (col-span-2) ── */}
          <div className="lg:col-span-2 space-y-16">

            {/* Integrity Challenge */}
            <section>
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-2">What We Solve</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#0f2a4a] mb-6">
                The Integrity Challenge in Gas Transmission
              </h2>
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

            {/* Recommended Products */}
            <section>
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-2">Product Recommendations</p>
              <h3 className="text-2xl md:text-3xl font-black text-[#0f2a4a] mb-6">Recommended Solutions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {products.map((p) => (
                  <div
                    key={p.name}
                    className="bg-white border border-[#e8edf2] rounded-xl p-6 hover:shadow-lg hover:border-[#f4a65d] transition-all group flex flex-col"
                  >
                    <h4 className="font-black text-[#0f2a4a] text-base mb-2 group-hover:text-[#f4a65d] transition-colors">
                      {p.name}
                    </h4>
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

            {/* Key Capabilities */}
            <section>
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-2">Program Features</p>
              <h3 className="text-2xl md:text-3xl font-black text-[#0f2a4a] mb-6">Key Capabilities</h3>
              <div className="bg-[#f7f9fc] rounded-xl p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#f4a65d] flex-shrink-0 mt-0.5" />
                      <p className="text-[#566677] text-sm leading-relaxed">{cap}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Case Study */}
            <section>
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-2">Proven Results</p>
              <h3 className="text-2xl md:text-3xl font-black text-[#0f2a4a] mb-6">Case Study</h3>
              <div className="bg-[#0f2a4a] rounded-xl p-8 text-white">
                <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-2">
                  North American Gas Transmission Operator
                </p>
                <h4 className="text-xl font-black text-white mb-4">
                  ER Probe Network Drives 63% Reduction in Unplanned Failures
                </h4>
                <p className="text-[#8ab4d4] text-sm leading-relaxed mb-8">
                  A major North American gas transmission operator deployed Cosasco retractable
                  ER probes at 22 monitoring points across a 580-mile interstate transmission
                  system, targeting known low points and slug catcher outlets where water dropout
                  and CO₂ corrosion historically drove the highest failure rates. Real-time
                  corrosion data enabled the integrity team to correlate corrosion rate spikes
                  with gas composition changes and optimize inhibitor injection rates continuously.
                  The program delivered a measurable step change in pipeline reliability within
                  the first operating year.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { value: '63%', label: 'Reduction in Unplanned Failures' },
                    { value: '31%', label: 'Decrease in Inhibitor Spend' },
                    { value: '11 months', label: 'Full Program ROI' },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                      <div className="text-3xl font-black text-[#f4a65d] mb-1">{s.value}</div>
                      <div className="text-[#8ab4d4] text-xs leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-[#8ab4d4] text-xs">
                  Source: Internal performance data, North American gas transmission operator, 2023.
                  Results may vary by application and operating conditions.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-[#f7f9fc] border border-[#e8edf2] rounded-xl p-8">
              <h3 className="text-xl md:text-2xl font-black text-[#0f2a4a] mb-3">
                Speak with a Pipeline Integrity Specialist
              </h3>
              <p className="text-[#566677] text-sm leading-relaxed mb-6 max-w-xl">
                Our NACE-certified corrosion engineers will assess your transmission system
                and recommend the right internal corrosion monitoring and chemical injection
                strategy for your operating conditions.
              </p>
              <Link href="/contact" className="btn btn-primary inline-flex items-center gap-2">
                Contact a Specialist <ArrowRight className="w-4 h-4" />
              </Link>
            </section>
          </div>

          {/* ── SIDEBAR (col-span-1) ── */}
          <aside className="lg:col-span-1 mt-12 lg:mt-0 space-y-6">

            {/* Engineer contact card */}
            <div className="bg-[#0f2a4a] rounded-xl p-6 text-white">
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-3">Get Expert Guidance</p>
              <h3 className="font-black text-white text-lg mb-3">
                Speak with a Pipeline Integrity Specialist
              </h3>
              <p className="text-[#8ab4d4] text-sm leading-relaxed mb-5">
                Our NACE-certified corrosion engineers will assess your transmission system
                and design a monitoring program tailored to your operating pressure, gas
                composition, and integrity management requirements.
              </p>
              <div className="space-y-3 mb-5">
                <a
                  href="tel:+15629490123"
                  className="flex items-center gap-2 text-[#8ab4d4] text-sm hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#f4a65d] flex-shrink-0" />
                  +1 (562) 949-0123
                </a>
                <a
                  href="mailto:gastransmission@cosasco.com"
                  className="flex items-center gap-2 text-[#8ab4d4] text-sm hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#f4a65d] flex-shrink-0" />
                  gastransmission@cosasco.com
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
                Gas Transmission Application Guide PDF
              </h3>
              <p className="text-[#566677] text-xs leading-relaxed mb-4">
                ER probe selection guide, access fitting pressure ratings, chemical injection
                design criteria, and API 570 / NACE SP0106 compliance framework for gas
                transmission internal corrosion programs.
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
