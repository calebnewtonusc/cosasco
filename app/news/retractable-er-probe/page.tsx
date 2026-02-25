import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Settings, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cosasco Launches Retractable High-Pressure ER Probe for Live-Line Deployment | Cosasco News',
  description:
    'Cosasco introduces a patented retractable ER probe rated to 6,000 psi, enabling safe insertion and retrieval under full live-line pressure without process shutdown.',
}

export default function RetractableERProbePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-[#0f2a4a] pb-16 pt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
          <nav className="text-[#5a7a94] text-sm mb-6 flex flex-wrap gap-1 items-center">
            <Link href="/news" className="hover:text-[#f4a65d] transition-colors">
              News &amp; Insights
            </Link>
            <span className="mx-1">/</span>
            <span className="text-white">Retractable High-Pressure ER Probe</span>
          </nav>
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#f4a65d]/20 text-[#f4a65d] mb-5">
            Product Launch
          </span>
          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight max-w-4xl mb-5">
            Cosasco Launches Retractable High-Pressure ER Probe for Live-Line Deployment
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#94aabb]">
            <span className="font-semibold text-white">Cosasco Engineering Team</span>
            <span className="text-[#3a5a74]">|</span>
            <span>March 12, 2026</span>
            <span className="text-[#3a5a74]">|</span>
            <span>6 min read</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 grid lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2">
            <div className="text-[#566677] leading-relaxed space-y-6 text-[1.05rem]">
              <p className="text-xl text-[#0f2a4a] font-semibold leading-snug">
                Cosasco has launched a next-generation retractable electrical resistance (ER) probe
                engineered for live-line insertion and retrieval at pressures up to 6,000 psi (414 bar).
                Built around Cosasco&apos;s patented access fitting, the field-proven &ldquo;stopple&rdquo; system, the
                probe eliminates process shutdowns for routine element changes, dramatically reducing
                the cost and operational disruption of high-pressure corrosion monitoring programs.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                The Operational Problem the Industry Has Lived With
              </h2>
              <p>
                Electrical resistance probes are the backbone of continuous corrosion monitoring
                across the oil and gas, petrochemical, and midstream industries. They deliver real-time
                metal loss data in virtually any fluid environment, but in high-pressure service above
                3,000 psi, conventional fixed-insertion probes have always imposed a painful trade-off:
                replace the sensing element under live pressure using specialist retrieval equipment,
                or wait for a planned shutdown. Neither option is cost-free.
              </p>
              <p>
                For high-pressure gas transmission lines, deepwater topsides, and supercritical CO₂
                injection systems operating above 5,000 psi, that trade-off has historically meant
                12–18-month monitoring gaps between element changes, or six-figure mobilization costs
                for a task that should take a single technician under an hour. The new Cosasco
                retractable probe was designed specifically to close that gap.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                The Stopple Access Fitting: Cosasco&apos;s Patented Foundation
              </h2>
              <p>
                The retractable probe system is built on Cosasco&apos;s established stopple access fitting -
                a patented isolation valve and retrieval mechanism that has been deployed across
                Cosasco&apos;s global customer base for over two decades. The stopple creates a fully
                isolated annular chamber between the process pipe bore and the probe body, allowing
                the sensing element to be physically withdrawn from the process stream while the
                access valve remains open and the line remains at full operating pressure.
              </p>
              <p>
                The new 6,000 psi variant extends this proven design with a re-engineered stem
                seal stack, a dual-redundant metal-to-metal primary seal verified to API 6A PSL3,
                and an integrated pressure relief pathway that ensures safe pressure equalization
                before the outer cap is broken. The access fitting body is rated to ASME B16.34
                and is available in ANSI Class 900 through Class 4500 flanged end connections to
                cover the full range of high-pressure process tie-in requirements.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                Key Specifications
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Shield,
                    stat: '6,000 psi',
                    label: 'Maximum working pressure (414 bar), rated to API 6A PSL3',
                  },
                  {
                    icon: Zap,
                    stat: '175 °C',
                    label: 'Maximum process temperature (347 °F) with high-temp seal option',
                  },
                  {
                    icon: Settings,
                    stat: '< 8 min',
                    label: 'Full element exchange time under live-line pressure, single technician',
                  },
                  {
                    icon: Wrench,
                    stat: '316SS / C-276',
                    label: 'Standard wetted materials: 316L stainless steel and Hastelloy C-276',
                  },
                ].map(({ icon: Icon, stat, label }) => (
                  <div key={stat} className="bg-[#f0f4f8] border border-[#e8edf2] rounded-xl p-5 text-center">
                    <Icon className="w-6 h-6 text-[#f4a65d] mx-auto mb-3" />
                    <p className="text-[#0f2a4a] font-black text-2xl mb-2">{stat}</p>
                    <p className="text-[#566677] text-xs leading-relaxed">{label}</p>
                  </div>
                ))}
              </div>

              <p>
                Wetted components are available in 316L stainless steel as standard, with Hastelloy
                C-276 for highly corrosive service including chloride-rich produced water, sour gas
                (H₂S service per NACE MR0175 / ISO 15156), and mixed acid gas injection systems.
                All wetted material certifications are provided to EN 10204 3.1. The probe body
                is compatible with Cosasco&apos;s full range of ER sensing element geometries: flush
                mount, tubular, cylindrical, and disc, allowing operators to select the optimum
                element sensitivity for their specific corrosion rate regime.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                Compatibility with CDO Data Acquisition Systems
              </h2>
              <p>
                The new retractable probe is fully compatible with the complete Cosasco CDO
                (Cosasco Data Online) data acquisition ecosystem, including the Microcor® Wireless
                Transmitter (MWT) for cable-free WirelessHART deployment, the FieldCom 5 handheld
                reader for manual spot-check data collection, and Cosasco&apos;s panel-mount and DIN-rail
                transmitters for hardwired SCADA integration. No adapter plates or modified
                connection hardware are required; the probe uses the same standard Cosasco M10 top
                connection as the existing fixed-insertion ER probe range.
              </p>
              <p>
                For operators already running Cosasco monitoring programs, this means the
                retractable probe can be introduced as a direct drop-in replacement at existing
                access fitting locations without any data system reconfiguration. CDO cloud
                dashboards automatically recognize the new probe type and apply element-geometry
                compensation factors during the data synchronization cycle.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">Features at a Glance</h2>
              <ul className="space-y-3">
                {[
                  '6,000 psi / 414 bar working pressure: covers the full range of high-pressure gas and liquid service',
                  'Live-line element exchange in under 8 minutes, single-operator procedure, no specialist tools',
                  'Patented stopple access fitting with dual metal-to-metal primary seal (API 6A PSL3)',
                  'Materials: 316L SS standard; Hastelloy C-276 for sour and high-chloride service',
                  'ASME B16.34 body rating; ANSI Class 900 through 4500 flanged end connections',
                  'ATEX / IECEx Zone 1 certified probe body available for classified area installation',
                  'Compatible with all Cosasco CDO data acquisition systems: no hardware adapters required',
                  'Available in flush, tubular, cylindrical, and disc ER element geometries',
                  'Full EN 10204 3.1 material certification package standard; NACE-compliant documentation available',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f4a65d] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                Voice from the Field: VP Operations on the Design Goal
              </h2>
              <blockquote className="border-l-4 border-[#f4a65d] pl-6 py-2 bg-[#f7f9fc] rounded-r-xl">
                <p className="text-[#0f2a4a] font-semibold italic text-lg leading-snug mb-3">
                  &ldquo;Our customers operating at 5,000 to 6,000 psi have been asking for a
                  truly safe live-line ER solution for years. Fixed probes at that pressure range
                  are operationally costly to maintain; you either accept monitoring gaps or you
                  mobilize specialist intervention crews. We built this system so a regular field
                  technician can swap the element during a normal walk-around. The stopple
                  mechanism handles all the pressure management; the technician just follows
                  a seven-step procedure.&rdquo;
                </p>
                <p className="text-[#566677] text-sm font-semibold">
                  Dustin Jennings, VP Operations, Rohrback Cosasco Systems, Inc.
                </p>
              </blockquote>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">Operational Impact</h2>
              <p>
                For a typical midstream operator maintaining 40–60 ER monitoring points across a
                high-pressure gas transmission network, annual element replacement previously
                required either planned line depressurization or four to six specialist crew
                mobilizations per year at significant cost and scheduling complexity. With the
                retractable probe, the same element exchange program is executed by in-house field
                technicians during routine monitoring rounds, with zero process interruption
                and no specialist certification beyond Cosasco&apos;s standard retrieval tool training
                (a two-hour course available in-person and via Cosasco Learning online).
              </p>
              <p>
                In pilot deployments at three North American gas transmission operators during the
                second half of 2025, the retractable probe system reduced annual monitoring
                maintenance expenditure by 65–80% compared to the equivalent fixed-probe programs,
                while simultaneously increasing element change frequency from annual to
                semi-annual, improving data quality and corrosion trend detection sensitivity.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">Availability</h2>
              <p>
                The retractable high-pressure ER probe is available for order beginning Q2 2026.
                Standard lead time is 6–8 weeks for 316L stainless steel configurations and
                10–14 weeks for Hastelloy C-276 bodies. The complete system, comprising the stopple access
                fitting, probe body, retrieval tool, and sensing element, is available as a
                packaged kit with a single part number for straightforward procurement.
              </p>
              <p>
                Custom pressure and temperature ratings, non-standard end connections, and
                integrated chemical injection ports are available as engineered options. Contact
                your regional Cosasco representative to initiate a specification review and
                confirm compatibility with your existing access fitting infrastructure.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-[#0f2a4a] rounded-xl p-6 text-white">
              <p className="font-black text-lg mb-2">Request a Specification</p>
              <p className="text-[#94aabb] text-sm leading-relaxed mb-4">
                Get full technical specifications, system drawings, and pricing for the
                6,000 psi retractable ER probe for your application.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-[#f4a65d] hover:bg-[#d4892a] text-white font-bold py-3 rounded-lg transition-colors text-sm"
              >
                Request Specs &amp; Pricing
              </Link>
            </div>

            <div className="bg-[#f0f4f8] border border-[#e8edf2] rounded-xl p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#566677] mb-4">
                Related Products
              </p>
              <ul className="space-y-3">
                {[
                  { href: '/products/er-probes', label: 'ER Probe Systems' },
                  { href: '/products/access-fittings', label: 'Stopple Access Fittings' },
                  { href: '/products/microcor-wireless', label: 'Microcor® Wireless (MWT)' },
                  { href: '/products/cdo', label: 'CDO Data Acquisition' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[#0f2a4a] text-sm font-medium hover:text-[#f4a65d] transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-[#f4a65d] flex-shrink-0" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-[#e8edf2] rounded-xl p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#566677] mb-4">
                Recent News
              </p>
              <ul className="space-y-4">
                {[
                  {
                    href: '/news/industry-recognition-2025',
                    title: 'Cosasco Named AMPP 2025 Innovation Award Finalist for Microcor® WirelessHART System',
                  },
                  {
                    href: '/news/fieldcom-5-launch',
                    title: 'Cosasco Releases Microcor® Firmware v5.2 with Enhanced WirelessHART Mesh Stability',
                  },
                ].map((a) => (
                  <li key={a.href} className="border-b border-[#e8edf2] pb-4 last:border-0 last:pb-0">
                    <Link
                      href={a.href}
                      className="text-sm text-[#0f2a4a] font-semibold hover:text-[#f4a65d] transition-colors leading-snug block"
                    >
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* BACK NAV */}
      <section className="bg-[#f0f4f8] border-t border-[#e8edf2] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 flex items-center justify-between flex-wrap gap-4">
          <Link
            href="/news"
            className="text-[#0f2a4a] font-semibold flex items-center gap-2 hover:text-[#f4a65d] transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to News
          </Link>
          <Link
            href="/news/industry-recognition-2025"
            className="text-[#0f2a4a] font-semibold flex items-center gap-2 hover:text-[#f4a65d] transition-colors text-sm"
          >
            Next: AMPP 2025 Award Finalist <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
