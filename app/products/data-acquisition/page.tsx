import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Acquisition Systems | Cosasco FieldCom',
  description: 'Wired and wireless data acquisition systems for corrosion monitoring, SCADA integration, and remote industrial sensing.',
}

import Link from "next/link";
import {
  ChevronRight,
  CheckCircle,
  Phone,
  Mail,
  Download,
  FileText,
  ArrowRight,
} from "lucide-react";

const products = [
  {
    name: "FieldCom Wireless System",
    desc: "Intrinsically safe wireless data logger with 900 MHz mesh radio for probe readout and transmission across large process facilities. Eliminates cable runs and enables rapid deployment on brownfield sites.",
    spec: "Range: Up to 1,000 m (LOS)",
  },
  {
    name: "ER Data Loggers",
    desc: "Standalone battery-powered data loggers for ER probe readout with configurable scan intervals from 1 minute to 24 hours. Direct PC download via USB or RS-485 with Bluetooth option.",
    spec: "Memory: 500,000 readings",
  },
  {
    name: "Multiplexer Systems",
    desc: "16- and 32-channel multiplexer units allow a single ER instrument to scan multiple probe channels sequentially, reducing capital cost and complexity for large monitoring installations.",
    spec: "Channels: Up to 32 per unit",
  },
  {
    name: "Cloud Analytics Platform",
    desc: "Cosasco Connect cloud dashboard aggregates data from all FieldCom nodes and wired loggers into a unified view with configurable trend charts, alarm thresholds, and automated exception reports.",
    spec: "Uptime SLA: 99.9%",
  },
  {
    name: "SCADA Integration",
    desc: "Modbus TCP/RTU and OPC-UA drivers enable direct integration of Cosasco probe data into plant DCS and SCADA platforms. Pre-configured templates available for Honeywell, Emerson, and Yokogawa systems.",
    spec: "Protocols: Modbus, OPC-UA, HART",
  },
  {
    name: "Portable ER Reader",
    desc: "Handheld battery-powered instrument for periodic manual readout of all Cosasco ER probe types. Auto-identifies probe type and stores up to 10,000 readings for PC download and trending.",
    spec: "Battery Life: 40 hours continuous",
  },
];

const features = [
  "Intrinsically safe (IS) to ATEX Zone 1",
  "Mesh networking — self-healing topology",
  "OPC-UA and Modbus SCADA integration",
  "Encrypted 128-bit AES data transmission",
  "Cloud or on-premise deployment options",
  "Compatible with all Cosasco probe families",
];

const relatedSolutions = [
  { label: "Integrity Management Programs", href: "/solutions/integrity-management" },
  { label: "Remote & Unmanned Facilities", href: "/solutions/remote-monitoring" },
  { label: "Digital Transformation", href: "/solutions/digital" },
  { label: "Offshore Platforms", href: "/solutions/offshore" },
];

const downloads = [
  {
    title: "FieldCom Wireless System Datasheet",
    desc: "Technical specifications and radio configuration guide",
    size: "2.8 MB PDF",
  },
  {
    title: "Cosasco Connect Cloud Platform Overview",
    desc: "Dashboard features, API access, and onboarding guide",
    size: "1.5 MB PDF",
  },
];

export default function DataAcquisitionPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0f2a4a] pt-[72px] pb-16 px-6 md:px-10 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-1.5 text-sm text-[#8ab4d4] mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="opacity-50" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight size={14} className="opacity-50" />
            <span className="text-white font-medium">Data Acquisition</span>
          </nav>
          <h1 className="text-white font-black text-4xl lg:text-5xl leading-tight mb-4">
            Wireless Loggers, SCADA Integration &amp; Cloud Analytics
          </h1>
          <p className="text-[#94aabb] text-lg max-w-2xl leading-relaxed">
            FieldCom mesh wireless networks, Ethernet-based data systems, and the Cosasco Connect
            cloud platform centralize corrosion monitoring data from distributed probe networks
            into actionable, real-time asset integrity intelligence.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="bg-white py-16 px-6 md:px-10 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left — 2 cols */}
            <div className="lg:col-span-2">
              <h2 className="font-black text-[#0f2a4a] text-3xl mb-4">About Data Acquisition</h2>
              <p className="text-[#566677] leading-relaxed mb-4">
                Cosasco&rsquo;s FieldCom wireless system transforms distributed probe networks into a
                unified, real-time monitoring infrastructure. Self-forming mesh nodes eliminate the
                cost and complexity of cable routing across large process plants, while the 900 MHz
                radio frequency ensures reliable communication in challenging RF environments
                including large metal structures and offshore topsides.
              </p>
              <p className="text-[#566677] leading-relaxed mb-8">
                For operators seeking deeper integration, the Cosasco Connect cloud analytics
                platform provides trend visualization, configurable alarm management, and automated
                exception reporting — accessible from any device via secure web browser. Native
                Modbus TCP/RTU and OPC-UA drivers ensure seamless integration with existing plant
                DCS and SCADA infrastructure across our 1M+ global monitoring locations in over
                110 countries.
              </p>

              {/* Stat callouts */}
              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-4 border-[#f4a65d] bg-[#f7f9fc] rounded-r-xl px-5 py-4">
                  <div className="text-[#f4a65d] font-black text-4xl leading-none">1K</div>
                  <p className="text-[#566677] text-sm mt-1 font-medium">m line-of-sight range per FieldCom node</p>
                </div>
                <div className="border-l-4 border-[#f4a65d] bg-[#f7f9fc] rounded-r-xl px-5 py-4">
                  <div className="text-[#f4a65d] font-black text-4xl leading-none">99.9%</div>
                  <p className="text-[#566677] text-sm mt-1 font-medium">Cloud platform uptime SLA</p>
                </div>
              </div>
            </div>

            {/* Right — Key Features */}
            <div className="lg:col-span-1">
              <div className="bg-[#f7f9fc] border border-[#e8edf2] rounded-xl p-6 h-full">
                <p className="text-xs font-bold uppercase tracking-widest text-[#0f2a4a] mb-5">
                  Key Features
                </p>
                <ul className="space-y-3.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[#1e2b3a]">
                      <CheckCircle size={16} className="flex-shrink-0 mt-0.5 text-[#f4a65d]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="bg-[#f7f9fc] py-16 px-6 md:px-10 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-black text-[#0f2a4a] text-3xl mb-2">Products</h2>
          <p className="text-[#566677] mb-10">
            Contact us for system architecture consultation, network design, and SCADA integration support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((prod) => (
              <article
                key={prod.name}
                className="bg-white border border-[#e8edf2] rounded-xl p-6 hover:shadow-md transition-all flex flex-col"
              >
                <h3 className="font-bold text-[#0f2a4a] text-base leading-snug">{prod.name}</h3>
                <p className="text-[#566677] text-sm mt-2 leading-relaxed flex-1">{prod.desc}</p>
                <div className="bg-[#f0f4f8] rounded-md px-3 py-1.5 text-xs font-mono mt-3 inline-block text-[#1e2b3a]">
                  {prod.spec}
                </div>
                <Link
                  href={`/contact?product=${encodeURIComponent(prod.name)}`}
                  className="inline-flex items-center gap-1.5 text-[#f4a65d] text-sm font-semibold mt-4 hover:text-[#d4892a] transition-colors"
                >
                  Request Information
                  <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + SIDEBAR */}
      <section className="bg-white py-16 px-6 md:px-10 xl:px-16 border-t border-[#e8edf2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 flex flex-col justify-center">
            <h2 className="font-black text-[#0f2a4a] text-2xl mb-2">
              Ready to connect your monitoring network?
            </h2>
            <p className="text-[#566677] mb-6">
              Request a quote or schedule a FieldCom network design consultation with our data systems team.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#f4a65d] text-white rounded-md px-6 py-3 text-sm font-semibold hover:bg-[#d4892a] transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 border border-[#0f2a4a] text-[#0f2a4a] rounded-md px-6 py-3 text-sm font-semibold hover:bg-[#0f2a4a] hover:text-white transition-colors"
              >
                Back to Products
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-4">
            <div className="bg-[#0f2a4a] text-white rounded-xl p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#8ab4d4] mb-2">
                Engineering Support
              </p>
              <h3 className="text-lg font-bold text-white mb-3">Speak with an Engineer</h3>
              <ul className="space-y-2.5 mb-5">
                <li className="flex items-center gap-3 text-sm text-[#94aabb]">
                  <Phone size={15} className="text-[#f4a65d] flex-shrink-0" />
                  +1 (714) 538-2902
                </li>
                <li className="flex items-center gap-3 text-sm text-[#94aabb]">
                  <Mail size={15} className="text-[#f4a65d] flex-shrink-0" />
                  sales@cosasco.com
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full flex justify-center items-center bg-[#f4a65d] text-white rounded-md px-4 py-2.5 text-sm font-semibold hover:bg-[#d4892a] transition-colors"
              >
                Send an Inquiry
              </Link>
            </div>

            <div className="bg-white border border-[#e8edf2] rounded-xl p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-[#0f2a4a] mb-3">
                Related Solutions
              </p>
              <ul>
                {relatedSolutions.map((s) => (
                  <li key={s.label}>
                    <Link
                      href={s.href}
                      className="flex items-center justify-between py-2.5 text-sm text-[#1e2b3a] border-b border-[#e8edf2] last:border-0 hover:text-[#f4a65d] transition-colors group"
                    >
                      {s.label}
                      <ChevronRight size={14} className="text-[#566677] group-hover:text-[#f4a65d] transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-[#e8edf2] rounded-xl p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-[#0f2a4a] mb-3">
                Download Resources
              </p>
              <ul className="space-y-3">
                {downloads.map((dl) => (
                  <li key={dl.title}>
                    <Link
                      href="/resources"
                      className="flex items-start gap-3 p-3 rounded-lg border border-[#e8edf2] hover:border-[#f4a65d] hover:shadow-sm transition-all group"
                    >
                      <FileText size={18} className="flex-shrink-0 mt-0.5 text-[#566677] group-hover:text-[#f4a65d] transition-colors" />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-[#1e2b3a] leading-snug">{dl.title}</p>
                        <p className="text-xs text-[#566677] mt-0.5">{dl.desc}</p>
                        <p className="text-xs font-medium text-[#f4a65d] mt-1 flex items-center gap-1">
                          <Download size={11} />
                          {dl.size}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
