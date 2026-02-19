'use client'

import { useState } from 'react'
import { ChevronDown, Search, X } from 'lucide-react'

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

const allFaqs = Object.entries(faqData).flatMap(([category, faqs]) =>
  faqs.map((faq) => ({ ...faq, category }))
)

function highlightText(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
  const parts = text.split(regex)
  return parts.map((part, partIdx) =>
    regex.test(part) ? (
      <mark key={`hl-${partIdx}`} className="bg-[#f4a65d]/30 text-[#0f2a4a] rounded px-0.5">
        {part}
      </mark>
    ) : (
      part
    )
  )
}

export default function SupportFAQ() {
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

        {isSearching && (
          <p className="text-center text-sm text-[#566677] mb-6">
            <span className="font-semibold text-[#0f2a4a]">{searchResults.length}</span>{' '}
            result{searchResults.length !== 1 ? 's' : ''} for &ldquo;{searchQuery}&rdquo;
          </p>
        )}

        {!isSearching && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenIndex(null) }}
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

        {!isSearching && (
          <div>
            {currentFaqs.map((faq, index) => (
              <div
                key={faq.question}
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

        {isSearching && (
          <div>
            {searchResults.length === 0 ? (
              <div className="text-center py-12 bg-white border border-[#e8edf2] rounded-xl">
                <p className="text-[#566677] text-sm">No FAQs matched your search. Try different keywords or contact our support team.</p>
              </div>
            ) : (
              searchResults.map((faq) => (
                <div
                  key={`${faq.category}-${faq.question}`}
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
  )
}
