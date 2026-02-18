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
    desc: "Single-piece welded quill assemblies deliver chemical inhibitor to the center of the flow stream for optimal dispersion. Available in straight and angle-entry configurations with check valve integration.",
    spec: { label: "Max Pressure", value: "6,000 PSI" },
  },
  {
    name: "Quill Assemblies — Retractable",
    desc: "Spring-loaded retractable quills allow removal under live line conditions without depressurization. Preferred for high-solids or scaling service where periodic cleaning or replacement is required.",
    spec: { label: "Rated", value: "3,000 PSI / 300°F" },
  },
  {
    name: "Injection Check Valves",
    desc: "Stainless and alloy body check valves prevent backflow of process fluid into the chemical injection line. Available in piston, ball, and dual-disc designs across a full range of body materials.",
    spec: { label: "Cv Range", value: "0.01 – 2.5" },
  },
  {
    name: "Pulsation Dampeners",
    desc: "Bladder and chamber-type dampeners smooth pulsation from reciprocating chemical injection pumps, extending pump life and ensuring consistent downstream dosing rates.",
    spec: { label: "Volume", value: "0.25 to 10 gal" },
  },
  {
    name: "Mixing Tees",
    desc: "Engineered static mixing elements promote rapid dispersion of injected chemistry into the bulk flow stream, reducing chemical consumption and improving inhibitor film formation.",
    spec: { label: "Pipe Sizes", value: '2" to 20" NPS' },
  },
  {
    name: "Dosing Skids",
    desc: "Packaged injection skids with pump, vessel, instrumentation, and controls mounted on a painted structural steel frame. Factory tested and certified prior to shipment.",
    spec: { label: "Pump Types", value: "Plunger, Diaphragm" },
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
      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "#0d1f3c" }}>
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          aria-hidden="true"
          style={{ background: "radial-gradient(ellipse 70% 80% at 80% 50%, #1a3d6e 0%, transparent 70%)" }}
        />
        <div className="cx relative py-18 md:py-24">
          <nav className="flex items-center gap-1.5 text-sm text-blue-300 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="opacity-50" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight size={14} className="opacity-50" />
            <span className="text-white font-medium">Chemical Injection</span>
          </nav>

          <div className="eyebrow mb-4">Chemical Injection Systems</div>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl mb-6">
            Precision Chemical Delivery for Pressurized Process Lines
          </h1>

          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            From simple fixed quill assemblies to fully packaged dosing skids, Cosasco chemical
            injection systems are engineered for reliable, accurate delivery of corrosion
            inhibitors, scale inhibitors, biocides, and demulsifiers into live process pipelines
            and vessels.
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
                    About Chemical Injection
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Effective corrosion and scale management begins with reliable chemical delivery.
                    Cosasco injection quills and assemblies are designed to position the injection
                    point at the centerline of the flow stream — away from the pipe wall — ensuring
                    turbulent mixing and uniform inhibitor distribution. Retractable designs allow
                    removal and inspection without shutdown, critical for long-term operability in
                    high-scaling or high-solids environments.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Our packaged dosing skids integrate pump, vessel, instrumentation, and flow
                    control into a single factory-tested unit, minimizing field installation time
                    and ensuring performance from day one. All materials are available in NACE
                    MR0175-compliant grades for sour service environments.
                  </p>

                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="rounded-lg p-5 border-l-4" style={{ background: "#f7f9fc", borderColor: "#e05000" }}>
                      <div className="stat-number">6K</div>
                      <p className="text-sm text-slate-600 mt-1 font-medium">PSI max-rated quill assemblies</p>
                    </div>
                    <div className="rounded-lg p-5 border-l-4" style={{ background: "#f7f9fc", borderColor: "#e05000" }}>
                      <div className="stat-number">100%</div>
                      <p className="text-sm text-slate-600 mt-1 font-medium">Factory pressure tested</p>
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
                  Contact us for sizing calculations, material recommendations, and full engineering drawings.
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
                  Our injection specialists can assist with quill sizing, material selection for sour
                  or high-temperature service, and dosing skid configuration.
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
            <h2 className="text-2xl font-bold" style={{ color: "#0d1f3c" }}>Ready to optimize your chemical injection system?</h2>
            <p className="text-slate-500 mt-1">Request a quote or discuss quill sizing and skid configuration with our engineers.</p>
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
