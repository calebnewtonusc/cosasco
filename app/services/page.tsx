import type { Metadata } from 'next'
import Link from 'next/link'
import {
  FileText,
  Settings,
  Wrench,
  Globe,
  CheckCircle,
  Phone,
  ChevronRight,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Engineering Services | Cosasco',
  description:
    'Cosasco provides design, installation, commissioning, and maintenance services for corrosion monitoring systems worldwide.',
}

const mainServices = [
  {
    icon: FileText,
    title: 'Design & Engineering',
    tagline: 'Engineered for your exact application from the first drawing.',
    description:
      'Cosasco application engineers work alongside your integrity and operations teams to develop a corrosion monitoring system designed around your specific process conditions, materials, and regulatory requirements.',
    bullets: [
      'System design scoping and monitoring point selection',
      'Access fitting placement engineering and pressure-rating analysis',
      'Full documentation packages: P&IDs, material specifications, BOM',
      'Compliance review against API RP 580, NACE SP0775, and customer standards',
      'Third-party engineering review support',
    ],
    href: '/contact',
    cta: 'Request Design Support',
  },
  {
    icon: Settings,
    title: 'Installation & Commissioning',
    tagline: 'Certified field teams. Zero process disruption.',
    description:
      'From under-pressure hot-tap work to full Microcor® wireless commissioning, Cosasco field engineers execute to the highest safety and quality standards - delivering production-ready monitoring systems from day one.',
    bullets: [
      'Hot-tap access fitting installation at full operating pressure',
      'Under-pressure probe and coupon insertion to Cosasco procedures',
      'Microcor® wireless logger network configuration and baseline acquisition',
      'PTW, LOTO, and site HSE procedure compliance',
      'Post-commissioning data quality verification and handover report',
    ],
    href: '/contact',
    cta: 'Schedule Installation',
  },
  {
    icon: Wrench,
    title: 'Service & Maintenance',
    tagline: 'Proactive maintenance. Emergency callout. Global coverage.',
    description:
      "Cosasco's global service network keeps your monitoring program performing to specification year-round - with planned maintenance schedules, rapid emergency response, and access to certified service engineers in 110+ countries.",
    bullets: [
      'Planned probe retrieval cycles and element replacement',
      'Sensor calibration and instrument performance verification',
      'Corrosion coupon retrieval, preparation, and mass-loss analysis',
      'Emergency callout service - 24/7 availability',
      'Global service network spanning 110+ countries',
    ],
    href: '/contact',
    cta: 'Request Maintenance',
  },
]

const globalStats = [
  { value: '110+', label: 'Countries' },
  { value: '70+', label: 'Years' },
  { value: '24/7', label: 'Emergency Support' },
  { value: 'Certified', label: 'Field Teams Worldwide' },
]

const processSteps = [
  {
    step: 1,
    title: 'Application Consultation',
    desc: 'Our engineers review your process conditions, materials, fluid chemistry, and monitoring objectives to define the right approach for your system.',
  },
  {
    step: 2,
    title: 'System Design',
    desc: 'We produce a full engineering design package - monitoring point selection, access fitting specifications, instrument selection, and compliance documentation.',
  },
  {
    step: 3,
    title: 'Site Survey',
    desc: 'A Cosasco field engineer visits site to validate the design against actual piping layouts, access constraints, and operating conditions.',
  },
  {
    step: 4,
    title: 'Installation',
    desc: 'Certified teams install access fittings, probes, and coupons at operating pressure - with full compliance to your PTW and HSE procedures.',
  },
  {
    step: 5,
    title: 'Commissioning',
    desc: 'Instruments are verified, baseline measurements established, and Microcor® wireless networks configured. Handover documentation is issued at completion.',
  },
  {
    step: 6,
    title: 'Ongoing Support',
    desc: 'Planned maintenance schedules, emergency callout coverage, data analysis, and program reviews keep your corrosion management system performing to specification.',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-[#0f2a4a] text-white overflow-hidden pt-[72px] pb-16 px-6">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#f4a65d]" aria-hidden="true" />
        <div className="cx relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-[#8ab4d4] mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="text-white font-medium">Services</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-3">
              Engineering Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Engineering Services
            </h1>
            <p className="text-[#8ab4d4] text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              From design through commissioning and ongoing maintenance - Cosasco's global service
              network supports your corrosion monitoring program at every stage.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary">
                Talk to a Service Engineer
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/support" className="btn btn-outline-white">
                Technical Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Three Main Service Cards ── */}
      <section className="bg-white py-20 md:py-24">
        <div className="cx">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-3">
              What We Deliver
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0f2a4a] mb-4">
              Full-Lifecycle Service Support
            </h2>
            <p className="text-[#566677] text-lg max-w-2xl mx-auto leading-relaxed">
              Three core service disciplines, delivered by a single trusted partner with over
              70 years of corrosion monitoring expertise.
            </p>
          </div>

          <div className="space-y-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 1
              return (
                <article
                  key={service.title}
                  className="bg-white border border-[#e8edf2] rounded-2xl overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className={`grid lg:grid-cols-2 gap-0 ${isEven ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Colored panel */}
                    <div className={`bg-[#0f2a4a] p-8 md:p-12 flex flex-col justify-between ${isEven ? 'lg:col-start-2' : ''}`}>
                      <div>
                        <div className="w-14 h-14 bg-[#f4a65d]/15 border border-[#f4a65d]/30 rounded-xl flex items-center justify-center mb-6">
                          <Icon className="w-7 h-7 text-[#f4a65d]" />
                        </div>
                        <h3 className="text-white font-black text-2xl md:text-3xl mb-3">
                          {service.title}
                        </h3>
                        <p className="text-[#f4a65d] font-semibold text-sm mb-5">
                          {service.tagline}
                        </p>
                        <p className="text-[#8ab4d4] text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div className="mt-8">
                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-2 bg-[#f4a65d] hover:bg-[#d4892a] text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm"
                        >
                          {service.cta}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Bullets panel */}
                    <div className={`p-8 md:p-12 flex flex-col justify-center ${isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#94aabb] mb-5">
                        Scope of Service
                      </p>
                      <ul className="space-y-4">
                        {service.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#f4a65d] flex-shrink-0 mt-0.5" />
                            <span className="text-[#566677] text-sm leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Global Coverage ── */}
      <section className="bg-[#0f2a4a] py-16 md:py-20">
        <div className="cx">
          <div className="text-center mb-12">
            <div className="w-12 h-12 bg-[#f4a65d]/15 border border-[#f4a65d]/30 rounded-xl flex items-center justify-center mx-auto mb-5">
              <Globe className="w-6 h-6 text-[#f4a65d]" />
            </div>
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-3">
              Global Reach
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Service Wherever You Operate
            </h2>
            <p className="text-[#8ab4d4] text-lg max-w-2xl mx-auto leading-relaxed">
              Cosasco's worldwide distribution and service network means certified engineers and
              stocked inventory are never far away - from the North Sea to Southeast Asia.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {globalStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="text-[#f4a65d] font-black text-4xl md:text-5xl leading-none mb-2">
                  {stat.value}
                </div>
                <div className="text-[#8ab4d4] text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-[#f7f9fc] py-20 md:py-24">
        <div className="cx">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-3">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0f2a4a] mb-4">
              From First Call to Ongoing Support
            </h2>
            <p className="text-[#566677] text-lg max-w-2xl mx-auto leading-relaxed">
              A structured, repeatable process that delivers reliable corrosion monitoring
              systems - on schedule and to specification.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="bg-white border border-[#e8edf2] rounded-xl p-6 hover:shadow-md hover:border-[#f4a65d] transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#0f2a4a] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#f4a65d] font-black text-sm">{item.step}</span>
                  </div>
                  <div className="h-px flex-1 bg-[#e8edf2]" aria-hidden="true" />
                </div>
                <h3 className="font-black text-[#0f2a4a] text-base mb-2">{item.title}</h3>
                <p className="text-[#566677] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Connector annotation */}
          <p className="text-center text-[#94aabb] text-xs font-medium mt-8 tracking-wide">
            Steps 1 → 2 → 3 → 4 → 5 → 6&nbsp;&nbsp;·&nbsp;&nbsp;Continuous improvement loop at every stage
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-16 border-t border-[#e8edf2]">
        <div className="cx">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-12 bg-[#f4a65d]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Phone className="w-6 h-6 text-[#f4a65d]" />
            </div>
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0f2a4a] mb-4">
              Ready to talk to a service engineer?
            </h2>
            <p className="text-[#566677] text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Describe your application and one of our corrosion specialists will recommend the
              right service approach - no obligation, no sales pressure.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary">
                Contact a Service Engineer
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/support" className="btn btn-outline-navy">
                Technical Support Portal
              </Link>
            </div>

            {/* Accent strip */}
            <div className="mt-12 pt-8 border-t border-[#e8edf2] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                { icon: CheckCircle, text: 'ISO 9001-Certified Service Teams' },
                { icon: Globe, text: 'Local Support in 110+ Countries' },
                { icon: Phone, text: '24/7 Emergency Callout' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center justify-center gap-2 text-[#566677] text-sm">
                  <Icon className="w-4 h-4 text-[#f4a65d] flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
