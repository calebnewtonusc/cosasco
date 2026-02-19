import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'North Sea Pipeline Case Study | Cosasco',
  description: 'How Cosasco ER probes and FieldCom eliminated unplanned shutdowns on a 400km North Sea gas transmission pipeline operated by a major North Sea operator.',
}

const results = [
  { stat: '0', label: 'Unplanned shutdowns in 36 months' },
  { stat: '$2.4M', label: 'Daily shutdown exposure eliminated' },
  { stat: '14', label: 'Active monitoring points' },
  { stat: '36mo', label: 'Continuous corrosion dataset' },
]

const relatedProducts = [
  { name: 'ER Probes', href: '/products/er-probe', desc: 'Electrical resistance corrosion monitoring' },
  { name: 'FieldCom Systems', href: '/products/fieldcom', desc: 'Cloud-connected data acquisition' },
  { name: 'Access Fittings', href: '/products/access-fittings', desc: 'Live retrieval under pressure' },
]

export default function NorthSeaPipelinePage() {
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
            <span className="text-white">North Sea Pipeline</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-5">
            {['Gas Transmission', 'ER Probes', 'FieldCom'].map((tag) => (
              <span key={tag} className="bg-[#f4a65d]/20 text-[#f4a65d] text-xs font-semibold px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight max-w-4xl">
            Eliminating Unplanned Shutdowns on a 400km North Sea Gas Transmission Pipeline
          </h1>
        </div>
      </section>

      {/* BODY */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <div>
                <h2 className="text-[#0f2a4a] font-black text-2xl mb-4">The Challenge</h2>
                <p className="text-[#566677] leading-relaxed mb-4">
                  A major North Sea operator faced mounting integrity risk on a 400km subsea gas transmission pipeline operating at 180 bar in a high-H₂S environment. Sour gas at operating conditions created accelerated internal corrosion, while the remote, offshore environment made reactive interventions extraordinarily expensive.
                </p>
                <p className="text-[#566677] leading-relaxed mb-4">
                  Each unplanned shutdown cost an estimated <span className="font-semibold text-[#0f2a4a]">$2.4M per day</span> in lost throughput, emergency mobilization, and regulatory reporting obligations. The operator's existing corrosion coupon-only program provided retrospective data on 90-day retrieval cycles — far too slow to catch fast-developing corrosion events before they impacted operations.
                </p>
                <p className="text-[#566677] leading-relaxed">
                  The integrity team needed continuous, real-time corrosion rate data across the full pipeline length, with automated alerting when rates exceeded threshold — all without increasing personnel exposure offshore.
                </p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-[#0f2a4a] font-black text-2xl mb-4">The Cosasco Solution</h2>
                <p className="text-[#566677] leading-relaxed mb-4">
                  Cosasco engineers conducted a full pipeline risk assessment to identify the 14 highest-risk monitoring points based on flow modeling, operating history, and geometry. HPHT-rated ER probe systems were installed at each location via Cosasco flush-mounted access fittings, allowing safe installation without shutdown.
                </p>
                <p className="text-[#566677] leading-relaxed mb-4">
                  All 14 points were connected to FieldCom remote data acquisition units, transmitting corrosion rate data to FieldCom Cloud every 15 minutes. The operator's integrity team received automated email and SMS alerts when instantaneous corrosion rates exceeded pre-defined thresholds at any point on the pipeline.
                </p>
                <ul className="space-y-3">
                  {[
                    'HPHT ER probes rated to 10,000 PSI / 300°C, H₂S-compatible materials',
                    'Flush-mounted Cosasco access fittings for hot-tap installation under live pressure',
                    'FieldCom remote RTUs with 4G/satellite redundant communication',
                    'FieldCom Cloud dashboard with configurable corrosion rate alarms',
                    'Cosasco field engineers on-call for 24/7 data interpretation support',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#566677] text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#f4a65d] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results stats */}
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
                  Within 18 months of deployment, the FieldCom alert system detected two corrosion exceedances that would have gone undetected under the previous 90-day coupon cycle. Both events were resolved through targeted chemical inhibitor injection before any pipeline integrity was compromised. The operator has since extended the FieldCom contract for an additional five years.
                </p>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-[#f4a65d] pl-6 py-2">
                <p className="text-[#0f2a4a] text-lg font-medium italic leading-relaxed mb-3">
                  &ldquo;The shift from retrospective coupon data to real-time FieldCom monitoring fundamentally changed how we manage pipeline integrity. We went from reacting to corrosion events to predicting and preventing them.&rdquo;
                </p>
                <footer className="text-[#566677] text-sm font-semibold">
                  — Senior Integrity Engineer, Major North Sea Operator
                </footer>
              </blockquote>

              {/* Related products */}
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
                    { dt: 'Client', dd: 'Major North Sea Operator' },
                    { dt: 'Location', dd: 'North Sea, Norway' },
                    { dt: 'Pipeline Length', dd: '400 km' },
                    { dt: 'Operating Pressure', dd: '180 bar' },
                    { dt: 'Environment', dd: 'High H₂S sour gas' },
                    { dt: 'Monitoring Points', dd: '14' },
                    { dt: 'Data Frequency', dd: 'Every 15 minutes' },
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

      {/* CTA */}
      <section className="bg-[#0f2a4a] py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white font-black text-3xl mb-4">Ready to eliminate corrosion risk?</h2>
          <p className="text-[#94aabb] mb-8">Talk to a Cosasco engineer about your pipeline integrity challenge.</p>
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
