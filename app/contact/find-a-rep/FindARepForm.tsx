'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, Clock, MapPin, CheckCircle, User } from 'lucide-react'

type FormState = {
  firstName: string
  lastName: string
  company: string
  email: string
  country: string
  industry: string
  inquiry: string
  details: string
}

const regions = [
  {
    name: 'Americas',
    contact: 'David Reyes',
    email: 'd.reyes@cosasco.com',
    phone: '+1 (562) 949-0123',
    flag: '🌎',
    countries: 'USA, Canada, Mexico, Brazil, Colombia',
  },
  {
    name: 'Europe',
    contact: 'Sophie Müller',
    email: 's.muller@cosasco.com',
    phone: '+44 20 7123 4567',
    flag: '🌍',
    countries: 'UK, Germany, France, Netherlands, Nordics',
  },
  {
    name: 'Middle East',
    contact: 'Omar Al-Rashid',
    email: 'o.alrashid@cosasco.com',
    phone: '+971 4 234 5678',
    flag: '🌏',
    countries: 'UAE, Saudi Arabia, Kuwait, Qatar, Oman',
  },
  {
    name: 'Africa',
    contact: 'Amara Diallo',
    email: 'a.diallo@cosasco.com',
    phone: '+27 11 345 6789',
    flag: '🌍',
    countries: 'South Africa, Nigeria, Egypt, Angola, Algeria',
  },
  {
    name: 'Asia Pacific',
    contact: 'Lin Wei',
    email: 'l.wei@cosasco.com',
    phone: '+60 3 5555 0143',
    flag: '🌏',
    countries: 'Malaysia, China, Japan, South Korea, India, Indonesia',
  },
  {
    name: 'Oceania',
    contact: 'James Hartley',
    email: 'j.hartley@cosasco.com',
    phone: '+61 2 8765 4321',
    flag: '🌏',
    countries: 'Australia, New Zealand, Papua New Guinea',
  },
]

const countryToRegion: Record<string, string> = {
  'United States': 'Americas',
  'Canada': 'Americas',
  'Mexico': 'Americas',
  'Brazil': 'Americas',
  'Colombia': 'Americas',
  'Other — Americas': 'Americas',
  'United Kingdom': 'Europe',
  'Germany': 'Europe',
  'France': 'Europe',
  'Netherlands': 'Europe',
  'Norway / Sweden / Denmark': 'Europe',
  'Other — Europe': 'Europe',
  'United Arab Emirates': 'Middle East',
  'Saudi Arabia': 'Middle East',
  'Kuwait': 'Middle East',
  'Qatar': 'Middle East',
  'Oman': 'Middle East',
  'Other — Middle East': 'Middle East',
  'South Africa': 'Africa',
  'Nigeria': 'Africa',
  'Egypt': 'Africa',
  'Other — Africa': 'Africa',
  'Malaysia': 'Asia Pacific',
  'China': 'Asia Pacific',
  'Japan': 'Asia Pacific',
  'South Korea': 'Asia Pacific',
  'India': 'Asia Pacific',
  'Indonesia': 'Asia Pacific',
  'Singapore': 'Asia Pacific',
  'Other — Asia Pacific': 'Asia Pacific',
  'Australia': 'Oceania',
  'New Zealand': 'Oceania',
  'Other — Oceania': 'Oceania',
}

export default function FindARepForm() {
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    country: '',
    industry: '',
    inquiry: '',
    details: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  // Derive matched rep from selected country — live, reactive
  const matchedRegionName = form.country ? countryToRegion[form.country] : null
  const matchedRep = matchedRegionName ? regions.find(r => r.name === matchedRegionName) : null

  function update(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (error) setError('')
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.firstName || !form.country) {
      setError('Please fill in your name and country/region.')
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch('/api/find-a-rep', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          region: matchedRegionName ?? 'General',
          routedTo: matchedRep?.email ?? 'info@cosasco.com',
          repName: matchedRep?.contact ?? '',
        }),
      })
      if (!res.ok) throw new Error('server error')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or contact us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputCls =
    'w-full px-4 py-3 border border-[#e8edf2] rounded-lg text-[#374151] placeholder-[#94aabb] focus:outline-none focus:border-[#f4a65d] focus:ring-1 focus:ring-[#f4a65d] transition-colors text-sm'
  const selectCls =
    'w-full px-4 py-3 border border-[#e8edf2] rounded-lg text-[#374151] bg-white focus:outline-none focus:border-[#f4a65d] focus:ring-1 focus:ring-[#f4a65d] transition-colors text-sm'

  return (
    <>
      {/* HERO */}
      <section className="bg-[#0f2a4a] pt-[72px] pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#f4a65d] text-xs font-bold uppercase tracking-[0.1em] mb-4">Global Network</p>
          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight mb-4">
            Find Your Local Representative
          </h1>
          <p className="text-[#94aabb] text-lg max-w-xl mx-auto leading-relaxed">
            Connect with a Cosasco expert in your region for product selection, technical support,
            and custom quotes.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white border border-[#e8edf2] rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#fef3e2] flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-[#f4a65d]" />
                  </div>
                  <h2 className="text-[#0f2a4a] font-black text-2xl mb-3">Request Received</h2>
                  <p className="text-[#566677] text-sm leading-relaxed max-w-md mx-auto mb-2">
                    Thank you, <strong className="text-[#0f2a4a]">{form.firstName}</strong>. Your inquiry has been routed to:
                  </p>
                  {matchedRep && (
                    <div className="inline-flex items-center gap-3 bg-[#f7f9fc] border border-[#e8edf2] rounded-xl px-5 py-3 mb-8">
                      <div className="w-9 h-9 rounded-full bg-[#0f2a4a] flex items-center justify-center text-white font-black text-sm shrink-0">
                        {matchedRep.contact.charAt(0)}
                      </div>
                      <div className="text-left">
                        <p className="text-[#0f2a4a] font-bold text-sm">{matchedRep.contact}</p>
                        <p className="text-[#566677] text-xs">{matchedRep.name} Representative</p>
                      </div>
                    </div>
                  )}
                  <p className="text-[#566677] text-sm mb-8">You&apos;ll hear back within one business day.</p>
                  <Link
                    href="/"
                    className="inline-block bg-[#f4a65d] hover:bg-[#d4892a] text-white font-bold px-8 py-3 rounded-lg transition-colors text-sm"
                  >
                    Back to Home
                  </Link>
                </div>
              ) : (
                <>
                  <h2 className="text-[#0f2a4a] font-black text-2xl mb-2">
                    Connect with a Cosasco Expert Near You
                  </h2>
                  <p className="text-[#566677] text-sm mb-8 leading-relaxed">
                    Select your country and we&apos;ll instantly match you with the right regional contact.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="rep-first-name" className="block text-xs font-bold uppercase tracking-[0.08em] text-[#566677] mb-1.5">
                          First Name <span className="text-[#f4a65d]">*</span>
                        </label>
                        <input
                          id="rep-first-name"
                          type="text"
                          value={form.firstName}
                          onChange={(e) => update('firstName', e.target.value)}
                          placeholder="John"
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label htmlFor="rep-last-name" className="block text-xs font-bold uppercase tracking-[0.08em] text-[#566677] mb-1.5">
                          Last Name
                        </label>
                        <input
                          id="rep-last-name"
                          type="text"
                          value={form.lastName}
                          onChange={(e) => update('lastName', e.target.value)}
                          placeholder="Smith"
                          className={inputCls}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="rep-company" className="block text-xs font-bold uppercase tracking-[0.08em] text-[#566677] mb-1.5">
                          Company
                        </label>
                        <input
                          id="rep-company"
                          type="text"
                          value={form.company}
                          onChange={(e) => update('company', e.target.value)}
                          placeholder="Your company name"
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label htmlFor="rep-email" className="block text-xs font-bold uppercase tracking-[0.08em] text-[#566677] mb-1.5">
                          Business Email
                        </label>
                        <input
                          id="rep-email"
                          type="email"
                          value={form.email}
                          onChange={(e) => update('email', e.target.value)}
                          placeholder="you@company.com"
                          className={inputCls}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="rep-country" className="block text-xs font-bold uppercase tracking-[0.08em] text-[#566677] mb-1.5">
                        Country / Region <span className="text-[#f4a65d]">*</span>
                      </label>
                      <select
                        id="rep-country"
                        value={form.country}
                        onChange={(e) => update('country', e.target.value)}
                        className={selectCls}
                      >
                        <option value="">Select your country or region...</option>
                        <optgroup label="Americas">
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                          <option>Brazil</option>
                          <option>Colombia</option>
                          <option>Other — Americas</option>
                        </optgroup>
                        <optgroup label="Europe">
                          <option>United Kingdom</option>
                          <option>Germany</option>
                          <option>France</option>
                          <option>Netherlands</option>
                          <option>Norway / Sweden / Denmark</option>
                          <option>Other — Europe</option>
                        </optgroup>
                        <optgroup label="Middle East">
                          <option>United Arab Emirates</option>
                          <option>Saudi Arabia</option>
                          <option>Kuwait</option>
                          <option>Qatar</option>
                          <option>Oman</option>
                          <option>Other — Middle East</option>
                        </optgroup>
                        <optgroup label="Africa">
                          <option>South Africa</option>
                          <option>Nigeria</option>
                          <option>Egypt</option>
                          <option>Other — Africa</option>
                        </optgroup>
                        <optgroup label="Asia Pacific">
                          <option>Malaysia</option>
                          <option>China</option>
                          <option>Japan</option>
                          <option>South Korea</option>
                          <option>India</option>
                          <option>Indonesia</option>
                          <option>Singapore</option>
                          <option>Other — Asia Pacific</option>
                        </optgroup>
                        <optgroup label="Oceania">
                          <option>Australia</option>
                          <option>New Zealand</option>
                          <option>Other — Oceania</option>
                        </optgroup>
                      </select>

                      {/* ── Live rep match — appears instantly on country select ── */}
                      {matchedRep && (
                        <div className="mt-3 bg-[#fef3e2] border border-[#f4a65d]/40 rounded-xl p-4 animate-fade-up">
                          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#d4892a] mb-3 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f4a65d] inline-block" />
                            Your Regional Contact
                          </p>
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-[#0f2a4a] flex items-center justify-center text-white font-black text-sm shrink-0">
                              {matchedRep.contact.charAt(0)}
                            </div>
                            <div>
                              <p className="text-[#0f2a4a] font-black text-base leading-tight">{matchedRep.contact}</p>
                              <p className="text-[#566677] text-xs">{matchedRep.name} Region · {matchedRep.countries}</p>
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <a href={`mailto:${matchedRep.email}`} className="flex items-center gap-2 text-sm text-[#f4a65d] hover:underline font-medium">
                              <Mail className="w-3.5 h-3.5 shrink-0" />
                              {matchedRep.email}
                            </a>
                            <a href={`tel:${matchedRep.phone.replace(/[\s()]/g, '')}`} className="flex items-center gap-2 text-sm text-[#566677] hover:text-[#0f2a4a] transition-colors">
                              <Phone className="w-3.5 h-3.5 shrink-0" />
                              {matchedRep.phone}
                            </a>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="rep-industry" className="block text-xs font-bold uppercase tracking-[0.08em] text-[#566677] mb-1.5">
                          Industry
                        </label>
                        <select
                          id="rep-industry"
                          value={form.industry}
                          onChange={(e) => update('industry', e.target.value)}
                          className={selectCls}
                        >
                          <option value="">Select your industry...</option>
                          <option>Oil &amp; Gas — Upstream</option>
                          <option>Oil &amp; Gas — Midstream / Pipelines</option>
                          <option>Oil &amp; Gas — Downstream / Refining</option>
                          <option>Petrochemical &amp; Chemical Processing</option>
                          <option>Power Generation</option>
                          <option>Water &amp; Wastewater</option>
                          <option>Pulp &amp; Paper</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="rep-inquiry" className="block text-xs font-bold uppercase tracking-[0.08em] text-[#566677] mb-1.5">
                          What do you need help with?
                        </label>
                        <select
                          id="rep-inquiry"
                          value={form.inquiry}
                          onChange={(e) => update('inquiry', e.target.value)}
                          className={selectCls}
                        >
                          <option value="">Select an inquiry type...</option>
                          <option>Product Selection</option>
                          <option>Technical Support</option>
                          <option>Quote Request</option>
                          <option>General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="rep-details" className="block text-xs font-bold uppercase tracking-[0.08em] text-[#566677] mb-1.5">
                        Additional Details (optional)
                      </label>
                      <textarea
                        id="rep-details"
                        rows={4}
                        value={form.details}
                        onChange={(e) => update('details', e.target.value)}
                        placeholder="Describe your application, current challenges, or any specific products you're interested in..."
                        className={`${inputCls} resize-none`}
                      />
                    </div>

                    {error && (
                      <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="bg-[#f4a65d] hover:bg-[#d4892a] disabled:opacity-60 text-white font-bold px-8 py-4 rounded-lg transition-colors text-sm w-full sm:w-auto"
                    >
                      {submitting ? 'Submitting…' : matchedRep ? `Connect with ${matchedRep.contact}` : 'Find My Representative'}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-5">
              {/* Rep directory teaser */}
              <div className="bg-[#f7f9fc] border border-[#e8edf2] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <User className="w-4 h-4 text-[#f4a65d]" />
                  <h3 className="text-[#0f2a4a] font-black text-sm uppercase tracking-[0.08em]">Global Coverage</h3>
                </div>
                <div className="space-y-2.5">
                  {regions.map((r) => (
                    <div
                      key={r.name}
                      className={`flex items-center gap-2.5 rounded-lg px-3 py-2 transition-all text-sm ${
                        matchedRep?.name === r.name
                          ? 'bg-[#fef3e2] border border-[#f4a65d]/40 text-[#0f2a4a] font-semibold'
                          : 'text-[#566677]'
                      }`}
                    >
                      <span className="text-base">{r.flag}</span>
                      <span>{r.name}</span>
                      {matchedRep?.name === r.name && (
                        <span className="ml-auto text-[10px] font-bold text-[#f4a65d] uppercase tracking-wider">Your rep</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct contact */}
              <div className="bg-[#f0f4f8] border border-[#e8edf2] rounded-xl p-6 sticky top-24">
                <h3 className="text-[#0f2a4a] font-black text-base mb-4">Or contact us directly</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#f4a65d] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#566677] mb-0.5">Toll Free</p>
                      <a href="tel:+18006356898" className="text-[#0f2a4a] text-sm font-medium hover:text-[#f4a65d] transition-colors">+1-800-635-6898</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#f4a65d] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#566677] mb-0.5">Email</p>
                      <a href="mailto:info@cosasco.com" className="text-[#0f2a4a] text-sm font-medium hover:text-[#f4a65d] transition-colors">info@cosasco.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#f4a65d] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#566677] mb-0.5">Office Hours</p>
                      <p className="text-[#0f2a4a] text-sm">Mon–Fri, 7:30 AM–5:00 PM PT</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#f4a65d] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#566677] mb-0.5">Headquarters</p>
                      <p className="text-[#0f2a4a] text-sm leading-relaxed">11841 Smith Avenue<br />Santa Fe Springs, CA 90670</p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 pt-5 border-t border-[#e8edf2]">
                  <Link
                    href="/contact"
                    className="block text-center bg-[#0f2a4a] hover:bg-[#1a3a5c] text-white font-semibold px-4 py-3 rounded-lg text-sm transition-colors"
                  >
                    Visit Full Contact Page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGIONAL CONTACTS */}
      <section className="bg-[#f0f4f8] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#f4a65d] text-xs font-bold uppercase tracking-[0.1em] mb-3">Our Global Team</p>
            <h2 className="text-[#0f2a4a] font-black text-3xl">Regional Contacts</h2>
            <p className="text-[#566677] text-sm mt-2">Our global team is ready to support you wherever you operate.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {regions.map((region) => (
              <div
                key={region.name}
                className={`bg-white border rounded-xl p-6 transition-all ${
                  matchedRep?.name === region.name
                    ? 'border-[#f4a65d] shadow-md ring-1 ring-[#f4a65d]/20'
                    : 'border-[#e8edf2] hover:shadow-md'
                }`}
              >
                {matchedRep?.name === region.name && (
                  <div className="mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#f4a65d] bg-[#fef3e2] px-2.5 py-1 rounded-full">
                      Your Rep
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl" role="img" aria-label={region.name}>{region.flag}</span>
                  <div>
                    <h3 className="text-[#0f2a4a] font-black text-base">{region.name}</h3>
                    <p className="text-[#94aabb] text-xs leading-snug">{region.countries}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[#0f2a4a] text-sm font-semibold">{region.contact}</p>
                  <a href={`mailto:${region.email}`} className="flex items-center gap-2 text-sm text-[#f4a65d] hover:underline">
                    <Mail className="w-4 h-4 shrink-0" />{region.email}
                  </a>
                  <a href={`tel:${region.phone.replace(/[\s()]/g, '')}`} className="flex items-center gap-2 text-sm text-[#566677] hover:text-[#0f2a4a] transition-colors">
                    <Phone className="w-4 h-4 shrink-0" />{region.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
