import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Award, Globe, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cosasco Recognized as Leading Corrosion Monitor Supplier | News',
  description:
    'Independent industry analysts ranked Cosasco among the top three global suppliers of corrosion monitoring equipment for the fourth consecutive year.',
}

export default function IndustryRecognitionPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-[#0f2a4a] pt-[72px] pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="text-[#5a7a94] text-sm mb-6 flex flex-wrap gap-1 items-center">
            <Link href="/news" className="hover:text-[#f4a65d] transition-colors">
              News &amp; Insights
            </Link>
            <span className="mx-1">/</span>
            <span className="text-white">Industry Recognition 2025</span>
          </nav>
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-emerald-900/40 text-emerald-400 mb-5">
            Press Release
          </span>
          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight max-w-4xl mb-5">
            Cosasco Recognized as Leading Corrosion Monitor Supplier for Fourth Consecutive Year
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#94aabb]">
            <span className="font-semibold text-white">Cosasco Corporate Communications</span>
            <span className="text-[#3a5a74]">|</span>
            <span>December 20, 2025</span>
            <span className="text-[#3a5a74]">|</span>
            <span>3 min read</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2">
            <div className="text-[#566677] leading-relaxed space-y-6 text-[1.05rem]">
              <p className="text-xl text-[#0f2a4a] font-semibold leading-snug">
                Santa Fe Springs, CA — Cosasco Systems, Inc. has been ranked among the top three
                global suppliers of corrosion monitoring equipment in the 2025 Corrosion Management
                Market Report published by independent industry analysts, marking the fourth
                consecutive year the company has received this recognition.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">Recognition Highlights</h2>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: Award,
                    stat: 'Top 3',
                    label: 'Global corrosion monitoring equipment supplier ranking — 4th consecutive year',
                  },
                  {
                    icon: Globe,
                    stat: '110+',
                    label: 'Countries with active Cosasco deployments as of year-end 2025',
                  },
                  {
                    icon: TrendingUp,
                    stat: '18%',
                    label: 'Year-over-year revenue growth in the corrosion monitoring segment',
                  },
                ].map(({ icon: Icon, stat, label }) => (
                  <div key={stat} className="bg-[#f0f4f8] border border-[#e8edf2] rounded-xl p-5 text-center">
                    <Icon className="w-6 h-6 text-[#f4a65d] mx-auto mb-3" />
                    <p className="text-[#0f2a4a] font-black text-2xl mb-2">{stat}</p>
                    <p className="text-[#566677] text-xs leading-relaxed">{label}</p>
                  </div>
                ))}
              </div>

              <p>
                The annual report evaluates corrosion monitoring suppliers across five dimensions:
                product portfolio breadth, technical innovation, global service capability, customer
                satisfaction, and market share trajectory. Cosasco received particularly high scores
                in global service capability — supported by its network of six regional offices
                across North America, Europe, the Middle East, Asia Pacific, and Oceania — and in
                product innovation, driven by the launch of FieldCom 5.0 and the new high-pressure
                retractable ER probe in Q1 2026.
              </p>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                Statement from Cosasco Leadership
              </h2>

              <blockquote className="border-l-4 border-[#f4a65d] pl-6 py-2 bg-[#f7f9fc] rounded-r-xl">
                <p className="text-[#0f2a4a] font-semibold italic text-lg leading-snug mb-3">
                  &ldquo;This recognition reflects the work of our entire global team — engineers,
                  service technicians, and customer support staff across 110 countries who keep
                  critical infrastructure safe every day. It also reflects the trust our customers
                  place in Cosasco, many of whom have been partners for decades.&rdquo;
                </p>
                <footer className="text-[#566677] text-sm">
                  — Chief Executive Officer, Cosasco Systems, Inc.
                </footer>
              </blockquote>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                Growth Drivers in 2025
              </h2>
              <p>
                The report cited several factors driving Cosasco&apos;s continued market position:
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: 'SAFR Cloud Platform Adoption',
                    body: 'Adoption of the SAFR cloud corrosion management platform grew by over 40% in 2025, driven by operators seeking centralized visibility across geographically distributed assets. The platform now manages data from more than 85,000 active monitoring points globally.',
                  },
                  {
                    title: 'Expansion in Asia Pacific',
                    body: 'The opening of the Kuala Lumpur service hub in mid-2024 significantly expanded Cosasco\'s direct service capability across Southeast Asia, reducing mobilization times for operators in Malaysia, Indonesia, Thailand, and Vietnam.',
                  },
                  {
                    title: 'Chemical Injection Portfolio Growth',
                    body: 'Revenue from chemical injection systems grew 22% year-over-year as operators increasingly adopt integrated monitoring and injection solutions — combining corrosion rate measurement with automated dosing adjustment in a single system architecture.',
                  },
                  {
                    title: 'Halma Group Synergies',
                    body: 'As a Halma plc company, Cosasco continued to benefit from group-level R&D investment and cross-portfolio collaboration, particularly in sensor technology and digital connectivity.',
                  },
                ].map(({ title, body }) => (
                  <div key={title} className="bg-[#f0f4f8] border border-[#e8edf2] rounded-xl p-5">
                    <p className="text-[#0f2a4a] font-bold mb-2">{title}</p>
                    <p className="text-[#566677] text-sm leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-[#0f2a4a] font-black text-2xl mt-10 mb-3">
                About Cosasco Systems, Inc.
              </h2>
              <p>
                Cosasco Systems, Inc. is a global leader in corrosion and erosion monitoring
                solutions with over 70 years of field experience. Headquartered in Santa Fe Springs,
                California, Cosasco serves operators in oil and gas, petrochemical, water treatment,
                chemical processing, pulp and paper, and utility sectors across more than 110
                countries. Cosasco is a subsidiary of Halma plc.
              </p>
              <p>
                For media enquiries, contact communications@cosasco.com.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-[#0f2a4a] rounded-xl p-6 text-white">
              <p className="font-black text-lg mb-2">Learn More About Cosasco</p>
              <p className="text-[#94aabb] text-sm leading-relaxed mb-4">
                Explore our 70-year history, global team, and commitment to corrosion innovation.
              </p>
              <Link
                href="/about"
                className="block text-center bg-[#f4a65d] hover:bg-[#d4892a] text-white font-bold py-3 rounded-lg transition-colors text-sm"
              >
                About Cosasco
              </Link>
            </div>

            <div className="bg-[#f0f4f8] border border-[#e8edf2] rounded-xl p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#566677] mb-4">
                Related Links
              </p>
              <ul className="space-y-3">
                {[
                  { href: '/about', label: 'Company History' },
                  { href: '/innovation', label: 'Innovation & R&D' },
                  { href: '/services', label: 'Global Services' },
                  { href: '/contact/find-a-rep', label: 'Find a Representative' },
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

            <div className="bg-white border border-[#e8edf2] rounded-xl p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#566677] mb-4">
                Recent News
              </p>
              <ul className="space-y-4">
                {[
                  {
                    href: '/news/fieldcom-5-launch',
                    title: 'Cosasco Launches Next-Gen FieldCom 5.0 Wireless System',
                  },
                  {
                    href: '/news/retractable-er-probe',
                    title: 'New Retractable ER Probe for High-Pressure Applications',
                  },
                ].map((a) => (
                  <li key={a.href} className="border-b border-[#e8edf2] pb-4 last:border-0 last:pb-0">
                    <Link
                      href={a.href}
                      className="text-sm text-[#0f2a4a] font-semibold hover:text-[#f4a65d] transition-colors leading-snug block"
                    >
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* BACK NAV */}
      <section className="bg-[#f0f4f8] border-t border-[#e8edf2] py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
          <Link
            href="/news"
            className="text-[#0f2a4a] font-semibold flex items-center gap-2 hover:text-[#f4a65d] transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to News
          </Link>
          <Link
            href="/news/fieldcom-5-launch"
            className="text-[#0f2a4a] font-semibold flex items-center gap-2 hover:text-[#f4a65d] transition-colors text-sm"
          >
            Latest: FieldCom 5.0 Launch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
