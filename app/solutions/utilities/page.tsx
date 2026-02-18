import Link from "next/link";

const challenges = [
  {
    title: "Cooling Water and Condenser Corrosion",
    description:
      "Once-through, recirculating, and dry cooling systems are major sources of corrosion in power generation. Scale, biological fouling, and aggressive cooling water chemistry attack condenser tubes, cooling towers, and heat exchangers. Cosasco's bypass coupon systems and chemical injection quills are proven solutions for managing cooling water corrosion and scale in power plant environments.",
  },
  {
    title: "Steam Cycle and Boiler Water Chemistry",
    description:
      "Feedwater, boiler water, and steam condensate chemistry directly controls corrosion rates in steam generators, turbines, and condensate return lines. Flow-accelerated corrosion (FAC) of carbon steel piping is a particular concern in high-velocity, low-oxygen steam and condensate systems. Cosasco ER probes and coupons provide continuous corrosion surveillance in steam cycle circuits.",
  },
  {
    title: "Atmospheric and Submerged Steel Corrosion",
    description:
      "Transmission towers, substations, buried cables, and underground conduit are exposed to atmospheric corrosion, soil chemistry, and stray current interference. Cosasco's access fittings and corrosion coupon systems support cathodic protection programs and soil corrosivity assessment for distribution infrastructure.",
  },
  {
    title: "Regulatory Compliance and Asset Integrity",
    description:
      "Power utilities operate under NERC, EPA, and state regulatory frameworks requiring documented asset integrity programs. Continuous corrosion data from Cosasco systems supports mechanical integrity recordkeeping, provides evidence for risk-based inspection (RBI) decisions, and generates the audit trail required for regulatory compliance.",
  },
];

const products = [
  {
    name: "Retractable ER Probes",
    description:
      "Continuous wall-loss monitoring in cooling water systems, boiler circuits, and condensate lines. Safe retrieval under operating pressure without system shutdown.",
    link: "/products/er-probes",
  },
  {
    name: "Cooling Water Injection Quills",
    description:
      "Center-line chemical injection for corrosion inhibitors, biocides, antiscalants, and pH adjustment in cooling tower circuits and once-through cooling systems.",
    link: "/products/chemical-injection",
  },
  {
    name: "Bypass Coupon Assemblies",
    description:
      "Side-stream coupon exposure units for cooling water and steam condensate systems. Allows representative corrosion rate measurement with minimal installation impact.",
    link: "/products/coupons",
  },
  {
    name: "Automated Data Loggers",
    description:
      "Continuous corrosion data acquisition with historian and SCADA integration. IS-rated versions for hazardous areas in fossil and nuclear power plants.",
    link: "/products/data-loggers",
  },
];

const relatedSolutions = [
  { title: "Water Treatment", href: "/solutions/water-treatment" },
  { title: "Chemical Processing", href: "/solutions/chemical-processing" },
  { title: "Pulp & Paper", href: "/solutions/pulp-paper" },
];

export default function UtilitiesSolutionsPage() {
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
            <span className="text-cosasco-navy font-medium">Utilities</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-cosasco-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block bg-cosasco-blue px-3 py-1 rounded text-sm font-semibold tracking-wider uppercase mb-4">
              Utilities
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Power &amp; Utilities Infrastructure Solutions
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Power generation and distribution infrastructure operates continuously,
              with unplanned outages carrying massive consequences. Cosasco's corrosion
              monitoring systems and chemical injection technology protect the cooling
              water, steam cycle, and structural assets that keep the lights on.
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
                  Combined Cycle Power Plant Eliminates Cooling Water Condenser Failures
                </h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  A 500 MW combined cycle plant experiencing recurring condenser tube failures
                  deployed Cosasco bypass coupon assemblies and chemical injection quills in the
                  cooling water circuit. Corrosion rate data identified a microbiological
                  contribution that had been masked by standard water analysis. Targeted biocide
                  injection eliminated condenser tube failures, saving an estimated $2.4M in
                  annual tube replacement and associated forced outage costs.
                </p>
                <div className="flex flex-wrap gap-6 mb-6">
                  {[
                    { label: "Annual Savings", value: "$2.4M" },
                    { label: "Condenser Failures", value: "0" },
                    { label: "Plant Capacity", value: "500 MW" },
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
                Our power industry corrosion engineers will evaluate your cooling
                water and steam cycle challenges and recommend the right solution.
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
                Download cooling water and steam cycle corrosion monitoring application notes and datasheets.
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
