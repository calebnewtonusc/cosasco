import type { Metadata } from 'next'
import NewsClient from '@/components/news/NewsClient'

export const metadata: Metadata = {
  title: 'News & Insights | Cosasco',
  description:
    'Product updates, press releases, technical articles, and events from Cosasco.',
}

export default function NewsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-[#0f2a4a] pt-[72px] pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#f4a65d] text-xs font-bold uppercase tracking-[0.1em] mb-4">
            Stay Informed
          </p>
          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight mb-4">
            News &amp; Insights
          </h1>
          <p className="text-[#94aabb] text-lg max-w-xl mx-auto leading-relaxed">
            Product updates, press releases, technical articles, and events from Cosasco.
          </p>
        </div>
      </section>

      <NewsClient />
    </div>
  )
}
