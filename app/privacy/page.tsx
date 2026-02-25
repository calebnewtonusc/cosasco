import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Cosasco',
  description:
    'Learn how Cosasco collects, uses, and protects your personal information. Our privacy policy covers data collection, GDPR rights, cookies, and how to contact us.',
}

const sections = [
  {
    id: 'overview',
    title: '1. Overview',
    content: `Rohrback Cosasco Systems, Inc. ("Cosasco," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website at cosasco.com, use our web applications, or interact with us in connection with our products and services.

Please read this policy carefully. By using our website or submitting information to us, you agree to the terms described here. If you do not agree, please do not use our services.

This policy was last updated on February 1, 2026 and applies to all Cosasco websites, web-based software portals, and digital services.`,
  },
  {
    id: 'data-collected',
    title: '2. Information We Collect',
    content: `We collect information in the following ways:

**Information you provide directly**
When you submit a contact form, request a quote, submit an RMA, or register for a webinar, we may collect: your name, job title, company name, business email address, phone number, country and region, industry sector, and the content of your message or inquiry.

**Information collected automatically**
When you visit our website, we may automatically collect: IP address (anonymized where required by law), browser type and version, operating system, referring URLs, pages visited and time spent, and general geographic location (country/region level only). This data is collected via server logs and analytics tools and is used in aggregate form only.

**Cookies and similar technologies**
We use cookies to improve website functionality and understand usage patterns. See Section 7 (Cookies) for full details.

**Information from third parties**
We may receive information about you from partners, distributors, or event organizers when you express interest in Cosasco products through those channels.`,
  },
  {
    id: 'use',
    title: '3. How We Use Your Information',
    content: `We use the information we collect to:

- Respond to your inquiries and provide customer support
- Process RMA requests, quotes, and purchase orders
- Send you technical documentation, product updates, or newsletters you have requested
- Administer your access to SAFR or other web portals
- Improve our website, products, and services
- Comply with legal obligations and enforce our agreements
- Prevent fraud and maintain the security of our systems

We do not sell, rent, or trade your personal information to third parties for their own marketing purposes.`,
  },
  {
    id: 'legal-basis',
    title: '4. Legal Basis for Processing (GDPR)',
    content: `If you are located in the European Economic Area (EEA) or United Kingdom, we process your personal data under one of the following legal bases:

**Contract performance** — When processing is necessary to fulfill a contract with you or to take steps at your request before entering into a contract (e.g., responding to a quote request or processing an RMA).

**Legitimate interests** — When processing is necessary for our legitimate business interests, such as improving our products, conducting analytics, or communicating with existing customers about related products — provided those interests are not overridden by your rights.

**Consent** — When you have given explicit consent, such as subscribing to our newsletter or accepting non-essential cookies. You may withdraw consent at any time.

**Legal obligation** — When we are required to process data to comply with applicable law.`,
  },
  {
    id: 'sharing',
    title: '5. How We Share Your Information',
    content: `We may share your personal information with:

**Service providers** — Third-party vendors who help us operate our website and business, including cloud hosting providers, email delivery services, and analytics platforms. These providers are contractually bound to protect your data and may only use it to perform services on our behalf.

**Halma plc** — Cosasco is a subsidiary of Halma plc, a global group of life-saving technology companies. We may share data within the Halma group for business operations and group-level reporting, subject to appropriate data transfer safeguards.

**Regional distributors and authorized representatives** — If you use our "Find a Rep" form, your inquiry may be shared with the authorized Cosasco representative in your region to facilitate a response.

**Legal requirements** — We may disclose your information when required by law, court order, or to protect the rights and safety of Cosasco, our customers, or the public.

We do not share personal data with third parties for advertising purposes.`,
  },
  {
    id: 'international',
    title: '6. International Data Transfers',
    content: `Cosasco operates globally with offices in the United States, United Kingdom, UAE, Malaysia, and Australia. Your information may be transferred to and processed in countries other than your own, including the United States where our primary servers are located.

For transfers of personal data from the EEA or UK to countries that have not received an adequacy decision from the European Commission, we rely on Standard Contractual Clauses (SCCs) approved by the European Commission, or other appropriate safeguards as permitted by applicable law.

By using our website and submitting information to us, you acknowledge that your information may be transferred internationally.`,
  },
  {
    id: 'cookies',
    title: '7. Cookies',
    content: `Our website uses the following types of cookies:

**Essential cookies** — Required for the website to function. These cannot be disabled. They include session management cookies, security tokens, and load balancing cookies.

**Analytics cookies** — We use aggregated analytics to understand how visitors interact with our site, which pages are most popular, and how to improve navigation. Analytics data is anonymized and not linked to individual users. You can opt out of analytics cookies via our cookie banner.

**Functional cookies** — Used to remember your preferences (such as language or region) between visits.

We do not use cookies for targeted advertising or cross-site tracking.

You can manage cookie preferences through our cookie banner, which appears on your first visit. You can also manage cookies through your browser settings. Note that disabling essential cookies will impair site functionality.`,
  },
  {
    id: 'retention',
    title: '8. Data Retention',
    content: `We retain personal data only as long as necessary for the purposes described in this policy or as required by law:

- **Contact and inquiry data**: Retained for up to 3 years after your last interaction with us, or longer if required for ongoing contract performance.
- **RMA and order records**: Retained for 7 years to comply with accounting and legal record-keeping requirements.
- **Newsletter subscribers**: Retained until you unsubscribe or request deletion.
- **Web analytics data**: Retained in aggregate, anonymized form only.
- **Employee and job applicant data**: Governed by our separate HR privacy notice.

After the applicable retention period, data is securely deleted or anonymized.`,
  },
  {
    id: 'rights',
    title: '9. Your Privacy Rights',
    content: `Depending on your location, you may have the following rights regarding your personal data:

**Right to access** — Request a copy of the personal data we hold about you.

**Right to rectification** — Request correction of inaccurate or incomplete data.

**Right to erasure** — Request deletion of your personal data where we no longer have a lawful basis to retain it.

**Right to restrict processing** — Request that we limit how we use your data in certain circumstances.

**Right to data portability** — Receive your data in a structured, machine-readable format.

**Right to object** — Object to processing based on legitimate interests or for direct marketing.

**Right to withdraw consent** — If processing is based on consent, withdraw it at any time without affecting the lawfulness of prior processing.

**California residents (CCPA/CPRA)** — You have the right to know what personal information we collect and how it is used, the right to delete your personal information, the right to opt out of the sale of personal information (note: we do not sell personal information), and the right to non-discrimination for exercising your privacy rights.

To exercise any of these rights, contact us at privacy@cosasco.com or use the details in Section 12. We will respond within 30 days (GDPR) or 45 days (CCPA) of receiving a verifiable request.`,
  },
  {
    id: 'security',
    title: '10. Security',
    content: `We implement industry-standard technical and organizational measures to protect your personal data against unauthorized access, disclosure, alteration, and destruction. These measures include:

- Encryption of data in transit (TLS 1.2+) and at rest
- Access controls limiting data access to authorized personnel
- Regular security assessments and penetration testing
- Incident response procedures

No system is completely secure. If you believe your data has been compromised, please contact us immediately at security@cosasco.com.`,
  },
  {
    id: 'children',
    title: '11. Children\'s Privacy',
    content: `Our website and services are directed to business professionals and are not intended for children under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected data from a child, please contact us at privacy@cosasco.com and we will promptly delete it.`,
  },
  {
    id: 'contact',
    title: '12. Contact & Data Controller',
    content: `The data controller for personal information collected through this website is:

**Rohrback Cosasco Systems, Inc.**
11841 Smith Avenue
Santa Fe Springs, CA 90670
United States

Privacy enquiries: privacy@cosasco.com
General: info@cosasco.com
Phone: +1-800-635-6898

For EEA/UK data subjects, our EU representative can be contacted at: eurepresentative@cosasco.com

If you are not satisfied with our response to a privacy concern, you have the right to lodge a complaint with your local data protection authority.`,
  },
  {
    id: 'changes',
    title: '13. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other business reasons. When we make material changes, we will update the "Last Updated" date at the top of this page. For significant changes, we may provide additional notice such as an email notification or a prominent notice on our website.

We encourage you to review this policy periodically. Continued use of our website after changes are posted constitutes your acceptance of the updated policy.`,
  },
]

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-[#0f2a4a] pt-[72px] pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#f4a65d] text-xs font-bold uppercase tracking-[0.1em] mb-4">Legal</p>
          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#94aabb] text-lg leading-relaxed">
            Last updated: February 1, 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:grid lg:grid-cols-4 lg:gap-12">
          {/* Sticky TOC */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 bg-[#f0f4f8] border border-[#e8edf2] rounded-xl p-5">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#566677] mb-4">Contents</p>
              <nav className="space-y-1.5">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block text-xs text-[#566677] hover:text-[#0f2a4a] transition-colors leading-snug"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <article className="lg:col-span-3 space-y-12 mt-8 lg:mt-0">
            <div className="bg-[#f0f4f8] border border-[#e8edf2] rounded-xl p-6">
              <p className="text-[#566677] text-sm leading-relaxed">
                This Privacy Policy applies to Rohrback Cosasco Systems, Inc. and its global subsidiaries and
                affiliates. Cosasco is a member of the Halma plc group of companies. For questions,
                contact <a href="mailto:privacy@cosasco.com" className="text-[#f4a65d] hover:underline">privacy@cosasco.com</a>.
              </p>
            </div>

            {sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-[#0f2a4a] font-black text-xl mb-4">{section.title}</h2>
                <div className="text-[#566677] text-sm leading-relaxed space-y-3">
                  {section.content.split('\n\n').map((para) => {
                    if (para.startsWith('**') && para.includes('**\n')) {
                      const lines = para.split('\n')
                      return (
                        <div key={para.slice(0, 30)}>
                          {lines.map((line, j) => {
                            if (line.startsWith('**') && line.endsWith('**')) {
                              return <p key={j} className="font-bold text-[#0f2a4a] mt-3 mb-1">{line.replace(/\*\*/g, '')}</p>
                            }
                            return line ? <p key={j}>{line}</p> : null
                          })}
                        </div>
                      )
                    }
                    if (para.includes('**')) {
                      const parts = para.split(/\*\*(.*?)\*\*/g)
                      return (
                        <p key={para.slice(0, 30)}>
                          {parts.map((part, j) =>
                            j % 2 === 1 ? (
                              <strong key={j} className="font-bold text-[#0f2a4a]">{part}</strong>
                            ) : (
                              part
                            )
                          )}
                        </p>
                      )
                    }
                    if (para.startsWith('- ')) {
                      const items = para.split('\n').filter((l) => l.startsWith('- '))
                      return (
                        <ul key={para.slice(0, 30)} className="space-y-1 pl-4">
                          {items.map((item, j) => (
                            <li key={j} className="list-disc list-outside">{item.slice(2)}</li>
                          ))}
                        </ul>
                      )
                    }
                    return <p key={para.slice(0, 30)}>{para}</p>
                  })}
                </div>
              </div>
            ))}

            <div className="border-t border-[#e8edf2] pt-8">
              <p className="text-[#566677] text-sm">
                For a printable version of this policy or to submit a data subject request,
                contact <a href="mailto:privacy@cosasco.com" className="text-[#f4a65d] hover:underline">privacy@cosasco.com</a>.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Link href="/terms" className="text-[#0f2a4a] text-sm font-semibold hover:text-[#f4a65d] transition-colors">
                  Terms of Use →
                </Link>
                <Link href="/accessibility" className="text-[#0f2a4a] text-sm font-semibold hover:text-[#f4a65d] transition-colors">
                  Accessibility Statement →
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
