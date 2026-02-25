'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const consent = localStorage.getItem('cosasco-cookie-consent')
      if (!consent) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  function accept() {
    try { localStorage.setItem('cosasco-cookie-consent', 'accepted') } catch {}
    setVisible(false)
  }

  function decline() {
    try { localStorage.setItem('cosasco-cookie-consent', 'declined') } catch {}
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-[9998] bg-[#0f2a4a] border-t-2 border-[#f4a65d] px-4 py-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-[#d0dde9] text-sm leading-relaxed flex-1">
          We use cookies to improve your browsing experience and analyze site traffic. By clicking &ldquo;Accept&rdquo;, you consent to our use of cookies.{' '}
          <Link href="/privacy" className="underline text-[#f4a65d] hover:text-[#fbbf6a] transition-colors">
            Learn more in our Privacy Policy
          </Link>.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 rounded-lg border border-[#4a6a8a] text-[#94aabb] hover:text-white hover:border-[#94aabb] text-sm font-medium transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 rounded-lg bg-[#f4a65d] hover:bg-[#e8954a] text-white text-sm font-semibold transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
