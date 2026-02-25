import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ER Probe Systems | Cosasco Corrosion Monitoring',
  description: 'Electrical resistance probe systems for continuous corrosion measurement. Rated to 10,000 PSI and 200°C.',
}

import Link from "next/link";
import {
  ChevronRight,
  CheckCircle,
  MessageSquare,
  FileText,
  Phone,
  Mail,
  Download,
  ArrowRight,
  Thermometer,
  Activity,
} from "lucide-react";
import PrintButton from '@/components/PrintButton'
import RecentlyViewed from '@/components/RecentlyViewed';

export default function ERProbePage() {
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
            <Link href="/products/corrosion-monitoring" className="hover:text-white transition-colors">Corrosion Monitoring</Link>
            <ChevronRight size={14} className="opacity-50" />
            <span className="text-white font-medium">ER Probe Systems</span>
          </nav>

          <h1 className="text-white font-black text-4xl lg:text-5xl leading-tight mb-4">
            Electrical Resistance (ER) Probe Systems
          </h1>
          <p className="text-[#94aabb] text-lg max-w-2xl leading-relaxed mb-8">
            Continuous, real-time corrosion rate measurement for pipelines, vessels, and process equipment
            across all fluid environments, upstream to downstream.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              { label: "Max Temp: 200°C" },
              { label: "Max Pressure: 10,000 PSI" },
              { label: "ATEX Certified" },
            ].map((s) => (
              <span
                key={s.label}
                className="bg-[#1a3a5c] rounded-lg px-4 py-2 inline-flex items-center gap-2 text-white text-sm font-semibold"
              >
                {s.label}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <PrintButton />
          </div>
        </div>
      </section>

      {/* ── BODY GRID ────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16 py-12 lg:grid lg:grid-cols-3 gap-12">
        {/* ── MAIN ── col-span-2 ──────────────────────────────────────── */}
        <div className="lg:col-span-2 space-y-0">

          {/* 1. OVERVIEW */}
          <section className="bg-white py-12">
            {/* Image placeholder */}
            <div className="bg-[#f7f9fc] border border-[#e8edf2] rounded-2xl aspect-[4/3] flex flex-col items-center justify-center mb-10 gap-4">
              <Activity size={72} className="text-[#0f2a4a] opacity-30" />
              <span className="text-[#566677] font-semibold text-lg">ER Probe Systems</span>
            </div>

            {/* Description */}
            <div className="space-y-4 text-[#566677] leading-relaxed mb-10">
              <p>
                Cosasco Electrical Resistance (ER) Probe Systems are the industry benchmark for
                non-intrusive, continuous corrosion monitoring. By measuring the change in electrical
                resistance of a metallic sensing element over time, ER probes deliver quantitative
                corrosion rate data without requiring fluid samples or chemical analysis. This makes
                them uniquely suited for remote, hazardous, or subsea environments where periodic
                access is limited.
              </p>
              <p>
                The sensing elements are manufactured from the same alloy as the pipe or vessel being
                monitored, ensuring corrosion behavior is directly representative of the protected
                asset. Element geometries, including tubular, wire loop, spiral, and flush disk,
                are selected based on expected corrosion rate, flow velocity, and required sensitivity.
                Standard elements provide resolution to 0.001 mpy, while high-sensitivity variants
                extend this to sub-0.0001 mpy for ultra-low corrosion environments (laboratory conditions).
              </p>
              <p>
                Cosasco ER probes are compatible with both wired data loggers and the Microcor®
                wireless acquisition platform, enabling seamless integration into SCADA, DCS, and
                cloud analytics environments. All probe bodies are pressure-rated to ASME and API
                standards, and carry ATEX/IECEx Zone 1 &amp; 2 certification for use in classified
                hazardous areas.
              </p>
            </div>

            {/* Key Features */}
            <h3 className="text-[#0f2a4a] font-bold text-xl mb-4">Key Features</h3>
            <ul className="space-y-3">
              {[
                "Continuous real-time corrosion rate output; no fluid sampling required",
                "Multiple element alloys: CS, 316SS, Alloy 22, Hastelloy C-276, and more",
                "Tubular, wire loop, spiral, and flush disk element geometries available",
                "Rated to 10,000 PSI and 200°C; subsea-rated variants to 15,000 PSI",
                "Microcor® wireless compatible for remote and unmanned installations",
                "ATEX Zone 1 & 2, IECEx, CSA, and UL certifications available",
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
                    ["Operating Temperature", "-40°C to 200°C", "Depends on element type; standard to 150°C"],
                    ["Operating Pressure", "Up to 10,000 PSI", "ANSI/API rated; Class 150 to 2500"],
                    ["Sensitivity", "0.001 mpy", "Resolution varies by element; linear response"],
                    ["Element Types", "Tubular, Wire Loop, Flush", "Multiple geometries; custom available"],
                    ["Materials", "CS, 316SS, Alloy 22, Hastelloy", "Many options; per NACE MR0175"],
                    ["Connection", "1\" NPT, Flanged", "Standard fittings; adapters available"],
                    ["Certifications", "ATEX, IECEx, CSA, UL", "Zone 1 & 2; per request"],
                    ["Wireless Option", "Microcor® Wireless Compatible", "900 MHz ISM; up to 1 km range"],
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
                    <th className="px-5 py-3 text-sm font-semibold">Pressure Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["ER-TUB-CS-1NPT", "Tubular Element ER Probe, 1\" NPT", "Carbon Steel", "3,000 PSI"],
                    ["ER-WL-316SS-2NPT", "Wire Loop ER Probe, 2\" NPT", "316 Stainless Steel", "6,000 PSI"],
                    ["ER-FL-A22-FLG", "Flush Disk ER Probe, Flanged", "Alloy 22", "10,000 PSI"],
                    ["ER-SP-HC-WL", "Spiral Element ER Probe, Wireless", "Hastelloy C-276", "6,000 PSI"],
                    ["ER-TUB-316SS-ATEX", "Tubular ER Probe, ATEX Zone 1", "316 Stainless Steel", "3,000 PSI"],
                  ].map(([pn, desc, mat, psi], i) => (
                    <tr key={pn} className={i % 2 === 0 ? "bg-white" : "bg-[#f7f9fc]"}>
                      <td className="px-5 py-3 text-sm font-mono font-semibold text-[#0f2a4a] border-b border-[#e8edf2]">{pn}</td>
                      <td className="px-5 py-3 text-sm text-[#1e2b3a] border-b border-[#e8edf2]">{desc}</td>
                      <td className="px-5 py-3 text-sm text-[#566677] border-b border-[#e8edf2]">{mat}</td>
                      <td className="px-5 py-3 text-sm text-[#566677] border-b border-[#e8edf2]">{psi}</td>
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
                { name: "Retrieval Access Fittings", desc: "Hot-tap fittings for under-pressure probe insertion and retrieval up to 10,000 PSI.", href: "/products/access-fittings" },
                { name: "Microcor® Wireless Transmitter (MWT)", desc: "900 MHz data acquisition transmitter compatible with all Cosasco ER probe variants.", href: "/products/data-acquisition" },
                { name: "Corrosion Coupon Racks", desc: "Complementary weight-loss coupons for confirming ER probe corrosion rate data.", href: "/products/corrosion-coupons" },
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

        {/* ── SIDEBAR ── col-span-1 ──────────────────────────────────── */}
        <aside className="lg:col-span-1 mt-12 lg:mt-0">
          <div className="sticky top-[95px] space-y-5">

            {/* Quote Card */}
            <div className="bg-[#f4a65d] rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare size={24} />
                <span className="font-bold text-lg">Request a Quote</span>
              </div>
              <p className="text-orange-100 text-sm mb-5 leading-relaxed">
                Configure your ER probe system with the right element, material, and pressure rating for your application.
              </p>
              <button className="bg-white text-[#f4a65d] font-bold w-full py-3 rounded-lg hover:bg-orange-50 transition-colors">
                Request a Quote
              </button>
              <Link href="/contact" className="block text-center text-orange-100 text-sm mt-3 hover:text-white transition-colors">
                Contact an Engineer
              </Link>
            </div>

            {/* Datasheet Card */}
            <div className="bg-white border border-[#e8edf2] rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <FileText size={20} className="text-[#0f2a4a]" />
                <span className="font-bold text-[#1e2b3a]">Download Datasheet</span>
              </div>
              <p className="text-[#566677] text-xs mb-1">COSASCO_ER_Probe_Systems_DS.pdf</p>
              <p className="text-[#8898aa] text-xs mb-4">2.4 MB · PDF</p>
              <button className="inline-flex items-center gap-2 bg-[#0f2a4a] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#1a3a5c] transition-colors w-full justify-center">
                <Download size={14} /> Download
              </button>
            </div>

            {/* Technical Support Card */}
            <div className="bg-white border border-[#e8edf2] rounded-xl p-5">
              <h4 className="font-bold text-[#1e2b3a] mb-3">Technical Support</h4>
              <div className="flex items-center gap-2.5 text-sm text-[#566677] mb-2">
                <Phone size={15} className="text-[#0f2a4a] flex-shrink-0" />
                +1 (562) 949-0123
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#566677]">
                <Mail size={15} className="text-[#0f2a4a] flex-shrink-0" />
                support@cosasco.com
              </div>
            </div>

            {/* Related Products Card */}
            <div className="bg-white border border-[#e8edf2] rounded-xl p-5">
              <h4 className="font-bold text-[#1e2b3a] mb-4">Related Products</h4>
              <ul className="space-y-3">
                {[
                  { name: "Retrieval Access Fittings", href: "/products/access-fittings" },
                  { name: "Corrosion Coupon Systems", href: "/products/corrosion-coupons" },
                  { name: "Microcor® Wireless DAQ", href: "/products/data-acquisition" },
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
      <RecentlyViewed currentProduct={{ name: "ER Probes", href: "/products/er-probe", category: "Corrosion Monitoring" }} />
    </>
  );
}