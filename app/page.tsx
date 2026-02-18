import Link from "next/link";

// ─── Icon Components ─────────────────────────────────────────────────────────

function OilGasIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="4" width="8" height="20" rx="2" fill="currentColor" opacity="0.9"/>
      <path d="M16 24h16l4 8H12l4-8z" fill="currentColor"/>
      <rect x="10" y="32" width="28" height="6" rx="2" fill="currentColor" opacity="0.7"/>
      <path d="M6 38h36v2H6z" fill="currentColor" opacity="0.4"/>
      <circle cx="24" cy="14" r="3" fill="white" opacity="0.3"/>
    </svg>
  );
}

function PetrochemIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="20" width="8" height="22" rx="2" fill="currentColor"/>
      <rect x="20" y="14" width="8" height="28" rx="2" fill="currentColor" opacity="0.9"/>
      <rect x="32" y="24" width="8" height="18" rx="2" fill="currentColor" opacity="0.8"/>
      <path d="M10 20 Q14 10 20 14" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M24 14 Q30 8 36 24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <rect x="6" y="40" width="36" height="4" rx="1" fill="currentColor" opacity="0.5"/>
    </svg>
  );
}

function WaterIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 6 C24 6 10 20 10 30 C10 37.7 16.3 44 24 44 C31.7 44 38 37.7 38 30 C38 20 24 6 24 6Z" fill="currentColor"/>
      <path d="M18 30 C18 26 21 22 24 20" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

function ChemicalIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6h12v16l10 20H8L18 22V6z" fill="currentColor"/>
      <rect x="16" y="4" width="16" height="4" rx="1" fill="currentColor" opacity="0.6"/>
      <circle cx="20" cy="32" r="2" fill="white" opacity="0.5"/>
      <circle cx="28" cy="36" r="1.5" fill="white" opacity="0.4"/>
      <circle cx="24" cy="40" r="1.5" fill="white" opacity="0.3"/>
    </svg>
  );
}

function PulpPaperIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="28" height="34" rx="2" fill="currentColor" opacity="0.5"/>
      <rect x="6" y="6" width="28" height="34" rx="2" fill="currentColor" opacity="0.7"/>
      <rect x="10" y="14" width="20" height="2" rx="1" fill="white" opacity="0.6"/>
      <rect x="10" y="20" width="16" height="2" rx="1" fill="white" opacity="0.5"/>
      <rect x="10" y="26" width="18" height="2" rx="1" fill="white" opacity="0.4"/>
      <rect x="10" y="32" width="12" height="2" rx="1" fill="white" opacity="0.3"/>
    </svg>
  );
}

function UtilitiesIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4 L28 18 H40 L30 26 L34 40 L24 32 L14 40 L18 26 L8 18 H20 Z" fill="currentColor"/>
      <path d="M24 12 L26 20 H34 L27 25 L29 33 L24 29 L19 33 L21 25 L14 20 H22 Z" fill="white" opacity="0.25"/>
    </svg>
  );
}

function MonitoringIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="40" height="26" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <path d="M14 28 L20 20 L26 24 L32 14 L36 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <rect x="16" y="34" width="16" height="3" rx="1" fill="currentColor" opacity="0.5"/>
      <rect x="12" y="37" width="24" height="3" rx="1" fill="currentColor" opacity="0.4"/>
    </svg>
  );
}

function ErosionIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <path d="M16 24 Q20 16 24 20 Q28 24 32 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <circle cx="24" cy="24" r="3" fill="currentColor"/>
      <path d="M24 8 L24 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M24 36 L24 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 24 L12 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M36 24 L40 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function InjectionIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="4" width="8" height="28" rx="4" fill="currentColor" opacity="0.85"/>
      <rect x="16" y="14" width="16" height="8" rx="2" fill="currentColor"/>
      <path d="M24 32 L20 44 H28 Z" fill="currentColor" opacity="0.7"/>
      <rect x="10" y="18" width="8" height="3" rx="1.5" fill="currentColor" opacity="0.5"/>
      <rect x="30" y="18" width="8" height="3" rx="1.5" fill="currentColor" opacity="0.5"/>
    </svg>
  );
}

function DataIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="30" width="10" height="14" rx="2" fill="currentColor"/>
      <rect x="19" y="20" width="10" height="24" rx="2" fill="currentColor" opacity="0.85"/>
      <rect x="34" y="10" width="10" height="34" rx="2" fill="currentColor" opacity="0.7"/>
      <path d="M9 30 L24 20 L39 10" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" opacity="0.4"/>
    </svg>
  );
}

function ExpertiseIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="16" r="10" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <path d="M14 16 L20 22 L34 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M12 30 Q8 44 24 44 Q40 44 36 30" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
    </svg>
  );
}

function LifecycleIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 8 C32 8 40 14 40 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M40 24 C40 34 32 40 24 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8"/>
      <path d="M24 40 C16 40 8 34 8 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6"/>
      <path d="M8 24 C8 14 16 8 24 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4"/>
      <polygon points="40,18 44,24 40,24" fill="currentColor"/>
      <circle cx="24" cy="24" r="4" fill="currentColor"/>
    </svg>
  );
}

function ApplicationIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="18" height="18" rx="3" fill="currentColor"/>
      <rect x="26" y="4" width="18" height="18" rx="3" fill="currentColor" opacity="0.7"/>
      <rect x="4" y="26" width="18" height="18" rx="3" fill="currentColor" opacity="0.6"/>
      <rect x="26" y="26" width="18" height="18" rx="3" fill="currentColor" opacity="0.85"/>
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"/>
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const industries = [
  {
    name: "Oil & Gas",
    slug: "oil-and-gas",
    icon: <OilGasIcon />,
    description: "Corrosion monitoring and chemical injection solutions for upstream, midstream, and downstream operations.",
  },
  {
    name: "Petrochemical",
    slug: "petrochemical",
    icon: <PetrochemIcon />,
    description: "Protecting complex refinery and petrochemical plant infrastructure against aggressive process environments.",
  },
  {
    name: "Water Treatment",
    slug: "water-treatment",
    icon: <WaterIcon />,
    description: "Ensuring pipeline and asset integrity across potable water, wastewater, and desalination facilities.",
  },
  {
    name: "Chemical Processing",
    slug: "chemical-processing",
    icon: <ChemicalIcon />,
    description: "Erosion and corrosion management for reactors, vessels, and transfer systems handling corrosive media.",
  },
  {
    name: "Pulp & Paper",
    slug: "pulp-and-paper",
    icon: <PulpPaperIcon />,
    description: "Monitoring solutions that extend equipment life in highly corrosive bleaching and digesting processes.",
  },
  {
    name: "Utilities",
    slug: "utilities",
    icon: <UtilitiesIcon />,
    description: "Reliable corrosion management for power generation, cooling water, and district energy systems.",
  },
];

const productCategories = [
  {
    name: "Corrosion Monitoring",
    slug: "corrosion-monitoring",
    icon: <MonitoringIcon />,
    description: "ER probes, corrosion coupons, and access fittings designed for continuous, real-time measurement in the most demanding environments.",
  },
  {
    name: "Erosion Monitoring",
    slug: "erosion-monitoring",
    icon: <ErosionIcon />,
    description: "Ultrasonic thickness sensors and sand detection systems for early identification of erosive damage in pipelines and vessels.",
  },
  {
    name: "Chemical Injection",
    slug: "chemical-injection",
    icon: <InjectionIcon />,
    description: "Quill assemblies, injection quills, and isolation valves engineered for safe, precise chemical dosing under full operating pressure.",
  },
  {
    name: "Data Acquisition",
    slug: "data-acquisition",
    icon: <DataIcon />,
    description: "FieldCom wireless systems and data loggers that aggregate corrosion data and deliver actionable insights to your control room.",
  },
];

const stats = [
  { value: "70+", label: "Years of Expertise" },
  { value: "Global", label: "Market Presence" },
  { value: "1000+", label: "Product Configurations" },
  { value: "6", label: "Critical Industries" },
];

const whyPoints = [
  {
    icon: <ExpertiseIcon />,
    title: "Proven Expertise",
    description:
      "Over seven decades of hands-on application knowledge across the most challenging industrial environments on the planet. Our engineers have seen it all.",
  },
  {
    icon: <LifecycleIcon />,
    title: "Full Lifecycle Support",
    description:
      "From initial system design through installation, commissioning, calibration, and field service — Cosasco supports your program at every stage.",
  },
  {
    icon: <ApplicationIcon />,
    title: "Application-Based Solutions",
    description:
      "We don't sell off-the-shelf. Every solution is matched to your specific process chemistry, pressures, temperatures, and regulatory requirements.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white font-sans">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0F2A4A 0%, #0d2240 30%, #1B5EA8 70%, #0F2A4A 100%)",
        }}
      >
        {/* Grid texture overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Diagonal accent */}
        <div
          className="absolute bottom-0 right-0 w-2/3 h-full opacity-10"
          style={{
            background:
              "linear-gradient(135deg, transparent 40%, #E8500A 100%)",
          }}
        />

        {/* Orange top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "#E8500A" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
          {/* Badge row */}
          <div className="flex items-center gap-3 mb-8">
            <span
              className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border"
              style={{ borderColor: "#E8500A", color: "#E8500A" }}
            >
              Since 1952
            </span>
            <span className="text-white/40 text-sm">|</span>
            <span className="text-white/60 text-sm tracking-wide">Santa Fe Springs, CA</span>
          </div>

          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight max-w-4xl mb-6">
            Protecting Critical{" "}
            <span style={{ color: "#E8500A" }}>Infrastructure</span>{" "}
            for Over 70 Years
          </h1>

          <p className="text-white/75 text-xl lg:text-2xl max-w-2xl mb-12 leading-relaxed font-light">
            Advanced corrosion and erosion detection, monitoring systems, and chemical injection
            solutions trusted by industry leaders worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-20">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white text-base transition-all duration-200 hover:brightness-110 hover:shadow-lg hover:-translate-y-0.5"
              style={{ background: "#E8500A" }}
            >
              Explore Products
              <ArrowRightIcon />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white text-base border-2 transition-all duration-200 hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.5)" }}
            >
              Find Your Solution
              <ArrowRightIcon />
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6">
            {[
              { label: "70+ Years Experience", icon: "◈" },
              { label: "Global Leader", icon: "◈" },
              { label: "ISO Certified", icon: "◈" },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2.5 px-5 py-3 rounded-lg"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <span style={{ color: "#E8500A" }} className="text-lg">{badge.icon}</span>
                <span className="text-white/85 text-sm font-medium tracking-wide">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-white/60 animate-pulse" />
        </div>
      </section>

      {/* ── INDUSTRIES GRID ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: "#E8500A" }}>
              Sector Coverage
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight" style={{ color: "#0F2A4A" }}>
              Trusted Across Critical Industries
            </h2>
            <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
              Cosasco solutions are engineered for the environments where failure is not an option.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/solutions/${industry.slug}`}
                className="group relative flex flex-col bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                style={{ border: "1px solid #e5e7eb" }}
              >
                {/* Top accent bar on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: "#E8500A" }}
                />

                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-white transition-colors duration-300"
                  style={{ background: "#1B5EA8" }}
                >
                  {industry.icon}
                </div>

                <h3 className="text-xl font-bold mb-3" style={{ color: "#0F2A4A" }}>
                  {industry.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                  {industry.description}
                </p>

                <div
                  className="flex items-center gap-1.5 mt-6 text-sm font-semibold transition-colors duration-200 group-hover:gap-2.5"
                  style={{ color: "#1B5EA8" }}
                >
                  Learn More <ArrowRightIcon />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES ───────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: "#E8500A" }}>
              Product Portfolio
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight" style={{ color: "#0F2A4A" }}>
              Complete Corrosion Management Solutions
            </h2>
            <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
              From sensing elements to full data acquisition platforms — everything you need in one program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="group flex gap-6 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0 text-white"
                  style={{ background: "linear-gradient(135deg, #0F2A4A 0%, #1B5EA8 100%)" }}
                >
                  {cat.icon}
                </div>

                <div className="flex flex-col flex-grow min-w-0">
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#0F2A4A" }}>
                    {cat.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                    {cat.description}
                  </p>
                  <div
                    className="flex items-center gap-1.5 mt-5 text-sm font-semibold transition-all duration-200 group-hover:gap-2.5"
                    style={{ color: "#E8500A" }}
                  >
                    Browse Products <ArrowRightIcon />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BANNER ─────────────────────────────────────────────────────── */}
      <section style={{ background: "#0F2A4A" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.08)" }}>
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-12 px-6 text-center"
                style={{ background: "#0F2A4A" }}
              >
                <span
                  className="text-5xl lg:text-6xl font-black tracking-tight mb-2"
                  style={{ color: i === 0 || i === 2 ? "#E8500A" : "white" }}
                >
                  {stat.value}
                </span>
                <span className="text-white/60 text-sm font-medium tracking-widest uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY COSASCO ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: "#E8500A" }}>
              Our Difference
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight" style={{ color: "#0F2A4A" }}>
              Why Industry Leaders Choose Cosasco
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyPoints.map((point) => (
              <div
                key={point.title}
                className="flex flex-col items-center text-center p-10 rounded-2xl bg-white"
                style={{ border: "1px solid #e5e7eb" }}
              >
                <div
                  className="w-18 h-18 w-20 h-20 rounded-2xl flex items-center justify-center mb-7 text-white"
                  style={{ background: "linear-gradient(135deg, #1B5EA8 0%, #0F2A4A 100%)" }}
                >
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: "#0F2A4A" }}>
                  {point.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────────── */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(135deg, #E8500A 0%, #c94008 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Ready to protect your infrastructure?
            </h2>
            <p className="mt-4 text-white/80 text-lg max-w-xl">
              Speak with a Cosasco corrosion specialist to design the right monitoring and injection program for your facility.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-10 py-5 rounded-xl font-bold text-base transition-all duration-200 hover:brightness-95 hover:shadow-2xl hover:-translate-y-0.5"
              style={{ background: "#0F2A4A", color: "white" }}
            >
              Contact Our Experts
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER STRIP ─────────────────────────────────────────────────────── */}
      <footer style={{ background: "#0a1f38" }} className="py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Cosasco — Santa Fe Springs, CA. All rights reserved.
          </p>
          <div className="flex gap-6 text-white/40 text-sm">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-white/70 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>

    </main>
  );
}
