import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import FamilyProductListing from '@/components/products/FamilyProductListing'

export const metadata: Metadata = {
  title: 'Service Tools | Cosasco',
  description:
    'Service valves, pumps, hot tap kits, retractors, retrievers, and accessories for installing and maintaining access fittings and monitoring devices under pressure.',
}

export default function ServiceToolsPage() {
  return (
    <>
      <section className="bg-[#0f2a4a] pb-16 pt-10 px-6 md:px-10 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-1.5 text-sm text-[#8ab4d4] mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="opacity-50" />
            <Link href="/products" className="hover:text-white transition-colors">
              Products
            </Link>
            <ChevronRight size={14} className="opacity-50" />
            <span className="text-white font-medium">Service Tools</span>
          </nav>
          <h1 className="text-white font-black text-4xl lg:text-5xl leading-tight mb-4">Service Tools</h1>
          <p className="text-[#94aabb] text-lg max-w-2xl leading-relaxed">
            Tools and equipment for safe installation, retrieval, and maintenance of access fittings and monitoring
            devices under live operating conditions.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8">
        <FamilyProductListing familyId="service-tools" />
      </div>
    </>
  )
}

