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
    name: "FieldCom Wireless System",
    desc: "Intrinsically safe wireless data logger with 900 MHz mesh radio for probe readout and transmission across large process facilities. Eliminates cable runs and enables rapid deployment on brownfield sites.",
    spec: { label: "Range", value: "Up to 1,000 m (LOS)" },
  },
  {
    name: "ER Data Loggers",
    desc: "Standalone battery-powered data loggers for ER probe readout with configurable scan intervals from 1 minute to 24 hours. Direct PC download via USB or RS-485 with Bluetooth option.",
    spec: { label: "Memory", value: "500,000 readings" },
  },
  {
    name: "Multiplexer Systems",
    desc: "16- and 32-channel multiplexer units allow a single ER instrument to scan multiple probe channels sequentially, reducing capital cost and complexity for large monitoring installations.",
    spec: { label: "Channels", value: "Up to 32 per unit" },
  },
  {
    name: "Cloud Analytics Platform",
    desc: "Cosasco Connect cloud dashboard aggregates data from all FieldCom nodes and wired loggers into a unified view with configurable trend charts, alarm thresholds, and automated exception reports.",
    spec: { label: "Uptime SLA", value: "99.9%" },
  },
  {
    name: "SCADA Integration",
    desc: "Modbus TCP/RTU and OPC-UA drivers enable direct integration of Cosasco probe data into plant DCS and SCADA platforms. Pre-configured templates available for Honeywell, Emerson, and Yokogawa systems.",
    spec: { label: "Protocols", value: "Modbus, OPC-UA, HART" },
  },
  {
    name: "Portable ER Reader",
    desc: "Handheld battery-powered instrument for periodic manual readout of all Cosasco ER probe types. Auto-identifies probe type and stores up to 10,000 readings for PC download and trending.",
    spec: { label: "Battery Life", value: "40 hours continuous" },
  },
];

const features = [
  "Intrinsically safe (IS) to ATEX Zone 1",
  "Mesh networking — self-healing topology",
  "OPC-UA and Modbus SCADA integration",
  "Encrypted 128-bit AES data transmission",
  "Cloud or on-premise deployment options",
  "Compatible with all Cosasco probe families",
];

const relatedSolutions = [
  { label: "Integrity Management Programs", href: "/solutions/integrity-management" },
  { label: "Remote & Unmanned Facilities", href: "/solutions/remote-monitoring" },
  { label: "Digital Transformation", href: "/solutions/digital" },
  { label: "Offshore Platforms", href: "/solutions/offshore" },
];

const downloads = [
  {
    title: "FieldCom Wireless System Datasheet",
    desc: "Technical specifications and radio configuration guide",
    size: "2.8 MB PDF",
  },
  {
    title: "Cosasco Connect Cloud Platform Overview",
    desc: "Dashboard features, API access, and onboarding guide",
    size: "1.5 MB PDF",
  },
];

export default function DataAcquisitionPage() {
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
            <span className="text-white font-medium">Data Acquisition</span>
          </nav>

          <div className="eyebrow mb-4">Data Acquisition & Connectivity</div>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl mb-6">
            Wireless Loggers, SCADA Integration & Cloud Analytics
          </h1>

          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            FieldCom mesh wireless networks, Ethernet-based data systems, and the Cosasco Connect
            cloud platform centralize corrosion monitoring data from distributed probe networks
            into actionable, real-time asset integrity intelligence.
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
                    About Data Acquisition
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Cosasco&rsquo;s FieldCom wireless system transforms distributed probe networks
                    into a unified, real-time monitoring infrastructure. Self-forming mesh nodes
                    eliminate the cost and complexity of cable routing across large process plants,
                    while the 900 MHz radio frequency ensures reliable communication in challenging
                    RF environments including large metal structures and offshore topsides.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    For operators seeking deeper integration, the Cosasco Connect cloud analytics
                    platform provides trend visualization, configurable alarm management, and
                    automated exception reporting — accessible from any device via secure web
                    browser. Native Modbus TCP/RTU and OPC-UA drivers ensure seamless integration
                    with existing plant DCS and SCADA infrastructure.
                  </p>

                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="rounded-lg p-5 border-l-4" style={{ background: "#f7f9fc", borderColor: "#e05000" }}>
                      <div className="stat-number">1K</div>
                      <p className="text-sm text-slate-600 mt-1 font-medium">m line-of-sight range per node</p>
                    </div>
                    <div className="rounded-lg p-5 border-l-4" style={{ background: "#f7f9fc", borderColor: "#e05000" }}>
                      <div className="stat-number">99.9%</div>
                      <p className="text-sm text-slate-600 mt-1 font-medium">Cloud platform uptime SLA</p>
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
                  Contact us for system architecture consultation, network design, and SCADA integration support.
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
                  Our connectivity specialists can design a FieldCom network for your facility and
                  assist with SCADA integration, data historian configuration, and cloud onboarding.
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
            <h2 className="text-2xl font-bold" style={{ color: "#0d1f3c" }}>Ready to connect your monitoring network?</h2>
            <p className="text-slate-500 mt-1">Request a quote or schedule a FieldCom network design consultation.</p>
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
