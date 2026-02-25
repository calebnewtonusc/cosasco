import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Corrosion Monitoring Fundamentals: ER Probes vs. LPR vs. Coupons | Cosasco Blog',
  description:
    'Understanding the core differences between electrical resistance, linear polarization, and weight-loss corrosion monitoring methods — and when to use each.',
}

export default function CorrosionMonitoringFundamentals() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-[#0f2a4a] pt-[72px] pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="text-[#5a7a94] text-sm mb-6 flex flex-wrap gap-1 items-center">
            <Link href="/resources" className="hover:text-[#f4a65d] transition-colors">Resources</Link>
            <span className="mx-1">/</span>
            <Link href="/resources/blog" className="hover:text-[#f4a65d] transition-colors">Blog</Link>
            <span className="mx-1">/</span>
            <span className="text-white">Monitoring Fundamentals</span>
          </nav>
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#dbeafe] text-[#1d4ed8] mb-5">
            Technical Guide
          </span>
          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight max-w-4xl mb-5">
            Corrosion Monitoring Fundamentals: ER Probes vs. LPR vs. Coupons
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#94aabb]">
            <span className="font-semibold text-white">Cosasco Engineering Team</span>
            <span className="text-[#3a5a74]">|</span>
            <span>Feb 12, 2026</span>
            <span className="text-[#3a5a74]">|</span>
            <span>8 min read</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          {/* Main article */}
          <article className="lg:col-span-2 prose-cosasco">
            <div className="text-[#566677] leading-relaxed space-y-6 text-[1.05rem]">
              <p className="text-xl text-[#0f2a4a] font-semibold leading-snug">
                Choosing the right corrosion monitoring technology is one of the most consequential
                decisions in an integrity management program. Each method has distinct strengths,
                limitations, and appropriate applications.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                Electrical Resistance (ER) Probes
              </h2>
              <p>
                ER probes measure the increase in electrical resistance of a metal element as it
                corrodes and loses cross-sectional area. Because resistance is inversely proportional
                to the remaining metal thickness, the cumulative metal loss can be tracked over time
                with high precision — down to fractions of a mil per year in modern instruments.
              </p>
              <p>
                The key advantage of ER probes is their ability to operate in virtually any
                environment: gas, liquid, multiphase, and even intermittently wet conditions. They
                do not require an electrolyte to function, unlike electrochemical methods. This makes
                ER the default choice for gas pipelines, vapor spaces, and process streams where
                flow conditions change frequently.
              </p>
              <p>
                Modern ER probes from Cosasco achieve measurement resolutions of ±0.001 mpy, with
                element geometries ranging from flush-mount flush elements for clean service to
                cylindrical wire elements for general-purpose applications. Temperature compensation
                is built in to eliminate false readings from thermal fluctuations.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                Linear Polarization Resistance (LPR)
              </h2>
              <p>
                LPR probes measure instantaneous corrosion rate rather than cumulative metal loss.
                A small electrochemical perturbation (±10–20 mV) is applied to the working electrode,
                and the current response is used to calculate polarization resistance (Rp), which is
                inversely proportional to corrosion rate via the Stern-Geary relationship.
              </p>
              <p>
                LPR excels at detecting rapid changes in corrosion rate — making it ideal for
                monitoring the effectiveness of corrosion inhibitor injection in real time. Where ER
                probes might take days or weeks to register a meaningful change in cumulative loss,
                LPR can show a corrosion rate shift within minutes of an inhibitor dosage change.
              </p>
              <p>
                The limitation is that LPR requires a conductive electrolyte (water) at the probe
                surface. In low-water-cut or gas-phase systems, LPR gives unreliable or no readings.
                It also measures only the active corrosion rate at that moment — historical
                cumulative loss must be integrated over time, introducing uncertainty.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                Corrosion Coupons (Weight-Loss)
              </h2>
              <p>
                Weight-loss coupons are the oldest and most straightforward method: a metal specimen
                of known weight is inserted into the process stream, exposed for a defined period,
                then retrieved, cleaned, and weighed. The difference in mass divided by the exposed
                surface area and time gives the average corrosion rate over the exposure period.
              </p>
              <p>
                Coupons provide the most direct measurement of actual material loss — no
                instrumentation uncertainty, no calibration drift, no sensor fouling. They also
                allow visual inspection of the corrosion morphology (pitting, uniform, crevice),
                and the retrieved coupon surface can be analyzed for deposits, microbiological
                activity (MIC), and elemental composition.
              </p>
              <p>
                The major limitation is that coupons are non-continuous. Rates are averaged over the
                entire exposure period, masking short-term excursions. Typical retrieval intervals
                range from 30 to 90 days in most pipeline programs.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                When to Use Each Method
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#0f2a4a] text-white">
                      <th className="text-left p-3 font-semibold">Factor</th>
                      <th className="text-left p-3 font-semibold">ER Probe</th>
                      <th className="text-left p-3 font-semibold">LPR Probe</th>
                      <th className="text-left p-3 font-semibold">Coupon</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Response speed', 'Hours–days', 'Minutes', 'Weeks–months'],
                      ['Continuous monitoring', '✓', '✓', '✗'],
                      ['Requires electrolyte', '✗', '✓', '✓'],
                      ['Gas phase use', '✓', '✗', '✓'],
                      ['Morphology analysis', '✗', '✗', '✓'],
                      ['Inhibitor effectiveness', 'Moderate', 'Excellent', 'Poor'],
                      ['Typical cost', 'Moderate', 'Higher', 'Low'],
                    ].map(([factor, er, lpr, coupon], i) => (
                      <tr key={factor} className={i % 2 === 0 ? 'bg-[#f7f9fc]' : 'bg-white'}>
                        <td className="p-3 font-semibold text-[#0f2a4a] border border-[#e8edf2]">{factor}</td>
                        <td className="p-3 text-[#566677] border border-[#e8edf2]">{er}</td>
                        <td className="p-3 text-[#566677] border border-[#e8edf2]">{lpr}</td>
                        <td className="p-3 text-[#566677] border border-[#e8edf2]">{coupon}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                The Case for Multi-Method Programs
              </h2>
              <p>
                In practice, most high-integrity pipeline programs deploy at least two complementary
                methods. A common combination is ER probes for continuous cumulative loss trending
                plus LPR for real-time inhibitor response monitoring, with quarterly coupon pulls
                for morphological confirmation and MIC assessment.
              </p>
              <p>
                Cosasco systems are designed for multi-method deployments: HPHT retrievable
                assemblies accommodate both probe types in the same access fitting, and CDO
                data management software normalizes data from all three methods into a single
                corrosion rate dashboard.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-[#f0f4f8] border border-[#e8edf2] rounded-xl p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#566677] mb-4">
                Related Resources
              </p>
              <ul className="space-y-3">
                {[
                  { href: '/products/er-probes', label: 'ER Probe Product Line' },
                  { href: '/products/lpr-probes', label: 'LPR Probe Systems' },
                  { href: '/products/coupons', label: 'Corrosion Coupons & Holders' },
                  { href: '/tools/device-length-calculator', label: 'Device Length Calculator' },
                  { href: '/resources/case-studies/north-sea-pipeline', label: 'North Sea Case Study' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[#0f2a4a] text-sm font-medium hover:text-[#f4a65d] transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-[#f4a65d] flex-shrink-0" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0f2a4a] rounded-xl p-6 text-white">
              <p className="font-black text-lg mb-2">Need Help Choosing?</p>
              <p className="text-[#94aabb] text-sm leading-relaxed mb-4">
                Our corrosion engineers can review your process conditions and recommend the optimal
                monitoring strategy for your application.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-[#f4a65d] hover:bg-[#d4892a] text-white font-bold py-3 rounded-lg transition-colors text-sm"
              >
                Talk to an Engineer
              </Link>
            </div>

            <div className="bg-white border border-[#e8edf2] rounded-xl p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#566677] mb-4">
                More Articles
              </p>
              <ul className="space-y-4">
                {[
                  { href: '/resources/blog/h2s-sour-service-integrity', title: 'H₂S Sour Service Corrosion Management' },
                  { href: '/resources/blog/chemical-injection-optimization', title: 'Right-Sizing Chemical Injection' },
                  { href: '/resources/blog/cdo-cloud-deployment', title: 'CDO Cloud Platform' },
                ].map((a) => (
                  <li key={a.href} className="border-b border-[#e8edf2] pb-4 last:border-0 last:pb-0">
                    <Link href={a.href} className="text-sm text-[#0f2a4a] font-semibold hover:text-[#f4a65d] transition-colors leading-snug block">
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* BACK */}
      <section className="bg-[#f0f4f8] border-t border-[#e8edf2] py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
          <Link href="/resources/blog" className="text-[#0f2a4a] font-semibold flex items-center gap-2 hover:text-[#f4a65d] transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <Link href="/resources/blog/h2s-sour-service-integrity" className="text-[#0f2a4a] font-semibold flex items-center gap-2 hover:text-[#f4a65d] transition-colors text-sm">
            Next: H₂S Sour Service <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
