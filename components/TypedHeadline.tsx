'use client'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

interface Props {
  strings: string[]
  className?: string
}

export default function TypedHeadline({ strings, className }: Props) {
  const el = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const typed = new Typed(el.current!, {
      strings,
      typeSpeed: 55,
      backSpeed: 25,
      backDelay: 2500,
      loop: true,
    })
    return () => typed.destroy()
  }, [strings])

  return <span ref={el} className={className} />
}
