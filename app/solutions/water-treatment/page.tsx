import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Waves,
  Microscope,
  FlaskConical,
  ArrowRight,
  Phone,
  FileDown,
  CheckCircle,
  Quote,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Water Treatment Corrosion Solutions | Cosasco',
  description:
    'Cosasco corrosion monitoring probes, bypass coupon assemblies, and chemical dosing quills protect municipal and industrial water and wastewater treatment infrastructure.',
};

const challenges = [
  {
    icon: Waves,
    title: 'pH Variability & Chlorine-Induced Corrosion',
    body: 'Distribution mains, treatment vessels, and process piping experience pH excursions during upset events, seasonal source-water changes, and chemical dosing variations. Chlorine and chloramine disinfectants attack mild steel and galvanized pipe aggressively at elevated concentrations. Cosasco low-profile ER probes placed at corrosion sentinel locations provide continuous detection of accelerated wall-loss events before they propagate to costly failures.',
  },
  {
    icon: Microscope,
    title: 'Microbiologically Influenced Corrosion (MIC)',
    body: 'Stagnant zones, dead legs, and low-flow areas in raw water intake structures, clarifiers, and filter backwash piping accumulate biofilm colonies — sulfate-reducing bacteria (SRB), iron-oxidizing bacteria, and methanogens that drive accelerated localized corrosion. Cosasco bypass coupon assemblies with retrievable coupons enable periodic microbiological sampling alongside weight-loss measurement, providing both corrosion rate and biological activity data from the same monitoring point.',
  },
  {
    icon: FlaskConical,
    title: 'Chemical Dosing Optimization',
    body: 'Corrosion inhibitor, scale inhibitor, biocide, and pH-adjustment chemical costs represent significant operating expense in large water treatment facilities. Under-dosing risks corrosion and regulatory non-compliance; over-dosing raises costs and may create secondary chemistry problems. Cosasco chemical injection quills optimized for low-velocity water systems provide uniform reagent dispersion, while ER probe feedback enables dose-response correlation to achieve the minimum effective dosing rate.',
  },
];

const products = [
  {
    name: 'Low-Profile ER Probes',
    description:
      'Compact electrical resistance probes designed for water system pressures and flow velocities. Ideal for distribution mains, treatment vessels, and pump station piping.',
    specs: ['Rated to 300 psi / 20 bar', 'Stainless and glass-filled nylon bodies', 'Compatible with FieldCom loggers'],
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Bypass Coupon Assemblies',
    description:
      'Side-stream bypass piping assemblies that expose weighted corrosion coupons to representative process flow. Enables sample retrieval without main-line isolation.',
    specs: ['Full-flow or bypass configurations', 'Multiple coupon slots', 'CPVC and stainless options'],
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Chemical Dosing Quills',
    description:
      'Quill-tip injection assemblies for uniform reagent dispersion in water mains and treatment vessels. Low-velocity optimized to prevent short-circuit dosing near injection point.',
    specs: ['316SS and CPVC materials', 'Adjustable insertion depth', 'Integral check valve'],
    href: '/products/chemical-injection',
  },
  {
    name: 'Automated Data Loggers',
    description:
      'Wireless and wired data acquisition for continuous ER probe monitoring across distributed water infrastructure. SCADA-compatible outputs for integration with SCADA/HMI systems.',
    specs: ['4-20 mA and Modbus outputs', 'Solar-powered option', 'Cloud data portal included'],
    href: '/products/data-acquisition',
  },
];

export default function WaterTreatmentPage() {
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
            <span className="text-[#0d1f3c] font-medium">Water Treatment</span>
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
              <span className="text-[#b8c8da] text-sm font-medium">Water Treatment</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Water Treatment<br />
              <span className="text-[#e05000]">Corrosion Solutions</span>
            </h1>
            <p className="text-[#b8c8da] text-lg md:text-xl leading-relaxed max-w-2xl">
              Municipal and industrial water infrastructure demands reliable, low-maintenance corrosion
              monitoring. Cosasco provides probes, bypass coupon assemblies, and chemical dosing quills
              suited for pH-variable environments, chlorinated systems, and biofilm-prone networks.
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
                  <span className="badge badge-orange mb-5">Midwest Municipal Utility</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    MIC Detection Program Prevents Major Distribution Main Failure
                  </h3>
                  <p className="text-[#b8c8da] leading-relaxed mb-8 text-sm">
                    A Midwest municipal water utility deployed Cosasco bypass coupon assemblies at
                    12 low-flow sentinel locations throughout their aging cast-iron distribution network.
                    SRB colonies were detected at three locations within the first monitoring period,
                    enabling targeted biocide dosing and lining rehabilitation before any main failures
                    occurred. The utility avoided an estimated $2.8M in emergency repair costs.
                  </p>
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {[
                      { value: '12', label: 'Monitoring Stations Deployed' },
                      { value: '3', label: 'MIC Hot Spots Detected' },
                      { value: '$2.8M', label: 'Avoided Repair Costs' },
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
                      "The bypass coupon program gave us early warning on MIC activity we would
                      never have caught with our conventional annual inspection schedule."
                    </p>
                    <p className="text-[#637c95] text-xs font-semibold">
                      — Distribution System Engineer, Midwest Municipal Utility
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#0d1f3c] rounded-xl p-6 text-white sticky top-6">
              <p className="eyebrow text-[#e05000] mb-3">Get Expert Guidance</p>
              <h3 className="text-lg font-bold mb-3">Speak with a Water Treatment Specialist</h3>
              <p className="text-[#b8c8da] text-sm leading-relaxed mb-5">
                Our engineers understand municipal water regulations, EPA guidelines, and the unique
                corrosion challenges of potable and industrial water systems.
              </p>
              <Link href="/contact" className="btn btn-primary w-full justify-center mb-3">
                <Phone className="w-4 h-4" /> Contact an Expert
              </Link>
              <p className="text-center text-xs text-[#637c95]">Response within 1 business day</p>
            </div>
            <div className="card p-6">
              <FileDown className="w-6 h-6 text-[#e05000] mb-3" />
              <h3 className="text-base font-bold text-[#0d1f3c] mb-2">Water Treatment Application Guide</h3>
              <p className="text-sm text-[#637c95] leading-relaxed mb-4">
                Probe selection, bypass assembly configurations, and MIC monitoring program design
                for municipal and industrial water systems.
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
                  { name: 'Pulp & Paper', href: '/solutions/pulp-paper' },
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
