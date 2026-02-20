import AnimateOnScroll from '@/components/AnimateOnScroll'
import { testimonials } from './home-data'

export default function TestimonialsSection() {
  return (
    <AnimateOnScroll delay={0}>
      <section className="py-20 px-4" style={{ backgroundColor: '#0f2a4a' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#f4a65d' }}>
              Customer Voices
            </span>
            <h2 className="font-black text-3xl lg:text-4xl mt-2" style={{ color: '#ffffff' }}>
              Trusted by the world&apos;s largest operators.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.role}
                className="rounded-xl p-7 flex flex-col"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderLeft: '3px solid #f4a65d' }}
              >
                <div className="text-4xl font-black leading-none mb-4" style={{ color: '#f4a65d' }}>
                  &ldquo;
                </div>
                <p className="text-sm leading-relaxed flex-1 italic" style={{ color: '#b8cfe0' }}>
                  {t.quote}
                </p>
                <div className="mt-6 pt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                  <div className="text-sm font-semibold" style={{ color: '#ffffff' }}>
                    {t.role}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: '#8ab4d4' }}>
                    {t.company}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Operator name band */}
          <div
            className="text-sm font-semibold tracking-wider mt-12 text-center"
            style={{ color: '#4a6a84' }}
          >
            SHELL &nbsp;·&nbsp; BP &nbsp;·&nbsp; CHEVRON &nbsp;·&nbsp; EXXONMOBIL &nbsp;·&nbsp; SAUDI ARAMCO &nbsp;·&nbsp; TOTAL ENERGIES &nbsp;·&nbsp; EQUINOR
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  )
}
