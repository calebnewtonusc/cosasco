import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Pipeline Corrosion Case Study | Cosasco',
  description: 'How Cosasco ER probes and Microcor® wireless systems eliminated unplanned shutdowns on a North Sea pipeline — a real-world pipeline corrosion monitoring case study.',
}

export default function Page() {
  redirect('/resources/case-studies/north-sea-pipeline')
}
