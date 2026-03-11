import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Lock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partner Payment | Cosasco',
  description:
    'Authorized Cosasco distributors and partners can manage invoices and payments through the partner payment portal.',
}

export default function PartnerPaymentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-[#0f2a4a] text-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#f4a65d]" aria-hidden="true" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-14 md:py-16">
          <nav className="flex items-center gap-2 text-sm text-[#8ab4d4] mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <Link href="/about" className="hover:text-white transition-colors">Company</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="text-white font-medium">Partner Payment</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black leading-tight mb-4">Partner Payment</h1>
          <p className="text-[#94aabb] text-lg leading-relaxed max-w-xl">
            Authorized distributors and channel partners can manage invoices and payments through our secure portal.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="bg-white py-14 md:py-16 px-4">
        <div className="max-w-xl mx-auto">
          <div className="bg-[#f7f9fc] border border-[#e8edf2] rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#0f2a4a] flex items-center justify-center">
                <Lock className="w-5 h-5 text-[#f4a65d]" />
              </div>
              <h2 className="font-bold text-lg text-[#0f2a4a]">Partner portal</h2>
            </div>
            <p className="text-[#566677] text-sm leading-relaxed mb-6">
              Log in to view invoices, make payments, or update your account. Access is restricted to authorized Cosasco partners.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#f4a65d] hover:bg-[#d4892a] text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              Access portal
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="mt-5 text-[#8898aa] text-xs">
              Don’t have access? Contact <a href="mailto:ccpayments@cosasco.com" className="text-[#f4a65d] hover:underline">ccpayments@cosasco.com</a> or your account manager.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
