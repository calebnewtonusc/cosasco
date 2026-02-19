'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface Product {
  name: string
  href: string
  category: string
}

interface RecentlyViewedProps {
  currentProduct: Product
}

const STORAGE_KEY = 'cosasco-recent-products'
const MAX_ITEMS = 4

export default function RecentlyViewed({ currentProduct }: RecentlyViewedProps) {
  const [others, setOthers] = useState<Product[]>([])

  useEffect(() => {
    let stored: Product[] = []
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) stored = JSON.parse(raw) as Product[]
    } catch {
      stored = []
    }

    // Add current to front, deduplicate by href, trim to MAX_ITEMS
    const updated = [
      currentProduct,
      ...stored.filter((p) => p.href !== currentProduct.href),
    ].slice(0, MAX_ITEMS)

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))

    // Only show products that aren't the current one
    setOthers(updated.filter((p) => p.href !== currentProduct.href))
  }, [currentProduct.href])

  // If only 1 item (just added current) or 0 others, render nothing
  if (others.length === 0) return null

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16 py-10 border-t border-[#e8edf2]">
      <h2 className="text-[#0f2a4a] font-bold text-xl mb-6">Recently Viewed</h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {others.map((product) => (
          <div
            key={product.href}
            className="bg-white border border-[#e8edf2] rounded-xl p-4 flex-shrink-0 w-56 hover:border-[#f4a65d] transition-colors"
          >
            <span className="inline-block text-xs text-[#f4a65d] font-semibold bg-[#fdf3e7] px-2 py-0.5 rounded mb-2">
              {product.category}
            </span>
            <p className="font-bold text-[#0f2a4a] text-sm mb-3 leading-snug">
              {product.name}
            </p>
            <Link
              href={product.href}
              className="inline-flex items-center gap-1 text-sm text-[#566677] hover:text-[#f4a65d] font-medium transition-colors"
            >
              View <ArrowRight size={13} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
