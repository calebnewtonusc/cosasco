import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, CheckCircle, ArrowLeft } from 'lucide-react'
import { servicesList } from '@/lib/servicesData'
import { serviceDetailContent } from '@/lib/serviceDetailContent'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return servicesList.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const content = serviceDetailContent[slug]
  if (!content) return { title: 'Services | Cosasco' }
  return {
    title: `${content.title} | Cosasco`,
    description: content.tagline,
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const content = serviceDetailContent[slug as keyof typeof serviceDetailContent]
  if (!content) notFound()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-[#0f2a4a] text-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#f4a65d]" aria-hidden="true" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #f4a65d 0%, transparent 50%)' }} aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-14 md:py-20">
          <nav className="flex items-center gap-2 text-sm text-[#8ab4d4] mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="text-white font-medium">{content.title}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight mb-5">{content.title}</h1>
          <p className="text-[#94aabb] text-lg md:text-xl leading-relaxed max-w-2xl">{content.tagline}</p>
        </div>
      </section>

      {/* Testimonial (if present) */}
      {content.quote && (
        <section className="bg-[#f7f9fc] py-12 md:py-14 px-4 border-b border-[#e8edf2]">
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-center">
              <p className="text-[#566677] text-lg md:text-xl italic leading-relaxed">&ldquo;{content.quote}&rdquo;</p>
              {content.attribution && (
                <footer className="text-sm text-[#8898aa] mt-5 font-medium">{content.attribution}</footer>
              )}
            </blockquote>
          </div>
        </section>
      )}

      {/* Body + Features */}
      <section className="bg-white py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-5 text-[#566677] leading-relaxed">
              {content.body.map((p, i) => (
                <p key={i} className="text-[17px]">{p}</p>
              ))}
            </div>
            {content.extra && (
              <p className="mt-6 text-[#566677] text-[17px] leading-relaxed">{content.extra}</p>
            )}
          </div>

          <div className="mt-14 pt-10 border-t border-[#e8edf2]">
            <h3 className="font-bold text-lg text-[#0f2a4a] mb-6 tracking-tight">Features & Applications</h3>
            <ul className="grid sm:grid-cols-1 gap-3">
              {content.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <CheckCircle className="w-5 h-5 text-[#f4a65d] flex-shrink-0 mt-0.5" aria-hidden />
                  <span className="text-[#566677] text-[15px] leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14 pt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#0f2a4a] font-semibold text-sm hover:text-[#f4a65d] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
