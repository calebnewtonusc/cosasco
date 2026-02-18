import Link from "next/link";

const challenges = [
  {
    title: "pH Fluctuation and Acidic Attack",
    description:
      "Water treatment systems handle streams ranging from highly acidic to strongly alkaline. Fluctuating pH accelerates corrosion of carbon steel, cast iron, and copper alloys in distribution mains, storage tanks, and treatment vessels. Cosasco ER probes provide continuous corrosion-rate data correlated with pH treatment logs, enabling rapid response to upsets before damage accumulates.",
  },
  {
    title: "Chlorine and Disinfectant Corrosion",
    description:
      "Chlorine, chloramine, and ozone disinfectants are highly corrosive to metallic infrastructure. Residual disinfectant levels and contact time must be carefully managed to balance microbial control with corrosion risk. Cosasco chemical injection quills provide precise, reproducible disinfectant dosing while corrosion monitoring captures the impact on pipe wall integrity.",
  },
  {
    title: "Microbiologically Induced Corrosion (MIC)",
    description:
      "Biofilm formation in water mains, storage tanks, and cooling towers creates anaerobic microenvironments where sulfate-reducing bacteria (SRB) generate hydrogen sulfide, driving aggressive localized pitting. Cosasco bypass coupon assemblies expose coupons to representative water chemistry and are regularly retrieved for biofouling and MIC assessment.",
  },
  {
    title: "Scale Buildup and Deposition",
    description:
      "Calcium carbonate, silica, and iron oxide scale reduce heat transfer efficiency, restrict flow, and concentrate corrosion beneath deposits. Cosasco's chemical injection quills deliver antiscalant and dispersant formulations directly into the process stream for uniform distribution and maximum effectiveness.",
  },
];

const products = [
  {
    name: "Low-Profile ER Probes",
    description:
      "Flush and low-profile designs minimize flow disruption in water distribution lines. Non-intrusive electrochemical variants available for potable water compliance.",
    link: "/products/er-probes",
  },
  {
    name: "Chemical Injection Quills",
    description:
      "Center-line injection quills for disinfectants, corrosion inhibitors, antiscalants, and pH adjustment chemicals. Materials selected for chlorine and oxidizing chemical resistance.",
    link: "/products/chemical-injection",
  },
  {
    name: "Bypass Coupon Holders",
    description:
      "Side-stream bypass assemblies allow coupon exposure under representative process conditions without main-line shutdown. Standard and MIC-specific coupon configurations.",
    link: "/products/coupons",
  },
  {
    name: "Retractable Assemblies",
    description:
      "Safe probe and coupon retrieval under operating pressure. Available in non-metallic materials for potable water compatibility and regulatory compliance.",
    link: "/products/retractable-assemblies",
  },
];

const relatedSolutions = [
  { title: "Chemical Processing", href: "/solutions/chemical-processing" },
  { title: "Utilities", href: "/solutions/utilities" },
  { title: "Pulp & Paper", href: "/solutions/pulp-paper" },
];

export default function WaterTreatmentSolutionsPage() {
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
            <span className="text-cosasco-navy font-medium">Water Treatment</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-cosasco-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block bg-cosasco-orange px-3 py-1 rounded text-sm font-semibold tracking-wider uppercase mb-4">
              Water Treatment
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Water &amp; Wastewater Corrosion Solutions
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Municipal water systems, industrial water treatment plants, and wastewater
              infrastructure depend on structural integrity for public safety and regulatory
              compliance. Cosasco provides trusted corrosion monitoring and chemical
              injection solutions designed for water treatment environments.
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
                <div className="inline-block bg-cosasco-orange px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-4">
                  Case Study
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  Municipal Water Authority Eliminates MIC Failures in Distribution Network
                </h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  A large municipal water authority experiencing recurring MIC-driven
                  pinhole leaks deployed Cosasco bypass coupon assemblies at 8 monitoring
                  points across its distribution network. Biofouling analysis identified
                  high-risk zones, enabling targeted biocide injection that eliminated
                  new MIC failures within 12 months.
                </p>
                <div className="flex flex-wrap gap-6 mb-6">
                  {[
                    { label: "MIC Failures Eliminated", value: "100%" },
                    { label: "Monitoring Points", value: "8" },
                    { label: "Program Duration", value: "12 Mo" },
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

          <aside className="space-y-8">
            <div className="bg-cosasco-navy text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Contact Our Experts</h3>
              <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                Our water treatment corrosion specialists will evaluate your system
                and recommend the right monitoring and chemical injection approach.
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
                Download datasheets and application notes for water treatment corrosion monitoring.
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
