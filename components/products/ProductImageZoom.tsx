'use client'

import { useRef, useState, useCallback } from 'react'
import Image from 'next/image'

type Props = {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  containerClassName?: string
  /** If true, image uses fill and container must have defined size (e.g. aspect-square) */
  fill?: boolean
}

export default function ProductImageZoom({
  src,
  alt,
  width = 400,
  height = 400,
  className = '',
  containerClassName = '',
  fill = false,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [origin, setOrigin] = useState({ x: 50, y: 50 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      setOrigin({ x, y })
    },
    []
  )

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-xl border border-[#e8edf2] bg-[#f7f9fc] ${containerClassName}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <Image
        src={src}
        alt={alt}
        {...(fill ? { fill: true, sizes: '(max-width: 384px) 100vw, 384px' } : { width, height })}
        className={`object-contain transition-transform duration-200 ease-out select-none pointer-events-none ${
          isHovering ? 'cursor-zoom-in' : ''
        } ${className} ${fill ? 'object-contain' : ''}`}
        style={{
          transformOrigin: `${origin.x}% ${origin.y}%`,
          transform: isHovering ? 'scale(2.25)' : 'scale(1)',
        }}
        draggable={false}
        unoptimized={src.startsWith('/') && (src.endsWith('.svg') || src.endsWith('.png'))}
      />
    </div>
  )
}
