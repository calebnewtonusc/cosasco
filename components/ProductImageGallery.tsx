'use client'

import { useState } from 'react'
import Image from 'next/image'

type GalleryImage = {
  src: string
  alt: string
}

type Props = {
  images: GalleryImage[]
}

export default function ProductImageGallery({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = images[activeIndex] ?? images[0]

  if (!active) return null

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Main image with simple hover zoom */}
      <div className="flex-1">
        <div className="group relative overflow-hidden rounded-2xl border border-[#e8edf2] bg-[#f7f9fc] aspect-[4/3]">
          <Image
            src={active.src}
            alt={active.alt}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </div>
        <p className="mt-2 text-xs text-[#8898aa] line-clamp-2">{active.alt}</p>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="lg:w-40 flex lg:flex-col gap-2 overflow-x-auto no-scrollbar">
          {images.map((img, idx) => (
            <button
              key={img.src + idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`relative w-20 h-20 flex-shrink-0 rounded-xl border transition-all ${
                idx === activeIndex
                  ? 'border-[#f4a65d] ring-2 ring-[#f4a65d]/30'
                  : 'border-[#e8edf2] hover:border-[#c4cdd6]'
              }`}
              aria-label={`View image ${idx + 1}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="80px"
                className="object-contain bg-white"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

