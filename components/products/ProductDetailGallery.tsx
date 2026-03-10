'use client'

import { useState } from 'react'
import ProductImageZoom from './ProductImageZoom'

type GalleryImage = { src: string; alt: string }

type Props = {
  images: GalleryImage[]
  productName: string
}

export default function ProductDetailGallery({ images, productName }: Props) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = images[activeIndex] ?? images[0]

  if (!active) return null

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm flex-shrink-0">
      {/* Thumbnails to the side (Amazon-style: vertical on left) */}
      <div className="flex sm:flex-col gap-2 order-2 sm:order-1">
        {images.map((img, idx) => (
          <button
            key={`${img.src}-${idx}`}
            type="button"
            onClick={() => setActiveIndex(idx)}
            className={`relative w-16 h-16 flex-shrink-0 rounded-lg border-2 bg-[#f7f9fc] overflow-hidden transition-all focus:outline-none focus:ring-2 focus:ring-[#f4a65d] focus:ring-offset-2 ${
              idx === activeIndex
                ? 'border-[#f4a65d] ring-2 ring-[#f4a65d]/30'
                : 'border-[#e8edf2] hover:border-[#c4cdd6]'
            }`}
            aria-label={`View image ${idx + 1}`}
          >
            <img
              src={img.src}
              alt=""
              className="w-full h-full object-contain opacity-70"
              draggable={false}
            />
          </button>
        ))}
      </div>
      {/* Main image with hover zoom */}
      <div className="flex-1 min-w-0 order-1 sm:order-2 aspect-square">
        <ProductImageZoom
          src={active.src}
          alt={active.alt || productName}
          containerClassName="aspect-square w-full"
          fill
          className="opacity-50"
        />
      </div>
    </div>
  )
}
