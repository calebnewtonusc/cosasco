import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, AlertCircle, Mail, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Accessibility Statement | Cosasco',
  description:
    'Cosasco is committed to digital accessibility. Learn about our WCAG 2.1 AA compliance efforts, known limitations, and how to request accessible alternatives.',
}

const supported = [
  'Keyboard navigation for all interactive elements',
  'ARIA labels and roles for icons, buttons, and form fields',
  'Sufficient colour contrast ratios meeting WCAG 2.1 AA (4.5:1 for normal text, 3:1 for large text)',
  'Alternative text on all informational images',
  'Logical heading structure (H1 → H2 → H3) on all pages',
  'Form fields with visible labels and descriptive error messages',
  'Focus indicators visible on all focusable elements',
  'Responsive layout that works at up to 400% browser zoom without horizontal scrolling',
  'No content that flashes more than 3 times per second',
  'PDF datasheets available in accessible text-selectable format',
]

const limitations = [
  {
    area: 'Interactive Calculator',
    page: '/tools/device-length-calculator',
    detail:
      'The probe depth calculator uses a dynamic input interface. Screen reader announcements for live result updates may be inconsistent across all assistive technologies. We plan to improve ARIA live region support by Q2 2026.',
  },
  {
    area: 'News & Filter UI',
    page: '/news',
    detail:
      'The filter bar on the News page uses client-side state that may not announce filter results to screen readers in all browsers. A text summary of visible results is planned.',
  },
  {
    area: 'Legacy PDF Documents',
    page: '/software/legacy',
    detail:
      'Some legacy software documentation is provided as scanned PDFs that may not be fully accessible. Accessible alternatives are available upon request.',
  },
]

export default function AccessibilityPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-[#0f2a4a] pt-[72px] pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#f4a65d] text-xs font-bold uppercase tracking-[0.1em] mb-4">Legal</p>
          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight mb-4">
            Accessibility Statement
          </h1>
          <p className="text-[#94aabb] text-lg leading-relaxed max-w-2xl">
            Cosasco is committed to ensuring that our digital content is accessible to all users,
            including those who rely on assistive technologies.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {/* Conformance */}
          <div>
            <h2 className="text-[#0f2a4a] font-black text-2xl mb-4">Our Commitment</h2>
            <p className="text-[#566677] text-sm leading-relaxed mb-4">
              Rohrback Cosasco Systems, Inc. is committed to providing a website that is accessible to the
              widest possible audience, including people with disabilities. We aim to conform to the{' '}
              <strong className="text-[#0f2a4a]">Web Content Accessibility Guidelines (WCAG) 2.1, Level AA</strong>{' '}
              as published by the World Wide Web Consortium (W3C).
            </p>
            <p className="text-[#566677] text-sm leading-relaxed">
              This statement was prepared on February 1, 2026 and relates to the cosasco.com website
              and all associated web portals operated by Rohrback Cosasco Systems, Inc. We review and update
              this statement at least annually.
            </p>
          </div>

          {/* Technical spec */}
          <div>
            <h2 className="text-[#0f2a4a] font-black text-2xl mb-4">Technical Specification</h2>
            <p className="text-[#566677] text-sm leading-relaxed mb-4">
              The cosasco.com website relies on the following technologies for conformance with WCAG 2.1:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {['HTML5', 'CSS3 / Tailwind CSS', 'JavaScript / React', 'WAI-ARIA 1.1', 'SVG (Lucide Icons)', 'Next.js App Router'].map((tech) => (
                <div key={tech} className="bg-[#f0f4f8] border border-[#e8edf2] rounded-xl p-4 text-center">
                  <p className="text-[#0f2a4a] font-semibold text-sm">{tech}</p>
                </div>
              ))}
            </div>
            <p className="text-[#566677] text-xs mt-4 leading-relaxed">
              The website has been tested with the following assistive technologies: NVDA + Chrome
              (Windows), VoiceOver + Safari (macOS/iOS), and TalkBack + Chrome (Android). We also
              conduct automated accessibility testing using axe-core during our development process.
            </p>
          </div>

          {/* What we support */}
          <div>
            <h2 className="text-[#0f2a4a] font-black text-2xl mb-5">Accessibility Features</h2>
            <ul className="space-y-3">
              {supported.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f4a65d] flex-shrink-0 mt-0.5" />
                  <span className="text-[#566677] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Known limitations */}
          <div>
            <h2 className="text-[#0f2a4a] font-black text-2xl mb-5">Known Limitations</h2>
            <p className="text-[#566677] text-sm leading-relaxed mb-5">
              Despite our efforts, some content may not fully conform to WCAG 2.1 AA. The following
              known limitations are being actively addressed:
            </p>
            <div className="space-y-4">
              {limitations.map((item) => (
                <div key={item.area} className="bg-white border border-[#e8edf2] rounded-xl p-5 flex gap-4">
                  <AlertCircle className="w-5 h-5 text-[#f4a65d] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0f2a4a] font-bold text-sm mb-1">
                      {item.area}{' '}
                      <span className="text-[#94aabb] font-normal">({item.page})</span>
                    </p>
                    <p className="text-[#566677] text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feedback & contact */}
          <div>
            <h2 className="text-[#0f2a4a] font-black text-2xl mb-4">Request Accessible Content</h2>
            <p className="text-[#566677] text-sm leading-relaxed mb-6">
              If you experience difficulty accessing any content on our website, or if you need
              information in an alternative accessible format (such as large print, plain text, or
              audio), please contact us. We aim to respond to all accessibility requests within
              five business days.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#f0f4f8] border border-[#e8edf2] rounded-xl p-6 flex gap-4">
                <Mail className="w-5 h-5 text-[#f4a65d] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#0f2a4a] font-bold text-sm mb-1">Email</p>
                  <a href="mailto:accessibility@cosasco.com" className="text-[#566677] text-sm hover:text-[#f4a65d] transition-colors">
                    accessibility@cosasco.com
                  </a>
                  <p className="text-[#94aabb] text-xs mt-1">Response within 5 business days</p>
                </div>
              </div>
              <div className="bg-[#f0f4f8] border border-[#e8edf2] rounded-xl p-6 flex gap-4">
                <Phone className="w-5 h-5 text-[#f4a65d] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#0f2a4a] font-bold text-sm mb-1">Phone</p>
                  <a href="tel:+18006356898" className="text-[#566677] text-sm hover:text-[#f4a65d] transition-colors">
                    +1-800-635-6898 (Toll Free)
                  </a>
                  <p className="text-[#94aabb] text-xs mt-1">Mon–Fri, 7:30 AM–5:00 PM PT</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enforcement */}
          <div>
            <h2 className="text-[#0f2a4a] font-black text-2xl mb-4">Enforcement Procedure</h2>
            <p className="text-[#566677] text-sm leading-relaxed">
              If you are not satisfied with our response to your accessibility request, you may contact the relevant regulatory body in your jurisdiction. In the United States, you may file a complaint with the U.S. Department of Justice under the Americans with Disabilities Act (ADA). In the UK or EEA, you may contact your national equality or human rights body.
            </p>
          </div>

          <div className="border-t border-[#e8edf2] pt-8">
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy" className="text-[#0f2a4a] text-sm font-semibold hover:text-[#f4a65d] transition-colors">
                Privacy Policy →
              </Link>
              <Link href="/terms" className="text-[#0f2a4a] text-sm font-semibold hover:text-[#f4a65d] transition-colors">
                Terms of Use →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
