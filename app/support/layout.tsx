import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customer Support | Cosasco',
  description: 'Technical support, FAQs, software downloads, and direct contact for Cosasco corrosion monitoring and chemical injection products.',
}

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return children
}
