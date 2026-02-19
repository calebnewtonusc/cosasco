'use client'

import { useState, useEffect } from 'react'
import { Cookie } from 'lucide-react'
import Link from 'next/link'

const STORAGE_KEY = 'cosasco-cookies-accepted'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'true')
    setVisible(false)
  }

  const handleDecline = () => {
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0f2a4a] border-t border-[#1a3a5c]">
      <div className="flex items-center justify-between gap-4 px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-sm text-[#b8cfe0]">
          <Cookie size={18} className="text-[#f4a65d] shrink-0" />
          <p>
            We use cookies to improve your experience and analyze site traffic. By continuing, you
            agree to our{' '}
            <Link href="/privacy" className="text-[#f4a65d] hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="text-[#8ab4d4] text-sm hover:text-white transition-colors duration-150"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="bg-[#f4a65d] hover:bg-[#d4892a] text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors duration-150"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
