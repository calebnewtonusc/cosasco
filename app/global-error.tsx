'use client'

import { AlertTriangle } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="flex justify-center mb-6">
              <AlertTriangle className="w-20 h-20 text-[#f4a65d]" strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl font-black text-[#0f2a4a] mb-4">
              Something went wrong
            </h1>
            <p className="text-[#8898aa] text-lg mb-8">
              An unexpected error occurred. Our team has been notified.
            </p>
            <button
              onClick={() => reset()}
              className="px-6 py-3 bg-[#f4a65d] text-white font-semibold rounded-lg hover:bg-[#e8924a] transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
