import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cosasco | Confidence in Corrosion Management',
  description:
    'We exist to be the most complete and precise solution to measure and monitor corrosion. Not only do we improve the safety of people and the environment, we protect assets and enhance the bottom line of our customers.',
}

import HeroSection from '@/components/home/HeroSection'
import AlwaysKnowSection from '@/components/home/AlwaysKnowSection'
import IndustriesSection from '@/components/home/IndustriesSection'
import ProductsAndTechnologiesSection from '@/components/home/ProductsAndTechnologiesSection'
import ServicesSection from '@/components/home/ServicesSection'
import FindRepSection from '@/components/home/FindRepSection'
import ContactCTASection from '@/components/home/ContactCTASection'
import HomeTestimonialBlock from '@/components/home/HomeTestimonialBlock'

export default function HomePage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <HomeTestimonialBlock
        quote="There are a lot of companies that supply equipment. There aren't so many companies that are capable of providing the full service of both supply and service, which is one of the reasons why we use Cosasco – because they provide the full servicing."
        attribution="Cosasco Customer, Corrosion Engineer, Supermajor"
      />
      <AlwaysKnowSection />
      <IndustriesSection />
      <section className="bg-white py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[#f4a65d] font-semibold hover:text-[#d4892a] transition-colors"
          >
            Learn how we can help you
            <ArrowRight size={18} />
          </Link>
          <span className="mx-2 text-[#8898aa]">·</span>
          <Link href="/contact" className="inline-flex items-center gap-2 text-[#0f2a4a] font-semibold hover:text-[#f4a65d] transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
      <ProductsAndTechnologiesSection />
      <ServicesSection />
      <HomeTestimonialBlock
        quote="In each of these sites we have experienced field personnel. So, we're not just there to install and commission projects. We're also here for the lifetime that the equipment is in service."
        attribution="Cosasco Representative, Dubai"
      />
      <FindRepSection />
      <ContactCTASection />
    </main>
  )
}
