import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle, Wifi, Cloud, Gauge } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cosasco Launches Next-Gen FieldCom 5.0 Wireless System | News',
  description:
    'FieldCom 5.0 delivers enhanced wireless range, sub-second data refresh rates, and an overhauled cloud dashboard — redefining real-time corrosion monitoring at scale.',
}

export default function FieldCom5LaunchPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-[#0f2a4a] pt-[72px] pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="text-[#5a7a94] text-sm mb-6 flex flex-wrap gap-1 items-center">
            <Link href="/news" className="hover:text-[#f4a65d] transition-colors">
              News &amp; Insights
            </Link>
            <span className="mx-1">/</span>
            <span className="text-white">FieldCom 5.0 Launch</span>
          </nav>
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#f4a65d]/20 text-[#f4a65d] mb-5">
            Product Update
          </span>
          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight max-w-4xl mb-5">
            Cosasco Launches Next-Gen FieldCom 5.0 Wireless System
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#94aabb]">
            <span className="font-semibold text-white">Cosasco Product Team</span>
            <span className="text-[#3a5a74]">|</span>
            <span>January 15, 2026</span>
            <span className="text-[#3a5a74]">|</span>
            <span>4 min read</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2">
            <div className="text-[#566677] leading-relaxed space-y-6 text-[1.05rem]">
              <p className="text-xl text-[#0f2a4a] font-semibold leading-snug">
                Cosasco Systems today announced the general availability of FieldCom 5.0, the most
                significant platform upgrade in the product&apos;s history. The new system delivers
                sub-second corrosion data refresh rates, extended wireless range, and a completely
                redesigned cloud dashboard — setting a new standard for industrial corrosion
                monitoring at scale.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">What&apos;s New in FieldCom 5.0</h2>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: Wifi,
                    stat: '3× Range',
                    label: 'Extended wireless coverage — up to 300m in open environments',
                  },
                  {
                    icon: Gauge,
                    stat: '<1 Second',
                    label: 'Sub-second data refresh rates for real-time corrosion monitoring',
                  },
                  {
                    icon: Cloud,
                    stat: '10,000+',
                    label: 'Monitoring points supported per cloud dashboard instance',
                  },
                ].map(({ icon: Icon, stat, label }) => (
                  <div key={stat} className="bg-[#f0f4f8] border border-[#e8edf2] rounded-xl p-5 text-center">
                    <Icon className="w-6 h-6 text-[#f4a65d] mx-auto mb-3" />
                    <p className="text-[#0f2a4a] font-black text-2xl mb-2">{stat}</p>
                    <p className="text-[#566677] text-xs leading-relaxed">{label}</p>
                  </div>
                ))}
              </div>

              <p>
                FieldCom 5.0 was designed to address the growing scale and complexity of modern
                corrosion monitoring programs. Where legacy systems typically supported dozens of
                monitoring points per installation, FieldCom 5.0 supports enterprise deployments
                with thousands of points across distributed infrastructure — all managed from a
                single cloud dashboard.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">Key Capabilities</h2>

              <ul className="space-y-3">
                {[
                  'Dual-band 2.4GHz / 900MHz radio with automatic frequency hopping for interference avoidance',
                  'Native Modbus RTU and HART integration for direct pump controller feedback loops',
                  'OPC-UA server support for integration with plant historian and DCS systems',
                  'ATEX / IECEx Zone 1 and Zone 2 certified for hazardous area deployment',
                  'Encrypted data transmission (AES-256) from sensor to cloud',
                  'Battery backup with 72-hour autonomous operation during communication loss',
                  'SAFR cloud dashboard integration with real-time RAG status and configurable alert thresholds',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f4a65d] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">Redesigned Cloud Dashboard</h2>
              <p>
                The FieldCom 5.0 release is accompanied by a major update to the SAFR cloud portal.
                The new dashboard introduces a facility-level map view that plots all monitoring
                locations geographically, with colour-coded RAG status overlaid in real time.
                Operators can drill from facility view to individual probe readings in two clicks.
              </p>
              <p>
                Automated anomaly detection uses statistical process control (SPC) methods to flag
                readings that deviate from historical patterns — reducing false positive alert rates
                by up to 60% compared to threshold-only alerting.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">Availability and Upgrade Path</h2>
              <p>
                FieldCom 5.0 hardware is available for new installations immediately. Existing
                FieldCom 4.x customers can upgrade to 5.0 gateway hardware while retaining
                compatible 4.x field sensors — protecting existing installations. Contact your
                Cosasco representative for a migration assessment.
              </p>
              <p>
                SAFR cloud dashboard updates for FieldCom 5.0 are being rolled out to all existing
                SAFR subscribers at no additional charge starting February 2026.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-[#0f2a4a] rounded-xl p-6 text-white">
              <p className="font-black text-lg mb-2">Request a FieldCom Demo</p>
              <p className="text-[#94aabb] text-sm leading-relaxed mb-4">
                Schedule a live demonstration of FieldCom 5.0 with a Cosasco application engineer.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-[#f4a65d] hover:bg-[#d4892a] text-white font-bold py-3 rounded-lg transition-colors text-sm"
              >
                Request a Demo
              </Link>
            </div>

            <div className="bg-[#f0f4f8] border border-[#e8edf2] rounded-xl p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#566677] mb-4">
                Related Products
              </p>
              <ul className="space-y-3">
                {[
                  { href: '/products/fieldcom', label: 'FieldCom Hardware' },
                  { href: '/products/data-acquisition', label: 'Data Acquisition Systems' },
                  { href: '/software', label: 'SAFR Cloud Portal' },
                  { href: '/products/corrosion-monitoring', label: 'Corrosion Monitoring Probes' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[#0f2a4a] text-sm font-medium hover:text-[#f4a65d] transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-[#f4a65d] flex-shrink-0" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-[#e8edf2] rounded-xl p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#566677] mb-4">
                Recent News
              </p>
              <ul className="space-y-4">
                {[
                  {
                    href: '/news/retractable-er-probe',
                    title: 'New Retractable ER Probe for High-Pressure Applications',
                  },
                  {
                    href: '/news/industry-recognition-2025',
                    title: 'Cosasco Recognized as Leading Corrosion Monitor Supplier',
                  },
                ].map((a) => (
                  <li key={a.href} className="border-b border-[#e8edf2] pb-4 last:border-0 last:pb-0">
                    <Link
                      href={a.href}
                      className="text-sm text-[#0f2a4a] font-semibold hover:text-[#f4a65d] transition-colors leading-snug block"
                    >
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* BACK NAV */}
      <section className="bg-[#f0f4f8] border-t border-[#e8edf2] py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
          <Link
            href="/news"
            className="text-[#0f2a4a] font-semibold flex items-center gap-2 hover:text-[#f4a65d] transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to News
          </Link>
          <Link
            href="/news/retractable-er-probe"
            className="text-[#0f2a4a] font-semibold flex items-center gap-2 hover:text-[#f4a65d] transition-colors text-sm"
          >
            Next: New Retractable ER Probe <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
