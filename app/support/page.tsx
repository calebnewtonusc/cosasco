'use client'

import { useState } from 'react'
import { AlertTriangle, MessageSquare, Phone, FileText, ArrowRight, ChevronDown, Upload, Search, X, Download, MessageCircle } from 'lucide-react'

const faqData: Record<string, { question: string; answer: string }[]> = {
  General: [
    {
      question: 'What industries does Cosasco serve?',
      answer:
        'Cosasco serves a broad range of industries including oil and gas, petrochemical, refining, chemical processing, water treatment, utilities, and pipeline operations. Our corrosion monitoring and chemical injection solutions are engineered to meet the demanding requirements of each sector.',
    },
    {
      question: 'What is the typical lead time for standard products?',
      answer:
        'Standard catalog products typically ship within 2–4 weeks from receipt of order. Custom-engineered or specialty-configured systems may require 6–12 weeks depending on complexity and material requirements. Contact our sales team for specific lead time estimates.',
    },
    {
      question: 'Are Cosasco products available globally?',
      answer:
        'Yes. Cosasco distributes products and provides technical support worldwide through a network of authorized distributors and direct regional offices. We ship to over 50 countries and maintain compliance with international trade and export regulations.',
    },
    {
      question: 'Does Cosasco offer product training?',
      answer:
        'Cosasco provides comprehensive training programs including on-site operator training, factory training at our California facility, and web-based seminars. Training covers installation, operation, data interpretation, and maintenance for all major product lines.',
    },
  ],
  Technical: [
    {
      question: 'What is the difference between ER and LPR probes?',
      answer:
        'Electrical Resistance (ER) probes measure cumulative metal loss over time by tracking changes in the electrical resistance of a sensor element — they work in any fluid, conductive or not. Linear Polarization Resistance (LPR) probes provide real-time instantaneous corrosion rate measurements but require an electrically conductive (aqueous) environment. ER is preferred for hydrocarbon and gas service; LPR is ideal for water-based systems.',
    },
    {
      question: 'Can existing access fittings be retrofitted with new probe elements?',
      answer:
        'In most cases, yes. Cosasco access fittings are designed with a standardized thread interface that accommodates current and legacy probe elements. Our engineering team can assess compatibility based on the fitting model, pressure rating, and process conditions. Retrofit kits are available for many older installations.',
    },
    {
      question: 'What certifications do Cosasco products carry?',
      answer:
        'Cosasco products are certified to multiple industry standards including ATEX, IECEx, FM, and CSA for hazardous area use. Pressure-containing components are designed and tested in accordance with ASME, ANSI, and NACE standards. Certificates of conformance and material test reports are available upon request.',
    },
    {
      question: 'What are maximum operating temperature and pressure ratings?',
      answer:
        'Ratings vary by product line and material selection. Standard access fittings are rated to 6,000 PSI at 400°F (204°C). High-pressure/high-temperature (HPHT) configurations are available up to 15,000 PSI and 650°F (343°C). Always consult the product datasheet and verify with our engineering team for your specific application.',
    },
  ],
  Installation: [
    {
      question: 'Does Cosasco offer field installation services?',
      answer:
        'Yes. Cosasco field service engineers are available for on-site installation, commissioning, and startup support globally. Services include hot-tap installation of access fittings, system integration, and operator handover training. Contact our service team to schedule field support.',
    },
    {
      question: 'What documentation is provided with each product?',
      answer:
        'Every Cosasco shipment includes an installation and operation manual, bill of materials, dimensional drawings, and a certificate of conformance. Products with pressure-containing components also include material test reports and, where applicable, third-party inspection certificates.',
    },
    {
      question: 'How do I safely insert a probe into a live system?',
      answer:
        'Probe insertion into live (pressurized) systems must be performed using an approved retrieval tool and following the Cosasco Safe Working Procedure (SWP) for the applicable pressure class. Always verify isolation valve operation, confirm line pressure against the tool and fitting pressure ratings, and use appropriate PPE. Never exceed the rated working pressure of the retrieval tool or access fitting. Refer to the product installation manual or contact Cosasco for detailed procedures.',
    },
  ],
  'Service & Warranty': [
    {
      question: 'What is the standard product warranty period?',
      answer:
        'Cosasco products carry a standard one-year limited warranty against defects in materials and workmanship from the date of shipment. Extended warranty programs are available for select product lines. Warranty claims must be submitted in writing with supporting documentation.',
    },
    {
      question: 'How do I return a product for repair or calibration?',
      answer:
        'To return a product, contact Cosasco Customer Service to obtain a Return Merchandise Authorization (RMA) number. Ship the product prepaid with the RMA number clearly marked on the outside of the package. Include a description of the issue and your contact information. Evaluation and repair turnaround is typically 2–3 weeks from receipt.',
    },
    {
      question: 'How do I obtain a certificate of conformance?',
      answer:
        'Certificates of conformance (CoC) are issued at the time of shipment and included with the product documentation. If you need a replacement CoC or additional documentation for a prior order, contact our Customer Service team with your original purchase order number and order date.',
    },
  ],
}

const categories = ['General', 'Technical', 'Installation', 'Service & Warranty'] as const

// Flatten all FAQs with their category for searching
const allFaqs = Object.entries(faqData).flatMap(([category, faqs]) =>
  faqs.map((faq) => ({ ...faq, category }))
)

function highlightText(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
  const parts = text.split(regex)
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-[#f4a65d]/30 text-[#0f2a4a] rounded px-0.5">
        {part}
      </mark>
    ) : (
      part
    )
  )
}

export default function SupportPage() {
  const [activeCategory, setActiveCategory] = useState<string>('General')
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const isSearching = searchQuery.trim().length > 0

  const searchResults = isSearching
    ? allFaqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  const currentFaqs = isSearching ? [] : (faqData[activeCategory] ?? [])

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
            Expert technical assistance for corrosion monitoring and chemical injection systems — from initial setup to long-term maintenance.
          </p>
          {/* Emergency Strip */}
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
            {[
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
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border border-[#e8edf2] rounded-xl p-8 hover:shadow-md transition-all"
              >
                <div className="bg-[#f0f4f8] rounded-lg w-12 h-12 flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="font-black text-[#0f2a4a] text-xl mt-5">{card.title}</h3>
                <p className="text-[#566677] mt-3 text-sm leading-relaxed">{card.description}</p>
                <a
                  href="#"
                  className="text-[#f4a65d] font-semibold text-sm mt-5 flex items-center gap-1 hover:gap-2 transition-all"
                >
                  {card.link}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-[#0f2a4a] font-black text-4xl text-center mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-[#566677] text-center mb-8">
            Browse by category to find the answers you need.
          </p>

          {/* Search Input */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8898aa]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search FAQs..."
              className="border border-[#e8edf2] rounded-lg pl-10 pr-10 py-3 text-sm w-full block focus:outline-none focus:border-[#f4a65d] focus:ring-1 focus:ring-[#f4a65d] bg-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8898aa] hover:text-[#566677]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Search results count */}
          {isSearching && (
            <p className="text-center text-sm text-[#566677] mb-6">
              <span className="font-semibold text-[#0f2a4a]">{searchResults.length}</span>{' '}
              result{searchResults.length !== 1 ? 's' : ''} for &ldquo;{searchQuery}&rdquo;
            </p>
          )}

          {/* Category Tabs — hidden during search */}
          {!isSearching && (
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat)
                    setOpenIndex(null)
                  }}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === cat
                      ? 'bg-[#f4a65d] text-white'
                      : 'bg-white border border-[#e8edf2] text-[#566677] hover:border-[#f4a65d] hover:text-[#f4a65d]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Accordion — category view */}
          {!isSearching && (
            <div>
              {currentFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#e8edf2] rounded-xl mb-3 overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 flex justify-between items-center text-left"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="text-[#0f2a4a] font-semibold pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#566677] flex-shrink-0 transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-5 border-t border-[#e8edf2] pt-4">
                      <p className="text-[#566677] text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Search results — always expanded */}
          {isSearching && (
            <div>
              {searchResults.length === 0 ? (
                <div className="text-center py-12 bg-white border border-[#e8edf2] rounded-xl">
                  <p className="text-[#566677] text-sm">No FAQs matched your search. Try different keywords or contact our support team.</p>
                </div>
              ) : (
                searchResults.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#e8edf2] rounded-xl mb-3 overflow-hidden"
                  >
                    <div className="px-6 py-4">
                      <span className="inline-block text-xs font-semibold text-[#f4a65d] uppercase tracking-wider mb-2">
                        {faq.category}
                      </span>
                      <p className="text-[#0f2a4a] font-semibold mb-3">
                        {highlightText(faq.question, searchQuery)}
                      </p>
                      <div className="border-t border-[#e8edf2] pt-3">
                        <p className="text-[#566677] text-sm leading-relaxed">
                          {highlightText(faq.answer, searchQuery)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </section>

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
            {[
              {
                name: 'FieldCom Desktop',
                version: 'v5.0',
                platform: 'Windows 10/11',
                size: '245 MB',
                icon: <Download className="w-6 h-6 text-[#f4a65d]" />,
                buttonLabel: 'Download',
                buttonClass: 'bg-[#0f2a4a] text-white hover:bg-[#1a3d66]',
              },
              {
                name: 'CorrView Analysis',
                version: '',
                platform: 'Windows 10/11',
                size: '128 MB',
                icon: <Download className="w-6 h-6 text-[#f4a65d]" />,
                buttonLabel: 'Download',
                buttonClass: 'bg-[#0f2a4a] text-white hover:bg-[#1a3d66]',
              },
              {
                name: 'FieldCom Mobile',
                version: '',
                platform: 'iOS — App Store',
                size: null,
                icon: (
                  <svg className="w-6 h-6 text-[#f4a65d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 18.5A6.5 6.5 0 1 0 12 5.5a6.5 6.5 0 0 0 0 13Zm0-10v4m0 0 1.5-1.5M12 12.5l-1.5-1.5" />
                  </svg>
                ),
                buttonLabel: 'Get on App Store',
                buttonClass: 'bg-black text-white hover:bg-[#222]',
              },
              {
                name: 'FieldCom Mobile',
                version: '',
                platform: 'Android — Play Store',
                size: null,
                icon: (
                  <svg className="w-6 h-6 text-[#f4a65d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 18.5A6.5 6.5 0 1 0 12 5.5a6.5 6.5 0 0 0 0 13Zm-3.5-6.5 7 0m-3.5-3.5v7" />
                  </svg>
                ),
                buttonLabel: 'Get on Play Store',
                buttonClass: 'bg-[#34A853] text-white hover:bg-[#2d9148]',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#e8edf2] rounded-xl p-6 flex flex-col gap-4 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-[#f0f4f8] rounded-lg flex items-center justify-center">
                  {item.icon}
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
                <button
                  className={`w-full rounded-lg px-4 py-2.5 text-xs font-semibold transition-colors ${item.buttonClass}`}
                >
                  {item.buttonLabel}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Form */}
            <div className="lg:col-span-3">
              <h2 className="text-[#0f2a4a] font-black text-4xl mb-2">Technical Support Request</h2>
              <p className="text-[#566677] mb-8">
                Submit a detailed request and our engineering team will follow up within the timeframes listed.
              </p>

              <form className="space-y-5">
                {/* Name + Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#0f2a4a] font-medium text-sm mb-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:border-[#f4a65d]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#0f2a4a] font-medium text-sm mb-1">Company</label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:border-[#f4a65d]"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#0f2a4a] font-medium text-sm mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:border-[#f4a65d]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#0f2a4a] font-medium text-sm mb-1">Phone</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:border-[#f4a65d]"
                    />
                  </div>
                </div>

                {/* Product / System */}
                <div>
                  <label className="block text-[#0f2a4a] font-medium text-sm mb-1">Product / System</label>
                  <input
                    type="text"
                    placeholder="e.g. ER Probe Model 7012, FieldCom 3.0"
                    className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:border-[#f4a65d]"
                  />
                </div>

                {/* Application Type */}
                <div>
                  <label className="block text-[#0f2a4a] font-medium text-sm mb-1">Application Type</label>
                  <select className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] focus:outline-none focus:border-[#f4a65d] bg-white">
                    <option value="">Select application...</option>
                    <option>Oil &amp; Gas — Upstream</option>
                    <option>Oil &amp; Gas — Midstream Pipeline</option>
                    <option>Oil &amp; Gas — Downstream / Refining</option>
                    <option>Petrochemical</option>
                    <option>Water Treatment</option>
                    <option>Utilities</option>
                    <option>Chemical Processing</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Issue Description */}
                <div>
                  <label className="block text-[#0f2a4a] font-medium text-sm mb-1">Issue Description</label>
                  <textarea
                    rows={5}
                    placeholder="Describe the issue, symptoms, and any troubleshooting steps already taken..."
                    className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:border-[#f4a65d] resize-none"
                  />
                </div>

                {/* Priority */}
                <div>
                  <label className="block text-[#0f2a4a] font-medium text-sm mb-1">Priority</label>
                  <select className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] focus:outline-none focus:border-[#f4a65d] bg-white">
                    <option value="critical">Critical — System Down</option>
                    <option value="high">High — Degraded Performance</option>
                    <option value="normal">Normal — Planning / Inquiry</option>
                  </select>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-[#0f2a4a] font-medium text-sm mb-1">Attachments</label>
                  <div className="border-2 border-dashed border-[#e8edf2] rounded-xl p-8 text-center hover:border-[#f4a65d] transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-[#8898aa] mx-auto mb-3" />
                    <p className="text-[#566677] text-sm font-medium">Drag and drop files here</p>
                    <p className="text-[#8898aa] text-xs mt-1">or <span className="text-[#f4a65d] font-semibold">browse to upload</span></p>
                    <p className="text-[#8898aa] text-xs mt-2">PDF, PNG, JPG up to 25MB each</p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f4a65d] text-white rounded-lg py-3 font-semibold hover:bg-[#d4892a] transition-colors"
                >
                  Submit Support Request
                </button>
              </form>
            </div>

            {/* Right: Response Times + Contact */}
            <div className="lg:col-span-2 space-y-6">
              {/* Response Times */}
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

              {/* Contact Info */}
              <div className="bg-[#f7f9fc] border border-[#e8edf2] rounded-xl p-6">
                <h3 className="text-[#0f2a4a] font-black text-lg mb-4">Direct Contact</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-[#566677] text-xs font-semibold uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-[#0f2a4a] font-semibold text-sm">+1 (562) 949-0123</p>
                  </div>
                  <div>
                    <p className="text-[#566677] text-xs font-semibold uppercase tracking-wider mb-1">Email</p>
                    <p className="text-[#0f2a4a] font-semibold text-sm">support@cosasco.com</p>
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

      {/* WHATSAPP / CHAT CTA STRIP */}
      <section className="bg-[#0f2a4a] py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6 text-[#f4a65d]" />
            </div>
            <p className="text-white font-semibold text-lg">
              Need immediate help? Chat with our support team.
            </p>
          </div>
          <a
            href="#"
            className="flex-shrink-0 bg-[#f4a65d] hover:bg-[#d4892a] text-white font-bold rounded-lg px-7 py-3 text-sm transition-colors whitespace-nowrap"
          >
            Start Chat →
          </a>
        </div>
      </section>
    </div>
  )
}
