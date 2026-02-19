import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chemical Injection Quill Assemblies | Cosasco',
  description: 'Precision chemical injection quills for reliable inhibitor delivery into pressurized pipelines.',
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
  Droplets,
} from "lucide-react";
import RecentlyViewed from '@/components/RecentlyViewed';

export default function QuillAssemblyPage() {
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
            <Link href="/products/chemical-injection" className="hover:text-white transition-colors">Chemical Injection</Link>
            <ChevronRight size={14} className="opacity-50" />
            <span className="text-white font-medium">Quill Assemblies</span>
          </nav>

          <h1 className="text-white font-black text-4xl lg:text-5xl leading-tight mb-4">
            Chemical Injection Quill Assemblies
          </h1>
          <p className="text-[#94aabb] text-lg max-w-2xl leading-relaxed mb-8">
            Precision in-line chemical delivery systems engineered for reliable, homogeneous
            dosing of corrosion inhibitors, biocides, and scale inhibitors into pressurized
            pipelines under full operating conditions.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              { label: "Pressure to 6,000 PSI" },
              { label: "Temp to 300°F" },
              { label: "100% Factory Hydrotested" },
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
              <Droplets size={72} className="text-[#0f2a4a] opacity-30" />
              <span className="text-[#566677] font-semibold text-lg">Chemical Injection Quill Assemblies</span>
            </div>

            <div className="space-y-4 text-[#566677] leading-relaxed mb-10">
              <p>
                Cosasco Chemical Injection Quill Assemblies extend injection points to the
                centerline or a defined radial position within the pipeline, ensuring that
                treatment chemicals disperse homogeneously into the flowing process stream rather
                than pooling at the pipe wall. This is particularly critical for corrosion
                inhibitors and biocides, where inadequate mixing leads to localized under-dosing
                and accelerated corrosion in areas not reached by the chemical slug.
              </p>
              <p>
                Quill assemblies are designed for pipe sizes from 2&quot; to 24&quot; and rated to
                6,000 PSI working pressure at temperatures up to 300°F. Standard injection port
                sizes are 1/4&quot; and 1/2&quot; NPT, with body materials available in 316
                stainless steel, Alloy 20, and Hastelloy C-276 for aggressive sour or
                high-chloride process streams. Retractable quill configurations allow retrieval
                under pressure via Cosasco access fittings without process interruption.
              </p>
              <p>
                Each quill assembly undergoes 100% factory hydrostatic pressure testing before
                shipment. Optional check valve tips prevent back-flow of process fluid into the
                injection line during pump downtime, protecting dosing equipment and chemical
                storage systems. Cosasco quill assemblies integrate directly with metering pump
                skids and are compatible with all standard chemical injection tubing sizes.
              </p>
            </div>

            <h3 className="text-[#0f2a4a] font-bold text-xl mb-4">Key Features</h3>
            <ul className="space-y-3">
              {[
                "Centerline injection for homogeneous chemical dispersion in pipes 2\" to 24\"",
                "Rated to 6,000 PSI at 300°F; engineered per ASME B31.3 process piping",
                "Materials: 316SS, Alloy 20, Hastelloy C-276 for sour and chloride service",
                "Optional integral check valve tip prevents process fluid back-flow",
                "Retractable design for under-pressure removal via Cosasco access fittings",
                "100% factory hydrostatic tested at 1.5× working pressure prior to shipment",
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
                    ["Working Pressure", "Up to 6,000 PSI", "Higher ratings consult factory"],
                    ["Temperature Rating", "Up to 300°F (149°C)", "Standard elastomer seals"],
                    ["Pipe Size Range", "2\" to 24\" nominal", "Custom extensions available"],
                    ["Body Materials", "316SS, Alloy 20, HC-276", "Per NACE MR0175 for sour service"],
                    ["Injection Port", "1/4\" to 1/2\" NPT", "Female connection to injection line"],
                    ["Check Valve", "Optional integral tip", "Spring-loaded; prevents back-flow"],
                    ["Design Standard", "ASME B31.3", "Process piping code"],
                    ["Factory Test", "100% hydrostatically tested", "1.5× working pressure per unit"],
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
                    ["QA-316SS-4IN-3K", "Quill Assembly, 4\" Pipe, Fixed", "316 Stainless Steel", "3,000 PSI"],
                    ["QA-316SS-8IN-6K", "Quill Assembly, 8\" Pipe, Fixed, CV Tip", "316 Stainless Steel", "6,000 PSI"],
                    ["QA-A20-12IN-3K", "Quill Assembly, 12\" Pipe, Fixed", "Alloy 20", "3,000 PSI"],
                    ["QA-HC-6IN-RET", "Retractable Quill, 6\" Pipe, Hastelloy", "Hastelloy C-276", "6,000 PSI"],
                    ["QA-316SS-24IN-3K", "Quill Assembly, 24\" Pipe, Fixed", "316 Stainless Steel", "3,000 PSI"],
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
                { name: "Retrieval Access Fittings", desc: "Under-pressure hot-tap fittings enabling retractable quill removal without shutdown.", href: "/products/access-fittings" },
                { name: "ER Probe Systems", desc: "Monitor corrosion rates downstream of injection points to confirm inhibitor effectiveness.", href: "/products/er-probe" },
                { name: "Corrosion Coupon Systems", desc: "Confirm chemical treatment effectiveness with gravimetric weight-loss coupon analysis.", href: "/products/corrosion-coupons" },
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
                Provide pipe size, material, pressure class, and check valve requirement for a fast quote.
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
              <p className="text-[#566677] text-xs mb-1">COSASCO_Quill_Assembly_DS.pdf</p>
              <p className="text-[#8898aa] text-xs mb-4">1.6 MB · PDF</p>
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
                  { name: "Retrieval Access Fittings", href: "/products/access-fittings" },
                  { name: "ER Probe Systems", href: "/products/er-probe" },
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
      <RecentlyViewed currentProduct={{ name: "Quill Assembly", href: "/products/quill-assembly", category: "Chemical Injection" }} />
    </>
  );
}