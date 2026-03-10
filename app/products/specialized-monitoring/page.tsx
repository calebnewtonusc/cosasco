import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import FamilyProductListing from '@/components/products/FamilyProductListing'

export const metadata: Metadata = {
  title: 'Specialized Monitoring | Cosasco',
  description:
    'AirIQ air quality monitoring, bio-probes, Microcor erosion probes, hydrogen probes, downhole monitoring, and galvanic monitoring systems.',
}

export default function SpecializedMonitoringPage() {
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
            <span className="text-white font-medium">Specialized Monitoring</span>
          </nav>
          <h1 className="text-white font-black text-4xl lg:text-5xl leading-tight mb-4">
            Specialized Monitoring Systems
          </h1>
          <p className="text-[#94aabb] text-lg max-w-2xl leading-relaxed">
            Airborne corrosion, biological activity, erosion, hydrogen permeation, and downhole integrity monitoring for
            demanding applications.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8">
        <FamilyProductListing familyId="specialized-monitoring" />
      </div>
    </>
  )
}

