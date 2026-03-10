import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Download } from 'lucide-react'
import { topLevelProductCategories } from '@/lib/productCategories'
import ProductsPageClient from './ProductsPageClient'
import type { ProductFamilyId } from '@/lib/productCatalog'

export const metadata: Metadata = {
  title: 'Products | Cosasco Corrosion Monitoring & Chemical Injection',
  description:
    'ER probes, access fittings, corrosion coupons, chemical injection quills, Microcor wireless transmitters, and UT sensors for industrial corrosion management.',
}

type ProductsPageProps = {
  searchParams?: Promise<{ category?: string }>
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams
  const initialCategory = (params?.category ?? 'all') as ProductFamilyId | 'all'

  const productFilters = [
    { id: 'all', label: 'All', href: '/products' },
    ...topLevelProductCategories.map((cat) => ({
      id: cat.id,
      label: cat.label,
      href: `/products?category=${encodeURIComponent(cat.id)}`,
    })),
  ]

  return (
    <>
      {/* HERO */}
      <section className="bg-[#0f2a4a] pb-16 pt-10 px-6 md:px-10 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-1.5 text-sm text-[#8ab4d4] mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="opacity-50" />
            <span className="text-white font-medium">Products</span>
          </nav>
          <h1 className="text-white font-black text-4xl lg:text-5xl leading-tight mb-4">
            Corrosion Management Products
          </h1>
          <p className="text-[#94aabb] text-lg max-w-2xl leading-relaxed">
            Purpose-built monitoring, injection, and data systems trusted in over 110 countries across oil&nbsp;&amp;&nbsp;gas,
            petrochemical, water treatment, and industrial process environments.
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="bg-white border-b border-[#e8edf2] py-6 px-6 md:px-10 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#566677] mb-4">
            Browse by category
          </p>
          <div className="flex flex-wrap gap-2">
            {productFilters.map((filter) => (
              <Link
                key={filter.id}
                href={filter.href}
                className={
                  filter.id === initialCategory
                    ? 'px-5 py-2.5 rounded-full text-sm font-semibold border transition-all bg-[#f4a65d] text-white border-[#f4a65d] shadow-sm'
                    : 'px-5 py-2.5 rounded-full text-sm font-semibold border transition-all bg-white text-[#1e2b3a] border-[#e8edf2] hover:border-[#0f2a4a] hover:text-[#0f2a4a]'
                }
              >
                {filter.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="bg-[#f7f9fc] border-b border-[#e8edf2] py-6 px-6 md:px-10 xl:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
          {[
            { stat: '70+', label: 'Years of Innovation' },
            { stat: '110', label: 'Countries Served' },
            { stat: '1M+', label: 'Monitoring Locations' },
          ].map((item) => (
            <div key={item.stat} className="text-center">
              <div className="text-[#f4a65d] font-black text-3xl leading-none">{item.stat}</div>
              <div className="text-[#566677] text-xs mt-1 font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ALL PRODUCTS GRID + CLIENT FILTERS (search, subcategory, sort) */}
      <ProductsPageClient initialFamilyFilter={initialCategory === 'all' ? 'all' : initialCategory} />

      {/* BOTTOM CTA */}
      <section className="bg-white border-t border-[#e8edf2] py-16 px-6 md:px-10 xl:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-[#1e2b3a]">Need help selecting the right product?</h2>
            <p className="text-[#566677] mt-1">
              Our engineers are standing by. Describe your process conditions and we&apos;ll recommend the optimal monitoring and
              injection configuration.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#f4a65d] text-white rounded-md px-6 py-3 text-sm font-semibold hover:bg-[#d4892a] transition-colors"
            >
              Talk to an Engineer
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 border border-[#0f2a4a] text-[#0f2a4a] rounded-md px-6 py-3 text-sm font-semibold hover:bg-[#0f2a4a] hover:text-white transition-colors"
            >
              <Download size={14} />
              Product Catalog PDF
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
