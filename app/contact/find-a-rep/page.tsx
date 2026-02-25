import type { Metadata } from 'next'
import FindARepForm from './FindARepForm'

export const metadata: Metadata = {
  title: 'Find a Representative | Cosasco',
  description:
    'Find your local Cosasco sales representative or distributor in 110+ countries worldwide.',
}

export default function FindARepPage() {
  return <FindARepForm />
}
