import type { Metadata } from 'next'
import RMAPageClient from './RMAPageClient'

export const metadata: Metadata = {
  title: 'Return Merchandise Authorization (RMA) | Cosasco',
  description: 'Submit a Cosasco RMA request for product returns, warranty claims, repairs, or recalibration. Our engineering team will respond within one business day.',
}

export default function RMAPage() {
  return <RMAPageClient />
}
