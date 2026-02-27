'use client'

import { useReducer, useRef, useEffect, useCallback } from 'react'
import { MessageCircle, X, Send, Phone, Mail, Trash2, GripHorizontal } from 'lucide-react'

const MIN_W = 280
const MAX_W = 680
const MIN_H = 360
const MAX_H = 860
const DEFAULT_W = 340
const DEFAULT_H = 540

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface ChatSize {
  w: number
  h: number
}

interface ChatState {
  open: boolean
  messages: Message[]
  input: string
  loading: boolean
  size: ChatSize
}

type ChatAction =
  | { type: 'OPEN' }
  | { type: 'CLOSE' }
  | { type: 'TOGGLE' }
  | { type: 'SET_INPUT'; value: string }
  | { type: 'ADD_USER_MESSAGE'; content: string }
  | { type: 'ADD_ASSISTANT_MESSAGE'; content: string }
  | { type: 'SET_LOADING'; loading: boolean }
  | { type: 'CLEAR_MESSAGES' }
  | { type: 'SET_SIZE'; size: ChatSize }

const initialState: ChatState = {
  open: false,
  messages: [],
  input: '',
  loading: false,
  size: { w: DEFAULT_W, h: DEFAULT_H },
}

function chatReducer(state: ChatState, action: ChatAction): ChatState {
  switch (action.type) {
    case 'OPEN':
      return { ...state, open: true }
    case 'CLOSE':
      return { ...state, open: false }
    case 'TOGGLE':
      return { ...state, open: !state.open }
    case 'SET_INPUT':
      return { ...state, input: action.value }
    case 'ADD_USER_MESSAGE':
      return { ...state, messages: [...state.messages, { role: 'user', content: action.content }], input: '' }
    case 'ADD_ASSISTANT_MESSAGE':
      return { ...state, messages: [...state.messages, { role: 'assistant', content: action.content }] }
    case 'SET_LOADING':
      return { ...state, loading: action.loading }
    case 'CLEAR_MESSAGES':
      return { ...state, messages: [] }
    case 'SET_SIZE':
      return { ...state, size: action.size }
    default:
      return state
  }
}

const QUICK_QUESTIONS = [
  'What products do you offer?',
  'How does ER monitoring work?',
  'Which industries do you serve?',
  'ER probe vs corrosion coupon?',
  'How do I request a quote?',
  'Tell me about Microcor® CDO systems',
]

// ── Simple markdown renderer ─────────────────────────────────────────────────

function renderInlineParts(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  return parts.map((part) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={`bold-${part.slice(2, -2)}`} className="font-semibold text-[#1e2b3a]">{part.slice(2, -2)}</strong>
      : part
  )
}

interface InlineTextProps {
  text: string
}

function InlineText({ text }: InlineTextProps) {
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  return (
    <>
      {parts.map((part) =>
        part.startsWith('**') && part.endsWith('**')
          ? <strong key={`bold-${part.slice(2, -2)}`} className="font-semibold text-[#1e2b3a]">{part.slice(2, -2)}</strong>
          : part
      )}
    </>
  )
}

interface BulletItemProps {
  id: string
  text: string
}

function BulletItem({ id, text }: BulletItemProps) {
  return (
    <li key={id} className="flex gap-2">
      <span className="text-[#f4a65d] shrink-0 mt-px">•</span>
      <span><InlineText text={text} /></span>
    </li>
  )
}

interface MarkdownParagraphProps {
  id: string
  text: string
  hasTopMargin: boolean
}

function MarkdownParagraph({ id, text, hasTopMargin }: MarkdownParagraphProps) {
  return (
    <p key={id} className={hasTopMargin ? 'mt-1.5' : ''}>
      <InlineText text={text} />
    </p>
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

  lines.forEach((line, lineNum) => {
    const trimmed = line.trim()
    const isBullet = trimmed.startsWith('- ') || trimmed.startsWith('* ') || trimmed.startsWith('• ')
    if (isBullet) {
      const bulletText = trimmed.slice(2)
      listItems.push(
        <BulletItem key={`bullet-${lineNum}-${bulletText.slice(0, 20)}`} id={`bullet-${lineNum}`} text={bulletText} />
      )
    } else {
      flushList()
      if (trimmed === '') {
        if (result.length > 0) result.push(<div key={`sp-${lineNum}`} className="h-1" />)
      } else {
        result.push(
          <MarkdownParagraph key={`p-${lineNum}-${trimmed.slice(0, 20)}`} id={`p-${lineNum}`} text={trimmed} hasTopMargin={result.length > 0} />
        )
      }
    }
  })
  flushList()
  return result
}
// ─────────────────────────────────────────────────────────────────────────────

export default function FloatingChat() {
  const [state, dispatch] = useReducer(chatReducer, initialState)
  const { open, messages, input, loading, size } = state

  const bottomRef   = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const messagesRef = useRef<HTMLDivElement>(null)
  const dragRef     = useRef<{ startX: number; startY: number; startW: number; startH: number } | null>(null)

  const onResizePointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault()
    dragRef.current = { startX: e.clientX, startY: e.clientY, startW: size.w, startH: size.h }
    ;(e.target as Element).setPointerCapture(e.pointerId)
  }, [size])

  const onResizePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragRef.current) return
    const { startX, startY, startW, startH } = dragRef.current
    // Panel anchored bottom-right: dragging left/up grows the panel
    const newW = Math.min(MAX_W, Math.max(MIN_W, startW - (e.clientX - startX)))
    const newH = Math.min(MAX_H, Math.max(MIN_H, startH - (e.clientY - startY)))
    dispatch({ type: 'SET_SIZE', size: { w: newW, h: newH } })
  }, [])

  const onResizePointerUp = useCallback((e: React.PointerEvent) => {
    dragRef.current = null
    ;(e.target as Element).releasePointerCapture(e.pointerId)
  }, [])

  // Auto-resize textarea
  const resizeTextarea = useCallback(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = Math.min(el.scrollHeight, 80) + 'px'
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    const handler = () => dispatch({ type: 'OPEN' })
    window.addEventListener('cosasco:open-chat', handler)
    return () => window.removeEventListener('cosasco:open-chat', handler)
  }, [])

  function handleOpenChat() {
    dispatch({ type: 'OPEN' })
    setTimeout(() => textareaRef.current?.focus(), 150)
  }

  function handleToggleChat() {
    if (!open) {
      dispatch({ type: 'OPEN' })
      setTimeout(() => textareaRef.current?.focus(), 150)
    } else {
      dispatch({ type: 'CLOSE' })
    }
  }

  async function send(text: string) {
    if (!text.trim() || loading) return
    if (textareaRef.current) textareaRef.current.style.height = 'auto'

    const userContent = text.trim()
    const userMsg: Message = { role: 'user', content: userContent }
    const newMessages = [...messages, userMsg]
    dispatch({ type: 'ADD_USER_MESSAGE', content: userContent })
    dispatch({ type: 'SET_LOADING', loading: true })

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })
      const data = await res.json()
      const reply = data.content ?? data.error ?? 'Something went wrong. Please try again.'
      dispatch({ type: 'ADD_ASSISTANT_MESSAGE', content: reply })
    } catch {
      dispatch({ type: 'ADD_ASSISTANT_MESSAGE', content: 'Network error. Please try again or reach us at info@cosasco.com.' })
    } finally {
      dispatch({ type: 'SET_LOADING', loading: false })
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
          className="relative bg-white rounded-2xl shadow-2xl border border-[#e8edf2] overflow-hidden flex flex-col"
          style={{
            width: size.w,
            height: size.h,
            animation: 'chatSlideIn 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {/* Header - contains resize handle on left */}
          <div className="bg-[#0f2a4a] px-5 py-3.5 flex items-center justify-between shrink-0 select-none">
            {/* Resize handle */}
            <div
              role="separator"
              aria-label="Resize chat window"
              title="Drag to resize"
              onPointerDown={onResizePointerDown}
              onPointerMove={onResizePointerMove}
              onPointerUp={onResizePointerUp}
              className="absolute -top-px -left-px w-8 h-8 flex items-end justify-end cursor-nw-resize rounded-tl-2xl rounded-br-lg text-[#2a4a6a] hover:text-[#f4a65d] transition-colors p-1 z-10"
              style={{ touchAction: 'none' }}
            >
              <GripHorizontal size={13} className="rotate-45" />
            </div>

            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <div>
                <p className="text-white font-bold text-sm leading-tight">Cosasco AI</p>
                <p className="text-[#8ab4d4] text-[11px] leading-tight">Ask anything about our solutions</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {messages.length > 0 && (
                <button
                  onClick={() => dispatch({ type: 'CLEAR_MESSAGES' })}
                  aria-label="Clear conversation"
                  title="Clear conversation"
                  className="text-[#8ab4d4] hover:text-white transition-colors p-1"
                >
                  <Trash2 size={14} />
                </button>
              )}
              <button
                onClick={() => dispatch({ type: 'CLOSE' })}
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

            {/* Quick question chips - shown before first message */}
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
            {messages.map((msg) => (
              <div key={`${msg.role}-${msg.content.slice(0, 40)}`} className={`flex items-end gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
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
                onChange={(e) => { dispatch({ type: 'SET_INPUT', value: e.target.value }); resizeTextarea() }}
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
              AI Assistant · Powered by Cosasco
            </p>
          </div>
        </div>
      )}

      {/* ── FAB button ──────────────────────────────────────────────────── */}
      <button
        onClick={handleToggleChat}
        aria-label={open ? 'Close AI assistant' : 'Open AI assistant'}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 active:scale-95 relative"
        style={{ backgroundColor: open ? '#0f2a4a' : '#f4a65d' }}
      >
        {open ? (
          <X size={22} className="text-white" />
        ) : (
          <MessageCircle size={22} className="text-white" />
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
