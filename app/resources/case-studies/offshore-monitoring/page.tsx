import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Offshore Corrosion Monitoring Case Study | Cosasco',
  description: 'Real-world offshore corrosion monitoring case study: how Cosasco eliminated unplanned shutdowns on a 400 km North Sea pipeline using continuous ER probe and Microcor® wireless systems.',
}

export default function Page() {
  redirect('/resources/case-studies/north-sea-pipeline')
}
