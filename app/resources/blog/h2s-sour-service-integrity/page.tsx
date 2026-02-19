import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Managing Corrosion in H₂S Sour Service | Cosasco Blog',
  description:
    'Hydrogen sulfide creates unique challenges for pipeline integrity. What the data from 200+ sour gas deployments tells us about corrosion monitoring strategy.',
}

export default function H2SSourServicePage() {
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
            <span className="text-white">H₂S Sour Service</span>
          </nav>
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#d1fae5] text-[#065f46] mb-5">
            Field Applications
          </span>
          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight max-w-4xl mb-5">
            Managing Corrosion in H₂S Sour Service: A Field Engineer&apos;s Perspective
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#94aabb]">
            <span className="font-semibold text-white">James Whitfield, Sr. Field Engineer</span>
            <span className="text-[#3a5a74]">|</span>
            <span>Jan 28, 2026</span>
            <span className="text-[#3a5a74]">|</span>
            <span>6 min read</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2">
            <div className="text-[#566677] leading-relaxed space-y-6 text-[1.05rem]">
              <p className="text-xl text-[#0f2a4a] font-semibold leading-snug">
                Sour service — any system containing H₂S above NACE MR0175 thresholds — presents a
                fundamentally different corrosion challenge than sweet service. The mechanisms are
                different, the failure modes are different, and the monitoring strategy needs to
                reflect that.
              </p>

              <div className="bg-[#fef3c7] border border-[#fbbf24] rounded-xl p-5 flex gap-3">
                <AlertTriangle className="w-5 h-5 text-[#92400e] flex-shrink-0 mt-0.5" />
                <p className="text-[#92400e] text-sm leading-relaxed">
                  <strong>Safety note:</strong> H₂S is acutely toxic at concentrations above 10 ppm.
                  All equipment installed in sour service environments must meet NACE MR0175/ISO 15156
                  material requirements. Cosasco sour service probes are available in SSC-resistant
                  alloys including Alloy 625 and Duplex SS.
                </p>
              </div>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                The H₂S Corrosion Mechanism
              </h2>
              <p>
                In sweet service (CO₂-dominated), the primary corrosion product is iron carbonate
                (FeCO₃), which can form a partially protective scale under the right temperature and
                pH conditions. H₂S disrupts this protection: iron sulfide (FeS) scales are less
                stable, more porous, and can actually accelerate localized corrosion when they
                break down.
              </p>
              <p>
                More critically, H₂S enables hydrogen embrittlement (HE) and sulfide stress
                cracking (SSC). Atomic hydrogen produced during the corrosion reaction diffuses into
                the metal lattice, causing embrittlement of high-strength steels. In susceptible
                materials under tensile stress, this can cause sudden brittle fracture at stress
                levels well below the material's yield strength.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                What 200+ Sour Deployments Tell Us
              </h2>
              <p>
                Over the past 15 years, Cosasco instruments have been deployed in over 200 sour
                service applications across the Middle East, North Africa, and North Sea. Several
                clear patterns emerge from this data:
              </p>
              <ul className="list-none space-y-3">
                {[
                  'Top-of-line corrosion (TLC) is frequently underestimated. In partially-filled pipelines, condensed water at the top of the pipe is more corrosive than the bulk liquid phase — ER probes placed only at the bottom give a false sense of security.',
                  'Pitting rates in H₂S service are highly localized. Average corrosion rates from weight-loss coupons often miss severe pitting that is occurring in isolated areas. Flush-mount ER probes detect this better by measuring the deepest penetration.',
                  'Inhibitor response in H₂S is slower than in sweet service. Allow at least 4–6 hours of LPR monitoring after a dosage change before drawing conclusions about inhibitor effectiveness.',
                  'Temperature above 80°C changes the failure mode. At elevated temperatures, SSC risk diminishes but HIC and SOHIC risk increase. Material selection and monitoring strategy must account for this transition.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="inline-block w-6 h-6 rounded-full bg-[#0f2a4a] text-white text-xs font-bold flex-shrink-0 flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                Recommended Monitoring Strategy for Sour Service
              </h2>
              <p>
                Based on field data, a minimum sour service monitoring program should include:
              </p>
              <div className="bg-[#f0f4f8] border border-[#e8edf2] rounded-xl p-6 space-y-4">
                {[
                  { label: 'Continuous ER monitoring', detail: 'Both top-of-line and bottom-of-line positions. Use cylindrical wire elements in H₂S-resistant alloy (Alloy 625 recommended above 50 ppm H₂S).' },
                  { label: 'Hydrogen flux measurement', detail: 'Atomic hydrogen permeation probes (Devanathan-Stachurski cells) detect early HIC/SSC risk before visible corrosion occurs.' },
                  { label: 'Quarterly coupon retrieval', detail: 'Surface morphology inspection for pitting characterization, FeS scale analysis, and MIC screening.' },
                  { label: 'Inhibitor performance tracking via LPR', detail: 'In water-wetting zones where LPR is viable. Use only SSC-resistant electrode materials.' },
                ].map((item) => (
                  <div key={item.label} className="border-l-4 border-[#f4a65d] pl-4">
                    <p className="text-[#0f2a4a] font-bold text-sm mb-1">{item.label}</p>
                    <p className="text-[#566677] text-sm">{item.detail}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                Material Selection for Sour Service Monitoring Equipment
              </h2>
              <p>
                All wetted parts of corrosion monitoring equipment in sour service must comply with
                NACE MR0175/ISO 15156. Cosasco sour service retrievable assemblies are available in
                the following material grades:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#0f2a4a] text-white">
                      <th className="text-left p-3 font-semibold">Material</th>
                      <th className="text-left p-3 font-semibold">Max H₂S (psia partial pressure)</th>
                      <th className="text-left p-3 font-semibold">Temperature Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['316L SS', '0.05', 'Up to 60°C'],
                      ['22Cr Duplex', '0.1', 'Up to 232°C'],
                      ['Alloy 825', '1.5', 'Up to 232°C'],
                      ['Alloy 625', 'No limit (per NACE)', 'Up to 315°C'],
                    ].map(([mat, h2s, temp], i) => (
                      <tr key={mat} className={i % 2 === 0 ? 'bg-[#f7f9fc]' : 'bg-white'}>
                        <td className="p-3 font-semibold text-[#0f2a4a] border border-[#e8edf2]">{mat}</td>
                        <td className="p-3 text-[#566677] border border-[#e8edf2]">{h2s}</td>
                        <td className="p-3 text-[#566677] border border-[#e8edf2]">{temp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-[#f0f4f8] border border-[#e8edf2] rounded-xl p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#566677] mb-4">Related Resources</p>
              <ul className="space-y-3">
                {[
                  { href: '/products/er-probes', label: 'Sour Service ER Probes' },
                  { href: '/products/chemical-injection', label: 'Chemical Injection Systems' },
                  { href: '/resources/case-studies/north-sea-pipeline', label: 'North Sea Case Study' },
                  { href: '/support', label: 'Technical Support' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-[#0f2a4a] text-sm font-medium hover:text-[#f4a65d] transition-colors flex items-center gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-[#f4a65d] flex-shrink-0" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0f2a4a] rounded-xl p-6 text-white">
              <p className="font-black text-lg mb-2">Sour Service Expertise</p>
              <p className="text-[#94aabb] text-sm leading-relaxed mb-4">
                Our field engineers have extensive experience designing corrosion monitoring programs
                for H₂S-containing systems worldwide.
              </p>
              <Link href="/contact" className="block text-center bg-[#f4a65d] hover:bg-[#d4892a] text-white font-bold py-3 rounded-lg transition-colors text-sm">
                Request Consultation
              </Link>
            </div>

            <div className="bg-white border border-[#e8edf2] rounded-xl p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#566677] mb-4">More Articles</p>
              <ul className="space-y-4">
                {[
                  { href: '/resources/blog/corrosion-monitoring-fundamentals', title: 'ER vs. LPR vs. Coupons: Monitoring Fundamentals' },
                  { href: '/resources/blog/chemical-injection-optimization', title: 'Right-Sizing Chemical Injection' },
                  { href: '/resources/blog/fieldcom-cloud-deployment', title: 'FieldCom Cloud in 2026' },
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
          <Link href="/resources/blog/chemical-injection-optimization" className="text-[#0f2a4a] font-semibold flex items-center gap-2 hover:text-[#f4a65d] transition-colors text-sm">
            Next: Chemical Injection <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
