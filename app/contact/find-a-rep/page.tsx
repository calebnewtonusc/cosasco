import type { Metadata } from 'next'
import FindARepForm from './FindARepForm'

export const metadata: Metadata = {
  title: 'Find a Representative | Cosasco',
  description:
    'Connect with a Cosasco application engineer or local distributor in your region. Global coverage across the Americas, Europe, Middle East, Asia Pacific, and more.',
}

export default function FindARepPage() {
  return <FindARepForm />
}
