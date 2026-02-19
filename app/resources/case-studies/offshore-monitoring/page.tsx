import Link from 'next/link'

export const metadata = {
  title: 'North Sea Offshore Platform Corrosion Monitoring | Cosasco Case Study',
  description:
    'How a North Sea platform operator deployed Cosasco FieldCom-integrated monitoring across 12 production platforms, reducing unplanned downtime 68% and extending asset life by 8 years.',
}

export default function OffshoreMonitoringCaseStudy() {
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
            Case Study — Oil &amp; Gas Offshore
          </span>

          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight mb-5">
            North Sea Offshore Platform Monitoring Network
          </h1>

          <p className="text-[#94aabb] text-lg leading-relaxed max-w-2xl">
            North Atlantic Energy deployed Cosasco corrosion monitoring systems with FieldCom
            wireless integration across 12 North Sea production platforms, transforming asset
            integrity management from reactive intervention to fully predictive control.
          </p>
        </div>
      </section>

      {/* KEY METRICS */}
      <section className="bg-[#1a3a5c] py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-[#f4a65d] font-black text-5xl leading-none">68%</p>
              <p className="text-white text-sm mt-2 font-semibold">Reduction in unplanned downtime</p>
              <p className="text-[#94aabb] text-xs mt-1">Measured over 24-month post-deployment period</p>
            </div>
            <div className="text-center border-x border-[#2a4a6c]">
              <p className="text-[#f4a65d] font-black text-5xl leading-none">+8yr</p>
              <p className="text-white text-sm mt-2 font-semibold">Extended asset service life</p>
              <p className="text-[#94aabb] text-xs mt-1">Independent structural assessment confirmed</p>
            </div>
            <div className="text-center">
              <p className="text-[#f4a65d] font-black text-5xl leading-none">12</p>
              <p className="text-white text-sm mt-2 font-semibold">Production platforms monitored</p>
              <p className="text-[#94aabb] text-xs mt-1">Across the central North Sea basin</p>
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
              Corrosion Risk Across an Aging Offshore Fleet in One of the World's Most Aggressive Environments
            </h2>
            <p className="text-[#566677] leading-relaxed mb-4">
              North Atlantic Energy operates 12 fixed production platforms in the central North Sea,
              with several structures now exceeding their original design life. The combination of
              seawater splash zone corrosion, produced water with elevated CO2 and H2S content,
              and the logistical difficulty of offshore inspection created a compounding integrity
              risk that traditional inspection-led programs struggled to manage cost-effectively.
            </p>
            <p className="text-[#566677] leading-relaxed mb-4">
              Corrosion-driven unplanned shutdowns were occurring at a rate that generated
              significant deferred production losses. Each platform visit to respond to a corrosion
              incident carried helicopter mobilization costs, HSE exposure, and typical downtime
              of 12 to 36 hours per event. Aggregated across the fleet, these reactive interventions
              were accounting for a disproportionate share of annual maintenance expenditure.
            </p>
            <p className="text-[#566677] leading-relaxed">
              The asset integrity team required a monitoring solution capable of delivering
              continuous, platform-wide corrosion rate data without requiring additional offshore
              personnel or significantly increasing the data management burden on onshore engineers.
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
              Fleet-Wide FieldCom Integration with Centralized Onshore Analytics
            </h2>
            <p className="text-[#566677] leading-relaxed mb-4">
              Cosasco designed a multi-platform corrosion monitoring architecture anchored by the
              FieldCom wireless data acquisition system installed at each of the 12 platforms.
              ER probes were deployed at critical internal process locations including separator
              inlets, produced water lines, gas export headers, and injection system manifolds,
              with additional atmospheric probes covering topside structural steel in the splash zone.
            </p>
            <p className="text-[#566677] leading-relaxed mb-4">
              All 12 platforms transmit corrosion rate data via satellite link to a central
              onshore analytics dashboard, allowing the asset integrity team to monitor all
              platforms simultaneously from Aberdeen without requiring a dedicated offshore
              presence. Threshold-based alerting automatically flags accelerated corrosion
              conditions for rapid engineering review.
            </p>
            <div className="bg-[#f7f9fc] border border-[#e8edf2] rounded-xl p-6">
              <h3 className="text-[#0f2a4a] font-bold text-base mb-3">Deployment Scope</h3>
              <ul className="space-y-2">
                {[
                  '12 production platforms with full FieldCom wireless data acquisition',
                  'ER probes at internal process locations and topside atmospheric zones',
                  'Satellite data transmission to centralized onshore integrity dashboard',
                  'Automated threshold alerting with escalation to engineering review',
                  'Cosasco retrieval-type fittings for safe probe servicing without shutdown',
                  'Annual calibration and element exchange via planned platform visits',
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
              68% Downtime Reduction and 8-Year Asset Life Extension Across the Fleet
            </h2>
            <p className="text-[#566677] leading-relaxed mb-4">
              In the 24 months following full fleet-wide deployment, North Atlantic Energy recorded
              a 68% reduction in corrosion-driven unplanned production stoppages. Early warning
              alerts generated by the FieldCom network allowed the integrity team to intervene
              with targeted inhibitor injection adjustments or planned maintenance interventions
              before conditions escalated to production-impacting failures.
            </p>
            <p className="text-[#566677] leading-relaxed mb-4">
              Continuous structural monitoring data provided the foundation for an independent
              life extension assessment that confirmed an 8-year extension to the design life
              of three of the oldest platforms in the fleet. This deferral of decommissioning
              expenditure represents one of the program's most significant financial outcomes.
            </p>
            <p className="text-[#566677] leading-relaxed">
              The centralized monitoring architecture also allowed a 40% reduction in routine
              inspection helicopter sorties, delivering both cost savings and a measurable
              reduction in personnel offshore hours and associated safety exposure.
            </p>
          </div>

          {/* QUOTE */}
          <div className="bg-[#0f2a4a] rounded-2xl p-8">
            <svg className="w-8 h-8 text-[#f4a65d] mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-white text-xl font-semibold leading-relaxed mb-6">
              "The FieldCom integration transformed our monitoring program. We now have full fleet
              visibility from our Aberdeen office, and our offshore teams spend their time on
              planned work rather than emergency callouts."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#f4a65d] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                SC
              </div>
              <div>
                <p className="text-white font-bold text-sm">Sarah Chen</p>
                <p className="text-[#94aabb] text-sm">Asset Integrity Lead, North Atlantic Energy</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f7f9fc] border-t border-[#e8edf2] py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[#0f2a4a] font-black text-3xl mb-3">
            Ready to modernize your offshore monitoring program?
          </h2>
          <p className="text-[#566677] mb-8 max-w-xl mx-auto">
            Cosasco engineers can design a FieldCom-integrated monitoring network for your
            offshore assets, with centralized data management and automated alerting.
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
