import type { Metadata } from 'next'
import Link from 'next/link'
import { Lock, Users, Mail, ArrowRight, Globe, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partner Payment Portal | Cosasco',
  description:
    'Authorized Cosasco distributors and channel partners can manage invoices and payments through the partner payment portal.',
}

const paymentPolicies = [
  'Standard net-30 payment terms for all authorized partners',
  'Wire transfer and ACH accepted for invoices over $5,000',
  'Credit card payments accepted via secure portal for invoices under $5,000',
  'Invoice disputes must be raised within 14 days of invoice date',
  'Early payment discount available: contact your account manager',
]

const partnerTypes = [
  {
    icon: <Globe className="w-6 h-6 text-[#f4a65d]" />,
    title: 'Authorized Distributor',
    desc: 'Join our global distribution network for preferential pricing, dedicated account management, and co-marketing support.',
  },
  {
    icon: <BookOpen className="w-6 h-6 text-[#f4a65d]" />,
    title: 'Technology Partner',
    desc: 'Integrate your monitoring software or hardware with the Cosasco CDO platform. Access our developer API and partner certification program.',
  },
  {
    icon: <Users className="w-6 h-6 text-[#f4a65d]" />,
    title: 'Service Partner',
    desc: 'Become a certified Cosasco installation and service provider in your region. Full training and technical documentation included.',
  },
]

export default function PartnerPaymentPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[#0f2a4a] pb-20 pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-[#8ab4d4] mb-6">
            <Link href="/software" className="hover:text-white transition-colors">
              Software
            </Link>
            <span>/</span>
            <span className="text-white">Partner Payment</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Partner Payment Portal
          </h1>
          <p className="text-lg text-[#8ab4d4] max-w-2xl">
            Authorized distributors and channel partners can manage invoices and payments here.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* LEFT: 2 columns */}
            <div className="lg:col-span-2 space-y-12">

              {/* Portal Access */}
              <div>
                <h2 className="text-2xl font-bold text-[#0f2a4a] mb-6">Portal Access</h2>
                <div className="bg-[#f0f4f8] rounded-xl p-8">
                  <div className="flex items-center gap-3 mb-7">
                    <Lock className="w-5 h-5 text-[#0f2a4a]" />
                    <h3 className="text-lg font-bold text-[#0f2a4a]">Partner Login</h3>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="partner-id" className="block text-sm font-medium text-[#374151] mb-1.5">
                        Partner ID
                      </label>
                      <input
                        id="partner-id"
                        type="text"
                        readOnly
                        placeholder="Partner ID"
                        className="w-full border border-[#e8edf2] rounded-md bg-white px-4 py-3 text-[#374151] placeholder-[#9ca3af] text-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="partner-password" className="block text-sm font-medium text-[#374151] mb-1.5">
                        Password
                      </label>
                      <input
                        id="partner-password"
                        type="password"
                        readOnly
                        placeholder="Password"
                        className="w-full border border-[#e8edf2] rounded-md bg-white px-4 py-3 text-[#374151] placeholder-[#9ca3af] text-sm focus:outline-none"
                      />
                    </div>
                    <Link
                      href="/contact"
                      className="block w-full text-center bg-[#f4a65d] hover:bg-[#e8954a] text-white py-3 rounded-lg font-semibold text-sm transition-colors"
                    >
                      Access Portal
                    </Link>
                  </div>
                  <p className="mt-5 text-[#566677] text-xs text-center">
                    Portal access is restricted to authorized Cosasco partners.
                  </p>
                </div>
              </div>

              {/* Becoming a Partner */}
              <div>
                <h2 className="text-2xl font-bold text-[#0f2a4a] mb-6">
                  Becoming a Cosasco Partner
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {partnerTypes.map((pt) => (
                    <div
                      key={pt.title}
                      className="bg-white border border-[#e8edf2] rounded-xl p-6"
                    >
                      <div className="mb-4">{pt.icon}</div>
                      <h3 className="font-bold text-[#0f2a4a] text-sm mb-2">{pt.title}</h3>
                      <p className="text-[#566677] text-sm leading-relaxed">{pt.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Terms */}
              <div>
                <h2 className="text-2xl font-bold text-[#0f2a4a] mb-6">
                  Payment Terms &amp; Policies
                </h2>
                <div className="border border-[#e8edf2] rounded-xl overflow-hidden">
                  {paymentPolicies.map((policy, i) => (
                    <div
                      key={policy.slice(0, 30)}
                      className={`px-6 py-4 text-sm text-[#566677] leading-relaxed ${
                        i < paymentPolicies.length - 1 ? 'border-b border-[#e8edf2]' : ''
                      } ${i % 2 === 0 ? 'bg-white' : 'bg-[#f7f9fc]'}`}
                    >
                      {policy}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT: Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-[90px] space-y-6">

                {/* Account Manager Card */}
                <div className="border border-[#e8edf2] rounded-xl p-6 bg-white">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-5 h-5 text-[#f4a65d]" />
                    <h3 className="font-bold text-[#0f2a4a] text-base">
                      Contact Your Account Manager
                    </h3>
                  </div>
                  <p className="text-[#566677] text-sm leading-relaxed mb-5">
                    For billing questions, invoice disputes, or payment arrangements, contact your
                    assigned Cosasco account manager.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center bg-[#0f2a4a] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1a3d5c] transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>

                {/* Partner Resources */}
                <div className="border border-[#e8edf2] rounded-xl p-6 bg-white">
                  <h3 className="font-bold text-[#0f2a4a] text-base mb-4">Partner Resources</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/support"
                        className="flex items-center justify-between text-sm text-[#0f2a4a] font-medium hover:text-[#f4a65d] transition-colors py-1.5"
                      >
                        Technical Support
                        <ArrowRight className="w-4 h-4 text-[#8ab4d4]" />
                      </Link>
                    </li>
                    <li className="border-t border-[#e8edf2]">
                      <Link
                        href="/products"
                        className="flex items-center justify-between text-sm text-[#0f2a4a] font-medium hover:text-[#f4a65d] transition-colors py-1.5"
                      >
                        Product Catalog
                        <ArrowRight className="w-4 h-4 text-[#8ab4d4]" />
                      </Link>
                    </li>
                    <li className="border-t border-[#e8edf2]">
                      <Link
                        href="/resources/case-studies"
                        className="flex items-center justify-between text-sm text-[#0f2a4a] font-medium hover:text-[#f4a65d] transition-colors py-1.5"
                      >
                        Case Studies
                        <ArrowRight className="w-4 h-4 text-[#8ab4d4]" />
                      </Link>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#0f2a4a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Interested in becoming a Cosasco partner?
          </h2>
          <p className="text-[#8ab4d4] mb-8 max-w-lg mx-auto">
            Join our global network of distributors, technology partners, and certified service
            providers.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#f4a65d] text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#e8954a] transition-colors"
          >
            Contact Our Partnerships Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
