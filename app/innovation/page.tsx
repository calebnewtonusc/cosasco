import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Innovation | Cosasco',
  description:
    "Cosasco's latest corrosion monitoring technologies — Echo Point, Microcor\u00ae, and the SafeGuard Service Valve.",
}

const featuredProducts = [
  {
    name: 'Echo Point',
    tagline: 'Next-generation wireless ultrasonic monitoring',
    desc: 'Certified for the most hazardous of environments. Three transducer choices with up to 3x sensitivity, thru-coating measurements, or ultra-high temperature monitoring @ 932°F (500°C). 5-year battery life. WirelessHART 7 compliant. HART Registered.',
    href: '/products/erosion-monitoring',
    highlights: [
      '3× sensitivity options',
      'Ultra-high temp: 932°F (500°C)',
      '5-year battery life',
      'WirelessHART 7 & HART Registered',
    ],
  },
  {
    name: 'Microcor\u00ae',
    tagline: 'Highest-sensitivity intrusive ER probe',
    desc: 'The highest-sensitivity intrusive probe with the fastest response time in the industry. The Microcor® Wireless Transmitter (MWT) delivers 18-bit resolution with WirelessHART 7 connectivity. Up to 50× faster data acquisition rates than standard ER monitoring. Compatible with Yokogawa and Emerson DCS platforms.',
    href: '/products/corrosion-monitoring',
    highlights: [
      'Up to 50× faster data acquisition rates than standard ER',
      '18-bit resolution',
      'WirelessHART 7 connectivity',
      'Yokogawa & Emerson DCS compatible',
    ],
  },
  {
    name: 'SafeGuard Service Valve',
    tagline: 'Fire-rated, PED-certified, double-isolation',
    desc: 'Fire-rated and PED-certified service valve with double isolation valve technology. Made with NACE-compliant 4130 or Duplex stainless steel — the lightest available service valve that meets the highest safety standards.',
    href: '/products/corrosion-monitoring',
    highlights: [
      'Fire-rated & PED-certified',
      'Double isolation valve technology',
      'NACE-compliant 4130 or Duplex SS',
      'Lightest available at this safety rating',
    ],
  },
]

const focusAreas = [
  {
    title: 'Design great user experiences',
    body: "Data that's difficult to interpret is difficult to trust. We build monitoring systems where the data is clear, actionable, and immediately useful.",
  },
  {
    title: 'Enable the quickest decision making',
    body: 'The future of corrosion management is proactive. Our systems deliver real-time alerts that enable operators to act before failures occur.',
  },
  {
    title: 'Deliver results you can trust',
    body: 'The consequences of corrosion are significant — for safety, the environment, and the bottom line. Our technology is certified and proven.',
  },
  {
    title: 'Find and solve the most complex problems',
    body: 'Our local experts work on the frontlines of the most challenging corrosive environments in the world.',
  },
]

export default function InnovationPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Breadcrumb ── */}
      <div className="bg-[#f7f9fc] border-b border-[#e8edf2]">
        <div className="cx py-3">
          <nav className="flex items-center gap-2 text-sm text-[#566677]">
            <Link href="/" className="hover:text-[#0f2a4a] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#1e2b3a] font-medium">Innovation</span>
          </nav>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-[#0f2a4a] text-white overflow-hidden pt-[72px]">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#f4a65d]" aria-hidden="true" />
        <div className="cx relative py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-4">What We&apos;re Building</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Innovation
            </h1>
            <p className="text-[#8ab4d4] text-lg md:text-xl leading-relaxed max-w-2xl">
              Our latest technologies, available today. Innovation is core to who we are — because
              we&apos;re closer to customers, we&apos;re building what the industry needs most.
            </p>
          </div>
        </div>
      </section>

      {/* ── Featured Products ── */}
      <div className="cx py-16 md:py-20">
        <div className="space-y-16">

          {/* Featured products section */}
          <section>
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-2">Latest Technologies</p>
            <h2 className="text-2xl md:text-3xl font-black text-[#0f2a4a] mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <div
                  key={product.name}
                  className="bg-white border border-[#e8edf2] rounded-xl p-7 hover:shadow-xl hover:border-[#f4a65d] transition-all group flex flex-col"
                >
                  <div className="mb-5">
                    <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-1">
                      {product.tagline}
                    </p>
                    <h3 className="text-2xl font-black text-[#0f2a4a] group-hover:text-[#f4a65d] transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-[#566677] text-sm leading-relaxed mb-6 flex-1">{product.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {product.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-[#1e2b3a]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#f4a65d] mt-1.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={product.href}
                    className="text-[#f4a65d] text-sm font-semibold flex items-center gap-1 mt-auto hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Strategic focus areas */}
          <section>
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-2">Our Philosophy</p>
            <h2 className="text-2xl md:text-3xl font-black text-[#0f2a4a] mb-8">What Drives Our Innovation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {focusAreas.map((area, i) => (
                <div key={area.title} className="bg-[#f7f9fc] border border-[#e8edf2] rounded-xl p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-black text-[#f4a65d] bg-[#0f2a4a] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <h3 className="font-black text-[#0f2a4a] text-base">{area.title}</h3>
                  </div>
                  <p className="text-[#566677] text-sm leading-relaxed">{area.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Banner */}
          <section>
            <div className="bg-[#0f2a4a] rounded-xl p-8 md:p-12 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-2">Get in Touch</p>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                  Talk to an Application Engineer
                </h3>
                <p className="text-[#8ab4d4] text-sm leading-relaxed max-w-xl">
                  Our engineers work directly with customers to match the right technology to the
                  right problem. Reach out to discuss Echo Point, Microcor®, or any other Cosasco
                  technology for your application.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-5">
                  <a href="tel:+15629490123" className="flex items-center gap-2 text-[#8ab4d4] text-sm hover:text-white transition-colors">
                    <Phone className="w-4 h-4 text-[#f4a65d] flex-shrink-0" />
                    +1 (562) 949-0123
                  </a>
                  <a href="mailto:info@cosasco.com" className="flex items-center gap-2 text-[#8ab4d4] text-sm hover:text-white transition-colors">
                    <Mail className="w-4 h-4 text-[#f4a65d] flex-shrink-0" />
                    info@cosasco.com
                  </a>
                </div>
              </div>
              <Link href="/contact" className="btn btn-primary whitespace-nowrap flex-shrink-0">
                Contact an Engineer
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
