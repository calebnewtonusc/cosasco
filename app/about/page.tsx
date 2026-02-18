import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Cosasco | 70 Years of Corrosion Monitoring Excellence',
  description:
    'Learn about Cosasco\'s 70-year history as a leader in corrosion monitoring, chemical injection, and critical infrastructure protection.',
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const timeline = [
  {
    year: '1950s',
    title: 'Founded in California',
    description:
      'Cosasco was established in Southern California with a singular mission: to design and manufacture reliable instrumentation for corrosion monitoring in the emerging oil and gas industry.',
  },
  {
    year: '1960s',
    title: 'Expanding the Product Line',
    description:
      'Development of access fitting and retrieval tool systems enabled safer under-pressure installation of corrosion coupons — a breakthrough that became an industry standard.',
  },
  {
    year: '1970s',
    title: 'Petrochemical Growth',
    description:
      'Cosasco expanded into the petrochemical and refining markets, delivering engineered solutions for high-pressure, high-temperature environments across North America.',
  },
  {
    year: '1980s',
    title: 'Electronic Monitoring',
    description:
      'Introduction of electrical resistance (ER) probes and early electronic monitoring instruments brought real-time corrosion data to plant operations for the first time.',
  },
  {
    year: '1990s',
    title: 'Global Reach',
    description:
      'International distribution partnerships extended Cosasco\'s presence into Europe, the Middle East, and Asia-Pacific, supporting major pipeline and refinery operators worldwide.',
  },
  {
    year: '2000s',
    title: 'Chemical Injection Systems',
    description:
      'Cosasco broadened its portfolio with engineered chemical injection quills, check valves, and injection systems — providing end-to-end corrosion mitigation solutions.',
  },
  {
    year: '2010s',
    title: 'Digital & Wireless',
    description:
      'Smart wireless monitoring solutions and digital data acquisition platforms were introduced, enabling remote real-time corrosion management across geographically distributed assets.',
  },
  {
    year: 'Today',
    title: 'Protecting Critical Infrastructure',
    description:
      'With over 70 years of engineering heritage, Cosasco continues to innovate — delivering ISO 9001-certified products trusted by the world\'s largest industrial operators.',
  },
];

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Mission',
    body:
      'To protect critical industrial infrastructure by engineering the world\'s most reliable corrosion monitoring and chemical injection systems — helping operators reduce risk, extend asset life, and maintain operational continuity.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Vision',
    body:
      'A world where corrosion-related failures are fully preventable — where plant operators have real-time visibility into asset integrity and the tools to act before problems escalate.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Values',
    body:
      'Engineering excellence, uncompromising safety, customer partnership, and continuous innovation. Every Cosasco product is built to the same standard: perform reliably in the most demanding industrial environments on earth.',
  },
];

const stats = [
  { value: '70+', label: 'Years in Operation', sub: 'Since the 1950s' },
  { value: 'Global', label: 'International Presence', sub: 'Distributors worldwide' },
  { value: 'ISO 9001', label: 'Quality Certified', sub: 'Rigorous QMS' },
  { value: '1000s', label: 'Products Deployed', sub: 'Across 6+ industries' },
];

const certifications = [
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management System certification ensuring consistent design, manufacturing, and testing standards across all product lines.',
  },
  {
    name: 'NACE Compliant',
    description: 'Products engineered in accordance with NACE International standards for corrosion control and monitoring in oil, gas, and chemical applications.',
  },
  {
    name: 'API Standards',
    description: 'Chemical injection and access fitting systems designed to meet or exceed API specifications relevant to upstream and downstream operations.',
  },
  {
    name: 'ATEX / IECEx',
    description: 'Select electronic instruments certified for use in classified hazardous locations per ATEX (EU) and IECEx (International) frameworks.',
  },
  {
    name: 'Pressure Testing',
    description: 'All pressure-containing components are hydrostatically tested prior to shipment, with traceability documentation available upon request.',
  },
  {
    name: 'Material Traceability',
    description: 'Full material certification and mill test reports (MTRs) available for wetted components in critical-service applications.',
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative bg-[#0F2A4A] text-white overflow-hidden">
        {/* Background texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="inline-flex items-center gap-2 bg-[#E8500A]/20 text-[#F4956A] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Established 1950s · Santa Fe Springs, California
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl">
            70 Years of Protecting<br />Critical Infrastructure
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            From the oil fields of California to industrial facilities across six continents, Cosasco has spent seven decades engineering solutions that keep pipelines, refineries, and critical systems safe.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Key Stats                                                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-[#1B5EA8] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-blue-200 uppercase tracking-wide">
                {stat.label}
              </div>
              <div className="text-xs text-blue-300 mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Company Story                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#0F2A4A] mb-3">Our History</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Seven decades of engineering innovation, driven by the needs of the world's most demanding industries.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1B5EA8] to-[#E8500A] transform md:-translate-x-0.5" aria-hidden="true" />

            <div className="space-y-10">
              {timeline.map((item, idx) => {
                const isRight = idx % 2 === 0;
                return (
                  <div
                    key={item.year}
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      isRight ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content box */}
                    <div className={`md:w-5/12 pl-14 md:pl-0 ${isRight ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                        <span className="inline-block bg-[#E8500A] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                          {item.year}
                        </span>
                        <h3 className="text-[#0F2A4A] font-bold text-base mb-1.5">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-6 md:left-1/2 top-5 w-3 h-3 rounded-full bg-[#1B5EA8] border-2 border-white shadow transform -translate-x-1.5 md:-translate-x-1.5" aria-hidden="true" />

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block md:w-5/12" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Mission / Vision / Values                                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0F2A4A] mb-3">
              Mission, Vision &amp; Values
            </h2>
            <p className="text-gray-500">
              The principles that have guided Cosasco for over seven decades.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#1B5EA8]/10 rounded-xl flex items-center justify-center text-[#1B5EA8] mb-5">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0F2A4A] mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Certifications & Quality                                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0F2A4A] mb-3">
              Certifications &amp; Quality
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every Cosasco product is manufactured under a rigorous quality management system and meets the standards that critical industries demand.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex gap-4 bg-gray-50 rounded-xl border border-gray-200 p-5">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-8 h-8 bg-[#E8500A]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#E8500A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#0F2A4A] text-sm mb-1">{cert.name}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Headquarters                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 px-6 bg-[#0F2A4A] text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Headquarters
            </div>
            <h2 className="text-3xl font-bold mb-4">Santa Fe Springs, California</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Our state-of-the-art manufacturing facility is located in Santa Fe Springs, California — home to Cosasco's design, engineering, manufacturing, testing, and customer support operations.
            </p>
            <address className="not-italic text-gray-300 text-sm space-y-1">
              <p>Cosasco</p>
              <p>11552 Pagemill Rd, Dallas, TX 75243</p>
              <p>Santa Fe Springs, CA, USA</p>
              <p className="mt-3">
                <a href="tel:+15629490123" className="text-[#E8500A] hover:text-[#F4956A] font-semibold transition-colors">
                  +1 (562) 949-0123
                </a>
              </p>
            </address>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-[#E8500A]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#E8500A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Manufacturing Excellence</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our California facility houses precision machining, assembly, hydrostatic testing, and quality inspection — ensuring every product meets Cosasco's exacting standards before it ships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Careers Teaser                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-14 h-14 bg-[#1B5EA8]/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <svg className="w-7 h-7 text-[#1B5EA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-[#0F2A4A] mb-3">Join Our Team</h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            We are always looking for talented engineers, machinists, quality specialists, and sales professionals who share our passion for solving complex industrial challenges. Join a team with 70 years of heritage and a future-focused outlook.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#E8500A] hover:bg-[#d14508] text-white font-bold py-3.5 px-8 rounded-lg transition-colors shadow-sm hover:shadow-md"
            >
              Explore Opportunities
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#0F2A4A] text-[#0F2A4A] hover:bg-[#0F2A4A] hover:text-white font-bold py-3.5 px-8 rounded-lg transition-all"
            >
              Contact HR
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
