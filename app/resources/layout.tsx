import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources | Cosasco Technical Library',
  description: 'Datasheets, application guides, software downloads, and technical documents for Cosasco corrosion monitoring and chemical injection products.',
}

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children
}
