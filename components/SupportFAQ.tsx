'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, Search, X } from 'lucide-react'

const faqData: Record<string, { question: string; answer: string }[]> = {
  Orders: [
    {
      question: 'What forms of payment do you accept?',
      answer:
        'We accept Visa, MasterCard, and American Express credit cards. For distributor and partner payments, please visit our Partner Payment portal or contact ccpayments@cosasco.com.',
    },
    {
      question: 'How can I place an order?',
      answer:
        'Orders can be placed by email to sales@cosasco.com, by fax to +1-562-949-3065, or by phone at +1-562-949-0123 or toll-free at +1-800-635-6898. A Cosasco sales representative will confirm your order and provide a delivery estimate.',
    },
    {
      question: 'How do I check the status of an existing order?',
      answer:
        'Contact our sales team at sales@cosasco.com or call +1-562-949-0123. Please have your purchase order or sales order number ready.',
    },
    {
      question: 'How do I request a quote?',
      answer:
        'Submit your quote request through our Contact page at /contact, or email sales@cosasco.com with your requirements including product model, quantity, and delivery location. We aim to respond within one business day.',
    },
    {
      question: 'How do I set up a Cosasco customer account?',
      answer:
        'Contact our sales team at sales@cosasco.com to establish a customer account. For distributor accounts, please reach out to your regional Cosasco representative.',
    },
  ],
  'Sales & Support': [
    {
      question: 'How do I find a local representative or distributor?',
      answer:
        'Visit our Find a Rep page at /contact/find-a-rep to locate your nearest Cosasco representative. We have sales representatives and distributors in 110+ countries. You can also email sales@cosasco.com.',
    },
    {
      question: 'Does Cosasco offer global technical support?',
      answer:
        'Yes, Cosasco provides technical support worldwide through our global network of representatives and our in-house support team. Contact support@cosasco.com or call +1-562-949-0123. Our team supports customers in 110+ countries.',
    },
    {
      question: 'How do I submit an RMA (Return Merchandise Authorization) request?',
      answer:
        'Email RMA@cosasco.com with your product model, serial number, purchase date, and a description of the issue. Our technical team will review your request and provide an RMA number along with return shipping instructions.',
    },
  ],
  Resources: [
    {
      question: 'Where can I find product specifications and datasheets?',
      answer:
        'Product datasheets and technical documents are available in our Technical Library at /resources. You can also contact info@cosasco.com to request specific documents for any Cosasco product.',
    },
    {
      question: 'Where can I find product manuals and instruction sheets?',
      answer:
        'Instruction sheets and user manuals are available in our Technical Library at /resources. If you cannot find the document you need, contact support@cosasco.com with your product model number.',
    },
    {
      question: 'How do I configure my Cosasco instrument?',
      answer:
        'Configuration instructions are included in the product user manual available at /resources. For instrument-specific configuration questions, contact support@cosasco.com with your model number and a description of your configuration requirements.',
    },
  ],
  Software: [
    {
      question: 'What version of Microcor® Tools software is current?',
      answer:
        'The current version of Microcor® Tools is 4.4.5. However, we recommend upgrading to Cosasco Data Online (CDO), which replaces Microcor® Tools and all legacy Corrdata software. Download CDO at /software.',
    },
    {
      question: 'What version of Corrdata software is current?',
      answer:
        'Corrdata Plus v3.3.0 is the latest legacy version. We recommend upgrading to Cosasco Data Online (CDO) which replaces Corrdata Plus, Corrdata II, and Microcor® Tools with a unified modern platform. Download at /software.',
    },
    {
      question: 'Is Cosasco software compatible with Windows Vista?',
      answer:
        'Legacy software (Corrdata Plus, Corrdata II) was designed for Windows XP/Vista. Cosasco Data Online (CDO) supports Windows 10 and 11 (64-bit). For older systems, legacy versions are available for download at /software.',
    },
    {
      question: 'How do I uninstall Cosasco software?',
      answer:
        'To uninstall Cosasco Data Online (CDO) or legacy software, go to Control Panel > Programs > Uninstall a Program, select the Cosasco software, and follow the prompts. Contact support@cosasco.com if you encounter any issues.',
    },
    {
      question: 'How can I activate my Cosasco Data Online (CDO) software?',
      answer:
        'CDO software requires a unique activation key tied to your Machine ID. Visit /software and complete the Data Key Activation form with your Machine ID, Serial Number, Country, and Technology type. Cosasco will email your activation key within one business day.',
    },
  ],
}

const categories = ['Orders', 'Sales & Support', 'Resources', 'Software'] as const

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

/* ── Animated accordion item ───────────────────────────────────────────────── */

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  searchQuery,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  searchQuery?: string
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [maxHeight, setMaxHeight] = useState('0px')

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px')
    }
  }, [isOpen])

  return (
    <div
      className={`bg-white border rounded-xl mb-3 overflow-hidden transition-shadow duration-200 ${
        isOpen ? 'border-[#f4a65d] shadow-md' : 'border-[#e8edf2] hover:border-[#d1d9e0]'
      }`}
    >
      <button
        className="w-full px-6 py-4 flex justify-between items-center text-left gap-4"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={`font-semibold transition-colors duration-200 ${isOpen ? 'text-[#f4a65d]' : 'text-[#0f2a4a]'}`}>
          {searchQuery ? highlightText(question, searchQuery) : question}
        </span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-[#f4a65d]' : 'text-[#566677]'
          }`}
        />
      </button>
      <div
        style={{
          maxHeight,
          overflow: 'hidden',
          transition: 'max-height 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div ref={contentRef} className="px-6 pb-5 border-t border-[#e8edf2] pt-4">
          <p className="text-[#566677] text-sm leading-relaxed">
            {searchQuery ? highlightText(answer, searchQuery) : answer}
          </p>
        </div>
      </div>
    </div>
  )
}

/* ── Main FAQ component ────────────────────────────────────────────────────── */

export default function SupportFAQ() {
  const [activeCategory, setActiveCategory] = useState<string>('Orders')
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

  function switchCategory(cat: string) {
    setActiveCategory(cat)
    setOpenIndex(null)
  }

  return (
    <section id="faq" className="bg-[#f7f9fc] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f4a65d]">
            FAQ
          </span>
          <h2 className="text-[#0f2a4a] font-black text-4xl mt-2 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-[#566677]">
            Browse by category or search below. Can&apos;t find what you need?{' '}
            <Link href="/contact" className="text-[#f4a65d] font-semibold hover:underline">
              Contact our engineers.
            </Link>
          </p>
        </div>

        {/* Search Input */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8898aa]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setOpenIndex(null) }}
            placeholder="Search FAQs..."
            aria-label="Search frequently asked questions"
            className="border border-[#e8edf2] rounded-xl pl-10 pr-10 py-3.5 text-sm w-full block focus:outline-none focus:border-[#f4a65d] focus:ring-2 focus:ring-[#f4a65d]/20 bg-white shadow-sm transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8898aa] hover:text-[#566677] transition-colors"
              aria-label="Clear search"
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

        {/* Category tabs */}
        {!isSearching && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => switchCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#f4a65d] text-white shadow-sm'
                    : 'bg-white border border-[#e8edf2] text-[#566677] hover:border-[#f4a65d] hover:text-[#f4a65d]'
                }`}
              >
                {cat}
                <span
                  className={`ml-1.5 text-xs font-bold ${
                    activeCategory === cat ? 'opacity-80' : 'opacity-50'
                  }`}
                >
                  ({faqData[cat]?.length ?? 0})
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Regular FAQ accordion */}
        {!isSearching && (
          <div>
            {currentFaqs.map((faq, index) => (
              <FAQItem
                key={`${activeCategory}-${faq.question}`}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        )}

        {/* Search results */}
        {isSearching && (
          <div>
            {searchResults.length === 0 ? (
              <div className="text-center py-12 bg-white border border-[#e8edf2] rounded-xl">
                <p className="text-[#566677] text-sm mb-3">
                  No FAQs matched your search. Try different keywords or contact our support team.
                </p>
                <Link
                  href="/contact"
                  className="text-[#f4a65d] font-semibold text-sm hover:underline"
                >
                  Contact an Engineer →
                </Link>
              </div>
            ) : (
              searchResults.map((faq, index) => (
                <FAQItem
                  key={`search-${faq.category}-${faq.question}`}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                  searchQuery={searchQuery}
                />
              ))
            )}
          </div>
        )}

        {/* View all FAQs link */}
        <div className="text-center mt-10">
          <Link
            href="/support#faq"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#f4a65d] hover:underline"
          >
            View all FAQs →
          </Link>
        </div>
      </div>
    </section>
  )
}
