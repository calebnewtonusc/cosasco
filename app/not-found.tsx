import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404: Page Not Found | Cosasco',
  description: 'The page you are looking for could not be found.',
}

const popularLinks = [
  { label: 'Products', desc: 'Browse our monitoring portfolio', href: '/products' },
  { label: 'Solutions', desc: 'Find solutions for your industry', href: '/solutions' },
  { label: 'About', desc: 'Our history and mission', href: '/about' },
  { label: 'Support', desc: 'Technical support and documentation', href: '/support' },
  { label: 'Resources', desc: 'Case studies, whitepapers, and more', href: '/resources' },
  { label: 'Contact', desc: 'Speak with an application engineer', href: '/contact' },
]

export default function NotFound() {
  return (
    <div
      className="min-h-screen bg-[#0f2a4a] flex flex-col items-center justify-center px-6"
    >
      <div className="max-w-3xl w-full text-center">

        {/* 404 number */}
        <p className="text-8xl font-black text-[#f4a65d] leading-none select-none">
          404
        </p>

        {/* Heading */}
        <h1 className="text-white font-black text-3xl mt-4">
          Page not found
        </h1>

        {/* Subtext */}
        <p className="text-[#94aabb] mt-3 max-w-md mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Try one of the links below to get back on track.
        </p>

        {/* Popular links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-10 text-left">
          {popularLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="bg-[#1a3a5c] border border-[#2a4a6c] rounded-xl p-4 hover:border-[#f4a65d] hover:bg-[#1f4268] transition-all duration-200 group"
            >
              <div className="font-semibold text-white group-hover:text-[#f4a65d] transition-colors text-sm">
                {link.label}
              </div>
              <div className="text-[#94aabb] text-xs mt-1 leading-snug">
                {link.desc}
              </div>
            </Link>
          ))}
        </div>

        {/* Go home button */}
        <div className="mt-10">
          <Link
            href="/"
            className="inline-block bg-[#f4a65d] hover:bg-[#d4892a] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
          >
            Go home
          </Link>
        </div>

      </div>
    </div>
  )
}
