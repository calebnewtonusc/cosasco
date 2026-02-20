import { Award } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { certifications } from './home-data'

export default function CertificationsSection() {
  return (
    <AnimateOnScroll delay={0}>
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#f4a65d' }}>
              Certifications & Standards
            </span>
            <h2 className="font-black text-2xl mt-2" style={{ color: '#0f2a4a' }}>
              Meeting the highest industry standards worldwide.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-col items-center text-center p-5 rounded-xl border hover:shadow-md transition-all duration-200"
                style={{ borderColor: '#e8edf2' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: 'rgba(244,166,93,0.1)' }}
                >
                  <Award size={18} style={{ color: '#f4a65d' }} />
                </div>
                <div className="font-bold text-xs" style={{ color: '#0f2a4a' }}>
                  {cert.name}
                </div>
                <div className="text-[0.65rem] mt-0.5" style={{ color: '#8898aa' }}>
                  {cert.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  )
}
