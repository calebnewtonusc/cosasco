import Link from "next/link";

const products = [
  {
    title: "Quill Assemblies",
    description:
      "Cosasco quill assemblies are engineered for precise, turbulent-mixed delivery of corrosion inhibitors, biocides, scale inhibitors, and other process chemicals directly into the pipe bore. The quill geometry ensures rapid dispersion across the full cross-sectional flow area, maximizing treatment efficiency.",
    specs: [
      "Carbon steel, 316SS, Duplex, and Alloy 625 materials",
      "Pressure ratings to 6000 psi (415 bar)",
      "Quill lengths to suit pipe diameters from 2 to 48 inches",
      "Perforated and open-end tip designs",
      "Retractable under live line pressure",
      "Compatibility analysis for all chemical types",
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M20 6 L20 30" stroke="#1B5EA8" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="20" cy="32" r="3" stroke="#E8500A" strokeWidth="2"/>
        <path d="M12 20 L28 20" stroke="#0F2A4A" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 16 L16 24" stroke="#E8500A" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M24 16 L24 24" stroke="#E8500A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Injection Valves",
    description:
      "High-integrity injection valves provide a positive, bubble-tight shutoff between the chemical injection line and the process pipe. Cosasco injection check valves prevent reverse flow of process fluids into chemical lines, protecting chemical storage systems and ensuring continuous dosing under variable back-pressure conditions.",
    specs: [
      "Spring-loaded check valve design",
      "ANSI Class 600 to 2500 pressure ratings",
      "Cracking pressure: 0.5 to 5 psi (adjustable)",
      "Body materials: 316SS, Duplex, Inconel",
      "Threaded and flanged end connections",
      "Fugitive emission-tested packing options",
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M8 20 L32 20" stroke="#0F2A4A" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="8" stroke="#1B5EA8" strokeWidth="2"/>
        <path d="M16 20 L20 16 L24 20" stroke="#E8500A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 16 L20 24" stroke="#E8500A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Chemical Dosing Systems",
    description:
      "Automated chemical dosing systems integrate metering pump technology, flow measurement, and process control to deliver precise inhibitor volumes matched to real-time flow conditions. From skid-mounted packages to panel-controlled multi-point injection, Cosasco dosing systems eliminate under- and over-treatment.",
    specs: [
      "Flow-proportional and time-based dosing modes",
      "Capacity range: 0.1 to 500 liters per hour",
      "PLC-controlled with SCADA interface",
      "Dual-pump redundancy configurations",
      "Chemical tank level monitoring and alarms",
      "ATEX Zone 2 rated enclosures standard",
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <rect x="8" y="10" width="10" height="16" rx="2" stroke="#1B5EA8" strokeWidth="2"/>
        <rect x="22" y="14" width="10" height="12" rx="2" stroke="#1B5EA8" strokeWidth="2"/>
        <path d="M18 18 L22 18" stroke="#E8500A" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M32 20 L36 20" stroke="#0F2A4A" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M36 20 L36 30 L20 30 L20 26" stroke="#0F2A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Pulsation Dampeners",
    description:
      "Pulsation dampeners smooth the pressure fluctuations inherent in positive-displacement metering pumps, ensuring a steady, consistent chemical flow to the injection quill. Without dampening, pulsating flow disrupts chemical dispersion and can cause injection check valve chatter and premature wear.",
    specs: [
      "Bladder, diaphragm, and piston dampener types",
      "Volume: 0.1 to 20 liters",
      "Maximum working pressure: 6000 psi",
      "Materials: SS316, Hastelloy, PVDF lined",
      "In-line and side-mounted configurations",
      "Pre-charge pressure factory-set to application",
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <ellipse cx="20" cy="20" rx="14" ry="10" stroke="#1B5EA8" strokeWidth="2"/>
        <ellipse cx="20" cy="20" rx="8" ry="5" stroke="#E8500A" strokeWidth="1.5"/>
        <path d="M6 20 L4 20 M34 20 L36 20" stroke="#0F2A4A" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Injection Quills",
    description:
      "Injection quills are the final point of chemical delivery into the process stream. Cosasco offers a full range of quill designs — from simple open-end tubes to multi-point sparger quills — engineered to optimize mixing for specific pipe sizes, flow velocities, and chemical viscosities.",
    specs: [
      "Single-point and multi-point sparger designs",
      "Custom quill lengths per pipe diameter",
      "316SS standard; Alloy 625 and PTFE-lined available",
      "Injection rates from milliliters to liters per minute",
      "Integral check valve tip option",
      "Retractable versions for live-line service",
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M20 4 L20 28" stroke="#1B5EA8" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M14 26 L20 32 L26 26" stroke="#E8500A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 16 L16 16 M24 16 L28 16" stroke="#0F2A4A" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="10" r="3" stroke="#E8500A" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

const relatedSolutions = [
  { label: "Corrosion Inhibitor Programs", href: "/solutions/inhibitor" },
  { label: "Scale Management", href: "/solutions/scale" },
  { label: "Biocide Treatment Systems", href: "/solutions/biocide" },
  { label: "Chemical Compatibility Testing", href: "/services/lab" },
];

export default function ChemicalInjectionPage() {
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
            <span className="text-white font-medium">Chemical Injection</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-4">Chemical Injection Systems</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Reliable, precision-engineered chemical injection hardware for corrosion inhibitor, biocide, scale inhibitor, and hydrate inhibitor delivery in oil and gas, petrochemical, and water treatment applications.
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
              Get expert guidance on chemical injection design, quill sizing, and dosing rates for your process.
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
