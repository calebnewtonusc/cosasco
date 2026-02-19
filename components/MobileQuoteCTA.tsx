'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MobileQuoteCTA() {
  const pathname = usePathname()
  const [nearBottom, setNearBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      setNearBottom(scrolledToBottom)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (pathname === '/contact' || nearBottom) return null

  return (
    <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40">
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 w-full bg-[#f4a65d] text-white font-semibold text-sm py-3.5 rounded-xl shadow-xl"
      >
        <ShoppingCart size={16} />
        Request a Quote
      </Link>
    </div>
  )
}
