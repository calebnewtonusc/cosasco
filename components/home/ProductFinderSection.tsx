import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import ProductFinder from '@/components/ProductFinder'

const finderPoints = [
  'Find the right solution for your application',
  'Covers all major Cosasco product families',
  'Link directly to technical datasheets',
]

export default function ProductFinderSection() {
  return (
    <AnimateOnScroll delay={0}>
      <section className="py-20 px-4" style={{ backgroundColor: '#0f2a4a' }}>
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">

            {/* Left: intro */}
            <div className="text-center lg:text-left mb-10 lg:mb-0">
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#f4a65d' }}>
                Product Finder
              </span>
              <h2 className="font-black text-3xl lg:text-4xl mt-3 leading-tight" style={{ color: '#ffffff' }}>
                Find the right monitoring solution in 3 steps.
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: '#94aabb' }}>
                Tell us your operating environment, pipe material, and monitoring
                goal - and we&apos;ll recommend the ideal Cosasco solution for
                your application.
              </p>

              <div className="mt-8 space-y-3">
                {finderPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle size={16} style={{ color: '#f4a65d' }} className="shrink-0" />
                    <span className="text-sm" style={{ color: '#94aabb' }}>{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                <p className="text-sm" style={{ color: '#8ab4d4' }}>
                  Need something more specific?
                </p>
                <Link
                  href="/contact"
                  className="text-sm font-semibold mt-1 inline-flex items-center gap-1 transition-colors"
                  style={{ color: '#f4a65d' }}
                >
                  Talk to an Application Engineer
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right: wizard */}
            <div>
              <ProductFinder />
            </div>
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  )
}
