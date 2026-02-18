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
    name: "Sand & Erosion Probes",
    desc: "Intrusive ER-based probes designed specifically for sand-laden production streams. Provides continuous, real-time erosion depth measurements in choke valves, bends, and tees where particle impingement is highest.",
    spec: "Max Velocity: 30 m/s",
  },
  {
    name: "UT Transducers — Permanent",
    desc: "Permanently bonded ultrasonic transducers for continuous wall thickness monitoring at high-wear locations. Corrosion-resistant housings rated for offshore and sour gas service.",
    spec: "Resolution: 0.01 mm",
  },
  {
    name: "UT Transducers — Temporary",
    desc: "Clamp-on and magnetically mounted UT transducers for periodic inspection campaigns without welding or hot work. Suitable for field mapping of erosion profiles across a range of pipe diameters.",
    spec: "Frequency: 1–10 MHz",
  },
  {
    name: "Intrusive ER Erosion Systems",
    desc: "Combination ER/erosion probe systems that simultaneously measure cumulative metal loss from both corrosion and erosion mechanisms, enabling differentiated integrity assessment in multiphase flow.",
    spec: "Element Types: Flush, Exposed, Fin",
  },
  {
    name: "Pipe Wall Mapping",
    desc: "Automated ultrasonic scanning systems for C-scan wall thickness mapping of pipe bends, reducers, and elbows. Reports include color-coded thickness maps and trend analysis for fitness-for-service review.",
    spec: "Coverage: Full circumference",
  },
  {
    name: "Erosion Data Loggers",
    desc: "Intrinsically safe data loggers with configurable scan intervals for unattended erosion rate logging at remote locations. Wireless upload via FieldCom or direct serial connection.",
    spec: "Battery Life: Up to 5 years",
  },
];

const features = [
  "Real-time sand breakthrough detection",
  "Compatible with Cosasco FieldCom wireless",
  "No hot work required for UT installation",
  "Dual ER/UT hybrid measurement available",
  "ATEX Zone 1 / Zone 2 certified",
  "DNV-GL type approved for offshore use",
];

const relatedSolutions = [
  { label: "Offshore Platforms", href: "/solutions/offshore" },
  { label: "Oil & Gas Production", href: "/solutions/oil-gas" },
  { label: "Pipeline Integrity", href: "/solutions/pipeline" },
  { label: "Subsea Systems", href: "/solutions/subsea" },
];

const downloads = [
  {
    title: "Erosion Monitoring Systems Catalog",
    desc: "UT transducers, sand probes, and data loggers",
    size: "3.6 MB PDF",
  },
  {
    title: "Sand Detection Application Note",
    desc: "Probe placement and threshold configuration guide",
    size: "900 KB PDF",
  },
];

export default function ErosionMonitoringPage() {
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
            <span className="text-white font-medium">Erosion Monitoring</span>
          </nav>
          <h1 className="text-white font-black text-4xl lg:text-5xl leading-tight mb-4">
            Sand Detection &amp; Wall Loss Monitoring for High-Velocity Flow
          </h1>
          <p className="text-[#94aabb] text-lg max-w-2xl leading-relaxed">
            Intrusive erosion probes, permanent and temporary UT transducers, and automated wall
            mapping systems for detecting particle-induced metal loss before it causes critical
            failures in bends, elbows, and choke valves.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="bg-white py-16 px-6 md:px-10 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left — 2 cols */}
            <div className="lg:col-span-2">
              <h2 className="font-black text-[#0f2a4a] text-3xl mb-4">About Erosion Monitoring</h2>
              <p className="text-[#566677] leading-relaxed mb-4">
                Erosion from sand and solid particles is one of the leading causes of unplanned
                downtime in high-rate oil and gas production. Cosasco&rsquo;s erosion monitoring
                portfolio combines intrusive electrical resistance probes with non-intrusive
                ultrasonic transducers to provide both real-time sand breakthrough alerts and
                continuous wall thickness trending — giving operators a complete picture of asset
                integrity at high-wear locations.
              </p>
              <p className="text-[#566677] leading-relaxed mb-8">
                Our UT-based systems require no hot work and can be installed on live lines, making
                them ideal for retrofitting onto existing infrastructure. Permanent transducer arrays
                combined with FieldCom wireless data loggers enable continuous remote monitoring of
                critical bends and reducers deployed across our 1M+ global monitoring locations.
              </p>

              {/* Stat callouts */}
              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-4 border-[#f4a65d] bg-[#f7f9fc] rounded-r-xl px-5 py-4">
                  <div className="text-[#f4a65d] font-black text-4xl leading-none">0.01</div>
                  <p className="text-[#566677] text-sm mt-1 font-medium">mm UT wall-thickness resolution</p>
                </div>
                <div className="border-l-4 border-[#f4a65d] bg-[#f7f9fc] rounded-r-xl px-5 py-4">
                  <div className="text-[#f4a65d] font-black text-4xl leading-none">30+</div>
                  <p className="text-[#566677] text-sm mt-1 font-medium">m/s rated erosion probe velocity</p>
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
            Contact us for detailed specifications, sizing assistance, and offshore certification documentation.
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
              Ready to protect against erosion failures?
            </h2>
            <p className="text-[#566677] mb-6">
              Request a quote or discuss probe placement with one of our erosion monitoring engineers.
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
