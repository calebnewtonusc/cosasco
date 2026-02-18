import Link from "next/link";

const products = [
  {
    title: "Access Fittings & Retrieval Equipment",
    description:
      "Cosasco access fittings are the industry standard for safe, reliable insertion and retrieval of corrosion monitoring instruments under live process conditions. Engineered for use at full line pressure without shutdown, they form the backbone of any intrusive monitoring program.",
    specs: [
      "Pressure ratings up to 6000 psi (415 bar)",
      "Temperature range: -60°F to 1000°F (-51°C to 538°C)",
      "ANSI / ASME B16.5 flange compatibility",
      "Materials: Carbon steel, 316SS, Duplex, Alloy 625",
      "Available in threaded and flanged configurations",
      "Hydraulic and mechanical retrieval tool options",
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <circle cx="20" cy="20" r="8" stroke="#1B5EA8" strokeWidth="2"/>
        <path d="M20 4 L20 12 M20 28 L20 36 M4 20 L12 20 M28 20 L36 20" stroke="#0F2A4A" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="3" fill="#E8500A"/>
      </svg>
    ),
  },
  {
    title: "Corrosion Coupons & Weight Loss Analysis",
    description:
      "Weight loss corrosion coupons provide a simple, cost-effective baseline measurement of general and localized corrosion. Cosasco coupons are precision-manufactured to NACE SP0775 standards and paired with comprehensive laboratory analysis services for accurate corrosion rate determination.",
    specs: [
      "Flat, cylindrical, and disc coupon geometries",
      "Material options: CS, SS, duplex, aluminum, copper alloys",
      "NACE SP0775 compliant manufacturing",
      "Exposure periods: 30 to 180+ days",
      "Paired laboratory analysis with certified reports",
      "Coupon holders for multi-coupon strings",
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <rect x="8" y="14" width="24" height="12" rx="2" stroke="#1B5EA8" strokeWidth="2"/>
        <path d="M14 14 L14 10 M26 14 L26 10" stroke="#0F2A4A" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 26 L14 30 M26 26 L26 30" stroke="#0F2A4A" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M13 20 L16 18 L20 22 L24 17 L27 20" stroke="#E8500A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "ER (Electrical Resistance) Probes",
    description:
      "Electrical Resistance probes provide continuous, real-time measurement of metal loss without process shutdown. As the sensing element corrodes, its resistance increases proportionally, delivering cumulative corrosion data that complements coupon analysis with immediate trend visibility.",
    specs: [
      "Element types: flush, cylindrical, wire, and strip",
      "Measurement range: 0.001 to 1.0 mm metal loss",
      "Process temperatures to 200°C (392°F)",
      "Compatible with portable and fixed data loggers",
      "HART and 4-20 mA output options",
      "Hazardous area (ATEX / IECEx) certified variants",
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M6 20 L12 20" stroke="#0F2A4A" strokeWidth="2" strokeLinecap="round"/>
        <rect x="12" y="15" width="16" height="10" rx="2" stroke="#1B5EA8" strokeWidth="2"/>
        <path d="M28 20 L34 20" stroke="#0F2A4A" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 20 L19 16 L22 24 L25 20" stroke="#E8500A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Intrusive Corrosion Monitors",
    description:
      "Intrusive corrosion monitors are permanently installed sensing elements that provide ongoing, in-situ measurement of corrosion activity. Designed for harsh process environments, these instruments deliver the highest sensitivity for early detection of accelerated corrosion events.",
    specs: [
      "Linear Polarization Resistance (LPR) technology",
      "Galvanic and multielectrode array options",
      "Compatible with Cosasco retrieval systems",
      "Real-time electrochemical corrosion rate data",
      "Temperature and pressure compensation",
      "Subsea and high-pressure variants available",
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M20 6 L20 22" stroke="#1B5EA8" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="20" cy="26" r="6" stroke="#E8500A" strokeWidth="2"/>
        <path d="M8 34 L32 34" stroke="#0F2A4A" strokeWidth="2" strokeLinecap="round"/>
        <path d="M15 10 L20 6 L25 10" stroke="#0F2A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Non-Intrusive Corrosion Monitors",
    description:
      "Non-intrusive monitoring systems enable wall thickness measurement and corrosion assessment without breaking pipeline integrity. Ideal for inaccessible locations, high-risk environments, or pipelines where intrusive installation is not permitted.",
    specs: [
      "Ultrasonic thickness measurement (UT)",
      "Magnetic Flux Leakage (MFL) compatible sensors",
      "Permanent and semi-permanent mounting options",
      "Pipe diameters: 1 inch to 48 inch",
      "Wireless data transmission options",
      "Suitable for insulated and cladded pipelines",
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M6 20 Q20 10 34 20" stroke="#1B5EA8" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M6 20 Q20 30 34 20" stroke="#1B5EA8" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M10 17 Q20 12 30 17" stroke="#E8500A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <circle cx="20" cy="20" r="3" fill="#0F2A4A"/>
      </svg>
    ),
  },
  {
    title: "Pipe Penetration Fittings",
    description:
      "Cosasco pipe penetration fittings provide pressure-tight, leak-proof entry points for instrumentation leads and sensor cables. Manufactured to meet stringent process integrity requirements, these fittings ensure a secure seal from installation through the full service life of the monitor.",
    specs: [
      "Compression, welded, and NPT thread types",
      "Pressure-rated to match host fitting assemblies",
      "Single and multi-conductor cable entry options",
      "316SS, Hastelloy, and Inconel material options",
      "UL/CSA listed electrical seal fittings available",
      "Custom configurations to project specification",
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <circle cx="20" cy="20" r="12" stroke="#1B5EA8" strokeWidth="2"/>
        <circle cx="20" cy="20" r="5" stroke="#E8500A" strokeWidth="2"/>
        <line x1="20" y1="8" x2="20" y2="4" stroke="#0F2A4A" strokeWidth="2" strokeLinecap="round"/>
        <line x1="20" y1="36" x2="20" y2="32" stroke="#0F2A4A" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const relatedSolutions = [
  { label: "Pipeline Integrity Management", href: "/solutions/pipeline" },
  { label: "Offshore Platform Monitoring", href: "/solutions/offshore" },
  { label: "Refinery Corrosion Control", href: "/solutions/refinery" },
  { label: "Chemical Injection Systems", href: "/products/chemical-injection" },
];

export default function CorrosionMonitoringPage() {
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
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-blue-300 mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3" aria-hidden="true">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3" aria-hidden="true">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-white font-medium">Corrosion Monitoring</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-4">Corrosion Monitoring Systems</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            From coupon analysis to real-time electrochemical monitoring, Cosasco offers a complete range of corrosion measurement instruments and access equipment for pipelines, pressure vessels, and process facilities worldwide.
          </p>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12">
        {/* Product grid */}
        <main className="flex-1 min-w-0">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {products.map((product) => (
              <article
                key={product.title}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#1B5EA8]/40 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Card top bar */}
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
          {/* Related solutions */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
            <h3 className="text-sm font-bold text-[#0F2A4A] uppercase tracking-widest mb-4">Related Solutions</h3>
            <ul className="space-y-2">
              {relatedSolutions.map((sol) => (
                <li key={sol.label}>
                  <Link
                    href={sol.href}
                    className="flex items-center gap-2 text-sm text-slate-700 hover:text-[#1B5EA8] transition-colors py-1"
                  >
                    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 text-[#E8500A] flex-shrink-0" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {sol.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other product categories */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h3 className="text-sm font-bold text-[#0F2A4A] uppercase tracking-widest mb-4">Other Categories</h3>
            <ul className="space-y-2">
              {[
                { label: "Erosion Monitoring", href: "/products/erosion-monitoring" },
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

          {/* Expert contact */}
          <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1B5EA8] rounded-2xl p-6 text-white">
            <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" aria-hidden="true">
                <path d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-bold mb-2">Speak with an Engineer</h3>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Our corrosion specialists can recommend the right monitoring solution for your application and process conditions.
            </p>
            <Link
              href="/contact"
              className="block text-center bg-[#E8500A] hover:bg-[#c94208] text-white font-semibold text-sm py-2.5 px-4 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="bg-[#0a1e35] py-8 px-6 text-center text-slate-500 text-sm">
        <p>© 2026 Cosasco. All rights reserved.</p>
      </footer>
    </div>
  );
}
