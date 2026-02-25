import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight, Phone, Mail, FileDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Specialty Applications Corrosion Monitoring | Cosasco',
  description:
    'Custom corrosion monitoring solutions for data centers, wastewater treatment, ultrapure water, and unique industrial environments.',
}

const applications = [
  {
    title: 'Wastewater Treatment',
    body: 'H₂S generated in sewage systems and aggressive media in treatment tanks create highly corrosive conditions for process equipment, piping, and structural steel. Continuous monitoring for chloride and sulfide corrosion protects infrastructure and ensures regulatory compliance across collection, treatment, and discharge systems.',
  },
  {
    title: 'Ultrapure Water Systems',
    body: 'Semiconductor and pharmaceutical manufacturing require water of extreme purity; the piping systems that carry it must not introduce trace metal contamination. Cosasco monitoring solutions detect even the earliest signs of corrosion in ultrapure environments before product quality or process yield is affected.',
  },
  {
    title: 'Control Rooms & Data Centers',
    body: 'Airborne corrosive gases (SO₂, H₂S, and Cl₂) attack copper and silver contacts on circuit boards and connectors, causing premature electronics failures. Cosasco\'s AirIQ system provides real-time airborne corrosion monitoring using hypersensitive ER technology to protect critical infrastructure before failures occur.',
  },
  {
    title: 'Other Industrial Applications',
    body: 'Food & beverage processing, power generation, and unique chemical environments each present distinct corrosion challenges. Cosasco\'s engineering team designs custom probe configurations and monitoring strategies for any application where standard off-the-shelf solutions fall short.',
  },
]

const relatedIndustries = [
  { name: 'Water Treatment', href: '/solutions/water-treatment' },
  { name: 'Chemical Processing', href: '/solutions/chemical-processing' },
  { name: 'Utilities', href: '/solutions/utilities' },
]

export default function SpecialtyApplicationsPage() {
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
            <span className="text-[#1e2b3a] font-medium">Specialty Applications</span>
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
              Specialty Applications
            </h1>
            <p className="text-[#8ab4d4] text-lg md:text-xl leading-relaxed max-w-2xl">
              Cosasco offers corrosion monitoring solutions for a wide range of industrial
              applications where standard solutions don&apos;t fit. Our engineering team designs
              custom configurations for unique environments where corrosion is a threat.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main 2-col layout ── */}
      <div className="cx py-16 md:py-20">
        <div className="lg:grid lg:grid-cols-3 gap-12">

          {/* ── MAIN CONTENT (col-span-2) ── */}
          <div className="lg:col-span-2 space-y-16">

            {/* Applications */}
            <section>
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-2">Where We Work</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#0f2a4a] mb-6">Applications</h2>
              <div className="bg-[#f7f9fc] rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {applications.map((app) => (
                    <div key={app.title} className="bg-white border border-[#e8edf2] rounded-xl p-5">
                      <div className="w-2 h-2 rounded-full bg-[#f4a65d] mb-4" />
                      <h3 className="font-black text-[#0f2a4a] text-base mb-3">{app.title}</h3>
                      <p className="text-[#566677] text-sm leading-relaxed">{app.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Featured Product */}
            <section>
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-2">Featured Product</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#0f2a4a] mb-6">AirIQ Airborne Corrosion Monitor</h2>
              <div className="bg-[#0f2a4a] rounded-xl p-8 text-white">
                <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-2">For Data Centers &amp; Control Rooms</p>
                <h3 className="text-xl font-black text-white mb-4">
                  Protect Critical Electronics from Invisible Corrosive Gases
                </h3>
                <p className="text-[#8ab4d4] text-sm leading-relaxed mb-8">
                  Real-time air quality monitoring through hypersensitive ER technology. The AirIQ
                  system continuously measures airborne corrosion caused by SO₂, H₂S, and Cl₂ gases
                  : the invisible threats that silently degrade copper and silver contacts in electronics
                  long before visual signs appear. Detects corrosive gases that damage electronics before
                  they cause failures, giving operators time to act.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { value: 'Real-Time', label: 'Continuous Airborne Monitoring' },
                    { value: 'ER Tech', label: 'Hypersensitive Detection' },
                    { value: 'ISA 71.04', label: 'Industry Standard Compliant' },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                      <div className="text-lg font-black text-[#f4a65d] mb-1">{s.value}</div>
                      <div className="text-[#8ab4d4] text-xs leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/products/corrosion-monitoring"
                  className="inline-flex items-center gap-2 text-[#f4a65d] text-sm font-semibold hover:gap-3 transition-all"
                >
                  View AirIQ Product Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </section>

            {/* CTA Banner */}
            <section>
              <div className="bg-[#f7f9fc] border border-[#e8edf2] rounded-xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-2">Since 1950</p>
                  <h3 className="text-xl font-black text-[#0f2a4a] mb-2">
                    Engineering custom solutions since 1950
                  </h3>
                  <p className="text-[#566677] text-sm leading-relaxed max-w-xl">
                    No two corrosive environments are exactly alike. Our engineers have spent over
                    70 years solving corrosion problems that standard products couldn&apos;t address.
                    Tell us your challenge; we&apos;ll build the solution.
                  </p>
                </div>
                <Link href="/contact" className="btn btn-primary whitespace-nowrap flex-shrink-0">
                  Contact an Engineer
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </section>
          </div>

          {/* ── SIDEBAR (col-span-1) ── */}
          <aside className="lg:col-span-1 mt-12 lg:mt-0 space-y-6">

            {/* Engineer contact card */}
            <div className="bg-[#0f2a4a] rounded-xl p-6 text-white">
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-3">Get Expert Guidance</p>
              <h3 className="font-black text-white text-lg mb-3">
                Speak with an Application Engineer
              </h3>
              <p className="text-[#8ab4d4] text-sm leading-relaxed mb-5">
                Our engineering team works directly with customers to design monitoring solutions
                for environments where off-the-shelf products don&apos;t fit. Reach out to start
                a custom application discussion.
              </p>
              <div className="space-y-3 mb-5">
                <a href="tel:+15629490123" className="flex items-center gap-2 text-[#8ab4d4] text-sm hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-[#f4a65d] flex-shrink-0" />
                  +1 (562) 949-0123
                </a>
                <a href="mailto:info@cosasco.com" className="flex items-center gap-2 text-[#8ab4d4] text-sm hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-[#f4a65d] flex-shrink-0" />
                  info@cosasco.com
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
                Specialty Applications Guide PDF
              </h3>
              <p className="text-[#566677] text-xs leading-relaxed mb-4">
                AirIQ product data, custom probe configurations, and application notes for
                wastewater, ultrapure water, and data center environments.
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
