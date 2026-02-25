import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { productFamilies } from './home-data'

export default function ProductFamiliesSection() {
  return (
    <AnimateOnScroll delay={100}>
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Intro row */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#f4a65d' }}>
                Products
              </span>
              <h2 className="font-black text-3xl lg:text-4xl mt-2 leading-tight" style={{ color: '#0f2a4a' }}>
                Complete monitoring systems.
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: '#374151' }}>
                Every component designed to work together, from the access
                fitting on the pipe wall to the dashboard in the control room.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="font-black text-5xl" style={{ color: '#0f2a4a' }}>
                1,000+
              </div>
              <div className="text-sm mt-1 leading-relaxed max-w-xs" style={{ color: '#6b7280' }}>
                Products spanning access fittings, probes, retrievers, chemical
                injection, and data systems, engineered for interoperability.
              </div>
              <Link
                href="/products"
                className="text-sm font-semibold mt-4 inline-flex items-center gap-1 transition-colors"
                style={{ color: '#f4a65d' }}
              >
                Browse all products
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Product family cards */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-12">
            {productFamilies.map((pf) => {
              const Icon = pf.icon
              return (
                <Link
                  key={pf.name}
                  href={pf.href}
                  className="border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-200 group flex flex-col"
                  style={{ borderColor: '#e8edf2' }}
                >
                  {/* Card header */}
                  <div
                    className="px-6 pt-6 pb-8 relative overflow-hidden"
                    style={{ backgroundColor: '#0f2a4a' }}
                  >
                    <div
                      className="absolute right-0 top-0 bottom-0 w-24"
                      style={{ background: 'linear-gradient(to left, #1a3a5c, transparent)' }}
                    />
                    <Icon size={28} className="relative z-10" style={{ color: '#f4a65d' }} />
                    <div
                      className="text-xs font-bold uppercase tracking-wider mt-4 relative z-10"
                      style={{ color: '#8ab4d4' }}
                    >
                      {pf.category}
                    </div>
                    <div
                      className="font-bold text-lg leading-snug mt-1 relative z-10"
                      style={{ color: '#ffffff' }}
                    >
                      {pf.name}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="px-6 py-5 bg-white flex flex-col flex-1">
                    <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                      {pf.desc}
                    </p>

                    <ul className="mt-3 space-y-1.5 flex-1">
                      {pf.keyProducts.map((product) => (
                        <li key={product} className="flex items-center gap-2 text-xs" style={{ color: '#334150' }}>
                          <span className="w-1 h-1 rounded-full bg-[#f4a65d] shrink-0" />
                          {product}
                        </li>
                      ))}
                    </ul>

                    <div
                      className="mt-4 pt-4 border-t flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
                      style={{ borderColor: '#f4f6f8', color: '#f4a65d' }}
                    >
                      Learn more
                      <ArrowRight size={14} />
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
