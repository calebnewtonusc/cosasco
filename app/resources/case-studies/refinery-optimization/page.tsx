import Link from 'next/link'

export const metadata = {
  title: 'Midwest Refinery Corrosion Optimization | Cosasco Case Study',
  description:
    'How MidWest Refining Corp deployed Cosasco integrated corrosion monitoring across 3 refinery units, reducing corrosion-related losses 81% and achieving full ROI in 14 months.',
}

export default function RefineryOptimizationCaseStudy() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-[#0f2a4a] pt-[72px] pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-[#94aabb] hover:text-white text-sm font-medium transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Resources
          </Link>

          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#f4a65d] bg-[#f4a65d]/10 border border-[#f4a65d]/30 px-3 py-1 rounded-full mb-5">
            Case Study — Petrochemical Refining
          </span>

          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight mb-5">
            Integrated Refinery Corrosion Optimization Program
          </h1>

          <p className="text-[#94aabb] text-lg leading-relaxed max-w-2xl">
            MidWest Refining Corp deployed Cosasco integrated corrosion monitoring and chemical
            injection systems across three refinery processing units, transitioning from reactive
            maintenance to fully predictive corrosion management in 18 months.
          </p>
        </div>
      </section>

      {/* KEY METRICS */}
      <section className="bg-[#1a3a5c] py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-[#f4a65d] font-black text-5xl leading-none">81%</p>
              <p className="text-white text-sm mt-2 font-semibold">Reduction in corrosion-related losses</p>
              <p className="text-[#94aabb] text-xs mt-1">Measured against 3-year pre-program baseline</p>
            </div>
            <div className="text-center border-x border-[#2a4a6c]">
              <p className="text-[#f4a65d] font-black text-5xl leading-none">14mo</p>
              <p className="text-white text-sm mt-2 font-semibold">Time to full program ROI</p>
              <p className="text-[#94aabb] text-xs mt-1">Payback period confirmed by finance team</p>
            </div>
            <div className="text-center">
              <p className="text-[#f4a65d] font-black text-5xl leading-none">3</p>
              <p className="text-white text-sm mt-2 font-semibold">Refinery units fully instrumented</p>
              <p className="text-[#94aabb] text-xs mt-1">CDU, FCC, and hydroprocessing units</p>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-14">

          {/* CHALLENGE */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="bg-[#f4a65d] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Challenge
              </span>
              <div className="flex-1 h-px bg-[#e8edf2]" />
            </div>
            <h2 className="text-[#0f2a4a] font-black text-2xl mb-4">
              Unpredictable Corrosion Events Driving Unplanned Shutdowns Across Three Process Units
            </h2>
            <p className="text-[#566677] leading-relaxed mb-4">
              MidWest Refining Corp operates a 210,000 BPD refinery complex in the upper Midwest
              processing a high-sulfur crude slate with elevated naphthenic acid content. The crude
              diet created severe high-temperature naphthenic acid corrosion (NAC) risk in the
              crude distillation unit alongside accelerated H2S-driven sulfidic corrosion in the
              FCC and hydroprocessing units.
            </p>
            <p className="text-[#566677] leading-relaxed mb-4">
              The corrosion engineering team was operating primarily in reactive mode — corrosion
              damage was being discovered during scheduled turnarounds or, worse, following
              unexpected process leaks requiring emergency shutdown. The unpredictability of
              corrosion-driven incidents made turnaround planning unreliable and frequently
              resulted in scope additions that extended downtime beyond projections.
            </p>
            <p className="text-[#566677] leading-relaxed">
              A full-cycle review of maintenance costs attributed 34% of total unit maintenance
              spend to corrosion-related repairs, replacements, and associated production losses —
              a figure that made the business case for a proactive monitoring investment compelling
              and urgent.
            </p>
          </div>

          {/* SOLUTION */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="bg-[#0f2a4a] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Solution
              </span>
              <div className="flex-1 h-px bg-[#e8edf2]" />
            </div>
            <h2 className="text-[#0f2a4a] font-black text-2xl mb-4">
              Integrated ER Monitoring, Chemical Injection, and Corrosion Data Management
            </h2>
            <p className="text-[#566677] leading-relaxed mb-4">
              Cosasco conducted a full corrosion threat assessment across the CDU, FCC, and
              hydroprocessing units, mapping process conditions, metallurgy, and historical damage
              records to develop a risk-ranked monitoring strategy. The resulting program placed
              Cosasco ER probes at 87 locations across all three units, with dense coverage at
              high-temperature crude transfer lines, vacuum tower overhead systems, and FCC
              fractionator bottoms circuits.
            </p>
            <p className="text-[#566677] leading-relaxed mb-4">
              Chemical inhibitor injection was integrated into the monitoring architecture, with
              Cosasco chemical injection quill systems installed at key injection points. ER-derived
              corrosion rate data feeds directly into a corrosion data management system, allowing
              the team to correlate inhibitor injection rates with measured corrosion performance
              and optimize dosing in near real time.
            </p>
            <div className="bg-[#f7f9fc] border border-[#e8edf2] rounded-xl p-6">
              <h3 className="text-[#0f2a4a] font-bold text-base mb-3">Deployment Scope</h3>
              <ul className="space-y-2">
                {[
                  '87 ER probe monitoring points across CDU, FCC, and hydroprocessing units',
                  'Cosasco chemical injection quill systems at 24 injection locations',
                  'High-temperature ER probe elements rated to 350°C for NAC service',
                  'Corrosion data management system with DCS integration',
                  'Corrosion rate trending with automated inhibitor dosing feedback',
                  'Cosasco application engineering support throughout commissioning and optimization',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[#566677] text-sm">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#f4a65d] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RESULTS */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="bg-[#f4a65d] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Results
              </span>
              <div className="flex-1 h-px bg-[#e8edf2]" />
            </div>
            <h2 className="text-[#0f2a4a] font-black text-2xl mb-4">
              81% Loss Reduction and Full ROI in 14 Months
            </h2>
            <p className="text-[#566677] leading-relaxed mb-4">
              Over the 18 months following full program implementation, MidWest Refining Corp
              recorded an 81% reduction in corrosion-related production and maintenance losses
              against the pre-program baseline. The shift from reactive to predictive maintenance
              eliminated two unplanned corrosion-driven shutdowns that would have historically
              occurred during the period, directly preserving an estimated $4.8M in production value.
            </p>
            <p className="text-[#566677] leading-relaxed mb-4">
              Turnaround planning improved substantially. The continuous corrosion rate dataset
              enabled the corrosion engineering team to prioritize inspection and replacement
              scope by actual degradation rate rather than conservative design assumption,
              reducing average turnaround duration by 11% across two scheduled maintenance events.
            </p>
            <p className="text-[#566677] leading-relaxed">
              The program achieved full financial payback in 14 months — well ahead of the
              18-month target set in the original business case. The corrosion team attributes
              the accelerated payback to the speed at which the inhibitor optimization feedback
              loop began delivering measurable corrosion rate reductions in the first six months
              of operation.
            </p>
          </div>

          {/* QUOTE */}
          <div className="bg-[#0f2a4a] rounded-2xl p-8">
            <svg className="w-8 h-8 text-[#f4a65d] mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-white text-xl font-semibold leading-relaxed mb-6">
              "We went from reactive to fully predictive in 18 months. The Cosasco program gave
              our team the data to make decisions confidently — not just react to the last leak."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#f4a65d] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                DP
              </div>
              <div>
                <p className="text-white font-bold text-sm">David Park</p>
                <p className="text-[#94aabb] text-sm">Corrosion Engineer, MidWest Refining Corp</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f7f9fc] border-t border-[#e8edf2] py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[#0f2a4a] font-black text-3xl mb-3">
            Ready to optimize your refinery corrosion program?
          </h2>
          <p className="text-[#566677] mb-8 max-w-xl mx-auto">
            Cosasco application engineers can assess your process units, design an integrated
            monitoring and injection program, and support implementation through commissioning.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="bg-[#f4a65d] text-white font-bold px-7 py-3 rounded-lg hover:bg-[#d4892a] transition-colors"
            >
              Talk to an Engineer
            </Link>
            <Link
              href="/resources"
              className="border border-[#e8edf2] text-[#0f2a4a] font-bold px-7 py-3 rounded-lg hover:border-[#0f2a4a] transition-colors"
            >
              Back to Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
