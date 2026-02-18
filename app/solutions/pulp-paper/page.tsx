import Link from "next/link";

const challenges = [
  {
    title: "Caustic and Sulfide Attack in Digesters",
    description:
      "Kraft pulping digesters operate under highly alkaline conditions with dissolved sulfide at elevated temperatures. This combination drives stress corrosion cracking, pitting, and general corrosion of digester walls, liquor lines, and associated hardware. Cosasco's chemical-resistant probes and retractable systems provide continuous integrity monitoring in these hostile environments.",
  },
  {
    title: "Bleach Plant Oxidizing Chemistry",
    description:
      "Chlorine dioxide, hypochlorite, hydrogen peroxide, and other bleaching agents create highly oxidizing conditions that attack stainless steel and other alloys through pitting and crevice corrosion. Cosasco's titanium and Hastelloy probe elements are designed specifically for bleach plant chemistry, providing accurate corrosion data where standard materials would rapidly deteriorate.",
  },
  {
    title: "High-Temperature Black Liquor Corrosion",
    description:
      "Black liquor evaporators, recovery boilers, and associated piping handle concentrated pulping chemicals at high temperatures. Corrosion, scaling, and deposit-related failures in these systems can result in costly unplanned shutdowns and safety hazards. Continuous monitoring with Cosasco's high-temperature probe systems provides early warning of degradation.",
  },
  {
    title: "Steam and Condensate System Degradation",
    description:
      "Mill steam distribution and condensate return systems suffer from carbonic acid attack, oxygen pitting, and flow-accelerated corrosion (FAC) — particularly in carbon steel lines downstream of condensate contamination events. Cosasco's probes and coupons provide mill-wide corrosion surveillance data for steam and condensate integrity programs.",
  },
];

const products = [
  {
    name: "Chemical-Resistant ER Probes",
    description:
      "Probe elements in titanium and Hastelloy C-276 for bleach plant, digester liquor, and evaporator service. Available in flush, rod, and cylindrical geometries.",
    link: "/products/er-probes",
  },
  {
    name: "Insertion Weight-Loss Coupons",
    description:
      "Standardized coupon programs for digester, caustic, and bleach plant streams. NACE TM0169 compliant coupon retrieval and analysis protocol.",
    link: "/products/coupons",
  },
  {
    name: "Access Fittings",
    description:
      "Hot-tap and weld-on access fittings in stainless, Hastelloy, and titanium for installation in process piping, digester lines, and evaporator circuits.",
    link: "/products/access-fittings",
  },
  {
    name: "Retractable Systems",
    description:
      "Pressure-rated retractable probe and coupon assemblies for safe retrieval during mill operation. Essential for continuous monitoring without steam outages.",
    link: "/products/retractable-assemblies",
  },
];

const relatedSolutions = [
  { title: "Chemical Processing", href: "/solutions/chemical-processing" },
  { title: "Utilities", href: "/solutions/utilities" },
  { title: "Water Treatment", href: "/solutions/water-treatment" },
];

export default function PulpPaperSolutionsPage() {
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
            <span className="text-cosasco-navy font-medium">Pulp &amp; Paper</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-cosasco-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block bg-cosasco-orange px-3 py-1 rounded text-sm font-semibold tracking-wider uppercase mb-4">
              Pulp &amp; Paper
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Pulp &amp; Paper Mill Corrosion Solutions
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Pulp and paper mills contend with some of the broadest range of corrosive
              process chemistries in any industry — from alkaline digester liquors and
              oxidizing bleach plant streams to acidic condensates and high-temperature
              evaporator circuits. Cosasco provides the monitoring hardware and materials
              expertise to protect your most critical mill assets.
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
                  Kraft Mill Reduces Bleach Plant Equipment Failures by 75%
                </h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  A southeastern kraft pulp mill installed Cosasco titanium ER probes
                  across 6 bleach plant stages to monitor chlorine dioxide and hypochlorite
                  corrosivity in real time. Corrosion trend data correlated with bleach
                  plant chemical control led to process adjustments that reduced bleach
                  plant equipment failures by 75% and extended stainless steel component
                  life by an average of 3 years.
                </p>
                <div className="flex flex-wrap gap-6 mb-6">
                  {[
                    { label: "Equipment Failure Reduction", value: "75%" },
                    { label: "Extended Component Life", value: "+3 Yr" },
                    { label: "Bleach Plant Stages Monitored", value: "6" },
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
                Our pulp and paper corrosion specialists will recommend the right
                probe materials and monitoring plan for your mill chemistry.
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
                Download pulp and paper probe material guides and bleach plant monitoring application notes.
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
