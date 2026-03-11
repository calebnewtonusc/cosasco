'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Minus, Plus, ShoppingCart } from 'lucide-react'
import type { MockProduct } from '@/lib/productCatalog'
import { useQuoteCart } from '@/context/QuoteCartContext'

type Props = { product: MockProduct }

export default function ProductDetailClient({ product }: Props) {
  const [qty, setQty] = useState(1)
  const router = useRouter()
  const { addItem } = useQuoteCart()

  function handleAddToQuote() {
    addItem(product.slug, product.name, qty)
    router.push('/quote')
  }

  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center border border-[#e8edf2] rounded-lg overflow-hidden bg-white">
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={() => setQty((n) => Math.max(1, n - 1))}
          className="p-2.5 text-[#566677] hover:bg-[#f0f4f8] hover:text-[#0f2a4a] transition-colors"
        >
          <Minus size={16} />
        </button>
        <span className="w-12 text-center text-sm font-semibold text-[#1e2b3a]" aria-live="polite">
          {qty}
        </span>
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={() => setQty((n) => n + 1)}
          className="p-2.5 text-[#566677] hover:bg-[#f0f4f8] hover:text-[#0f2a4a] transition-colors"
        >
          <Plus size={16} />
        </button>
      </div>
      <button
        type="button"
        onClick={handleAddToQuote}
        className="inline-flex items-center gap-2 py-3 px-6 rounded-lg bg-[#f4a65d] text-white font-bold hover:bg-[#d4892a] transition-colors"
      >
        <ShoppingCart size={18} />
        Add to Quote
      </button>
      <Link
        href="/quote"
        className="text-sm font-semibold text-[#0f2a4a] hover:text-[#f4a65d] transition-colors"
      >
        View Quote
      </Link>
    </div>
  )
}
