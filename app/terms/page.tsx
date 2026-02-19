import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use | Cosasco',
  description:
    'Terms and conditions governing use of the Cosasco website, software portals, and digital services.',
}

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: `By accessing or using the Cosasco Systems, Inc. website (cosasco.com) or any associated web portals, applications, or digital services (collectively, "the Services"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please do not use the Services.

These Terms apply to all visitors, users, and others who access the Services. Cosasco reserves the right to update or modify these Terms at any time. Your continued use of the Services after any changes constitutes acceptance of the updated Terms.

These Terms were last updated on February 1, 2026.`,
  },
  {
    id: 'permitted-use',
    title: '2. Permitted Use',
    content: `The Services are intended for professional and commercial use by individuals and organizations involved in corrosion management, pipeline integrity, oil and gas operations, petrochemical processing, and related industries.

You may use the Services to:
- Browse and download product information, datasheets, and technical resources
- Submit contact, support, and RMA requests
- Access the SAFR web portal (authorized users only)
- Register for webinars and events

You may not use the Services to:
- Reverse-engineer, copy, or redistribute Cosasco software or proprietary content
- Transmit harmful, offensive, or illegal material
- Attempt to gain unauthorized access to any Cosasco systems or accounts
- Use automated scraping tools to harvest data from the website
- Impersonate Cosasco or any Cosasco employee or representative`,
  },
  {
    id: 'ip',
    title: '3. Intellectual Property',
    content: `All content on the Services — including but not limited to text, graphics, photographs, product designs, software, technical documentation, white papers, case studies, and the Cosasco brand — is owned by or licensed to Cosasco Systems, Inc. and is protected by copyright, trademark, trade secret, and other intellectual property laws.

The Cosasco name, logo, and product names are trademarks or registered trademarks of Cosasco Systems, Inc. or its affiliates. You may not use these marks without prior written permission.

You may download or print individual pages for your own professional reference, provided you do not remove copyright notices or modify the content. Redistribution, republication, or commercial use requires written authorization from Cosasco.

Cosasco is a subsidiary of Halma plc. Halma and related trademarks are owned by Halma plc.`,
  },
  {
    id: 'accounts',
    title: '4. Accounts and Portal Access',
    content: `Access to the SAFR web portal, partner payment portal, and other restricted areas requires an authorized account. You are responsible for:

- Maintaining the confidentiality of your account credentials
- All activity that occurs under your account
- Notifying Cosasco immediately at support@cosasco.com if you suspect unauthorized access

Cosasco reserves the right to suspend or terminate accounts that violate these Terms or that have been inactive for an extended period. Account access is non-transferable.`,
  },
  {
    id: 'product-info',
    title: '5. Product Information and Accuracy',
    content: `Cosasco makes reasonable efforts to ensure that product specifications, pricing, and availability information on the Services is accurate. However:

- Specifications and designs may change without notice
- Pricing displayed online is indicative only; confirmed pricing is provided through formal quotations
- Product availability is subject to change
- Technical data should be confirmed with a Cosasco engineer before making engineering decisions

Nothing on this website constitutes a binding offer or contract for sale. All orders are subject to Cosasco's standard Terms and Conditions of Sale, available upon request.`,
  },
  {
    id: 'third-party',
    title: '6. Third-Party Links and Services',
    content: `The Services may contain links to third-party websites or resources. These links are provided for your convenience only. Cosasco does not endorse, control, or take responsibility for the content, privacy practices, or availability of third-party sites.

Your interactions with third-party sites are subject to their terms and privacy policies. Cosasco is not responsible for any loss or damage arising from your use of third-party services.

References to third-party standards, certifications (such as AMPP, ISO, API), or organizations are for informational purposes and do not constitute an endorsement by those organizations of Cosasco products.`,
  },
  {
    id: 'disclaimer',
    title: '7. Disclaimer of Warranties',
    content: `THE SERVICES AND ALL CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, OR NON-INFRINGEMENT.

COSASCO DOES NOT WARRANT THAT:
- THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE
- DEFECTS WILL BE CORRECTED
- THE SERVICES OR THE SERVERS HOSTING THEM ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS

Some jurisdictions do not allow the exclusion of implied warranties, so the above may not apply to you.`,
  },
  {
    id: 'liability',
    title: '8. Limitation of Liability',
    content: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, COSASCO SYSTEMS, INC. AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, BUSINESS, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICES.

IN NO EVENT SHALL COSASCO'S TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO THE SERVICES EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID TO COSASCO IN THE TWELVE MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED US DOLLARS ($100).

Some jurisdictions do not allow limitations on liability for certain types of damages, so the above limitations may not apply in full.`,
  },
  {
    id: 'indemnification',
    title: '9. Indemnification',
    content: `You agree to indemnify, defend, and hold harmless Cosasco Systems, Inc. and its affiliates, officers, employees, agents, and licensors from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or in any way connected with your access to or use of the Services, your violation of these Terms, or your violation of any rights of another party.`,
  },
  {
    id: 'governing-law',
    title: '10. Governing Law and Disputes',
    content: `These Terms and any dispute arising from your use of the Services shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.

Any legal action or proceeding related to these Terms shall be brought exclusively in the state or federal courts located in Los Angeles County, California. You consent to personal jurisdiction in those courts.

For EEA and UK users, nothing in these Terms affects any statutory rights you may have under applicable consumer protection or data protection law.`,
  },
  {
    id: 'termination',
    title: '11. Termination',
    content: `Cosasco reserves the right to suspend or terminate your access to the Services at any time, with or without notice, for conduct that Cosasco determines violates these Terms or is harmful to other users, Cosasco, or third parties, or for any other reason in Cosasco's sole discretion.

Sections 3, 7, 8, 9, 10, and 12 shall survive any termination of these Terms.`,
  },
  {
    id: 'contact',
    title: '12. Contact',
    content: `If you have questions about these Terms of Use, please contact:

Cosasco Systems, Inc.
11841 Smith Avenue
Santa Fe Springs, CA 90670
United States

Email: legal@cosasco.com
Phone: +1-800-635-6898`,
  },
]

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-[#0f2a4a] pt-[72px] pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#f4a65d] text-xs font-bold uppercase tracking-[0.1em] mb-4">Legal</p>
          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight mb-4">
            Terms of Use
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
                These Terms of Use govern your access to and use of Cosasco websites and digital
                services. By using our Services, you agree to these Terms. Questions?
                Contact <a href="mailto:legal@cosasco.com" className="text-[#f4a65d] hover:underline">legal@cosasco.com</a>.
              </p>
            </div>

            {sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-[#0f2a4a] font-black text-xl mb-4">{section.title}</h2>
                <div className="text-[#566677] text-sm leading-relaxed space-y-3">
                  {section.content.split('\n\n').map((para, i) => {
                    if (para.startsWith('- ') || para.includes('\n- ')) {
                      const lines = para.split('\n')
                      return (
                        <div key={i} className="space-y-1">
                          {lines.map((line, j) =>
                            line.startsWith('- ') ? (
                              <div key={j} className="flex items-start gap-2">
                                <span className="text-[#f4a65d] font-bold flex-shrink-0 mt-0.5">—</span>
                                <span>{line.slice(2)}</span>
                              </div>
                            ) : line ? (
                              <p key={j}>{line}</p>
                            ) : null
                          )}
                        </div>
                      )
                    }
                    if (para === para.toUpperCase() && para.length > 20) {
                      return (
                        <p key={i} className="text-[#0f2a4a] font-bold text-xs uppercase tracking-wide bg-[#f0f4f8] border border-[#e8edf2] rounded-lg p-4 leading-relaxed">
                          {para}
                        </p>
                      )
                    }
                    return <p key={i}>{para}</p>
                  })}
                </div>
              </div>
            ))}

            <div className="border-t border-[#e8edf2] pt-8">
              <div className="flex flex-wrap gap-4">
                <Link href="/privacy" className="text-[#0f2a4a] text-sm font-semibold hover:text-[#f4a65d] transition-colors">
                  Privacy Policy →
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
