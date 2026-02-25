import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Case Studies | Cosasco Corrosion Management',
  description: 'Real-world results from operators worldwide who rely on Cosasco corrosion monitoring and chemical injection solutions.',
}

const caseStudies = [
  {
    href: '/resources/case-studies/north-sea-pipeline',
    industry: 'Gas Transmission',
    title: 'Eliminating Unplanned Shutdowns on a 400km North Sea Gas Transmission Pipeline',
    client: 'Major North Sea Operator',
    stat: '0 unplanned shutdowns in 36 months',
    tags: ['ER Probes', 'Microcor® Wireless'],
  },
  {
    href: '/resources/case-studies/gulf-coast-refinery',
    industry: 'Downstream / Refining',
    title: 'Real-Time Corrosion Intelligence at a Gulf Coast Crude Distillation Unit',
    client: 'Major Gulf Coast Refinery',
    stat: '$6.2M annual maintenance savings',
    tags: ['LPR Systems', 'Corrosion Coupons'],
  },
  {
    href: '/resources/case-studies/water-injection-platform',
    industry: 'Upstream Oil & Gas',
    title: 'Scaling Corrosion Monitoring Across 23 Water Injection Wells',
    client: 'Middle East National Oil Company',
    stat: '40% reduction in inhibitor spend',
    tags: ['Corrosion Coupons', 'Chemical Injection'],
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-[#0f2a4a] pb-16 pt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
          <nav className="text-[#5a7a94] text-sm mb-6">
            <Link href="/resources" className="hover:text-[#f4a65d] transition-colors">Resources</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Case Studies</span>
          </nav>
          <h1 className="text-white font-black text-5xl leading-tight mb-4">Case Studies</h1>
          <p className="text-[#94aabb] text-lg max-w-2xl leading-relaxed">
            Real-world results from operators who trust Cosasco to protect their assets and prevent costly failures.
          </p>
        </div>
      </section>

      {/* CASE STUDY CARDS */}
      <section className="py-16 bg-[#f7f9fc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
          <div className="grid gap-8 md:grid-cols-3">
            {caseStudies.map((cs) => (
              <Link
                key={cs.href}
                href={cs.href}
                className="bg-white border border-[#e8edf2] rounded-xl overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="h-2 bg-[#f4a65d]" />
                <div className="p-8">
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#f4a65d] mb-4">
                    {cs.industry}
                  </span>
                  <h2 className="text-[#0f2a4a] font-black text-lg leading-snug mb-3 group-hover:text-[#f4a65d] transition-colors">
                    {cs.title}
                  </h2>
                  <p className="text-[#566677] text-sm mb-5">{cs.client}</p>
                  <div className="bg-[#f0f4f8] rounded-lg px-4 py-3 mb-5">
                    <p className="text-[#f4a65d] font-black text-xl">{cs.stat}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cs.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-[#e8edf2] text-[#566677] px-2.5 py-1 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-[#f4a65d] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Case Study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f2a4a] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 text-center">
          <h2 className="text-white font-black text-3xl mb-4">Ready to write your own success story?</h2>
          <p className="text-[#94aabb] mb-8 max-w-xl mx-auto">
            Talk to a Cosasco engineer about your corrosion challenge.
          </p>
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
