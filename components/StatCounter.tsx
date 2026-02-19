'use client'

import { useEffect, useRef, useState } from 'react'

interface StatCounterProps {
  end: number
  suffix?: string
  duration?: number
  label: string
}

export default function StatCounter({
  end,
  suffix = '',
  duration = 2000,
  label,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))

      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(tick)
  }, [started, end, duration])

  return (
    <div ref={ref} className="text-center">
      <div
        className="font-black text-5xl leading-none"
        style={{ color: '#f4a65d' }}
      >
        {count}
        {suffix}
      </div>
      <div
        className="text-sm mt-2"
        style={{ color: '#94aabb' }}
      >
        {label}
      </div>
    </div>
  )
}
