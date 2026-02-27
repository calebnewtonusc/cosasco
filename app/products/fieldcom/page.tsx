import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'FieldCom Data Acquisition | Cosasco',
  description: 'Cosasco FieldCom data acquisition systems for corrosion monitoring — now part of the Microcor® CDO platform. View the full data acquisition product range.',
}

export default function FieldComRedirect() {
  redirect('/products/data-acquisition')
}
