import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle, Wifi, Cpu, RefreshCw, Cloud } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cosasco Releases Microcor® Firmware v5.2 with Enhanced WirelessHART Mesh Stability | Cosasco News',
  description:
    'Cosasco releases Microcor® firmware v5.2, delivering improved WirelessHART mesh network stability, enhanced CDO integration, and field-swappable sensor head support for the MWT platform.',
}

export default function FieldCom5LaunchPage() {
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
            <span className="text-white">Microcor® Firmware v5.2 Release</span>
          </nav>
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#f4a65d]/20 text-[#f4a65d] mb-5">
            Software Update
          </span>
          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight max-w-4xl mb-5">
            Cosasco Releases Microcor® Firmware v5.2 with Enhanced WirelessHART Mesh Stability
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#94aabb]">
            <span className="font-semibold text-white">Cosasco Engineering Team</span>
            <span className="text-[#3a5a74]">|</span>
            <span>January 20, 2026</span>
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
                Cosasco has released firmware version 5.2 for the Microcor® Wireless Transmitter
                (MWT) platform, delivering significant improvements to WirelessHART mesh network
                stability, enhanced two-way integration with the CDO (Cosasco Data Online) cloud
                platform, and support for the new field-swappable sensor head, a hardware upgrade
                that allows in-service sensor replacement without removing the transmitter body
                from its mounting location.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                What Drove the v5.2 Release
              </h2>
              <p>
                Microcor® MWT deployments have grown rapidly since the platform&apos;s commercial release,
                with networks now operating across upstream, midstream, and downstream segments in
                14 countries. As network sizes have grown, with some operator sites now running
                30+ MWT nodes from a single gateway, the firmware engineering team identified
                three areas where performance improvements would deliver the highest operational
                value: mesh route recovery speed in large networks, CDO cloud synchronization
                reliability under intermittent gateway connectivity, and the sensor maintenance
                workflow for nodes in hard-to-access locations.
              </p>
              <p>
                Firmware v5.2 addresses all three with targeted improvements developed in
                collaboration with key customer operators in North America and the Middle East,
                where the largest MWT deployments are currently in service.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                What&apos;s New in Firmware v5.2
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Wifi,
                    stat: '3× Faster',
                    label: 'Mesh route recovery after node loss: now under 90 seconds in networks up to 32 nodes',
                  },
                  {
                    icon: Cloud,
                    stat: 'CDO Sync',
                    label: 'Store-and-forward buffer increased to 30 days of local data, with no gaps during gateway outages',
                  },
                  {
                    icon: RefreshCw,
                    stat: 'Hot-Swap',
                    label: 'Field-swappable sensor head support: replace ER element without removing transmitter',
                  },
                  {
                    icon: Cpu,
                    stat: '18-bit+',
                    label: 'Improved ADC temperature compensation algorithm: ±0.05 µm measurement accuracy',
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
                WirelessHART Mesh Network Stability Improvements
              </h2>
              <p>
                The most significant change in v5.2 is a rewritten route management layer in the
                WirelessHART stack. In large mesh networks, particularly those with 20+ nodes and
                complex RF propagation environments, such as tank farms with structural obstructions
                or offshore platform decks with heavy steel-frame interference, the previous
                firmware could take 4–8 minutes to re-establish stable routing after a node
                went offline or a gateway rebooted. The v5.2 route manager uses a proactive
                neighbor-table pre-computation approach, maintaining two pre-validated backup
                routes for every active node, so route recovery after a disruption completes
                in under 90 seconds for networks up to 32 nodes.
              </p>
              <p>
                Join time for new nodes has also been improved. A fresh MWT unit commissioning
                into an established network now joins and begins transmitting corrosion data in
                under 3 minutes, compared to 8–12 minutes in earlier firmware versions. This
                significantly reduces the time required for large-scale network deployments
                or post-maintenance recommissioning.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                Enhanced CDO Integration
              </h2>
              <p>
                Firmware v5.2 introduces two-way CDO integration for remote configuration
                management. Previously, MWT device configuration, including polling interval,
                alert thresholds, and measurement averaging parameters, required either physical
                access to the device or connection through the WirelessHART gateway&apos;s HART
                command interface. With v5.2, these parameters can be pushed remotely from the
                CDO web interface or the CDO mobile app to any online MWT node in under
                60 seconds, without field access.
              </p>
              <p>
                The on-device store-and-forward buffer has been increased from 7 days to 30 days
                of historical readings. If a gateway goes offline, due to power interruption,
                communication link outage, or scheduled maintenance, the MWT continues logging
                locally. When gateway connectivity is restored, the full buffered dataset is
                uploaded to CDO automatically, ensuring no data gaps in the corrosion trend record
                even during extended outages. This is particularly valuable for remote pipeline
                monitoring sites where satellite or cellular gateway connectivity may be intermittent.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                Field-Swappable Sensor Head
              </h2>
              <p>
                Working in conjunction with new field-swappable sensor head hardware (available
                separately), firmware v5.2 adds support for hot-swap element replacement without
                powering down the transmitter or removing it from its pipe mounting. The sensor
                head, which contains the ER element and measurement bridge circuit, separates
                from the transmitter body at a quick-release connector, and can be exchanged
                in under 4 minutes. The transmitter automatically detects the new sensor head,
                performs a zero calibration cycle, and resumes monitoring without manual intervention.
              </p>
              <p>
                For MWT units installed in locations with restricted access, such as elevated structures,
                subsea topsides, or within process equipment insulation, the hot-swap capability
                eliminates the need to scaffold or use elevated work platforms simply to perform
                a routine element change. The transmitter body remains in place; only the
                sensor head is exchanged.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                Improved ADC Temperature Compensation
              </h2>
              <p>
                The 18-bit analog-to-digital converter at the heart of the MWT measurement circuit
                is sensitive to ambient temperature variation, which can introduce a small
                systematic offset into metal loss readings if not properly compensated. The v5.2
                firmware introduces a revised temperature compensation algorithm based on an
                empirical model developed from over 18 months of controlled laboratory testing
                across the full operating temperature range of −40 °C to +70 °C. The result is
                a measurement accuracy improvement to ±0.05 µm, a 40% improvement over
                the v5.0 specification, particularly meaningful for installations in arctic
                or desert environments where ambient temperature swings are large.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">Full v5.2 Feature List</h2>
              <ul className="space-y-3">
                {[
                  'Rewritten WirelessHART route management: mesh recovery under 90 seconds for networks up to 32 nodes',
                  'New node join time reduced from 8–12 minutes to under 3 minutes',
                  'Remote CDO configuration push for polling interval, alert thresholds, and averaging parameters',
                  'On-device store-and-forward buffer increased from 7 days to 30 days',
                  'Field-swappable sensor head support: hot-swap without transmitter power cycle',
                  'Revised 18-bit ADC temperature compensation algorithm: ±0.05 µm accuracy (−40 °C to +70 °C)',
                  'CDO mobile app alert acknowledgment now propagates back to MWT device state within 2 minutes',
                  'Improved HART pass-through mode for wired maintenance access via portable HART communicator',
                  'Diagnostic event logging expanded to 500 entries (from 100) with UTC timestamps',
                  'OTA (over-the-air) firmware update support via CDO gateway: no field access required for future updates',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f4a65d] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                Engineering Perspective on the Release
              </h2>
              <blockquote className="border-l-4 border-[#f4a65d] pl-6 py-2 bg-[#f7f9fc] rounded-r-xl">
                <p className="text-[#0f2a4a] font-semibold italic text-lg leading-snug mb-3">
                  &ldquo;Every item in the v5.2 release came directly from operator feedback. The mesh
                  stability improvements came from our customer in the Middle East running 28 nodes
                  across a refinery with heavy steel-frame RF obstruction; they needed faster
                  recovery after plant power events. The 30-day buffer was driven by a pipeline
                  operator in Canada whose satellite gateway link goes down for 3–5 days during
                  winter storms. And the hot-swap sensor head was a direct request from
                  customers with MWT units on elevated structures where scaffolding for a routine
                  element change simply isn&apos;t practical. These aren&apos;t feature requests; they&apos;re
                  real operational problems, and we built solutions for all of them.&rdquo;
                </p>
                <p className="text-[#566677] text-sm font-semibold">
                  Anupam Sangal, Director of Engineering, Rohrback Cosasco Systems, Inc.
                </p>
              </blockquote>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                Availability and Update Process
              </h2>
              <p>
                Firmware v5.2 is available now through Cosasco&apos;s global distributor network and
                directly from the CDO gateway OTA update system for all MWT units running firmware
                v4.0 or later. The update is non-breaking: all existing device configurations,
                historical data, and CDO integrations are preserved through the update process.
              </p>
              <p>
                For MWT units running firmware v3.x or earlier, a staged update path through v4.2
                is required before applying v5.2; contact your Cosasco regional representative
                or distributor for a device assessment and update schedule. The field-swappable
                sensor head hardware is sold separately as a retrofit kit; contact Cosasco for
                compatibility confirmation against your existing MWT serial number.
              </p>
              <p>
                Release notes, the full migration guide, and updated CDO integration documentation
                for v5.2 are available in the Cosasco Technical Resource Center at
                support.cosasco.com.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-[#0f2a4a] rounded-xl p-6 text-white">
              <p className="font-black text-lg mb-2">Download Release Notes</p>
              <p className="text-[#94aabb] text-sm leading-relaxed mb-4">
                Access the complete Microcor® MWT firmware v5.2 release notes, migration guide,
                and updated CDO integration documentation.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-[#f4a65d] hover:bg-[#d4892a] text-white font-bold py-3 rounded-lg transition-colors text-sm"
              >
                Access Technical Resources
              </Link>
            </div>

            <div className="bg-[#f0f4f8] border border-[#e8edf2] rounded-xl p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#566677] mb-4">
                Related Products
              </p>
              <ul className="space-y-3">
                {[
                  { href: '/products/microcor-wireless', label: 'Microcor® Wireless (MWT)' },
                  { href: '/products/cdo', label: 'CDO Data Online Platform' },
                  { href: '/products/er-probes', label: 'ER Probe Systems' },
                  { href: '/products/gateways', label: 'WirelessHART Gateways' },
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
                    href: '/news/retractable-er-probe',
                    title: 'Cosasco Launches Retractable High-Pressure ER Probe for Live-Line Deployment',
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
                Version History
              </p>
              <ul className="space-y-2 text-sm text-[#566677]">
                {[
                  { version: 'v5.2', note: 'Current: mesh stability, CDO sync, hot-swap' },
                  { version: 'v5.0', note: 'Native CDO integration, OTA update support' },
                  { version: 'v4.2', note: 'WirelessHART 7 mesh, ATEX Zone 1 cert' },
                  { version: 'v4.0', note: 'Initial 18-bit ADC platform release' },
                ].map((v) => (
                  <li key={v.version} className="flex gap-3 items-start">
                    <span className="text-[#f4a65d] font-bold font-mono flex-shrink-0">{v.version}</span>
                    <span>{v.note}</span>
                  </li>
                ))}
              </ul>
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
            href="/news/retractable-er-probe"
            className="text-[#0f2a4a] font-semibold flex items-center gap-2 hover:text-[#f4a65d] transition-colors text-sm"
          >
            Next: Retractable High-Pressure ER Probe Launch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
