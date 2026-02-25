'use client'

import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { trustPoints } from './home-data'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactCTASection() {
  const [form, setForm] = useState({ name: '', company: '', email: '', industry: '', challenge: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [k]: e.target.value }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.challenge.trim()) return
    setStatus('loading')
    setErrorMsg('')

    const parts = form.name.trim().split(' ')
    const firstName = parts[0]
    const lastName = parts.slice(1).join(' ')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          company: form.company,
          email: form.email,
          industry: form.industry,
          subject: 'Consultation Request',
          message: form.challenge,
        }),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again or email us directly.')
    }
  }

  return (
    <AnimateOnScroll delay={100}>
      <section className="bg-white py-20 px-4" style={{ backgroundColor: '#f7f9fc' }}>
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* Left column */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#f4a65d' }}>
              Get in Touch
            </span>
            <h2 className="font-black text-3xl lg:text-4xl mt-3 leading-tight" style={{ color: '#0f2a4a' }}>
              Talk to a Cosasco engineer.
            </h2>
            <p className="mt-4 leading-relaxed" style={{ color: '#374151' }}>
              Describe your application and we&apos;ll recommend the right
              monitoring strategy - no obligation.
            </p>

            <div className="mt-8 space-y-4">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: '#f4a65d' }} />
                  <span className="text-sm" style={{ color: '#374151' }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t" style={{ borderColor: '#e8edf2' }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#8898aa' }}>
                Or reach us directly
              </p>
              <div className="space-y-2">
                <a
                  href="tel:+18006356898"
                  className="flex items-center gap-2 text-sm font-semibold hover:text-[#f4a65d] transition-colors"
                  style={{ color: '#0f2a4a' }}
                >
                  +1-800-635-6898 (Toll Free)
                </a>
                <a
                  href="mailto:info@cosasco.com"
                  className="flex items-center gap-2 text-sm hover:text-[#f4a65d] transition-colors"
                  style={{ color: '#566677' }}
                >
                  info@cosasco.com
                </a>
              </div>
            </div>
          </div>

          {/* Right column - form */}
          <div
            className="mt-12 lg:mt-0 border rounded-2xl p-8"
            style={{
              backgroundColor: '#ffffff',
              borderColor: '#e8edf2',
              boxShadow: '0 4px 24px rgba(15,42,74,0.06)',
            }}
          >
            <h3 className="font-black text-xl mb-6" style={{ color: '#0f2a4a' }}>
              Request a Consultation
            </h3>

            {status === 'success' ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto">
                  <CheckCircle size={28} className="text-green-500" />
                </div>
                <p className="font-black text-lg text-[#0f2a4a]">Request Received!</p>
                <p className="text-sm text-[#566677] max-w-xs mx-auto leading-relaxed">
                  A Cosasco application engineer will reach out within one business day.
                </p>
                <button
                  onClick={() => { setStatus('idle'); setForm({ name: '', company: '', email: '', industry: '', challenge: '' }) }}
                  className="mt-2 text-xs font-semibold text-[#f4a65d] hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cta-name" className="block text-xs font-semibold mb-1.5" style={{ color: '#374151' }}>
                      Full Name <span className="text-[#f4a65d]">*</span>
                    </label>
                    <input
                      id="cta-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={set('name')}
                      placeholder="Jane Smith"
                      className="w-full px-3.5 py-2.5 rounded-lg border text-sm outline-none focus:ring-2 focus:ring-[#f4a65d]/30 focus:border-[#f4a65d] bg-white transition-colors"
                      style={{ borderColor: '#e8edf2', color: '#374151' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="cta-company" className="block text-xs font-semibold mb-1.5" style={{ color: '#374151' }}>
                      Company
                    </label>
                    <input
                      id="cta-company"
                      type="text"
                      value={form.company}
                      onChange={set('company')}
                      placeholder="Acme Energy"
                      className="w-full px-3.5 py-2.5 rounded-lg border text-sm outline-none focus:ring-2 focus:ring-[#f4a65d]/30 focus:border-[#f4a65d] bg-white transition-colors"
                      style={{ borderColor: '#e8edf2', color: '#374151' }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="cta-email" className="block text-xs font-semibold mb-1.5" style={{ color: '#374151' }}>
                    Work Email <span className="text-[#f4a65d]">*</span>
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={set('email')}
                    placeholder="jane@acmecorp.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border text-sm outline-none focus:ring-2 focus:ring-[#f4a65d]/30 focus:border-[#f4a65d] bg-white transition-colors"
                    style={{ borderColor: '#e8edf2', color: '#374151' }}
                  />
                </div>

                <div>
                  <label htmlFor="cta-industry" className="block text-xs font-semibold mb-1.5" style={{ color: '#374151' }}>
                    Industry
                  </label>
                  <select
                    id="cta-industry"
                    value={form.industry}
                    onChange={set('industry')}
                    className="w-full px-3.5 py-2.5 rounded-lg border text-sm outline-none focus:ring-2 focus:ring-[#f4a65d]/30 focus:border-[#f4a65d] bg-white appearance-none transition-colors"
                    style={{ borderColor: '#e8edf2', color: '#374151' }}
                  >
                    <option value="">Select your industry</option>
                    <option value="oil-gas">Oil &amp; Gas</option>
                    <option value="petrochemical">Petrochemical</option>
                    <option value="water">Water Treatment</option>
                    <option value="chemical">Chemical Processing</option>
                    <option value="pulp-paper">Pulp &amp; Paper</option>
                    <option value="utilities">Utilities</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="cta-challenge" className="block text-xs font-semibold mb-1.5" style={{ color: '#374151' }}>
                    Describe your corrosion challenge <span className="text-[#f4a65d]">*</span>
                  </label>
                  <textarea
                    id="cta-challenge"
                    rows={3}
                    required
                    value={form.challenge}
                    onChange={set('challenge')}
                    placeholder="Tell us about your process environment, current issues, or monitoring goals..."
                    className="w-full px-3.5 py-2.5 rounded-lg border text-sm outline-none focus:ring-2 focus:ring-[#f4a65d]/30 focus:border-[#f4a65d] bg-white resize-none transition-colors"
                    style={{ borderColor: '#e8edf2', color: '#374151' }}
                  />
                </div>

                {errorMsg && (
                  <p className="text-red-500 text-xs">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full font-semibold py-3 rounded-lg mt-2 text-white transition-colors hover:bg-[#d4892a] disabled:opacity-60"
                  style={{ backgroundColor: '#f4a65d' }}
                >
                  {status === 'loading' ? 'Sending…' : 'Request a Consultation'}
                </button>

                <p className="text-[0.65rem] text-center" style={{ color: '#8898aa' }}>
                  No spam. Application engineers only. Response within one business day.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>
    </AnimateOnScroll>
  )
}
