'use client'

import { useEffect, useRef } from 'react'

interface JsonLdProps {
  data: Record<string, unknown>
}

/**
 * Renders a JSON-LD <script> tag without using dangerouslySetInnerHTML.
 * The script content is set via a DOM ref after mount, which is safe because
 * JSON.stringify output is not interpreted as HTML by the browser inside a
 * <script type="application/ld+json"> element.
 */
export default function JsonLd({ data }: JsonLdProps) {
  const ref = useRef<HTMLScriptElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = JSON.stringify(data)
    }
  }, [data])

  return <script ref={ref} type="application/ld+json" />
}
