import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ProductsAndTechnologiesSection() {
  return (
    <section className="bg-[#f7f9fc] py-16 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-black text-2xl md:text-3xl text-[#0f2a4a] leading-tight mb-4">
          Products and Technologies for Every Application
        </h2>
        <p className="text-[#566677] text-lg leading-relaxed mb-6">
          For over 70 years, we&apos;ve made the most dependable, accurate corrosion monitoring products and systems.
        </p>
        <blockquote className="border-l-4 border-[#f4a65d] pl-5 py-2 mb-8 text-[#566677] italic">
          &ldquo;Cosasco is a very strong brand in this business...I know that they have high quality products.&rdquo;
          <footer className="text-sm not-italic mt-2 text-[#8898aa]">– Cosasco Customer, Corrosion Engineer, Supermajor</footer>
        </blockquote>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-[#f4a65d] font-semibold hover:text-[#d4892a] transition-colors"
        >
          Our Products
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}
