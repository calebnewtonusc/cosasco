import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FieldCom Wireless Data Acquisition | Cosasco',
  description: 'Wireless corrosion monitoring data loggers with cloud connectivity, SCADA integration, and ATEX certification.',
}

import Link from "next/link";
import {
  ChevronRight,
  CheckCircle,
  ShoppingCart,
  FileText,
  Phone,
  Mail,
  Download,
  ArrowRight,
  Wifi,
} from "lucide-react";

export default function FieldComPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#0f2a4a] pt-[75px] pb-16 px-6 md:px-10 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-1.5 text-sm text-[#8ab4d4] mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="opacity-50" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight size={14} className="opacity-50" />
            <Link href="/products/data-acquisition" className="hover:text-white transition-colors">Data Acquisition</Link>
            <ChevronRight size={14} className="opacity-50" />
            <span className="text-white font-medium">FieldCom Wireless DAQ</span>
          </nav>

          <h1 className="text-white font-black text-4xl lg:text-5xl leading-tight mb-4">
            FieldCom Wireless Data Acquisition System
          </h1>
          <p className="text-[#94aabb] text-lg max-w-2xl leading-relaxed mb-8">
            Industrial-grade wireless data logger and transmitter for autonomous, long-range
            corrosion monitoring in remote, unmanned, and hazardous area installations.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              { label: "Range: 1,000m LOS" },
              { label: "5+ Year Battery Life" },
              { label: "ATEX Zone 1 & 2" },
            ].map((s) => (
              <span
                key={s.label}
                className="bg-[#1a3a5c] rounded-lg px-4 py-2 inline-flex items-center gap-2 text-white text-sm font-semibold"
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BODY GRID ────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16 py-12 lg:grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-0">

          {/* 1. OVERVIEW */}
          <section className="bg-white py-12">
            <div className="bg-[#f7f9fc] border border-[#e8edf2] rounded-2xl aspect-[4/3] flex flex-col items-center justify-center mb-10 gap-4">
              <Wifi size={72} className="text-[#0f2a4a] opacity-30" />
              <span className="text-[#566677] font-semibold text-lg">FieldCom Wireless Data Acquisition System</span>
            </div>

            <div className="space-y-4 text-[#566677] leading-relaxed mb-10">
              <p>
                The Cosasco FieldCom Wireless Data Acquisition System eliminates the cost and
                complexity of signal cabling in corrosion monitoring installations. Each
                FieldCom unit connects directly to Cosasco ER probes, LPR electrodes, and
                third-party 4–20 mA sensors, sampling at configurable intervals from 15 minutes
                to 24 hours and transmitting data over a license-free 900 MHz ISM band radio
                link to a central gateway or SCADA system.
              </p>
              <p>
                With a line-of-sight range of up to 1,000 meters and an internal mesh-capable
                repeater network supporting range extension to several kilometers, FieldCom is
                purpose-built for offshore platforms, remote pipeline stations, tank farms, and
                chemical plant installations where cabling is cost-prohibitive or impractical.
                The internal battery pack delivers a field-validated service life exceeding five
                years at 15-minute polling intervals, and the IP67-rated enclosure withstands
                full immersion, dust ingress, and the thermal cycling common in tropical and
                arctic deployments.
              </p>
              <p>
                FieldCom supports Modbus RTU/TCP and OPC-UA output protocols for direct
                integration with all major SCADA and historian platforms, including OSIsoft PI,
                Wonderware, Ignition, and GE Proficy. The system stores up to 32,000 data
                points internally, providing a local buffer that prevents data loss during
                communication outages. ATEX Zone 1 &amp; Zone 2 certifications, FCC Part 15,
                and CE marking are standard; DNV-GL marine certification is available on request.
              </p>
            </div>

            <h3 className="text-[#0f2a4a] font-bold text-xl mb-4">Key Features</h3>
            <ul className="space-y-3">
              {[
                "900 MHz ISM band radio — license-free operation in 100+ countries",
                "Up to 1,000m line-of-sight range; mesh repeater network for multi-km coverage",
                "5+ year battery life at 15-minute data intervals — no field cabling required",
                "32,000 point internal data buffer prevents loss during communication gaps",
                "Modbus RTU/TCP and OPC-UA output; compatible with all major SCADA platforms",
                "ATEX Zone 1 & 2, FCC Part 15, CE Mark; IP67 weatherproof enclosure",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-[#1e2b3a] text-sm">
                  <CheckCircle size={18} className="text-[#f4a65d] flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </section>

          {/* 2. SPECIFICATIONS TABLE */}
          <section className="bg-[#f7f9fc] py-12">
            <h3 className="text-[#0f2a4a] font-bold text-xl mb-6">Technical Specifications</h3>
            <div className="rounded-xl overflow-hidden border border-[#e8edf2]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0f2a4a] text-white text-left">
                    <th className="px-5 py-3 text-sm font-semibold">Parameter</th>
                    <th className="px-5 py-3 text-sm font-semibold">Value</th>
                    <th className="px-5 py-3 text-sm font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["RF Frequency", "900 MHz ISM band", "License-free; 915 MHz US / 868 MHz EU"],
                    ["Range", "Up to 1,000m line-of-sight", "Mesh repeater extends to multi-km"],
                    ["Battery Life", "5+ years", "At 15-min polling; lithium primary cell"],
                    ["Data Interval", "15 min to 24 hr", "User-configurable via software"],
                    ["Data Storage", "32,000 data points", "Internal non-volatile flash memory"],
                    ["Protocols", "Modbus RTU/TCP, OPC-UA", "SCADA, DCS, historian compatible"],
                    ["Certifications", "ATEX Zone 1 & 2, FCC, CE", "DNV-GL marine on request"],
                    ["IP Rating", "IP67", "Dust-tight; 30-min immersion to 1m"],
                  ].map(([param, value, notes], i) => (
                    <tr key={param} className={i % 2 === 0 ? "bg-white" : "bg-[#f7f9fc]"}>
                      <td className="px-5 py-3 text-sm font-semibold text-[#1e2b3a] border-b border-[#e8edf2]">{param}</td>
                      <td className="px-5 py-3 text-sm text-[#1e2b3a] border-b border-[#e8edf2]">{value}</td>
                      <td className="px-5 py-3 text-sm text-[#566677] border-b border-[#e8edf2]">{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. ORDERING INFORMATION */}
          <section className="bg-white py-8">
            <h3 className="text-[#0f2a4a] font-bold text-xl mb-6">Part Numbers &amp; Ordering</h3>
            <div className="rounded-xl overflow-hidden border border-[#e8edf2]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0f2a4a] text-white text-left">
                    <th className="px-5 py-3 text-sm font-semibold">Part Number</th>
                    <th className="px-5 py-3 text-sm font-semibold">Description</th>
                    <th className="px-5 py-3 text-sm font-semibold">Material</th>
                    <th className="px-5 py-3 text-sm font-semibold">Certification</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["FC-900-STD-US", "FieldCom Unit, 915 MHz, Standard", "GRP Enclosure", "FCC, CE"],
                    ["FC-900-ATEX-Z1", "FieldCom Unit, 900 MHz, ATEX Zone 1", "SS Enclosure", "ATEX, IECEx"],
                    ["FC-900-REP-US", "FieldCom Mesh Repeater, 915 MHz", "GRP Enclosure", "FCC, CE"],
                    ["FC-GW-ETH", "FieldCom Ethernet Gateway", "DIN Rail Mount", "FCC, CE"],
                    ["FC-SW-LIC", "FieldCom Configuration Software License", "N/A (Software)", "N/A"],
                  ].map(([pn, desc, mat, cert], i) => (
                    <tr key={pn} className={i % 2 === 0 ? "bg-white" : "bg-[#f7f9fc]"}>
                      <td className="px-5 py-3 text-sm font-mono font-semibold text-[#0f2a4a] border-b border-[#e8edf2]">{pn}</td>
                      <td className="px-5 py-3 text-sm text-[#1e2b3a] border-b border-[#e8edf2]">{desc}</td>
                      <td className="px-5 py-3 text-sm text-[#566677] border-b border-[#e8edf2]">{mat}</td>
                      <td className="px-5 py-3 text-sm text-[#566677] border-b border-[#e8edf2]">{cert}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. RELATED ACCESSORIES */}
          <section className="bg-[#f7f9fc] py-8">
            <h3 className="text-[#0f2a4a] font-bold text-xl mb-6">Compatible Accessories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { name: "ER Probe Systems", desc: "All Cosasco ER probe variants connect directly to FieldCom transmitter units without additional hardware.", href: "/products/er-probe" },
                { name: "UT Sensors", desc: "Permanent weld-on UT sensors with FieldCom-compatible output for continuous wall thickness trending.", href: "/products/ut-sensor" },
                { name: "Corrosion Coupon Systems", desc: "Log ambient conditions and process data during coupon exposure for correlation analysis.", href: "/products/corrosion-coupons" },
              ].map((acc) => (
                <div key={acc.name} className="bg-white border border-[#e8edf2] rounded-xl p-5">
                  <h4 className="text-[#0f2a4a] font-bold text-sm mb-2">{acc.name}</h4>
                  <p className="text-[#566677] text-xs leading-relaxed mb-4">{acc.desc}</p>
                  <Link href={acc.href} className="inline-flex items-center gap-1.5 text-[#f4a65d] text-xs font-semibold hover:text-[#d4892a] transition-colors">
                    View Product <ArrowRight size={12} />
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ── SIDEBAR ── */}
        <aside className="lg:col-span-1 mt-12 lg:mt-0">
          <div className="sticky top-[95px] space-y-5">

            <div className="bg-[#f4a65d] rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <ShoppingCart size={24} />
                <span className="font-bold text-lg">Request a Quote</span>
              </div>
              <p className="text-orange-100 text-sm mb-5 leading-relaxed">
                Specify frequency region, ATEX requirement, and number of monitoring points for a system quote.
              </p>
              <button className="bg-white text-[#f4a65d] font-bold w-full py-3 rounded-lg hover:bg-orange-50 transition-colors">
                Request a Quote
              </button>
              <Link href="/contact" className="block text-center text-orange-100 text-sm mt-3 hover:text-white transition-colors">
                Contact an Engineer
              </Link>
            </div>

            <div className="bg-white border border-[#e8edf2] rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <FileText size={20} className="text-[#0f2a4a]" />
                <span className="font-bold text-[#1e2b3a]">Download Datasheet</span>
              </div>
              <p className="text-[#566677] text-xs mb-1">COSASCO_FieldCom_System_DS.pdf</p>
              <p className="text-[#8898aa] text-xs mb-4">3.1 MB · PDF</p>
              <button className="inline-flex items-center gap-2 bg-[#0f2a4a] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#1a3a5c] transition-colors w-full justify-center">
                <Download size={14} /> Download
              </button>
            </div>

            <div className="bg-white border border-[#e8edf2] rounded-xl p-5">
              <h4 className="font-bold text-[#1e2b3a] mb-3">Technical Support</h4>
              <div className="flex items-center gap-2.5 text-sm text-[#566677] mb-2">
                <Phone size={15} className="text-[#0f2a4a] flex-shrink-0" />
                +1 (562) 595-5671
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#566677]">
                <Mail size={15} className="text-[#0f2a4a] flex-shrink-0" />
                support@cosasco.com
              </div>
            </div>

            <div className="bg-white border border-[#e8edf2] rounded-xl p-5">
              <h4 className="font-bold text-[#1e2b3a] mb-4">Related Products</h4>
              <ul className="space-y-3">
                {[
                  { name: "ER Probe Systems", href: "/products/er-probe" },
                  { name: "UT Wall Thickness Sensors", href: "/products/ut-sensor" },
                  { name: "Corrosion Coupon Systems", href: "/products/corrosion-coupons" },
                ].map((p) => (
                  <li key={p.name}>
                    <Link href={p.href} className="flex items-center justify-between text-sm text-[#0f2a4a] hover:text-[#f4a65d] font-medium transition-colors group">
                      {p.name}
                      <ArrowRight size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </aside>
      </div>
    </>
  );
}
