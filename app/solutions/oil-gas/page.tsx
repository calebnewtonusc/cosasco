import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  AlertTriangle,
  Gauge,
  Droplets,
  ArrowRight,
  Phone,
  FileDown,
  CheckCircle,
  Quote,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Oil & Gas Corrosion Solutions | Cosasco',
  description:
    'Cosasco ER probes, chemical injection quills, and access fittings protect upstream wellheads, midstream pipelines, and downstream refinery units from H2S, CO2, and produced-water corrosion.',
};

const challenges = [
  {
    icon: AlertTriangle,
    title: 'Pipeline Internal Corrosion',
    body: 'H2S and CO2 dissolved in produced water drive aggressive internal corrosion in gathering lines and long-haul transmission systems. Localized pitting under deposits, microbiologically influenced corrosion, and flow-velocity-driven erosion-corrosion threaten structural integrity and regulatory compliance. Cosasco retractable ER probes deliver continuous wall-loss data across multiple monitoring points without process shutdown.',
  },
  {
    icon: Gauge,
    title: 'Production Equipment Integrity',
    body: 'Separators, treaters, heat exchangers, and ESP systems operate in sour produced-water environments. Cyclic process upsets and high-velocity flow at inlets cause localized attack that periodic inspection alone cannot catch in time. Cosasco\'s chemical injection quills deliver precisely dosed corrosion inhibitor and biocide directly into the process stream, while intrusive coupons provide auditable corrosion-rate evidence for integrity management programs.',
  },
  {
    icon: Droplets,
    title: 'Chemical Injection Optimization',
    body: 'Over-dosing inhibitors wastes capital; under-dosing risks failures that cost orders of magnitude more. Cosasco chemical injection systems pair precision-engineered quills and check valves with real-time ER probe feedback, enabling operators to optimize dosing rates continuously based on actual corrosion response rather than fixed calendar schedules.',
  },
];

const products = [
  {
    name: 'Electrical Resistance (ER) Probes',
    description:
      'Continuous real-time corrosion-rate measurement. Flush-mount, retractable, and fixed configurations rated for high-pressure sour service. Compatible with Cosasco FieldCom wireless data loggers.',
    specs: ['ANSI Class 150–2500', 'H2S / NACE MR0175 rated', 'Multiple element geometries'],
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Chemical Injection Quills',
    description:
      'Precision inhibitor, biocide, and scale-inhibitor delivery into flowing pipelines and vessels. Full-port and quill-tip designs maximize dispersion. Available in 316SS, Hastelloy C276, and titanium.',
    specs: ['Up to 15,000 psi rated', 'Full-port and angled-tip styles', 'Check valve integrated'],
    href: '/products/chemical-injection',
  },
  {
    name: 'Access Fittings & Hot-Tap Hardware',
    description:
      'Hot-tap weld-on and threaded fittings for safe probe and coupon installation without process shutdown. Pressure-rated to match your pipeline MAOP. Full material traceability on all pressure-containing parts.',
    specs: ['Hot-tap rated to 2500 psi', 'Full MTR documentation', 'Carbon, alloy, and stainless'],
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Retractable Probe Assemblies',
    description:
      'Safe probe and coupon insertion and retrieval under full operating pressure. Manual and hydraulic-assist configurations for hazardous-area installations. Eliminates hot work permits and production interruptions.',
    specs: ['Live-line operation', 'ATEX / IECEx options', 'Manual & hydraulic-assist'],
    href: '/products/corrosion-monitoring',
  },
];

export default function OilGasPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <div className="bg-[#f7f9fc] border-b border-[#dde4ef]">
        <div className="cx py-3">
          <nav className="flex items-center gap-2 text-sm text-[#637c95]">
            <Link href="/" className="hover:text-[#0d1f3c] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/solutions" className="hover:text-[#0d1f3c] transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0d1f3c] font-medium">Oil &amp; Gas</span>
          </nav>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-[#0d1f3c] text-white overflow-hidden">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#e05000]" aria-hidden="true" />
        <div className="cx relative py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="badge badge-orange">Industry Solutions</span>
              <span className="text-[#637c95]">/</span>
              <span className="text-[#b8c8da] text-sm font-medium">Oil &amp; Gas</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Oil &amp; Gas<br />
              <span className="text-[#e05000]">Corrosion Solutions</span>
            </h1>
            <p className="text-[#b8c8da] text-lg md:text-xl leading-relaxed max-w-2xl">
              From wellhead to refinery gate, Cosasco provides monitoring and chemical injection
              systems designed for the toughest upstream, midstream, and downstream environments —
              including high-pressure sour service, offshore platforms, and live transmission pipelines.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main 2-col layout ── */}
      <div className="cx py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* ── MAIN CONTENT (8 cols) ── */}
          <main className="lg:col-span-8 space-y-20">

            {/* Challenges */}
            <section>
              <p className="eyebrow mb-2">What We Solve</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0d1f3c] mb-2">
                Industry Challenges
              </h2>
              <div className="w-12 h-1 bg-[#e05000] rounded mb-8" />

              <div className="space-y-6">
                {challenges.map((ch) => {
                  const Icon = ch.icon;
                  return (
                    <div key={ch.title} className="card card-accent p-6 md:p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#e05000]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="w-5 h-5 text-[#e05000]" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#0d1f3c] mb-2">{ch.title}</h3>
                          <p className="text-[#637c95] leading-relaxed text-sm">{ch.body}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Recommended Products */}
            <section>
              <p className="eyebrow mb-2">Product Recommendations</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0d1f3c] mb-2">
                Recommended Solutions
              </h2>
              <div className="w-12 h-1 bg-[#e05000] rounded mb-8" />

              <div className="grid sm:grid-cols-2 gap-6">
                {products.map((p) => (
                  <div key={p.name} className="card flex flex-col">
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-base font-bold text-[#0d1f3c] mb-2">{p.name}</h3>
                      <p className="text-sm text-[#637c95] leading-relaxed mb-4">{p.description}</p>
                      <div className="mb-5">
                        {p.specs.map((s) => (
                          <div key={s} className="flex items-center gap-2 text-xs text-[#4a5e72] py-1 border-b border-[#dde4ef] last:border-0">
                            <CheckCircle className="w-3.5 h-3.5 text-[#e05000] flex-shrink-0" />
                            {s}
                          </div>
                        ))}
                      </div>
                      <Link
                        href={p.href}
                        className="mt-auto flex items-center gap-1.5 text-sm font-bold text-[#0d1f3c] hover:text-[#e05000] transition-colors"
                      >
                        View Product
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Case Study */}
            <section>
              <p className="eyebrow mb-2">Proven Results</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0d1f3c] mb-2">
                Case Study
              </h2>
              <div className="w-12 h-1 bg-[#e05000] rounded mb-8" />

              <div className="bg-[#0d1f3c] rounded-xl overflow-hidden">
                <div className="p-8 md:p-10">
                  <span className="badge badge-orange mb-5">Gulf Coast Pipeline Operator</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    ER Probe Network Enables Shift to Condition-Based Treatment
                  </h3>
                  <p className="text-[#b8c8da] leading-relaxed mb-8 text-sm">
                    A major Gulf Coast pipeline operator deployed Cosasco retractable ER probes across
                    17 monitoring stations on a 340-mile crude oil transmission line. Real-time corrosion
                    data replaced monthly manual coupon retrieval, enabling the integrity team to correlate
                    corrosion rate spikes with batch fluid chemistry changes and optimize inhibitor dosing accordingly.
                    Within 14 months the program delivered measurable improvements across every tracked metric.
                  </p>

                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {[
                      { value: '63%', label: 'Reduction in Corrosion Failures' },
                      { value: '28%', label: 'Decrease in Inhibitor Costs' },
                      { value: '14 mo', label: 'Full Program ROI' },
                    ].map((s) => (
                      <div key={s.label} className="text-center">
                        <div className="stat-number">{s.value}</div>
                        <div className="text-[#637c95] text-xs mt-1 leading-tight">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                    <Quote className="w-5 h-5 text-[#e05000] mb-3" />
                    <p className="text-[#b8c8da] text-sm leading-relaxed italic mb-3">
                      "The Cosasco ER probe network gave us the data confidence to move from
                      calendar-based to condition-based inhibitor treatment. We reduced our
                      chemical spend significantly while actually improving corrosion control."
                    </p>
                    <p className="text-[#637c95] text-xs font-semibold">
                      — Corrosion Engineer, Major Gulf Coast Pipeline Operator
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* ── SIDEBAR (4 cols) ── */}
          <aside className="lg:col-span-4 space-y-6">

            {/* Contact card */}
            <div className="bg-[#0d1f3c] rounded-xl p-6 text-white sticky top-6">
              <p className="eyebrow text-[#e05000] mb-3">Get Expert Guidance</p>
              <h3 className="text-lg font-bold mb-3">
                Speak with an Oil &amp; Gas Specialist
              </h3>
              <p className="text-[#b8c8da] text-sm leading-relaxed mb-5">
                Our NACE-certified corrosion engineers will assess your pipeline or facility
                and recommend the right monitoring and treatment strategy.
              </p>
              <Link href="/contact" className="btn btn-primary w-full justify-center mb-3">
                <Phone className="w-4 h-4" />
                Contact an Expert
              </Link>
              <p className="text-center text-xs text-[#637c95]">
                Response within 1 business day
              </p>
            </div>

            {/* Download */}
            <div className="card p-6">
              <FileDown className="w-6 h-6 text-[#e05000] mb-3" />
              <h3 className="text-base font-bold text-[#0d1f3c] mb-2">
                Oil &amp; Gas Application Guide
              </h3>
              <p className="text-sm text-[#637c95] leading-relaxed mb-4">
                Product selection guide, installation specifications, and recommended
                monitoring programs for upstream, midstream, and downstream applications.
              </p>
              <Link
                href="/resources"
                className="btn btn-outline-navy w-full justify-center text-sm"
              >
                Download PDF
              </Link>
            </div>

            {/* Related industries */}
            <div className="card p-6">
              <h3 className="text-base font-bold text-[#0d1f3c] mb-4">
                Related Industries
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'Petrochemical', href: '/solutions/petrochemical' },
                  { name: 'Water Treatment', href: '/solutions/water-treatment' },
                  { name: 'Chemical Processing', href: '/solutions/chemical-processing' },
                  { name: 'Utilities', href: '/solutions/utilities' },
                ].map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className="flex items-center gap-2 text-sm text-[#4a5e72] hover:text-[#e05000] transition-colors font-medium"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-[#e05000]" />
                      {r.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="divider my-4" />
              <Link
                href="/solutions"
                className="flex items-center gap-1.5 text-sm text-[#637c95] hover:text-[#0d1f3c] transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5" />
                View All Industries
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
