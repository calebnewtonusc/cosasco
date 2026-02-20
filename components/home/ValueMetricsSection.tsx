import AnimateOnScroll from '@/components/AnimateOnScroll'
import { valueMetrics } from './home-data'

export default function ValueMetricsSection() {
  return (
    <AnimateOnScroll delay={0}>
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {valueMetrics.map((metric) => {
              const Icon = metric.icon
              return (
                <div
                  key={metric.value}
                  className="text-center p-6 rounded-2xl border border-[#e8edf2] hover:shadow-md transition-all duration-200"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: 'rgba(244,166,93,0.1)' }}
                  >
                    <Icon size={22} style={{ color: '#f4a65d' }} />
                  </div>
                  <div className="font-black text-3xl leading-none" style={{ color: '#0f2a4a' }}>
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold mt-1" style={{ color: '#0f2a4a' }}>
                    {metric.label}
                  </div>
                  <div className="text-xs mt-1 leading-snug" style={{ color: '#8898aa' }}>
                    {metric.desc}
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
