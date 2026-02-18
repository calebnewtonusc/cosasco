"use client";

import { useState } from "react";
import Link from "next/link";

const industries = [
  "All Industries",
  "Oil & Gas",
  "Petrochemical",
  "Pipeline",
  "Offshore",
  "Power Generation",
  "Water Treatment",
];

const productCategories = [
  {
    title: "Corrosion Monitoring Systems",
    href: "/products/corrosion-monitoring",
    description:
      "Comprehensive solutions for detecting, measuring, and analyzing internal corrosion in pipelines, vessels, and process equipment. Our monitoring systems provide real-time data to help operators make informed integrity management decisions.",
    industries: ["Oil & Gas", "Pipeline", "Offshore", "Petrochemical"],
    keyProducts: [
      "Access Fittings & Retrieval Equipment",
      "Corrosion Coupons & Weight Loss Analysis",
      "ER (Electrical Resistance) Probes",
      "Intrusive Corrosion Monitors",
      "Non-Intrusive Corrosion Monitors",
      "Pipe Penetration Fittings",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="20" stroke="#1B5EA8" strokeWidth="2.5" />
        <path d="M16 28 C18 20, 22 32, 24 24 C26 16, 30 28, 32 22" stroke="#E8500A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="16" cy="28" r="2" fill="#E8500A"/>
        <circle cx="32" cy="22" r="2" fill="#E8500A"/>
        <line x1="12" y1="36" x2="36" y2="36" stroke="#1B5EA8" strokeWidth="2" strokeLinecap="round"/>
        <line x1="12" y1="12" x2="12" y2="36" stroke="#1B5EA8" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Erosion Monitoring Systems",
    href: "/products/erosion-monitoring",
    description:
      "Advanced ultrasonic and probe-based erosion monitoring systems designed for high-velocity flow environments. Detect sand and particle erosion before it causes critical failures in bends, elbows, and choke valves.",
    industries: ["Oil & Gas", "Offshore", "Pipeline"],
    keyProducts: [
      "UT (Ultrasonic) Sensors",
      "Sand Detection Systems",
      "Erosion Probes",
      "Flush Mounted UT Sensors",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect x="8" y="20" width="32" height="10" rx="5" stroke="#1B5EA8" strokeWidth="2.5"/>
        <path d="M20 20 L20 14 M28 20 L28 14" stroke="#1B5EA8" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 30 L10 38 M24 30 L24 38 M34 30 L38 38" stroke="#E8500A" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="14" cy="11" r="2.5" fill="#E8500A"/>
        <circle cx="22" cy="9" r="1.5" fill="#1B5EA8"/>
        <circle cx="30" cy="11" r="2" fill="#E8500A"/>
      </svg>
    ),
  },
  {
    title: "Chemical Injection Systems",
    href: "/products/chemical-injection",
    description:
      "Precision chemical injection solutions engineered for reliable inhibitor delivery in demanding process environments. From simple quill assemblies to fully automated dosing systems, we ensure consistent protection against corrosion and scale.",
    industries: ["Oil & Gas", "Petrochemical", "Power Generation", "Water Treatment"],
    keyProducts: [
      "Quill Assemblies",
      "Injection Valves",
      "Chemical Dosing Systems",
      "Pulsation Dampeners",
      "Injection Quills",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect x="19" y="6" width="10" height="16" rx="3" stroke="#1B5EA8" strokeWidth="2.5"/>
        <path d="M24 22 L24 34" stroke="#1B5EA8" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M14 30 L34 30" stroke="#0F2A4A" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="24" cy="37" r="4" stroke="#E8500A" strokeWidth="2.5"/>
        <path d="M20 12 L28 12" stroke="#E8500A" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 9 L26 9" stroke="#E8500A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Data Acquisition & Connectivity",
    href: "/products/data-acquisition",
    description:
      "Intelligent data acquisition systems and software platforms that connect your monitoring infrastructure to actionable insights. From field instruments to cloud dashboards, our connectivity solutions enable smarter asset integrity management.",
    industries: ["Oil & Gas", "Pipeline", "Offshore", "Power Generation"],
    keyProducts: [
      "FieldCom Systems",
      "Data Loggers",
      "Software Solutions",
      "Remote Monitoring",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect x="6" y="28" width="10" height="12" rx="2" stroke="#1B5EA8" strokeWidth="2.5"/>
        <rect x="19" y="20" width="10" height="20" rx="2" stroke="#1B5EA8" strokeWidth="2.5"/>
        <rect x="32" y="12" width="10" height="28" rx="2" stroke="#E8500A" strokeWidth="2.5"/>
        <path d="M11 28 L11 22 L24 22" stroke="#0F2A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 20 L37 20 L37 12" stroke="#0F2A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function ProductsPage() {
  const [activeIndustry, setActiveIndustry] = useState("All Industries");

  const filteredCategories =
    activeIndustry === "All Industries"
      ? productCategories
      : productCategories.filter((cat) =>
          cat.industries.includes(activeIndustry)
        );

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Nav Bar */}
      <nav className="bg-[#0F2A4A] border-b border-[#1B5EA8]/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-white text-xl font-bold tracking-wide">
            COSASCO
          </Link>
          <div className="flex gap-8 text-sm text-slate-300">
            <Link href="/products" className="text-white font-semibold border-b-2 border-[#E8500A] pb-0.5">Products</Link>
            <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F2A4A 0%, #1B5EA8 100%)" }}
      >
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <circle cx="700" cy="50" r="200" fill="#E8500A"/>
            <circle cx="100" cy="350" r="150" fill="#1B5EA8"/>
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center gap-2 text-sm text-blue-300 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3" aria-hidden="true">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-white">Products</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight max-w-2xl">
            Corrosion Management Products
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl leading-relaxed">
            Industry-leading hardware and software for corrosion monitoring, erosion detection, and chemical injection — engineered for the world's most demanding process environments.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#E8500A]" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"/>
              </svg>
              API-compliant solutions
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#E8500A]" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"/>
              </svg>
              ATEX / IECEx certified options
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#E8500A]" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"/>
              </svg>
              Global field support
            </div>
          </div>
        </div>
      </section>

      {/* Application-based discovery */}
      <section className="bg-slate-50 border-b border-slate-200 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-[#0F2A4A] uppercase tracking-widest mb-4">
            Find Products by Application
          </p>
          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveIndustry(industry)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer ${
                  activeIndustry === industry
                    ? "bg-[#1B5EA8] text-white border-[#1B5EA8] shadow-md"
                    : "bg-white text-[#0F2A4A] border-slate-300 hover:border-[#1B5EA8] hover:text-[#1B5EA8]"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product category cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            <p className="text-lg">No product categories match this filter.</p>
            <button
              onClick={() => setActiveIndustry("All Industries")}
              className="mt-4 text-[#1B5EA8] font-medium hover:underline"
            >
              Clear filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCategories.map((category) => (
              <div
                key={category.title}
                className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#1B5EA8]/30 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Card header */}
                <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1B5EA8] p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <svg viewBox="0 0 100 100" fill="none">
                      <circle cx="80" cy="20" r="60" fill="white"/>
                    </svg>
                  </div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                      {category.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-1">{category.title}</h2>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {category.industries.map((ind) => (
                        <span
                          key={ind}
                          className="text-xs px-2.5 py-0.5 rounded-full bg-white/15 text-blue-100 font-medium"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-slate-600 leading-relaxed mb-6">{category.description}</p>

                  <div className="mb-8">
                    <p className="text-xs font-bold text-[#0F2A4A] uppercase tracking-widest mb-3">
                      Key Products
                    </p>
                    <ul className="space-y-2">
                      {category.keyProducts.map((product) => (
                        <li key={product} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#E8500A]" aria-hidden="true">
                            <path d="M6 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1"/>
                          </svg>
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Link
                      href={category.href}
                      className="inline-flex items-center gap-2 bg-[#E8500A] hover:bg-[#c94208] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 group-hover:shadow-md"
                    >
                      View Products
                      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#0F2A4A] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need help selecting the right solution?</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Our corrosion engineering specialists can help you identify the optimal monitoring and injection strategy for your specific process conditions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#E8500A] hover:bg-[#c94208] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
            >
              Talk to an Engineer
            </Link>
            <Link
              href="/solutions"
              className="bg-transparent border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
            >
              Browse Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1e35] py-8 px-6 text-center text-slate-500 text-sm">
        <p>© 2026 Cosasco. All rights reserved.</p>
      </footer>
    </div>
  );
}
