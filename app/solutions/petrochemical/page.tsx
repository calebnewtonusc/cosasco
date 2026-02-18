import Link from "next/link";

const challenges = [
  {
    title: "High-Temperature & High-Pressure Environments",
    description:
      "Refinery process units — atmospheric and vacuum distillation, fluid catalytic cracking (FCC), hydrotreating, and hydrocracking — operate at temperatures exceeding 500°C and pressures well above 100 bar. Cosasco's high-temperature ER probes and flush-mount access hardware are engineered to perform reliably in these extreme conditions without compromising process integrity.",
  },
  {
    title: "Sulfidic and Naphthenic Acid Corrosion",
    description:
      "Sulfidic corrosion above 230°C and naphthenic acid attack in high-acid crude units are among the most costly integrity threats in refining. Real-time ER probe data enables immediate detection of accelerated wall-loss events, allowing operations to adjust blend ratios or inhibitor injection before damage progresses.",
  },
  {
    title: "Coke Deposition and Erosion-Corrosion",
    description:
      "Coker units, transfer lines, and heat exchanger tubes face combined erosion-corrosion from coke particles and aggressive process fluids. Cosasco intrusive coupons and weight-loss programs provide documented corrosion-rate evidence for integrity management records and regulatory compliance.",
  },
  {
    title: "Turnaround and Outage Optimization",
    description:
      "With turnaround costs reaching millions per day, corrosion data quality directly impacts inspection planning and outage duration. Continuous corrosion monitoring with Cosasco systems provides the trend data needed to justify risk-based inspection (RBI) decisions and extend run lengths safely.",
  },
];

const products = [
  {
    name: "High-Temperature ER Probes",
    description:
      "Rated for service up to 500°C. Available in flush, retractable, and rod configurations. Sour-service material options including Hastelloy and Inconel.",
    link: "/products/er-probes",
  },
  {
    name: "Flush-Mount Access Fittings",
    description:
      "Low-profile hot-tap fittings for installation in high-velocity process streams without flow disruption. Full ANSI pressure class range.",
    link: "/products/access-fittings",
  },
  {
    name: "Intrusive Weight-Loss Coupons",
    description:
      "Standardized corrosion coupons for laboratory analysis. Compliant with NACE TM0169 and ASTM G1 standards for mass-loss corrosion rate calculation.",
    link: "/products/coupons",
  },
  {
    name: "Automated Data Loggers",
    description:
      "Continuous ER probe data acquisition with HART, Modbus, and 4-20mA outputs. Intrinsically safe (IS) versions for hazardous classified areas.",
    link: "/products/data-loggers",
  },
];

const relatedSolutions = [
  { title: "Oil & Gas", href: "/solutions/oil-gas" },
  { title: "Chemical Processing", href: "/solutions/chemical-processing" },
  { title: "Pulp & Paper", href: "/solutions/pulp-paper" },
];

export default function PetrochemicalSolutionsPage() {
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
            <span className="text-cosasco-navy font-medium">Petrochemical</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-cosasco-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block bg-cosasco-blue px-3 py-1 rounded text-sm font-semibold tracking-wider uppercase mb-4">
              Petrochemical
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Petrochemical &amp; Refinery Corrosion Solutions
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Refineries and petrochemical plants operate some of the most aggressive
              process environments in industry. Cosasco's high-temperature probes,
              access fittings, and monitoring systems are built to match — delivering
              reliable corrosion data under conditions where failure is not an option.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-16">

            {/* Challenges */}
            <section>
              <h2 className="text-3xl font-bold text-cosasco-navy mb-2">
                Challenges We Solve
              </h2>
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

            {/* Recommended Products */}
            <section>
              <h2 className="text-3xl font-bold text-cosasco-navy mb-2">
                Recommended Products
              </h2>
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

            {/* Case Study Teaser */}
            <section>
              <h2 className="text-3xl font-bold text-cosasco-navy mb-2">Case Study</h2>
              <div className="w-12 h-1 bg-cosasco-orange mb-8 rounded" />
              <div className="bg-cosasco-navy text-white rounded-xl p-8">
                <div className="inline-block bg-cosasco-blue px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-4">
                  Case Study
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  Midwest Refinery Extends Run Length by 14 Months Using ER Probe Data
                </h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  A 120,000 BPD Midwest refinery deployed Cosasco high-temperature ER probes
                  in the crude distillation unit to monitor naphthenic acid corrosion. Continuous
                  trend data enabled the integrity team to justify a 14-month turnaround extension,
                  avoiding $8M in unplanned outage costs while maintaining full compliance with
                  API 510 inspection requirements.
                </p>
                <div className="flex flex-wrap gap-6 mb-6">
                  {[
                    { label: "Turnaround Extension", value: "14 Mo" },
                    { label: "Avoided Outage Cost", value: "$8M" },
                    { label: "Probe Installations", value: "32" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-3xl font-bold text-cosasco-orange">{stat.value}</div>
                      <div className="text-blue-200 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/resources"
                  className="inline-block bg-cosasco-orange hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  Read Full Case Study
                </Link>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-cosasco-navy text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Contact Our Experts</h3>
              <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                Our refinery corrosion specialists can evaluate your process units
                and recommend the right probe selection and monitoring strategy.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-cosasco-orange hover:bg-orange-600 text-white font-bold px-5 py-3 rounded-lg transition-colors"
              >
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
                Download high-temperature probe datasheets, installation guides, and RBI
                application notes for refinery environments.
              </p>
              <Link
                href="/resources"
                className="block text-center border-2 border-cosasco-blue text-cosasco-blue hover:bg-cosasco-blue hover:text-white font-bold px-5 py-3 rounded-lg transition-colors text-sm"
              >
                Browse Technical Library
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
