import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

/* ─── Fonts ─────────────────────────────────────────────────────────────── */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
})

/* ─── Viewport ───────────────────────────────────────────────────────────── */
export const viewport: Viewport = {
  themeColor: '#0F2A4A',
  width: 'device-width',
  initialScale: 1,
}

/* ─── Metadata ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL('https://cosasco.com'),
  title: {
    default: 'Cosasco – Global Leader in Corrosion Management Solutions',
    template: '%s | Cosasco',
  },
  description:
    'Cosasco has 70+ years of expertise delivering corrosion and erosion monitoring solutions, chemical injection systems, and data acquisition technology for oil & gas, petrochemical, water treatment, and industrial markets worldwide.',
  keywords: [
    'corrosion monitoring',
    'erosion monitoring',
    'chemical injection',
    'data acquisition',
    'corrosion management',
    'oil and gas',
    'petrochemical',
    'water treatment',
    'industrial corrosion solutions',
    'Cosasco',
  ],
  authors: [{ name: 'Cosasco', url: 'https://cosasco.com' }],
  creator: 'Cosasco',
  publisher: 'Cosasco Systems Inc.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cosasco.com',
    siteName: 'Cosasco',
    title: 'Cosasco – Global Leader in Corrosion Management Solutions',
    description:
      '70+ years of expertise in corrosion and erosion monitoring, chemical injection, and industrial data acquisition solutions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cosasco – Corrosion Management Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosasco – Global Leader in Corrosion Management Solutions',
    description:
      '70+ years of expertise in corrosion and erosion monitoring, chemical injection, and industrial data acquisition.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://cosasco.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-16x16.png',
  },
  manifest: '/site.webmanifest',
  category: 'industrial technology',
}

/* ─── Root Layout ────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans bg-white text-cosasco-text min-h-screen flex flex-col">
        {/* Skip to main content – accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-cosasco-blue focus:text-white focus:rounded-md focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>

        {/* Navigation */}
        <Navigation />

        {/* Page content */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}
