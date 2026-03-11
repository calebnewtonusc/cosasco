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
            <h2 className="font-black text-3xl lg:text-4xl" style={{ color: '#0f2a4a' }}>
              Service and Support at Every Step
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg" style={{ color: '#566677' }}>
              Monitoring takes a complete team and we&apos;re the only company who has one.
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
                </div>
              )
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#f4a65d] font-semibold hover:text-[#d4892a] transition-colors"
            >
              Our Services
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  )
}
