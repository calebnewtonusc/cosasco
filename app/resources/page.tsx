import type { Metadata } from 'next'
import ResourcesPageClient from './ResourcesPageClient'

export const metadata: Metadata = {
  title: 'Technical Resources & Document Library | Cosasco',
  description: 'Browse and request Cosasco technical documentation including datasheets, installation guides, white papers, case studies, and user manuals for corrosion monitoring products.',
}

export default function ResourcesPage() {
  return <ResourcesPageClient />
}
