declare module 'aos' {
  interface AosOptions {
    duration?: number
    once?: boolean
    easing?: string
    offset?: number
    delay?: number
    anchorPlacement?: string
    disable?: boolean | 'phone' | 'tablet' | 'mobile' | (() => boolean)
    startEvent?: string
    initClassName?: string
    animatedClassName?: string
    useClassNames?: boolean
    disableMutationObserver?: boolean
    debounceDelay?: number
    throttleDelay?: number
  }

  const AOS: {
    init(options?: AosOptions): void
    refresh(initialize?: boolean): void
    refreshHard(): void
  }

  export default AOS
}
