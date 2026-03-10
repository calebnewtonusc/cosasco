'use client'

import { useMemo, useState, useEffect } from 'react'
import Link from 'next/link'
import {
  getAllProducts,
  productFamilies,
  getFamilyById,
} from '@/lib/productCatalog'
import ProductCard from '@/components/products/ProductCard'
import type { ProductFamilyId } from '@/lib/productCatalog'

type SortOption = 'featured' | 'alphabetical' | 'category'

type Props = { initialFamilyFilter?: ProductFamilyId | 'all' }

export default function ProductsPageClient({ initialFamilyFilter = 'all' }: Props) {
  const [search, setSearch] = useState('')
  const [familyFilter, setFamilyFilter] = useState<ProductFamilyId | 'all'>(initialFamilyFilter)
  const [subfamilyFilter, setSubfamilyFilter] = useState<string>('all')
  const [sort, setSort] = useState<SortOption>('category')

  useEffect(() => {
    setFamilyFilter(initialFamilyFilter)
    setSubfamilyFilter('all')
  }, [initialFamilyFilter])

  const allProducts = useMemo(() => getAllProducts(), [])

  const subfamilyOptions = useMemo(() => {
    if (familyFilter === 'all') return []
    const family = getFamilyById(familyFilter)
    return family?.subfamilies ?? []
  }, [familyFilter])

  const filteredAndSorted = useMemo(() => {
    let list = [...allProducts]
    if (search.trim()) {
      const q = search.trim().toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
      )
    }
    if (familyFilter !== 'all') {
      list = list.filter((p) => p.familyId === familyFilter)
    }
    if (subfamilyFilter !== 'all') {
      list = list.filter((p) => p.subfamilyId === subfamilyFilter)
    }
    if (sort === 'alphabetical') {
      list.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sort === 'category') {
      list.sort((a, b) => {
        const fa = productFamilies.findIndex((f) => f.id === a.familyId)
        const fb = productFamilies.findIndex((f) => f.id === b.familyId)
        if (fa !== fb) return fa - fb
        return a.name.localeCompare(b.name)
      })
    } else {
      list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }
    return list
  }, [allProducts, search, familyFilter, subfamilyFilter, sort])

  return (
    <section className="bg-[#f7f9fc] py-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Filters row */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <input
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 min-w-[200px] rounded-lg border border-[#e8edf2] px-4 py-2.5 text-sm text-[#1e2b3a] placeholder:text-[#8898aa] focus:outline-none focus:ring-2 focus:ring-[#f4a65d]/50 focus:border-[#f4a65d]"
              aria-label="Search products"
            />
            <select
              value={familyFilter}
              onChange={(e) => {
                setFamilyFilter(e.target.value as ProductFamilyId | 'all')
                setSubfamilyFilter('all')
              }}
              className="rounded-lg border border-[#e8edf2] px-4 py-2.5 text-sm text-[#1e2b3a] bg-white focus:outline-none focus:ring-2 focus:ring-[#f4a65d]/50"
              aria-label="Filter by family"
            >
              <option value="all">All families</option>
              {productFamilies.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.label}
                </option>
              ))}
            </select>
            {subfamilyOptions.length > 0 && (
              <select
                value={subfamilyFilter}
                onChange={(e) => setSubfamilyFilter(e.target.value)}
                className="rounded-lg border border-[#e8edf2] px-4 py-2.5 text-sm text-[#1e2b3a] bg-white focus:outline-none focus:ring-2 focus:ring-[#f4a65d]/50"
                aria-label="Filter by subcategory"
              >
                <option value="all">All subcategories</option>
                {subfamilyOptions.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            )}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="rounded-lg border border-[#e8edf2] px-4 py-2.5 text-sm text-[#1e2b3a] bg-white focus:outline-none focus:ring-2 focus:ring-[#f4a65d]/50"
              aria-label="Sort by"
            >
              <option value="category">Sort: Category</option>
              <option value="alphabetical">Sort: A–Z</option>
              <option value="featured">Sort: Featured</option>
            </select>
          </div>
          <p className="text-sm text-[#566677]">
            {filteredAndSorted.length} product{filteredAndSorted.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredAndSorted.map((product) => {
            const family = getFamilyById(product.familyId)
            const subfamily = family?.subfamilies.find((s) => s.id === product.subfamilyId)
            return (
              <ProductCard
                key={product.id}
                product={product}
                showSubfamily={true}
                subfamilyLabel={subfamily?.label}
              />
            )
          })}
        </div>
        {filteredAndSorted.length === 0 && (
          <div className="text-center py-16 text-[#566677]">
            <p className="font-semibold text-[#0f2a4a]">No products match your filters.</p>
            <p className="text-sm mt-1">Try a different search or clear filters.</p>
          </div>
        )}
      </div>
    </section>
  )
}
