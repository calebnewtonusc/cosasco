'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Phone, Mail, Loader2 } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const QUICK_QUESTIONS = [
  'What products do you offer?',
  'Which industries do you serve?',
  'How do I request a quote?',
  'What is ER monitoring?',
]

export default function FloatingChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function send(text: string) {
    if (!text.trim() || loading) return
    setInput('')

    const userMsg: Message = { role: 'user', content: text }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setLoading(true)

    // Add empty assistant message (will stream into it)
    setMessages((prev) => [...prev, { role: 'assistant', content: '' }])

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })

      if (!res.ok || !res.body) throw new Error('Request failed')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value)
        setMessages((prev) => {
          const updated = [...prev]
          updated[updated.length - 1] = {
            role: 'assistant',
            content: updated[updated.length - 1].content + chunk,
          }
          return updated
        })
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev]
        updated[updated.length - 1] = {
          role: 'assistant',
          content:
            'Sorry, I ran into an issue. Please try again or reach us at info@cosasco.com.',
        }
        return updated
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 no-print">

      {/* Chat panel */}
      {open && (
        <div
          className="w-80 bg-white rounded-2xl shadow-2xl border border-[#e8edf2] overflow-hidden flex flex-col"
          style={{
            height: '500px',
            animation: 'chatSlideIn 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {/* Header */}
          <div className="bg-[#0f2a4a] px-5 py-4 flex items-start justify-between shrink-0">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <p className="text-white font-bold text-sm">Cosasco AI Assistant</p>
              </div>
              <p className="text-[#8ab4d4] text-xs mt-0.5">Ask me anything about our solutions</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-[#8ab4d4] hover:text-white transition-colors mt-0.5"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">

            {/* Greeting bubble (always shown) */}
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#0f2a4a] flex items-center justify-center shrink-0 text-white font-black text-xs">
                C
              </div>
              <div className="bg-[#f7f9fc] rounded-xl rounded-tl-none px-3.5 py-2.5 text-sm text-[#334150] leading-relaxed max-w-[calc(100%-3rem)]">
                Hi! I&apos;m Cosasco&apos;s AI assistant. Ask me about our corrosion monitoring products, industries we serve, or anything else I can help with.
              </div>
            </div>

            {/* Quick question chips (only before first message) */}
            {messages.length === 0 && (
              <div className="space-y-1.5 pl-9">
                {QUICK_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="block w-full text-left text-xs bg-white hover:bg-[#fef3e2] border border-[#e8edf2] hover:border-[#f4a65d] rounded-lg px-3 py-2 text-[#566677] hover:text-[#d4892a] transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Conversation */}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-end gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-full bg-[#0f2a4a] flex items-center justify-center shrink-0 text-white font-black text-xs mb-0.5">
                    C
                  </div>
                )}
                <div
                  className={`rounded-xl px-3.5 py-2.5 text-sm leading-relaxed max-w-[calc(100%-3rem)] ${
                    msg.role === 'user'
                      ? 'bg-[#f4a65d] text-white rounded-br-none'
                      : 'bg-[#f7f9fc] text-[#334150] rounded-bl-none'
                  }`}
                >
                  {msg.content || (
                    <span className="flex items-center gap-1 py-0.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#8898aa] animate-bounce"
                        style={{ animationDelay: '0ms' }}
                      />
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#8898aa] animate-bounce"
                        style={{ animationDelay: '150ms' }}
                      />
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#8898aa] animate-bounce"
                        style={{ animationDelay: '300ms' }}
                      />
                    </span>
                  )}
                </div>
              </div>
            ))}

            <div ref={bottomRef} />
          </div>

          {/* Contact strip */}
          <div className="px-4 pb-2 shrink-0">
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+15629490123"
                className="flex items-center gap-1.5 bg-[#f0f4f8] hover:bg-[#e8edf2] rounded-lg px-2.5 py-2 text-xs font-semibold text-[#334150] transition-colors"
              >
                <Phone size={11} className="text-[#f4a65d]" />
                Call Us
              </a>
              <a
                href="mailto:info@cosasco.com"
                className="flex items-center gap-1.5 bg-[#f0f4f8] hover:bg-[#e8edf2] rounded-lg px-2.5 py-2 text-xs font-semibold text-[#334150] transition-colors"
              >
                <Mail size={11} className="text-[#f4a65d]" />
                Email Us
              </a>
            </div>
          </div>

          {/* Input area */}
          <div className="px-4 py-3 border-t border-[#e8edf2] shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                send(input)
              }}
              className="flex gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                disabled={loading}
                className="flex-1 border border-[#e8edf2] rounded-lg px-3 py-2 text-sm text-[#334150] placeholder-[#8898aa] outline-none focus:border-[#f4a65d] focus:ring-1 focus:ring-[#f4a65d] min-w-0 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="bg-[#f4a65d] hover:bg-[#d4892a] disabled:opacity-40 text-white rounded-lg px-3 py-2 transition-colors shrink-0"
                aria-label="Send message"
              >
                {loading ? (
                  <Loader2 size={14} className="animate-spin" />
                ) : (
                  <Send size={14} />
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FAB button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close AI assistant' : 'Open AI assistant'}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 active:scale-95 relative"
        style={{ backgroundColor: open ? '#0f2a4a' : '#f4a65d' }}
      >
        {open ? (
          <X size={22} className="text-white" />
        ) : (
          <MessageCircle size={22} className="text-white" />
        )}

        {/* Online indicator */}
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
