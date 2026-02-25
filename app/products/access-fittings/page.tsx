import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Retrieval Access Fittings | Cosasco',
  description: 'Live insertion and retrieval of corrosion monitoring equipment at full operating pressure.',
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
  Wrench,
} from "lucide-react";
import RecentlyViewed from '@/components/RecentlyViewed';

export default function AccessFittingsPage() {
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
            <span className="text-white font-medium">Retrieval Access Fittings</span>
          </nav>

          <h1 className="text-white font-black text-4xl lg:text-5xl leading-tight mb-4">
            Retrieval Access Fittings
          </h1>
          <p className="text-[#94aabb] text-lg max-w-2xl leading-relaxed mb-8">
            Hot-tap access fittings engineered for safe under-pressure insertion and retrieval of
            corrosion monitoring probes and coupons in live pipeline systems.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              { label: "Pressure to 10,000 PSI" },
              { label: "Temp to 400°F" },
              { label: "ASME B31.3 Approved" },
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
        {/* ── MAIN ── col-span-2 ──────────────────────────────────────── */}
        <div className="lg:col-span-2 space-y-0">

          {/* 1. OVERVIEW */}
          <section className="bg-white py-12">
            <div className="bg-[#f7f9fc] border border-[#e8edf2] rounded-2xl aspect-[4/3] flex flex-col items-center justify-center mb-10 gap-4">
              <Wrench size={72} className="text-[#0f2a4a] opacity-30" />
              <span className="text-[#566677] font-semibold text-lg">Retrieval Access Fittings</span>
            </div>

            <div className="space-y-4 text-[#566677] leading-relaxed mb-10">
              <p>
                Cosasco Retrieval Access Fittings provide a safe, efficient means of inserting and
                retrieving corrosion monitoring instruments, including probes, coupons, and sensors, into
                pipelines and vessels operating at full working pressure. Eliminating the need for
                costly shutdowns, these fittings allow maintenance and monitoring activities to
                proceed without interrupting production, a critical capability in oil &amp; gas,
                petrochemical, and water treatment operations.
              </p>
              <p>
                Available in bore sizes from 1/2&quot; through 2&quot;, Cosasco access fittings are
                engineered to ASME B31.3 process piping standards and pressure-rated to 10,000 PSI.
                Body materials include carbon steel, 316 stainless steel, and exotic alloys for
                sour service and high-chloride environments. Both NPT-threaded and flanged end
                connections are offered to suit existing nozzle configurations without pipe
                modification.
              </p>
              <p>
                Each fitting is supplied with an integrated valve and retrieval tool interface,
                enabling one-person operation with the appropriate Cosasco retrieval tool. All units
                undergo factory hydrostatic testing at 1.5× rated working pressure prior to
                shipment. Optional extended-body designs are available for insulated or thick-walled
                pipe applications.
              </p>
            </div>

            <h3 className="text-[#0f2a4a] font-bold text-xl mb-4">Key Features</h3>
            <ul className="space-y-3">
              {[
                "Full-bore rated to 10,000 PSI: insert and retrieve probes under live pressure",
                "Bore sizes from 1/2\" to 2\" NPT and flanged end connections",
                "Body materials: Carbon Steel, 316SS, Duplex, Alloy 20, and Hastelloy C-276",
                "Compliant with ASME B31.3 process piping and NACE MR0175/ISO 15156",
                "100% factory hydrostatic tested to 1.5× working pressure before shipment",
                "Extended-body variants for insulated pipelines and thick-wall vessels",
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
                    ["Pressure Rating", "Up to 10,000 PSI", "Full rated working pressure"],
                    ["Temperature Rating", "Up to 400°F (204°C)", "Standard elastomer seals; consult for higher"],
                    ["Bore Size", "1/2\" to 2\"", "Larger bores available on request"],
                    ["Body Materials", "CS, 316SS, Duplex, Alloy 20", "Hastelloy available for sour service"],
                    ["End Connection", "NPT threaded or Flanged", "ANSI 150# to 2500# flanges"],
                    ["Design Standard", "ASME B31.3", "Process piping code compliance"],
                    ["Sour Service", "NACE MR0175 / ISO 15156", "H2S environments up to limits"],
                    ["Hydrostatic Test", "1.5× Working Pressure", "100% factory tested per unit"],
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
                    ["AF-1NPT-CS-3K", "1\" NPT Access Fitting, Standard Bore", "Carbon Steel", "3,000 PSI"],
                    ["AF-1NPT-316SS-6K", "1\" NPT Access Fitting, Stainless", "316 Stainless Steel", "6,000 PSI"],
                    ["AF-2NPT-A20-6K", "2\" NPT Access Fitting, Alloy 20", "Alloy 20", "6,000 PSI"],
                    ["AF-FLG-HC-10K", "Flanged Access Fitting, Hastelloy", "Hastelloy C-276", "10,000 PSI"],
                    ["AF-1NPT-CS-EXT", "Extended Body, 1\" NPT, Insulated Pipe", "Carbon Steel", "3,000 PSI"],
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
                { name: "ER Probe Systems", desc: "Electrical resistance probes sized for 1\" and 2\" access fittings in all standard alloys.", href: "/products/er-probe" },
                { name: "Corrosion Coupon Racks", desc: "Coupon holder assemblies designed to fit Cosasco retrieval access fittings directly.", href: "/products/corrosion-coupons" },
                { name: "Quill Assemblies", desc: "Chemical injection quills mountable via access fittings for direct in-line dosing.", href: "/products/quill-assembly" },
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

            <div className="bg-[#f4a65d] rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare size={24} />
                <span className="font-bold text-lg">Request a Quote</span>
              </div>
              <p className="text-orange-100 text-sm mb-5 leading-relaxed">
                Specify bore size, material, pressure class, and end connection for an accurate quote.
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
              <p className="text-[#566677] text-xs mb-1">COSASCO_Access_Fittings_DS.pdf</p>
              <p className="text-[#8898aa] text-xs mb-4">1.8 MB · PDF</p>
              <button className="inline-flex items-center gap-2 bg-[#0f2a4a] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#1a3a5c] transition-colors w-full justify-center">
                <Download size={14} /> Download
              </button>
            </div>

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

            <div className="bg-white border border-[#e8edf2] rounded-xl p-5">
              <h4 className="font-bold text-[#1e2b3a] mb-4">Related Products</h4>
              <ul className="space-y-3">
                {[
                  { name: "ER Probe Systems", href: "/products/er-probe" },
                  { name: "Corrosion Coupon Systems", href: "/products/corrosion-coupons" },
                  { name: "Chemical Injection Quills", href: "/products/quill-assembly" },
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
      <RecentlyViewed currentProduct={{ name: "Access Fittings", href: "/products/access-fittings", category: "Corrosion Monitoring" }} />
    </>
  );
}