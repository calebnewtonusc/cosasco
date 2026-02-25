import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Data Key Activation | Cosasco CDO Software',
  description:
    'Activate your CDO software activation key to unlock your licensed software features. Step-by-step instructions, troubleshooting, and support for software activation.',
}

export default function DataKeyPage() {
  const licenseFeatures = [
    'Cosasco Data Online (CDO) software license',
    'CDO cloud portal access (up to 5 users)',
    'Technical support (business hours)',
    'Software updates for 12 months',
    'Access to calibration data exports',
  ]

  const steps = [
    'Locate your 16-character activation code on the sticker inside your CDO software packaging or in your order confirmation email.',
    'Ensure your device is connected to the internet. Open CDO software or navigate to the CDO cloud portal.',
    'Click \"Activate License\" in the software menu, then enter your activation code when prompted.',
    'Your software will verify the key and unlock your licensed features within 60 seconds. A confirmation email will be sent to the registered email address.',
  ]

  const faqs = [
    {
      q: 'My activation code is not being accepted',
      a: 'Ensure you are entering the code exactly as printed. Codes are case-sensitive. Avoid spaces or hyphens not shown in the original code. If the issue persists, contact support with your order number.',
    },
    {
      q: "I\'ve lost my activation code",
      a: 'Contact our support team at support@cosasco.com with your original purchase order number and registered email address. We can re-issue your key within 1 business day.',
    },
    {
      q: 'Can I use the same key on multiple computers?',
      a: 'Standard licenses are single-seat. Multi-seat and site licenses are available; contact sales@cosasco.com for volume pricing.',
    },
    {
      q: 'My key expired',
      a: 'Annual maintenance licenses must be renewed to retain access to updates and support. Contact support@cosasco.com or log in to the CDO portal to renew.',
    },
  ]

  return (
    <main>
      {/* HERO */}
      <section className="bg-[#0f2a4a] pb-16 pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-[#8ab4d4] mb-6">
            <Link href="/software" className="hover:text-white transition-colors">
              Software
            </Link>
            <span>/</span>
            <span className="text-white">Data Key Activation</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Data Key Activation
          </h1>
          <p className="text-lg text-[#8ab4d4] max-w-2xl">
            Activate your CDO software license to unlock your licensed software features.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* LEFT: 2 columns */}
            <div className="lg:col-span-2 space-y-12">

              {/* Activation Steps */}
              <div>
                <h2 className="text-2xl font-bold text-[#0f2a4a] mb-7">
                  How to Activate Your Data Key
                </h2>
                <ol className="space-y-5">
                  {steps.map((step, i) => (
                    <li key={step.slice(0, 30)} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0f2a4a] text-white text-sm font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-[#566677] leading-relaxed pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Troubleshooting FAQ */}
              <div>
                <h2 className="text-2xl font-bold text-[#0f2a4a] mb-6">Troubleshooting</h2>
                <div className="space-y-3">
                  {faqs.map((faq) => (
                    <details
                      key={faq.q}
                      className="border border-[#e8edf2] rounded-xl overflow-hidden"
                    >
                      <summary className="flex items-center justify-between px-6 py-4 cursor-pointer bg-[#f0f4f8] hover:bg-[#e8edf2] transition-colors list-none">
                        <span className="font-semibold text-[#0f2a4a] text-sm pr-4">{faq.q}</span>
                        <span className="flex-shrink-0 text-[#0f2a4a] text-xl font-light leading-none select-none">
                          +
                        </span>
                      </summary>
                      <div className="px-6 py-4 bg-white border-t border-[#e8edf2]">
                        <p className="text-[#566677] text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Contact Support CTA */}
              <div className="bg-[#f0f4f8] rounded-xl p-6">
                <h3 className="font-bold text-[#0f2a4a] text-lg mb-2">Contact Support</h3>
                <p className="text-[#566677] text-sm mb-5 leading-relaxed">
                  Need help with activation? Contact our technical support team.
                </p>
                <Link
                  href="/support"
                  className="inline-flex items-center gap-2 bg-[#0f2a4a] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1a3d5c] transition-colors"
                >
                  Get Support <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* RIGHT: Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-[90px] space-y-6">

                {/* License Includes */}
                <div className="border border-[#e8edf2] rounded-xl p-6 bg-white">
                  <h3 className="font-bold text-[#0f2a4a] text-base mb-5">
                    What your license includes
                  </h3>
                  <ul className="space-y-3">
                    {licenseFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#f4a65d] mt-0.5 flex-shrink-0" />
                        <span className="text-[#566677] text-sm leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Manual Activation */}
                <div className="bg-[#f0f4f8] border border-[#e8edf2] rounded-xl p-6">
                  <h3 className="font-bold text-[#0f2a4a] text-base mb-3">
                    Manual Activation
                  </h3>
                  <p className="text-[#566677] text-sm leading-relaxed">
                    For air-gapped environments without internet access, manual offline activation
                    is available. Contact{' '}
                    <a
                      href="mailto:support@cosasco.com"
                      className="text-[#0f2a4a] font-medium hover:underline"
                    >
                      support@cosasco.com
                    </a>{' '}
                    for instructions.
                  </p>
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
            Can&apos;t find your key? We&apos;ll help.
          </h2>
          <p className="text-[#8ab4d4] mb-8 max-w-lg mx-auto">
            Our support team can re-issue lost keys and guide you through any activation issue.
          </p>
          <Link
            href="/support"
            className="inline-flex items-center gap-2 bg-[#f4a65d] text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#e8954a] transition-colors"
          >
            Contact Support <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
