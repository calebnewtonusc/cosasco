'use client'

import { useEffect } from 'react'
import { RefreshCw } from 'lucide-react'

export default function GlobalError({
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
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "'Mukta Mahee', sans-serif", background: '#ffffff' }}>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '28rem', width: '100%' }}>
            {/* Gold circle with ! */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
              <div
                style={{
                  width: '6rem',
                  height: '6rem',
                  borderRadius: '50%',
                  background: '#f4a65d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 0 8px rgba(244,166,93,0.15)',
                }}
              >
                <span
                  style={{
                    color: '#ffffff',
                    fontWeight: 900,
                    fontSize: '3rem',
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                >
                  !
                </span>
              </div>
            </div>

            <h1
              style={{
                color: '#0f2a4a',
                fontWeight: 900,
                fontSize: '2.25rem',
                marginBottom: '1rem',
                lineHeight: 1.2,
              }}
            >
              Something went wrong
            </h1>
            <p
              style={{
                color: '#8898aa',
                fontSize: '1.125rem',
                marginBottom: '2.5rem',
                lineHeight: 1.65,
              }}
            >
              We encountered an unexpected error. Our team has been notified.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
              <button
                onClick={() => reset()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  background: '#f4a65d',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  border: 'none',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  minWidth: '10rem',
                  justifyContent: 'center',
                }}
              >
                <RefreshCw size={16} />
                Try Again
              </button>
              <a
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.75rem 1.5rem',
                  border: '2px solid #0f2a4a',
                  color: '#0f2a4a',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  minWidth: '10rem',
                }}
              >
                Go Home
              </a>
            </div>

            {error.digest && (
              <p
                style={{
                  marginTop: '2rem',
                  color: '#a0adb8',
                  fontSize: '0.75rem',
                  fontFamily: 'monospace',
                }}
              >
                Reference: {error.digest}
              </p>
            )}
          </div>
        </div>
      </body>
    </html>
  )
}
