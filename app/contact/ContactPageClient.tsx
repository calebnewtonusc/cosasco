'use client'

import { useReducer } from 'react'
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
  MessageCircle,
  Printer,
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
        fallback: false,
      },
      {
        name: 'Gulf Coast Office',
        city: 'Houston, TX',
        phone: '+1 (562) 949-0123',
        email: 'info@cosasco.com',
        fallback: true,
      },
    ],
  },
  {
    region: 'Europe & Middle East',
    offices: [
      {
        name: 'European Operations',
        city: 'Aberdeen, Scotland',
        phone: '+1 (562) 949-0123',
        email: 'info@cosasco.com',
        fallback: true,
      },
      {
        name: 'Middle East Office',
        city: 'Dubai, UAE',
        phone: '+1 (562) 949-0123',
        email: 'info@cosasco.com',
        fallback: true,
      },
    ],
  },
  {
    region: 'Asia Pacific',
    offices: [
      {
        name: 'APAC Regional',
        city: 'Kuala Lumpur, Malaysia',
        phone: '+1 (562) 949-0123',
        email: 'info@cosasco.com',
        fallback: true,
      },
      {
        name: 'Australia Office',
        city: 'Perth, WA',
        phone: '+1 (562) 949-0123',
        email: 'info@cosasco.com',
        fallback: true,
      },
    ],
  },
]

const departmentContacts = [
  { label: 'General Inquiries', email: 'info@cosasco.com' },
  { label: 'Technical Support', email: 'support@cosasco.com' },
  { label: 'Sales & Quotes', email: 'sales@cosasco.com' },
  { label: 'RMA Requests', email: 'RMA@cosasco.com' },
  { label: 'Distributor Payments', email: 'ccpayments@cosasco.com' },
]

type FormState = {
  name: string
  company: string
  email: string
  phone: string
  industry: string
  subject: string
  message: string
  submitted: boolean
  success: boolean
  loading: boolean
  apiError: string | null
  errors: Record<string, string>
  touched: boolean
}

const initialState: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  industry: '',
  subject: '',
  message: '',
  submitted: false,
  success: false,
  loading: false,
  apiError: null,
  errors: {},
  touched: false,
}

type FormAction =
  | { type: 'SET_FIELD'; field: keyof Pick<FormState, 'name' | 'company' | 'email' | 'phone' | 'industry' | 'subject' | 'message'>; value: string }
  | { type: 'SET_ERRORS'; errors: Record<string, string> }
  | { type: 'SET_LOADING' }
  | { type: 'SET_SUCCESS' }
  | { type: 'SET_API_ERROR'; message: string }
  | { type: 'RESET' }

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value }
    case 'SET_ERRORS':
      return { ...state, errors: action.errors, touched: true }
    case 'SET_LOADING':
      return { ...state, loading: true, apiError: null }
    case 'SET_SUCCESS':
      return { ...state, submitted: true, loading: false }
    case 'SET_API_ERROR':
      return { ...state, loading: false, apiError: action.message }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactPageClient() {
  const [state, dispatch] = useReducer(formReducer, initialState)
  const { name, company, email, phone, industry, subject, message, submitted, loading, apiError, errors, touched } = state

  function validate(): Record<string, string> {
    const errs: Record<string, string> = {}
    if (!name.trim()) errs.name = 'Full name is required.'
    if (!email.trim()) {
      errs.email = 'Email address is required.'
    } else if (!emailRegex.test(email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!subject) errs.subject = 'Please select a subject.'
    if (!message.trim()) errs.message = 'Message is required.'
    return errs
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    dispatch({ type: 'SET_ERRORS', errors: errs })
    if (Object.keys(errs).length > 0) return

    dispatch({ type: 'SET_LOADING' })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName: name, company, email, phone, industry, subject, message }),
      })
      if (!res.ok) throw new Error('Server error')
      dispatch({ type: 'SET_SUCCESS' })
    } catch {
      dispatch({ type: 'SET_API_ERROR', message: 'Failed to send. Please try again or email info@cosasco.com directly.' })
    }
  }

  function revalidate() {
    if (touched) dispatch({ type: 'SET_ERRORS', errors: validate() })
  }

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-[#0f2a4a] text-white overflow-hidden py-16 md:py-20">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#f4a65d]" aria-hidden="true" />
        <div className="cx relative">
          <nav className="flex items-center gap-2 text-sm text-[#8ab4d4] mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Contact</span>
          </nav>
          <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-3">Get in Touch</p>
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
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-2">Send a Message</p>
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
                    onClick={() => dispatch({ type: 'RESET' })}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-semibold text-[#1e2b3a] mb-1.5">
                        Full Name <span className="text-[#f4a65d]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => { dispatch({ type: 'SET_FIELD', field: 'name', value: e.target.value }); revalidate() }}
                        placeholder="Jane Smith"
                        className={`w-full rounded-lg px-4 py-3 text-sm text-[#1e2b3a] bg-[#f7f9fc] border focus:outline-none focus:border-[#f4a65d] transition-colors ${errors.name ? 'border-red-400' : 'border-[#e8edf2]'}`}
                      />
                      {errors.name && <p role="alert" className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-company" className="block text-sm font-semibold text-[#1e2b3a] mb-1.5">
                        Company
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        autoComplete="organization"
                        value={company}
                        onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'company', value: e.target.value })}
                        placeholder="Acme Refining Ltd."
                        className="w-full rounded-lg px-4 py-3 text-sm text-[#1e2b3a] bg-[#f7f9fc] border border-[#e8edf2] focus:outline-none focus:border-[#f4a65d] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-semibold text-[#1e2b3a] mb-1.5">
                        Email Address <span className="text-[#f4a65d]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => { dispatch({ type: 'SET_FIELD', field: 'email', value: e.target.value }); revalidate() }}
                        placeholder="jsmith@company.com"
                        className={`w-full rounded-lg px-4 py-3 text-sm text-[#1e2b3a] bg-[#f7f9fc] border focus:outline-none focus:border-[#f4a65d] transition-colors ${errors.email ? 'border-red-400' : 'border-[#e8edf2]'}`}
                      />
                      {errors.email && <p role="alert" className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-semibold text-[#1e2b3a] mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        autoComplete="tel"
                        value={phone}
                        onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'phone', value: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full rounded-lg px-4 py-3 text-sm text-[#1e2b3a] bg-[#f7f9fc] border border-[#e8edf2] focus:outline-none focus:border-[#f4a65d] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-industry" className="block text-sm font-semibold text-[#1e2b3a] mb-1.5">
                      Industry
                    </label>
                    <select
                      id="contact-industry"
                      value={industry}
                      onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'industry', value: e.target.value })}
                      className="w-full rounded-lg px-4 py-3 text-sm text-[#1e2b3a] bg-[#f7f9fc] border border-[#e8edf2] focus:outline-none focus:border-[#f4a65d] transition-colors"
                    >
                      <option value="">Select your industry...</option>
                      <option>Oil &amp; Gas</option>
                      <option>Petrochemical</option>
                      <option>Water Treatment</option>
                      <option>Chemical Processing</option>
                      <option>Pulp &amp; Paper</option>
                      <option>Utilities</option>
                      <option>Mining &amp; Minerals</option>
                      <option>Gas Transmission</option>
                      <option>Specialty Applications</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-semibold text-[#1e2b3a] mb-1.5">
                      Subject <span className="text-[#f4a65d]">*</span>
                    </label>
                    <select
                      id="contact-subject"
                      value={subject}
                      onChange={(e) => { dispatch({ type: 'SET_FIELD', field: 'subject', value: e.target.value }); revalidate() }}
                      className={`w-full rounded-lg px-4 py-3 text-sm text-[#1e2b3a] bg-[#f7f9fc] border focus:outline-none focus:border-[#f4a65d] transition-colors ${errors.subject ? 'border-red-400' : 'border-[#e8edf2]'}`}
                    >
                      <option value="">Select a subject...</option>
                      <option>Sales Inquiry</option>
                      <option>Technical Support</option>
                      <option>Product Information</option>
                      <option>Quote Request</option>
                      <option>Partnership / Distribution</option>
                      <option>Other</option>
                    </select>
                    {errors.subject && <p role="alert" className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-[#1e2b3a] mb-1.5">
                      Message <span className="text-[#f4a65d]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      value={message}
                      onChange={(e) => { dispatch({ type: 'SET_FIELD', field: 'message', value: e.target.value }); revalidate() }}
                      rows={5}
                      placeholder="Tell us about your project, application, or question..."
                      className={`w-full rounded-lg px-4 py-3 text-sm text-[#1e2b3a] bg-[#f7f9fc] border focus:outline-none focus:border-[#f4a65d] transition-colors resize-vertical ${errors.message ? 'border-red-400' : 'border-[#e8edf2]'}`}
                    />
                    {errors.message && <p role="alert" className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {apiError && (
                    <p role="alert" className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">{apiError}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary w-full justify-center text-base disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending…' : 'Send Message'}
                    {!loading && <ArrowRight className="w-4 h-4" />}
                  </button>
                </form>
              )}
            </div>

            {/* ── Sidebar (col-span-2) ── */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* HQ address card */}
              <div className="bg-white border border-[#e8edf2] rounded-xl p-6">
                <h3 className="font-black text-[#0f2a4a] text-base mb-1">Global Headquarters</h3>
                <p className="text-xs text-[#566677] mb-5">Rohrback Cosasco Systems, Inc.</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#f4a65d] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[#566677] font-semibold uppercase tracking-wide mb-1">Address</p>
                      <p className="text-sm font-semibold text-[#0f2a4a] leading-snug">
                        11841 Smith Avenue<br />
                        Santa Fe Springs, CA 90670<br />
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#f4a65d] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[#566677] font-semibold uppercase tracking-wide mb-1">Phone</p>
                      <a
                        href="tel:+15629490123"
                        className="text-sm font-semibold text-[#0f2a4a] hover:text-[#f4a65d] transition-colors"
                      >
                        +1 (562) 949-0123
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#f4a65d] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[#566677] font-semibold uppercase tracking-wide mb-1">Toll Free</p>
                      <a
                        href="tel:+18006356898"
                        className="text-sm font-semibold text-[#0f2a4a] hover:text-[#f4a65d] transition-colors"
                      >
                        +1-800-635-6898
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Printer className="w-4 h-4 text-[#f4a65d] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[#566677] font-semibold uppercase tracking-wide mb-1">Fax</p>
                      <span className="text-sm font-semibold text-[#0f2a4a]">+1-562-949-3065</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#f4a65d] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[#566677] font-semibold uppercase tracking-wide mb-1">Email</p>
                      <a
                        href="mailto:info@cosasco.com"
                        className="text-sm font-semibold text-[#0f2a4a] hover:text-[#f4a65d] transition-colors"
                      >
                        info@cosasco.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#f4a65d] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[#566677] font-semibold uppercase tracking-wide mb-1">Business Hours</p>
                      <p className="text-sm font-semibold text-[#0f2a4a]">
                        Mon–Fri: 7:00am – 5:00pm PT<br />
                        <span className="text-[#566677] font-normal text-xs">Emergency support available 24/7</span>
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp CTA */}
                  <a
                    href="https://wa.me/15629490123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white rounded-lg px-4 py-2.5 text-sm font-semibold flex items-center gap-2 mt-3 hover:bg-[#1ebe57] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 flex-shrink-0" />
                    Message on WhatsApp
                  </a>
                </div>
              </div>

              {/* Contact by Department card */}
              <div className="bg-white border border-[#e8edf2] rounded-xl p-6">
                <h3 className="font-black text-[#0f2a4a] text-base mb-5">Contact by Department</h3>
                <div className="space-y-3">
                  {departmentContacts.map((dept) => (
                    <div key={dept.email} className="flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold text-[#566677] uppercase tracking-wide whitespace-nowrap">{dept.label}</span>
                      <a
                        href={`mailto:${dept.email}`}
                        className="text-xs font-semibold text-[#0f2a4a] hover:text-[#f4a65d] transition-colors truncate"
                      >
                        {dept.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Styled mock map */}
              <div className="bg-[#1a2535] rounded-xl h-56 overflow-hidden relative">
                {/* SVG grid lines mock map */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 224"
                  preserveAspectRatio="xMidYMid slice"
                  aria-hidden="true"
                >
                  {/* Grid lines */}
                  {[0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400].map((x) => (
                    <line key={`v${x}`} x1={x} y1="0" x2={x} y2="224" stroke="#ffffff08" strokeWidth="1" />
                  ))}
                  {[0, 32, 64, 96, 128, 160, 192, 224].map((y) => (
                    <line key={`h${y}`} x1="0" y1={y} x2="400" y2={y} stroke="#ffffff08" strokeWidth="1" />
                  ))}
                  {/* Subtle diagonal accent lines */}
                  <line x1="0" y1="224" x2="400" y2="0" stroke="#ffffff05" strokeWidth="1" />
                  <line x1="0" y1="112" x2="400" y2="112" stroke="#f4a65d22" strokeWidth="1" />
                  <line x1="200" y1="0" x2="200" y2="224" stroke="#f4a65d22" strokeWidth="1" />
                  {/* Center pin circle glow */}
                  <circle cx="200" cy="100" r="32" fill="#f4a65d08" />
                  <circle cx="200" cy="100" r="16" fill="#f4a65d14" />
                </svg>

                {/* Map pin marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+8px)] flex flex-col items-center">
                  <div className="w-5 h-5 bg-[#f4a65d] rounded-full border-2 border-white shadow-lg" />
                  <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#f4a65d] -mt-px" />
                </div>

                {/* Location label */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-3 mt-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-md px-3 py-1 border border-white/10">
                    <p className="text-white text-xs font-semibold whitespace-nowrap">Santa Fe Springs, CA</p>
                  </div>
                </div>

                {/* Open in Google Maps link */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#111c2b]/80 px-4 py-2.5 flex items-center justify-between">
                  <p className="text-[#8ab4d4] text-xs">11841 Smith Avenue, CA 90670</p>
                  <a
                    href="https://maps.google.com/?q=11841+Smith+Avenue,+Santa+Fe+Springs,+CA+90670"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f4a65d] text-xs font-semibold hover:underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Response time notice */}
              <div className="bg-[#f7f9fc] border border-[#e8edf2] rounded-xl p-4 flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#f4a65d] mt-0.5 flex-shrink-0" />
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
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-3">Global Reach</p>
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
                    <Globe className="w-4 h-4 text-[#f4a65d]" />
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
                      <div className="flex items-start gap-1.5 mb-1">
                        <Phone className="w-3 h-3 text-[#566677] mt-0.5 flex-shrink-0" />
                        {office.fallback ? (
                          <span className="text-[#566677] text-xs leading-snug">
                            Contact via HQ:{' '}
                            <a
                              href="tel:+15629490123"
                              className="hover:text-[#f4a65d] transition-colors"
                            >
                              {office.phone}
                            </a>
                          </span>
                        ) : (
                          <a
                            href={`tel:${office.phone.replace(/[\s()+-]/g, '')}`}
                            className="text-[#566677] text-xs hover:text-[#f4a65d] transition-colors"
                          >
                            {office.phone}
                          </a>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Mail className="w-3 h-3 text-[#566677]" />
                        <a
                          href={`mailto:${office.email}`}
                          className="text-[#566677] text-xs hover:text-[#f4a65d] transition-colors"
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
