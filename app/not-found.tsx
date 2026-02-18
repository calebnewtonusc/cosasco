import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: '#f8fafc' }}
    >
      <p
        className="text-8xl font-black mb-6"
        style={{ color: '#E8500A' }}
      >
        404
      </p>
      <h1
        className="text-3xl font-extrabold mb-4"
        style={{ color: '#0F2A4A' }}
      >
        Page Not Found
      </h1>
      <p className="text-gray-500 mb-10 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all hover:brightness-110"
        style={{ background: '#0F2A4A' }}
      >
        Back to Home
      </Link>
    </div>
  )
}
