'use client'

import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'
import AnimateOnScroll from '@/components/AnimateOnScroll'

const innovations = [
  {
    name: 'Echo Point',
    tagline: 'Next-generation wireless ultrasonic monitoring',
    shortDesc: 'Certified for the most hazardous environments. Up to 3× sensitivity, 932°F (500°C), 5-year battery. WirelessHART 7.',
    href: '/products/erosion-monitoring',
  },
  {
    name: 'Microcor®',
    tagline: 'Highest-sensitivity intrusive ER probe',
    shortDesc: 'Up to 50× faster data acquisition than standard ER. 18-bit resolution, WirelessHART 7. Yokogawa & Emerson DCS compatible.',
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'SafeGuard Service Valve',
    tagline: 'Fire-rated, PED-certified, double-isolation',
    shortDesc: 'Lightest service valve at this safety rating. NACE-compliant 4130 or Duplex stainless steel.',
    href: '/products/access-fittings',
  },
]

export default function InnovationSpotlightSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  function scroll(direction: 'left' | 'right') {
    if (!scrollRef.current) return
    const amount = 320
    scrollRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <AnimateOnScroll delay={0}>
      <section className="bg-[#0f2a4a] py-20 lg:py-28 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <p className="text-[#f4a65d] text-xs font-bold uppercase tracking-[0.15em] mb-2">What&apos;s New</p>
              <h2 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
                Innovation spotlight
              </h2>
              <p className="text-[#8ab4d4] text-lg mt-4 max-w-xl">
                Latest products and technologies. Scroll to explore—then dive in for full details.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => scroll('left')}
                aria-label="Scroll left"
                className="w-12 h-12 rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-[#f4a65d] transition-all flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                aria-label="Scroll right"
                className="w-12 h-12 rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-[#f4a65d] transition-all flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <Link
                href="/innovation"
                className="ml-2 text-[#f4a65d] font-semibold text-sm hover:text-white transition-colors inline-flex items-center gap-1"
              >
                View all
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth no-scrollbar"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {innovations.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex-shrink-0 w-[300px] sm:w-[340px] bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#f4a65d]/50 transition-all group"
                style={{ scrollSnapAlign: 'start' }}
              >
                <p className="text-[#f4a65d] text-xs font-bold uppercase tracking-wider mb-2">{item.tagline}</p>
                <h3 className="text-white font-black text-2xl mb-3 group-hover:text-[#f4a65d] transition-colors">
                  {item.name}
                </h3>
                <p className="text-[#8ab4d4] text-sm leading-relaxed mb-6">{item.shortDesc}</p>
                <span className="text-[#f4a65d] text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  )
}
