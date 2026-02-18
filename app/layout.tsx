import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Cosasco | Corrosion Management Solutions',
  description:
    'Cosasco is the global leader in corrosion and erosion monitoring solutions, delivering precision instruments, access fittings, and data acquisition systems to oil & gas, petrochemical, and water treatment industries since 1955.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} pt-[75px]`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
