import Link from "next/link";
import {
  Shield,
  Activity,
  Droplets,
  BarChart2,
  ChevronRight,
  CheckCircle,
  Download,
  ArrowRight,
  Phone,
} from "lucide-react";

const industries = [
  { label: "All Products", href: "/products" },
  { label: "Oil & Gas", href: "/products?industry=oil-gas" },
  { label: "Petrochemical", href: "/products?industry=petrochemical" },
  { label: "Water Treatment", href: "/products?industry=water-treatment" },
  { label: "Chemical Processing", href: "/products?industry=chemical-processing" },
  { label: "Pulp & Paper", href: "/products?industry=pulp-paper" },
  { label: "Utilities", href: "/products?industry=utilities" },
];

const categories = [
  {
    icon: Shield,
    title: "Corrosion Monitoring",
    href: "/products/corrosion-monitoring",
    desc: "Industry-proven electrical resistance and electrochemical monitoring systems for continuous and periodic corrosion measurement across all process environments.",
    products: [
      "ER Probes (Straight, Flush Mount, Retractable)",
      "LPR Monitors",
      "Access Fittings (1\" to 3\")",
      "Corrosion Coupons & Racks",
      "Pipe Penetration Fittings",
    ],
  },
  {
    icon: Activity,
    title: "Erosion Monitoring",
    href: "/products/erosion-monitoring",
    desc: "Sand and particle detection systems, ultrasonic wall thickness monitoring, and intrusive erosion probes for high-velocity flow protection.",
    products: [
      "Sand & Erosion Probes",
      "UT Transducers (permanent and temp)",
      "Intrusive ER Erosion Systems",
      "Pipe Wall Mapping",
      "Erosion Data Loggers",
    ],
  },
  {
    icon: Droplets,
    title: "Chemical Injection",
    href: "/products/chemical-injection",
    desc: "Precision chemical delivery systems engineered for reliable, consistent dosing into pressurized pipelines and vessels under live operating conditions.",
    products: [
      "Quill Assemblies (fixed and retractable)",
      "Injection Check Valves",
      "Pulsation Dampeners",
      "Mixing Tees",
      "Dosing Skids",
    ],
  },
  {
    icon: BarChart2,
    title: "Data Acquisition",
    href: "/products/data-acquisition",
    desc: "FieldCom wireless loggers, Ethernet-based data systems, and cloud-connected dashboards for centralized corrosion monitoring and reporting.",
    products: [
      "FieldCom Wireless Systems",
      "ER Data Loggers",
      "Multiplexer Systems",
      "Cloud Analytics Platform",
      "SCADA Integration",
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden grid-bg"
        style={{ background: "#0d1f3c" }}
      >
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 50%, #1a3d6e 0%, transparent 70%)",
          }}
        />
        <div className="cx relative py-20 md:py-28">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-blue-300 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="opacity-50" />
            <span className="text-white font-medium">Products</span>
          </nav>

          <div className="eyebrow mb-4">Product Catalog</div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mb-6">
            Corrosion Management Products
          </h1>

          <p className="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            Purpose-built monitoring, injection, and data systems for oil&nbsp;&amp;&nbsp;gas,
            petrochemical, water treatment, and industrial process environments.
            From probe elements to cloud-connected analytics — engineered to perform.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "API RP 17D / 580 Compliant",
              "ATEX / IECEx Certified Options",
              "50+ Years of Field-Proven Design",
              "Global Inventory & Support",
            ].map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-2 text-sm text-white/80 bg-white/10 border border-white/15 rounded-full px-4 py-1.5"
              >
                <CheckCircle size={14} className="text-orange-500 flex-shrink-0" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER / DISCOVERY ── */}
      <section className="bg-white border-b border-slate-200 py-10">
        <div className="cx">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
            Find Products by Application
          </p>
          <div className="flex flex-wrap gap-2">
            {industries.map((ind, i) => (
              <Link
                key={ind.label}
                href={ind.href}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-150 ${
                  i === 0
                    ? "bg-orange-500 text-white border-orange-500 shadow-sm"
                    : "bg-white text-slate-700 border-slate-300 hover:border-navy-800 hover:text-navy-800"
                }`}
                style={i === 0 ? { background: "#e05000", borderColor: "#e05000" } : {}}
              >
                {ind.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY CARDS ── */}
      <section className="bg-slate-50 section">
        <div className="cx">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold text-navy-800" style={{ color: "#0d1f3c" }}>
              Browse Product Categories
            </h2>
            <p className="text-slate-500 mt-2 leading-relaxed">
              Four core product lines covering the full lifecycle of corrosion management — from
              measurement and injection to data collection and analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <article
                  key={cat.title}
                  className="card flex flex-col overflow-hidden"
                >
                  {/* Card header */}
                  <div
                    className="flex items-center gap-4 p-7"
                    style={{
                      background: "linear-gradient(135deg, #0d1f3c 0%, #1a3d6e 100%)",
                    }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                  </div>

                  {/* Card body */}
                  <div className="p-7 flex flex-col flex-1 bg-white">
                    <p className="text-slate-600 leading-relaxed mb-6">{cat.desc}</p>

                    <ul className="space-y-2.5 mb-8">
                      {cat.products.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2.5 text-sm text-slate-700"
                        >
                          <span
                            className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5"
                            style={{ background: "#e05000" }}
                            aria-hidden="true"
                          />
                          {p}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-wrap gap-3">
                      <Link href={cat.href} className="btn btn-primary">
                        View All Products
                        <ArrowRight size={16} />
                      </Link>
                      <Link
                        href="/resources"
                        className="btn btn-outline-navy"
                      >
                        <Download size={15} />
                        Download Catalog
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(90deg, #e05000 0%, #c94700 60%, #a83b00 100%)",
        }}
      >
        <div className="cx text-center">
          <p className="eyebrow text-white/70 mb-4">Engineering Support</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto">
            Need help selecting the right product?
          </h2>
          <p className="text-orange-100 text-lg mb-10 max-w-xl mx-auto">
            Our engineers are standing by. Describe your process conditions and we will
            recommend the optimal monitoring and injection configuration.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white font-bold px-8 py-3.5 rounded-md text-sm transition-all hover:bg-orange-50"
              style={{ color: "#e05000" }}
            >
              <Phone size={16} />
              Talk to an Engineer
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-white text-white font-semibold px-8 py-3.5 rounded-md text-sm transition-all"
            >
              <Download size={16} />
              Product Catalog PDF
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
