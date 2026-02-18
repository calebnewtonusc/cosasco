import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  ShieldAlert,
  Beaker,
  ClipboardList,
  ArrowRight,
  Phone,
  FileDown,
  CheckCircle,
  Quote,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Chemical Processing Corrosion Solutions | Cosasco',
  description:
    'Cosasco Hastelloy and titanium probes, PSM-compliant monitoring programs, and specialty alloy access hardware protect chemical plants handling aggressive acid, caustic, and oxidizer service.',
};

const challenges = [
  {
    icon: ShieldAlert,
    title: 'Aggressive Acid & Caustic Service',
    body: 'Sulfuric acid, hydrochloric acid, nitric acid, and sodium hydroxide service demands wetted components that match the process alloy. Standard carbon steel probes corrode out of service within weeks. Cosasco offers ER probes and coupon holders in Hastelloy C276, C22, Alloy 20, titanium Grade 2, and PTFE-lined configurations — matched to your specific process chemistry and temperature. Full material test reports (MTRs) are provided for every pressure-containing component.',
  },
  {
    icon: ClipboardList,
    title: 'PSM Compliance & Audit Trail Requirements',
    body: 'OSHA 29 CFR 1910.119 Process Safety Management and EPA RMP regulations require documented mechanical integrity programs for hazardous chemical systems. Corrosion monitoring data forms the technical basis for inspection intervals and equipment life assessment. Cosasco monitoring systems provide time-stamped corrosion rate records, downloadable reports, and SCADA integration — generating the compliance documentation that PSM inspectors and insurance auditors require.',
  },
  {
    icon: Beaker,
    title: 'Overhead & Vapor-Phase Corrosion',
    body: 'Reactor overhead systems, condenser inlets, and distillation column overhead circuits experience concentrated acid condensate attack as vapors cool to dew point. These locations are frequently the most aggressive in the plant and among the most difficult to access for inspection. Cosasco compact ER probes in alloy-matched wetted materials can be installed directly in overhead vapor lines or condenser inlet nozzles to detect dew-point corrosion onset before thinning becomes critical.',
  },
];

const products = [
  {
    name: 'Hastelloy & Titanium ER Probes',
    description:
      'High-alloy electrical resistance probes for acid, caustic, oxidizer, and halide service. Wetted elements and process connections available in C276, C22, Alloy 20, titanium Gr. 2, and PTFE.',
    specs: ['Full alloy wetted path', 'MTR documentation included', 'To 400°C / 750°F rated'],
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Chemical Injection Systems',
    description:
      'Alloy-body injection quills and check valves for corrosion inhibitor, neutralizing agent, and passivator delivery into aggressive chemical streams.',
    specs: ['Hastelloy / titanium bodies', 'Spring-loaded check valves', 'High-alloy compression fittings'],
    href: '/products/chemical-injection',
  },
  {
    name: 'Non-Intrusive Coupon Holders',
    description:
      'Side-stream or bypass coupon holders in specialty alloys for gravimetric corrosion rate measurement and PSM compliance documentation.',
    specs: ['Alloy-matched construction', 'CPVC and alloy body options', 'Multiple coupon capacity'],
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Access Hardware & Fittings',
    description:
      'Alloy weld-on and threaded access fittings for safe probe installation in acid, caustic, and oxidizer service piping and vessels.',
    specs: ['Alloy 20 / Hastelloy bodies', 'Full pressure rating documentation', 'Hot-tap rated'],
    href: '/products/corrosion-monitoring',
  },
];

export default function ChemicalProcessingPage() {
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
            <span className="text-[#0d1f3c] font-medium">Chemical Processing</span>
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
              <span className="text-[#b8c8da] text-sm font-medium">Chemical Processing</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Chemical Processing<br />
              <span className="text-[#e05000]">Corrosion Solutions</span>
            </h1>
            <p className="text-[#b8c8da] text-lg md:text-xl leading-relaxed max-w-2xl">
              Chemical plants handle hundreds of aggressive media across wide ranges of temperature
              and pressure. Cosasco offers a complete range of high-alloy probes, injection systems,
              and access hardware — with full material traceability for PSM compliance.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main 2-col layout ── */}
      <div className="cx py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          <main className="lg:col-span-8 space-y-20">

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
                            <CheckCircle className="w-3.5 h-3.5 text-[#e05000] flex-shrink-0" /> {s}
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

            <section>
              <p className="eyebrow mb-2">Proven Results</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0d1f3c] mb-2">Case Study</h2>
              <div className="w-12 h-1 bg-[#e05000] rounded mb-8" />
              <div className="bg-[#0d1f3c] rounded-xl overflow-hidden">
                <div className="p-8 md:p-10">
                  <span className="badge badge-orange mb-5">Specialty Chemicals Producer</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    Hastelloy Probe Program Builds PSM Compliance Record for Sulfuric Acid Unit
                  </h3>
                  <p className="text-[#b8c8da] leading-relaxed mb-8 text-sm">
                    A specialty chemicals producer handling 93% sulfuric acid required a documented
                    corrosion monitoring program to satisfy OSHA PSM audit requirements. Cosasco
                    Hastelloy C276 ER probes were installed at six critical circuit locations with
                    automated data logging and report generation. The program produced a two-year
                    continuous corrosion rate record that satisfied the PSM mechanical integrity
                    documentation requirement and eliminated one scheduled inspection outage.
                  </p>
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {[
                      { value: '6', label: 'Critical Monitoring Points' },
                      { value: '2 yr', label: 'Continuous Data Record' },
                      { value: '1', label: 'Inspection Outage Eliminated' },
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
                      "The Cosasco team understood alloy selection and PSM documentation requirements
                      from the first conversation. The program passed our OSHA PSM audit with no findings."
                    </p>
                    <p className="text-[#637c95] text-xs font-semibold">
                      — Process Safety Manager, Specialty Chemicals Facility
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#0d1f3c] rounded-xl p-6 text-white sticky top-6">
              <p className="eyebrow text-[#e05000] mb-3">Get Expert Guidance</p>
              <h3 className="text-lg font-bold mb-3">Speak with a Chemical Processing Specialist</h3>
              <p className="text-[#b8c8da] text-sm leading-relaxed mb-5">
                Our engineers have deep experience with PSM programs, high-alloy material selection,
                and corrosion monitoring in aggressive chemical service.
              </p>
              <Link href="/contact" className="btn btn-primary w-full justify-center mb-3">
                <Phone className="w-4 h-4" /> Contact an Expert
              </Link>
              <p className="text-center text-xs text-[#637c95]">Response within 1 business day</p>
            </div>
            <div className="card p-6">
              <FileDown className="w-6 h-6 text-[#e05000] mb-3" />
              <h3 className="text-base font-bold text-[#0d1f3c] mb-2">Chemical Processing Application Guide</h3>
              <p className="text-sm text-[#637c95] leading-relaxed mb-4">
                Alloy selection guide, PSM compliance documentation approach, and monitoring program
                design for aggressive chemical service applications.
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
                  { name: 'Petrochemical', href: '/solutions/petrochemical' },
                  { name: 'Pulp & Paper', href: '/solutions/pulp-paper' },
                  { name: 'Water Treatment', href: '/solutions/water-treatment' },
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
