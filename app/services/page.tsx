import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight } from 'lucide-react'
import { servicesList } from '@/lib/servicesData'

export const metadata: Metadata = {
  title: 'Corrosion Monitoring Services | Cosasco',
  description:
    'Cosasco is the only company with the experience, reputation, and global reach able to support all your corrosion monitoring requirements.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-[#0f2a4a] text-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#f4a65d]" aria-hidden="true" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, #f4a65d 0%, transparent 55%)' }} aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-28">
          <nav className="flex items-center gap-2 text-sm text-[#8ab4d4] mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="text-white font-medium">Services</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight mb-6">
            Corrosion Monitoring Services
          </h1>
          <p className="text-[#94aabb] text-lg md:text-xl leading-relaxed max-w-2xl">
            Cosasco is the only company with the experience, reputation, and global reach able to support all your corrosion monitoring requirements. Whether you are establishing a new corrosion management program, maintaining existing assets, or looking for solutions, Cosasco is your trusted partner.
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#f7f9fc] py-14 md:py-16 px-4 border-b border-[#e8edf2]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#566677] text-lg md:text-xl italic leading-relaxed">
            &ldquo;Cosasco is capable of providing the full package of both product supply and service with a history of quality and reliability. That is why we use Cosasco.&rdquo;
          </p>
          <p className="text-sm text-[#8898aa] mt-5 font-medium">– Cosasco Customer, Corrosion Engineer, Supermajor</p>
        </div>
      </section>

      {/* The Cosasco Commitment */}
      <section className="bg-white py-14 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-black text-2xl md:text-3xl text-[#0f2a4a] mb-6 tracking-tight">The Cosasco Commitment</h2>
          <p className="text-[#566677] text-lg md:text-[19px] leading-relaxed">
            Since 1950, Cosasco has been dedicated to developing innovative corrosion monitoring solutions enabling our customers to make the best decisions for the health of their critical infrastructure. Matching our commitment to innovation is our dedication towards supporting you in the field with an experienced and trusted team located around the world supporting you where you are. Our services teams are highly trained, focused on safety, and committed to solving your corrosion monitoring challenges. Whatever you need, we will work with you.
          </p>
        </div>
      </section>

      {/* Our Services Include - card grid */}
      <section className="bg-[#f7f9fc] py-14 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-2xl md:text-3xl text-[#0f2a4a] mb-10 tracking-tight">Our Services Include</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service) => (
              <Link
                key={service.slug}
                href={service.href}
                className="group bg-white rounded-xl border border-[#e8edf2] p-6 hover:border-[#f4a65d] hover:shadow-lg transition-all duration-200 flex flex-col"
              >
                <h3 className="font-bold text-lg text-[#0f2a4a] mb-3 group-hover:text-[#f4a65d] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#566677] text-sm leading-relaxed flex-1 mb-5">{service.summary}</p>
                <span className="inline-flex items-center gap-2 text-[#f4a65d] font-semibold text-sm">
                  Read more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
