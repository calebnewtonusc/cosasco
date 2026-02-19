import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gulf Coast Refinery Case Study | Cosasco',
  description: 'How Cosasco LPR and ER probe monitoring reduced corrosion events by 73% and saved $6.2M annually at a Gulf Coast crude distillation unit.',
}

const results = [
  { stat: '73%', label: 'Reduction in corrosion events' },
  { stat: '$6.2M', label: 'Annual maintenance savings' },
  { stat: '8', label: 'Monitoring zones instrumented' },
  { stat: '18mo', label: 'To full ROI recovery' },
]

const relatedProducts = [
  { name: 'LPR Systems', href: '/products/corrosion-monitoring', desc: 'Real-time instantaneous corrosion rates' },
  { name: 'ER Probes', href: '/products/er-probe', desc: 'Cumulative metal loss in any process fluid' },
  { name: 'Corrosion Coupons', href: '/products/corrosion-coupons', desc: 'Weight-loss baseline verification' },
]

export default function GulfCoastRefineryPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-[#0f2a4a] pt-[72px] pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="text-[#5a7a94] text-sm mb-6 flex flex-wrap gap-1 items-center">
            <Link href="/resources" className="hover:text-[#f4a65d] transition-colors">Resources</Link>
            <span className="mx-1">/</span>
            <Link href="/resources/case-studies" className="hover:text-[#f4a65d] transition-colors">Case Studies</Link>
            <span className="mx-1">/</span>
            <span className="text-white">Gulf Coast Refinery</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-5">
            {['Downstream / Refining', 'LPR Systems', 'Corrosion Coupons'].map((tag) => (
              <span key={tag} className="bg-[#f4a65d]/20 text-[#f4a65d] text-xs font-semibold px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight max-w-4xl">
            Real-Time Corrosion Intelligence at a Gulf Coast Crude Distillation Unit
          </h1>
        </div>
      </section>

      {/* BODY */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-[#0f2a4a] font-black text-2xl mb-4">The Challenge</h2>
                <p className="text-[#566677] leading-relaxed mb-4">
                  A major Gulf Coast refinery processing 180,000 bbl/day of mixed crudes was experiencing severe HCl corrosion in the overhead system of its primary crude distillation unit (CDU). Variable crude slate — shifting between low-TAN domestic crudes and high-acid opportunity crudes — made corrosion rates unpredictable and difficult to manage with fixed inhibitor dosing programs.
                </p>
                <p className="text-[#566677] leading-relaxed mb-4">
                  Over a three-year period, unplanned maintenance attributed to overhead corrosion exceeded <span className="font-semibold text-[#0f2a4a]">$8M</span>. Two unplanned unit shutdowns in 18 months triggered regulatory review and significant lost margin. The existing monitoring program relied on quarterly corrosion coupon pulls — a cadence completely mismatched to the week-to-week variability in crude quality.
                </p>
                <p className="text-[#566677] leading-relaxed">
                  The refinery's corrosion team needed the ability to see corrosion rate changes in real time and adjust inhibitor injection rates before damage accumulated — not weeks after the fact.
                </p>
              </div>

              <div>
                <h2 className="text-[#0f2a4a] font-black text-2xl mb-4">The Cosasco Solution</h2>
                <p className="text-[#566677] leading-relaxed mb-4">
                  Cosasco deployed a combined LPR and ER probe monitoring strategy across eight zones in the CDU overhead circuit: the overhead vapor line, condenser inlet and outlet, accumulator, and four overhead product rundown lines. LPR probes provided instantaneous corrosion rate readings every 60 seconds; ER probes provided cumulative metal loss trend data for long-term validation.
                </p>
                <p className="text-[#566677] leading-relaxed mb-4">
                  Data from all 16 probe positions (LPR + ER at each zone) was aggregated in FieldCom Cloud, with a custom dashboard overlaying corrosion rate trends against crude assay data and inhibitor injection rates. The refinery's corrosion engineer could now see — in real time — exactly how a shift to high-acid crude was affecting corrosion rates, and adjust inhibitor dosing accordingly.
                </p>
                <ul className="space-y-3">
                  {[
                    'LPR probes: instantaneous corrosion rate per ASTM G59, 60-second update cycle',
                    'ER probes: cumulative metal loss trending for baseline and drift detection',
                    'Corrosion coupons retained at 3 critical zones for verification and regulatory compliance',
                    'FieldCom Cloud dashboard with crude assay overlay and inhibitor dosing log',
                    'Cosasco corrosion engineer embedded for 90-day commissioning and optimization',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#566677] text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#f4a65d] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-[#0f2a4a] font-black text-2xl mb-6">Results</h2>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {results.map((r) => (
                    <div key={r.label} className="bg-[#f0f4f8] rounded-xl p-6 text-center">
                      <div className="text-[#f4a65d] font-black text-4xl mb-2">{r.stat}</div>
                      <div className="text-[#566677] text-sm leading-snug">{r.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-[#566677] leading-relaxed">
                  Within six months of full deployment, the refinery had reduced corrosion events by 73% versus the prior two-year baseline. Inhibitor consumption fell 31% as dosing was optimized against real-time corrosion data rather than conservative fixed-rate schedules. The unit has operated through 14 consecutive crude slate changes without a corrosion-related incident.
                </p>
              </div>

              <blockquote className="border-l-4 border-[#f4a65d] pl-6 py-2">
                <p className="text-[#0f2a4a] text-lg font-medium italic leading-relaxed mb-3">
                  &ldquo;We used to find out about corrosion problems when we pulled coupons. Now we know within an hour of a crude switch. The difference is night and day — we&apos;re managing the CDU overhead, not chasing it.&rdquo;
                </p>
                <footer className="text-[#566677] text-sm font-semibold">
                  — Unit Corrosion Engineer, Major Gulf Coast Refinery
                </footer>
              </blockquote>

              <div>
                <h2 className="text-[#0f2a4a] font-black text-2xl mb-5">Products Used</h2>
                <div className="grid gap-4">
                  {relatedProducts.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="flex items-center justify-between border border-[#e8edf2] rounded-xl p-5 hover:border-[#f4a65d] hover:shadow-sm transition-all group"
                    >
                      <div>
                        <p className="text-[#0f2a4a] font-bold group-hover:text-[#f4a65d] transition-colors">{p.name}</p>
                        <p className="text-[#566677] text-sm mt-0.5">{p.desc}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#8898aa] group-hover:text-[#f4a65d] transition-colors flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#f0f4f8] rounded-xl p-6 sticky top-[90px]">
                <h3 className="text-[#0f2a4a] font-black text-lg mb-5">Project Overview</h3>
                <dl className="space-y-4">
                  {[
                    { dt: 'Client', dd: 'Major Gulf Coast Refinery' },
                    { dt: 'Location', dd: 'Gulf Coast, USA' },
                    { dt: 'Process Unit', dd: 'Crude Distillation Unit' },
                    { dt: 'Throughput', dd: '180,000 bbl/day' },
                    { dt: 'Challenge', dd: 'HCl overhead corrosion' },
                    { dt: 'Monitoring Zones', dd: '8 (16 probes total)' },
                    { dt: 'Data Cadence', dd: '60-second LPR update' },
                  ].map(({ dt, dd }) => (
                    <div key={dt} className="border-b border-[#e8edf2] pb-4 last:border-0 last:pb-0">
                      <dt className="text-[#8898aa] text-xs font-semibold uppercase tracking-wider mb-1">{dt}</dt>
                      <dd className="text-[#0f2a4a] font-semibold text-sm">{dd}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0f2a4a] py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white font-black text-3xl mb-4">Ready to take control of corrosion?</h2>
          <p className="text-[#94aabb] mb-8">Speak with a Cosasco refinery specialist about your overhead system.</p>
          <Link
            href="/contact"
            className="inline-block bg-[#f4a65d] hover:bg-[#d4892a] text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  )
}
