import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { services } from './home-data'

export default function ServicesSection() {
  return (
    <AnimateOnScroll delay={100}>
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">

          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#f4a65d' }}>
              Services
            </span>
            <h2 className="font-black text-3xl lg:text-4xl mt-2" style={{ color: '#0f2a4a' }}>
              Full Lifecycle Support
            </h2>
            <p className="mt-3 max-w-xl mx-auto" style={{ color: '#6b7280' }}>
              From initial program design through long-term maintenance, Cosasco
              engineers support your corrosion management program at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
            {services.map((svc) => {
              const Icon = svc.icon
              return (
                <div
                  key={svc.title}
                  className="bg-white border rounded-xl p-8 hover:shadow-lg transition-all duration-200"
                  style={{ borderColor: '#e8edf2' }}
                >
                  <Icon size={32} style={{ color: '#f4a65d' }} />
                  <div className="font-bold text-xl mt-5" style={{ color: '#0f2a4a' }}>
                    {svc.title}
                  </div>
                  <p className="text-sm mt-3 leading-relaxed" style={{ color: '#6b7280' }}>
                    {svc.desc}
                  </p>
                  <Link
                    href={svc.href}
                    className="text-sm font-semibold mt-5 flex items-center gap-1 transition-colors"
                    style={{ color: '#f4a65d' }}
                  >
                    Learn more
                    <ArrowRight size={14} />
                  </Link>
                </div>
              )
            })}
          </div>

        </div>
      </section>
    </AnimateOnScroll>
  )
}
