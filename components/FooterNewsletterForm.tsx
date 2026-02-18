'use client'

export default function FooterNewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex gap-2"
      aria-label="Newsletter signup"
    >
      <input
        type="email"
        placeholder="Work email address"
        required
        className="flex-1 min-w-0 px-3 py-2 text-sm rounded-lg border outline-none transition-colors focus:ring-2"
        style={{
          background: 'rgba(255,255,255,0.06)',
          borderColor: 'rgba(255,255,255,0.15)',
          color: '#E2E8F0',
        }}
        aria-label="Email address for newsletter"
      />
      <button
        type="submit"
        className="shrink-0 px-4 py-2 text-sm font-semibold rounded-lg transition-colors"
        style={{ background: '#E8500A', color: '#fff' }}
        aria-label="Subscribe to newsletter"
      >
        Subscribe
      </button>
    </form>
  )
}
