import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Technical Blog | Cosasco Corrosion Management',
  description:
    'Technical insights, field applications, and product updates from the Cosasco corrosion engineering team.',
}

const articles = [
  {
    href: '/resources/blog/corrosion-monitoring-fundamentals',
    category: 'Technical Guide',
    title: 'Corrosion Monitoring Fundamentals: ER Probes vs. LPR vs. Coupons',
    excerpt:
      'Understanding the core differences between electrical resistance, linear polarization, and weight-loss methods - and when to use each.',
    author: 'Cosasco Engineering Team',
    date: 'Feb 12, 2026',
    readTime: '8 min read',
  },
  {
    href: '/resources/blog/h2s-sour-service-integrity',
    category: 'Field Applications',
    title: "Managing Corrosion in H₂S Sour Service: A Field Engineer's Perspective",
    excerpt:
      "Hydrogen sulfide creates unique challenges for pipeline integrity. Here's what the data from 200+ sour gas deployments tells us.",
    author: 'James Whitfield, Sr. Field Engineer',
    date: 'Jan 28, 2026',
    readTime: '6 min read',
  },
  {
    href: '/resources/blog/chemical-injection-optimization',
    category: 'Chemical Injection',
    title: 'How to Right-Size Chemical Injection: Moving Beyond Conservative Dosing',
    excerpt:
      "Over-dosing corrosion inhibitor is expensive and doesn't always mean better protection. A data-driven approach to injection optimization.",
    author: 'Cosasco Engineering Team',
    date: 'Jan 15, 2026',
    readTime: '5 min read',
  },
  {
    href: '/resources/blog/cdo-cloud-deployment',
    category: 'Product Update',
    title: "CDO Cloud Platform: Real-Time Corrosion Data Anywhere",
    excerpt:
      'Real-time corrosion data accessible from anywhere. New features, integration improvements, and real-world CDO Cloud deployments.',
    author: 'Cosasco Product Team',
    date: 'Dec 18, 2025',
    readTime: '4 min read',
  },
]

const categoryColors: Record<string, string> = {
  'Technical Guide': 'bg-[#dbeafe] text-[#1d4ed8]',
  'Field Applications': 'bg-[#d1fae5] text-[#065f46]',
  'Chemical Injection': 'bg-[#fef3c7] text-[#92400e]',
  'Product Update': 'bg-[#ede9fe] text-[#5b21b6]',
}

export default function BlogIndexPage() {
  const [featured, ...rest] = articles

  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-[#0f2a4a] pt-[72px] pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="text-[#5a7a94] text-sm mb-6 flex flex-wrap gap-1 items-center">
            <Link href="/resources" className="hover:text-[#f4a65d] transition-colors">
              Resources
            </Link>
            <span className="mx-1">/</span>
            <span className="text-white">Blog</span>
          </nav>
          <p className="text-[#f4a65d] text-xs font-bold uppercase tracking-[0.1em] mb-4">
            Technical Insights
          </p>
          <h1 className="text-white font-black text-5xl md:text-6xl leading-tight max-w-4xl mb-5">
            Technical Insights from the Corrosion Experts
          </h1>
          <p className="text-[#94aabb] text-lg max-w-2xl leading-relaxed">
            In-depth articles, field application notes, and product updates written by Cosasco
            engineers with decades of hands-on corrosion monitoring experience.
          </p>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="py-14 bg-[#f0f4f8]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#566677] mb-6">
            Featured Article
          </p>
          <Link
            href={featured.href}
            className="group bg-white border border-[#e8edf2] rounded-2xl overflow-hidden hover:shadow-xl transition-all flex flex-col md:flex-row"
          >
            <div className="bg-[#0f2a4a] md:w-2 h-2 md:h-auto w-full flex-shrink-0" />
            <div className="p-10 flex flex-col justify-between flex-1">
              <div>
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5 ${
                    categoryColors[featured.category] ?? 'bg-[#f4a65d]/20 text-[#f4a65d]'
                  }`}
                >
                  {featured.category}
                </span>
                <h2 className="text-[#0f2a4a] font-black text-3xl md:text-4xl leading-tight mb-4 group-hover:text-[#f4a65d] transition-colors max-w-3xl">
                  {featured.title}
                </h2>
                <p className="text-[#566677] text-lg leading-relaxed max-w-2xl mb-6">
                  {featured.excerpt}
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3 text-sm text-[#566677]">
                  <span className="font-semibold text-[#0f2a4a]">{featured.author}</span>
                  <span className="text-[#c5cfd8]">|</span>
                  <span>{featured.date}</span>
                  <span className="text-[#c5cfd8]">|</span>
                  <span>{featured.readTime}</span>
                </div>
                <span className="text-[#f4a65d] font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ARTICLE GRID */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#566677] mb-8">
            More Articles
          </p>
          <div className="grid md:grid-cols-2 gap-7">
            {rest.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group bg-white border border-[#e8edf2] rounded-xl overflow-hidden hover:shadow-lg transition-all flex flex-col"
              >
                <div className="h-1.5 bg-[#f4a65d]" />
                <div className="p-8 flex flex-col flex-1">
                  <span
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 self-start ${
                      categoryColors[article.category] ?? 'bg-[#f4a65d]/20 text-[#f4a65d]'
                    }`}
                  >
                    {article.category}
                  </span>
                  <h2 className="text-[#0f2a4a] font-black text-xl leading-snug mb-3 group-hover:text-[#f4a65d] transition-colors flex-1">
                    {article.title}
                  </h2>
                  <p className="text-[#566677] text-sm leading-relaxed line-clamp-2 mb-6">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-5 border-t border-[#e8edf2]">
                    <div className="text-xs text-[#566677] space-y-0.5">
                      <p className="font-semibold text-[#0f2a4a]">{article.author}</p>
                      <p>
                        {article.date} &middot; {article.readTime}
                      </p>
                    </div>
                    <span className="text-[#f4a65d] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all whitespace-nowrap">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f2a4a] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#f4a65d] text-xs font-bold uppercase tracking-[0.1em] mb-4">
            Stay Informed
          </p>
          <h2 className="text-white font-black text-4xl mb-4">Stay ahead of corrosion</h2>
          <p className="text-[#94aabb] text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Get new technical articles and field insights from the Cosasco engineering team delivered
            directly to your inbox.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#f4a65d] hover:bg-[#d4892a] text-white font-bold px-8 py-4 rounded-lg transition-colors text-sm"
          >
            Subscribe to Updates
          </Link>
        </div>
      </section>
    </div>
  )
}
