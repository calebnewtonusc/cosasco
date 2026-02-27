import type { Metadata } from 'next'
import DeviceLengthCalculatorClient from './DeviceLengthCalculatorClient'

export const metadata: Metadata = {
  title: 'Device Length Calculator | Cosasco',
  description: 'Calculate the correct insertion length for Cosasco corrosion probes and coupons based on pipe size, schedule, access fitting thread size, and probe tip position.',
}

export default function DeviceLengthCalculatorPage() {
  return <DeviceLengthCalculatorClient />
}

