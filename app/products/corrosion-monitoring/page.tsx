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
    name: "ER Probes",
    desc: "Electrical resistance probes provide continuous, real-time cumulative metal loss measurement without process shutdown. Available in straight, flush mount, and retractable configurations for threaded or flanged access fittings.",
    spec: { label: "Max Temperature", value: "200°C (392°F)" },
    href: "#er-probes",
  },
  {
    name: "LPR Electrochemical Probes",
    desc: "Linear polarization resistance probes deliver instantaneous corrosion rate readings in conductive aqueous environments. Ideal for water injection, produced water, and cooling water systems where real-time rate data is critical.",
    spec: { label: "Sensitivity", value: "0.001 mpy" },
    href: "#lpr-probes",
  },
  {
    name: "Access Fittings & Retrievers",
    desc: "Cosasco access fittings are the industry standard for safe, live insertion and retrieval of monitoring instruments at full operating pressure. Hydraulic and mechanical retrieval tool variants available for all line sizes.",
    spec: { label: "Rated", value: "10,000 PSI / 400°F" },
    href: "#access-fittings",
  },
  {
    name: "Corrosion Coupons",
    desc: "Precision-manufactured weight-loss coupons provide baseline general and localized corrosion data per NACE SP0775. Flat, cylindrical, and disc geometries with optional paired laboratory analysis and certified reporting.",
    spec: { label: "Materials", value: "CS, SS, Duplex, Alloy" },
    href: "#coupons",
  },
  {
    name: "Coupon Racks & Holders",
    desc: "Multi-position coupon racks allow simultaneous exposure of several coupons at different locations within the flow stream. Suitable for bypass spool or mainline installation across a broad range of pipe sizes.",
    spec: { label: "Sizes", value: "1\" to 6\" NPT" },
    href: "#coupon-racks",
  },
  {
    name: "Pipe Penetration Fittings",
    desc: "Weld-in fittings provide a permanent, pressure-rated entry point for probe installation into pipelines, vessels, and process equipment. Full bore and reduced bore versions available across all ANSI pressure classes.",
    spec: { label: "Pressure Class", value: "150 to 2500" },
    href: "#penetration-fittings",
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
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#0d1f3c" }}
        aria-label="Page hero"
      >
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 80% 50%, #1a3d6e 0%, transparent 70%)",
          }}
        />
        <div className="cx relative py-18 md:py-24">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-1.5 text-sm text-blue-300 mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="opacity-50" />
            <Link href="/products" className="hover:text-white transition-colors">
              Products
            </Link>
            <ChevronRight size={14} className="opacity-50" />
            <span className="text-white font-medium">Corrosion Monitoring</span>
          </nav>

          <div className="eyebrow mb-4">Corrosion Monitoring Systems</div>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl mb-6">
            Precision Instruments for Internal Corrosion Measurement
          </h1>

          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            From electrical resistance probes and LPR electrochemical sensors to access fittings,
            corrosion coupons, and pipe penetration hardware — Cosasco delivers a complete,
            integrated corrosion monitoring system for any process environment.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT + SIDEBAR ── */}
      <div className="bg-white">
        <div className="cx py-14 md:py-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* ── LEFT CONTENT COLUMN (8/12) ── */}
            <div className="flex-1 min-w-0">
              {/* Intro */}
              <div className="flex flex-col md:flex-row gap-10 mb-14">
                {/* Text */}
                <div className="flex-1">
                  <h2
                    className="text-2xl font-bold mb-4"
                    style={{ color: "#0d1f3c" }}
                  >
                    About Our Monitoring Systems
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Cosasco&rsquo;s corrosion monitoring portfolio is anchored by our electrical
                    resistance (ER) probe systems — the most widely deployed technology for
                    continuous, online metal loss measurement in oil and gas pipelines, process
                    vessels, and petrochemical equipment. ER probes measure the increase in
                    electrical resistance of a corroding sensing element, delivering cumulative
                    corrosion data that is independent of process fluid conductivity.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    For conductive aqueous environments, our LPR electrochemical probes provide
                    instantaneous corrosion rate readings that enable operators to respond rapidly
                    to changing process conditions. Access fittings and pipe penetration hardware
                    complete the system, allowing safe, live insertion and retrieval of all probe
                    types without process shutdown or depressurization.
                  </p>

                  {/* Key stats */}
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div
                      className="rounded-lg p-5 border-l-4"
                      style={{
                        background: "#f7f9fc",
                        borderColor: "#e05000",
                      }}
                    >
                      <div className="stat-number">35+</div>
                      <p className="text-sm text-slate-600 mt-1 font-medium">
                        Years of ER probe development
                      </p>
                    </div>
                    <div
                      className="rounded-lg p-5 border-l-4"
                      style={{
                        background: "#f7f9fc",
                        borderColor: "#e05000",
                      }}
                    >
                      <div className="stat-number">40K</div>
                      <p className="text-sm text-slate-600 mt-1 font-medium">
                        PSI — deepest installation rated
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature list */}
                <div
                  className="md:w-72 flex-shrink-0 rounded-lg p-6"
                  style={{ background: "#f7f9fc", border: "1px solid #dde4ef" }}
                >
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-5"
                    style={{ color: "#0d1f3c" }}
                  >
                    System Advantages
                  </p>
                  <ul className="space-y-3.5">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle
                          size={16}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: "#e05000" }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="divider mb-12" />

              {/* Product grid */}
              <div>
                <h2
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#0d1f3c" }}
                >
                  Products in This Category
                </h2>
                <p className="text-slate-500 mb-8">
                  Select a product for full specifications, drawings, and ordering information.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {products.map((prod) => (
                    <article
                      key={prod.name}
                      className="card card-accent flex flex-col"
                    >
                      <div className="p-5 flex flex-col flex-1">
                        <h3
                          className="font-bold text-base mb-2 leading-snug"
                          style={{ color: "#0d1f3c" }}
                        >
                          {prod.name}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                          {prod.desc}
                        </p>

                        {/* Key spec */}
                        <div
                          className="rounded-md px-3 py-2 text-xs font-semibold mb-4"
                          style={{
                            background: "#eef2f7",
                            color: "#334150",
                          }}
                        >
                          <span className="text-slate-400 font-normal">
                            {prod.spec.label}:{" "}
                          </span>
                          {prod.spec.value}
                        </div>

                        <Link
                          href={`/contact?product=${encodeURIComponent(prod.name)}`}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                          style={{ color: "#e05000" }}
                        >
                          Request Info
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* ── SIDEBAR (4/12) ── */}
            <aside className="lg:w-80 xl:w-88 flex-shrink-0 space-y-6">
              {/* Speak with Engineer */}
              <div
                className="rounded-lg p-6 text-white"
                style={{ background: "#0d1f3c" }}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-3">
                  Direct Engineering Support
                </p>
                <h3 className="text-lg font-bold text-white mb-2">
                  Speak with an Engineer
                </h3>
                <p className="text-sm text-blue-200 leading-relaxed mb-6">
                  Our corrosion specialists can help you select the correct probe configuration,
                  element type, and access hardware for your process conditions.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-sm text-blue-100">
                    <Phone size={15} className="text-orange-400 flex-shrink-0" />
                    +1 (714) 538-2902
                  </li>
                  <li className="flex items-center gap-3 text-sm text-blue-100">
                    <Mail size={15} className="text-orange-400 flex-shrink-0" />
                    sales@cosasco.com
                  </li>
                </ul>
                <Link href="/contact" className="btn btn-primary w-full justify-center text-sm">
                  Send an Inquiry
                </Link>
              </div>

              {/* Related Solutions */}
              <div
                className="rounded-lg p-6"
                style={{ background: "#f7f9fc", border: "1px solid #dde4ef" }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ color: "#0d1f3c" }}
                >
                  Related Solutions
                </p>
                <ul className="space-y-1">
                  {relatedSolutions.map((s) => (
                    <li key={s.label}>
                      <Link
                        href={s.href}
                        className="flex items-center justify-between py-2.5 text-sm text-slate-700 border-b border-slate-200 last:border-0 hover:text-orange-600 transition-colors group"
                      >
                        {s.label}
                        <ChevronRight
                          size={14}
                          className="text-slate-400 group-hover:text-orange-500 transition-colors"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Downloads */}
              <div
                className="rounded-lg p-6"
                style={{ background: "#f7f9fc", border: "1px solid #dde4ef" }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ color: "#0d1f3c" }}
                >
                  Download Resources
                </p>
                <ul className="space-y-3">
                  {downloads.map((dl) => (
                    <li key={dl.title}>
                      <Link
                        href="/resources"
                        className="flex items-start gap-3 p-3 rounded-md bg-white border border-slate-200 hover:border-orange-300 hover:shadow-sm transition-all group"
                      >
                        <FileText
                          size={18}
                          className="flex-shrink-0 mt-0.5 text-slate-400 group-hover:text-orange-500 transition-colors"
                        />
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-800 leading-snug">
                            {dl.title}
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5">{dl.desc}</p>
                          <p className="text-xs font-medium text-orange-500 mt-1 flex items-center gap-1">
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
        </div>
      </div>

      {/* ── BOTTOM CTA ── */}
      <section
        className="py-16"
        style={{ background: "#f7f9fc", borderTop: "1px solid #dde4ef" }}
      >
        <div className="cx flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold" style={{ color: "#0d1f3c" }}>
              Ready to configure your monitoring system?
            </h2>
            <p className="text-slate-500 mt-1">
              Request a quote or talk to an engineer about your specific process conditions.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link href="/contact" className="btn btn-primary">
              Request a Quote
            </Link>
            <Link href="/products" className="btn btn-outline-navy">
              Back to Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
