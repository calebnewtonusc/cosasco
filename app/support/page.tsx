'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  MessageSquare,
  Phone,
  FileText,
  ChevronDown,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  AlertTriangle,
  CheckCircle,
  Upload,
} from 'lucide-react';

// ─── FAQ Data ──────────────────────────────────────────────────────────────────

const faqCategories = ['General', 'Products & Technical', 'Installation', 'Service & Warranty'] as const;
type FaqCategory = (typeof faqCategories)[number];

const faqs: Record<FaqCategory, { question: string; answer: string }[]> = {
  General: [
    {
      question: 'What industries does Cosasco serve?',
      answer:
        'Cosasco serves six primary industries: Oil & Gas (upstream, midstream, and downstream), Petrochemical and refining, Water Treatment and desalination, Chemical Processing, Pulp & Paper, and Utilities including power generation and cooling water systems. Our products are engineered specifically for the harsh operating conditions found across these sectors.',
    },
    {
      question: 'What is your standard lead time for orders?',
      answer:
        'Standard stock items typically ship within 3–5 business days from our Santa Fe Springs, CA facility. Configured or custom products carry lead times of 2–6 weeks depending on complexity. Expedited manufacturing is available for critical applications — contact our sales team to discuss your timeline.',
    },
    {
      question: 'Does Cosasco offer product or application training?',
      answer:
        'Yes. Cosasco provides both on-site and remote training programs covering corrosion monitoring fundamentals, product installation, data acquisition, and corrosion data interpretation. Training can be tailored to your specific products and applications. Contact us to schedule a session.',
    },
    {
      question: 'Are Cosasco products available globally?',
      answer:
        'Cosasco products are available in over 50 countries through our network of authorized distributors and regional offices in North America, Europe, the Middle East, and Asia Pacific. Contact our sales team or find your nearest distributor on our contact page.',
    },
  ],
  'Products & Technical': [
    {
      question: 'What is the difference between ER and LPR probes?',
      answer:
        'Electrical Resistance (ER) probes measure cumulative metal loss over time by tracking the increase in electrical resistance of a sensing element as it corrodes. Linear Polarization Resistance (LPR) probes measure instantaneous corrosion rate by applying a small electrochemical perturbation and measuring the resulting current. ER probes work in virtually any environment including non-conductive media, while LPR probes require an electrically conductive electrolyte and provide real-time rate data. Many programs use both types together.',
    },
    {
      question: 'Can probes be retrofitted to existing access fittings?',
      answer:
        'In most cases, yes. Cosasco offers a wide range of probe element configurations designed to fit standard 1-inch and 2-inch access fitting threads from most manufacturers. Our application engineers can review your existing fitting specifications and recommend compatible probe assemblies without requiring a process shutdown for fitting replacement.',
    },
    {
      question: 'What certifications do your products carry?',
      answer:
        'Cosasco products are manufactured under ISO 9001:2015 quality management systems. Relevant products carry ATEX and IECEx certifications for use in hazardous area classifications (Zone 1/Zone 2), UL listing for applicable electrical equipment, and NACE compliance for materials and test methods. Material test reports and certification documents are available upon request.',
    },
    {
      question: 'What are maximum operating conditions for your probes and fittings?',
      answer:
        'Maximum operating conditions vary by product line. Our standard access fittings are rated to 6,000 psi (414 bar) working pressure and 400°F (204°C). High-pressure configurations are available up to 15,000 psi. Probe element selection is application-specific based on process chemistry, temperature, and corrosivity. Contact our engineering team for guidance on your specific conditions.',
    },
  ],
  Installation: [
    {
      question: 'Does Cosasco offer installation services?',
      answer:
        'Yes. Cosasco field service engineers are available for on-site installation, commissioning, and startup support globally. We recommend engaging our field team for complex multi-point monitoring programs, FieldCom wireless network installations, and any intrusive installations at elevated pressure. Request a field service engagement through our technical support form.',
    },
    {
      question: 'What training is available for installation personnel?',
      answer:
        'We provide hands-on installation training at our Santa Fe Springs facility and on-site at customer locations. Training covers safe hot-tap and cold-tap procedures, retrieval tool operation, probe installation and retrieval under pressure, FieldCom transmitter configuration, and data logger setup. Training completion certificates are issued upon request.',
    },
    {
      question: 'What documentation is provided with equipment?',
      answer:
        'All Cosasco products ship with a product datasheet, installation and operating manual, and applicable material certifications. Access fittings include pressure test documentation. Instruments include calibration certificates. Full engineering drawing packages and ATEX documentation are available for certified products. SDVS (Supplier Documentation Verification Sets) are available for major project deliveries.',
    },
  ],
  'Service & Warranty': [
    {
      question: 'What is the standard warranty period?',
      answer:
        'Cosasco products carry a standard 12-month warranty against defects in materials and workmanship from the date of shipment. Extended warranty options are available for data acquisition equipment and wireless systems. Warranty claims require a completed Return Material Authorization (RMA) form and are subject to factory inspection.',
    },
    {
      question: 'How do I return a product for service or warranty evaluation?',
      answer:
        'To return a product, submit a Technical Request using the form below and select the appropriate issue type. Our team will issue an RMA number and shipping instructions within one business day. Products must be returned with an RMA number clearly marked on the outer packaging. Unauthorized returns without an RMA number may be refused.',
    },
    {
      question: 'How do I obtain calibration certificates for instruments?',
      answer:
        'Calibration certificates are issued at the time of manufacture and shipped with each instrument. If you require a replacement certificate, contact our service team with the instrument serial number and model number. Re-calibration services are available at our Santa Fe Springs facility — instruments are returned with updated NIST-traceable calibration documentation.',
    },
  ],
};

// ─── FAQ Accordion Item ────────────────────────────────────────────────────────

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card" style={{ marginBottom: '0.75rem' }}>
      <button
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-[#0d1f3c] text-base leading-snug">{question}</span>
        <span
          className="shrink-0 transition-transform duration-200"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', color: '#e05000' }}
        >
          <ChevronDown size={20} />
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? '600px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        <div className="px-5 pb-5">
          <div className="divider mb-4" />
          <p className="text-[#4a5e72] text-sm leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SupportPage() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>('General');
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-white">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden grid-bg"
        style={{ background: '#0d1f3c', paddingTop: '7rem', paddingBottom: '0' }}
      >
        <div className="cx" style={{ paddingBottom: '4rem' }}>
          <p className="eyebrow mb-3">Support Center</p>
          <h1
            className="text-white font-extrabold tracking-tight leading-tight mb-4"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}
          >
            Customer Support
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Our engineering team is ready to help. Browse our knowledge base, speak with an
            application engineer, or submit a formal technical request.
          </p>
        </div>

        {/* Emergency Banner */}
        <div
          style={{
            background: 'linear-gradient(90deg, #b83a00 0%, #e05000 50%, #b83a00 100%)',
          }}
        >
          <div className="cx py-3 flex flex-wrap items-center gap-3">
            <AlertTriangle size={18} className="text-white shrink-0" />
            <span className="text-white font-semibold text-sm">
              Critical system failure?
            </span>
            <span className="text-white/80 text-sm">
              Call our 24/7 emergency line immediately:
            </span>
            <a
              href="tel:+15629490123"
              className="text-white font-bold text-sm underline underline-offset-2 hover:no-underline"
            >
              +1 (562) 949-0123
            </a>
          </div>
        </div>
      </section>

      {/* ── PATHWAY CARDS ────────────────────────────────────────────────────── */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="cx">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Browse FAQ */}
            <div className="card p-8 flex flex-col items-start">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ background: '#fde8d8' }}
              >
                <MessageSquare size={26} style={{ color: '#e05000' }} />
              </div>
              <h3 className="text-[#0d1f3c] font-bold text-xl mb-2">Browse FAQ</h3>
              <p className="text-[#4a5e72] text-sm leading-relaxed mb-6 flex-grow">
                Find answers to common questions about products, installation, and service in our
                organized knowledge base.
              </p>
              <a
                href="#faq"
                className="btn btn-outline-navy text-sm"
              >
                Go to FAQ <ChevronRight size={16} />
              </a>
            </div>

            {/* Contact an Engineer */}
            <div className="card p-8 flex flex-col items-start" style={{ borderColor: '#e05000', borderTopWidth: '3px' }}>
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ background: '#e0e8f4' }}
              >
                <Phone size={26} style={{ color: '#0d1f3c' }} />
              </div>
              <h3 className="text-[#0d1f3c] font-bold text-xl mb-2">Contact an Engineer</h3>
              <p className="text-[#4a5e72] text-sm leading-relaxed mb-6 flex-grow">
                Speak directly with a Cosasco application engineer about your specific process
                conditions and monitoring requirements.
              </p>
              <a href="tel:+15629490123" className="btn btn-primary text-sm">
                Call Now <Phone size={15} />
              </a>
            </div>

            {/* Submit a Request */}
            <div className="card p-8 flex flex-col items-start">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ background: '#eef2f7' }}
              >
                <FileText size={26} style={{ color: '#334150' }} />
              </div>
              <h3 className="text-[#0d1f3c] font-bold text-xl mb-2">Submit a Request</h3>
              <p className="text-[#4a5e72] text-sm leading-relaxed mb-6 flex-grow">
                Log a formal technical support or warranty claim. Our team will respond within
                the timeframes specified by your priority level.
              </p>
              <a href="#support-form" className="btn btn-outline-navy text-sm">
                Open Form <FileText size={15} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ──────────────────────────────────────────────────────── */}
      <section id="faq" className="section" style={{ background: '#f7f9fc' }}>
        <div className="cx">
          <div className="text-center mb-12">
            <p className="eyebrow mb-2">Knowledge Base</p>
            <h2
              className="font-extrabold tracking-tight text-[#0d1f3c] mb-4"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-[#637c95] text-base max-w-xl mx-auto">
              Select a category below to find answers about products, installation, and service.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-150"
                style={
                  activeCategory === cat
                    ? { background: '#0d1f3c', color: '#fff' }
                    : { background: '#fff', color: '#4a5e72', border: '1px solid #dde4ef' }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="max-w-3xl mx-auto">
            {faqs[activeCategory].map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SUPPORT FORM ─────────────────────────────────────────────────────── */}
      <section id="support-form" className="section" style={{ background: '#ffffff' }}>
        <div className="cx">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Form */}
            <div className="lg:col-span-2">
              <p className="eyebrow mb-2">Technical Request</p>
              <h2
                className="font-extrabold tracking-tight text-[#0d1f3c] mb-8"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              >
                Submit a Technical Request
              </h2>

              {formSubmitted ? (
                <div
                  className="flex flex-col items-center justify-center text-center rounded-xl p-16 gap-4"
                  style={{ background: '#f7f9fc', border: '1px solid #dde4ef' }}
                >
                  <CheckCircle size={56} style={{ color: '#16a34a' }} />
                  <h3 className="text-[#0d1f3c] font-bold text-xl">Request Submitted</h3>
                  <p className="text-[#637c95] text-sm max-w-sm">
                    Your technical support request has been received. You will receive a confirmation
                    email shortly. Our team will respond within the timeframe corresponding to your
                    selected priority level.
                  </p>
                  <button
                    className="btn btn-outline-navy mt-4 text-sm"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form
                  className="space-y-5"
                  onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#334150] mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-md px-4 py-3 text-sm text-[#1a2535]"
                        style={{ border: '1px solid #dde4ef', background: '#f7f9fc', outline: 'none' }}
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#334150] mb-1.5">Company *</label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-md px-4 py-3 text-sm text-[#1a2535]"
                        style={{ border: '1px solid #dde4ef', background: '#f7f9fc', outline: 'none' }}
                        placeholder="Acme Refining Ltd."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#334150] mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="w-full rounded-md px-4 py-3 text-sm text-[#1a2535]"
                        style={{ border: '1px solid #dde4ef', background: '#f7f9fc', outline: 'none' }}
                        placeholder="jsmith@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#334150] mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full rounded-md px-4 py-3 text-sm text-[#1a2535]"
                        style={{ border: '1px solid #dde4ef', background: '#f7f9fc', outline: 'none' }}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#334150] mb-1.5">Product / System in Question *</label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-md px-4 py-3 text-sm text-[#1a2535]"
                      style={{ border: '1px solid #dde4ef', background: '#f7f9fc', outline: 'none' }}
                      placeholder="e.g. ER-S1 Probe, 2&quot; Access Fitting, FieldCom Transmitter"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#334150] mb-1.5">Application Type *</label>
                    <select
                      required
                      className="w-full rounded-md px-4 py-3 text-sm text-[#1a2535]"
                      style={{ border: '1px solid #dde4ef', background: '#f7f9fc', outline: 'none' }}
                    >
                      <option value="">Select an application...</option>
                      <option>Oil &amp; Gas</option>
                      <option>Petrochemical</option>
                      <option>Water Treatment</option>
                      <option>Chemical</option>
                      <option>Pulp &amp; Paper</option>
                      <option>Utilities</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#334150] mb-1.5">Issue Description *</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full rounded-md px-4 py-3 text-sm text-[#1a2535] resize-vertical"
                      style={{ border: '1px solid #dde4ef', background: '#f7f9fc', outline: 'none' }}
                      placeholder="Describe the issue in detail, including any error messages, operating conditions, and what troubleshooting steps you have already taken..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#334150] mb-1.5">Priority Level *</label>
                    <select
                      required
                      className="w-full rounded-md px-4 py-3 text-sm text-[#1a2535]"
                      style={{ border: '1px solid #dde4ef', background: '#f7f9fc', outline: 'none' }}
                    >
                      <option value="">Select priority...</option>
                      <option>Critical — System Down</option>
                      <option>High — Degraded Operation</option>
                      <option>Normal — Planning / Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#334150] mb-1.5">Upload Supporting Documents</label>
                    <label
                      className="flex flex-col items-center justify-center gap-2 w-full rounded-md py-8 cursor-pointer transition-colors"
                      style={{ border: '2px dashed #dde4ef', background: '#f7f9fc' }}
                    >
                      <Upload size={22} style={{ color: '#637c95' }} />
                      <span className="text-sm text-[#637c95]">
                        Click to upload or drag files here
                      </span>
                      <span className="text-xs text-[#b8c8da]">PDF, PNG, JPG up to 20MB</span>
                      <input type="file" className="hidden" multiple accept=".pdf,.png,.jpg,.jpeg" />
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary w-full justify-center text-base">
                    Submit Technical Request <FileText size={17} />
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">

              {/* Response Times */}
              <div className="card p-6">
                <h3 className="text-[#0d1f3c] font-bold text-base mb-4 flex items-center gap-2">
                  <Clock size={18} style={{ color: '#e05000' }} />
                  What to Expect
                </h3>
                <p className="text-[#637c95] text-xs mb-5 leading-relaxed">
                  Response times are measured from the time your request is received during business hours
                  (Monday–Friday, 7am–5pm PT).
                </p>
                <div className="space-y-3">
                  {[
                    { label: 'Critical — System Down', time: '2 hours', color: '#b83a00', bg: '#fde8d8' },
                    { label: 'High — Degraded Operation', time: '24 hours', color: '#1a3d6e', bg: '#e0e8f4' },
                    { label: 'Normal — Planning / Inquiry', time: '3 business days', color: '#334150', bg: '#eef2f7' },
                  ].map((p) => (
                    <div
                      key={p.label}
                      className="flex items-center justify-between rounded-lg p-3"
                      style={{ background: p.bg }}
                    >
                      <span className="text-xs font-semibold" style={{ color: p.color }}>{p.label}</span>
                      <span className="text-xs font-bold" style={{ color: p.color }}>{p.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="card p-6">
                <h3 className="text-[#0d1f3c] font-bold text-base mb-4">Direct Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Phone size={16} style={{ color: '#e05000', marginTop: '2px' }} className="shrink-0" />
                    <div>
                      <p className="text-xs text-[#637c95] font-medium">Phone</p>
                      <a href="tel:+15629490123" className="text-sm font-semibold text-[#0d1f3c] hover:text-[#e05000] transition-colors">
                        +1 (562) 949-0123
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={16} style={{ color: '#e05000', marginTop: '2px' }} className="shrink-0" />
                    <div>
                      <p className="text-xs text-[#637c95] font-medium">Email</p>
                      <a href="mailto:support@cosasco.com" className="text-sm font-semibold text-[#0d1f3c] hover:text-[#e05000] transition-colors">
                        support@cosasco.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={16} style={{ color: '#e05000', marginTop: '2px' }} className="shrink-0" />
                    <div>
                      <p className="text-xs text-[#637c95] font-medium">Headquarters</p>
                      <p className="text-sm font-semibold text-[#0d1f3c]">
                        11401 Beach Street<br />Santa Fe Springs, CA 90670
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resources link */}
              <div
                className="rounded-xl p-6"
                style={{ background: '#0d1f3c' }}
              >
                <h3 className="text-white font-bold text-base mb-2">Looking for documentation?</h3>
                <p className="text-white/60 text-xs leading-relaxed mb-4">
                  Download datasheets, installation guides, and white papers from our technical resources library.
                </p>
                <Link href="/resources" className="btn btn-outline-white text-sm w-full justify-center">
                  Browse Resources
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
