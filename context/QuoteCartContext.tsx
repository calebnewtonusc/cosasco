'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'cosasco-quote-cart'

export type QuoteItem = {
  slug: string
  name: string
  qty: number
}

type QuoteCartState = {
  items: QuoteItem[]
  addItem: (slug: string, name: string, qty: number) => void
  removeItem: (slug: string) => void
  updateQty: (slug: string, qty: number) => void
  clearCart: () => void
  itemCount: number
}

const defaultState: QuoteCartState = {
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQty: () => {},
  clearCart: () => {},
  itemCount: 0,
}

const QuoteCartContext = createContext<QuoteCartState>(defaultState)

function loadStored(): QuoteItem[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function saveStored(items: QuoteItem[]) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {}
}

export function QuoteCartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([])

  useEffect(() => {
    setItems(loadStored())
  }, [])

  useEffect(() => {
    if (items.length > 0) saveStored(items)
  }, [items])

  const addItem = useCallback((slug: string, name: string, qty: number) => {
    setItems((prev) => {
      const i = prev.findIndex((x) => x.slug === slug)
      if (i >= 0) {
        const next = [...prev]
        next[i] = { ...next[i], qty: next[i].qty + qty }
        return next
      }
      return [...prev, { slug, name, qty }]
    })
  }, [])

  const removeItem = useCallback((slug: string) => {
    setItems((prev) => prev.filter((x) => x.slug !== slug))
  }, [])

  const updateQty = useCallback((slug: string, qty: number) => {
    if (qty < 1) {
      setItems((prev) => prev.filter((x) => x.slug !== slug))
      return
    }
    setItems((prev) =>
      prev.map((x) => (x.slug === slug ? { ...x, qty } : x))
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const itemCount = useMemo(() => items.reduce((n, i) => n + i.qty, 0), [items])

  const value = useMemo(
    () => ({ items, addItem, removeItem, updateQty, clearCart, itemCount }),
    [items, addItem, removeItem, updateQty, clearCart, itemCount]
  )

  return (
    <QuoteCartContext.Provider value={value}>
      {children}
    </QuoteCartContext.Provider>
  )
}

export function useQuoteCart() {
  const ctx = useContext(QuoteCartContext)
  if (!ctx) throw new Error('useQuoteCart must be used within QuoteCartProvider')
  return ctx
}
