import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RMA Request | Cosasco Support',
  description: 'Request a product return, repair, or recalibration through our Return Merchandise Authorization process.',
}

export default function RMALayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
