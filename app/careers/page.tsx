import type { Metadata } from 'next'
import CareersClient from '@/components/careers/CareersClient'

export const metadata: Metadata = {
  title: 'Careers | Cosasco',
  description:
    'Join the Cosasco team. Explore open roles in engineering, sales, and operations at a global leader in corrosion monitoring technology.',
}

export default function CareersPage() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-[#0f2a4a] pt-[72px] pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <p className="text-[#f4a65d] text-sm font-semibold tracking-widest uppercase mb-4">
            Halma Company · Cosasco · 110+ Countries
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 max-w-3xl mx-auto leading-tight">
            Cosasco is on a mission to deliver confidence in corrosion management.
          </h1>
          <p className="text-lg text-[#8ab4d4] max-w-2xl mx-auto">
            We&apos;re looking for passionate, hard-working people to join our growing team in a
            fun, fast-paced environment.
          </p>
        </div>
      </section>

      <CareersClient />
    </div>
  )
}
