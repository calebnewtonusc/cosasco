import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { industries } from './home-data'

export default function IndustriesSection() {
  return (
    <AnimateOnScroll delay={100}>
      <section className="py-20 px-4" style={{ backgroundColor: '#f7f9fc' }}>
        <div className="max-w-7xl mx-auto">

          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#f4a65d' }}>
              Industries
            </span>
            <h2 className="font-black text-3xl lg:text-4xl mt-2" style={{ color: '#0f2a4a' }}>
              Built for the toughest environments.
            </h2>
            <p className="mt-3 max-w-xl mx-auto" style={{ color: '#6b7280' }}>
              Cosasco solutions are engineered for the specific corrosion
              challenges of each sector. Hover a card to learn more.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {industries.map((ind) => {
              const Icon = ind.icon
              return (
                <Link
                  key={ind.name}
                  href={ind.href}
                  className="bg-white rounded-xl border overflow-hidden group relative cursor-pointer"
                  style={{ borderColor: '#e8edf2' }}
                >
                  {/* Default state */}
                  <div className="p-6 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">
                    <div
                      className="rounded-lg p-2.5 w-10 h-10 flex items-center justify-center"
                      style={{ backgroundColor: '#f7f9fc' }}
                    >
                      <Icon size={18} style={{ color: '#f4a65d' }} />
                    </div>
                    <div className="font-bold text-base mt-3" style={{ color: '#0f2a4a' }}>
                      {ind.name}
                    </div>
                    <div className="text-sm mt-1 leading-snug" style={{ color: '#6b7280' }}>
                      {ind.desc}
                    </div>
                    <div className="text-xs font-semibold mt-4 flex items-center gap-1" style={{ color: '#f4a65d' }}>
                      View solutions
                      <ChevronRight size={12} />
                    </div>
                  </div>

                  {/* Hover reveal */}
                  <div
                    className="absolute inset-0 p-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex flex-col justify-between"
                    style={{ backgroundColor: '#0f2a4a' }}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Icon size={16} style={{ color: '#f4a65d' }} />
                        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#f4a65d' }}>
                          {ind.name}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: '#b8cfe0' }}>
                        {ind.detail}
                      </p>
                    </div>
                    <div
                      className="mt-4 text-xs font-semibold inline-flex items-center gap-1"
                      style={{ color: '#f4a65d' }}
                    >
                      Explore {ind.name} solutions
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

        </div>
      </section>
    </AnimateOnScroll>
  )
}
