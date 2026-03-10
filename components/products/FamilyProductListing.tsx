'use client'

import { getFamilyById, getProductById } from '@/lib/productCatalog'
import ProductCard from './ProductCard'
import type { ProductFamilyId } from '@/lib/productCatalog'

type Props = { familyId: ProductFamilyId }

export default function FamilyProductListing({ familyId }: Props) {
  const family = getFamilyById(familyId)
  if (!family) return null

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-[#0f2a4a] font-bold text-lg mb-1">Products in this family</h2>
        <p className="text-[#566677] text-sm">Click a product for full details and specs, or add to quote.</p>
      </div>
      {family.subfamilies.map((sub) => {
        const products = sub.productIds
          .map((id) => getProductById(id))
          .filter((p): p is NonNullable<typeof p> => p != null)
        if (products.length === 0) return null
        return (
          <section key={sub.id}>
            <h3 className="text-[#0f2a4a] font-bold text-sm mb-3 pb-2 border-b border-[#e8edf2]">
              {sub.label}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  showSubfamily={false}
                  subfamilyLabel={sub.label}
                />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
