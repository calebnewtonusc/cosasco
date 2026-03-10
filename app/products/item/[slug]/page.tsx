import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, FileText, CheckCircle } from 'lucide-react'
import { notFound } from 'next/navigation'
import { getProductBySlug, getFamilyById } from '@/lib/productCatalog'
import ProductDetailClient from './ProductDetailClient'
import ProductDetailGallery from '@/components/products/ProductDetailGallery'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return { title: 'Product | Cosasco' }
  return {
    title: `${product.name} | Cosasco`,
    description: product.shortDescription,
  }
}

export default async function ProductItemPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const family = getFamilyById(product.familyId)
  const subfamily = family?.subfamilies.find((s) => s.id === product.subfamilyId)

  const productImages = [
    { src: '/file.svg', alt: `${product.name} — main` },
    { src: '/window.svg', alt: `${product.name} — alternate view` },
    { src: '/file.svg', alt: `${product.name} — detail` },
  ]

  return (
    <>
      <section className="bg-[#0f2a4a] pb-8 pt-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-1.5 text-sm text-[#8ab4d4] mb-4 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="opacity-50" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight size={14} className="opacity-50" />
            {family && (
              <>
                <Link href={family.href} className="hover:text-white transition-colors">{family.label}</Link>
                <ChevronRight size={14} className="opacity-50" />
              </>
            )}
            <span className="text-white font-medium truncate max-w-[200px] md:max-w-none">{product.name}</span>
          </nav>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 space-y-8">
        {/* Product header: image + title + meta */}
        <div className="flex flex-col md:flex-row gap-8">
          <ProductDetailGallery images={productImages} productName={product.name} />
          <div className="flex-1 min-w-0">
            {family && (
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8898aa] mb-2">
                {family.label}
                {subfamily && ` · ${subfamily.label}`}
              </p>
            )}
            <h1 className="text-[#0f2a4a] font-black text-2xl md:text-3xl leading-tight mb-4">
              {product.name}
            </h1>
            <p className="text-[#566677] leading-relaxed mb-6">
              {product.shortDescription}
            </p>
            <ProductDetailClient product={product} />
            <div className="mt-6 flex flex-wrap gap-4">
              <button type="button" className="inline-flex items-center gap-2 text-[#0f2a4a] text-sm font-semibold hover:text-[#f4a65d] transition-colors">
                <FileText size={16} />
                Download Datasheet
              </button>
              <a href="tel:+15629490123" className="text-[#566677] text-sm hover:text-[#0f2a4a]">+1 (562) 949-0123</a>
              <a href="mailto:support@cosasco.com" className="text-[#566677] text-sm hover:text-[#0f2a4a]">support@cosasco.com</a>
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="bg-white rounded-xl border border-[#e8edf2] p-6 md:p-8">
          <h2 className="text-[#0f2a4a] font-bold text-lg mb-3">Overview</h2>
          <p className="text-[#566677] leading-relaxed">
            {product.shortDescription} This product is part of the Cosasco {family?.label ?? 'product'} line. Full technical specifications, dimensions, materials, and ordering information are available in the product datasheet. Contact our team for application engineering support or to request a quote.
          </p>
        </section>

        {/* Key specifications */}
        <section className="bg-[#f7f9fc] rounded-xl border border-[#e8edf2] p-6 md:p-8">
          <h2 className="text-[#0f2a4a] font-bold text-lg mb-4">Key specifications</h2>
          <div className="rounded-lg overflow-hidden border border-[#e8edf2] bg-white">
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-[#e8edf2]">
                  <td className="px-4 py-3 font-semibold text-[#1e2b3a] w-40">Product family</td>
                  <td className="px-4 py-3 text-[#566677]">{family?.label ?? '—'}</td>
                </tr>
                <tr className="border-b border-[#e8edf2]">
                  <td className="px-4 py-3 font-semibold text-[#1e2b3a]">Subcategory</td>
                  <td className="px-4 py-3 text-[#566677]">{subfamily?.label ?? '—'}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-[#1e2b3a]">Description</td>
                  <td className="px-4 py-3 text-[#566677]">{product.shortDescription}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#8898aa] mt-3">Download the datasheet for full parameters, materials, and dimensions.</p>
        </section>

        {/* Key features */}
        <section className="bg-white rounded-xl border border-[#e8edf2] p-6 md:p-8">
          <h2 className="text-[#0f2a4a] font-bold text-lg mb-4">Key features</h2>
          <ul className="space-y-2">
            {[
              `Part of Cosasco ${family?.label ?? 'product'} portfolio`,
              'Engineered for industrial corrosion monitoring and process applications',
              'Full material traceability and certifications available',
              'Contact engineering for application-specific configuration',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-[#566677] text-sm">
                <CheckCircle size={16} className="text-[#f4a65d] flex-shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}
