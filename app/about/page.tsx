import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ChevronRight,
  ArrowRight,
  Phone,
  MapPin,
  Shield,
  Eye,
  Heart,
  Award,
  Factory,
  Globe,
  Users,
  CheckCircle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Cosasco | 70+ Years of Corrosion Monitoring Excellence',
  description:
    'Cosasco has protected critical industrial infrastructure for over 70 years. ISO 9001-certified manufacturer of corrosion monitoring instruments and chemical injection systems. A Halma company.',
}

const stats = [
  { value: '70+', label: 'Years in Service', sub: 'Founded 1955, California' },
  { value: '110', label: 'Countries Served', sub: 'Global distribution network' },
  { value: '1M+', label: 'Monitoring Locations', sub: 'Worldwide deployments' },
  { value: 'ISO 9001', label: 'Quality Certified', sub: 'Rigorous QMS since 1990s' },
]

const timeline = [
  {
    year: '1955',
    title: 'Founded in California',
    description:
      'Cosasco was established in Southern California with a singular mission: to design and manufacture reliable instrumentation for corrosion monitoring in the emerging oil and gas industry.',
  },
  {
    year: '1960s',
    title: 'ER Probe Development',
    description:
      'Cosasco engineers pioneered the electrical resistance (ER) probe methodology for continuous, real-time corrosion measurement — a breakthrough that transformed corrosion monitoring from periodic sampling to continuous surveillance.',
  },
  {
    year: '1970s',
    title: 'Access Fitting Innovation',
    description:
      'Development of under-pressure access fitting and retrieval tool systems enabled safer installation of corrosion probes and coupons without process shutdown — an innovation that became an industry standard worldwide.',
  },
  {
    year: '1980s',
    title: 'Petrochemical Expansion',
    description:
      'Cosasco expanded into refining and petrochemical markets with high-temperature probe systems and flush-mount fittings designed for the most demanding process environments across North America and Europe.',
  },
  {
    year: '1990s',
    title: 'Global Reach & ISO Certification',
    description:
      'International distribution partnerships extended Cosasco\'s presence into 50+ countries. ISO 9001 quality management certification formalized the engineering rigor that Cosasco customers had always depended upon.',
  },
  {
    year: '2000s',
    title: 'Chemical Injection Portfolio',
    description:
      'Cosasco broadened its portfolio with complete chemical injection quill, valve, and system assemblies — providing end-to-end corrosion mitigation capability from monitoring to treatment delivery.',
  },
  {
    year: '2010s',
    title: 'Digital & Wireless Monitoring',
    description:
      'FieldCom wireless monitoring solutions and cloud-connected data acquisition platforms extended Cosasco\'s reach to remote and offshore assets, enabling real-time corrosion management across geographically distributed infrastructure.',
  },
  {
    year: 'Today',
    title: 'A Halma Company — Global Leader',
    description:
      'As a Halma company, Cosasco operates within a global portfolio of safety, health, and environmental technology businesses. With over 1 million monitoring locations across 110 countries, Cosasco remains the world\'s most trusted name in corrosion management.',
  },
]

const values = [
  {
    icon: Shield,
    title: 'Mission',
    body: 'To protect critical industrial infrastructure by engineering the world\'s most reliable corrosion monitoring and chemical injection systems — helping operators reduce risk, extend asset life, and maintain operational continuity.',
  },
  {
    icon: Eye,
    title: 'Vision',
    body: 'A world where corrosion-related failures are fully preventable — where plant operators have real-time visibility into asset integrity and the tools to act before problems escalate into incidents.',
  },
  {
    icon: Heart,
    title: 'Values',
    body: 'Engineering excellence, uncompromising quality, customer partnership, and continuous innovation. Every Cosasco product is built to perform reliably in the most demanding industrial environments on earth.',
  },
]

const certifications = [
  {
    name: 'ISO 9001:2015',
    description:
      'Quality Management System certification ensuring consistent design, manufacturing, and testing standards across all product lines.',
  },
  {
    name: 'NACE Compliant',
    description:
      'Products engineered in accordance with NACE International standards for corrosion control and monitoring in oil, gas, and chemical applications.',
  },
  {
    name: 'API Standards',
    description:
      'Chemical injection and access fitting systems designed to meet or exceed API specifications for upstream and downstream operations.',
  },
  {
    name: 'ATEX / IECEx',
    description:
      'Select electronic instruments certified for use in classified hazardous locations per ATEX (EU) and IECEx (International) frameworks.',
  },
  {
    name: 'Hydrostatic Testing',
    description:
      'All pressure-containing components are hydrostatically tested prior to shipment, with full traceability documentation available on request.',
  },
  {
    name: 'Material Traceability',
    description:
      'Full material certification and mill test reports (MTRs) available for all wetted components in critical-service and high-alloy applications.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Breadcrumb ── */}
      <div className="bg-[#f7f9fc] border-b border-[#e8edf2]">
        <div className="cx py-3">
          <nav className="flex items-center gap-2 text-sm text-[#566677]">
            <Link href="/" className="hover:text-[#0f2a4a] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#1e2b3a] font-medium">About</span>
          </nav>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-[#0f2a4a] text-white overflow-hidden">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#f4a65d]" aria-hidden="true" />
        <div className="cx relative py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-2">About Cosasco</p>
            <p className="text-[#8ab4d4] text-sm font-medium mb-4">A Halma Company</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              70 Years Protecting<br />
              <span className="text-[#f4a65d]">Critical Infrastructure</span>
            </h1>
            <p className="text-[#8ab4d4] text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              From the oil fields of California to industrial facilities across 110 countries,
              Cosasco has spent seven decades engineering the instruments, systems, and
              chemical injection hardware that keep the world's most critical assets safe.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary">
                Contact Our Team
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/products" className="btn btn-outline-white">
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Row ── */}
      <section className="bg-white py-16 border-b border-[#e8edf2]">
        <div className="cx">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-[#f4a65d] font-black text-5xl leading-none mb-2">{s.value}</div>
                <div className="text-[#1e2b3a] font-bold text-sm mb-1">{s.label}</div>
                <div className="text-[#566677] text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="bg-white py-20 md:py-24">
        <div className="cx">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Text left */}
            <div>
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-3">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0f2a4a] mb-6">
                Founded in 1955.<br />Still Leading the Industry.
              </h2>
              <div className="space-y-4 text-[#566677] leading-relaxed">
                <p>
                  Cosasco was founded in 1955 in Southern California by engineers who
                  recognized that the oil industry needed a better way to monitor and
                  manage internal pipeline corrosion. The company's early work on
                  electrical resistance (ER) probe methodology laid the scientific
                  foundation for what would become the global standard in real-time
                  corrosion measurement.
                </p>
                <p>
                  Through the following decades, Cosasco extended its portfolio to include
                  access fitting systems, chemical injection hardware, and data acquisition
                  platforms — building the most comprehensive corrosion management product
                  line in the industry. By the 1990s, Cosasco products were protecting
                  pipelines, refineries, and water systems in more than 50 countries.
                </p>
                <p>
                  Today, as a Halma company, Cosasco operates within a global portfolio of
                  safety, health, and environmental technology businesses. With over
                  1 million monitoring locations deployed across 110 countries, Cosasco
                  remains the world's most trusted name in corrosion and erosion monitoring.
                  Our ISO 9001-certified manufacturing facility in Santa Fe Springs, California
                  continues to produce every product that carries the Cosasco name.
                </p>
              </div>
            </div>

            {/* Timeline right */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#f4a65d] to-[#0f2a4a]" aria-hidden="true" />
              <div className="space-y-6 pl-12">
                {timeline.map((item, idx) => (
                  <div key={item.year} className="relative">
                    <div
                      className="absolute -left-[2.15rem] top-1.5 w-3 h-3 rounded-full bg-[#f4a65d] border-2 border-white shadow"
                      aria-hidden="true"
                    />
                    <div className="bg-white border border-[#e8edf2] rounded-xl p-4 hover:border-[#f4a65d] transition-colors">
                      <span className="inline-block text-[#f4a65d] text-xs font-black tracking-wider mb-1">{item.year}</span>
                      <h3 className="font-black text-[#0f2a4a] text-sm mb-1">{item.title}</h3>
                      <p className="text-[#566677] text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission / Vision / Values ── */}
      <section className="bg-[#f7f9fc] py-20 md:py-24">
        <div className="cx">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-3">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0f2a4a] mb-4">
              Mission, Vision &amp; Values
            </h2>
            <p className="text-[#566677] text-lg max-w-2xl mx-auto leading-relaxed">
              The principles that have guided Cosasco since 1955 — and that define how we
              design, build, and support every product we manufacture today.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="bg-white border border-[#e8edf2] rounded-xl p-8">
                  <div className="border-l-4 border-[#f4a65d] pl-5 mb-6">
                    <h3 className="font-black text-[#0f2a4a] text-xl">{v.title}</h3>
                  </div>
                  <div className="w-10 h-10 bg-[#f4a65d]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#f4a65d]" />
                  </div>
                  <p className="text-[#566677] text-sm leading-relaxed">{v.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="bg-white py-20 md:py-24">
        <div className="cx">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-3">Quality Assurance</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0f2a4a] mb-4">
              Certifications &amp; Standards
            </h2>
            <p className="text-[#566677] text-lg max-w-2xl mx-auto leading-relaxed">
              Every Cosasco product is manufactured under a rigorous quality management system
              and meets the standards that critical industries demand worldwide.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-white border border-[#e8edf2] rounded-xl p-6 hover:shadow-lg hover:border-[#f4a65d] transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#f4a65d]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Award className="w-4 h-4 text-[#f4a65d]" />
                  </div>
                  <div>
                    <h4 className="font-black text-[#0f2a4a] text-sm mb-1.5">{cert.name}</h4>
                    <p className="text-[#566677] text-xs leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HQ Section ── */}
      <section className="bg-[#0f2a4a] text-white py-16">
        <div className="cx">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-4">Headquarters</p>
              <h2 className="text-3xl md:text-4xl font-black mb-5">
                Santa Fe Springs, California
              </h2>
              <p className="text-[#8ab4d4] leading-relaxed mb-6">
                Cosasco's manufacturing facility in Santa Fe Springs, California houses the
                full product lifecycle — precision CNC machining, alloy welding, hydrostatic
                testing, final inspection, and customer support. Everything that matters about
                a Cosasco product happens here, under ISO 9001 certification.
              </p>
              <address className="not-italic text-[#8ab4d4] text-sm space-y-3 mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#f4a65d] flex-shrink-0" />
                  <span>11401 Beach Street, Santa Fe Springs, CA 90670, USA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#f4a65d] flex-shrink-0" />
                  <a href="tel:+15629490123" className="hover:text-white transition-colors">
                    +1 (562) 949-0123
                  </a>
                </div>
              </address>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-primary">
                  <Phone className="w-4 h-4" />
                  Contact Our Team
                </Link>
                <Link href="/contact" className="btn btn-outline-white">
                  <Users className="w-4 h-4" />
                  Careers
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Factory className="w-7 h-7 text-[#f4a65d] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-black text-white text-sm mb-2">Manufacturing Facility</h3>
                    <p className="text-[#8ab4d4] text-sm leading-relaxed">
                      Precision CNC machining, alloy welding, hydrostatic testing to 15,000 psi,
                      and full quality inspection — all under ISO 9001:2015 certification.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Globe className="w-7 h-7 text-[#f4a65d] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-black text-white text-sm mb-2">Global Distribution Network</h3>
                    <p className="text-[#8ab4d4] text-sm leading-relaxed">
                      Authorized distributors in 110 countries provide local technical support,
                      stocked inventory, and application expertise to operators worldwide.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-7 h-7 text-[#f4a65d] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-black text-white text-sm mb-2">A Halma Company</h3>
                    <p className="text-[#8ab4d4] text-sm leading-relaxed">
                      Cosasco operates within the Halma group — a global portfolio of safety,
                      health, and environmental technology businesses with operations in over
                      20 countries and revenues exceeding £2 billion annually.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
