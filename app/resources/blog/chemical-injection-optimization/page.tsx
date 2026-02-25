import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, TrendingDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Right-Size Chemical Injection: Moving Beyond Conservative Dosing | Cosasco Blog',
  description:
    "Over-dosing corrosion inhibitor is expensive and doesn't always mean better protection. A data-driven approach to injection optimization.",
}

export default function ChemicalInjectionOptimizationPage() {
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
            <span className="text-white">Chemical Injection</span>
          </nav>
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#fef3c7] text-[#92400e] mb-5">
            Chemical Injection
          </span>
          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight max-w-4xl mb-5">
            How to Right-Size Chemical Injection: Moving Beyond Conservative Dosing
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#94aabb]">
            <span className="font-semibold text-white">Cosasco Engineering Team</span>
            <span className="text-[#3a5a74]">|</span>
            <span>Jan 15, 2026</span>
            <span className="text-[#3a5a74]">|</span>
            <span>5 min read</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2">
            <div className="text-[#566677] leading-relaxed space-y-6 text-[1.05rem]">
              <p className="text-xl text-[#0f2a4a] font-semibold leading-snug">
                Most pipeline operators are over-dosing their corrosion inhibitors by 20–50%.
                It&apos;s an expensive safety blanket that doesn&apos;t necessarily provide better
                protection - and in some cases, over-injection actually degrades performance.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                Why Conservative Dosing Persists
              </h2>
              <p>
                The instinct toward conservative inhibitor dosing is understandable. Corrosion
                failures are catastrophic, corrosion inhibitors are cheap relative to pipeline
                repair costs, and the consequence of under-dosing is visible while the consequence
                of over-dosing is invisible (waste, environmental burden, potential emulsion issues).
              </p>
              <p>
                The problem is that conservative dosing becomes the default even when operating
                conditions change. Inhibitor rates set during initial commissioning often stay
                unchanged for years, even as water cut, flow velocity, CO₂ partial pressure, and
                temperature shift significantly over the life of the asset.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                The Cost of Over-Dosing
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { stat: '20–50%', label: 'Typical over-injection rate in mature fields', icon: TrendingDown },
                  { stat: '$80K–$500K', label: 'Annual inhibitor waste in a mid-size pipeline system', icon: TrendingDown },
                  { stat: '3–8×', label: 'ROI from inhibitor optimization programs', icon: TrendingDown },
                ].map(({ stat, label }) => (
                  <div key={stat} className="bg-[#f0f4f8] border border-[#e8edf2] rounded-xl p-5 text-center">
                    <p className="text-[#0f2a4a] font-black text-2xl mb-2">{stat}</p>
                    <p className="text-[#566677] text-xs leading-relaxed">{label}</p>
                  </div>
                ))}
              </div>

              <p>
                Beyond direct chemical cost, over-dosing can create secondary problems: some
                inhibitors form stable emulsions at high concentrations that complicate separation
                operations. Certain film-forming inhibitors at excess dose adsorb in multiple
                layers - the outer layers do not contribute to corrosion protection and can
                interfere with scale inhibitor performance.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                The Data-Driven Optimization Approach
              </h2>
              <p>
                Effective inhibitor optimization requires three data streams working together:
              </p>
              <div className="space-y-4">
                {[
                  {
                    step: '1',
                    title: 'Establish a real-time corrosion rate baseline',
                    body: 'LPR probes downstream of the injection point measure instantaneous corrosion rate. Establish a 2–4 week baseline at current injection rate to understand the baseline rate variability before making any changes.',
                  },
                  {
                    step: '2',
                    title: 'Step-down dosage in controlled decrements',
                    body: 'Reduce inhibitor dose by 10% increments with at least 48 hours between steps. LPR will show if and when the corrosion rate begins to rise, identifying the actual minimum effective dose for current conditions.',
                  },
                  {
                    step: '3',
                    title: 'Correlate with process upsets',
                    body: 'Cross-reference LPR data with process historian for water cut changes, flow rate variations, and temperature swings. This reveals whether dose excursions are needed during specific operating conditions.',
                  },
                  {
                    step: '4',
                    title: 'Confirm with ER and quarterly coupons',
                    body: 'LPR shows instantaneous rate; ER confirms cumulative metal loss over the optimization period. Coupon retrieval at the end of the trial confirms actual material loss and allows inhibitor film evaluation.',
                  },
                ].map(({ step, title, body }) => (
                  <div key={step} className="flex gap-4 bg-[#f7f9fc] border border-[#e8edf2] rounded-xl p-5">
                    <span className="w-8 h-8 rounded-full bg-[#0f2a4a] text-white text-sm font-bold flex-shrink-0 flex items-center justify-center">
                      {step}
                    </span>
                    <div>
                      <p className="text-[#0f2a4a] font-bold mb-1">{title}</p>
                      <p className="text-[#566677] text-sm leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                Adaptive Injection with CDO
              </h2>
              <p>
                Cosasco&apos;s CDO software supports direct integration with chemical injection
                pump controllers via Modbus/HART. This enables closed-loop adaptive injection:
                when LPR detects a corrosion rate increase above a defined threshold, the system
                automatically increases the injection dose until the rate returns to baseline, then
                steps back to the optimized rate.
              </p>
              <p>
                Operators in the Gulf of Mexico using adaptive injection have reported 30–40%
                inhibitor cost reductions while maintaining corrosion rates below 2 mpy - well
                within NORSOK M-506 and NACE SP0106 guidance levels.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                Key Takeaways
              </h2>
              <ul className="space-y-2">
                {[
                  'Conservative dosing is not the same as optimal protection - it often isn\'t better.',
                  'LPR is the right tool for inhibitor optimization because it responds in real time.',
                  'Step-down optimization in controlled increments is safe and quantifiable.',
                  'Adaptive injection via CDO eliminates the need for manual dose management.',
                  'ROI on instrumentation is typically recovered in less than one year of reduced chemical spend.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="text-[#f4a65d] font-bold flex-shrink-0 mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-[#f0f4f8] border border-[#e8edf2] rounded-xl p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#566677] mb-4">Related Resources</p>
              <ul className="space-y-3">
                {[
                  { href: '/products/chemical-injection', label: 'Chemical Injection Systems' },
                  { href: '/products/lpr-probes', label: 'LPR Probe Systems' },
                  { href: '/software', label: 'CDO Software' },
                  { href: '/resources/case-studies/gulf-coast-refinery', label: 'Gulf Coast Case Study' },
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

            <div className="bg-[#0f2a4a] rounded-xl p-6 text-white">
              <p className="font-black text-lg mb-2">Optimize Your Program</p>
              <p className="text-[#94aabb] text-sm leading-relaxed mb-4">
                Ask us about our chemical injection optimization audit service - we analyze your
                existing data and identify the minimum effective dose.
              </p>
              <Link href="/contact" className="block text-center bg-[#f4a65d] hover:bg-[#d4892a] text-white font-bold py-3 rounded-lg transition-colors text-sm">
                Request an Audit
              </Link>
            </div>

            <div className="bg-white border border-[#e8edf2] rounded-xl p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#566677] mb-4">More Articles</p>
              <ul className="space-y-4">
                {[
                  { href: '/resources/blog/corrosion-monitoring-fundamentals', title: 'ER vs. LPR vs. Coupons: Fundamentals' },
                  { href: '/resources/blog/h2s-sour-service-integrity', title: 'H₂S Sour Service Corrosion Management' },
                  { href: '/resources/blog/cdo-cloud-deployment', title: 'CDO Cloud Platform' },
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
          <Link href="/resources/blog/cdo-cloud-deployment" className="text-[#0f2a4a] font-semibold flex items-center gap-2 hover:text-[#f4a65d] transition-colors text-sm">
            Next: CDO Cloud Platform <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
