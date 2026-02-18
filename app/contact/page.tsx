'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Globe,
  ChevronRight,
  ArrowRight,
} from 'lucide-react'

const regionalOffices = [
  {
    region: 'North America',
    offices: [
      {
        name: 'Headquarters',
        city: 'Santa Fe Springs, CA',
        phone: '+1 (562) 949-0123',
        email: 'info@cosasco.com',
      },
      {
        name: 'Gulf Coast Office',
        city: 'Houston, TX',
        phone: '+1 (713) 555-0182',
        email: 'houston@cosasco.com',
      },
    ],
  },
  {
    region: 'Europe & Middle East',
    offices: [
      {
        name: 'European Operations',
        city: 'Aberdeen, Scotland',
        phone: '+44 1224 555 0191',
        email: 'europe@cosasco.com',
      },
      {
        name: 'Middle East Office',
        city: 'Dubai, UAE',
        phone: '+971 4 555 0175',
        email: 'me@cosasco.com',
      },
    ],
  },
  {
    region: 'Asia Pacific',
    offices: [
      {
        name: 'APAC Regional',
        city: 'Singapore',
        phone: '+65 6555 0143',
        email: 'apac@cosasco.com',
      },
      {
        name: 'Australia Office',
        city: 'Perth, WA',
        phone: '+61 8 5550 0167',
        email: 'australia@cosasco.com',
      },
    ],
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-[#0f2a4a] text-white overflow-hidden py-16 md:py-20">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#e05000]" aria-hidden="true" />
        <div className="cx relative">
          <nav className="flex items-center gap-2 text-sm text-[#8ab4d4] mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Contact</span>
          </nav>
          <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#e05000] mb-3">Get in Touch</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4">
            Contact Cosasco
          </h1>
          <p className="text-[#8ab4d4] text-lg max-w-xl leading-relaxed">
            Whether you have a sales inquiry, a technical question, or need product
            information, our engineering team is ready to respond.
          </p>
        </div>
      </section>

      {/* ── Main Section ── */}
      <section className="bg-white py-20 md:py-24">
        <div className="cx">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* ── Contact Form (col-span-3) ── */}
            <div className="lg:col-span-3">
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#e05000] mb-2">Send a Message</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#0f2a4a] mb-8">
                How Can We Help?
              </h2>

              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center bg-[#f7f9fc] border border-[#e8edf2] rounded-xl p-16 gap-4">
                  <CheckCircle className="w-14 h-14 text-green-600" />
                  <h3 className="text-[#0f2a4a] font-black text-xl">Message Sent</h3>
                  <p className="text-[#566677] text-sm max-w-sm leading-relaxed">
                    Thank you for reaching out. A member of the Cosasco team will review
                    your message and respond within one business day.
                  </p>
                  <button
                    className="btn btn-outline-navy mt-2 text-sm"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  className="space-y-5"
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#1e2b3a] mb-1.5">
                        Full Name <span className="text-[#e05000]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Smith"
                        className="w-full rounded-lg px-4 py-3 text-sm text-[#1e2b3a] bg-[#f7f9fc] border border-[#e8edf2] focus:outline-none focus:border-[#e05000] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1e2b3a] mb-1.5">
                        Company
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Refining Ltd."
                        className="w-full rounded-lg px-4 py-3 text-sm text-[#1e2b3a] bg-[#f7f9fc] border border-[#e8edf2] focus:outline-none focus:border-[#e05000] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#1e2b3a] mb-1.5">
                        Email Address <span className="text-[#e05000]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jsmith@company.com"
                        className="w-full rounded-lg px-4 py-3 text-sm text-[#1e2b3a] bg-[#f7f9fc] border border-[#e8edf2] focus:outline-none focus:border-[#e05000] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1e2b3a] mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="w-full rounded-lg px-4 py-3 text-sm text-[#1e2b3a] bg-[#f7f9fc] border border-[#e8edf2] focus:outline-none focus:border-[#e05000] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1e2b3a] mb-1.5">
                      Industry
                    </label>
                    <select
                      className="w-full rounded-lg px-4 py-3 text-sm text-[#1e2b3a] bg-[#f7f9fc] border border-[#e8edf2] focus:outline-none focus:border-[#e05000] transition-colors"
                    >
                      <option value="">Select your industry...</option>
                      <option>Oil &amp; Gas</option>
                      <option>Petrochemical</option>
                      <option>Water Treatment</option>
                      <option>Chemical Processing</option>
                      <option>Pulp &amp; Paper</option>
                      <option>Utilities</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1e2b3a] mb-1.5">
                      Subject <span className="text-[#e05000]">*</span>
                    </label>
                    <select
                      required
                      className="w-full rounded-lg px-4 py-3 text-sm text-[#1e2b3a] bg-[#f7f9fc] border border-[#e8edf2] focus:outline-none focus:border-[#e05000] transition-colors"
                    >
                      <option value="">Select a subject...</option>
                      <option>Sales Inquiry</option>
                      <option>Technical Support</option>
                      <option>Product Information</option>
                      <option>Quote Request</option>
                      <option>Partnership / Distribution</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1e2b3a] mb-1.5">
                      Message <span className="text-[#e05000]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your project, application, or question..."
                      className="w-full rounded-lg px-4 py-3 text-sm text-[#1e2b3a] bg-[#f7f9fc] border border-[#e8edf2] focus:outline-none focus:border-[#e05000] transition-colors resize-vertical"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-full justify-center text-base"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* ── Sidebar (col-span-2) ── */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* HQ address card */}
              <div className="bg-white border border-[#e8edf2] rounded-xl p-6">
                <h3 className="font-black text-[#0f2a4a] text-base mb-5">Global Headquarters</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#e05000] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[#566677] font-semibold uppercase tracking-wide mb-1">Address</p>
                      <p className="text-sm font-semibold text-[#0f2a4a] leading-snug">
                        11401 Beach Street<br />
                        Santa Fe Springs, CA 90670<br />
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#e05000] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[#566677] font-semibold uppercase tracking-wide mb-1">Phone</p>
                      <a
                        href="tel:+15629490123"
                        className="text-sm font-semibold text-[#0f2a4a] hover:text-[#e05000] transition-colors"
                      >
                        +1 (562) 949-0123
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#e05000] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[#566677] font-semibold uppercase tracking-wide mb-1">Email</p>
                      <a
                        href="mailto:info@cosasco.com"
                        className="text-sm font-semibold text-[#0f2a4a] hover:text-[#e05000] transition-colors"
                      >
                        info@cosasco.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#e05000] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[#566677] font-semibold uppercase tracking-wide mb-1">Business Hours</p>
                      <p className="text-sm font-semibold text-[#0f2a4a]">
                        Mon–Fri: 7:00am – 5:00pm PT<br />
                        <span className="text-[#566677] font-normal text-xs">Emergency support available 24/7</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-[#0f2a4a] rounded-xl overflow-hidden flex flex-col items-center justify-center gap-3 h-44">
                <MapPin className="w-7 h-7 text-[#e05000]" />
                <p className="text-white/60 text-sm">Santa Fe Springs, CA 90670</p>
                <a
                  href="https://maps.google.com/?q=11401+Beach+Street+Santa+Fe+Springs+CA+90670"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e05000] text-xs font-semibold underline underline-offset-2 hover:no-underline"
                >
                  Open in Google Maps
                </a>
              </div>

              {/* Response time notice */}
              <div className="bg-[#f7f9fc] border border-[#e8edf2] rounded-xl p-4 flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#e05000] mt-0.5 flex-shrink-0" />
                <p className="text-[#566677] text-xs leading-relaxed">
                  <span className="font-semibold text-[#1e2b3a]">Typical response within 1 business day.</span>{' '}
                  For urgent technical issues, call our support line directly or visit the
                  Support page to submit a prioritized request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Regional Offices ── */}
      <section className="bg-[#f7f9fc] py-16 md:py-20 border-t border-[#e8edf2]">
        <div className="cx">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#e05000] mb-3">Global Reach</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0f2a4a] mb-4">
              Regional Offices
            </h2>
            <p className="text-[#566677] text-base max-w-lg mx-auto leading-relaxed">
              With offices across three continents, Cosasco delivers local technical support
              to customers wherever they operate across our 110-country network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regionalOffices.map((region) => (
              <div key={region.region} className="bg-white border border-[#e8edf2] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 bg-[#0f2a4a] rounded-lg flex items-center justify-center">
                    <Globe className="w-4 h-4 text-[#e05000]" />
                  </div>
                  <h3 className="font-black text-[#0f2a4a] text-base">{region.region}</h3>
                </div>
                <div className="space-y-5">
                  {region.offices.map((office) => (
                    <div key={office.name}>
                      <p className="font-semibold text-[#0f2a4a] text-sm mb-1">{office.name}</p>
                      <div className="flex items-center gap-1.5 mb-1">
                        <MapPin className="w-3 h-3 text-[#566677]" />
                        <span className="text-[#566677] text-xs">{office.city}</span>
                      </div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <Phone className="w-3 h-3 text-[#566677]" />
                        <a
                          href={`tel:${office.phone.replace(/[\s()+-]/g, '')}`}
                          className="text-[#566677] text-xs hover:text-[#e05000] transition-colors"
                        >
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Mail className="w-3 h-3 text-[#566677]" />
                        <a
                          href={`mailto:${office.email}`}
                          className="text-[#566677] text-xs hover:text-[#e05000] transition-colors"
                        >
                          {office.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
