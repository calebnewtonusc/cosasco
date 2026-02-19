import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, FlaskConical, Cpu, Satellite, ShieldCheck, Layers, Zap, Globe2, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Innovation | Cosasco Corrosion Technology',
  description: 'Seventy years of engineering leadership. Cosasco drives advances in corrosion monitoring, chemical injection, and digital integrity management.',
}

const pillars = [
  {
    icon: <FlaskConical className="w-7 h-7 text-[#f4a65d]" />,
    title: 'Materials Science',
    body: 'Our metallurgy team continuously evaluates new alloy compositions and surface treatments for probes and coupons operating in H₂S, CO₂, and high-chloride environments. Every Cosasco sensor material is validated against NACE/ISO standards before release.',
  },
  {
    icon: <Cpu className="w-7 h-7 text-[#f4a65d]" />,
    title: 'Digital Intelligence',
    body: 'FieldCom Cloud processes millions of corrosion data points daily. We are developing AI-assisted anomaly detection that alerts integrity teams to emerging corrosion events before they are visible in trended data.',
  },
  {
    icon: <Satellite className="w-7 h-7 text-[#f4a65d]" />,
    title: 'Remote Sensing',
    body: 'Our HPHT wireless transmission systems bring real-time corrosion data from subsea and remote installations where wired infrastructure is impossible. The latest generation achieves 15-minute update cycles via satellite backhaul.',
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-[#f4a65d]" />,
    title: 'Integrity by Design',
    body: 'Every Cosasco product is engineered from the design phase with process safety as a primary constraint — not an afterthought. Our access fitting and retrieval tool designs eliminate live-line exposure risk for field technicians.',
  },
]

const milestones = [
  { year: '1953', label: 'Founded in Los Angeles', detail: 'Cosasco is established as a corrosion monitoring specialist serving Southern California refineries.' },
  { year: '1971', label: 'First ER probe commercialized', detail: 'Cosasco introduces the first commercially available electrical resistance probe for live pipeline monitoring.' },
  { year: '1988', label: 'HPHT access fittings', detail: 'Cosasco launches retrievable access fittings rated for high-pressure, high-temperature sour gas service.' },
  { year: '2002', label: 'CorrView software platform', detail: 'The first integrated software platform for corrosion data management and compliance reporting.' },
  { year: '2012', label: 'Acquired by Halma plc', detail: 'Cosasco joins the Halma family of safety, health, and environmental technology companies.' },
  { year: '2018', label: 'FieldCom Cloud launches', detail: 'Real-time cloud-connected corrosion monitoring goes live. First deployments across 14 North Sea platforms.' },
  { year: '2023', label: 'AI corrosion analytics (beta)', detail: 'Machine-learning anomaly detection enters beta with 12 operator partners across three continents.' },
  { year: '2025', label: 'FieldCom Mobile v3', detail: 'Offline-capable field data capture with GPS probe location and QR code probe identification.' },
]

const researchAreas = [
  {
    title: 'Predictive Corrosion Modeling',
    status: 'Active R&D',
    statusColor: 'bg-green-100 text-green-700',
    body: 'Combining real-time ER and LPR probe data with process variables (temperature, flow rate, pH, H₂S partial pressure) to generate forward-looking corrosion rate predictions — not just historical trending.',
    partners: 'University of Manchester, TWI Ltd',
  },
  {
    title: 'Subsea Wireless Probe Networks',
    status: 'Prototype Phase',
    statusColor: 'bg-sky-100 text-sky-700',
    body: 'Battery-powered probe nodes communicating via acoustic modem to surface control systems. Targeting 400m water depth with 30-minute data cycles and 5-year battery life.',
    partners: 'SINTEF Ocean, Equinor Technology Ventures',
  },
  {
    title: 'Digital Twin Integration',
    status: 'Pilot Deployment',
    statusColor: 'bg-purple-100 text-purple-700',
    body: 'FieldCom Cloud API integrations with AVEVA, AspenTech, and Honeywell digital twin platforms. Operators can overlay live corrosion data onto 3D pipeline models for visualized integrity management.',
    partners: 'Multiple operator partners (undisclosed)',
  },
  {
    title: 'Biogenic Corrosion Early Warning',
    status: 'Active R&D',
    statusColor: 'bg-green-100 text-green-700',
    body: 'Detecting SRB and IOB microbial activity signatures in real-time corrosion data patterns — potentially enabling biocide injection to be triggered by biological activity rather than by fixed schedules.',
    partners: 'University of Houston, Cosasco Microbiology Lab',
  },
]

const publications = [
  {
    title: 'Evaluation of HPHT ER Probe Performance in High H₂S Sour Gas Service',
    venue: 'CORROSION 2024 — NACE International',
    authors: 'Whitfield, J.; Okafor, C.; Nakamura, S.',
    year: '2024',
  },
  {
    title: 'Machine Learning Approaches to Anomaly Detection in Continuous Corrosion Rate Data Streams',
    venue: 'Corrosion Science, Vol. 218',
    authors: 'Al-Rashid, F.; Whitfield, J.; Cosasco Data Science Team',
    year: '2024',
  },
  {
    title: 'Standardized Coupon Program Design for Multi-Well Offshore Monitoring: Lessons from 23-Well Deployment',
    venue: 'Offshore Technology Conference 2023',
    authors: 'Okafor, C.; Nakamura, S.',
    year: '2023',
  },
  {
    title: 'Quantifying Chemical Injection Optimization Benefit Through Integrated ER/LPR Monitoring',
    venue: 'International Corrosion Congress 2023',
    authors: 'Whitfield, J.; Al-Rashid, F.',
    year: '2023',
  },
]

export default function InnovationPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}
      <section className="bg-[#0f2a4a] pt-[72px] pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-[#f4a65d] text-sm font-bold uppercase tracking-widest mb-4">Innovation at Cosasco</p>
            <h1 className="text-white font-black text-5xl md:text-6xl leading-tight mb-6">
              70 Years of Pushing Corrosion Science Forward
            </h1>
            <p className="text-[#94aabb] text-lg leading-relaxed max-w-3xl">
              From the first commercial ER probe to cloud-connected real-time monitoring to AI-assisted anomaly detection — Cosasco has led the technical evolution of corrosion management for seven decades. This is what we&apos;re working on next.
            </p>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section className="py-20 bg-[#f7f9fc]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0f2a4a] font-black text-3xl mb-3">Our Innovation Pillars</h2>
          <p className="text-[#566677] mb-12 max-w-2xl">Four areas where Cosasco engineering investment drives the industry forward.</p>
          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-8 border border-[#e8edf2]">
                <div className="w-12 h-12 bg-[#fef8f0] rounded-xl flex items-center justify-center mb-5">
                  {p.icon}
                </div>
                <h3 className="text-[#0f2a4a] font-black text-xl mb-3">{p.title}</h3>
                <p className="text-[#566677] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0f2a4a] font-black text-3xl mb-3">Seven Decades of Firsts</h2>
          <p className="text-[#566677] mb-12 max-w-2xl">Key milestones in Cosasco&apos;s engineering history.</p>
          <div className="relative">
            <div className="absolute left-[88px] top-0 bottom-0 w-[2px] bg-[#e8edf2] hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="md:flex items-start gap-8">
                  <div className="shrink-0 w-[88px] text-right hidden md:block">
                    <span className="text-[#f4a65d] font-black text-sm">{m.year}</span>
                  </div>
                  <div className="hidden md:flex shrink-0 items-center justify-center w-5 h-5 rounded-full bg-[#f4a65d] relative z-10 mt-0.5" />
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="md:hidden text-[#f4a65d] font-black text-sm">{m.year}</span>
                      <p className="text-[#0f2a4a] font-bold text-base">{m.label}</p>
                    </div>
                    <p className="text-[#566677] text-sm leading-relaxed">{m.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT R&D */}
      <section className="py-20 bg-[#f7f9fc]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0f2a4a] font-black text-3xl mb-3">Current Research Programs</h2>
          <p className="text-[#566677] mb-12 max-w-2xl">Active R&D initiatives across Cosasco&apos;s engineering and data science teams.</p>
          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((r) => (
              <div key={r.title} className="bg-white rounded-xl p-8 border border-[#e8edf2]">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-[#0f2a4a] font-black text-lg leading-snug">{r.title}</h3>
                  <span className={`shrink-0 text-xs font-bold px-2.5 py-1 rounded-full ${r.statusColor}`}>
                    {r.status}
                  </span>
                </div>
                <p className="text-[#566677] leading-relaxed mb-4 text-sm">{r.body}</p>
                <p className="text-[#8898aa] text-xs">
                  <span className="font-semibold text-[#566677]">Research Partners: </span>
                  {r.partners}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-start justify-between gap-4 mb-12">
            <div>
              <h2 className="text-[#0f2a4a] font-black text-3xl mb-3">Technical Publications</h2>
              <p className="text-[#566677] max-w-2xl">Cosasco engineers publish findings at leading industry conferences and in peer-reviewed journals.</p>
            </div>
            <BookOpen className="w-8 h-8 text-[#f4a65d] shrink-0 mt-1" />
          </div>
          <div className="space-y-4">
            {publications.map((pub) => (
              <div key={pub.title} className="border border-[#e8edf2] rounded-xl p-6 flex items-start gap-6">
                <div className="shrink-0 w-12 h-12 bg-[#fef8f0] rounded-xl flex items-center justify-center">
                  <span className="text-[#f4a65d] font-black text-sm">{pub.year}</span>
                </div>
                <div>
                  <p className="text-[#0f2a4a] font-bold mb-1 leading-snug">{pub.title}</p>
                  <p className="text-[#f4a65d] text-sm font-semibold mb-1">{pub.venue}</p>
                  <p className="text-[#8898aa] text-sm">{pub.authors}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HALMA PARTNERSHIP */}
      <section className="py-20 bg-[#f7f9fc]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Globe2 className="w-6 h-6 text-[#f4a65d]" />
                <span className="text-[#f4a65d] text-sm font-bold uppercase tracking-widest">Halma Partnership</span>
              </div>
              <h2 className="text-[#0f2a4a] font-black text-3xl mb-6">
                Part of a Global Safety Technology Network
              </h2>
              <p className="text-[#566677] leading-relaxed mb-6">
                Since 2012, Cosasco has operated as part of Halma plc — a FTSE 100 group of life-saving technology companies. Halma&apos;s R&D investment framework gives Cosasco access to cross-sector research capabilities, shared testing infrastructure, and innovation funding beyond what standalone companies can sustain.
              </p>
              <p className="text-[#566677] leading-relaxed mb-8">
                Halma companies collectively invest over £100M annually in R&D. For Cosasco, this means faster development cycles, access to advanced sensing technologies from sister companies, and shared regulatory expertise across 40+ markets.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Annual R&D investment fund', 'Cross-company IP sharing', 'Global regulatory expertise', 'Shared test infrastructure'].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-sm text-[#566677]">
                    <Layers className="w-4 h-4 text-[#f4a65d] shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: '70+', label: 'Years of corrosion expertise' },
                { stat: '40+', label: 'Countries with active deployments' },
                { stat: '£100M+', label: 'Halma annual group R&D spend' },
                { stat: '200+', label: 'Technical patents in portfolio' },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl p-6 text-center border border-[#e8edf2]">
                  <div className="text-[#f4a65d] font-black text-3xl mb-2">{s.stat}</div>
                  <div className="text-[#566677] text-sm leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECH TOOLS CTA */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0f2a4a] font-black text-2xl mb-6">Engineering Tools</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/tools/device-length-calculator"
              className="flex items-start gap-5 border border-[#e8edf2] rounded-xl p-6 hover:border-[#f4a65d] hover:shadow-sm transition-all group"
            >
              <div className="w-12 h-12 bg-[#fef8f0] rounded-xl flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-[#f4a65d]" />
              </div>
              <div className="flex-1">
                <p className="text-[#0f2a4a] font-bold group-hover:text-[#f4a65d] transition-colors">Device Length Calculator</p>
                <p className="text-[#566677] text-sm mt-1">Calculate the correct probe or coupon insertion length for any pipe size and schedule.</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[#8898aa] group-hover:text-[#f4a65d] transition-colors mt-1 shrink-0" />
            </Link>
            <Link
              href="/resources/case-studies"
              className="flex items-start gap-5 border border-[#e8edf2] rounded-xl p-6 hover:border-[#f4a65d] hover:shadow-sm transition-all group"
            >
              <div className="w-12 h-12 bg-[#fef8f0] rounded-xl flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6 text-[#f4a65d]" />
              </div>
              <div className="flex-1">
                <p className="text-[#0f2a4a] font-bold group-hover:text-[#f4a65d] transition-colors">Case Studies</p>
                <p className="text-[#566677] text-sm mt-1">See how these innovations perform in real operator deployments across the globe.</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[#8898aa] group-hover:text-[#f4a65d] transition-colors mt-1 shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f2a4a] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white font-black text-3xl mb-4">Interested in Cosasco R&D partnerships?</h2>
          <p className="text-[#94aabb] mb-8 max-w-xl mx-auto">
            We collaborate with operators, universities, and technology partners on corrosion science research. Get in touch to discuss opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#f4a65d] hover:bg-[#d4892a] text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Contact Our Engineering Team
          </Link>
        </div>
      </section>
    </div>
  )
}
