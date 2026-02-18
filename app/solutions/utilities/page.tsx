import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Thermometer,
  Droplets,
  ShieldCheck,
  ArrowRight,
  Phone,
  FileDown,
  CheckCircle,
  Quote,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Utilities Corrosion Solutions | Cosasco',
  description:
    'Cosasco ER probes, cooling water injection quills, and automated data loggers protect power generation, district cooling, and utility infrastructure from corrosion-related failures and regulatory non-compliance.',
};

const challenges = [
  {
    icon: Droplets,
    title: 'Cooling Water & Condenser Tube Corrosion',
    body: 'Cooling water systems — whether once-through, recirculating, or closed-loop — expose condenser tubes, heat exchanger shells, and cooling tower structure to complex corrosion chemistry. Dissolved oxygen, chloride, biological activity, and aggressive treatment chemicals all contribute. Cosasco retractable ER probes installed in cooling tower basins, condenser waterboxes, and supply and return headers provide the continuous corrosion rate data needed to optimize treatment chemical dosing and detect excursions before condenser tube failures force unplanned outages.',
  },
  {
    icon: Thermometer,
    title: 'Steam Cycle Chemistry & Boiler Water Treatment',
    body: 'Feed water, boiler water, steam, and condensate systems require precise chemistry control to prevent corrosion-related failures in economizers, steam drums, superheaters, and condensate return lines. CO2 and O2 ingress, caustic gouging, under-deposit corrosion, and flow-accelerated corrosion (FAC) are common failure mechanisms in utility steam cycles. Cosasco bypass probe assemblies in the feedwater and condensate circuits track real-time corrosion response to chemistry adjustments, providing early warning of treatment upsets.',
  },
  {
    icon: ShieldCheck,
    title: 'Atmospheric Corrosion & Regulatory Compliance',
    body: 'Transmission towers, substation structures, and outdoor utility infrastructure face accelerated atmospheric corrosion in coastal, industrial, and high-humidity environments. Regulatory asset integrity requirements demand documented inspection intervals and corrosion rate data. Cosasco atmospheric corrosion coupons, installed at representative structural locations, provide the weight-loss data and inspection records that regulators and insurers require for compliance documentation.',
  },
];

const products = [
  {
    name: 'Retractable ER Probes',
    description:
      'Continuous wall-loss monitoring in cooling water headers, condenser waterboxes, and steam system piping. Retractable design allows probe replacement without system drainage.',
    specs: ['Live-line retraction', 'Low-profile stainless body', 'FieldCom compatible'],
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Cooling Water Injection Quills',
    description:
      'Corrosion inhibitor, scale inhibitor, biocide, and dispersant injection quills optimized for cooling tower basin, supply header, and condenser inlet dosing.',
    specs: ['316SS standard construction', 'Adjustable injection depth', 'Full-port and quill-tip styles'],
    href: '/products/chemical-injection',
  },
  {
    name: 'Bypass Coupon Assemblies',
    description:
      'Side-stream assemblies for gravimetric corrosion rate measurement in cooling water and condensate return systems. Multiple coupon slots for comparative alloy testing.',
    specs: ['CPVC and stainless body', 'Adjustable flow rate', 'Retrievable under pressure'],
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Automated Data Loggers',
    description:
      'FieldCom wireless loggers and wired data acquisition for continuous ER probe monitoring across distributed utility infrastructure. SCADA and cloud portal integration.',
    specs: ['Wireless mesh network', '4-20 mA / Modbus RTU', 'Cloud data portal included'],
    href: '/products/data-acquisition',
  },
];

export default function UtilitiesPage() {
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
            <span className="text-[#0d1f3c] font-medium">Utilities</span>
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
              <span className="text-[#b8c8da] text-sm font-medium">Utilities</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Utilities<br />
              <span className="text-[#e05000]">Corrosion Solutions</span>
            </h1>
            <p className="text-[#b8c8da] text-lg md:text-xl leading-relaxed max-w-2xl">
              Power generation and district cooling infrastructure face corrosion from cooling water
              chemistry, steam cycle degradation, and atmospheric exposure. Cosasco monitoring
              hardware and chemical injection systems extend asset life and reduce unplanned outages.
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
                  <span className="badge badge-orange mb-5">Combined-Cycle Power Plant</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    Cooling Water Monitoring Program Eliminates Condenser Tube Failures
                  </h3>
                  <p className="text-[#b8c8da] leading-relaxed mb-8 text-sm">
                    A 500 MW combined-cycle plant in the Southwest was experiencing four to six
                    condenser tube failures per operating year due to pitting corrosion from microbiological
                    activity and chloride ingress. Cosasco installed ER probes at eight locations in the
                    cooling water circuit and paired them with precision-dosing biocide injection quills.
                    Real-time corrosion rate feedback enabled the chemistry team to achieve optimal biocide
                    dosing. In the two years following program implementation, the plant recorded zero
                    condenser tube failures.
                  </p>
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {[
                      { value: '0', label: 'Condenser Failures (2 yrs post)' },
                      { value: '41%', label: 'Biocide Cost Reduction' },
                      { value: '8 mo', label: 'Payback Period' },
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
                      "Two full operating years with zero condenser failures after four to six per year
                      before the program. The data from the Cosasco probes completely changed how we
                      manage our cooling water chemistry."
                    </p>
                    <p className="text-[#637c95] text-xs font-semibold">
                      — Plant Chemistry Engineer, Combined-Cycle Power Station
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#0d1f3c] rounded-xl p-6 text-white sticky top-6">
              <p className="eyebrow text-[#e05000] mb-3">Get Expert Guidance</p>
              <h3 className="text-lg font-bold mb-3">Speak with a Utilities Specialist</h3>
              <p className="text-[#b8c8da] text-sm leading-relaxed mb-5">
                Our engineers understand power plant cooling water chemistry, steam cycle integrity,
                and NERC/FERC compliance documentation requirements.
              </p>
              <Link href="/contact" className="btn btn-primary w-full justify-center mb-3">
                <Phone className="w-4 h-4" /> Contact an Expert
              </Link>
              <p className="text-center text-xs text-[#637c95]">Response within 1 business day</p>
            </div>
            <div className="card p-6">
              <FileDown className="w-6 h-6 text-[#e05000] mb-3" />
              <h3 className="text-base font-bold text-[#0d1f3c] mb-2">Utilities Application Guide</h3>
              <p className="text-sm text-[#637c95] leading-relaxed mb-4">
                Cooling water monitoring configurations, steam cycle probe placement, and
                compliance documentation guidance for regulated utility operators.
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
                  { name: 'Water Treatment', href: '/solutions/water-treatment' },
                  { name: 'Chemical Processing', href: '/solutions/chemical-processing' },
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
