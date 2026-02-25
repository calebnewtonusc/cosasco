import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle, Award, Globe, Wifi } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cosasco Named AMPP 2025 Innovation Award Finalist for Microcor® WirelessHART System | Cosasco News',
  description:
    'AMPP recognized Cosasco as a 2025 Innovation Award finalist for the Microcor® Wireless Transmitter (MWT), featuring WirelessHART 7 protocol, 18-bit resolution, and intrinsically safe hazardous-area design.',
}

export default function IndustryRecognition2025Page() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-[#0f2a4a] pt-[72px] pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="text-[#5a7a94] text-sm mb-6 flex flex-wrap gap-1 items-center">
            <Link href="/news" className="hover:text-[#f4a65d] transition-colors">
              News &amp; Insights
            </Link>
            <span className="mx-1">/</span>
            <span className="text-white">AMPP 2025 Innovation Award Finalist</span>
          </nav>
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#f4a65d]/20 text-[#f4a65d] mb-5">
            Industry Recognition
          </span>
          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight max-w-4xl mb-5">
            Cosasco Named AMPP 2025 Innovation Award Finalist for Microcor® WirelessHART System
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#94aabb]">
            <span className="font-semibold text-white">Rohrback Cosasco Systems, Inc.</span>
            <span className="text-[#3a5a74]">|</span>
            <span>February 4, 2026</span>
            <span className="text-[#3a5a74]">|</span>
            <span>5 min read</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2">
            <div className="text-[#566677] leading-relaxed space-y-6 text-[1.05rem]">
              <p className="text-xl text-[#0f2a4a] font-semibold leading-snug">
                Santa Fe Springs, CA — AMPP (Association for Materials Protection and Performance,
                formerly NACE International) has selected Cosasco&apos;s Microcor® Wireless Transmitter
                (MWT) as a finalist for the AMPP 2025 Innovation Award in the corrosion monitoring
                and mitigation category. The MWT was recognized for its WirelessHART 7 communication
                architecture, 18-bit measurement resolution, and intrinsically safe design enabling
                deployment in Zone 1 and Zone 2 hazardous areas without barrier hardware.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                About the AMPP Innovation Award
              </h2>
              <p>
                The AMPP Innovation Award recognizes corrosion industry products and technologies
                that demonstrate a measurable advance in performance, safety, or cost-effectiveness
                compared to established industry practice. Finalists are evaluated by a technical
                panel drawn from AMPP&apos;s membership — practicing corrosion engineers, asset
                integrity managers, and academic researchers — across criteria including technical
                merit, demonstrated field performance, and breadth of applicability across industry
                segments.
              </p>
              <p>
                Cosasco&apos;s Microcor® MWT was one of seven finalists selected from over 60 submissions
                from suppliers across North America, Europe, the Middle East, and Asia Pacific.
                The full award results will be announced at AMPP Annual Conference + Expo in
                March 2026 in New Orleans.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                Recognition Highlights
              </h2>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: Award,
                    stat: 'Top 7',
                    label: 'Finalist from 60+ global submissions across all AMPP categories',
                  },
                  {
                    icon: Globe,
                    stat: '14',
                    label: 'Countries with active Microcor® MWT deployments as of Q4 2025',
                  },
                  {
                    icon: Wifi,
                    stat: '50×',
                    label: 'Faster effective data rates vs. conventional ER polling systems',
                  },
                ].map(({ icon: Icon, stat, label }) => (
                  <div key={stat} className="bg-[#f0f4f8] border border-[#e8edf2] rounded-xl p-5 text-center">
                    <Icon className="w-6 h-6 text-[#f4a65d] mx-auto mb-3" />
                    <p className="text-[#0f2a4a] font-black text-2xl mb-2">{stat}</p>
                    <p className="text-[#566677] text-xs leading-relaxed">{label}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                The Microcor® Wireless Transmitter (MWT): Technical Overview
              </h2>
              <p>
                The Microcor® MWT addresses a long-standing gap in corrosion monitoring: the ability
                to deploy high-resolution ER sensing in locations where signal cabling is
                impractical — remote pipelines, offshore topsides, buried infrastructure, and
                above-grade piping runs in large processing facilities. The MWT attaches directly
                to a standard Cosasco ER probe and transmits continuous corrosion rate data over
                a WirelessHART 7 self-organizing mesh network without any field cabling.
              </p>
              <p>
                The 18-bit analog-to-digital resolution of the MWT&apos;s measurement circuit represents
                a fundamental advance over previous-generation wireless ER systems, which typically
                operated at 12- to 14-bit resolution. At 18-bit resolution, the MWT can detect
                metal loss events of less than 0.01 mils (0.25 micrometers) per reading — enabling
                identification of corrosion transients that would be masked by measurement noise on
                lower-resolution systems. Combined with a configurable polling interval as short as
                15 minutes, this translates to an effective data rate approximately 50 times higher
                than conventional ER systems polled quarterly or monthly.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                WirelessHART 7: Self-Organizing Mesh for Industrial Environments
              </h2>
              <p>
                WirelessHART 7 (IEC 62591) is the de facto industrial wireless standard for
                process measurement in hazardous environments. Unlike proprietary wireless protocols,
                WirelessHART operates on the globally unlicensed 2.4 GHz band with direct-sequence
                spread spectrum (DSSS) frequency hopping — providing robust interference immunity
                even in electrically noisy refinery and petrochemical environments. The mesh
                architecture means each MWT unit acts as both a sensing node and a repeater,
                automatically routing data around failed nodes or obstructions without operator
                intervention or reconfiguration.
              </p>
              <p>
                In Cosasco&apos;s internal field validation program — conducted across six production
                facilities in the US Gulf Coast, the North Sea, and the Middle East — WirelessHART
                mesh networks of 8–24 MWT nodes demonstrated 99.2% data delivery rates with zero
                manual network reconfigurations over a 12-month monitoring period. Gateway-to-CDO
                cloud latency was below 90 seconds for all nodes in the test network.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                Intrinsically Safe Design for Hazardous Areas
              </h2>
              <p>
                The MWT carries ATEX / IECEx Zone 1 intrinsic safety certification (Ex ia IIC T4
                Ga), allowing deployment at the probe location without safety barriers in most
                classified area configurations. This eliminates the Zener barrier or galvanic
                isolator hardware typically required for wired ER transmitters in Zone 1
                installations — reducing both installation cost and the associated maintenance
                burden for hardware that must be periodically tested per IEC 60079-14.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                Key Technical Specifications
              </h2>
              <ul className="space-y-3">
                {[
                  'WirelessHART 7 (IEC 62591) mesh communication — self-organizing, self-healing network topology',
                  '18-bit ADC resolution — detects metal loss events below 0.25 µm per reading',
                  '50× faster effective data rates vs. conventional quarterly ER polling programs',
                  'ATEX / IECEx Zone 1 intrinsic safety certification (Ex ia IIC T4 Ga) — no barriers required',
                  '5+ year battery life at 15-minute polling intervals (AA lithium, field-replaceable)',
                  'AES-128 encrypted data transmission from sensor to gateway, per WirelessHART specification',
                  'Native CDO (Cosasco Data Online) integration — real-time corrosion rate dashboards, configurable alert thresholds',
                  'Compatible with all standard Cosasco ER probe types and LPR electrodes',
                  'Operating temperature range: −40 °C to +70 °C; IP66/67 rated enclosure',
                  'Deployed in 14 countries across upstream, midstream, downstream, and pipeline segments',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f4a65d] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                Statement from Cosasco Leadership
              </h2>
              <blockquote className="border-l-4 border-[#f4a65d] pl-6 py-2 bg-[#f7f9fc] rounded-r-xl">
                <p className="text-[#0f2a4a] font-semibold italic text-lg leading-snug mb-3">
                  &ldquo;Being recognized as an AMPP Innovation Award finalist validates the years of
                  engineering investment our team has made in wireless corrosion monitoring. The
                  Microcor® MWT was built to solve a real problem that corrosion engineers face
                  every day: how do you get high-quality, continuous corrosion data from locations
                  where you simply cannot run cable? We believe 18-bit resolution over WirelessHART
                  is the right answer, and the field data from 14 countries backs that up. We&apos;re
                  proud that AMPP&apos;s technical panel agrees.&rdquo;
                </p>
                <p className="text-[#566677] text-sm font-semibold">
                  — Philip Borup, President, Rohrback Cosasco Systems, Inc.
                </p>
              </blockquote>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                Global Deployment and Market Reach
              </h2>
              <p>
                Since its commercial release in early 2024, the Microcor® MWT has been deployed
                across 14 countries spanning North America, Europe, the Middle East, Southeast Asia,
                and Australia. Application segments include high-pressure natural gas transmission,
                crude oil production gathering networks, refinery process unit monitoring,
                seawater injection systems, and long-distance CO₂ pipeline corrosion programs.
              </p>
              <p>
                Cosasco&apos;s global distributor and service partner network — covering over 60 countries
                — provides local installation support, commissioning, and ongoing maintenance for
                MWT deployments. Training for installation and commissioning is available through
                Cosasco Learning, the company&apos;s online technical education platform, as well as
                through regional in-person training events held quarterly in North America, Europe,
                and the Middle East.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                Learn More at AMPP Annual Conference 2026
              </h2>
              <p>
                Cosasco will exhibit at AMPP Annual Conference + Expo 2026 in New Orleans (March
                23–27). Technical presentations on the Microcor® MWT, the new 6,000 psi retractable
                ER probe, and Cosasco&apos;s CDO cloud platform are scheduled for the conference
                technical program. Visit Cosasco at booth #1847 or contact your regional
                representative to schedule a pre-conference technical meeting.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-[#0f2a4a] rounded-xl p-6 text-white">
              <p className="font-black text-lg mb-2">Learn About Microcor® MWT</p>
              <p className="text-[#94aabb] text-sm leading-relaxed mb-4">
                Request technical specifications, system architecture documents, and field
                performance data for the Microcor® Wireless Transmitter.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-[#f4a65d] hover:bg-[#d4892a] text-white font-bold py-3 rounded-lg transition-colors text-sm"
              >
                Request Technical Brief
              </Link>
            </div>

            <div className="bg-[#f0f4f8] border border-[#e8edf2] rounded-xl p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#566677] mb-4">
                Related Products
              </p>
              <ul className="space-y-3">
                {[
                  { href: '/products/microcor-wireless', label: 'Microcor® Wireless (MWT)' },
                  { href: '/products/er-probes', label: 'ER Probe Systems' },
                  { href: '/products/cdo', label: 'CDO Data Online Platform' },
                  { href: '/products/lpr', label: 'LPR Electrodes' },
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
                    href: '/news/retractable-er-probe',
                    title: 'Cosasco Launches Retractable High-Pressure ER Probe for Live-Line Deployment',
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

            <div className="bg-[#f0f4f8] border border-[#e8edf2] rounded-xl p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#566677] mb-4">
                About AMPP
              </p>
              <p className="text-[#566677] text-sm leading-relaxed">
                AMPP (Association for Materials Protection and Performance) is the global professional
                society for corrosion control and surface protection, formed by the merger of
                NACE International and SSPC in 2021. AMPP represents over 40,000 members in
                more than 130 countries.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* BACK NAV */}
      <section className="bg-[#f0f4f8] border-t border-[#e8edf2] py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
          <Link
            href="/news"
            className="text-[#0f2a4a] font-semibold flex items-center gap-2 hover:text-[#f4a65d] transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to News
          </Link>
          <Link
            href="/news/fieldcom-5-launch"
            className="text-[#0f2a4a] font-semibold flex items-center gap-2 hover:text-[#f4a65d] transition-colors text-sm"
          >
            Next: Microcor® Firmware v5.2 Release <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
