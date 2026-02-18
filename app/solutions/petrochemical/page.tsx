import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Thermometer,
  Activity,
  Clock,
  ArrowRight,
  Phone,
  FileDown,
  CheckCircle,
  Quote,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Petrochemical Corrosion Solutions | Cosasco',
  description:
    'Cosasco high-temperature ER probes, flush-mount access fittings, and intrusive coupons protect refineries, cracking units, and heat exchangers from sulfidic, naphthenic acid, and high-temperature corrosion.',
};

const challenges = [
  {
    icon: Thermometer,
    title: 'High-Temperature Sulfidic & Naphthenic Acid Corrosion',
    body: 'Crude distillation, vacuum units, and delayed cokers operate at temperatures where sulfidic corrosion accelerates exponentially. Naphthenic acid content adds another attack mechanism that conventional probes cannot survive. Cosasco high-temperature ER probes use refractory-grade element materials and purpose-engineered process connections rated to 650°C, delivering real-time corrosion data where periodic inspection alone cannot provide adequate frequency.',
  },
  {
    icon: Activity,
    title: 'Erosion-Corrosion in Cracking Units',
    body: 'Fluid catalytic cracking (FCC) units, cokers, and hydroprocessing reactors combine corrosive chemistry with high catalyst or coke particle velocities. Erosion-corrosion at transfer lines, cyclone inlets, and slurry piping can result in wall-loss rates that outpace annual inspection cycles. Cosasco erosion monitors and high-temperature probes provide continuous wall-loss data to support risk-based inspection decisions and turnaround interval optimization.',
  },
  {
    icon: Clock,
    title: 'Turnaround Optimization & Inspection Interval Extension',
    body: 'Refinery turnarounds cost tens of millions of dollars in lost production. Integrity teams must justify inspection intervals and equipment run-lengths to regulators with defensible corrosion data. Cosasco continuous monitoring programs build the data record needed to extend run-lengths safely, quantify corrosion inhibitor effectiveness, and prioritize inspection resources on the circuits that actually show accelerated attack.',
  },
];

const products = [
  {
    name: 'High-Temperature ER Probes',
    description:
      'Rated to 650°C for continuous monitoring in crude units, vacuum towers, and coker transfer lines. Refractory element alloys resist sulfidic and naphthenic acid environments.',
    specs: ['To 650°C operating temperature', 'Sulfidic corrosion rated', 'Alloy 400 / 800 elements'],
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Flush-Mount Access Fittings',
    description:
      'Low-profile access hardware for heat exchanger shells, vessel nozzles, and process piping where clearance constraints prevent standard retractable assemblies.',
    specs: ['Flush-to-pipe profile', 'ASME B16.5 Class 150–1500', 'Hot-tap installation option'],
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Intrusive Corrosion Coupons',
    description:
      'Alloy-matched weight-loss coupons with full material certification. Ideal for audit-trail documentation and baseline corrosion rate verification alongside ER probes.',
    specs: ['Alloy-matched materials', 'Full MTR documentation', 'Retrievable under pressure'],
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Chemical Injection Systems',
    description:
      'Neutralizing amine and corrosion inhibitor injection into overhead condensers and distillation column overhead systems to control chloride-induced corrosion.',
    specs: ['Overhead circuit optimized', 'Variable-rate control', 'HPHT check valves'],
    href: '/products/chemical-injection',
  },
];

export default function PetrochemicalPage() {
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
            <span className="text-[#0d1f3c] font-medium">Petrochemical</span>
          </nav>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-[#0d1f3c] text-white overflow-hidden">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#0d1f3c] border-t-4 border-[#e05000]" aria-hidden="true" />
        <div className="cx relative py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="badge badge-orange">Industry Solutions</span>
              <span className="text-[#637c95]">/</span>
              <span className="text-[#b8c8da] text-sm font-medium">Petrochemical</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Petrochemical<br />
              <span className="text-[#e05000]">Corrosion Solutions</span>
            </h1>
            <p className="text-[#b8c8da] text-lg md:text-xl leading-relaxed max-w-2xl">
              Refineries and petrochemical plants operate at the extremes of temperature, pressure,
              and chemical aggression. Cosasco high-temperature probes and flush-mount access systems
              deliver real-time integrity data where conventional monitoring cannot survive.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main 2-col layout ── */}
      <div className="cx py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* ── MAIN CONTENT ── */}
          <main className="lg:col-span-8 space-y-20">

            {/* Challenges */}
            <section>
              <p className="eyebrow mb-2">What We Solve</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0d1f3c] mb-2">Industry Challenges</h2>
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
              <h2 className="text-2xl md:text-3xl font-bold text-[#0d1f3c] mb-2">Recommended Solutions</h2>
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
                      <Link href={p.href} className="mt-auto flex items-center gap-1.5 text-sm font-bold text-[#0d1f3c] hover:text-[#e05000] transition-colors">
                        View Product <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Case Study */}
            <section>
              <p className="eyebrow mb-2">Proven Results</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0d1f3c] mb-2">Case Study</h2>
              <div className="w-12 h-1 bg-[#e05000] rounded mb-8" />
              <div className="bg-[#0d1f3c] rounded-xl overflow-hidden">
                <div className="p-8 md:p-10">
                  <span className="badge badge-orange mb-5">Gulf Coast Refinery</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    High-Temperature Monitoring Extends Coker Run-Length by Two Months
                  </h3>
                  <p className="text-[#b8c8da] leading-relaxed mb-8 text-sm">
                    A Gulf Coast refinery installed Cosasco high-temperature ER probes in the delayed
                    coker transfer lines and fractionator bottoms circuit. Continuous wall-loss trending
                    replaced 6-month manual UT campaigns, providing the data record regulators required
                    to sanction a run-length extension from 18 to 20 months — saving an estimated
                    $4.2M in avoided turnaround costs.
                  </p>
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {[
                      { value: '2 mo', label: 'Run-Length Extension' },
                      { value: '$4.2M', label: 'Avoided Turnaround Cost' },
                      { value: '94%', label: 'Data Uptime Achieved' },
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
                      "We finally had real-time data in the coker transfer line, not a six-month
                      snapshot. That changed the conversation with our inspection authority entirely."
                    </p>
                    <p className="text-[#637c95] text-xs font-semibold">
                      — Senior Integrity Engineer, Gulf Coast Refinery
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* ── SIDEBAR ── */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#0d1f3c] rounded-xl p-6 text-white sticky top-6">
              <p className="eyebrow text-[#e05000] mb-3">Get Expert Guidance</p>
              <h3 className="text-lg font-bold mb-3">Speak with a Refinery Specialist</h3>
              <p className="text-[#b8c8da] text-sm leading-relaxed mb-5">
                Our engineers understand refinery unit operations, API inspection intervals, and
                the data requirements of modern RBI programs.
              </p>
              <Link href="/contact" className="btn btn-primary w-full justify-center mb-3">
                <Phone className="w-4 h-4" /> Contact an Expert
              </Link>
              <p className="text-center text-xs text-[#637c95]">Response within 1 business day</p>
            </div>
            <div className="card p-6">
              <FileDown className="w-6 h-6 text-[#e05000] mb-3" />
              <h3 className="text-base font-bold text-[#0d1f3c] mb-2">Petrochemical Application Guide</h3>
              <p className="text-sm text-[#637c95] leading-relaxed mb-4">
                High-temperature probe selection, refinery circuit monitoring strategies, and RBI
                program integration guidance.
              </p>
              <Link href="/resources" className="btn btn-outline-navy w-full justify-center text-sm">
                Download PDF
              </Link>
            </div>
            <div className="card p-6">
              <h3 className="text-base font-bold text-[#0d1f3c] mb-4">Related Industries</h3>
              <ul className="space-y-3">
                {[
                  { name: 'Oil & Gas', href: '/solutions/oil-gas' },
                  { name: 'Chemical Processing', href: '/solutions/chemical-processing' },
                  { name: 'Utilities', href: '/solutions/utilities' },
                ].map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="flex items-center gap-2 text-sm text-[#4a5e72] hover:text-[#e05000] transition-colors font-medium">
                      <ArrowRight className="w-3.5 h-3.5 text-[#e05000]" /> {r.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="divider my-4" />
              <Link href="/solutions" className="flex items-center gap-1.5 text-sm text-[#637c95] hover:text-[#0d1f3c] transition-colors">
                <ChevronRight className="w-3.5 h-3.5" /> View All Industries
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
