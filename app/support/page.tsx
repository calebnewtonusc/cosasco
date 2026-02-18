'use client';

import { useState } from 'react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  items: FAQItem[];
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const faqData: FAQCategory[] = [
  {
    category: 'General Questions',
    items: [
      {
        question: 'What industries does Cosasco serve?',
        answer:
          'Cosasco serves a broad range of industries including oil & gas, petrochemical, water treatment, chemical processing, pulp & paper, and utilities. Our corrosion monitoring and chemical injection systems are engineered for the unique demands of each sector.',
      },
      {
        question: 'Where is Cosasco headquartered?',
        answer:
          'Cosasco is headquartered in Santa Fe Springs, California, USA. We have been manufacturing high-quality corrosion monitoring equipment and chemical injection systems from this facility for over 70 years.',
      },
      {
        question: 'How do I place an order for Cosasco products?',
        answer:
          'Orders can be placed by contacting our sales team directly via phone at +1 (562) 949-0123 or by submitting an inquiry through our Contact page. Our sales engineers will work with you to identify the right solution and generate a formal quotation.',
      },
      {
        question: 'Does Cosasco offer product customization?',
        answer:
          'Yes. Many of our product lines can be customized to meet specific pressure ratings, material requirements, connection types, or environmental conditions. Contact our technical team to discuss your application requirements.',
      },
      {
        question: 'What is the typical lead time for orders?',
        answer:
          'Standard product lead times vary by product line and current inventory. Most standard items ship within 2–4 weeks. Custom or engineered-to-order products may require 6–12 weeks. Our sales team will provide specific lead times at the time of quotation.',
      },
    ],
  },
  {
    category: 'Technical Questions',
    items: [
      {
        question: 'How do I install a Cosasco corrosion coupon retriever?',
        answer:
          'Cosasco retrieval tools are designed for safe under-pressure insertion and retrieval. Detailed installation instructions are included with every product and are available in our technical documentation library. We strongly recommend all installation be performed by trained personnel following your facility\'s hot-work and safety protocols.',
      },
      {
        question: 'How often should corrosion probes be calibrated?',
        answer:
          'Calibration frequency depends on the probe type and the aggressiveness of the monitored environment. For ER (Electrical Resistance) probes, calibration against baseline readings should occur at commissioning and after any significant process change. We recommend consulting our technical support team for application-specific guidance.',
      },
      {
        question: 'Are Cosasco products compatible with third-party data loggers?',
        answer:
          'Many Cosasco monitoring instruments offer standard output signals (4–20 mA, Modbus, or HART) that are compatible with most third-party data acquisition systems and DCS platforms. Contact technical support with your specific logger model for compatibility confirmation.',
      },
      {
        question: 'What materials are available for wetted components?',
        answer:
          'Cosasco offers wetted components in a wide range of materials including 316 SS, Hastelloy C-276, Inconel 625, duplex stainless steel, and various plastics such as PTFE and CPVC. Material selection depends on process fluid chemistry, temperature, and pressure.',
      },
      {
        question: 'What pressure ratings are available for access fittings?',
        answer:
          'Our access fittings are available in pressure classes ranging from 150# through 2500# ANSI, and custom ratings can be engineered for extreme-pressure applications. All fittings are pressure-tested and certified prior to shipment.',
      },
    ],
  },
  {
    category: 'Service & Warranty',
    items: [
      {
        question: 'What warranty does Cosasco provide on its products?',
        answer:
          'Cosasco products are covered by a standard one-year limited warranty against defects in materials and workmanship from the date of shipment. Extended warranty options may be available on select product lines. Please refer to your purchase documentation or contact us for full warranty terms.',
      },
      {
        question: 'Does Cosasco offer field service or on-site support?',
        answer:
          'Yes. Our factory-trained field service engineers are available for on-site installation assistance, commissioning, troubleshooting, and system audits. Field service engagements can be scheduled through our technical support team.',
      },
      {
        question: 'How do I return a product for repair or replacement?',
        answer:
          'To initiate a return, contact our customer service team to obtain a Return Merchandise Authorization (RMA) number. Products must be returned with the RMA clearly marked on the outside of the package. Unauthorized returns may be refused or delayed.',
      },
      {
        question: 'Can Cosasco refurbish or recertify older equipment?',
        answer:
          'In many cases, yes. We offer refurbishment and recertification services for Cosasco legacy equipment. Send us the model and serial number and our service team will assess feasibility and provide a quote.',
      },
    ],
  },
  {
    category: 'Compliance & Certifications',
    items: [
      {
        question: 'Is Cosasco ISO 9001 certified?',
        answer:
          'Yes. Cosasco operates under an ISO 9001 quality management system. Our quality procedures govern design, manufacturing, testing, and inspection processes to ensure consistent, reliable product performance.',
      },
      {
        question: 'Are Cosasco products ATEX or IECEx certified for hazardous areas?',
        answer:
          'Select Cosasco electronic instruments and monitoring equipment are available with ATEX and/or IECEx certifications for use in classified hazardous locations (Zone 1/Zone 2 and Division 1/Division 2). Please specify your area classification when requesting a quotation.',
      },
      {
        question: 'Do Cosasco products meet NACE and API standards?',
        answer:
          'Yes. Cosasco products are designed and manufactured in accordance with relevant NACE International and API standards for corrosion monitoring and chemical injection equipment. Our engineering team stays current with evolving standards to ensure continued compliance.',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Accordion Component
// ---------------------------------------------------------------------------
function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B5EA8]"
        aria-expanded={isOpen}
      >
        <span className="text-[#0F2A4A] font-medium text-base pr-4">
          {item.question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#1B5EA8] text-[#1B5EA8] transition-transform duration-200 ${
            isOpen ? 'rotate-45' : ''
          }`}
          aria-hidden="true"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main Page
// ---------------------------------------------------------------------------
export default function SupportPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    applicationType: '',
    issueDescription: '',
    urgencyLevel: '',
  });
  const [fileInputLabel, setFileInputLabel] = useState('No file chosen');

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileInputLabel(file ? file.name : 'No file chosen');
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Technical Support & Resources
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Customer Support &<br />Technical Resources
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Our engineering team is here to help you select, install, and maintain Cosasco corrosion monitoring and chemical injection systems.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Support Pathway Cards                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0F2A4A] text-center mb-10">
            How Can We Help You?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg hover:border-[#1B5EA8] transition-all duration-200 group text-center">
              <div className="w-14 h-14 bg-[#1B5EA8]/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-[#1B5EA8]/20 transition-colors">
                <svg className="w-7 h-7 text-[#1B5EA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F2A4A] mb-3">Browse FAQ</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Find answers to the most common questions about our products, ordering, installation, and warranties.
              </p>
              <a
                href="#faq"
                className="inline-flex items-center gap-1.5 text-[#1B5EA8] font-semibold text-sm hover:text-[#0F2A4A] transition-colors"
              >
                View All FAQs
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg hover:border-[#1B5EA8] transition-all duration-200 group text-center">
              <div className="w-14 h-14 bg-[#E8500A]/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-[#E8500A]/20 transition-colors">
                <svg className="w-7 h-7 text-[#E8500A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F2A4A] mb-3">Technical Support</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Connect directly with a Cosasco application engineer for hands-on troubleshooting and system guidance.
              </p>
              <a
                href="tel:+15629490123"
                className="inline-flex items-center gap-1.5 text-[#E8500A] font-semibold text-sm hover:text-[#0F2A4A] transition-colors"
              >
                Call an Engineer
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg hover:border-[#1B5EA8] transition-all duration-200 group text-center">
              <div className="w-14 h-14 bg-[#0F2A4A]/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-[#0F2A4A]/20 transition-colors">
                <svg className="w-7 h-7 text-[#0F2A4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F2A4A] mb-3">Submit a Request</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Submit a formal support ticket with your product details, application type, and a description of your issue.
              </p>
              <a
                href="#support-form"
                className="inline-flex items-center gap-1.5 text-[#0F2A4A] font-semibold text-sm hover:text-[#1B5EA8] transition-colors"
              >
                Open a Ticket
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQ Accordion                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section id="faq" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0F2A4A] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500">
              Browse by category to quickly find the answers you need.
            </p>
          </div>

          <div className="space-y-10">
            {faqData.map((section) => (
              <div key={section.category}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-6 bg-[#E8500A] rounded-full" />
                  <h3 className="text-lg font-bold text-[#0F2A4A]">
                    {section.category}
                  </h3>
                </div>
                <div className="space-y-2">
                  {section.items.map((item, idx) => {
                    const key = `${section.category}-${idx}`;
                    return (
                      <AccordionItem
                        key={key}
                        item={item}
                        isOpen={!!openItems[key]}
                        onToggle={() => toggleItem(key)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Emergency Banner                                                    */}
      {/* ------------------------------------------------------------------ */}
      <div className="bg-[#E8500A] text-white py-5 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="font-semibold">
              Critical or emergency support needed?
            </span>
          </div>
          <a
            href="tel:+15629490123"
            className="font-bold text-lg tracking-wide hover:underline whitespace-nowrap"
          >
            Critical Support: +1 (562) 949-0123
          </a>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Technical Support Request Form                                      */}
      {/* ------------------------------------------------------------------ */}
      <section id="support-form" className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0F2A4A] mb-3">
              Technical Support Request
            </h2>
            <p className="text-gray-500">
              Submit a detailed request and a Cosasco engineer will respond within one business day.
            </p>
          </div>

          <form
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 space-y-6"
            onSubmit={(e) => e.preventDefault()}
            noValidate
          >
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
                  onChange={handleInputChange}
                  placeholder="Jane Smith"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B5EA8] focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-[#0F2A4A] mb-1.5">
                  Company <span className="text-[#E8500A]">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B5EA8] focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Product/System */}
            <div>
              <label htmlFor="product" className="block text-sm font-semibold text-[#0F2A4A] mb-1.5">
                Product / System <span className="text-[#E8500A]">*</span>
              </label>
              <input
                id="product"
                name="product"
                type="text"
                required
                value={formData.product}
                onChange={handleInputChange}
                placeholder="e.g. Model 520 ER Probe, Chemical Injection Quill Series"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B5EA8] focus:border-transparent transition"
              />
            </div>

            {/* Application Type + Urgency */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="applicationType" className="block text-sm font-semibold text-[#0F2A4A] mb-1.5">
                  Application Type <span className="text-[#E8500A]">*</span>
                </label>
                <select
                  id="applicationType"
                  name="applicationType"
                  required
                  value={formData.applicationType}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1B5EA8] focus:border-transparent transition bg-white"
                >
                  <option value="" disabled>Select application...</option>
                  <option value="oil-gas">Oil &amp; Gas</option>
                  <option value="petrochemical">Petrochemical</option>
                  <option value="water-treatment">Water Treatment</option>
                  <option value="chemical">Chemical</option>
                  <option value="pulp-paper">Pulp &amp; Paper</option>
                  <option value="utilities">Utilities</option>
                </select>
              </div>
              <div>
                <label htmlFor="urgencyLevel" className="block text-sm font-semibold text-[#0F2A4A] mb-1.5">
                  Urgency Level <span className="text-[#E8500A]">*</span>
                </label>
                <select
                  id="urgencyLevel"
                  name="urgencyLevel"
                  required
                  value={formData.urgencyLevel}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1B5EA8] focus:border-transparent transition bg-white"
                >
                  <option value="" disabled>Select urgency...</option>
                  <option value="critical">Critical — Process at risk</option>
                  <option value="high">High — Significant impact</option>
                  <option value="normal">Normal — Routine inquiry</option>
                </select>
              </div>
            </div>

            {/* Issue Description */}
            <div>
              <label htmlFor="issueDescription" className="block text-sm font-semibold text-[#0F2A4A] mb-1.5">
                Issue Description <span className="text-[#E8500A]">*</span>
              </label>
              <textarea
                id="issueDescription"
                name="issueDescription"
                required
                rows={5}
                value={formData.issueDescription}
                onChange={handleInputChange}
                placeholder="Please describe the issue in detail, including any error readings, operating conditions, and steps already taken..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B5EA8] focus:border-transparent transition resize-y"
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-semibold text-[#0F2A4A] mb-1.5">
                Attach Files
              </label>
              <label
                htmlFor="fileUpload"
                className="flex items-center gap-3 border-2 border-dashed border-gray-300 rounded-lg px-4 py-4 cursor-pointer hover:border-[#1B5EA8] hover:bg-blue-50/30 transition-all"
              >
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
                <span className="text-sm text-gray-500">
                  {fileInputLabel === 'No file chosen' ? (
                    <><span className="text-[#1B5EA8] font-semibold">Click to upload</span> — photos, data logs, spec sheets</>
                  ) : (
                    <span className="text-[#0F2A4A] font-medium">{fileInputLabel}</span>
                  )}
                </span>
              </label>
              <input
                id="fileUpload"
                type="file"
                className="sr-only"
                onChange={handleFileChange}
                accept=".pdf,.png,.jpg,.jpeg,.csv,.xlsx,.doc,.docx"
              />
              <p className="text-xs text-gray-400 mt-1.5">Accepted: PDF, images, Excel, Word. Max 25 MB.</p>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#E8500A] hover:bg-[#d14508] text-white font-bold py-3.5 px-8 rounded-lg transition-colors duration-150 text-base tracking-wide shadow-sm hover:shadow-md"
              >
                Submit Support Request
              </button>
              <p className="text-center text-xs text-gray-400 mt-3">
                Our team responds within one business day. For critical issues, call{' '}
                <a href="tel:+15629490123" className="text-[#E8500A] font-medium hover:underline">
                  +1 (562) 949-0123
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
