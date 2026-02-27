import type { Metadata } from 'next'
import SupportPageClient from './SupportPageClient'

export const metadata: Metadata = {
  title: 'Customer Support | Cosasco',
  description: 'Expert technical support for Cosasco corrosion monitoring and chemical injection systems. Browse FAQs, download software, or submit a tracked support request.',
}

export default function SupportPage() {
  return <SupportPageClient />
}
