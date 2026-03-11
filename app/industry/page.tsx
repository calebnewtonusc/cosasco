import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight } from 'lucide-react'
import { industries, getIndustryHref } from '@/lib/industries'

export const metadata: Metadata = {
  title: 'Industries | Cosasco',
  description:
    'Cosasco delivers corrosion monitoring and chemical injection solutions for upstream, midstream, downstream, gas transmission, pulp & paper, and specialty applications.',
}

export default function IndustryIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-[#0f2a4a] text-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#f4a65d]" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-20">
          <nav className="flex items-center gap-2 text-sm text-[#8ab4d4] mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Industries</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">Industries we serve</h1>
          <p className="text-[#94aabb] text-lg max-w-2xl">
            Real-time corrosion monitoring and management solutions tailored to your sector—from upstream through downstream, gas transmission, pulp & paper, and specialty applications.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              href={getIndustryHref(ind.slug)}
              className="bg-white border border-[#e8edf2] rounded-xl p-6 hover:shadow-lg hover:border-[#f4a65d] transition-all group block"
            >
              <h2 className="font-black text-[#0f2a4a] text-xl group-hover:text-[#f4a65d] transition-colors mb-2">
                {ind.name}
              </h2>
              <p className="text-[#566677] text-sm leading-relaxed mb-4">{ind.tagline}</p>
              <span className="text-[#f4a65d] text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                View industry
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0f2a4a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1a3a5c] transition-colors">
            Contact us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
