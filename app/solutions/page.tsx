import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Industry Solutions | Cosasco Corrosion Monitoring',
  description:
    'Cosasco delivers tailored corrosion monitoring and chemical injection programs for oil & gas, petrochemical, water treatment, chemical processing, pulp & paper, and utilities industries worldwide.',
}

const industries = [
  {
    num: '01',
    slug: 'oil-gas',
    name: 'Oil & Gas',
    description:
      'From wellhead to refinery gate, Cosasco monitors corrosive crude streams, sour gas, and produced water across upstream, midstream, and downstream assets. Our ER probe networks and chemical injection systems protect pipelines, separators, and offshore platforms in the world\'s most demanding environments.',
    challenges: [
      'H₂S/CO₂ sweet-sour internal corrosion in gathering lines',
      'Produced water scaling and microbiologically influenced corrosion',
      'Inhibitor overdose/underdose in dynamic multi-phase pipelines',
    ],
  },
  {
    num: '02',
    slug: 'petrochemical',
    name: 'Petrochemical',
    description:
      'Refineries and petrochemical plants face sulfidic corrosion, naphthenic acid attack, and coke-induced erosion at extreme process temperatures. Cosasco high-temperature ER probes and flush-mount access fittings deliver continuous integrity data without taking units out of service.',
    challenges: [
      'Sulfidic and naphthenic acid corrosion above 450°F',
      'Coke deposition and erosion-corrosion in cracking unit transfer lines',
      'Inspection interval optimization to extend turnaround cycles',
    ],
  },
  {
    num: '03',
    slug: 'water-treatment',
    name: 'Water Treatment',
    description:
      'Municipal and industrial water systems face pH variability, aggressive chlorine chemistry, and microbiologically influenced corrosion across distribution networks and treatment facilities. Cosasco provides low-maintenance probes, bypass coupon assemblies, and precise chemical dosing quills for reliable long-term monitoring.',
    challenges: [
      'pH fluctuation causing acidic and alkaline pipe attack',
      'MIC and biofilm growth in low-flow distribution zones',
      'Chemical dosing optimization for scale and corrosion inhibitors',
    ],
  },
  {
    num: '04',
    slug: 'chemical-processing',
    name: 'Chemical Processing',
    description:
      'Acid, caustic, solvent, and oxidizer service demands specialty alloy probes and PSM-compliant monitoring programs. Cosasco offers Hastelloy, titanium, and high-alloy wetted components with full material traceability for the most aggressive chemical process fluids.',
    challenges: [
      'Aggressive acid and caustic corrosion in reactor and storage vessels',
      'PSM compliance requirements and full audit trail documentation',
      'Vapor-phase and condensate attack in column overhead systems',
    ],
  },
  {
    num: '05',
    slug: 'pulp-paper',
    name: 'Pulp & Paper',
    description:
      'Kraft and sulfite mills expose structural steel and process equipment to caustic digester liquor, oxidizing bleach-plant chemistry, and high-temperature black liquor. Cosasco field-proven probes and retractable insertion systems sustain uptime in these aggressive wet-process environments.',
    challenges: [
      'Caustic and sulfide attack in kraft digesters and wash lines',
      'Oxidizing chlorine dioxide chemistry in bleach plant stages',
      'High-temperature black liquor corrosion in recovery boiler systems',
    ],
  },
  {
    num: '06',
    slug: 'utilities',
    name: 'Utilities',
    description:
      'Power plants and district cooling systems face cooling water corrosion, steam cycle chemistry degradation, and atmospheric attack on structural steel. Cosasco monitoring hardware and chemical injection systems extend asset life and reduce the unplanned outages that cost utilities millions per incident.',
    challenges: [
      'Cooling water and condenser tube corrosion under-deposit attack',
      'Steam cycle and boiler water chemistry excursions',
      'Atmospheric and submerged structural steel corrosion compliance',
    ],
  },
  {
    num: '07',
    slug: 'mining',
    name: 'Mining & Minerals',
    description:
      'Mining and mineral processing operations expose equipment to highly aggressive slurries, acidic leach solutions, and abrasive particulates. Cosasco erosion-corrosion monitoring and wear-resistant probe materials provide continuous asset integrity data in the industry\'s harshest wet-process environments.',
    challenges: [
      'Erosion-corrosion from abrasive ore slurry in pipelines and pumps',
      'Acid mine drainage attack on structural and process equipment',
      'Inhibitor dosing optimization for complex multi-chemistry leach circuits',
    ],
  },
  {
    num: '08',
    slug: 'gas-transmission',
    name: 'Gas Transmission',
    description:
      'Natural gas transmission pipelines face internal corrosion from water dropout, CO₂, H₂S, and organic acids in rich gas streams. Cosasco inline ER probe networks, chemical injection quills, and corrosion coupon bypass assemblies provide continuous monitoring without interrupting pipeline operations.',
    challenges: [
      'CO₂ and H₂S sweet-sour corrosion at water dropout points',
      'Under-deposit corrosion from glycol, amine, and condensate carryover',
      'Chemical inhibitor delivery optimization in high-velocity gas streams',
    ],
  },
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-[#0f2a4a] text-white overflow-hidden">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#f4a65d]" aria-hidden="true" />
        <div className="cx relative py-20 md:py-28">
          <nav className="flex items-center gap-2 text-sm text-[#8ab4d4] mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Industry Solutions</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-4">Industry Solutions</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Corrosion Programs Built<br />
              <span className="text-[#f4a65d]">for Your Industry</span>
            </h1>
            <p className="text-[#8ab4d4] text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Corrosion is not a generic problem. Each industry carries its own process chemistry,
              pressure ratings, regulatory environment, and failure consequences. Cosasco engineers
              monitoring programs that account for all of it — backed by 70+ years of domain expertise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary">
                Speak with an Engineer
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/products" className="btn btn-outline-white">
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industry Intro ── */}
      <section className="bg-white py-20 md:py-24">
        <div className="cx">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-3">Sector Expertise</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0f2a4a] mb-4">
              Tailored for Your Industry
            </h2>
            <p className="text-[#566677] text-lg max-w-2xl mx-auto leading-relaxed">
              Cosasco domain expertise runs deep. Our application engineers have spent decades
              solving corrosion problems specific to each industry — from sour crude pipelines to
              municipal water networks to kraft pulp mills. Select your sector to explore
              purpose-built monitoring solutions and proven case results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div
                key={ind.slug}
                className="bg-white border border-[#e8edf2] rounded-xl p-7 hover:shadow-lg hover:border-[#f4a65d] transition-all group flex flex-col"
              >
                <p className="text-[#f4a65d] text-xs font-bold tracking-wider mb-2">{ind.num}</p>
                <h3 className="font-black text-[#0f2a4a] text-xl group-hover:text-[#f4a65d] transition-colors mb-0">
                  {ind.name}
                </h3>
                <p className="text-[#566677] text-sm mt-2 leading-relaxed mb-5">
                  {ind.description}
                </p>

                <div className="mb-5">
                  <p className="text-xs font-bold text-[#1e2b3a] mb-3">Common Challenges:</p>
                  <ul className="space-y-2">
                    {ind.challenges.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-[#566677]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f4a65d] flex-shrink-0 mt-1.5" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 border-t border-[#e8edf2]">
                  <Link
                    href={`/solutions/${ind.slug}`}
                    className="text-[#f4a65d] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    View Solutions
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section className="bg-[#f7f9fc] py-16 border-t border-[#e8edf2]">
        <div className="cx text-center">
          <h2 className="text-2xl md:text-3xl font-black text-[#0f2a4a] mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-[#566677] text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Our NACE-certified application engineers will assess your process conditions and
            recommend the right monitoring strategy — at no cost.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Request a Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
