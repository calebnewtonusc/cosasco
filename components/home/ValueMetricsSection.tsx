import AnimateOnScroll from '@/components/AnimateOnScroll'
import { valueMetrics } from './home-data'

export default function ValueMetricsSection() {
  return (
    <AnimateOnScroll delay={0}>
      <section className="bg-white py-24 lg:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#f4a65d] text-xs font-bold uppercase tracking-[0.15em] text-center mb-4">By the numbers</p>
          <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl text-[#0f2a4a] text-center max-w-3xl mx-auto leading-tight mb-16">
            Trusted where it matters most
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {valueMetrics.map((metric) => {
              const Icon = metric.icon
              return (
                <div
                  key={metric.value}
                  className="text-center p-10 rounded-2xl border-2 border-[#e8edf2] hover:border-[#f4a65d]/40 hover:shadow-xl transition-all duration-200"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: 'rgba(244,166,93,0.15)' }}
                  >
                    <Icon size={28} style={{ color: '#f4a65d' }} />
                  </div>
                  <div className="font-black text-4xl sm:text-5xl leading-none" style={{ color: '#0f2a4a' }}>
                    {metric.value}
                  </div>
                  <div className="text-base font-semibold mt-3 leading-snug" style={{ color: '#566677' }}>
                    {metric.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  )
}
