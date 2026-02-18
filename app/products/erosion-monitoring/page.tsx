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
    spec: { label: "Max Velocity", value: "30 m/s" },
  },
  {
    name: "UT Transducers — Permanent",
    desc: "Permanently bonded ultrasonic transducers for continuous wall thickness monitoring at high-wear locations. Corrosion-resistant housings rated for offshore and sour gas service.",
    spec: { label: "Resolution", value: "0.01 mm" },
  },
  {
    name: "UT Transducers — Temporary",
    desc: "Clamp-on and magnetically mounted UT transducers for periodic inspection campaigns without welding or hot work. Suitable for field mapping of erosion profiles.",
    spec: { label: "Frequency", value: "1–10 MHz" },
  },
  {
    name: "Intrusive ER Erosion Systems",
    desc: "Combination ER/erosion probe systems that simultaneously measure cumulative metal loss from both corrosion and erosion mechanisms, enabling differentiated integrity assessment.",
    spec: { label: "Element Types", value: "Flush, Exposed, Fin" },
  },
  {
    name: "Pipe Wall Mapping",
    desc: "Automated ultrasonic scanning systems for C-scan wall thickness mapping of pipe bends, reducers, and elbows. Reports include color-coded thickness maps and trend analysis.",
    spec: { label: "Coverage", value: "Full circumference" },
  },
  {
    name: "Erosion Data Loggers",
    desc: "Intrinsically safe data loggers with configurable scan intervals for unattended erosion rate logging at remote locations. Wireless upload via FieldCom or direct serial connection.",
    spec: { label: "Battery Life", value: "Up to 5 years" },
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
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#0d1f3c" }}
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
          <nav className="flex items-center gap-1.5 text-sm text-blue-300 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="opacity-50" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight size={14} className="opacity-50" />
            <span className="text-white font-medium">Erosion Monitoring</span>
          </nav>

          <div className="eyebrow mb-4">Erosion Monitoring Systems</div>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl mb-6">
            Sand Detection & Wall Loss Monitoring for High-Velocity Flow
          </h1>

          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Intrusive erosion probes, permanent and temporary UT transducers, and automated
            wall mapping systems for detecting particle-induced metal loss before it causes
            critical failures in bends, elbows, and choke valves.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT + SIDEBAR ── */}
      <div className="bg-white">
        <div className="cx py-14 md:py-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Content column */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col md:flex-row gap-10 mb-14">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: "#0d1f3c" }}>
                    About Erosion Monitoring
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Erosion from sand and solid particles is one of the leading causes of unplanned
                    downtime in high-rate oil and gas production. Cosasco&rsquo;s erosion monitoring
                    portfolio combines intrusive electrical resistance probes with non-intrusive
                    ultrasonic transducers to provide both real-time sand breakthrough alerts and
                    continuous wall thickness trending — giving operators a complete picture of
                    asset integrity at high-wear locations.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Our UT-based systems require no hot work and can be installed on live lines,
                    making them ideal for retrofitting onto existing infrastructure. Permanent
                    transducer arrays combined with FieldCom wireless data loggers enable
                    continuous remote monitoring of critical bends and reducers.
                  </p>

                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="rounded-lg p-5 border-l-4" style={{ background: "#f7f9fc", borderColor: "#e05000" }}>
                      <div className="stat-number">0.01</div>
                      <p className="text-sm text-slate-600 mt-1 font-medium">mm UT resolution</p>
                    </div>
                    <div className="rounded-lg p-5 border-l-4" style={{ background: "#f7f9fc", borderColor: "#e05000" }}>
                      <div className="stat-number">30+</div>
                      <p className="text-sm text-slate-600 mt-1 font-medium">m/s rated probe velocity</p>
                    </div>
                  </div>
                </div>

                <div className="md:w-72 flex-shrink-0 rounded-lg p-6" style={{ background: "#f7f9fc", border: "1px solid #dde4ef" }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#0d1f3c" }}>
                    System Advantages
                  </p>
                  <ul className="space-y-3.5">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#e05000" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="divider mb-12" />

              <div>
                <h2 className="text-2xl font-bold mb-2" style={{ color: "#0d1f3c" }}>
                  Products in This Category
                </h2>
                <p className="text-slate-500 mb-8">
                  Contact us for detailed specifications, sizing assistance, and offshore certification documentation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {products.map((prod) => (
                    <article key={prod.name} className="card card-accent flex flex-col">
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="font-bold text-base mb-2 leading-snug" style={{ color: "#0d1f3c" }}>
                          {prod.name}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{prod.desc}</p>
                        <div className="rounded-md px-3 py-2 text-xs font-semibold mb-4" style={{ background: "#eef2f7", color: "#334150" }}>
                          <span className="text-slate-400 font-normal">{prod.spec.label}: </span>
                          {prod.spec.value}
                        </div>
                        <Link
                          href={`/contact?product=${encodeURIComponent(prod.name)}`}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                          style={{ color: "#e05000" }}
                        >
                          Request Info <ArrowRight size={14} />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-80 xl:w-88 flex-shrink-0 space-y-6">
              <div className="rounded-lg p-6 text-white" style={{ background: "#0d1f3c" }}>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-3">Direct Engineering Support</p>
                <h3 className="text-lg font-bold text-white mb-2">Speak with an Engineer</h3>
                <p className="text-sm text-blue-200 leading-relaxed mb-6">
                  Our erosion specialists can assist with probe placement, UT transducer selection,
                  and system integration into existing monitoring infrastructure.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-sm text-blue-100">
                    <Phone size={15} className="text-orange-400 flex-shrink-0" /> +1 (714) 538-2902
                  </li>
                  <li className="flex items-center gap-3 text-sm text-blue-100">
                    <Mail size={15} className="text-orange-400 flex-shrink-0" /> sales@cosasco.com
                  </li>
                </ul>
                <Link href="/contact" className="btn btn-primary w-full justify-center text-sm">
                  Send an Inquiry
                </Link>
              </div>

              <div className="rounded-lg p-6" style={{ background: "#f7f9fc", border: "1px solid #dde4ef" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#0d1f3c" }}>Related Solutions</p>
                <ul className="space-y-1">
                  {relatedSolutions.map((s) => (
                    <li key={s.label}>
                      <Link href={s.href} className="flex items-center justify-between py-2.5 text-sm text-slate-700 border-b border-slate-200 last:border-0 hover:text-orange-600 transition-colors group">
                        {s.label}
                        <ChevronRight size={14} className="text-slate-400 group-hover:text-orange-500 transition-colors" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg p-6" style={{ background: "#f7f9fc", border: "1px solid #dde4ef" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#0d1f3c" }}>Download Resources</p>
                <ul className="space-y-3">
                  {downloads.map((dl) => (
                    <li key={dl.title}>
                      <Link href="/resources" className="flex items-start gap-3 p-3 rounded-md bg-white border border-slate-200 hover:border-orange-300 hover:shadow-sm transition-all group">
                        <FileText size={18} className="flex-shrink-0 mt-0.5 text-slate-400 group-hover:text-orange-500 transition-colors" />
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-800 leading-snug">{dl.title}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{dl.desc}</p>
                          <p className="text-xs font-medium text-orange-500 mt-1 flex items-center gap-1">
                            <Download size={11} /> {dl.size}
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
      <section className="py-16" style={{ background: "#f7f9fc", borderTop: "1px solid #dde4ef" }}>
        <div className="cx flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold" style={{ color: "#0d1f3c" }}>Ready to protect against erosion failures?</h2>
            <p className="text-slate-500 mt-1">Request a quote or discuss probe placement with one of our engineers.</p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link href="/contact" className="btn btn-primary">Request a Quote</Link>
            <Link href="/products" className="btn btn-outline-navy">Back to Products</Link>
          </div>
        </div>
      </section>
    </>
  );
}
