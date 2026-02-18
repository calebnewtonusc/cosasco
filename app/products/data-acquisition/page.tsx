import Link from "next/link";

const products = [
  {
    title: "FieldCom Systems",
    description:
      "FieldCom is Cosasco's flagship field data communication platform, purpose-built for corrosion and erosion monitoring networks. It bridges the gap between field instruments — ER probes, LPR monitors, UT sensors — and plant control systems, providing reliable, low-latency data delivery across demanding industrial environments.",
    specs: [
      "Supports up to 32 monitoring points per unit",
      "Wired (RS-485/Modbus) and wireless (ISA100) options",
      "HART and Foundation Fieldbus compatible",
      "Operating temperature: -40°C to 70°C",
      "ATEX Zone 1 and Zone 2 certified enclosures",
      "DIN rail or panel mounting; IP66/68 rated",
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <rect x="6" y="12" width="28" height="18" rx="3" stroke="#1B5EA8" strokeWidth="2"/>
        <path d="M12 22 L16 18 L20 22 L24 16 L28 20" stroke="#E8500A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 30 L10 34 M20 30 L20 34 M30 30 L30 34" stroke="#0F2A4A" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="16" r="1.5" fill="#E8500A"/>
      </svg>
    ),
  },
  {
    title: "Data Loggers",
    description:
      "Cosasco data loggers provide autonomous, battery-powered recording of corrosion measurement data in remote or offshore locations where continuous telemetry is not available. Rugged and field-serviceable, they store months of instrument readings for scheduled download or wireless burst transmission.",
    specs: [
      "Storage capacity: up to 500,000 data records",
      "Battery life: 2 to 5 years (application dependent)",
      "Bluetooth and NFC near-field download options",
      "Multi-channel: 1 to 8 input channels",
      "Configurable sampling intervals: 1 min to 24 hrs",
      "IP67 rated; stainless steel enclosure options",
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <rect x="10" y="8" width="20" height="26" rx="3" stroke="#1B5EA8" strokeWidth="2"/>
        <path d="M15 16 L25 16 M15 21 L25 21 M15 26 L21 26" stroke="#E8500A" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="14" y="11" width="12" height="3" rx="1" fill="#0F2A4A" opacity="0.3"/>
      </svg>
    ),
  },
  {
    title: "Software Solutions",
    description:
      "Cosasco's corrosion data management software transforms raw monitoring data into structured integrity intelligence. From trend visualization to risk-based inspection (RBI) workflows, our software platforms provide the analytical layer that turns measurements into maintenance decisions.",
    specs: [
      "Web-based dashboard with role-based access control",
      "API integration with SAP, Maximo, and OSIsoft PI",
      "Automated corrosion rate and trend calculations",
      "Customizable alarm and notification rules",
      "Inspection history and coupon records management",
      "Exportable reports: PDF, Excel, and CSV formats",
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <rect x="4" y="8" width="32" height="22" rx="3" stroke="#1B5EA8" strokeWidth="2"/>
        <path d="M4 28 L36 28" stroke="#0F2A4A" strokeWidth="1"/>
        <path d="M16 32 L24 32" stroke="#1B5EA8" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 16 L14 20 L19 14 L25 18 L31 12" stroke="#E8500A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="16" r="1.5" fill="#E8500A"/>
        <circle cx="31" cy="12" r="1.5" fill="#E8500A"/>
      </svg>
    ),
  },
  {
    title: "Remote Monitoring",
    description:
      "Cosasco's remote monitoring solutions extend real-time corrosion visibility to assets in unmanned, subsea, or geographically dispersed locations. Satellite, cellular, and RF mesh network options ensure data continuity regardless of infrastructure constraints, enabling proactive integrity management from any location.",
    specs: [
      "4G LTE, satellite, and LoRaWAN connectivity",
      "Edge computing for local alarm processing",
      "Solar, battery, and mains power options",
      "Cyber-secure data encryption (AES-256)",
      "Cloud platform with 99.9% SLA uptime",
      "OPC-UA and REST API for SCADA integration",
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M20 30 L20 22" stroke="#1B5EA8" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 26 Q20 12 26 26" stroke="#E8500A" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M9 30 Q20 4 31 30" stroke="#1B5EA8" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
        <circle cx="20" cy="32" r="3" fill="#0F2A4A"/>
      </svg>
    ),
  },
];

const relatedSolutions = [
  { label: "Integrated Integrity Management", href: "/solutions/integrity" },
  { label: "Offshore Remote Monitoring", href: "/solutions/offshore-remote" },
  { label: "Pipeline SCADA Integration", href: "/solutions/scada" },
  { label: "ER Probes & Instruments", href: "/products/corrosion-monitoring" },
];

export default function DataAcquisitionPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Nav */}
      <nav className="bg-[#0F2A4A] border-b border-[#1B5EA8]/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-white text-xl font-bold tracking-wide">COSASCO</Link>
          <div className="flex gap-8 text-sm text-slate-300">
            <Link href="/products" className="text-white font-semibold border-b-2 border-[#E8500A] pb-0.5">Products</Link>
            <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0F2A4A 0%, #1B5EA8 100%)" }} className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 800 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <circle cx="750" cy="150" r="200" fill="#E8500A"/>
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <nav className="flex items-center gap-2 text-sm text-blue-300 mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3" aria-hidden="true">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3" aria-hidden="true">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-white font-medium">Data Acquisition & Connectivity</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-4">Data Acquisition & Connectivity</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Connect your monitoring instruments to real-time intelligence. Cosasco's data acquisition hardware and software platforms turn field measurements into structured, actionable corrosion management data — wherever your assets are located.
          </p>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12">
        <main className="flex-1 min-w-0">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {products.map((product) => (
              <article
                key={product.title}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#1B5EA8]/40 transition-all duration-300 flex flex-col overflow-hidden"
              >
                <div className="h-1.5 bg-gradient-to-r from-[#1B5EA8] to-[#E8500A]" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0">
                      {product.icon}
                    </div>
                    <h2 className="text-lg font-bold text-[#0F2A4A] leading-snug mt-1">{product.title}</h2>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{product.description}</p>
                  <div className="bg-slate-50 rounded-xl p-4 mb-5 flex-1">
                    <p className="text-xs font-bold text-[#0F2A4A] uppercase tracking-widest mb-3">Key Specifications</p>
                    <ul className="space-y-1.5">
                      {product.specs.map((spec) => (
                        <li key={spec} className="flex items-start gap-2 text-xs text-slate-700">
                          <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3 mt-0.5 flex-shrink-0 text-[#E8500A]" aria-hidden="true">
                            <path d="M2 6l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full mt-auto bg-[#0F2A4A] hover:bg-[#1B5EA8] text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                      <path d="M2 4h12v8a2 2 0 01-2 2H4a2 2 0 01-2-2V4z" stroke="currentColor" strokeWidth="1.2"/>
                      <path d="M5 4V3a3 3 0 016 0v1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                    Request Info
                  </button>
                </div>
              </article>
            ))}
          </div>
        </main>

        {/* Sidebar */}
        <aside className="lg:w-72 flex-shrink-0 space-y-6">
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
            <h3 className="text-sm font-bold text-[#0F2A4A] uppercase tracking-widest mb-4">Related Solutions</h3>
            <ul className="space-y-2">
              {relatedSolutions.map((sol) => (
                <li key={sol.label}>
                  <Link href={sol.href} className="flex items-center gap-2 text-sm text-slate-700 hover:text-[#1B5EA8] transition-colors py-1">
                    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-[#E8500A] flex-shrink-0" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {sol.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h3 className="text-sm font-bold text-[#0F2A4A] uppercase tracking-widest mb-4">Other Categories</h3>
            <ul className="space-y-2">
              {[
                { label: "Corrosion Monitoring", href: "/products/corrosion-monitoring" },
                { label: "Erosion Monitoring", href: "/products/erosion-monitoring" },
                { label: "Chemical Injection", href: "/products/chemical-injection" },
              ].map((cat) => (
                <li key={cat.label}>
                  <Link href={cat.href} className="flex items-center gap-2 text-sm text-slate-700 hover:text-[#1B5EA8] transition-colors py-1">
                    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-[#1B5EA8] flex-shrink-0" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Integration logos placeholder */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h3 className="text-sm font-bold text-[#0F2A4A] uppercase tracking-widest mb-4">Integrations</h3>
            <div className="grid grid-cols-2 gap-2">
              {["Modbus", "OPC-UA", "HART", "OSIsoft PI", "SCADA", "REST API"].map((integration) => (
                <span
                  key={integration}
                  className="text-xs text-center py-1.5 px-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 font-medium"
                >
                  {integration}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1B5EA8] rounded-2xl p-6 text-white">
            <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" aria-hidden="true">
                <path d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-bold mb-2">Speak with an Engineer</h3>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Discuss your data architecture, integration requirements, and connectivity constraints with a Cosasco specialist.
            </p>
            <Link href="/contact" className="block text-center bg-[#E8500A] hover:bg-[#c94208] text-white font-semibold text-sm py-2.5 px-4 rounded-lg transition-colors">
              Contact Us
            </Link>
          </div>
        </aside>
      </div>

      <footer className="bg-[#0a1e35] py-8 px-6 text-center text-slate-500 text-sm">
        <p>© 2026 Cosasco. All rights reserved.</p>
      </footer>
    </div>
  );
}
