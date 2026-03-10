'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Minus, Plus, ShoppingCart } from 'lucide-react'
import type { MockProduct } from '@/lib/productCatalog'

type ProductCardProps = {
  product: MockProduct
  showSubfamily?: boolean
  subfamilyLabel?: string
}

export default function ProductCard({ product, showSubfamily, subfamilyLabel }: ProductCardProps) {
  const [qty, setQty] = useState(1)

  const detailHref = `/products/item/${product.slug}`

  return (
    <div className="bg-white border border-[#e8edf2] rounded-lg overflow-hidden hover:shadow-md hover:border-[#c8d8e8] transition-all flex flex-col">
      <Link href={detailHref} className="flex flex-1 flex-col p-4">
        <div className="aspect-square bg-[#f7f9fc] rounded-md flex items-center justify-center mb-3 relative overflow-hidden">
          <Image
            src="/file.svg"
            alt=""
            width={80}
            height={80}
            className="object-contain opacity-60"
          />
        </div>
        {showSubfamily && subfamilyLabel && (
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[#8898aa] mb-1">
            {subfamilyLabel}
          </p>
        )}
        <h3 className="text-[#0f2a4a] font-semibold text-sm leading-snug line-clamp-2 mb-1 group-hover:text-[#f4a65d] transition-colors">
          {product.name}
        </h3>
        <p className="text-[#566677] text-xs leading-relaxed line-clamp-2">
          {product.shortDescription}
        </p>
      </Link>
      <div className="px-4 pb-4 pt-0 flex items-center gap-2">
        <div className="flex items-center border border-[#e8edf2] rounded-md overflow-hidden bg-white">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={(e) => {
              e.preventDefault()
              setQty((n) => Math.max(1, n - 1))
            }}
            className="p-1.5 text-[#566677] hover:bg-[#f0f4f8] hover:text-[#0f2a4a] transition-colors"
          >
            <Minus size={12} />
          </button>
          <span className="w-8 text-center text-xs font-medium text-[#1e2b3a]" aria-live="polite">
            {qty}
          </span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={(e) => {
              e.preventDefault()
              setQty((n) => n + 1)
            }}
            className="p-1.5 text-[#566677] hover:bg-[#f0f4f8] hover:text-[#0f2a4a] transition-colors"
          >
            <Plus size={12} />
          </button>
        </div>
        <Link
          href={`/contact?quote=true&product=${encodeURIComponent(product.name)}&qty=${qty}`}
          className="inline-flex items-center justify-center gap-1.5 flex-1 min-w-0 py-2 px-3 rounded-md bg-[#0f2a4a] text-white text-xs font-semibold hover:bg-[#1a3a5c] transition-colors"
        >
          <ShoppingCart size={12} />
          Add
        </Link>
      </div>
    </div>
  )
}
