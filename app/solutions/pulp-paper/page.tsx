import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Flame,
  Droplets,
  Wind,
  ArrowRight,
  Phone,
  FileDown,
  CheckCircle,
  Quote,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pulp & Paper Corrosion Solutions | Cosasco',
  description:
    'Cosasco chemical-resistant probes, retractable systems, and insertion coupons protect kraft and sulfite pulp mills from digester, bleach plant, black liquor, and steam condensate corrosion.',
};

const challenges = [
  {
    icon: Flame,
    title: 'Kraft Digester & Black Liquor Corrosion',
    body: 'Kraft cooking liquor — white liquor, black liquor, and green liquor — is a highly alkaline sulfide-bearing solution that aggressively attacks carbon steel at cooking temperatures up to 175°C. Recovery boiler evaporators and liquor storage tanks are particularly vulnerable. Cosasco chemical-resistant ER probes rated for alkaline sulfide service provide continuous wall-loss monitoring in digester circuits, liquor tanks, and recovery evaporator bodies, enabling the integrity team to detect accelerated attack between major inspections.',
  },
  {
    icon: Droplets,
    title: 'Bleach Plant Oxidizing Chemistry',
    body: 'Chlorine dioxide, hypochlorite, hydrogen peroxide, and ozone bleaching stages expose stainless steel and fiber cement lining to powerful oxidizing environments. Stainless steel sensitization, pitting, and stress corrosion cracking are common failure modes in bleach plant towers, washers, and piping. Cosasco offers probes and coupons in duplex stainless, Hastelloy, and titanium specifically for oxidizing bleach stage chemistry — with element alloys selected to match your specific stage chemistry.',
  },
  {
    icon: Wind,
    title: 'Steam & Condensate System Degradation',
    body: 'Steam condensate corrosion from CO2 and O2 in-leakage attacks return line piping throughout the mill. Erosion-corrosion at steam trap discharge points and flash tank inlets compounds the problem. Cosasco bypass coupon assemblies and ER probes in condensate return lines quantify corrosion rates, helping steam system operators optimize amine neutralizer and oxygen scavenger dosing to protect the entire condensate return system.',
  },
];

const products = [
  {
    name: 'Chemical-Resistant ER Probes',
    description:
      'Probes in duplex SS, Hastelloy C276, and titanium for bleach plant and cooking liquor service. Wetted element geometry and alloy matched to process stage chemistry and temperature.',
    specs: ['Duplex, Hastelloy, titanium options', 'Oxidizing and alkaline rated', 'MTR documentation included'],
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Retractable Probe Systems',
    description:
      'Safe probe insertion and retrieval under operating pressure without mill production interruption. Eliminates confined space entry for monitoring purposes in pressurized digester circuits.',
    specs: ['Live-line retraction', 'Manual and hydraulic-assist', 'High-temperature rated'],
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Insertion Corrosion Coupons',
    description:
      'Alloy-matched weight-loss coupons for gravimetric corrosion rate measurement. Available in all standard mill alloys for comparison with on-line ER probe data.',
    specs: ['Alloy-matched materials', 'TAPPI standard dimensions', 'Full MTR documentation'],
    href: '/products/corrosion-monitoring',
  },
  {
    name: 'Chemical Injection Quills',
    description:
      'Corrosion inhibitor, oxygen scavenger, and scale inhibitor injection quills in alloy body construction for aggressive pulp mill chemical environments.',
    specs: ['316SS and alloy bodies', 'Adjustable insertion depth', 'Spring-loaded check valve'],
    href: '/products/chemical-injection',
  },
];

export default function PulpPaperPage() {
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
            <span className="text-[#0d1f3c] font-medium">Pulp &amp; Paper</span>
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
              <span className="text-[#b8c8da] text-sm font-medium">Pulp &amp; Paper</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Pulp &amp; Paper<br />
              <span className="text-[#e05000]">Corrosion Solutions</span>
            </h1>
            <p className="text-[#b8c8da] text-lg md:text-xl leading-relaxed max-w-2xl">
              Kraft and sulfite mills expose structural steel and process equipment to caustic cooking
              liquors, powerful oxidizing bleach chemistry, and aggressive steam condensate corrosion.
              Cosasco field-proven monitoring solutions protect your mill assets and sustain production continuity.
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
                  <span className="badge badge-orange mb-5">Pacific Northwest Kraft Mill</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    Digester Circuit Monitoring Detects White Liquor Corrosion Before Vessel Failure
                  </h3>
                  <p className="text-[#b8c8da] leading-relaxed mb-8 text-sm">
                    A Pacific Northwest kraft mill deployed Cosasco retractable ER probes at four
                    locations in the continuous digester vessel and associated liquor piping. Within
                    three months, a corrosion rate spike was detected at one monitoring point,
                    triggering a focused inspection that revealed stress corrosion cracking initiation
                    in a vessel nozzle. Targeted weld overlay repair was completed in the next scheduled
                    outage window, avoiding a potential catastrophic failure estimated at $12M in
                    equipment damage and lost production.
                  </p>
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {[
                      { value: '4', label: 'Monitoring Points Installed' },
                      { value: '3 mo', label: 'Time to Detection' },
                      { value: '$12M', label: 'Estimated Failure Avoided' },
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
                      "The probe detected the corrosion rate excursion months before our annual
                      UT would have caught wall thinning. We had time to plan and execute the
                      repair properly."
                    </p>
                    <p className="text-[#637c95] text-xs font-semibold">
                      — Chief Mechanical Engineer, Pacific Northwest Kraft Mill
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#0d1f3c] rounded-xl p-6 text-white sticky top-6">
              <p className="eyebrow text-[#e05000] mb-3">Get Expert Guidance</p>
              <h3 className="text-lg font-bold mb-3">Speak with a Pulp &amp; Paper Specialist</h3>
              <p className="text-[#b8c8da] text-sm leading-relaxed mb-5">
                Our engineers understand kraft and sulfite process chemistry, TAPPI inspection
                standards, and the corrosion challenges unique to pulp mill environments.
              </p>
              <Link href="/contact" className="btn btn-primary w-full justify-center mb-3">
                <Phone className="w-4 h-4" /> Contact an Expert
              </Link>
              <p className="text-center text-xs text-[#637c95]">Response within 1 business day</p>
            </div>
            <div className="card p-6">
              <FileDown className="w-6 h-6 text-[#e05000] mb-3" />
              <h3 className="text-base font-bold text-[#0d1f3c] mb-2">Pulp &amp; Paper Application Guide</h3>
              <p className="text-sm text-[#637c95] leading-relaxed mb-4">
                Alloy selection for bleach plant and cooking liquor service, monitoring program
                design, and steam condensate treatment guidance.
              </p>
              <Link href="/resources" className="btn btn-outline-navy w-full justify-center text-sm">
                Download PDF
              </Link>
            </div>
            <div className="card p-6">
              <h3 className="text-base font-bold text-[#0d1f3c] mb-4">Related Industries</h3>
              <ul className="space-y-3">
                {[
                  { name: 'Chemical Processing', href: '/solutions/chemical-processing' },
                  { name: 'Water Treatment', href: '/solutions/water-treatment' },
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
