import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import CookieBanner from '@/components/CookieBanner'
import FloatingChat from '@/components/FloatingChat'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Cosasco | Corrosion Management Solutions',
  description:
    'Cosasco is the global leader in corrosion and erosion monitoring solutions, delivering precision instruments, access fittings, and data acquisition systems to oil & gas, petrochemical, and water treatment industries since 1950.',
  openGraph: {
    type: 'website',
    siteName: 'Cosasco',
    title: 'Cosasco | Corrosion Management Solutions',
    description:
      'Global leader in corrosion and erosion monitoring — ER probes, access fittings, Microcor® CDO data acquisition, and chemical injection systems for oil & gas, petrochemical, and water treatment.',
    url: 'https://cosasco.com',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Cosasco Corrosion Monitoring Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@cosasco',
    title: 'Cosasco | Corrosion Management Solutions',
    description: 'Global leader in corrosion and erosion monitoring since 1950.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Cosasco',
              url: 'https://cosasco.vercel.app',
              logo: 'https://cosasco.vercel.app/cosasco-logo.png',
              description: 'Cosasco is a global leader in corrosion and erosion monitoring equipment, chemical injection systems, and related engineering services.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '11841 Smith Avenue',
                addressLocality: 'Santa Fe Springs',
                addressRegion: 'CA',
                postalCode: '90670',
                addressCountry: 'US',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-562-949-0123',
                contactType: 'customer service',
              },
              sameAs: ['https://www.linkedin.com/company/cosasco'],
              parentOrganization: {
                '@type': 'Organization',
                name: 'Halma plc',
                url: 'https://www.halma.com',
              },
            }),
          }}
        />
      </head>
      <body className="pt-[75px]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] bg-[#f4a65d] text-white px-4 py-2 rounded-md font-semibold text-sm focus:outline-none"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
        <BackToTop />
        <CookieBanner />
        <FloatingChat />
      </body>
    </html>
  )
}
