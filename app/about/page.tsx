import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Shield,
  Eye,
  Heart,
  Award,
  MapPin,
  Phone,
  Users,
  Factory,
  Globe,
  CheckCircle,
  ArrowRight,
  Clock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Cosasco | 70+ Years of Corrosion Monitoring Excellence',
  description:
    'Cosasco has protected critical industrial infrastructure for over 70 years. ISO 9001-certified manufacturer of corrosion monitoring instruments and chemical injection systems. Founded in Southern California.',
};

const stats = [
  { value: '70+', label: 'Years in Service', sub: 'Founded in the 1950s' },
  { value: '50+', label: 'Countries Served', sub: 'Global distribution' },
  { value: 'ISO 9001', label: 'Quality Certified', sub: 'Rigorous QMS' },
  { value: '6+', label: 'Industries Protected', sub: 'Across all sectors' },
];

const timeline = [
  {
    year: '1950s',
    title: 'Founded in California',
    description:
      'Cosasco was established in Southern California with a singular mission: to design and manufacture reliable instrumentation for corrosion monitoring in the emerging oil and gas industry.',
  },
  {
    year: '1960s',
    title: 'Access Fitting Innovation',
    description:
      'Development of under-pressure access fitting and retrieval tool systems enabled safer installation of corrosion coupons without process shutdown — a breakthrough that became an industry standard.',
  },
  {
    year: '1970s',
    title: 'Petrochemical Expansion',
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
      'Cosasco broadened its portfolio with engineered chemical injection quills, check valves, and complete injection systems — providing end-to-end corrosion mitigation capability.',
  },
  {
    year: '2010s',
    title: 'Digital & Wireless',
    description:
      'FieldCom wireless monitoring solutions and cloud-connected data acquisition platforms were introduced, enabling remote real-time corrosion management across geographically distributed assets.',
  },
  {
    year: 'Today',
    title: 'Protecting Critical Infrastructure',
    description:
      'With over 70 years of engineering heritage, Cosasco continues to innovate — delivering ISO 9001-certified products trusted by the world\'s largest industrial operators across six industries.',
  },
];

const values = [
  {
    icon: Shield,
    title: 'Mission',
    body: 'To protect critical industrial infrastructure by engineering the world\'s most reliable corrosion monitoring and chemical injection systems — helping operators reduce risk, extend asset life, and maintain operational continuity.',
  },
  {
    icon: Eye,
    title: 'Vision',
    body: 'A world where corrosion-related failures are fully preventable — where plant operators have real-time visibility into asset integrity and the tools to act before problems escalate.',
  },
  {
    icon: Heart,
    title: 'Values',
    body: 'Engineering excellence, uncompromising safety, customer partnership, and continuous innovation. Every Cosasco product is built to perform reliably in the most demanding industrial environments on earth.',
  },
];

const certifications = [
  {
    name: 'ISO 9001:2015',
    description:
      'Quality Management System certification ensuring consistent design, manufacturing, and testing standards across all product lines.',
  },
  {
    name: 'NACE Compliant',
    description:
      'Products engineered in accordance with NACE International standards for corrosion control and monitoring in oil, gas, and chemical applications.',
  },
  {
    name: 'API Standards',
    description:
      'Chemical injection and access fitting systems designed to meet or exceed API specifications relevant to upstream and downstream operations.',
  },
  {
    name: 'ATEX / IECEx',
    description:
      'Select electronic instruments certified for use in classified hazardous locations per ATEX (EU) and IECEx (International) frameworks.',
  },
  {
    name: 'Hydrostatic Testing',
    description:
      'All pressure-containing components are hydrostatically tested prior to shipment, with full traceability documentation available upon request.',
  },
  {
    name: 'Material Traceability',
    description:
      'Full material certification and mill test reports (MTRs) available for all wetted components in critical-service and high-alloy applications.',
  },
];

const capabilities = [
  'Precision CNC machining for complex probe and fitting geometries',
  'In-house hydrostatic and pneumatic pressure testing to 15,000 psi',
  'Alloy welding and heat treatment for specialty materials',
  'Full non-destructive examination (NDE) capabilities',
  'Accelerated corrosion testing laboratory for product validation',
  'Calibration and certification services for electronic instruments',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <div className="bg-[#f7f9fc] border-b border-[#dde4ef]">
        <div className="cx py-3">
          <nav className="flex items-center gap-2 text-sm text-[#637c95]">
            <Link href="/" className="hover:text-[#0d1f3c] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0d1f3c] font-medium">About</span>
          </nav>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-[#0d1f3c] text-white overflow-hidden">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#e05000]" aria-hidden="true" />
        <div className="cx relative section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow text-[#e05000] mb-4">About Cosasco</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                70 Years of Protecting<br />
                <span className="text-[#e05000]">Critical Infrastructure</span>
              </h1>
              <p className="text-[#b8c8da] text-lg leading-relaxed mb-8">
                From the oil fields of California to industrial facilities on six continents, Cosasco
                has spent seven decades engineering the instruments, systems, and chemical injection
                hardware that keep pipelines, refineries, and critical industrial assets safe.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-primary">
                  Contact Our Team
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/products" className="btn btn-outline-white">
                  Explore Products
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
                >
                  <div className="stat-number mb-1">{s.value}</div>
                  <div className="text-white font-semibold text-sm mb-1">{s.label}</div>
                  <div className="text-[#637c95] text-xs">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission / Vision / Values ── */}
      <section className="section bg-[#f7f9fc]">
        <div className="cx">
          <div className="text-center mb-14">
            <p className="eyebrow mb-3">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1f3c] mb-4">
              Mission, Vision &amp; Values
            </h2>
            <p className="text-[#637c95] text-lg max-w-2xl mx-auto">
              The principles that have guided Cosasco since the 1950s — and that define how we
              design, build, and support every product we manufacture.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="card p-8">
                  <div className="w-12 h-12 bg-[#e05000]/10 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#e05000]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0d1f3c] mb-3">{v.title}</h3>
                  <p className="text-[#637c95] text-sm leading-relaxed">{v.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Company History Timeline ── */}
      <section className="section bg-white">
        <div className="cx">
          <div className="text-center mb-14">
            <p className="eyebrow mb-3">Our History</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1f3c] mb-4">
              Seven Decades of Innovation
            </h2>
            <p className="text-[#637c95] text-lg max-w-2xl mx-auto">
              From California oil fields to global industrial infrastructure — the Cosasco story
              is one of continuous engineering advancement driven by customer need.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#e05000] to-[#0d1f3c] md:-translate-x-px"
              aria-hidden="true"
            />

            <div className="space-y-8">
              {timeline.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div
                    key={item.year}
                    className={`relative flex items-start gap-6 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Content */}
                    <div className={`md:w-5/12 pl-14 md:pl-0 ${isLeft ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                      <div className="card p-5">
                        <span className="badge badge-orange mb-2">{item.year}</span>
                        <h3 className="text-[#0d1f3c] font-bold text-base mb-1.5">{item.title}</h3>
                        <p className="text-[#637c95] text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div
                      className="absolute left-6 md:left-1/2 top-5 w-3 h-3 rounded-full bg-[#e05000] border-2 border-white shadow-md -translate-x-1.5 md:-translate-x-1.5"
                      aria-hidden="true"
                    />

                    {/* Spacer */}
                    <div className="hidden md:block md:w-5/12" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Manufacturing & Capabilities ── */}
      <section className="section bg-[#f7f9fc]">
        <div className="cx">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="eyebrow mb-3">Manufacturing Excellence</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1f3c] mb-5">
                Built in California.<br />Trusted Worldwide.
              </h2>
              <p className="text-[#637c95] leading-relaxed mb-5">
                Our Santa Fe Springs, California facility houses the full product lifecycle under one
                roof — from raw material receipt and precision machining to assembly, pressure testing,
                and final inspection. Every Cosasco product leaves our facility with documentation
                that meets the requirements of the world's most demanding industrial operators.
              </p>
              <p className="text-[#637c95] leading-relaxed mb-8">
                Our quality management system is ISO 9001:2015 certified. We maintain full material
                traceability on all pressure-containing and wetted components, and every product is
                reviewed against customer-specified standards and purchase order requirements before shipment.
              </p>
              <Link href="/contact" className="btn btn-primary">
                <Factory className="w-4 h-4" />
                Request a Capabilities Overview
              </Link>
            </div>
            <div>
              <div className="bg-white rounded-xl border border-[#dde4ef] p-7 mb-6">
                <h3 className="text-base font-bold text-[#0d1f3c] mb-5 flex items-center gap-2">
                  <Factory className="w-5 h-5 text-[#e05000]" />
                  Manufacturing Capabilities
                </h3>
                <ul className="space-y-3">
                  {capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm text-[#4a5e72]">
                      <CheckCircle className="w-4 h-4 text-[#e05000] flex-shrink-0 mt-0.5" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0d1f3c] rounded-xl p-5 text-center">
                  <Globe className="w-6 h-6 text-[#e05000] mx-auto mb-2" />
                  <div className="text-white font-bold text-sm">Global Distribution</div>
                  <div className="text-[#637c95] text-xs mt-1">50+ countries</div>
                </div>
                <div className="bg-[#0d1f3c] rounded-xl p-5 text-center">
                  <Clock className="w-6 h-6 text-[#e05000] mx-auto mb-2" />
                  <div className="text-white font-bold text-sm">Technical Support</div>
                  <div className="text-[#637c95] text-xs mt-1">Available worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="section bg-white">
        <div className="cx">
          <div className="text-center mb-14">
            <p className="eyebrow mb-3">Quality Assurance</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1f3c] mb-4">
              Certifications &amp; Standards
            </h2>
            <p className="text-[#637c95] text-lg max-w-2xl mx-auto">
              Every Cosasco product is manufactured under a rigorous quality management system and
              meets the standards that critical industries demand.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert) => (
              <div key={cert.name} className="card card-accent p-6">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#e05000]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Award className="w-4.5 h-4.5 text-[#e05000]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0d1f3c] text-sm mb-1.5">{cert.name}</h4>
                    <p className="text-[#637c95] text-xs leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Headquarters ── */}
      <section className="section bg-[#0d1f3c] text-white">
        <div className="cx">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow text-[#e05000] mb-4">Headquarters</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Santa Fe Springs, California
              </h2>
              <p className="text-[#b8c8da] leading-relaxed mb-6">
                Cosasco's state-of-the-art manufacturing facility in Santa Fe Springs, California
                is the home of our design engineering, precision manufacturing, hydrostatic testing,
                quality inspection, and customer support operations. Everything that matters about
                a Cosasco product happens here.
              </p>
              <address className="not-italic text-[#b8c8da] text-sm space-y-2 mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#e05000] flex-shrink-0" />
                  <span>Cosasco · Santa Fe Springs, CA, USA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#e05000] flex-shrink-0" />
                  <a href="tel:+15629490123" className="hover:text-white transition-colors">
                    +1 (562) 949-0123
                  </a>
                </div>
              </address>
              <Link href="/contact" className="btn btn-primary">
                <Phone className="w-4 h-4" />
                Contact Our Team
              </Link>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Factory className="w-8 h-8 text-[#e05000] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-base mb-2">Manufacturing Facility</h3>
                    <p className="text-[#b8c8da] text-sm leading-relaxed">
                      Precision CNC machining, alloy welding, hydrostatic testing to 15,000 psi,
                      and full quality inspection — all under ISO 9001 certification.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Globe className="w-8 h-8 text-[#e05000] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-base mb-2">Global Distribution Network</h3>
                    <p className="text-[#b8c8da] text-sm leading-relaxed">
                      Authorized distributors in 50+ countries provide local technical support,
                      stocked inventory, and application expertise to operators worldwide.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-[#e05000] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-base mb-2">Engineering Team</h3>
                    <p className="text-[#b8c8da] text-sm leading-relaxed">
                      NACE-certified corrosion engineers and application specialists available
                      for technical consultation, program design, and field support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Careers CTA ── */}
      <section className="section bg-[#f7f9fc]">
        <div className="cx">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-14 h-14 bg-[#e05000]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-7 h-7 text-[#e05000]" />
            </div>
            <p className="eyebrow mb-3">Join the Team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1f3c] mb-4">
              Work at Cosasco
            </h2>
            <p className="text-[#637c95] text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              We are always looking for talented engineers, machinists, quality specialists, and
              technical sales professionals who share our passion for solving complex industrial
              challenges. Join a team with 70 years of heritage and a future-focused outlook.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary">
                Explore Opportunities
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn btn-outline-navy">
                Contact HR
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
