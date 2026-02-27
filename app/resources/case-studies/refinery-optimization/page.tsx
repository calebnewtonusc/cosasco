import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Refinery Corrosion Optimization Case Study | Cosasco',
  description: 'How a Gulf Coast crude distillation unit achieved a 73% reduction in corrosion events and $6.2M annual maintenance savings with Cosasco real-time corrosion monitoring.',
}

export default function Page() {
  redirect('/resources/case-studies/gulf-coast-refinery')
}
