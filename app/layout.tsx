import type { Metadata } from 'next'
import '@fontsource/mukta-mahee/300.css'
import '@fontsource/mukta-mahee/400.css'
import '@fontsource/mukta-mahee/500.css'
import '@fontsource/mukta-mahee/600.css'
import '@fontsource/mukta-mahee/700.css'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import CookieBanner from '@/components/CookieBanner'

export const metadata: Metadata = {
  title: 'Cosasco | Corrosion Management Solutions',
  description:
    'Cosasco is the global leader in corrosion and erosion monitoring solutions, delivering precision instruments, access fittings, and data acquisition systems to oil & gas, petrochemical, and water treatment industries since 1955.',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="pt-[75px]">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <CookieBanner />
      </body>
    </html>
  )
}
