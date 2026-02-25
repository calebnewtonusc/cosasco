'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { MessageCircle, X, Send, Phone, Mail, Trash2 } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const QUICK_QUESTIONS = [
  'What products do you offer?',
  'How does ER monitoring work?',
  'Which industries do you serve?',
  'ER probe vs corrosion coupon?',
  'How do I request a quote?',
  'Tell me about FieldCom 5',
]

// ── Simple markdown renderer ─────────────────────────────────────────────────
function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i} className="font-semibold text-[#1e2b3a]">{part.slice(2, -2)}</strong>
      : part
  )
}

function renderMarkdown(text: string): React.ReactNode {
  const lines = text.split('\n')
  const result: React.ReactNode[] = []
  const listItems: React.ReactNode[] = []

  const flushList = () => {
    if (listItems.length > 0) {
      result.push(
        <ul key={`ul-${result.length}`} className={`space-y-1 pl-1 ${result.length > 0 ? 'mt-1.5' : ''}`}>
          {[...listItems]}
        </ul>
      )
      listItems.length = 0
    }
  }

  lines.forEach((line, i) => {
    const trimmed = line.trim()
    const isBullet = trimmed.startsWith('- ') || trimmed.startsWith('* ') || trimmed.startsWith('• ')
    if (isBullet) {
      listItems.push(
        <li key={i} className="flex gap-2">
          <span className="text-[#f4a65d] shrink-0 mt-px">•</span>
          <span>{renderInline(trimmed.slice(2))}</span>
        </li>
      )
    } else {
      flushList()
      if (trimmed === '') {
        if (result.length > 0) result.push(<div key={`sp-${i}`} className="h-1" />)
      } else {
        result.push(
          <p key={i} className={result.length > 0 ? 'mt-1.5' : ''}>
            {renderInline(trimmed)}
          </p>
        )
      }
    }
  })
  flushList()
  return result
}
// ─────────────────────────────────────────────────────────────────────────────

export default function FloatingChat() {
  const [open, setOpen]       = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput]     = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef    = useRef<HTMLDivElement>(null)
  const textareaRef  = useRef<HTMLTextAreaElement>(null)
  const messagesRef  = useRef<HTMLDivElement>(null)

  // Auto-resize textarea
  const resizeTextarea = useCallback(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = Math.min(el.scrollHeight, 80) + 'px'
  }, [])

  useEffect(() => {
    if (open) setTimeout(() => textareaRef.current?.focus(), 150)
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  async function send(text: string) {
    if (!text.trim() || loading) return
    setInput('')
    if (textareaRef.current) textareaRef.current.style.height = 'auto'

    const userMsg: Message = { role: 'user', content: text.trim() }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })
      const data = await res.json()
      const reply = data.content ?? data.error ?? 'Something went wrong. Please try again.'
      setMessages([...newMessages, { role: 'assistant', content: reply }])
    } catch {
      setMessages([...newMessages, {
        role: 'assistant',
        content: 'Network error. Please try again or reach us at info@cosasco.com.',
      }])
    } finally {
      setLoading(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send(input)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 no-print">

      {/* ── Chat panel ──────────────────────────────────────────────────── */}
      {open && (
        <div
          className="w-[340px] bg-white rounded-2xl shadow-2xl border border-[#e8edf2] overflow-hidden flex flex-col"
          style={{
            height: '540px',
            animation: 'chatSlideIn 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {/* Header */}
          <div className="bg-[#0f2a4a] px-5 py-3.5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <div>
                <p className="text-white font-bold text-sm leading-tight">Cosasco AI</p>
                <p className="text-[#8ab4d4] text-[11px] leading-tight">Ask anything about our solutions</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {messages.length > 0 && (
                <button
                  onClick={() => setMessages([])}
                  aria-label="Clear conversation"
                  title="Clear conversation"
                  className="text-[#8ab4d4] hover:text-white transition-colors p-1"
                >
                  <Trash2 size={14} />
                </button>
              )}
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="text-[#8ab4d4] hover:text-white transition-colors p-1"
              >
                <X size={15} />
              </button>
            </div>
          </div>

          {/* Messages area */}
          <div ref={messagesRef} className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">

            {/* Greeting bubble */}
            <div className="flex items-end gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#0f2a4a] flex items-center justify-center shrink-0 text-white font-black text-xs">
                C
              </div>
              <div className="bg-[#f7f9fc] rounded-xl rounded-bl-none px-3.5 py-2.5 text-[#334150] leading-relaxed max-w-[calc(100%-3rem)]">
                Hi! I&apos;m Cosasco&apos;s AI assistant. I can help you find the right monitoring solution, understand our products, or connect you with our team.
              </div>
            </div>

            {/* Quick question chips — shown before first message */}
            {messages.length === 0 && (
              <div className="pl-9 grid grid-cols-2 gap-1.5">
                {QUICK_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    disabled={loading}
                    className="text-left text-[11px] bg-white hover:bg-[#fef3e2] border border-[#e8edf2] hover:border-[#f4a65d] rounded-lg px-2.5 py-2 text-[#566677] hover:text-[#d4892a] transition-all leading-snug disabled:opacity-40"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Conversation */}
            {messages.map((msg, i) => (
              <div key={i} className={`flex items-end gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-full bg-[#0f2a4a] flex items-center justify-center shrink-0 text-white font-black text-xs mb-0.5">
                    C
                  </div>
                )}
                <div
                  className={`rounded-xl px-3.5 py-2.5 leading-relaxed max-w-[calc(100%-3.5rem)] ${
                    msg.role === 'user'
                      ? 'bg-[#f4a65d] text-white rounded-br-none text-[13px]'
                      : 'bg-[#f7f9fc] text-[#334150] rounded-bl-none text-[13px]'
                  }`}
                >
                  {msg.role === 'assistant' ? renderMarkdown(msg.content) : msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="flex items-end gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#0f2a4a] flex items-center justify-center shrink-0 text-white font-black text-xs">
                  C
                </div>
                <div className="bg-[#f7f9fc] rounded-xl rounded-bl-none px-4 py-3">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8898aa] animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8898aa] animate-bounce" style={{ animationDelay: '160ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8898aa] animate-bounce" style={{ animationDelay: '320ms' }} />
                  </span>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Contact strip */}
          <div className="px-4 pb-2 shrink-0">
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+15629490123"
                className="flex items-center gap-1.5 bg-[#f0f4f8] hover:bg-[#e8edf2] rounded-lg px-3 py-2 text-[11px] font-semibold text-[#334150] transition-colors"
              >
                <Phone size={11} className="text-[#f4a65d]" />
                562-949-0123
              </a>
              <a
                href="mailto:info@cosasco.com"
                className="flex items-center gap-1.5 bg-[#f0f4f8] hover:bg-[#e8edf2] rounded-lg px-3 py-2 text-[11px] font-semibold text-[#334150] transition-colors"
              >
                <Mail size={11} className="text-[#f4a65d]" />
                Email Us
              </a>
            </div>
          </div>

          {/* Input area */}
          <div className="px-4 pt-2 pb-3 border-t border-[#e8edf2] shrink-0">
            <div className="flex gap-2 items-end">
              <textarea
                ref={textareaRef}
                rows={1}
                value={input}
                onChange={(e) => { setInput(e.target.value); resizeTextarea() }}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question… (Enter to send)"
                disabled={loading}
                className="flex-1 border border-[#e8edf2] rounded-lg px-3 py-2 text-[13px] text-[#334150] placeholder-[#aab5c2] outline-none focus:border-[#f4a65d] focus:ring-1 focus:ring-[#f4a65d] min-w-0 disabled:opacity-50 resize-none leading-relaxed"
                style={{ minHeight: '36px', maxHeight: '80px' }}
              />
              <button
                onClick={() => send(input)}
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="bg-[#f4a65d] hover:bg-[#d4892a] disabled:opacity-40 text-white rounded-lg p-2 transition-colors shrink-0 mb-px"
              >
                <Send size={14} />
              </button>
            </div>
            <p className="mt-1.5 text-[10px] text-[#aab5c2] text-center">
              Powered by Ollama · gemma3:4b
            </p>
          </div>
        </div>
      )}

      {/* ── FAB button ──────────────────────────────────────────────────── */}
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
