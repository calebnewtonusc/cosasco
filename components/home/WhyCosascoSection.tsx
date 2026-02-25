import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'

const features = [
  {
    title: '75+ Years of Application Engineering',
    desc: 'Not just products. Deep domain expertise across every major industrial process and corrosion mechanism.',
  },
  {
    title: 'Online Retrieval Without Shutdown',
    desc: 'Live insertion and extraction of monitoring equipment at full operating pressure — no downtime, no lost production.',
  },
  {
    title: 'From Probe to Cloud in One System',
    desc: 'ER probes, access fittings, Microcor® wireless, and analytics — a fully integrated, interoperable system.',
  },
  {
    title: 'Global Support Network',
    desc: 'Engineers and distributors in 110 countries ready to support your program, wherever your assets are.',
  },
]

export default function WhyCosascoSection() {
  return (
    <AnimateOnScroll delay={0}>
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* Left column */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#f4a65d' }}>
              Why Cosasco
            </span>
            <h2 className="font-black text-3xl lg:text-4xl mt-3 leading-tight" style={{ color: '#0f2a4a' }}>
              The most complete corrosion management portfolio in the industry.
            </h2>
            <p className="mt-5 leading-relaxed" style={{ color: '#374151' }}>
              For over seven decades, Cosasco has led the industry in corrosion
              and erosion monitoring technology. From the original retractable
              probe and coupon rack designs to today&apos;s Microcor® wireless
              data systems, every product is built on deep application
              engineering knowledge. Major operators trust Cosasco because we
              understand the chemistry, the pressures, and the consequences.
            </p>
            <Link
              href="/about"
              className="text-sm font-semibold mt-6 inline-flex items-center gap-1 transition-colors"
              style={{ color: '#f4a65d' }}
            >
              Learn about our history
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right column — feature rows */}
          <div className="mt-12 lg:mt-0 space-y-7">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <CheckCircle size={20} className="shrink-0 mt-0.5" style={{ color: '#f4a65d' }} />
                <div>
                  <div className="font-semibold" style={{ color: '#0f2a4a' }}>
                    {feature.title}
                  </div>
                  <div className="text-sm mt-0.5" style={{ color: '#6b7280' }}>
                    {feature.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </AnimateOnScroll>
  )
}
