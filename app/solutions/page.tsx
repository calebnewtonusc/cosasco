import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Flame,
  Beaker,
  Droplets,
  FlaskConical,
  TreePine,
  Zap,
  ChevronRight,
  ArrowRight,
  Phone,
  Mail,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industry Solutions | Cosasco Corrosion Monitoring',
  description:
    'Cosasco delivers tailored corrosion monitoring and chemical injection programs for oil & gas, petrochemical, water treatment, chemical processing, pulp & paper, and utilities.',
};

const industries = [
  {
    num: '01',
    slug: 'oil-gas',
    name: 'Oil & Gas',
    subtitle: 'Upstream · Midstream · Downstream',
    icon: Flame,
    accentTop: true,
    description:
      'From wellhead to refinery gate, Cosasco monitors corrosive crude streams, sour gas, and produced water across upstream gathering lines, midstream transmission pipelines, and downstream processing units.',
    challenges: [
      'H2S and CO2 sweet/sour internal corrosion',
      'Produced water and scaling in gathering systems',
      'High-pressure offshore and subsea environments',
    ],
    products: ['ER Probes', 'Chemical Injection Quills', 'Access Fittings'],
  },
  {
    num: '02',
    slug: 'petrochemical',
    name: 'Petrochemical',
    subtitle: 'Refineries · Cracking Units · Heat Exchangers',
    icon: Beaker,
    accentTop: false,
    description:
      'Refineries and petrochemical plants face sulfidic corrosion, naphthenic acid attack, and coke-induced erosion at extreme temperatures. Cosasco high-temperature probes and flush-mount access systems deliver integrity data without process interruption.',
    challenges: [
      'Sulfidic and naphthenic acid corrosion at high temperature',
      'Coke deposition and erosion-corrosion in cracking units',
      'Turnaround optimization and inspection interval extension',
    ],
    products: ['High-Temp ER Probes', 'Flush-Mount Fittings', 'Intrusive Coupons'],
  },
  {
    num: '03',
    slug: 'water-treatment',
    name: 'Water Treatment',
    subtitle: 'Municipal · Industrial · Wastewater',
    icon: Droplets,
    accentTop: true,
    description:
      'Municipal and industrial water systems face pH variability, chlorine attack, and microbiologically influenced corrosion. Cosasco provides low-maintenance probes, bypass coupon assemblies, and chemical dosing quills for reliable long-term monitoring.',
    challenges: [
      'pH fluctuation and acidic/alkaline attack',
      'Microbiologically influenced corrosion (MIC)',
      'Scale deposition and chemical dosing optimization',
    ],
    products: ['Low-Profile ER Probes', 'Coupon Holders', 'Chemical Dosing Quills'],
  },
  {
    num: '04',
    slug: 'chemical-processing',
    name: 'Chemical Processing',
    subtitle: 'Acid · Caustic · Specialty Alloy Service',
    icon: FlaskConical,
    accentTop: false,
    description:
      'Acid, caustic, solvent, and oxidizer service demands high-alloy probes and PSM-compliant monitoring programs. Cosasco offers Hastelloy, titanium, and specialty alloy wetted components with full material traceability for the most aggressive process fluids.',
    challenges: [
      'Aggressive acid and caustic corrosion service',
      'PSM compliance and audit trail requirements',
      'Vapor-phase and condensate attack in overhead systems',
    ],
    products: ['Hastelloy/Titanium Probes', 'Chemical Injection Systems', 'Non-Intrusive Coupons'],
  },
  {
    num: '05',
    slug: 'pulp-paper',
    name: 'Pulp & Paper',
    subtitle: 'Digesters · Bleach Plants · Recovery Systems',
    icon: TreePine,
    accentTop: true,
    description:
      'Kraft and sulfite mills expose structural steel to caustic digester liquor, oxidizing bleach-plant chemistry, and high-temperature black liquor. Cosasco field-proven probes and retractable systems sustain uptime in these aggressive wet process environments.',
    challenges: [
      'Caustic and sulfide attack in kraft digesters',
      'Oxidizing chemistry in bleach plant stages',
      'High-temperature black liquor corrosion in recovery systems',
    ],
    products: ['Chemical-Resistant Probes', 'Insertion Coupons', 'Retractable Systems'],
  },
  {
    num: '06',
    slug: 'utilities',
    name: 'Utilities',
    subtitle: 'Power Generation · Cooling Water · Steam Cycles',
    icon: Zap,
    accentTop: false,
    description:
      'Power plants and district cooling systems face cooling water corrosion, steam cycle chemistry degradation, and atmospheric attack on structural steel. Cosasco monitoring hardware and chemical injection systems extend asset life and reduce unplanned outages.',
    challenges: [
      'Cooling water and condenser tube corrosion',
      'Steam cycle and boiler water chemistry degradation',
      'Atmospheric and submerged steel corrosion compliance',
    ],
    products: ['Retractable ER Probes', 'Cooling Water Quills', 'Automated Data Loggers'],
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <div className="bg-[#f7f9fc] border-b border-[#dde4ef]">
        <div className="cx py-3">
          <nav className="flex items-center gap-2 text-sm text-[#637c95]">
            <Link href="/" className="hover:text-[#0d1f3c] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0d1f3c] font-medium">Solutions</span>
          </nav>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-[#0d1f3c] text-white overflow-hidden">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        {/* orange top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#e05000]" aria-hidden="true" />

        <div className="cx relative section">
          <div className="max-w-3xl">
            <p className="eyebrow text-[#e05000] mb-4">Industry Solutions</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Tailored Corrosion Programs<br />
              <span className="text-[#e05000]">for Every Industry</span>
            </h1>
            <p className="text-[#b8c8da] text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Corrosion is not a generic problem. Each industry carries its own process chemistry,
              pressure ratings, regulatory environment, and failure consequences. Cosasco engineers
              monitoring programs that account for all of it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary">
                Speak with an Engineer
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/products" className="btn btn-outline-white">
                Browse Products
              </Link>
            </div>
          </div>
        </div>

        {/* stat strip */}
        <div className="relative border-t border-white/10">
          <div className="cx py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '6', label: 'Industries Served' },
                { value: '70+', label: 'Years of Expertise' },
                { value: '50+', label: 'Countries Deployed' },
                { value: '1,000+', label: 'Products Available' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="stat-number">{s.value}</div>
                  <div className="text-[#637c95] text-sm font-medium mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Industry Overview ── */}
      <section className="section bg-white">
        <div className="cx">
          <div className="text-center mb-16">
            <p className="eyebrow mb-3">Sector Expertise</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1f3c] mb-4">
              Select Your Industry
            </h2>
            <p className="text-[#637c95] text-lg max-w-2xl mx-auto leading-relaxed">
              Explore how Cosasco solves the corrosion challenges specific to your process
              environment, regulatory requirements, and operating conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.slug}
                  className="card flex flex-col group"
                  style={{ borderTop: `4px solid ${ind.accentTop ? '#e05000' : '#0d1f3c'}` }}
                >
                  <div className="p-8 flex flex-col flex-1">

                    {/* header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-[#f7f9fc] border border-[#dde4ef] flex items-center justify-center group-hover:bg-[#e05000]/10 transition-colors">
                          <Icon className="w-6 h-6 text-[#0d1f3c] group-hover:text-[#e05000] transition-colors" />
                        </div>
                        <div>
                          <span className="text-[#e05000] text-xs font-bold tracking-widest uppercase">{ind.num}</span>
                          <h3 className="text-xl font-bold text-[#0d1f3c] leading-tight">{ind.name}</h3>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs font-semibold text-[#637c95] uppercase tracking-wider mb-3">{ind.subtitle}</p>

                    {/* description */}
                    <p className="text-[#4a5e72] text-sm leading-relaxed mb-6">
                      {ind.description}
                    </p>

                    {/* challenges */}
                    <div className="mb-6">
                      <p className="text-xs font-bold text-[#637c95] uppercase tracking-widest mb-3">
                        Key Challenges
                      </p>
                      <ul className="space-y-2">
                        {ind.challenges.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-sm text-[#334150]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#e05000] flex-shrink-0 mt-1.5" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* product tags */}
                    <div className="mb-6">
                      <p className="text-xs font-bold text-[#637c95] uppercase tracking-widest mb-3">
                        Relevant Products
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {ind.products.map((p) => (
                          <span key={p} className="badge badge-slate">{p}</span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto pt-4 border-t border-[#dde4ef]">
                      <Link
                        href={`/solutions/${ind.slug}`}
                        className="flex items-center gap-2 text-sm font-bold text-[#0d1f3c] group-hover:text-[#e05000] transition-colors"
                      >
                        Explore {ind.name} Solutions
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Domain Expertise CTA ── */}
      <section className="section bg-[#f7f9fc]">
        <div className="cx">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-[#dde4ef] rounded-xl p-10 md:p-14 shadow-sm">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="eyebrow mb-3">Deep Domain Experience</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0d1f3c] mb-4">
                    Our engineers have spent decades in the field.
                  </h2>
                  <p className="text-[#637c95] leading-relaxed mb-6">
                    Cosasco application engineers hold NACE certifications and carry hands-on
                    experience across every sector we serve. When you contact us, you speak directly
                    with someone who understands your process — not a generalist sales team.
                  </p>
                  <p className="text-[#637c95] leading-relaxed">
                    Tell us your process conditions, operating pressure, fluid chemistry, and
                    regulatory constraints. We will recommend the right monitoring strategy,
                    product configuration, and installation approach.
                  </p>
                </div>
                <div className="space-y-4">
                  <a
                    href="/contact"
                    className="btn btn-primary w-full justify-center text-center"
                  >
                    <Phone className="w-4 h-4" />
                    Discuss Your Challenges
                  </a>
                  <a
                    href="mailto:sales@cosasco.com"
                    className="btn btn-outline-navy w-full justify-center text-center"
                  >
                    <Mail className="w-4 h-4" />
                    Email Our Engineering Team
                  </a>
                  <div className="text-center">
                    <Link
                      href="/resources"
                      className="text-sm text-[#637c95] hover:text-[#0d1f3c] transition-colors underline"
                    >
                      Browse Technical Application Library
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
