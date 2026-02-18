import Link from "next/link";

const industries = [
  {
    id: "oil-gas",
    title: "Oil & Gas",
    subtitle: "Upstream, Midstream & Downstream",
    description:
      "Protect pipelines, wellheads, separators, and offshore structures from corrosive crude, H2S, CO2, and produced water. Cosasco's ER probes and chemical injection systems deliver real-time corrosion intelligence to keep production online.",
    challenges: [
      "H2S and CO2 sweet/sour corrosion",
      "High-pressure pipeline monitoring",
      "Offshore and subsea environments",
      "Produced water and scaling",
    ],
    products: ["ER Probes", "Chemical Injection Quills", "Access Fittings", "Retractable Assemblies"],
    href: "/solutions/oil-gas",
    accentColor: "border-cosasco-orange",
    badgeColor: "bg-cosasco-orange",
  },
  {
    id: "petrochemical",
    title: "Petrochemical",
    subtitle: "Refineries & Chemical Plants",
    description:
      "Refinery and petrochemical assets face some of the harshest corrosive conditions — high temperatures, aggressive process streams, and cyclic thermal loading. Cosasco's high-temperature probes and access hardware are engineered for continuous monitoring under extreme process conditions.",
    challenges: [
      "High-temperature and pressure extremes",
      "Sulfidic and naphthenic acid corrosion",
      "Coke deposition and erosion-corrosion",
      "Turnaround and outage optimization",
    ],
    products: ["High-Temp ER Probes", "Flush-Mount Access Fittings", "Intrusive Coupons", "Data Loggers"],
    href: "/solutions/petrochemical",
    accentColor: "border-cosasco-blue",
    badgeColor: "bg-cosasco-blue",
  },
  {
    id: "water-treatment",
    title: "Water Treatment",
    subtitle: "Potable, Industrial & Wastewater",
    description:
      "Water and wastewater infrastructure demands reliable, low-maintenance corrosion monitoring. Cosasco delivers probes and chemical dosing quills suited for pH-variable environments, chlorinated systems, and biofilm-prone networks.",
    challenges: [
      "pH fluctuation and acidic attack",
      "Chlorine and disinfectant corrosion",
      "Microbiologically induced corrosion (MIC)",
      "Scale buildup and deposition",
    ],
    products: ["Low-Profile ER Probes", "Chemical Injection Quills", "Coupon Holders", "Bypass Assemblies"],
    href: "/solutions/water-treatment",
    accentColor: "border-cosasco-orange",
    badgeColor: "bg-cosasco-orange",
  },
  {
    id: "chemical-processing",
    title: "Chemical Processing",
    subtitle: "Specialty & Commodity Chemicals",
    description:
      "Chemical plants handle hundreds of aggressive media — acids, bases, solvents, and oxidizers — across a wide range of temperatures and pressures. Cosasco offers a full suite of materials and probe geometries to match virtually any process environment.",
    challenges: [
      "Aggressive acid and caustic service",
      "High-alloy material requirements",
      "Vapor-phase and condensate corrosion",
      "Regulatory compliance and audit trails",
    ],
    products: ["Hastelloy & Titanium Probes", "Chemical Injection Systems", "Non-Intrusive Coupons", "Access Hardware"],
    href: "/solutions/chemical-processing",
    accentColor: "border-cosasco-blue",
    badgeColor: "bg-cosasco-blue",
  },
  {
    id: "pulp-paper",
    title: "Pulp & Paper",
    subtitle: "Mills & Recovery Systems",
    description:
      "Pulping chemicals, bleach plant streams, and recovery boilers create highly corrosive conditions that threaten structural integrity and production continuity. Cosasco's monitoring solutions are field-proven in the demanding environments of kraft and sulfite mills.",
    challenges: [
      "Caustic and sulfide attack in digesters",
      "Bleach plant oxidizing chemistry",
      "High-temperature black liquor corrosion",
      "Steam and condensate system degradation",
    ],
    products: ["Chemical-Resistant Probes", "Insertion Coupons", "Access Fittings", "Retractable Systems"],
    href: "/solutions/pulp-paper",
    accentColor: "border-cosasco-orange",
    badgeColor: "bg-cosasco-orange",
  },
  {
    id: "utilities",
    title: "Utilities",
    subtitle: "Power Generation & Distribution",
    description:
      "Power plants, district cooling systems, and electrical infrastructure face corrosion from cooling water, steam cycles, and atmospheric exposure. Cosasco provides proven monitoring hardware and chemical injection systems to extend asset life and reduce unplanned outages.",
    challenges: [
      "Cooling water and condenser corrosion",
      "Steam cycle and boiler water chemistry",
      "Atmospheric and submerged steel corrosion",
      "Regulatory compliance and asset integrity",
    ],
    products: ["Retractable ER Probes", "Cooling Water Quills", "Bypass Coupons", "Automated Data Loggers"],
    href: "/solutions/utilities",
    accentColor: "border-cosasco-blue",
    badgeColor: "bg-cosasco-blue",
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-cosasco-blue transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-cosasco-navy font-medium">Solutions</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-cosasco-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block bg-cosasco-orange px-3 py-1 rounded text-sm font-semibold tracking-wider uppercase mb-4">
              Industry Solutions
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Industry-Specific Corrosion Solutions
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Every industry faces unique corrosion challenges. Cosasco engineers
              monitoring hardware, chemical injection systems, and access fittings
              tailored to the specific process conditions, regulatory requirements,
              and safety demands of your sector.
            </p>
          </div>
        </div>
      </section>

      {/* Industry grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-cosasco-navy mb-3">
              Select Your Industry
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore how Cosasco solves corrosion challenges specific to your
              process environment, safety requirements, and operating conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <Link
                key={industry.id}
                href={industry.href}
                className={`group block bg-white border-t-4 ${industry.accentColor} rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden`}
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-cosasco-navy group-hover:text-cosasco-blue transition-colors">
                        {industry.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{industry.subtitle}</p>
                    </div>
                    <div
                      className={`${industry.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap mt-1`}
                    >
                      View Solutions
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {industry.description}
                  </p>

                  {/* Challenges */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                      Key Challenges Addressed
                    </h4>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge) => (
                        <li
                          key={challenge}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-cosasco-orange flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Products */}
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                      Relevant Products
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.products.map((product) => (
                        <span
                          key={product}
                          className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full border border-gray-200"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-cosasco-blue font-semibold text-sm group-hover:gap-4 transition-all">
                    Explore {industry.title} Solutions
                    <span className="text-cosasco-orange">&#8594;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-cosasco-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our corrosion engineers can assess your specific process environment
            and recommend the right monitoring strategy and product configuration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-cosasco-orange hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Contact Our Experts
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white hover:bg-white hover:text-cosasco-navy font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Browse Technical Library
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
