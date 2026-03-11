import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight, CheckCircle } from 'lucide-react'
import { notFound } from 'next/navigation'
import { getIndustryBySlug, industries, getIndustryHref } from '@/lib/industries'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)
  if (!industry) return { title: 'Industry | Cosasco' }
  return {
    title: `${industry.name} | Cosasco`,
    description: industry.tagline,
  }
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)
  if (!industry) notFound()

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-[#0f2a4a] text-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#f4a65d]" aria-hidden="true" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-20">
          <nav className="flex items-center gap-2 text-sm text-[#8ab4d4] mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/industry" className="hover:text-white transition-colors">Industries</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">{industry.name}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">{industry.name}</h1>
          <p className="text-[#94aabb] text-lg md:text-xl leading-relaxed">{industry.tagline}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <p className="text-[#566677] leading-relaxed mb-10">{industry.description}</p>
        <ul className="space-y-4 mb-10">
          {industry.benefits.map((b) => (
            <li key={b} className="flex items-start gap-3 text-[#1e2b3a]">
              <CheckCircle size={20} className="text-[#f4a65d] shrink-0 mt-0.5" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#f4a65d] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#d4892a] transition-colors"
          >
            View products
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-[#0f2a4a] text-[#0f2a4a] px-5 py-2.5 rounded-lg font-semibold hover:bg-[#0f2a4a] hover:text-white transition-colors"
          >
            Contact us
          </Link>
        </div>

        <div className="mt-16 pt-10 border-t border-[#e8edf2]">
          <h2 className="font-bold text-[#0f2a4a] text-lg mb-4">Other industries</h2>
          <div className="flex flex-wrap gap-3">
            {industries
              .filter((i) => i.slug !== industry.slug)
              .map((i) => (
                <Link
                  key={i.slug}
                  href={getIndustryHref(i.slug)}
                  className="text-sm font-medium text-[#566677] hover:text-[#f4a65d] transition-colors"
                >
                  {i.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
