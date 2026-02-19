'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { Home, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-md w-full">
        {/* Gold circle with exclamation */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full bg-[#f4a65d] flex items-center justify-center shadow-[0_0_0_8px_rgba(244,166,93,0.15)]">
            <span className="text-white font-black text-5xl leading-none select-none">!</span>
          </div>
        </div>

        <h1 className="text-[#0f2a4a] font-black text-4xl mb-4 leading-tight">
          Something went wrong
        </h1>
        <p className="text-[#8898aa] text-lg mb-10 leading-relaxed">
          We encountered an unexpected error. Our team has been notified.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#f4a65d] text-white font-bold rounded-lg hover:bg-[#d4892a] transition-colors"
          >
            <RefreshCw size={16} />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#0f2a4a] text-[#0f2a4a] font-bold rounded-lg hover:bg-[#0f2a4a] hover:text-white transition-colors"
          >
            <Home size={16} />
            Go Home
          </Link>
        </div>

        {error.digest && (
          <p className="text-[#a0adb8] text-xs font-mono">
            Reference: {error.digest}
          </p>
        )}
      </div>
    </div>
  )
}
