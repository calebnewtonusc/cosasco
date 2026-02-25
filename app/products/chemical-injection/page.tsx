import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chemical Injection Systems | Cosasco',
  description: 'Precision chemical injection quills, check valves, and metering systems for corrosion inhibitor and biocide delivery in oil & gas and industrial pipelines.',
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
    name: "Quill Assemblies — Fixed",
    desc: "Single-piece welded quill assemblies deliver chemical inhibitor to the center of the flow stream for optimal dispersion. Available in straight and angle-entry configurations with integral check valve.",
    spec: "Max Pressure: 6,000 PSI",
  },
  {
    name: "Quill Assemblies — Retractable",
    desc: "Spring-loaded retractable quills allow removal under live line conditions without depressurization. Preferred for high-solids or scaling service where periodic cleaning or replacement is required.",
    spec: "Rated: 3,000 PSI / 300°F",
  },
  {
    name: "Injection Check Valves",
    desc: "Stainless and alloy body check valves prevent backflow of process fluid into the chemical injection line. Available in piston, ball, and dual-disc designs across a full range of body materials.",
    spec: "Cv Range: 0.01 – 2.5",
  },
  {
    name: "Pulsation Dampeners",
    desc: "Bladder and chamber-type dampeners smooth pulsation from reciprocating chemical injection pumps, extending pump life and ensuring consistent downstream dosing rates to inhibitor programs.",
    spec: "Volume: 0.25 to 10 gal",
  },
  {
    name: "Mixing Tees",
    desc: "Engineered static mixing elements promote rapid dispersion of injected chemistry into the bulk flow stream, reducing chemical consumption and improving inhibitor film formation on pipe walls.",
    spec: "Pipe Sizes: 2\" to 20\" NPS",
  },
  {
    name: "Dosing Skids",
    desc: "Packaged injection skids with pump, vessel, instrumentation, and controls mounted on a painted structural steel frame. Factory tested and certified prior to shipment to minimize site commissioning time.",
    spec: "Pump Types: Plunger, Diaphragm",
  },
];

const features = [
  "Live insertion and removal under pressure",
  "Full material traceability (MTRs included)",
  "NACE MR0175 / ISO 15156 compliant materials",
  "Custom quill lengths to any pipe diameter",
  "Integral isolation valve options",
  "Offshore / sour service certification available",
];

const relatedSolutions = [
  { label: "Corrosion Inhibition", href: "/solutions/corrosion-inhibition" },
  { label: "Scale Control", href: "/solutions/scale-control" },
  { label: "Biocide Treatment", href: "/solutions/biocide" },
  { label: "Pipeline Protection", href: "/solutions/pipeline" },
];

const downloads = [
  {
    title: "Chemical Injection Systems Catalog",
    desc: "Quills, check valves, dampeners, and skid specifications",
    size: "5.1 MB PDF",
  },
  {
    title: "Quill Selection & Sizing Guide",
    desc: "Flow rate, pipe size, and material selection matrix",
    size: "1.2 MB PDF",
  },
];

export default function ChemicalInjectionPage() {
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
            <span className="text-white font-medium">Chemical Injection</span>
          </nav>
          <h1 className="text-white font-black text-4xl lg:text-5xl leading-tight mb-4">
            Precision Chemical Delivery for Pressurized Process Lines
          </h1>
          <p className="text-[#94aabb] text-lg max-w-2xl leading-relaxed">
            From simple fixed quill assemblies to fully packaged dosing skids, Cosasco chemical
            injection systems are engineered for reliable, accurate delivery of corrosion inhibitors,
            scale inhibitors, biocides, and demulsifiers into live process pipelines and vessels.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="bg-white py-16 px-6 md:px-10 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left — 2 cols */}
            <div className="lg:col-span-2">
              <h2 className="font-black text-[#0f2a4a] text-3xl mb-4">About Chemical Injection</h2>
              <p className="text-[#566677] leading-relaxed mb-4">
                Effective corrosion and scale management begins with reliable chemical delivery.
                Cosasco injection quills and assemblies are designed to position the injection point
                at the centerline of the flow stream — away from the pipe wall — ensuring turbulent
                mixing and uniform inhibitor distribution. Retractable designs allow removal and
                inspection without shutdown, critical for long-term operability in high-scaling or
                high-solids environments.
              </p>
              <p className="text-[#566677] leading-relaxed mb-8">
                Our packaged dosing skids integrate pump, vessel, instrumentation, and flow control
                into a single factory-tested unit, minimizing field installation time and ensuring
                performance from day one. All materials are available in NACE MR0175-compliant grades
                for sour service environments, trusted across 110 countries in the most demanding
                process conditions globally.
              </p>

              {/* Stat callouts */}
              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-4 border-[#f4a65d] bg-[#f7f9fc] rounded-r-xl px-5 py-4">
                  <div className="text-[#f4a65d] font-black text-4xl leading-none">6K</div>
                  <p className="text-[#566677] text-sm mt-1 font-medium">PSI max-rated quill assemblies</p>
                </div>
                <div className="border-l-4 border-[#f4a65d] bg-[#f7f9fc] rounded-r-xl px-5 py-4">
                  <div className="text-[#f4a65d] font-black text-4xl leading-none">100%</div>
                  <p className="text-[#566677] text-sm mt-1 font-medium">Factory pressure tested prior to shipment</p>
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
            Contact us for sizing calculations, material recommendations, and full engineering drawings.
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
              Ready to optimize your chemical injection system?
            </h2>
            <p className="text-[#566677] mb-6">
              Request a quote or discuss quill sizing and skid configuration with our injection engineers.
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
                  +1 (562) 949-0123
                </li>
                <li className="flex items-center gap-3 text-sm text-[#94aabb]">
                  <Mail size={15} className="text-[#f4a65d] flex-shrink-0" />
                  info@cosasco.com
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
