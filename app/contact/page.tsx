import type { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact Cosasco | Corrosion Monitoring & Chemical Injection',
  description: 'Get in touch with Cosasco for sales inquiries, technical support, product information, or quote requests. Global headquarters in Santa Fe Springs, CA with offices worldwide.',
}

export default function ContactPage() {
  return <ContactPageClient />
}
