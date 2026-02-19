import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  FileText,
  Settings,
  Wrench,
  Database,
  Globe,
  Cloud,
  CheckCircle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Corrosion Monitoring Services | Cosasco',
  description:
    'Cosasco provides end-to-end corrosion monitoring services — from program development and installation to data analysis and SAFR cloud management. Expert support across 110 countries.',
}

const services = [
  {
    icon: FileText,
    title: 'Corrosion Program Development',
    description:
      'With over 70 years of expertise, we support all your program development needs — from initial risk assessment and monitoring point selection to full corrosion management program design aligned with NORSOK, NACE, and company-specific standards.',
    bullets: [
      'Monitoring point selection and access fitting placement studies',
      'Instrument selection (ER, LPR, coupon) based on process conditions',
      'Program documentation packages for regulatory compliance',
      'Review of existing programs against current best practice',
    ],
  },
  {
    icon: Settings,
    title: 'Installation & Commissioning',
    description:
      'Our certified field teams safely install monitoring products at full operating pressure, generating quality data from day one. All hot-tap and under-pressure insertion work is performed to your specification with minimal disruption to operations.',
    bullets: [
      'Hot-tap and live insertion at operating pressure',
      'Commissioning and baseline measurement establishment',
      'Compliance with all relevant PTW and HSE procedures',
      'Post-commissioning data quality verification',
    ],
  },
  {
    icon: Wrench,
    title: 'Preventative Maintenance',
    description:
      'Optimize the life and reliability of your corrosion monitoring equipment with regular planned maintenance and troubleshooting. Our global service network covers scheduled probe retrieval cycles, calibration, and replacement programs.',
    bullets: [
      'Scheduled probe retrieval and element replacement',
      'Instrument calibration and performance verification',
      'Coupon retrieval, preparation, and mass-loss analysis',
      'Emergency callout service for unplanned issues',
    ],
  },
  {
    icon: Globe,
    title: 'Access Under Pressure',
    description:
      'Cosasco enables safe installations for intrusive monitoring and chemical injection equipment globally. Our under-pressure access systems allow probe and coupon insertion and retrieval without process shutdown.',
    bullets: [
      'Under-pressure insertion and retrieval for all Cosasco products',
      'Third-party equipment hot-tap support',
      'Training for customer teams on retrieval tool operation',
      'Certification of personnel to Cosasco standards',
    ],
  },
  {
    icon: Database,
    title: 'Data Acquisition & Analysis',
    description:
      'Beyond instrument supply, Cosasco provides complete corrosion rate interpretation, coupon analysis, and reporting services — turning raw field data into actionable integrity insights for your operations team.',
    bullets: [
      'Corrosion rate trending and anomaly identification',
      'Coupon morphological analysis and MIC screening',
      'Inhibitor effectiveness evaluation',
      'Periodic integrity reporting for regulatory and internal use',
    ],
  },
  {
    icon: Cloud,
    title: 'SAFR Web Application',
    description:
      'The SAFR (Site Analysis and Field Reporting) cloud portal provides a centralized platform for logging, tracking, and assessing all your corrosion monitoring locations. Real-time dashboards, automated alerts, and audit-ready reporting in one place.',
    bullets: [
      'Centralized monitoring location database',
      'Corrosion rate trend dashboards and RAG status',
      'Automated anomaly alerts with configurable thresholds',
      'Export-ready reports for PHMSA, ISO, and internal audit',
    ],
  },
]

const stats = [
  { value: '70+', label: 'Years of field service experience' },
  { value: '110', label: 'Countries with service coverage' },
  { value: '6', label: 'Regional service offices' },
  { value: '24/7', label: 'Emergency callout availability' },
]

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-[#0f2a4a] pt-[72px] pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#f4a65d] text-xs font-bold uppercase tracking-[0.1em] mb-4">
            Services & Support
          </p>
          <h1 className="text-white font-black text-5xl md:text-6xl leading-tight max-w-4xl mb-6">
            Corrosion Monitoring Services
          </h1>
          <p className="text-[#94aabb] text-xl max-w-2xl leading-relaxed mb-10">
            From program design to ongoing maintenance and data analysis — Cosasco provides
            complete lifecycle support for corrosion and erosion monitoring programs worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-[#f4a65d] hover:bg-[#d4892a] text-white font-bold px-8 py-4 rounded-lg transition-colors text-sm"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/support"
              className="border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-colors text-sm"
            >
              Technical Support →
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#f0f4f8] border-b border-[#e8edf2] py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-[#0f2a4a] font-black text-4xl mb-1">{value}</p>
              <p className="text-[#566677] text-sm leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#f4a65d] text-xs font-bold uppercase tracking-[0.1em] mb-3">
            Our Services Include
          </p>
          <h2 className="text-[#0f2a4a] font-black text-4xl mb-12 max-w-2xl leading-tight">
            End-to-end support from a single trusted partner
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map(({ icon: Icon, title, description, bullets }) => (
              <div
                key={title}
                className="bg-white border border-[#e8edf2] rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f0f4f8] flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#0f2a4a]" />
                </div>
                <h3 className="text-[#0f2a4a] font-black text-xl mb-3">{title}</h3>
                <p className="text-[#566677] text-sm leading-relaxed mb-5">{description}</p>
                <ul className="space-y-2">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-[#566677]">
                      <CheckCircle className="w-4 h-4 text-[#f4a65d] flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-[#0f2a4a] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#f4a65d] text-5xl font-black leading-none mb-4">&ldquo;</p>
          <p className="text-white text-xl md:text-2xl font-light italic leading-relaxed mb-6">
            Cosasco is capable of providing the full package of both product supply and service.
            There aren&apos;t so many companies that are capable of providing the full service of
            both supply and service, which is one of the reasons why we use Cosasco.
          </p>
          <p className="text-[#94aabb] text-sm">— Cosasco Customer, Corrosion Engineer, Supermajor</p>
        </div>
      </section>

      {/* GLOBAL OFFICES */}
      <section className="py-16 bg-[#f0f4f8]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#566677] mb-3">
            Service Locations
          </p>
          <h2 className="text-[#0f2a4a] font-black text-3xl mb-8">
            Providing services across the globe
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'Los Angeles, CA',
              'Houston, TX',
              'Aberdeen, Scotland',
              'Dubai, UAE',
              'Kuala Lumpur, Malaysia',
              'Perth, Australia',
            ].map((office) => (
              <div
                key={office}
                className="bg-white border border-[#e8edf2] rounded-xl p-4 text-center"
              >
                <Globe className="w-5 h-5 text-[#f4a65d] mx-auto mb-2" />
                <p className="text-[#0f2a4a] font-semibold text-sm leading-snug">{office}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-[#e8edf2]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#f4a65d] text-xs font-bold uppercase tracking-[0.1em] mb-4">
            The Cosasco Commitment
          </p>
          <h2 className="text-[#0f2a4a] font-black text-4xl mb-4">
            Schedule a Consultation
          </h2>
          <p className="text-[#566677] text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Speak directly with a Cosasco corrosion engineer. No sales pressure — just expert
            guidance on the right service approach for your application.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#f4a65d] hover:bg-[#d4892a] text-white font-bold px-8 py-4 rounded-lg transition-colors text-sm"
            >
              Request a Consultation
            </Link>
            <Link
              href="/support/rma"
              className="border border-[#e8edf2] text-[#0f2a4a] hover:bg-[#f0f4f8] font-semibold px-8 py-4 rounded-lg transition-colors text-sm flex items-center gap-2"
            >
              Submit an RMA <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
