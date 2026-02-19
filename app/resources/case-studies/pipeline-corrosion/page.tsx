import Link from 'next/link'

export const metadata = {
  title: 'Gulf Coast Pipeline Corrosion Monitoring | Cosasco Case Study',
  description:
    'How a major Gulf Coast pipeline operator deployed Cosasco ER probe networks across 847 miles of transmission infrastructure, reducing corrosion incidents 73% and saving $2.1M annually.',
}

export default function PipelineCorrosionCaseStudy() {
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
            Case Study — Oil &amp; Gas Midstream
          </span>

          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight mb-5">
            Gulf Coast Transmission Pipeline Network
          </h1>

          <p className="text-[#94aabb] text-lg leading-relaxed max-w-2xl">
            A major Gulf Coast pipeline operator deployed Cosasco ER probe networks across 847 miles
            of transmission infrastructure, achieving industry-leading corrosion control outcomes
            through real-time electrochemical monitoring.
          </p>
        </div>
      </section>

      {/* KEY METRICS */}
      <section className="bg-[#1a3a5c] py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-[#f4a65d] font-black text-5xl leading-none">73%</p>
              <p className="text-white text-sm mt-2 font-semibold">Reduction in corrosion incidents</p>
              <p className="text-[#94aabb] text-xs mt-1">Year-over-year after full deployment</p>
            </div>
            <div className="text-center border-x border-[#2a4a6c]">
              <p className="text-[#f4a65d] font-black text-5xl leading-none">$2.1M</p>
              <p className="text-white text-sm mt-2 font-semibold">Annual maintenance savings</p>
              <p className="text-[#94aabb] text-xs mt-1">Verified against pre-program baseline</p>
            </div>
            <div className="text-center">
              <p className="text-[#f4a65d] font-black text-5xl leading-none">847</p>
              <p className="text-white text-sm mt-2 font-semibold">Miles of pipeline monitored</p>
              <p className="text-[#94aabb] text-xs mt-1">Across 6 pipeline segments</p>
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
              Managing Corrosion Across a Multi-Segment Gulf Coast Pipeline Network
            </h2>
            <p className="text-[#566677] leading-relaxed mb-4">
              Gulf Coast Pipeline Co. operates 847 miles of natural gas transmission infrastructure
              spanning six distinct pipeline segments through coastal and estuarine environments.
              The combination of high-humidity atmospheric conditions, H2S-containing product streams,
              and saline soil corrosivity created an aggressive corrosion threat that manual inspection
              programs were unable to adequately characterize.
            </p>
            <p className="text-[#566677] leading-relaxed mb-4">
              Prior to the Cosasco deployment, the operator relied on periodic smart pig runs and
              annual direct assessment programs. Between inspection cycles, the integrity team had
              no real-time visibility into active corrosion rates, leaving critical assets exposed
              to undetected degradation between scheduled surveys.
            </p>
            <p className="text-[#566677] leading-relaxed">
              Regulatory pressure from PHMSA and increasing insurance requirements for continuous
              monitoring data drove the decision to implement a permanent, real-time electrochemical
              resistance (ER) monitoring network across the full pipeline system.
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
              Distributed ER Probe Network with FieldCom Wireless Data Acquisition
            </h2>
            <p className="text-[#566677] leading-relaxed mb-4">
              Cosasco engineered and deployed a distributed corrosion monitoring network comprising
              112 ER probe insertion points across all six pipeline segments. Probe locations were
              selected using Cosasco proprietary corrosion threat assessment methodology, targeting
              high-risk zones including river crossings, coastal lowlands, compressor station discharge
              headers, and areas with historical third-party damage history.
            </p>
            <p className="text-[#566677] leading-relaxed mb-4">
              Each monitoring station utilizes Cosasco flush-mount ER probes installed via Cosasco
              retrieval-type access fittings, allowing hot retrieval and replacement without pipeline
              depressurization. Data is transmitted wirelessly via the Cosasco FieldCom unit to
              a central SCADA integration layer, delivering continuous corrosion rate readings
              with configurable alarm thresholds.
            </p>
            <div className="bg-[#f7f9fc] border border-[#e8edf2] rounded-xl p-6">
              <h3 className="text-[#0f2a4a] font-bold text-base mb-3">Deployment Scope</h3>
              <ul className="space-y-2">
                {[
                  '112 ER probe insertion points across 6 pipeline segments',
                  'Cosasco retrieval-type access fittings for zero-depressurization service',
                  'FieldCom wireless data acquisition units at every station',
                  'Full SCADA integration with real-time alarm and trending',
                  'Chemical inhibitor injection system integration at 18 high-risk locations',
                  'Annual ER element exchange program managed by Cosasco field service',
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
              73% Fewer Incidents and $2.1M in Verified Annual Savings
            </h2>
            <p className="text-[#566677] leading-relaxed mb-4">
              Within 18 months of full network activation, Gulf Coast Pipeline Co. recorded a 73%
              reduction in corrosion-related pipeline incidents compared to the three-year pre-program
              baseline. Real-time corrosion rate data enabled the integrity team to optimize chemical
              inhibitor injection dosing dynamically, reducing inhibitor consumption by 31% while
              simultaneously improving protection effectiveness.
            </p>
            <p className="text-[#566677] leading-relaxed mb-4">
              The ability to trend corrosion rates continuously allowed the team to extend the interval
              between smart pig inspection runs on three of the six segments, deferring significant
              inspection costs while maintaining full regulatory compliance. Total verified annual
              maintenance savings attributable to the monitoring program reached $2.1M.
            </p>
            <p className="text-[#566677] leading-relaxed">
              The continuous dataset generated by the ER network also provided the operator with
              defensible integrity management documentation satisfying PHMSA gas transmission
              reporting requirements for covered segments under 49 CFR Part 192.
            </p>
          </div>

          {/* QUOTE */}
          <div className="bg-[#0f2a4a] rounded-2xl p-8">
            <svg className="w-8 h-8 text-[#f4a65d] mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-white text-xl font-semibold leading-relaxed mb-6">
              "Cosasco's ER probe network gave us real-time visibility we never had before. We went
              from flying blind between pig runs to knowing exactly what's happening at every
              high-risk segment every single day."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#f4a65d] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                JM
              </div>
              <div>
                <p className="text-white font-bold text-sm">John Martinez</p>
                <p className="text-[#94aabb] text-sm">Integrity Manager, Gulf Coast Pipeline Co.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f7f9fc] border-t border-[#e8edf2] py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[#0f2a4a] font-black text-3xl mb-3">
            Ready to build your pipeline monitoring program?
          </h2>
          <p className="text-[#566677] mb-8 max-w-xl mx-auto">
            Cosasco engineers can design a distributed ER probe network tailored to your pipeline
            system, corrosion threats, and regulatory requirements.
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
