import Link from "next/link";

const challenges = [
  {
    title: "Aggressive Acid and Caustic Service",
    description:
      "Chemical plants handle hydrochloric, sulfuric, nitric, and hydrofluoric acids alongside strong caustics and oxidizing agents. These media demand careful probe material selection — from standard carbon steel to exotic alloys like Hastelloy C-276, titanium, and tantalum. Cosasco's broad materials portfolio ensures the right probe element matches your specific chemistry.",
  },
  {
    title: "High-Alloy Material Requirements",
    description:
      "Corrosion-resistant alloys used in chemical service are expensive to purchase and costly to repair. Continuous ER monitoring detects early wall-loss trends before localized corrosion becomes structurally significant, enabling targeted maintenance that extends asset life and avoids unplanned replacement of high-value alloy equipment.",
  },
  {
    title: "Vapor-Phase and Condensate Corrosion",
    description:
      "Above the liquid level in reactors, columns, and storage tanks, vapor-phase corrosion and acidic condensate attack overhead systems and vapor lines. Cosasco's flush-mounted and top-of-line probes monitor locations inaccessible to liquid-phase sensors, providing comprehensive asset coverage.",
  },
  {
    title: "Regulatory Compliance and Audit Trails",
    description:
      "Chemical facilities operate under stringent environmental, safety, and process safety management (PSM) regulations. Cosasco's continuous data logging creates time-stamped corrosion records that support PSM documentation, mechanical integrity programs, and third-party audits without requiring manual data collection.",
  },
];

const products = [
  {
    name: "Exotic-Alloy ER Probes",
    description:
      "Probe elements available in Hastelloy C-276, titanium, tantalum, Inconel, and other high-alloy materials for compatibility with aggressive chemical service.",
    link: "/products/er-probes",
  },
  {
    name: "Chemical Injection Systems",
    description:
      "Full chemical injection packages including quills, check valves, isolation valves, and flow meters. Designed for corrosion inhibitor and neutralizer injection in chemical plant service.",
    link: "/products/chemical-injection",
  },
  {
    name: "Non-Intrusive Coupons",
    description:
      "Flush-face and non-intrusive coupon holders for vapor-space and overhead system monitoring. Zero flow restriction for process-sensitive applications.",
    link: "/products/coupons",
  },
  {
    name: "Access Hardware",
    description:
      "Full range of weld-on, threaded, and flanged access fittings in carbon steel, stainless, and high-alloy materials. ANSI pressure classes to 2500#.",
    link: "/products/access-fittings",
  },
];

const relatedSolutions = [
  { title: "Petrochemical", href: "/solutions/petrochemical" },
  { title: "Oil & Gas", href: "/solutions/oil-gas" },
  { title: "Water Treatment", href: "/solutions/water-treatment" },
];

export default function ChemicalProcessingSolutionsPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-cosasco-blue transition-colors">Home</Link>
            <span>/</span>
            <Link href="/solutions" className="hover:text-cosasco-blue transition-colors">Solutions</Link>
            <span>/</span>
            <span className="text-cosasco-navy font-medium">Chemical Processing</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-cosasco-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block bg-cosasco-blue px-3 py-1 rounded text-sm font-semibold tracking-wider uppercase mb-4">
              Chemical Processing
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Chemical Plant Corrosion Management
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Hundreds of aggressive process chemistries, wide temperature and pressure
              ranges, and stringent regulatory requirements make chemical plant corrosion
              management uniquely complex. Cosasco delivers the materials breadth,
              engineering expertise, and monitoring technology to protect your most
              chemically demanding assets.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-bold text-cosasco-navy mb-2">Challenges We Solve</h2>
              <div className="w-12 h-1 bg-cosasco-orange mb-8 rounded" />
              <div className="space-y-8">
                {challenges.map((challenge) => (
                  <div key={challenge.title} className="border-l-4 border-cosasco-blue pl-6">
                    <h3 className="text-xl font-bold text-cosasco-navy mb-3">{challenge.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-cosasco-navy mb-2">Recommended Products</h2>
              <div className="w-12 h-1 bg-cosasco-orange mb-8 rounded" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {products.map((product) => (
                  <div
                    key={product.name}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:border-cosasco-blue hover:shadow-md transition-all"
                  >
                    <h3 className="text-lg font-bold text-cosasco-navy mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                    <Link href={product.link} className="text-cosasco-blue font-semibold text-sm hover:text-cosasco-orange transition-colors">
                      View Product &rarr;
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-cosasco-navy mb-2">Case Study</h2>
              <div className="w-12 h-1 bg-cosasco-orange mb-8 rounded" />
              <div className="bg-cosasco-navy text-white rounded-xl p-8">
                <div className="inline-block bg-cosasco-blue px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-4">
                  Case Study
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  Specialty Chemical Manufacturer Achieves 40% Reduction in Alloy Replacement Costs
                </h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  A specialty chemical manufacturer producing aggressive acid intermediates
                  deployed Cosasco Hastelloy ER probes across 12 reactor and column locations.
                  Early detection of localized corrosion events enabled targeted repairs,
                  reducing annual high-alloy replacement spend by 40% and eliminating two
                  unplanned shutdowns in the first year of monitoring.
                </p>
                <div className="flex flex-wrap gap-6 mb-6">
                  {[
                    { label: "Alloy Cost Reduction", value: "40%" },
                    { label: "Unplanned Shutdowns Avoided", value: "2" },
                    { label: "Monitoring Locations", value: "12" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-3xl font-bold text-cosasco-orange">{stat.value}</div>
                      <div className="text-blue-200 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <Link href="/resources" className="inline-block bg-cosasco-orange hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-colors">
                  Read Full Case Study
                </Link>
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="bg-cosasco-navy text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Contact Our Experts</h3>
              <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                Our chemical processing specialists will identify the right alloy probe
                and monitoring configuration for your specific process chemistry.
              </p>
              <Link href="/contact" className="block text-center bg-cosasco-orange hover:bg-orange-600 text-white font-bold px-5 py-3 rounded-lg transition-colors">
                Get Expert Advice
              </Link>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-cosasco-navy mb-4">Key Products</h3>
              <ul className="space-y-3">
                {products.map((p) => (
                  <li key={p.name}>
                    <Link href={p.link} className="flex items-center gap-2 text-sm text-gray-700 hover:text-cosasco-blue transition-colors font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-cosasco-orange flex-shrink-0" />
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-cosasco-navy mb-4">Related Solutions</h3>
              <ul className="space-y-3">
                {relatedSolutions.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-cosasco-blue transition-colors font-medium">
                      <span className="text-cosasco-orange">&#8594;</span>
                      {s.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/solutions" className="flex items-center gap-2 text-sm text-cosasco-blue hover:text-cosasco-navy transition-colors font-semibold mt-2">
                    View All Industries &rarr;
                  </Link>
                </li>
              </ul>
            </div>

            <div className="border-2 border-cosasco-blue rounded-xl p-6">
              <h3 className="text-lg font-bold text-cosasco-navy mb-2">Technical Resources</h3>
              <p className="text-gray-600 text-sm mb-4">
                Download alloy probe material selection guides and chemical compatibility charts.
              </p>
              <Link href="/resources" className="block text-center border-2 border-cosasco-blue text-cosasco-blue hover:bg-cosasco-blue hover:text-white font-bold px-5 py-3 rounded-lg transition-colors text-sm">
                Browse Technical Library
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
