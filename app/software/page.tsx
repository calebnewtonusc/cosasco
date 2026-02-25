import type { Metadata } from 'next'
import Link from 'next/link'
import { Download, Key, Ruler, AlertTriangle, HelpCircle } from 'lucide-react'
import ActivationForm from './ActivationForm'

export const metadata: Metadata = {
  title: 'Software & Downloads | Cosasco',
  description:
    'Official Cosasco software for data acquisition, analysis, and device configuration. Download Cosasco Data Online (CDO), Device Length Calculator, and legacy tools.',
}

const legacySoftware = [
  {
    title: 'Corrdata\u00ae Plus',
    version: 'v3.3.0',
    os: 'Windows XP / Vista',
    href: '/downloads/corrdata-plus-3.3.0.zip',
  },
  {
    title: 'Microcor\u00ae Tools Software',
    version: 'v4.4.5',
    os: 'Windows 7 / XP / Vista',
    href: '/downloads/microcor-tools-4.4.5.zip',
  },
  {
    title: 'Corrdata II',
    version: 'v1.0.4.7',
    os: 'Windows 7 / XP / Vista',
    href: '/downloads/corrdata-ii-1.0.4.7.zip',
  },
]

export default function SoftwarePage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-[#0f2a4a] pt-[72px] pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#f4a65d] text-sm font-semibold tracking-widest uppercase mb-4">
            Software & Downloads
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Software &amp; Downloads
          </h1>
          <p className="text-lg text-[#8ab4d4] max-w-2xl mx-auto">
            Official Cosasco software for data acquisition, analysis, and device configuration.
          </p>
        </div>
      </section>

      {/* ── SECTION 1: Cosasco Data Online ── */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Card */}
            <div className="rounded-2xl overflow-hidden border border-[#e8edf2] shadow-sm">
              {/* Dark navy header */}
              <div className="bg-[#0f2a4a] px-8 py-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#f4a65d]/20 flex items-center justify-center flex-shrink-0">
                  <Download className="w-5 h-5 text-[#f4a65d]" />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#f4a65d] block mb-0.5">
                    Current Platform
                  </span>
                  <h2 className="text-xl font-bold text-white">Cosasco Data Online (CDO)</h2>
                </div>
              </div>

              {/* Body */}
              <div className="bg-white px-8 py-7">
                <p className="text-[#374151] text-sm leading-relaxed mb-6">
                  The current Cosasco data platform. Replaces Corrdata Plus, Corrdata II, and Microcor Tools. Compatible with all offline corrosion monitoring instruments including the Bluetooth Transfer Unit.
                </p>

                {/* System requirements */}
                <div className="bg-[#f7f9fc] rounded-lg border border-[#e8edf2] px-5 py-4 mb-6">
                  <p className="text-xs font-semibold text-[#0f2a4a] uppercase tracking-wide mb-2">
                    System Requirements
                  </p>
                  <p className="text-sm text-[#6b7280]">Windows 10 / 11, 64-bit</p>
                </div>

                <a
                  href="/downloads/CosascoDataSetup.exe.zip"
                  className="inline-flex items-center gap-2 bg-[#0f2a4a] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#1a3d6b] transition-colors mb-4"
                >
                  <Download className="w-4 h-4" />
                  Download CDO Software
                </a>

                <p className="text-[#6b7280] text-xs leading-relaxed">
                  Requires an activation key.{' '}
                  <a href="#data-key-activation" className="text-[#0f2a4a] underline underline-offset-2 hover:text-[#f4a65d]">
                    See Data Key Activation below.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Data Key Activation ── */}
      <section id="data-key-activation" className="bg-white py-20 border-t border-[#e8edf2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Key className="w-6 h-6 text-[#f4a65d]" />
              <h2 className="text-2xl font-bold text-[#0f2a4a]">Data Key Activation</h2>
            </div>
            <p className="text-[#6b7280] text-sm mb-8 leading-relaxed">
              Each CDO installation requires a unique activation key tied to your Machine ID. Complete the form below to request your key. Cosasco provides only one activation key per eligible device. Keys purchased through third-party vendors are not eligible.
            </p>

            <div className="bg-[#f7f9fc] border border-[#e8edf2] rounded-2xl p-8">
              <ActivationForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Device Length Calculator ── */}
      <section className="bg-[#f7f9fc] py-20 border-t border-[#e8edf2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-[#e8edf2] rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[#f4a65d]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Ruler className="w-5 h-5 text-[#f4a65d]" />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#566677] block mb-1">
                    Utility Tool
                  </span>
                  <h2 className="text-xl font-bold text-[#0f2a4a]">Device Length Calculator v1.0.7</h2>
                </div>
              </div>

              <p className="text-[#374151] text-sm leading-relaxed mb-6">
                Calculate the correct mechanical probe or device length based on your pipeline specifications. Supports 20+ probe and coupon holder models.
              </p>

              <a
                href="/downloads/device-length-calculator.zip"
                className="inline-flex items-center gap-2 bg-[#0f2a4a] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#1a3d6b] transition-colors mb-4"
              >
                <Download className="w-4 h-4" />
                Download Device Length Calculator
              </a>

              <div className="flex items-start gap-2 mt-1">
                <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-[#6b7280] text-xs leading-relaxed">
                  Requires 32-bit Java Runtime Environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Legacy Software ── */}
      <section className="bg-white py-20 border-t border-[#e8edf2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0f2a4a] mb-3">Legacy Software</h2>
          <p className="text-[#6b7280] text-sm mb-6 max-w-2xl">
            For customers with older instruments that are not compatible with CDO.
          </p>

          {/* Warning banner */}
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-8">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-800 text-sm leading-relaxed">
              <strong>Legacy software is provided as-is for older instruments. No support is available.</strong>{' '}
              For current instruments, use{' '}
              <a href="#data-key-activation" className="underline underline-offset-2 hover:text-amber-900">
                Cosasco Data Online (CDO)
              </a>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {legacySoftware.map((sw) => (
              <div
                key={sw.title}
                className="bg-[#f7f9fc] border border-[#e8edf2] rounded-xl p-6 flex flex-col"
              >
                <div className="flex-1 mb-5">
                  <h3 className="font-bold text-[#0f2a4a] text-base mb-1">{sw.title}</h3>
                  <p className="text-sm text-[#f4a65d] font-semibold mb-1">{sw.version}</p>
                  <p className="text-xs text-[#6b7280]">{sw.os}</p>
                </div>
                <a
                  href={sw.href}
                  className="inline-flex items-center justify-center gap-2 border border-[#0f2a4a] text-[#0f2a4a] px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#0f2a4a] hover:text-white transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Support CTA ── */}
      <section className="bg-[#0f2a4a] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 rounded-full bg-[#f4a65d]/20 flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-6 h-6 text-[#f4a65d]" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Need help with software activation or installation?
          </h2>
          <p className="text-[#8ab4d4] text-sm mb-6 max-w-md mx-auto">
            Our support team is available to assist with CDO setup, activation keys, and legacy software compatibility questions.
          </p>
          <Link
            href="/support"
            className="inline-flex items-center gap-2 bg-[#f4a65d] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e8954a] transition-colors"
          >
            Visit Support
          </Link>
        </div>
      </section>
    </main>
  )
}
