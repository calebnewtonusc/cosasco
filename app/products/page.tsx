import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products | Cosasco Corrosion Monitoring & Chemical Injection',
  description: 'ER probes, access fittings, corrosion coupons, chemical injection quills, Microcor wireless transmitters, and UT sensors for industrial corrosion management.',
}

import Link from "next/link";
import { Shield, Activity, Droplets, BarChart2, ChevronRight, ArrowRight, Download } from "lucide-react";

const industries = [
  { label: "All", href: "/products", active: true },
  { label: "Oil & Gas", href: "/products?industry=oil-gas" },
  { label: "Petrochemical", href: "/products?industry=petrochemical" },
  { label: "Water Treatment", href: "/products?industry=water-treatment" },
  { label: "Chemical Processing", href: "/products?industry=chemical" },
  { label: "Pulp & Paper", href: "/products?industry=pulp-paper" },
  { label: "Utilities", href: "/products?industry=utilities" },
  { label: "Mining", href: "/products?industry=mining" },
  { label: "Gas Transmission", href: "/products?industry=gas-transmission" },
];

const categories = [
  {
    icon: Shield,
    title: "Corrosion Monitoring",
    href: "/products/corrosion-monitoring",
    desc: "Industry-proven electrical resistance and electrochemical monitoring systems for continuous and periodic corrosion measurement across all process environments.",
    products: [
      "ER Probes: Fixed Process 2500/2520 & Retractable 3500/3700",
      "Microcor® High-Speed ER Probes (up to 50× faster data acquisition rates)",
      "LPR Probe 6112/7012: Real-time corrosion rate",
      "Corrosion Coupons CI: NACE TM-0169 compliant",
      "Access Fittings (1\" to 3\")",
    ],
  },
  {
    icon: Activity,
    title: "Erosion & Non-Intrusive Monitoring",
    href: "/products/erosion-monitoring",
    desc: "Echo Point UT sensors, sand and particle detection probes, and non-intrusive ultrasonic wall thickness monitoring for high-velocity flow protection and pipeline integrity.",
    products: [
      "Echo Point UT Sensor: WirelessHART 7, ATEX/IECEx, 5-yr battery",
      "Microcor® High-Sensitivity Erosion Probes",
      "Sand Probe Erosion Detection System",
      "Non-Intrusive Underground Pipe Thickness Monitor",
      "Intrusive ER Erosion Systems (Flush, Exposed, Fin)",
    ],
  },
  {
    icon: Droplets,
    title: "Chemical Injection",
    href: "/products/chemical-injection",
    desc: "Precision chemical delivery systems engineered for reliable, consistent dosing into pressurized pipelines and vessels under live operating conditions.",
    products: [
      "Quill Assemblies (Fixed and Retractable)",
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
    desc: "Microcor® Wireless Transmitters, Ethernet-based data systems, and the Cosasco Data Online (CDO) cloud platform for centralized corrosion monitoring and reporting.",
    products: [
      "Microcor® Wireless Transmitter (MWT)",
      "ER Data Loggers",
      "Multiplexer Systems",
      "Cosasco Data Online (CDO) Platform",
      "SCADA Integration",
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0f2a4a] pb-16 pt-10 px-6 md:px-10 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-1.5 text-sm text-[#8ab4d4] mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="opacity-50" />
            <span className="text-white font-medium">Products</span>
          </nav>
          <h1 className="text-white font-black text-4xl lg:text-5xl leading-tight mb-4">
            Corrosion Management Products
          </h1>
          <p className="text-[#94aabb] text-lg max-w-2xl leading-relaxed">
            Purpose-built monitoring, injection, and data systems trusted in over 110 countries
            across oil&nbsp;&amp;&nbsp;gas, petrochemical, water treatment, and industrial process environments.
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="bg-white border-b border-[#e8edf2] py-8 px-6 md:px-10 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#566677] mb-4">
            Find Products by Application
          </p>
          <div className="flex flex-wrap gap-2">
            {industries.map((ind) => (
              <Link
                key={ind.label}
                href={ind.href}
                className={
                  ind.active
                    ? "px-5 py-2 rounded-full text-sm font-semibold border transition-all bg-[#f4a65d] text-white border-[#f4a65d] shadow-sm"
                    : "px-5 py-2 rounded-full text-sm font-semibold border transition-all bg-white text-[#1e2b3a] border-[#e8edf2] hover:border-[#0f2a4a] hover:text-[#0f2a4a]"
                }
              >
                {ind.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="bg-[#f7f9fc] border-b border-[#e8edf2] py-8 px-6 md:px-10 xl:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
          {[
            { stat: "70+", label: "Years of Innovation" },
            { stat: "110", label: "Countries Served" },
            { stat: "1M+", label: "Monitoring Locations" },
          ].map((item) => (
            <div key={item.stat} className="text-center">
              <div className="text-[#f4a65d] font-black text-3xl leading-none">{item.stat}</div>
              <div className="text-[#566677] text-xs mt-1 font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORY CARDS */}
      <section className="bg-white py-20 px-6 md:px-10 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-black text-[#1e2b3a] mb-2">Browse Product Categories</h2>
            <p className="text-[#566677] max-w-2xl">
              Four core product lines covering the full lifecycle of corrosion management,
              from measurement and injection to data collection and analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <article
                  key={cat.title}
                  className="bg-white border border-[#e8edf2] rounded-xl overflow-hidden hover:shadow-lg transition-all flex flex-col"
                >
                  {/* Card header */}
                  <div className="bg-[#0f2a4a] p-6 flex items-center gap-4">
                    <div className="bg-[#1a3a5c] rounded-lg p-2.5 flex-shrink-0">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-white font-bold text-xl">{cat.title}</h3>
                  </div>

                  {/* Card body */}
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-[#566677] text-sm leading-relaxed">{cat.desc}</p>

                    <p className="text-xs font-bold uppercase tracking-wider text-[#8898aa] mt-4 mb-2">
                      Key Products
                    </p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {cat.products.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-sm text-[#1e2b3a]">
                          <span
                            className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5 bg-[#f4a65d]"
                            aria-hidden="true"
                          />
                          {p}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3 mt-auto">
                      <Link
                        href={cat.href}
                        className="inline-flex items-center gap-2 bg-[#f4a65d] text-white rounded-md px-4 py-2 text-sm font-semibold hover:bg-[#d4892a] transition-colors"
                      >
                        View Products
                        <ArrowRight size={14} />
                      </Link>
                      <Link
                        href="/resources"
                        className="inline-flex items-center gap-2 border border-[#0f2a4a] text-[#0f2a4a] rounded-md px-4 py-2 text-sm font-semibold hover:bg-[#0f2a4a] hover:text-white transition-colors"
                      >
                        <Download size={14} />
                        Download Spec Sheet
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#f7f9fc] border-t border-[#e8edf2] py-16 px-6 md:px-10 xl:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-[#1e2b3a]">Need help selecting the right product?</h2>
            <p className="text-[#566677] mt-1">
              Our engineers are standing by. Describe your process conditions and we&rsquo;ll recommend
              the optimal monitoring and injection configuration.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#f4a65d] text-white rounded-md px-6 py-3 text-sm font-semibold hover:bg-[#d4892a] transition-colors"
            >
              Talk to an Engineer
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 border border-[#0f2a4a] text-[#0f2a4a] rounded-md px-6 py-3 text-sm font-semibold hover:bg-[#0f2a4a] hover:text-white transition-colors"
            >
              <Download size={14} />
              Product Catalog PDF
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
