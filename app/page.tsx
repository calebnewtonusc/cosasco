import Link from 'next/link'
import {
  CheckCircle,
  Flame,
  FlaskConical,
  Droplets,
  TestTube,
  BookOpen,
  Zap,
  Shield,
  Activity,
  Droplet,
  BarChart2,
  FileText,
  Settings,
  Wrench,
  ArrowRight,
} from 'lucide-react'

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Static data                                                                */
/* ─────────────────────────────────────────────────────────────────────────── */

const industries = [
  {
    icon: Flame,
    name: 'Oil & Gas',
    desc: 'Upstream, midstream, and downstream asset protection.',
    href: '/industries/oil-gas',
  },
  {
    icon: FlaskConical,
    name: 'Petrochemical',
    desc: 'Precision monitoring in high-temperature process environments.',
    href: '/industries/petrochemical',
  },
  {
    icon: Droplets,
    name: 'Water Treatment',
    desc: 'Corrosion and scale control in distribution and treatment systems.',
    href: '/industries/water',
  },
  {
    icon: TestTube,
    name: 'Chemical Processing',
    desc: 'Aggressive media monitoring for reactors, columns, and transfer lines.',
    href: '/industries/chemical',
  },
  {
    icon: BookOpen,
    name: 'Pulp & Paper',
    desc: 'Continuous monitoring in high-chloride, acidic digester environments.',
    href: '/industries/pulp-paper',
  },
  {
    icon: Zap,
    name: 'Utilities',
    desc: 'Corrosion management for power generation and distribution infrastructure.',
    href: '/industries/utilities',
  },
]

const productFamilies = [
  {
    icon: Shield,
    category: 'Protection',
    name: 'Corrosion Monitoring',
    desc: 'ER probes, LPR instruments, and access fittings for real-time metal loss measurement across any process environment.',
    href: '/products/corrosion-monitoring',
  },
  {
    icon: Activity,
    category: 'Flow Assurance',
    name: 'Erosion Monitoring',
    desc: 'Ultrasonic thickness sensors, sand detection probes, and erosion monitors for high-velocity multiphase flow.',
    href: '/products/erosion-monitoring',
  },
  {
    icon: Droplet,
    category: 'Chemical Control',
    name: 'Chemical Injection',
    desc: 'Quill assemblies, injection valves, and precision dosing systems for inhibitor programs and chemical treatment.',
    href: '/products/chemical-injection',
  },
  {
    icon: BarChart2,
    category: 'Intelligence',
    name: 'Data Acquisition',
    desc: 'FieldCom wireless systems, SCADA integration, and cloud-based analytics that turn field data into actionable insight.',
    href: '/products/data-acquisition',
  },
]

const services = [
  {
    icon: FileText,
    title: 'Design & Documentation',
    desc: 'Our application engineers work with your team to design the right monitoring program — from access fitting placement to system-level documentation packages compliant with your standards.',
    href: '/services/design',
  },
  {
    icon: Settings,
    title: 'Installation & Commissioning',
    desc: 'Certified field teams deploy and commission Cosasco systems to your specification, ensuring safe hot-tap insertion at full operating pressure with minimal disruption.',
    href: '/services/installation',
  },
  {
    icon: Wrench,
    title: 'Service & Maintenance',
    desc: 'From planned probe retrieval cycles to emergency callouts, our global service network keeps your corrosion monitoring program running continuously and accurately.',
    href: '/services/maintenance',
  },
]

const trustPoints = [
  'No sales pressure — speak directly with an application engineer',
  'Response within one business day',
  'Global support in 110 countries',
]

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Page                                                                       */
/* ─────────────────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <main className="bg-white">

      {/* ── SECTION 1: HERO ─────────────────────────────────────────────── */}
      <section
        className="pt-[75px]"
        style={{ backgroundColor: '#0f2a4a' }}
      >
        <div className="py-24 lg:py-32 px-4">
          <div className="max-w-7xl mx-auto text-center">

            {/* Pill label */}
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-6"
              style={{
                backgroundColor: 'rgba(244,166,93,0.2)',
                color: '#f4a65d',
              }}
            >
              Trusted in 110 Countries
            </span>

            {/* Headline */}
            <h1
              className="font-black text-5xl lg:text-6xl xl:text-7xl leading-[1.05]"
              style={{ color: '#ffffff' }}
            >
              Complete confidence in
              <br />
              <span style={{ color: '#f4a65d' }}>corrosion management.</span>
            </h1>

            {/* Subparagraph */}
            <p
              className="text-xl mt-6 max-w-2xl mx-auto"
              style={{ color: '#94aabb' }}
            >
              Cosasco has been the trusted partner for corrosion and erosion
              monitoring solutions for over 70 years. From access fittings to
              full FieldCom data systems, we support operators in 110 countries.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link
                href="/solutions"
                className="font-semibold px-8 py-3.5 rounded-md text-base bg-[#f4a65d] hover:bg-[#d4892a] text-white transition-colors"
              >
                Explore Industries
              </Link>
              <Link
                href="/contact"
                className="font-semibold px-8 py-3.5 rounded-md text-base border transition-colors"
                style={{
                  borderColor: 'rgba(255,255,255,0.3)',
                  color: '#ffffff',
                }}
              >
                Contact an Expert
              </Link>
            </div>

            {/* Stats row */}
            <div
              className="mt-16 pt-8 border-t grid grid-cols-3 max-w-2xl mx-auto"
              style={{ borderColor: 'rgba(255,255,255,0.1)' }}
            >
              {[
                { value: '70+', label: 'Years Experience' },
                { value: '110', label: 'Countries Served' },
                { value: '1M+', label: 'Monitoring Locations' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="font-black text-4xl"
                    style={{ color: '#f4a65d' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-sm mt-1"
                    style={{ color: '#94aabb' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 2: TRUST / VALUE PROP ───────────────────────────────── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* Left column */}
          <div>
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: '#f4a65d' }}
            >
              Why Cosasco
            </span>
            <h2
              className="font-black text-3xl lg:text-4xl mt-3 leading-tight"
              style={{ color: '#0f2a4a' }}
            >
              The most complete corrosion management portfolio in the industry.
            </h2>
            <p
              className="mt-5 leading-relaxed"
              style={{ color: '#374151' }}
            >
              For over seven decades, Cosasco has led the industry in corrosion
              and erosion monitoring technology. From the original retractable
              probe and coupon rack designs to today&apos;s wireless FieldCom
              data systems, every product is built on deep application
              engineering knowledge. Major operators trust Cosasco because we
              understand the chemistry, the pressures, and the consequences.
            </p>
            <Link
              href="/about"
              className="text-sm font-semibold mt-6 inline-flex items-center gap-1 transition-colors"
              style={{ color: '#f4a65d' }}
            >
              Learn about our history
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right column — feature rows */}
          <div className="mt-12 lg:mt-0 space-y-7">
            {[
              {
                title: '70+ Years of Application Engineering',
                desc: 'Not just products. Deep domain expertise across every major industrial process.',
              },
              {
                title: 'Online Retrieval Without Shutdown',
                desc: 'Live insertion and extraction of monitoring equipment at full operating pressure.',
              },
              {
                title: 'From Probe to Cloud',
                desc: 'ER probes, access fittings, FieldCom wireless, and analytics — a complete system.',
              },
              {
                title: 'Global Support Network',
                desc: 'Engineers and distributors in 110 countries ready to support your program.',
              },
            ].map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <CheckCircle
                  size={20}
                  className="shrink-0 mt-0.5"
                  style={{ color: '#f4a65d' }}
                />
                <div>
                  <div
                    className="font-semibold"
                    style={{ color: '#0f2a4a' }}
                  >
                    {feature.title}
                  </div>
                  <div
                    className="text-sm mt-0.5"
                    style={{ color: '#6b7280' }}
                  >
                    {feature.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 3: INDUSTRIES ────────────────────────────────────────── */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: '#f7f9fc' }}
      >
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: '#f4a65d' }}
            >
              Industries
            </span>
            <h2
              className="font-black text-3xl lg:text-4xl mt-2"
              style={{ color: '#0f2a4a' }}
            >
              Built for the toughest environments.
            </h2>
            <p
              className="mt-3 max-w-xl mx-auto"
              style={{ color: '#6b7280' }}
            >
              Cosasco solutions are engineered for the specific corrosion
              challenges of each sector.
            </p>
          </div>

          {/* Industry cards */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {industries.map((ind) => {
              const Icon = ind.icon
              return (
                <Link
                  key={ind.name}
                  href={ind.href}
                  className="bg-white rounded-xl border p-6 hover:shadow-lg transition-all duration-200 cursor-pointer group flex flex-col"
                  style={{ borderColor: '#e8edf2' }}
                >
                  {/* Icon box */}
                  <div
                    className="rounded-lg p-2.5 w-10 h-10 flex items-center justify-center transition-colors group-hover:bg-[#fef3e2]"
                    style={{ backgroundColor: '#f7f9fc' }}
                  >
                    <Icon size={18} style={{ color: '#f4a65d' }} />
                  </div>

                  {/* Industry name */}
                  <div
                    className="font-bold text-base mt-3 transition-colors group-hover:text-[#f4a65d]"
                    style={{ color: '#0f2a4a' }}
                  >
                    {ind.name}
                  </div>

                  {/* Description */}
                  <div
                    className="text-sm mt-1 leading-snug"
                    style={{ color: '#6b7280' }}
                  >
                    {ind.desc}
                  </div>

                  {/* CTA */}
                  <div
                    className="text-xs font-semibold mt-4"
                    style={{ color: '#f4a65d' }}
                  >
                    View solutions →
                  </div>
                </Link>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── SECTION 4: PRODUCT FAMILIES ──────────────────────────────────── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Intro row */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-end">
            <div>
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: '#f4a65d' }}
              >
                Products
              </span>
              <h2
                className="font-black text-3xl lg:text-4xl mt-2 leading-tight"
                style={{ color: '#0f2a4a' }}
              >
                Complete monitoring systems.
              </h2>
              <p
                className="mt-4 leading-relaxed"
                style={{ color: '#374151' }}
              >
                Every component designed to work together — from the access
                fitting on the pipe wall to the dashboard in the control room.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <div
                className="font-black text-5xl"
                style={{ color: '#0f2a4a' }}
              >
                1,000+
              </div>
              <div
                className="text-sm mt-1 leading-relaxed max-w-xs"
                style={{ color: '#6b7280' }}
              >
                Products spanning access fittings, probes, retrievers, chemical
                injection, and data systems — engineered for interoperability.
              </div>
            </div>
          </div>

          {/* Product family cards */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-12">
            {productFamilies.map((pf) => {
              const Icon = pf.icon
              return (
                <Link
                  key={pf.name}
                  href={pf.href}
                  className="border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 group flex flex-col"
                  style={{ borderColor: '#e8edf2' }}
                >
                  {/* Card header */}
                  <div
                    className="px-6 pt-6 pb-8 relative overflow-hidden"
                    style={{ backgroundColor: '#0f2a4a' }}
                  >
                    {/* Background decoration */}
                    <div
                      className="absolute right-0 top-0 bottom-0 w-24"
                      style={{
                        background:
                          'linear-gradient(to left, #1a3a5c, transparent)',
                      }}
                    />
                    <Icon
                      size={28}
                      className="relative z-10"
                      style={{ color: '#f4a65d' }}
                    />
                    <div
                      className="text-xs font-bold uppercase tracking-wider mt-4 relative z-10"
                      style={{ color: '#8ab4d4' }}
                    >
                      {pf.category}
                    </div>
                    <div
                      className="font-bold text-lg leading-snug mt-1 relative z-10"
                      style={{ color: '#ffffff' }}
                    >
                      {pf.name}
                    </div>
                  </div>

                  {/* Card body */}
                  <div
                    className="px-6 py-5 bg-white flex flex-col flex-1"
                  >
                    <p
                      className="text-sm leading-relaxed flex-1"
                      style={{ color: '#6b7280' }}
                    >
                      {pf.desc}
                    </p>
                    <div
                      className="mt-4 pt-4 border-t flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
                      style={{
                        borderColor: '#f4f6f8',
                        color: '#f4a65d',
                      }}
                    >
                      Learn more
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── SECTION 5: SERVICES ──────────────────────────────────────────── */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: '#f7f9fc' }}
      >
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: '#f4a65d' }}
            >
              Services
            </span>
            <h2
              className="font-black text-3xl lg:text-4xl mt-2"
              style={{ color: '#0f2a4a' }}
            >
              Full Lifecycle Support
            </h2>
            <p
              className="mt-3 max-w-xl mx-auto"
              style={{ color: '#6b7280' }}
            >
              From initial program design through long-term maintenance, Cosasco
              engineers support your corrosion management program at every stage.
            </p>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
            {services.map((svc) => {
              const Icon = svc.icon
              return (
                <div
                  key={svc.title}
                  className="bg-white border rounded-xl p-8"
                  style={{ borderColor: '#e8edf2' }}
                >
                  <Icon size={32} style={{ color: '#f4a65d' }} />
                  <div
                    className="font-bold text-xl mt-5"
                    style={{ color: '#0f2a4a' }}
                  >
                    {svc.title}
                  </div>
                  <p
                    className="text-sm mt-3 leading-relaxed"
                    style={{ color: '#6b7280' }}
                  >
                    {svc.desc}
                  </p>
                  <Link
                    href={svc.href}
                    className="text-sm font-semibold mt-5 flex items-center gap-1 transition-colors"
                    style={{ color: '#f4a65d' }}
                  >
                    Learn more
                    <ArrowRight size={14} />
                  </Link>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── SECTION 6: QUOTE / SOCIAL PROOF ─────────────────────────────── */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: '#0f2a4a' }}
      >
        <div className="max-w-3xl mx-auto text-center">

          {/* Open quote mark */}
          <div
            className="text-7xl font-black leading-none"
            style={{ color: '#f4a65d' }}
          >
            &ldquo;
          </div>

          {/* Quote */}
          <p
            className="text-xl lg:text-2xl font-light leading-relaxed italic mt-2"
            style={{ color: '#ffffff' }}
          >
            Cosasco&apos;s monitoring systems have been central to our integrity
            management program for over 15 years. The data accuracy is
            unmatched in the field.
          </p>

          {/* Attribution */}
          <p
            className="text-sm mt-6"
            style={{ color: '#94aabb' }}
          >
            — Senior Integrity Engineer, Major North Sea Operator
          </p>

          {/* Operator name band */}
          <div
            className="text-sm font-semibold tracking-wider mt-10"
            style={{ color: '#4a6a84' }}
          >
            SHELL &nbsp;·&nbsp; BP &nbsp;·&nbsp; CHEVRON &nbsp;·&nbsp; EXXONMOBIL &nbsp;·&nbsp; SAUDI ARAMCO
          </div>

        </div>
      </section>

      {/* ── SECTION 7: CTA BAND ──────────────────────────────────────────── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* Left column */}
          <div>
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: '#f4a65d' }}
            >
              Get in Touch
            </span>
            <h2
              className="font-black text-3xl lg:text-4xl mt-3 leading-tight"
              style={{ color: '#0f2a4a' }}
            >
              Talk to a Cosasco engineer.
            </h2>
            <p
              className="mt-4 leading-relaxed"
              style={{ color: '#374151' }}
            >
              Describe your application and we&apos;ll recommend the right
              monitoring strategy — no obligation.
            </p>

            {/* Trust points */}
            <div className="mt-8 space-y-4">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="shrink-0 mt-0.5"
                    style={{ color: '#f4a65d' }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: '#374151' }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — form */}
          <div
            className="mt-12 lg:mt-0 border rounded-2xl p-8"
            style={{
              backgroundColor: '#f7f9fc',
              borderColor: '#e8edf2',
            }}
          >
            <form className="space-y-4">

              {/* Name + Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: '#374151' }}
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jane Smith"
                    className="w-full px-3.5 py-2.5 rounded-lg border text-sm outline-none focus:ring-2 bg-white"
                    style={{
                      borderColor: '#e8edf2',
                      color: '#374151',
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: '#374151' }}
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Acme Energy"
                    className="w-full px-3.5 py-2.5 rounded-lg border text-sm outline-none focus:ring-2 bg-white"
                    style={{
                      borderColor: '#e8edf2',
                      color: '#374151',
                    }}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold mb-1.5"
                  style={{ color: '#374151' }}
                >
                  Work Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jane@acmecorp.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border text-sm outline-none focus:ring-2 bg-white"
                  style={{
                    borderColor: '#e8edf2',
                    color: '#374151',
                  }}
                />
              </div>

              {/* Industry select */}
              <div>
                <label
                  htmlFor="industry"
                  className="block text-xs font-semibold mb-1.5"
                  style={{ color: '#374151' }}
                >
                  Industry
                </label>
                <select
                  id="industry"
                  className="w-full px-3.5 py-2.5 rounded-lg border text-sm outline-none focus:ring-2 bg-white appearance-none"
                  style={{
                    borderColor: '#e8edf2',
                    color: '#374151',
                  }}
                >
                  <option value="">Select your industry</option>
                  <option value="oil-gas">Oil &amp; Gas</option>
                  <option value="petrochemical">Petrochemical</option>
                  <option value="water">Water Treatment</option>
                  <option value="chemical">Chemical Processing</option>
                  <option value="pulp-paper">Pulp &amp; Paper</option>
                  <option value="utilities">Utilities</option>
                </select>
              </div>

              {/* Challenge textarea */}
              <div>
                <label
                  htmlFor="challenge"
                  className="block text-xs font-semibold mb-1.5"
                  style={{ color: '#374151' }}
                >
                  Describe your corrosion challenge
                </label>
                <textarea
                  id="challenge"
                  rows={3}
                  placeholder="Tell us about your process environment, current issues, or monitoring goals..."
                  className="w-full px-3.5 py-2.5 rounded-lg border text-sm outline-none focus:ring-2 bg-white resize-none"
                  style={{
                    borderColor: '#e8edf2',
                    color: '#374151',
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full font-semibold py-3 rounded-lg mt-2 text-white transition-colors"
                style={{ backgroundColor: '#f4a65d' }}
              >
                Request a Consultation
              </button>

            </form>
          </div>

        </div>
      </section>

    </main>
  )
}
