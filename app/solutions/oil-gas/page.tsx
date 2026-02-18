import Link from "next/link";

const challenges = [
  {
    title: "Pipeline Corrosion",
    description:
      "Crude oil and natural gas pipelines face internal corrosion from CO2, H2S, water, and microbial activity. External corrosion threatens coated and buried lines exposed to soil chemistry and stray currents. Cosasco's retractable ER probes provide continuous, real-time wall-loss data without process shutdown.",
    icon: "pipeline",
  },
  {
    title: "Production Equipment",
    description:
      "Separators, treaters, vessels, and wellhead components operate in produced water and gas environments rich in aggressive corrodents. Cosasco chemical injection quills deliver precise inhibitor dosing to protect internal surfaces, while intrusive coupons provide tangible corrosion-rate evidence for integrity management.",
    icon: "production",
  },
  {
    title: "Offshore Environments",
    description:
      "Offshore platforms, risers, and subsea infrastructure face accelerated corrosion from seawater, marine atmosphere, and high-pressure deepwater conditions. Cosasco's high-pressure access fittings and retractable assemblies allow safe probe insertion and retrieval under live system pressure without hot work or production interruption.",
    icon: "offshore",
  },
];

const products = [
  {
    name: "Electrical Resistance (ER) Probes",
    description:
      "Continuous, real-time corrosion-rate measurement. Available in flush-mount, retractable, and fixed configurations. Rated for high pressure and sour service.",
    link: "/products/er-probes",
  },
  {
    name: "Chemical Injection Quills",
    description:
      "Precision inhibitor, biocide, and scale-inhibitor delivery into flowing pipelines and process vessels. Full-port and quill-tip designs for maximum dispersion.",
    link: "/products/chemical-injection",
  },
  {
    name: "Access Fittings",
    description:
      "Hot-tap weld-on and threaded fittings for safe installation of probes and coupons without process shutdown. Rated to ANSI Class 150-2500.",
    link: "/products/access-fittings",
  },
  {
    name: "Retractable Assemblies",
    description:
      "Safe probe and coupon insertion/retrieval under full operating pressure. Available in manual and hydraulic-assist configurations for hazardous locations.",
    link: "/products/retractable-assemblies",
  },
];

const relatedSolutions = [
  { title: "Petrochemical", href: "/solutions/petrochemical" },
  { title: "Chemical Processing", href: "/solutions/chemical-processing" },
  { title: "Utilities", href: "/solutions/utilities" },
];

export default function OilGasSolutionsPage() {
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
            <span className="text-cosasco-navy font-medium">Oil &amp; Gas</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-cosasco-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block bg-cosasco-orange px-3 py-1 rounded text-sm font-semibold tracking-wider uppercase mb-4">
              Oil &amp; Gas
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Oil &amp; Gas Corrosion Solutions
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              From upstream wellheads and subsea risers to midstream pipelines and
              downstream refinery units, Cosasco delivers field-proven corrosion
              monitoring and chemical injection technology to protect your most
              critical assets.
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
                  <div
                    key={challenge.title}
                    className="border-l-4 border-cosasco-blue pl-6"
                  >
                    <h3 className="text-xl font-bold text-cosasco-navy mb-3">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {challenge.description}
                    </p>
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
                    <h3 className="text-lg font-bold text-cosasco-navy mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <Link
                      href={product.link}
                      className="text-cosasco-blue font-semibold text-sm hover:text-cosasco-orange transition-colors"
                    >
                      View Product &rarr;
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* Case Study Teaser */}
            <section>
              <h2 className="text-3xl font-bold text-cosasco-navy mb-2">
                Case Study
              </h2>
              <div className="w-12 h-1 bg-cosasco-orange mb-8 rounded" />
              <div className="bg-cosasco-navy text-white rounded-xl p-8">
                <div className="inline-block bg-cosasco-orange px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-4">
                  Case Study
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  Gulf Coast Pipeline Operator Reduces Corrosion Failures by 60%
                </h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  A major Gulf Coast pipeline operator deployed Cosasco retractable ER probes
                  across 14 monitoring stations on a 300-mile crude oil transmission line.
                  Real-time corrosion data enabled optimized inhibitor dosing, reducing
                  chemical spend by 22% while cutting corrosion-related failures by over 60%
                  in the first 18 months.
                </p>
                <div className="flex flex-wrap gap-6 mb-6">
                  {[
                    { label: "Failure Reduction", value: "60%" },
                    { label: "Chemical Cost Savings", value: "22%" },
                    { label: "Monitoring Stations", value: "14" },
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
            {/* Contact CTA */}
            <div className="bg-cosasco-navy text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Contact Our Experts</h3>
              <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                Our oil &amp; gas corrosion engineers will assess your specific
                challenges and recommend the right monitoring strategy.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-cosasco-orange hover:bg-orange-600 text-white font-bold px-5 py-3 rounded-lg transition-colors"
              >
                Get Expert Advice
              </Link>
            </div>

            {/* Related Products quick links */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-cosasco-navy mb-4">
                Key Products
              </h3>
              <ul className="space-y-3">
                {products.map((p) => (
                  <li key={p.name}>
                    <Link
                      href={p.link}
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-cosasco-blue transition-colors font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cosasco-orange flex-shrink-0" />
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Solutions */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-cosasco-navy mb-4">
                Related Solutions
              </h3>
              <ul className="space-y-3">
                {relatedSolutions.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-cosasco-blue transition-colors font-medium"
                    >
                      <span className="text-cosasco-orange">&#8594;</span>
                      {s.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/solutions"
                    className="flex items-center gap-2 text-sm text-cosasco-blue hover:text-cosasco-navy transition-colors font-semibold mt-2"
                  >
                    View All Industries &rarr;
                  </Link>
                </li>
              </ul>
            </div>

            {/* Download CTA */}
            <div className="border-2 border-cosasco-blue rounded-xl p-6">
              <h3 className="text-lg font-bold text-cosasco-navy mb-2">
                Technical Resources
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Download datasheets, installation guides, and application notes for
                oil &amp; gas corrosion monitoring.
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
