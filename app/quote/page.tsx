'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Minus, Plus, Trash2, ArrowRight } from 'lucide-react'
import { useQuoteCart } from '@/context/QuoteCartContext'

export default function QuotePage() {
  const { items, removeItem, updateQty, itemCount } = useQuoteCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <section className="bg-[#0f2a4a] text-white py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-[#8ab4d4] mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              <span className="text-white font-medium">Quote</span>
            </nav>
            <h1 className="text-3xl font-black mb-4">Your quote</h1>
            <p className="text-[#94aabb]">Your quote list is empty. Add products from the catalog to request a quote.</p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 mt-6 text-[#f4a65d] font-semibold hover:text-[#d4892a] transition-colors"
            >
              Browse products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#0f2a4a] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#8ab4d4] mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="text-white font-medium">Quote</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black mb-2">Your quote</h1>
          <p className="text-[#94aabb]">
            {itemCount} item{itemCount !== 1 ? 's' : ''} — request a quote and we&apos;ll respond within one business day.
          </p>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item.slug}
                className="flex flex-wrap items-center gap-4 bg-white border border-[#e8edf2] rounded-xl p-4"
              >
                <Link
                  href={`/products/item/${item.slug}`}
                  className="flex items-center gap-4 flex-1 min-w-0 group"
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-lg overflow-hidden bg-[#f7f9fc] border border-[#e8edf2]">
                    <Image
                      src="/file.svg"
                      alt=""
                      fill
                      className="object-contain opacity-60 group-hover:opacity-80 transition-opacity p-2"
                      sizes="80px"
                      unoptimized
                    />
                  </div>
                  <span className="font-semibold text-[#0f2a4a] group-hover:text-[#f4a65d] transition-colors">
                    {item.name}
                  </span>
                </Link>
                <div className="flex items-center gap-2">
                  <div className="flex items-center border border-[#e8edf2] rounded-lg overflow-hidden bg-[#f7f9fc]">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      onClick={() => updateQty(item.slug, item.qty - 1)}
                      className="p-2 text-[#566677] hover:bg-[#e8edf2] transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-10 text-center text-sm font-medium text-[#1e2b3a]" aria-live="polite">
                      {item.qty}
                    </span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() => updateQty(item.slug, item.qty + 1)}
                      className="p-2 text-[#566677] hover:bg-[#e8edf2] transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.slug)}
                    className="p-2 text-[#8898aa] hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    aria-label="Remove from quote"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Link
              href="/products"
              className="text-sm font-semibold text-[#0f2a4a] hover:text-[#f4a65d] transition-colors"
            >
              ← Continue adding products
            </Link>
            <Link
              href="/contact?quote=request"
              className="inline-flex items-center justify-center gap-2 bg-[#f4a65d] hover:bg-[#d4892a] text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
