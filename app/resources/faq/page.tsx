import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import SupportFAQ from '@/components/SupportFAQ'

export const metadata: Metadata = {
  title: 'FAQ | Cosasco',
  description:
    'Frequently asked questions about Cosasco products, orders, technical support, software, and resources.',
}

export default function ResourcesFAQPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-[#0f2a4a] text-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#f4a65d]" aria-hidden="true" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-14">
          <nav className="flex items-center gap-2 text-sm text-[#8ab4d4] mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="text-white font-medium">FAQ</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black leading-tight mb-3">Frequently asked questions</h1>
          <p className="text-[#94aabb] text-lg leading-relaxed max-w-xl">
            Find answers to common questions about products, orders, support, and software.
          </p>
        </div>
      </section>

      <SupportFAQ />
    </div>
  )
}
