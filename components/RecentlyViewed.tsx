'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Product {
  name: string;
  href: string;
  category: string;
}

interface RecentlyViewedProps {
  currentProduct: Product;
}

const STORAGE_KEY = 'cosasco-recently-viewed';
const MAX_ITEMS = 4;

export default function RecentlyViewed({ currentProduct }: RecentlyViewedProps) {
  const [recentProducts, setRecentProducts] = useState<Product[]>([]);

  useEffect(() => {
    let stored: Product[] = [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        stored = JSON.parse(raw);
      }
    } catch {
      stored = [];
    }

    const updated = [
      currentProduct,
      ...stored.filter((p) => p.href !== currentProduct.href),
    ].slice(0, MAX_ITEMS);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    const others = updated.filter((p) => p.href !== currentProduct.href);
    setRecentProducts(others);
  }, [currentProduct.href]);

  if (recentProducts.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16 py-10 border-t border-[#e8edf2]">
      <h2 className="text-[#0f2a4a] font-bold text-xl mb-6">Recently Viewed</h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {recentProducts.map((product) => (
          <div
            key={product.href}
            className="bg-white border border-[#e8edf2] rounded-xl p-4 flex-shrink-0 w-56"
          >
            <p className="text-xs text-[#f4a65d] font-medium mb-1">{product.category}</p>
            <p className="font-semibold text-[#0f2a4a] text-sm mb-3 leading-snug">
              {product.name}
            </p>
            <Link
              href={product.href}
              className="text-sm text-[#566677] hover:text-[#f4a65d] transition-colors"
            >
              View Product
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
