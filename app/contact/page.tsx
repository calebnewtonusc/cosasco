'use client';

import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Globe,
  ChevronRight,
} from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const regionalOffices = [
  {
    region: 'North America',
    icon: <Globe size={20} />,
    offices: [
      {
        name: 'Headquarters',
        city: 'Santa Fe Springs, CA',
        phone: '+1 (562) 949-0123',
        email: 'info@cosasco.com',
      },
      {
        name: 'Gulf Coast Office',
        city: 'Houston, TX',
        phone: '+1 (713) 555-0182',
        email: 'houston@cosasco.com',
      },
    ],
  },
  {
    region: 'Europe & Middle East',
    icon: <Globe size={20} />,
    offices: [
      {
        name: 'European Operations',
        city: 'Aberdeen, Scotland',
        phone: '+44 1224 555 0191',
        email: 'europe@cosasco.com',
      },
      {
        name: 'Middle East Office',
        city: 'Dubai, UAE',
        phone: '+971 4 555 0175',
        email: 'me@cosasco.com',
      },
    ],
  },
  {
    region: 'Asia Pacific',
    icon: <Globe size={20} />,
    offices: [
      {
        name: 'APAC Regional',
        city: 'Singapore',
        phone: '+65 6555 0143',
        email: 'apac@cosasco.com',
      },
      {
        name: 'Australia Office',
        city: 'Perth, WA',
        phone: '+61 8 5550 0167',
        email: 'australia@cosasco.com',
      },
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-white">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden grid-bg"
        style={{ background: '#0d1f3c', paddingTop: '6rem', paddingBottom: '5rem' }}
      >
        <div className="cx">
          <p className="eyebrow mb-3">Get in Touch</p>
          <h1
            className="text-white font-extrabold tracking-tight leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
          >
            Contact Cosasco
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            Whether you have a sales inquiry, a technical question, or need product information,
            our team is ready to respond.
          </p>
        </div>
      </section>

      {/* ── MAIN SECTION ─────────────────────────────────────────────────────── */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="cx">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* Contact Form (wider) */}
            <div className="lg:col-span-3">
              <p className="eyebrow mb-2">Send a Message</p>
              <h2
                className="font-extrabold tracking-tight text-[#0d1f3c] mb-8"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              >
                How Can We Help?
              </h2>

              {submitted ? (
                <div
                  className="flex flex-col items-center justify-center text-center rounded-xl p-16 gap-4"
                  style={{ background: '#f7f9fc', border: '1px solid #dde4ef' }}
                >
                  <CheckCircle size={56} style={{ color: '#16a34a' }} />
                  <h3 className="text-[#0d1f3c] font-bold text-xl">Message Sent</h3>
                  <p className="text-[#637c95] text-sm max-w-sm leading-relaxed">
                    Thank you for reaching out. A member of the Cosasco team will review your message
                    and respond within one business day.
                  </p>
                  <button
                    className="btn btn-outline-navy mt-2 text-sm"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  className="space-y-5"
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
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
                      <label className="block text-sm font-semibold text-[#334150] mb-1.5">Company</label>
                      <input
                        type="text"
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
                    <label className="block text-sm font-semibold text-[#334150] mb-1.5">Subject *</label>
                    <select
                      required
                      className="w-full rounded-md px-4 py-3 text-sm text-[#1a2535]"
                      style={{ border: '1px solid #dde4ef', background: '#f7f9fc', outline: 'none' }}
                    >
                      <option value="">Select a subject...</option>
                      <option>Sales Inquiry</option>
                      <option>Technical Support</option>
                      <option>Product Information</option>
                      <option>Partnership</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#334150] mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full rounded-md px-4 py-3 text-sm text-[#1a2535] resize-vertical"
                      style={{ border: '1px solid #dde4ef', background: '#f7f9fc', outline: 'none' }}
                      placeholder="Tell us about your project, application, or question..."
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-full justify-center text-base">
                    Send Message <ChevronRight size={17} />
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* HQ Card */}
              <div className="card p-6">
                <h3 className="text-[#0d1f3c] font-bold text-base mb-5">
                  Global Headquarters
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} style={{ color: '#e05000', marginTop: '2px' }} className="shrink-0" />
                    <div>
                      <p className="text-xs text-[#637c95] font-medium uppercase tracking-wide mb-0.5">Address</p>
                      <p className="text-sm font-semibold text-[#0d1f3c] leading-snug">
                        11401 Beach Street<br />Santa Fe Springs, CA 90670<br />United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={16} style={{ color: '#e05000', marginTop: '2px' }} className="shrink-0" />
                    <div>
                      <p className="text-xs text-[#637c95] font-medium uppercase tracking-wide mb-0.5">Phone</p>
                      <a href="tel:+15629490123" className="text-sm font-semibold text-[#0d1f3c] hover:text-[#e05000] transition-colors">
                        +1 (562) 949-0123
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={16} style={{ color: '#e05000', marginTop: '2px' }} className="shrink-0" />
                    <div>
                      <p className="text-xs text-[#637c95] font-medium uppercase tracking-wide mb-0.5">Email</p>
                      <a href="mailto:info@cosasco.com" className="text-sm font-semibold text-[#0d1f3c] hover:text-[#e05000] transition-colors">
                        info@cosasco.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={16} style={{ color: '#e05000', marginTop: '2px' }} className="shrink-0" />
                    <div>
                      <p className="text-xs text-[#637c95] font-medium uppercase tracking-wide mb-0.5">Business Hours</p>
                      <p className="text-sm font-semibold text-[#0d1f3c]">
                        Mon–Fri: 7:00am – 5:00pm PT<br />
                        <span className="text-[#637c95] font-normal">Emergency: 24/7</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div
                className="rounded-xl overflow-hidden flex flex-col items-center justify-center gap-3"
                style={{ background: '#0d1f3c', height: '180px', border: '1px solid #dde4ef' }}
              >
                <MapPin size={28} style={{ color: '#e05000' }} />
                <p className="text-white/60 text-sm">Santa Fe Springs, CA</p>
                <a
                  href="https://maps.google.com/?q=11401+Beach+Street+Santa+Fe+Springs+CA+90670"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold underline underline-offset-2 hover:no-underline"
                  style={{ color: '#e05000' }}
                >
                  View in Google Maps
                </a>
              </div>

              {/* Response time note */}
              <div
                className="rounded-xl p-4 flex items-start gap-3"
                style={{ background: '#f7f9fc', border: '1px solid #dde4ef' }}
              >
                <Clock size={16} style={{ color: '#e05000', marginTop: '2px', flexShrink: 0 }} />
                <p className="text-[#637c95] text-xs leading-relaxed">
                  <span className="font-semibold text-[#0d1f3c]">Typical response within 1 business day.</span>{' '}
                  For urgent technical issues, call our support line or visit the Support page to submit
                  a prioritized request.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── REGIONAL OFFICES ─────────────────────────────────────────────────── */}
      <section className="section" style={{ background: '#f7f9fc' }}>
        <div className="cx">
          <div className="text-center mb-12">
            <p className="eyebrow mb-2">Global Reach</p>
            <h2
              className="font-extrabold tracking-tight text-[#0d1f3c] mb-4"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
            >
              Regional Offices
            </h2>
            <p className="text-[#637c95] text-base max-w-lg mx-auto">
              With offices across three continents, Cosasco delivers local support to customers
              wherever they operate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regionalOffices.map((region) => (
              <div key={region.region} className="card p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: '#0d1f3c', color: '#e05000' }}
                  >
                    {region.icon}
                  </div>
                  <h3 className="text-[#0d1f3c] font-bold text-base">{region.region}</h3>
                </div>
                <div className="space-y-5">
                  {region.offices.map((office) => (
                    <div key={office.name}>
                      <p className="text-[#0d1f3c] font-semibold text-sm mb-1">{office.name}</p>
                      <div className="flex items-center gap-1.5 mb-1">
                        <MapPin size={12} style={{ color: '#637c95' }} />
                        <span className="text-[#637c95] text-xs">{office.city}</span>
                      </div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <Phone size={12} style={{ color: '#637c95' }} />
                        <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-[#637c95] text-xs hover:text-[#e05000] transition-colors">
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Mail size={12} style={{ color: '#637c95' }} />
                        <a href={`mailto:${office.email}`} className="text-[#637c95] text-xs hover:text-[#e05000] transition-colors">
                          {office.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
