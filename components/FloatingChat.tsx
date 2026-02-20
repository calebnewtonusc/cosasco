'use client'

import { useState } from 'react'
import { MessageCircle, X, Send, Phone, Mail, ChevronRight } from 'lucide-react'

const quickLinks = [
  { label: 'Request a Quote', href: '/contact', icon: ChevronRight },
  { label: 'Find a Rep', href: '/contact/find-a-rep', icon: ChevronRight },
  { label: 'Technical Support', href: '/support', icon: ChevronRight },
]

export default function FloatingChat() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!message.trim()) return
    setSent(true)
    setMessage('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 no-print">

      {/* Chat panel */}
      {open && (
        <div
          className="w-80 bg-white rounded-2xl shadow-2xl border border-[#e8edf2] overflow-hidden"
          style={{
            animation: 'chatSlideIn 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {/* Header */}
          <div className="bg-[#0f2a4a] px-5 py-4 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <p className="text-white font-bold text-sm">Cosasco Support</p>
              </div>
              <p className="text-[#8ab4d4] text-xs mt-1">Typically replies within 1 business day</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-[#8ab4d4] hover:text-white transition-colors mt-0.5"
            >
              <X size={16} />
            </button>
          </div>

          {/* Body */}
          <div className="p-5">

            {/* Greeting */}
            <div className="flex items-start gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-[#0f2a4a] flex items-center justify-center shrink-0 text-white font-black text-sm">
                C
              </div>
              <div className="bg-[#f7f9fc] rounded-xl rounded-tl-none px-4 py-3 text-sm text-[#334150] leading-relaxed max-w-[calc(100%-3rem)]">
                Hi! I&apos;m here to help you find the right corrosion monitoring solution. What can I assist you with today?
              </div>
            </div>

            {/* Quick links */}
            <div className="mb-5">
              <p className="text-[0.65rem] font-bold uppercase tracking-widest text-[#8898aa] mb-2">Quick Options</p>
              <div className="space-y-1.5">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-between w-full bg-[#f7f9fc] hover:bg-[#fef3e2] border border-[#e8edf2] hover:border-[#f4a65d] rounded-lg px-3.5 py-2.5 text-sm font-medium text-[#334150] hover:text-[#d4892a] transition-all"
                  >
                    {link.label}
                    <link.icon size={14} className="text-[#f4a65d]" />
                  </a>
                ))}
              </div>
            </div>

            {/* Direct contact strip */}
            <div className="grid grid-cols-2 gap-2 mb-5">
              <a
                href="tel:+15629490123"
                className="flex items-center gap-2 bg-[#f0f4f8] hover:bg-[#e8edf2] rounded-lg px-3 py-2.5 text-xs font-semibold text-[#334150] transition-colors"
              >
                <Phone size={13} className="text-[#f4a65d]" />
                Call Us
              </a>
              <a
                href="mailto:info@cosasco.com"
                className="flex items-center gap-2 bg-[#f0f4f8] hover:bg-[#e8edf2] rounded-lg px-3 py-2.5 text-xs font-semibold text-[#334150] transition-colors"
              >
                <Mail size={13} className="text-[#f4a65d]" />
                Email Us
              </a>
            </div>

            {/* Message form */}
            {!sent ? (
              <form onSubmit={handleSubmit}>
                <p className="text-[0.65rem] font-bold uppercase tracking-widest text-[#8898aa] mb-2">Send a Message</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your question..."
                    className="flex-1 border border-[#e8edf2] rounded-lg px-3 py-2 text-sm text-[#334150] placeholder-[#8898aa] outline-none focus:border-[#f4a65d] focus:ring-1 focus:ring-[#f4a65d] min-w-0"
                  />
                  <button
                    type="submit"
                    className="bg-[#f4a65d] hover:bg-[#d4892a] text-white rounded-lg px-3 py-2 transition-colors shrink-0"
                    aria-label="Send message"
                  >
                    <Send size={14} />
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-sm text-green-700 font-medium">
                Message sent! We&apos;ll get back to you within one business day.
              </div>
            )}
          </div>
        </div>
      )}

      {/* FAB button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close support chat' : 'Open support chat'}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 active:scale-95"
        style={{
          backgroundColor: open ? '#0f2a4a' : '#f4a65d',
        }}
      >
        {open ? (
          <X size={22} className="text-white" />
        ) : (
          <MessageCircle size={22} className="text-white" />
        )}

        {/* Unread badge */}
        {!open && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
        )}
      </button>

      <style>{`
        @keyframes chatSlideIn {
          from { opacity: 0; transform: translateY(12px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  )
}
