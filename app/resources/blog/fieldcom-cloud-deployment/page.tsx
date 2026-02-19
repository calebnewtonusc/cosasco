import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FieldCom Cloud in 2026: What\'s New and How Operators Are Using It | Cosasco Blog',
  description:
    'New features, integration improvements, and real-world deployments from the past year of FieldCom Cloud development.',
}

export default function FieldComCloudPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-[#0f2a4a] pt-[72px] pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="text-[#5a7a94] text-sm mb-6 flex flex-wrap gap-1 items-center">
            <Link href="/resources" className="hover:text-[#f4a65d] transition-colors">Resources</Link>
            <span className="mx-1">/</span>
            <Link href="/resources/blog" className="hover:text-[#f4a65d] transition-colors">Blog</Link>
            <span className="mx-1">/</span>
            <span className="text-white">FieldCom Cloud 2026</span>
          </nav>
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#ede9fe] text-[#5b21b6] mb-5">
            Product Update
          </span>
          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight max-w-4xl mb-5">
            FieldCom Cloud in 2026: What&apos;s New and How Operators Are Using It
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#94aabb]">
            <span className="font-semibold text-white">Cosasco Product Team</span>
            <span className="text-[#3a5a74]">|</span>
            <span>Dec 18, 2025</span>
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
                FieldCom Cloud has seen significant development over 2025, with a focus on three
                areas: deeper integration with SCADA and historian platforms, improved anomaly
                detection, and expanded mobile capabilities for remote inspection workflows.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                What&apos;s New in 2025–2026
              </h2>
              <div className="space-y-4">
                {[
                  {
                    version: 'v3.4 — SCADA/OPC-UA Integration',
                    date: 'Q1 2025',
                    features: [
                      'Native OPC-UA server: publish corrosion rate data directly to DCS/SCADA without middleware',
                      'Modbus TCP client for direct pump controller feedback loop (adaptive injection)',
                      'PI AF attribute mapping for seamless OSIsoft PI historian ingestion',
                    ],
                  },
                  {
                    version: 'v3.5 — Anomaly Detection Engine',
                    date: 'Q2 2025',
                    features: [
                      'Statistical process control (SPC) alerts: flag readings outside ±3σ of rolling 30-day baseline',
                      'Sudden rate change detection: configurable threshold for identifying upset events within minutes',
                      'Email and SMS alert routing with configurable escalation workflows',
                    ],
                  },
                  {
                    version: 'v3.6 — Mobile Inspection Module',
                    date: 'Q3 2025',
                    features: [
                      'iOS/Android app for coupon retrieval workflow: scan barcode, log weight, auto-calculate rate',
                      'Offline mode for sites with limited connectivity — syncs on reconnection',
                      'Photo documentation attached directly to inspection records',
                    ],
                  },
                  {
                    version: 'v3.7 — Dashboard Redesign',
                    date: 'Q4 2025',
                    features: [
                      'New multi-site fleet overview: see all pipeline segments and corrosion status on a single map view',
                      'Configurable KPI cards with RAG (Red/Amber/Green) threshold indicators',
                      'Export to PDF and Excel directly from dashboard — no additional reporting tools needed',
                    ],
                  },
                ].map(({ version, date, features }) => (
                  <div key={version} className="border border-[#e8edf2] rounded-xl overflow-hidden">
                    <div className="bg-[#f0f4f8] px-5 py-3 flex items-center justify-between">
                      <p className="text-[#0f2a4a] font-bold text-sm">{version}</p>
                      <span className="text-xs text-[#566677] font-medium">{date}</span>
                    </div>
                    <ul className="p-5 space-y-2">
                      {features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-[#566677]">
                          <CheckCircle className="w-4 h-4 text-[#22c55e] flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                How Operators Are Using It
              </h2>
              <p>
                Three deployment patterns have emerged as the most common use cases for FieldCom
                Cloud in 2025:
              </p>

              <div className="bg-[#f7f9fc] border border-[#e8edf2] rounded-xl p-6 space-y-5">
                {[
                  {
                    use: 'Multi-field fleet management',
                    body: 'Operators with 10+ pipeline segments now use the fleet map as the primary morning dashboard. Status is color-coded by corrosion rate severity, enabling supervisors to prioritize field visits without reviewing raw data from each site.',
                  },
                  {
                    use: 'Automated inhibitor dose adjustment',
                    body: 'Via the Modbus integration, several Gulf of Mexico operators have implemented closed-loop injection control. FieldCom monitors LPR rate continuously and sends set-point adjustments to injection pumps, reducing both chemical cost and human error.',
                  },
                  {
                    use: 'Regulatory compliance reporting',
                    body: 'The PDF/Excel export in v3.7 is widely used to generate PHMSA and internal quarterly integrity reports directly from the software. Audit trails for inspection records and anomaly responses satisfy regulatory recordkeeping requirements without additional documentation effort.',
                  },
                ].map(({ use, body }) => (
                  <div key={use} className="border-l-4 border-[#f4a65d] pl-4">
                    <p className="text-[#0f2a4a] font-bold mb-1">{use}</p>
                    <p className="text-[#566677] text-sm leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                What&apos;s Coming in 2026
              </h2>
              <p>
                The FieldCom roadmap for 2026 includes three major initiatives:
              </p>
              <ul className="space-y-2">
                {[
                  'AI-assisted corrosion rate prediction: regression models trained on historical data to project 30/60/90-day cumulative loss and flag sites approaching risk thresholds before they exceed them.',
                  'Digital twin integration: export of FieldCom sensor data into ASME B31.8S and DNV pipeline integrity management models via standardized API.',
                  'Expanded hardware support: native drivers for third-party ER/LPR transmitters from non-Cosasco manufacturers, allowing FieldCom to serve as the unified data management layer for multi-vendor programs.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="text-[#f4a65d] font-bold flex-shrink-0 mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-[#0f2a4a] rounded-xl p-6 mt-8">
                <p className="text-white font-black text-lg mb-2">FieldCom Cloud — Free 30-Day Trial</p>
                <p className="text-[#94aabb] text-sm leading-relaxed mb-4">
                  FieldCom Cloud is available as a hosted SaaS subscription starting at $195/month
                  for up to 10 monitoring points. On-premises deployment is also available.
                </p>
                <Link href="/software" className="inline-block bg-[#f4a65d] hover:bg-[#d4892a] text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm">
                  Learn More About FieldCom
                </Link>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-[#f0f4f8] border border-[#e8edf2] rounded-xl p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#566677] mb-4">Related Resources</p>
              <ul className="space-y-3">
                {[
                  { href: '/software', label: 'FieldCom Software Overview' },
                  { href: '/software/data-key', label: 'Data Key Activation' },
                  { href: '/software/legacy', label: 'Legacy Software Downloads' },
                  { href: '/resources/webinar/fieldcom-cloud-intro', label: 'FieldCom Webinar Recording' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-[#0f2a4a] text-sm font-medium hover:text-[#f4a65d] transition-colors flex items-center gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-[#f4a65d] flex-shrink-0" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-[#e8edf2] rounded-xl p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#566677] mb-4">More Articles</p>
              <ul className="space-y-4">
                {[
                  { href: '/resources/blog/corrosion-monitoring-fundamentals', title: 'ER vs. LPR vs. Coupons: Fundamentals' },
                  { href: '/resources/blog/h2s-sour-service-integrity', title: 'H₂S Sour Service Corrosion Management' },
                  { href: '/resources/blog/chemical-injection-optimization', title: 'Right-Sizing Chemical Injection' },
                ].map((a) => (
                  <li key={a.href} className="border-b border-[#e8edf2] pb-4 last:border-0 last:pb-0">
                    <Link href={a.href} className="text-sm text-[#0f2a4a] font-semibold hover:text-[#f4a65d] transition-colors leading-snug block">
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* BACK */}
      <section className="bg-[#f0f4f8] border-t border-[#e8edf2] py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
          <Link href="/resources/blog" className="text-[#0f2a4a] font-semibold flex items-center gap-2 hover:text-[#f4a65d] transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <Link href="/resources/blog/corrosion-monitoring-fundamentals" className="text-[#0f2a4a] font-semibold flex items-center gap-2 hover:text-[#f4a65d] transition-colors text-sm">
            Start from top: Monitoring Fundamentals <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
