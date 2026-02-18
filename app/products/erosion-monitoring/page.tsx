import Link from "next/link";

const products = [
  {
    title: "UT (Ultrasonic) Sensors",
    description:
      "Permanently-mounted ultrasonic transducers deliver continuous, non-intrusive wall thickness monitoring without process interruption. Cosasco UT sensors are engineered for high-temperature and high-pressure piping systems where real-time erosion trending is critical to safe operation.",
    specs: [
      "Operating temperature range: -40°C to 200°C",
      "Wall thickness range: 2 mm to 100 mm",
      "Measurement accuracy: ±0.1 mm",
      "Compatible with carbon steel, stainless, and exotic alloys",
      "Wireless and wired telemetry options",
      "Suitable for insulated and painted pipe surfaces",
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M8 32 Q20 10 32 32" stroke="#1B5EA8" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M12 30 Q20 16 28 30" stroke="#E8500A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M16 28 Q20 22 24 28" stroke="#0F2A4A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <circle cx="20" cy="34" r="3" fill="#E8500A"/>
      </svg>
    ),
  },
  {
    title: "Sand Detection Systems",
    description:
      "Real-time sand and particle detection systems based on acoustic emission and intrusive probe technologies. Cosasco sand detectors provide early warning of erosive solids production, enabling operators to manage production rates and protect downstream equipment before damage occurs.",
    specs: [
      "Acoustic emission (AE) and intrusive probe types",
      "Detects particle sizes from 50 microns",
      "Mass flow rate estimation capability",
      "Alarm thresholds configurable by operator",
      "ATEX / IECEx Zone 1 certified",
      "4-20 mA and digital output options",
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <circle cx="20" cy="20" r="12" stroke="#1B5EA8" strokeWidth="2"/>
        <circle cx="14" cy="16" r="2" fill="#E8500A"/>
        <circle cx="22" cy="13" r="1.5" fill="#0F2A4A"/>
        <circle cx="26" cy="20" r="2" fill="#E8500A"/>
        <circle cx="18" cy="25" r="1.5" fill="#0F2A4A"/>
        <circle cx="12" cy="23" r="1" fill="#E8500A"/>
        <path d="M8 34 L32 34" stroke="#1B5EA8" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Erosion Probes",
    description:
      "Intrusive erosion probes use sacrificial sensing elements to directly measure material loss caused by particle impingement and flow-induced erosion. Designed for installation in elbows, tees, and choke valve outlets — the highest-risk locations in oil and gas production systems.",
    specs: [
      "Flush and cylindrical element geometries",
      "Element materials match host pipe metallurgy",
      "Compatible with Cosasco access fittings",
      "Retrieval under full line pressure",
      "Real-time and periodic measurement modes",
      "Available in explosion-proof housings",
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M20 8 L20 28" stroke="#1B5EA8" strokeWidth="2.5" strokeLinecap="round"/>
        <ellipse cx="20" cy="30" rx="8" ry="3" stroke="#0F2A4A" strokeWidth="2"/>
        <path d="M12 30 L12 34 Q20 36 28 34 L28 30" stroke="#0F2A4A" strokeWidth="1.5"/>
        <path d="M15 12 L20 8 L25 12" stroke="#E8500A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Flush Mounted UT Sensors",
    description:
      "Flush mounted ultrasonic sensors are permanently bonded to the outer pipe surface within a low-profile housing, providing continuous wall thickness surveillance with minimal footprint. Ideal for use under pipe insulation, in confined spaces, or in locations where clamp-on instruments are impractical.",
    specs: [
      "Profile height: less than 15 mm above pipe OD",
      "Individual or array configurations",
      "Bonded epoxy or welded pad mounting",
      "Temperature range: -40°C to 150°C (standard)",
      "High-temperature variant to 350°C available",
      "Multiplexed scanning up to 16 sensors per unit",
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <rect x="6" y="18" width="28" height="10" rx="5" stroke="#1B5EA8" strokeWidth="2"/>
        <rect x="14" y="12" width="12" height="6" rx="2" stroke="#E8500A" strokeWidth="1.5"/>
        <path d="M18 12 L18 8 M22 12 L22 8" stroke="#0F2A4A" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18 6 L22 6" stroke="#E8500A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const relatedSolutions = [
  { label: "Production Flow Assurance", href: "/solutions/flow-assurance" },
  { label: "Choke Valve Monitoring", href: "/solutions/choke-valve" },
  { label: "Subsea Erosion Management", href: "/solutions/subsea" },
  { label: "Corrosion Monitoring Systems", href: "/products/corrosion-monitoring" },
];

export default function ErosionMonitoringPage() {
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
            <span className="text-white font-medium">Erosion Monitoring</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-4">Erosion Monitoring Systems</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Advanced ultrasonic, acoustic, and probe-based erosion detection systems built for high-velocity production environments. Catch erosive wear early — before it becomes a safety or integrity event.
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
                <div className="h-1.5 bg-gradient-to-r from-[#E8500A] to-[#1B5EA8]" />
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
                { label: "Chemical Injection", href: "/products/chemical-injection" },
                { label: "Data Acquisition", href: "/products/data-acquisition" },
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

          <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1B5EA8] rounded-2xl p-6 text-white">
            <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" aria-hidden="true">
                <path d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-bold mb-2">Speak with an Engineer</h3>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Our erosion specialists can help you select and position sensors for maximum detection effectiveness.
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
