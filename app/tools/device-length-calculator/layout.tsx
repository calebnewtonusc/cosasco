import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Device Length Calculator | Cosasco Tools',
  description: 'Calculate the correct insertion length for Cosasco probes and corrosion coupons based on pipe size, schedule, and desired monitoring position.',
}

export default function DeviceLengthCalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
