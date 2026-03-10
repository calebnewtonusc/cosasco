import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cosasco | Corrosion Monitoring & Chemical Injection Solutions',
  description: 'Global leader in corrosion monitoring, chemical injection, and industrial integrity management systems. Serving oil & gas, petrochemical, water treatment, and more.',
}

import HeroSection from '@/components/home/HeroSection'
import ValueMetricsSection from '@/components/home/ValueMetricsSection'
import WhyCosascoSection from '@/components/home/WhyCosascoSection'
import InnovationSpotlightSection from '@/components/home/InnovationSpotlightSection'
import ProductFinderSection from '@/components/home/ProductFinderSection'
import IndustriesSection from '@/components/home/IndustriesSection'
import ProductFamiliesSection from '@/components/home/ProductFamiliesSection'
import ComparisonTableSection from '@/components/home/ComparisonTableSection'
import ServicesSection from '@/components/home/ServicesSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CertificationsSection from '@/components/home/CertificationsSection'
import ContactCTASection from '@/components/home/ContactCTASection'

export default function HomePage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <div data-aos="fade-up" data-aos-delay="0">
        <ValueMetricsSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <WhyCosascoSection />
      </div>
      <InnovationSpotlightSection />
      <div data-aos="fade-up" data-aos-delay="0">
        <ProductFinderSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="0">
        <IndustriesSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <ProductFamiliesSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="0">
        <ComparisonTableSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="0">
        <ServicesSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <TestimonialsSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="0">
        <CertificationsSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <ContactCTASection />
      </div>
    </main>
  )
}
