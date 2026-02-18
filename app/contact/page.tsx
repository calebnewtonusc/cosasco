'use client';

import { useState } from 'react';

// ---------------------------------------------------------------------------
// Regional Offices Data
// ---------------------------------------------------------------------------
const regionalOffices = [
  {
    region: 'North America',
    city: 'Santa Fe Springs, CA',
    country: 'United States (HQ)',
    phone: '+1 (562) 949-0123',
    email: 'info@cosasco.com',
  },
  {
    region: 'Europe & Middle East',
    city: 'Aberdeen',
    country: 'United Kingdom',
    phone: '+44 1224 000 000',
    email: 'europe@cosasco.com',
  },
  {
    region: 'Asia Pacific',
    city: 'Singapore',
    country: 'Singapore',
    phone: '+65 6000 0000',
    email: 'apac@cosasco.com',
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI-only — no actual submission
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-[#0F2A4A] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#1B5EA8]/30 text-[#7EB3F5] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Cosasco</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Whether you have a sales inquiry, need technical guidance, or want to learn more about our products, our team is ready to assist.
          </p>
          <div className="mt-6 flex items-center gap-2 text-[#E8500A] font-semibold">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            We respond within 1 business day
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Main Split Layout                                                   */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Left: Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-[#0F2A4A] mb-1">Send Us a Message</h2>
              <p className="text-gray-500 text-sm mb-7">
                Fill out the form below and a Cosasco representative will be in touch promptly.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F2A4A] mb-2">Message Sent</h3>
                  <p className="text-gray-500 text-sm max-w-xs">
                    Thank you for contacting Cosasco. We will respond to your inquiry within one business day.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', company: '', email: '', phone: '', subject: '', message: '' }); }}
                    className="mt-6 text-[#1B5EA8] text-sm font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name + Company */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#0F2A4A] mb-1.5">
                        Full Name <span className="text-[#E8500A]">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B5EA8] focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-[#0F2A4A] mb-1.5">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Energy Corp"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B5EA8] focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#0F2A4A] mb-1.5">
                        Email Address <span className="text-[#E8500A]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B5EA8] focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[#0F2A4A] mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B5EA8] focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-[#0F2A4A] mb-1.5">
                      Subject <span className="text-[#E8500A]">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1B5EA8] focus:border-transparent transition bg-white"
                    >
                      <option value="" disabled>Select a subject...</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="technical">Technical Support</option>
                      <option value="product">Product Information</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#0F2A4A] mb-1.5">
                      Message <span className="text-[#E8500A]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your inquiry, project requirements, or how we can help..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B5EA8] focus:border-transparent transition resize-y"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-[#E8500A] hover:bg-[#d14508] text-white font-bold py-3.5 px-8 rounded-lg transition-colors duration-150 text-base tracking-wide shadow-sm hover:shadow-md"
                  >
                    Send Message
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    We respond within 1 business day. For urgent support, call{' '}
                    <a href="tel:+15629490123" className="text-[#E8500A] font-medium hover:underline">
                      +1 (562) 949-0123
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Right: Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1B5EA8]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#1B5EA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#0F2A4A] text-sm mb-1">Headquarters</h3>
                  <address className="not-italic text-gray-500 text-sm leading-relaxed">
                    Cosasco<br />
                    Santa Fe Springs, CA<br />
                    United States
                  </address>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#E8500A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#E8500A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#0F2A4A] text-sm mb-1">Phone</h3>
                  <a href="tel:+15629490123" className="text-[#E8500A] font-semibold text-sm hover:underline block">
                    +1 (562) 949-0123
                  </a>
                  <p className="text-gray-400 text-xs mt-1">Mon–Fri, 8am–5pm Pacific</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0F2A4A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#0F2A4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#0F2A4A] text-sm mb-1">Email</h3>
                  <a href="mailto:info@cosasco.com" className="text-[#1B5EA8] font-medium text-sm hover:underline block">
                    info@cosasco.com
                  </a>
                  <a href="mailto:support@cosasco.com" className="text-[#1B5EA8] font-medium text-sm hover:underline block mt-0.5">
                    support@cosasco.com
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-br from-[#0F2A4A]/5 to-[#1B5EA8]/10 flex flex-col items-center justify-center gap-3 border-b border-gray-200">
                <svg className="w-10 h-10 text-[#1B5EA8]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span className="text-gray-400 text-sm font-medium">Santa Fe Springs, CA</span>
                <a
                  href="https://maps.google.com/?q=Santa+Fe+Springs,+CA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1B5EA8] text-xs font-semibold hover:underline"
                >
                  Open in Google Maps
                </a>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-400 text-center">
                  Map integration available — replace with Google Maps embed
                </p>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-[#E8500A]/5 border border-[#E8500A]/20 rounded-2xl p-5 flex items-start gap-4">
              <div className="flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-[#E8500A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-[#0F2A4A]">Response Commitment</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                  We respond to all inquiries within 1 business day. For critical support issues, please call directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Regional Offices                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#0F2A4A] mb-2">Regional Offices</h2>
            <p className="text-gray-500 text-sm">
              Cosasco maintains a global presence through our regional offices and authorized distribution partners.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {regionalOffices.map((office) => (
              <div key={office.region} className="bg-gray-50 rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-[#E8500A] rounded-full" />
                  <span className="text-xs font-bold text-[#E8500A] uppercase tracking-wide">
                    {office.region}
                  </span>
                </div>
                <h3 className="font-bold text-[#0F2A4A] text-base mb-0.5">{office.city}</h3>
                <p className="text-gray-500 text-sm mb-4">{office.country}</p>
                <div className="space-y-1.5">
                  <a
                    href={`tel:${office.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#E8500A] transition-colors"
                  >
                    <svg className="w-4 h-4 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {office.phone}
                  </a>
                  <a
                    href={`mailto:${office.email}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#1B5EA8] transition-colors"
                  >
                    <svg className="w-4 h-4 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {office.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
