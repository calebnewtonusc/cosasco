import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Corrosion Monitoring Products | Cosasco',
  description: 'ER probes, corrosion coupons, access fittings, and LPR sensors for continuous and periodic corrosion measurement in industrial process systems.',
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

const featuredProducts = [
  {
    name: "Fixed Process ER Probe 2500/2520",
    desc: "Standard and high-temperature variants for permanent installation in pipelines and vessels. Continuous cumulative metal loss measurement independent of process fluid conductivity.",
    spec: "Max Temp: 200°C (2500) · 260°C (2520)",
  },
  {
    name: "Retractable ER Probe 3500/3700",
    desc: "Safe in-service retrieval under full operating pressure without process shutdown. Available with hydraulic or mechanical retrieval tools for pressures to 10,000 PSI.",
    spec: "Max Pressure: 10,000 PSI · Rating: 400°F",
  },
  {
    name: "Microcor® High-Speed ER Probes",
    desc: "Cosasco&rsquo;s Microcor® technology delivers up to 50× faster data acquisition rates than standard ER probes, enabling near-real-time corrosion rate monitoring in dynamic process environments.",
    spec: "Response Speed: up to 50× faster data acquisition rates vs. standard ER",
  },
  {
    name: "LPR Probe 6112/7012",
    desc: "Linear polarization resistance probes deliver instantaneous corrosion rate readings in conductive aqueous environments. Ideal for water injection, produced water, and cooling water systems.",
    spec: "Sensitivity: 0.001 mpy · Conductive fluids",
  },
  {
    name: "AquaMate® Portable LPR Instrument",
    desc: "Handheld portable LPR instrument for spot measurements and field surveys in aqueous systems. No dedicated data logger required - ideal for periodic inspection programs.",
    spec: "Type: Portable · Application: Spot measurement",
  },
  {
    name: "Corrosion Coupons CI",
    desc: "Precision-manufactured weight-loss coupons for baseline and regulatory measurement programs. Flat, cylindrical, and disc geometries with optional laboratory analysis and certified reporting.",
    spec: "Standard: NACE TM-0169",
  },
  {
    name: "Hydrogen Probes 6400",
    desc: "Monitor hydrogen permeation activity and hydrogen-induced cracking (HIC) risk in sour service environments. Critical for H2S-containing streams in refineries and upstream production.",
    spec: "Application: Sour service · HIC risk monitoring",
  },
  {
    name: "AirIQ - Airborne Corrosion Monitor",
    desc: "Real-time airborne corrosion monitoring for specialty applications including control rooms, electrical switchgear, and storage environments. Detects H2S, Cl2, and mixed corrosive gases.",
    spec: "Application: Atmospheric / indoor environments",
  },
];

const products = [
  {
    name: "Retractable Access Fittings",
    desc: "Cosasco access fittings are the industry standard for safe, live insertion and retrieval of monitoring instruments at full operating pressure. Hydraulic and mechanical retrieval tool variants available.",
    spec: "Rating: 10,000 PSI / 400°F",
  },
  {
    name: "Coupon Racks & Holders",
    desc: "Multi-position coupon racks allow simultaneous exposure of several coupons at different locations within the flow stream. Suitable for bypass spool or mainline installation.",
    spec: "Sizes: 1\" to 6\" NPT",
  },
  {
    name: "Pipe Penetration Fittings",
    desc: "Weld-in fittings provide a permanent, pressure-rated entry point for probe installation into pipelines, vessels, and process equipment. Full bore and reduced bore versions available.",
    spec: "Pressure Class: 150 to 2500#",
  },
];

const features = [
  "Online retrieval without process shutdown",
  "Compatible with all major data loggers",
  "ATEX / IECEx certified versions available",
  "50+ probe element configurations",
  "Full material traceability and certifications",
  "Global inventory and same-day shipping",
];

const relatedSolutions = [
  { label: "Oil & Gas Production", href: "/solutions/oil-gas" },
  { label: "Petrochemical Plants", href: "/solutions/petrochemical" },
  { label: "Chemical Processing", href: "/solutions/chemical-processing" },
  { label: "Water Treatment", href: "/solutions/water-treatment" },
];

const downloads = [
  {
    title: "Corrosion Monitoring Product Catalog",
    desc: "Full specifications for ER probes, access fittings, and coupons",
    size: "4.2 MB PDF",
  },
  {
    title: "ER Probe Selection Guide",
    desc: "Configuration matrix for probe element type, geometry, and material",
    size: "1.8 MB PDF",
  },
];

export default function CorrosionMonitoringPage() {
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
            <span className="text-white font-medium">Corrosion Monitoring</span>
          </nav>
          <h1 className="text-white font-black text-4xl lg:text-5xl leading-tight mb-4">
            Precision Instruments for Internal Corrosion Measurement
          </h1>
          <p className="text-[#94aabb] text-lg max-w-2xl leading-relaxed">
            From electrical resistance probes and LPR electrochemical sensors to access fittings,
            corrosion coupons, and pipe penetration hardware - a complete, integrated corrosion
            monitoring system for any process environment.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="bg-white py-16 px-6 md:px-10 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left - 2 cols */}
            <div className="lg:col-span-2">
              <h2 className="font-black text-[#0f2a4a] text-3xl mb-4">About Our Monitoring Systems</h2>
              <p className="text-[#566677] leading-relaxed mb-4">
                Cosasco&rsquo;s corrosion monitoring portfolio is anchored by our electrical resistance
                (ER) probe systems - the most widely deployed technology for continuous, online metal
                loss measurement in oil and gas pipelines, process vessels, and petrochemical equipment.
                ER probes measure the increase in electrical resistance of a corroding sensing element,
                delivering cumulative corrosion data that is independent of process fluid conductivity.
              </p>
              <p className="text-[#566677] leading-relaxed mb-8">
                For conductive aqueous environments, our LPR electrochemical probes provide instantaneous
                corrosion rate readings that enable operators to respond rapidly to changing process
                conditions. Access fittings and pipe penetration hardware complete the system, allowing
                safe, live insertion and retrieval of all probe types without process shutdown or
                depressurization.
              </p>

              {/* Stat callouts */}
              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-4 border-[#f4a65d] bg-[#f7f9fc] rounded-r-xl px-5 py-4">
                  <div className="text-[#f4a65d] font-black text-4xl leading-none">70+</div>
                  <p className="text-[#566677] text-sm mt-1 font-medium">Years of ER probe development</p>
                </div>
                <div className="border-l-4 border-[#f4a65d] bg-[#f7f9fc] rounded-r-xl px-5 py-4">
                  <div className="text-[#f4a65d] font-black text-4xl leading-none">1M+</div>
                  <p className="text-[#566677] text-sm mt-1 font-medium">Active monitoring locations worldwide</p>
                </div>
              </div>
            </div>

            {/* Right - Key Features card */}
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

      {/* FEATURED PRODUCTS GRID */}
      <section className="bg-[#f7f9fc] py-16 px-6 md:px-10 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-black text-[#0f2a4a] text-3xl mb-2">Featured Products</h2>
          <p className="text-[#566677] mb-10">
            Select a product for full specifications, drawings, and ordering information.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((prod) => (
              <article
                key={prod.name}
                className="bg-white border border-[#e8edf2] rounded-xl p-6 hover:shadow-md transition-all flex flex-col"
              >
                <h3 className="font-bold text-[#0f2a4a] text-base leading-snug">{prod.name}</h3>
                <p
                  className="text-[#566677] text-sm mt-2 leading-relaxed flex-1"
                  dangerouslySetInnerHTML={{ __html: prod.desc }}
                />
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

          {/* Catalog note */}
          <div className="mt-10 bg-[#0f2a4a] rounded-xl px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-white font-bold text-sm">
                Cosasco offers 90+ corrosion monitoring products.
              </p>
              <p className="text-[#8ab4d4] text-sm mt-0.5">
                Contact us for the full product catalog including specialty probes, coupon holders, and custom configurations.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#f4a65d] text-white rounded-md px-5 py-2.5 text-sm font-semibold hover:bg-[#d4892a] transition-colors"
            >
              Request Full Catalog
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ADDITIONAL PRODUCTS GRID */}
      <section className="bg-white py-16 px-6 md:px-10 xl:px-16 border-t border-[#e8edf2]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-black text-[#0f2a4a] text-3xl mb-2">Access Hardware & Fittings</h2>
          <p className="text-[#566677] mb-10">
            Complete your monitoring system with Cosasco&rsquo;s industry-standard access hardware.
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

      {/* SIDEBAR + CTA SECTION */}
      <section className="bg-[#f7f9fc] py-16 px-6 md:px-10 xl:px-16 border-t border-[#e8edf2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main CTA left */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <h2 className="font-black text-[#0f2a4a] text-2xl mb-2">
              Ready to configure your monitoring system?
            </h2>
            <p className="text-[#566677] mb-6">
              Request a quote or talk to an engineer about your specific process conditions.
              We&rsquo;ll recommend the right probe type, element configuration, and access hardware.
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

          {/* Sidebar right */}
          <aside className="lg:col-span-4 space-y-4">
            {/* Speak with Engineer */}
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

            {/* Related Solutions */}
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

            {/* Downloads */}
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
