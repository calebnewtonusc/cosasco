'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={[
        'fixed bottom-6 right-6 z-40',
        'bg-[#f4a65d] hover:bg-[#d4892a] text-white',
        'rounded-full w-11 h-11 flex items-center justify-center',
        'shadow-lg transition-all duration-200',
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none',
      ].join(' ')}
    >
      <ArrowUp size={18} />
    </button>
  )
}
