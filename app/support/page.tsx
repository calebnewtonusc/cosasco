'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { AlertTriangle, MessageSquare, Phone, FileText, ArrowRight, Download, MessageCircle, Upload, X, CheckCircle } from 'lucide-react'
import SupportFAQ from '@/components/SupportFAQ'

const downloads = [
  {
    name: 'Cosasco Data Online (CDO)',
    version: 'v3.2',
    platform: 'Windows 10/11',
    size: '245 MB',
    buttonLabel: 'Download',
    buttonClass: 'bg-[#0f2a4a] text-white hover:bg-[#1a3d66]',
  },
  {
    name: 'CorrView Desktop',
    version: '',
    platform: 'Windows 10/11',
    size: '128 MB',
    buttonLabel: 'Download',
    buttonClass: 'bg-[#0f2a4a] text-white hover:bg-[#1a3d66]',
  },
  {
    name: 'CDO Mobile',
    version: '',
    platform: 'iOS: App Store',
    size: null,
    buttonLabel: 'Get on App Store',
    buttonClass: 'bg-black text-white hover:bg-[#222]',
  },
  {
    name: 'CDO Mobile',
    version: '',
    platform: 'Android: Play Store',
    size: null,
    buttonLabel: 'Get on Play Store',
    buttonClass: 'bg-[#34A853] text-white hover:bg-[#2d9148]',
  },
]

const pathwayCards = [
  {
    icon: <MessageSquare className="w-6 h-6 text-[#f4a65d]" />,
    title: 'Browse FAQ',
    description: 'Find answers to the most common questions about Cosasco products, installation procedures, and technical specifications.',
    link: 'View all FAQs',
  },
  {
    icon: <Phone className="w-6 h-6 text-[#f4a65d]" />,
    title: 'Contact an Engineer',
    description: 'Speak directly with a Cosasco field engineer for application-specific guidance, sizing support, or complex troubleshooting.',
    link: 'Talk to an engineer',
  },
  {
    icon: <FileText className="w-6 h-6 text-[#f4a65d]" />,
    title: 'Submit a Request',
    description: 'Log a formal technical support request and receive a tracked response from our engineering team within agreed SLA windows.',
    link: 'Submit request',
  },
]

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function SupportPage() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    appType: '',
    issue: '',
    priority: 'normal',
  })
  const [files, setFiles] = useState<File[]>([])
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [dragging, setDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [k]: e.target.value }))

  function addFiles(incoming: FileList | null) {
    if (!incoming) return
    setFiles(prev => {
      const existing = new Set(prev.map(f => f.name))
      const next = Array.from(incoming).filter(f => !existing.has(f.name))
      return [...prev, ...next]
    })
  }

  function removeFile(name: string) {
    setFiles(prev => prev.filter(f => f.name !== name))
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragging(false)
    addFiles(e.dataTransfer.files)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.issue.trim()) return
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          category: form.appType,
          serial: form.product,
          subject: form.product ? `Issue with ${form.product}` : 'Technical Support Request',
          description: form.issue,
          priority: form.priority,
        }),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again or call us at +1 (562) 949-0123.')
    }
  }

  function openChat() {
    window.dispatchEvent(new Event('cosasco:open-chat'))
  }

  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-[#0f2a4a] pt-[72px] pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#94aabb] text-sm font-semibold uppercase tracking-widest mb-4">Support Center</p>
          <h1 className="text-white font-black text-5xl md:text-6xl leading-tight mb-5">
            Customer Support
          </h1>
          <p className="text-[#94aabb] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Expert technical assistance for corrosion monitoring and chemical injection systems, from initial setup to long-term maintenance.
          </p>
          <div className="inline-flex items-center gap-3 bg-[#d4892a] rounded-lg px-6 py-3">
            <AlertTriangle className="text-white w-5 h-5 flex-shrink-0" />
            <span className="text-white font-semibold text-sm">
              Critical System Failure? Call <strong>+1 (562) 949-0123</strong> for 24/7 emergency support
            </span>
          </div>
        </div>
      </section>

      {/* PATHWAY CARDS */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pathwayCards.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-[#e8edf2] rounded-xl p-8 hover:shadow-md transition-all"
              >
                <div className="bg-[#f0f4f8] rounded-lg w-12 h-12 flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="font-black text-[#0f2a4a] text-xl mt-5">{card.title}</h3>
                <p className="text-[#566677] mt-3 text-sm leading-relaxed">{card.description}</p>
                {card.title === 'Submit a Request' ? (
                  <Link
                    href="/support/rma"
                    className="text-[#f4a65d] font-semibold text-sm mt-5 flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    {card.link}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : card.title === 'Contact an Engineer' ? (
                  <a
                    href="tel:+15629490123"
                    className="text-[#f4a65d] font-semibold text-sm mt-5 flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    {card.link}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => document.getElementById('support-faq')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-[#f4a65d] font-semibold text-sm mt-5 flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    {card.link}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div id="support-faq">
        <SupportFAQ />
      </div>

      {/* SOFTWARE DOWNLOADS */}
      <section className="bg-[#f7f9fc] py-16 border-t border-[#e8edf2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#f4a65d] mb-3">Resources</p>
            <h2 className="text-[#0f2a4a] font-black text-3xl md:text-4xl mb-3">Software Downloads</h2>
            <p className="text-[#566677] text-base max-w-xl mx-auto">
              Download the latest Cosasco software for Windows or get our mobile apps on iOS and Android.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {downloads.map((item) => (
              <div
                key={`${item.name}-${item.platform}`}
                className="bg-white border border-[#e8edf2] rounded-xl p-6 flex flex-col gap-4 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-[#f0f4f8] rounded-lg flex items-center justify-center">
                  <Download className="w-6 h-6 text-[#f4a65d]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-[#0f2a4a] text-sm leading-snug">{item.name}</h3>
                  {item.version && (
                    <span className="inline-block text-xs text-[#f4a65d] font-semibold mt-0.5">{item.version}</span>
                  )}
                  <p className="text-[#566677] text-xs mt-1">{item.platform}</p>
                  {item.size && (
                    <p className="text-[#8898aa] text-xs mt-0.5">{item.size}</p>
                  )}
                </div>
                {item.platform.includes('App Store') ? (
                  <a
                    href="https://apps.apple.com/search?term=cdo+cosasco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center rounded-lg px-4 py-2.5 text-xs font-semibold transition-colors ${item.buttonClass}`}
                  >
                    {item.buttonLabel}
                  </a>
                ) : item.platform.includes('Play Store') ? (
                  <a
                    href="https://play.google.com/store/search?q=cdo+cosasco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center rounded-lg px-4 py-2.5 text-xs font-semibold transition-colors ${item.buttonClass}`}
                  >
                    {item.buttonLabel}
                  </a>
                ) : (
                  <Link
                    href="/software"
                    className={`block w-full text-center rounded-lg px-4 py-2.5 text-xs font-semibold transition-colors ${item.buttonClass}`}
                  >
                    {item.buttonLabel}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-[#0f2a4a] font-black text-4xl mb-2">Technical Support Request</h2>
              <p className="text-[#566677] mb-8">
                Submit a detailed request and our engineering team will follow up within the timeframes listed.
              </p>

              {status === 'success' ? (
                <div className="rounded-2xl border border-green-100 bg-green-50 py-14 px-8 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <p className="font-black text-2xl text-[#0f2a4a]">Request Submitted</p>
                  <p className="text-[#566677] text-sm max-w-xs mx-auto leading-relaxed">
                    Your support ticket has been logged. Our engineering team will respond within the SLA window for your selected priority.
                  </p>
                  <button
                    onClick={() => { setStatus('idle'); setForm({ name: '', company: '', email: '', phone: '', product: '', appType: '', issue: '', priority: 'normal' }); setFiles([]) }}
                    className="mt-3 text-sm font-semibold text-[#f4a65d] hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="support-name" className="block text-[#0f2a4a] font-medium text-sm mb-1">
                        Full Name <span className="text-[#f4a65d]">*</span>
                      </label>
                      <input
                        id="support-name"
                        type="text"
                        autoComplete="name"
                        required
                        value={form.name}
                        onChange={set('name')}
                        placeholder="John Smith"
                        className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:border-[#f4a65d] focus:ring-1 focus:ring-[#f4a65d]/30"
                      />
                    </div>
                    <div>
                      <label htmlFor="support-company" className="block text-[#0f2a4a] font-medium text-sm mb-1">Company</label>
                      <input
                        id="support-company"
                        type="text"
                        autoComplete="organization"
                        value={form.company}
                        onChange={set('company')}
                        placeholder="Acme Corp"
                        className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:border-[#f4a65d] focus:ring-1 focus:ring-[#f4a65d]/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="support-email" className="block text-[#0f2a4a] font-medium text-sm mb-1">
                        Email <span className="text-[#f4a65d]">*</span>
                      </label>
                      <input
                        id="support-email"
                        type="email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={set('email')}
                        placeholder="john@company.com"
                        className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:border-[#f4a65d] focus:ring-1 focus:ring-[#f4a65d]/30"
                      />
                    </div>
                    <div>
                      <label htmlFor="support-phone" className="block text-[#0f2a4a] font-medium text-sm mb-1">Phone</label>
                      <input
                        id="support-phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={set('phone')}
                        placeholder="+1 (555) 000-0000"
                        className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:border-[#f4a65d] focus:ring-1 focus:ring-[#f4a65d]/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="support-product" className="block text-[#0f2a4a] font-medium text-sm mb-1">Product / System</label>
                    <input
                      id="support-product"
                      type="text"
                      value={form.product}
                      onChange={set('product')}
                      placeholder="e.g. ER Probe Model 7012, Microcor® Wireless"
                      className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:border-[#f4a65d] focus:ring-1 focus:ring-[#f4a65d]/30"
                    />
                  </div>

                  <div>
                    <label htmlFor="support-app-type" className="block text-[#0f2a4a] font-medium text-sm mb-1">Application Type</label>
                    <select
                      id="support-app-type"
                      value={form.appType}
                      onChange={set('appType')}
                      className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] focus:outline-none focus:border-[#f4a65d] focus:ring-1 focus:ring-[#f4a65d]/30 bg-white"
                    >
                      <option value="">Select application...</option>
                      <option>Oil &amp; Gas: Upstream</option>
                      <option>Oil &amp; Gas: Midstream Pipeline</option>
                      <option>Oil &amp; Gas: Downstream / Refining</option>
                      <option>Petrochemical</option>
                      <option>Water Treatment</option>
                      <option>Utilities</option>
                      <option>Chemical Processing</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="support-issue" className="block text-[#0f2a4a] font-medium text-sm mb-1">
                      Issue Description <span className="text-[#f4a65d]">*</span>
                    </label>
                    <textarea
                      id="support-issue"
                      rows={5}
                      required
                      value={form.issue}
                      onChange={set('issue')}
                      placeholder="Describe the issue, symptoms, and any troubleshooting steps already taken..."
                      className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:border-[#f4a65d] focus:ring-1 focus:ring-[#f4a65d]/30 resize-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="support-priority" className="block text-[#0f2a4a] font-medium text-sm mb-1">Priority</label>
                    <select
                      id="support-priority"
                      value={form.priority}
                      onChange={set('priority')}
                      className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] focus:outline-none focus:border-[#f4a65d] focus:ring-1 focus:ring-[#f4a65d]/30 bg-white"
                    >
                      <option value="critical">Critical: System Down</option>
                      <option value="high">High: Degraded Performance</option>
                      <option value="normal">Normal: Planning / Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#0f2a4a] font-medium text-sm mb-1">Attachments</label>
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => fileInputRef.current?.click()}
                      onKeyDown={(e) => e.key === 'Enter' && fileInputRef.current?.click()}
                      onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
                      onDragLeave={() => setDragging(false)}
                      onDrop={handleDrop}
                      className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${dragging ? 'border-[#f4a65d] bg-[#fef3e2]' : 'border-[#e8edf2] hover:border-[#f4a65d]'}`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        id="support-attachments"
                        className="sr-only"
                        multiple
                        accept=".pdf,.png,.jpg,.jpeg"
                        onChange={(e) => addFiles(e.target.files)}
                      />
                      <Upload className="w-8 h-8 text-[#8898aa] mx-auto mb-3" />
                      <p className="text-[#566677] text-sm font-medium">Drag and drop files here</p>
                      <p className="text-[#8898aa] text-xs mt-1">or <span className="text-[#f4a65d] font-semibold">browse to upload</span></p>
                      <p className="text-[#8898aa] text-xs mt-2">PDF, PNG, JPG up to 25MB each</p>
                    </div>
                    {files.length > 0 && (
                      <ul className="mt-3 space-y-1.5">
                        {files.map((f) => (
                          <li key={f.name} className="flex items-center justify-between bg-[#f7f9fc] border border-[#e8edf2] rounded-lg px-3 py-2 text-xs">
                            <span className="text-[#334150] font-medium truncate max-w-[85%]">{f.name}</span>
                            <button
                              type="button"
                              onClick={() => removeFile(f.name)}
                              className="text-[#8898aa] hover:text-[#0f2a4a] transition-colors ml-2 shrink-0"
                              aria-label={`Remove ${f.name}`}
                            >
                              <X size={13} />
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {errorMsg && (
                    <p role="alert" className="text-red-500 text-sm">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-[#f4a65d] text-white rounded-lg py-3 font-semibold hover:bg-[#d4892a] transition-colors disabled:opacity-60"
                  >
                    {status === 'loading' ? 'Submitting…' : 'Submit Support Request'}
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#f7f9fc] border border-[#e8edf2] rounded-xl p-6">
                <h3 className="text-[#0f2a4a] font-black text-lg mb-5">Expected Response Times</h3>
                <div className="space-y-4">
                  {[
                    { level: 'Critical', time: '2 hours', color: 'bg-red-100 text-red-700' },
                    { level: 'High', time: '24 hours', color: 'bg-amber-100 text-amber-700' },
                    { level: 'Normal', time: '3 business days', color: 'bg-green-100 text-green-700' },
                  ].map((item) => (
                    <div key={item.level} className="flex items-center justify-between py-3 border-b border-[#e8edf2] last:border-0">
                      <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded ${item.color}`}>
                        {item.level}
                      </span>
                      <span className="text-[#0f2a4a] font-semibold text-sm">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#f7f9fc] border border-[#e8edf2] rounded-xl p-6">
                <h3 className="text-[#0f2a4a] font-black text-lg mb-4">Direct Contact</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-[#566677] text-xs font-semibold uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:+15629490123" className="text-[#0f2a4a] font-semibold text-sm hover:text-[#f4a65d] transition-colors">
                      +1 (562) 949-0123
                    </a>
                  </div>
                  <div>
                    <p className="text-[#566677] text-xs font-semibold uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:support@cosasco.com" className="text-[#0f2a4a] font-semibold text-sm hover:text-[#f4a65d] transition-colors">
                      support@cosasco.com
                    </a>
                  </div>
                  <div>
                    <p className="text-[#566677] text-xs font-semibold uppercase tracking-wider mb-1">Hours</p>
                    <p className="text-[#566677] text-sm">Mon–Fri 7:00 AM – 5:00 PM PT</p>
                    <p className="text-[#566677] text-sm">24/7 Emergency Line Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAT CTA STRIP */}
      <section className="bg-[#0f2a4a] py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6 text-[#f4a65d]" />
            </div>
            <p className="text-white font-semibold text-lg">
              Need immediate help? Chat with our AI assistant.
            </p>
          </div>
          <button
            type="button"
            onClick={openChat}
            className="flex-shrink-0 bg-[#f4a65d] hover:bg-[#d4892a] text-white font-bold rounded-lg px-7 py-3 text-sm transition-colors whitespace-nowrap"
          >
            Start Chat →
          </button>
        </div>
      </section>
    </div>
  )
}
