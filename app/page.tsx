import { Shield, Activity, Droplets, BarChart2, FileText, Wrench, Settings, CheckCircle } from 'lucide-react'

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Static data                                                                */
/* ─────────────────────────────────────────────────────────────────────────── */

const industries = [
  {
    num: '01',
    name: 'Oil & Gas',
    desc: 'From wellhead to refinery, our monitoring solutions protect upstream, midstream, and downstream assets operating under extreme pressures and corrosive environments. We serve operators worldwide with API-compliant systems.',
  },
  {
    num: '02',
    name: 'Petrochemical',
    desc: 'High-temperature, aggressive chemical process environments demand precision corrosion control. Our instruments handle H2S, chloride, and acid attack in crackers, reformers, and storage facilities.',
  },
  {
    num: '03',
    name: 'Water Treatment',
    desc: 'Potable, produced, and wastewater systems require continuous corrosion monitoring to ensure public safety and regulatory compliance. We supply probes and analyzers suited for municipal and industrial scale.',
  },
  {
    num: '04',
    name: 'Chemical Processing',
    desc: 'Reactors, heat exchangers, and transfer lines handling caustic or acidic media rely on our ER and LPR probe systems for early corrosion detection and process integrity management.',
  },
  {
    num: '05',
    name: 'Pulp & Paper',
    desc: 'Bleaching agents, black liquor, and steam environments create unique corrosion challenges. Our monitoring equipment withstands the demanding conditions found in pulp digesters and recovery systems.',
  },
  {
    num: '06',
    name: 'Utilities',
    desc: 'Power generation plants, cooling water systems, and steam distribution networks rely on Cosasco sensors to track metal loss and prevent unplanned outages across critical utility infrastructure.',
  },
]

const products = [
  {
    icon: Shield,
    category: 'Corrosion Monitoring',
    name: 'ER & LPR Probe Systems',
    desc: 'Electrical resistance and linear polarization resistance probes for continuous, real-time corrosion rate measurement in any process fluid.',
    pills: ['ER Probes', 'LPR Systems', 'Coupon Holders'],
  },
  {
    icon: Activity,
    category: 'Erosion Monitoring',
    name: 'Sand & Wall-Loss Detection',
    desc: 'Ultrasonic sensors and sand detection probes engineered for high-velocity multiphase flow, protecting bends, tees, and reducers.',
    pills: ['UT Sensors', 'Sand Monitors', 'Flush Probes'],
  },
  {
    icon: Droplets,
    category: 'Chemical Injection',
    name: 'Quill & Injection Systems',
    desc: 'Precision quill assemblies, injection valves, and check valves engineered for reliable chemical delivery into pressurized pipelines.',
    pills: ['Injection Quills', 'Check Valves', 'Packing Glands'],
  },
  {
    icon: BarChart2,
    category: 'Data Acquisition',
    name: 'FieldCom & Cloud Analytics',
    desc: 'Wireless data loggers, cloud dashboards, and SCADA-compatible systems for centralised corrosion data management and reporting.',
    pills: ['FieldCom Logger', 'Cloud Dashboard', 'SCADA Output'],
  },
]

const services = [
  {
    icon: FileText,
    title: 'Design & Documentation',
    desc: 'Our application engineers work directly with your team to design the right monitoring architecture for your process conditions. We produce full P&ID markups, material selection reports, and site-specific installation drawings. Every design is reviewed against NACE, API, and ISO standards before submission. Documentation packages are available in all major engineering formats.',
  },
  {
    icon: Wrench,
    title: 'Installation & Commissioning',
    desc: 'Cosasco-trained field technicians handle safe, hot-tap installation of access fittings and retrieval equipment on live process lines. We commission all electronic instruments on site, verify signal integrity, and integrate with your existing DCS or SCADA network. Commissioning reports with baseline corrosion readings are provided at handover. Zero process interruption is our standard.',
  },
  {
    icon: Settings,
    title: 'Service & Maintenance',
    desc: 'We offer global service agreements covering periodic probe retrieval, coupon analysis, instrument calibration, and software updates. Our regional service centres maintain a full inventory of replacement parts for minimal downtime. Remote diagnostics via FieldCom allow our engineers to triage sensor issues without an on-site visit. Annual integrity audits keep your programme compliant.',
  },
]

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Page component (Server Component — no client directives needed)            */
/* ─────────────────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <main>

      {/* ─── SECTION 1: HERO ─────────────────────────────────────────────── */}
      <section
        className="relative bg-[#0f2a4a] min-h-[calc(100vh-72px)] flex items-center pt-[72px]"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 60% 40%, #1a3a5c 0%, #0f2a4a 100%)',
        }}
      >
        {/* Grid texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-16 py-20 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left: Copy */}
            <div className="flex-1">
              <p className="text-[#e05000] text-sm font-semibold tracking-widest uppercase mb-5">
                Global Leader in Corrosion Management
              </p>
              <h1 className="text-4xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
                Protecting Critical<br />Infrastructure.
              </h1>
              <p className="text-[#e05000] font-bold text-2xl lg:text-3xl mt-3">
                Since 1955.
              </p>
              <p className="text-[#94aabb] text-lg mt-5 max-w-xl leading-relaxed">
                Cosasco delivers world-class corrosion and erosion monitoring instruments, chemical injection systems, and lifecycle support services to the global energy and process industries — keeping pipelines, vessels, and infrastructure safe.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="/solutions"
                  className="bg-[#e05000] text-white rounded-md px-6 py-3 font-semibold hover:bg-[#c44400] transition-colors"
                >
                  Explore Solutions
                </a>
                <a
                  href="/contact"
                  className="border border-white/30 text-white rounded-md px-6 py-3 font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact an Expert
                </a>
              </div>
            </div>

            {/* Right: Stats card */}
            <div className="lg:w-[380px] w-full">
              <div className="bg-[#1a3a5c]/80 backdrop-blur border border-white/10 rounded-xl p-6">
                <p className="text-[#94aabb] text-xs uppercase tracking-widest font-semibold mb-5">
                  By the Numbers
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { num: '70+', label: 'Years of Expertise' },
                    { num: '110', label: 'Countries Served' },
                    { num: '1M+', label: 'Monitoring Locations' },
                    { num: 'ISO 9001', label: 'Quality Certified' },
                  ].map(({ num, label }) => (
                    <div key={label}>
                      <p className="text-[#e05000] text-4xl font-black leading-none">{num}</p>
                      <p className="text-[#94aabb] text-sm mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 2: METRICS BAND ──────────────────────────────────────── */}
      <section className="bg-white border-y border-[#e8edf2] py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#e8edf2]">
            {[
              { num: '70+', label: 'Years Industry Leadership' },
              { num: '110', label: 'Countries Global Operations' },
              { num: '1,000,000+', label: 'Active Monitoring Locations' },
            ].map(({ num, label }) => (
              <div key={label} className="flex flex-col items-center text-center py-6 sm:px-8">
                <p className="text-[#0f2a4a] font-black text-5xl leading-none">{num}</p>
                <p className="text-[#566677] text-base mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: INDUSTRIES ────────────────────────────────────────── */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <p className="text-[#e05000] text-sm font-semibold uppercase tracking-widest">
            Industries We Serve
          </p>
          <h2 className="text-[#0f2a4a] font-black text-3xl lg:text-4xl mt-2">
            From Wellhead to Treatment Plant
          </h2>
          <p className="text-[#566677] mt-3 max-w-2xl leading-relaxed">
            Cosasco monitoring systems operate in the world&rsquo;s most demanding process environments. Whatever your industry, we have the instruments, expertise, and global service network to protect your assets.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {industries.map((ind) => (
              <div
                key={ind.num}
                className="bg-white border border-[#e8edf2] rounded-xl p-6 hover:shadow-lg hover:border-[#e05000] transition-all cursor-pointer group"
              >
                <p className="text-[#e05000] font-bold text-sm">{ind.num}</p>
                <p className="font-bold text-[#0f2a4a] text-lg mt-1 group-hover:text-[#e05000] transition-colors">
                  {ind.name}
                </p>
                <p className="text-[#566677] text-sm mt-2 leading-relaxed">{ind.desc}</p>
                <p className="text-[#e05000] text-sm font-semibold mt-4">View Solutions &rarr;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: PRODUCTS ──────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-[#0f2a4a] font-black text-3xl lg:text-4xl">
              Complete Corrosion Management Systems
            </h2>
            <p className="text-[#566677] mt-3 text-lg">
              From probe insertion to cloud analytics &mdash; everything you need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {products.map((p) => {
              const Icon = p.icon
              return (
                <div
                  key={p.name}
                  className="border border-[#e8edf2] rounded-xl overflow-hidden hover:shadow-lg transition-all group"
                >
                  {/* Card top */}
                  <div
                    className="bg-[#0f2a4a] p-8 flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #0f2a4a 0%, #1a3a5c 100%)',
                    }}
                  >
                    <Icon className="w-12 h-12 text-white opacity-90" strokeWidth={1.5} />
                  </div>

                  {/* Card body */}
                  <div className="bg-white p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#8898aa] mb-1">
                      {p.category}
                    </p>
                    <p className="font-bold text-[#0f2a4a] text-base">{p.name}</p>
                    <p className="text-sm text-[#566677] mt-2 leading-relaxed">{p.desc}</p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {p.pills.map((pill) => (
                        <span
                          key={pill}
                          className="bg-[#f0f4f8] text-[#334155] text-xs px-2 py-1 rounded"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                    <p className="text-[#e05000] text-sm font-semibold mt-3">
                      Learn More &rarr;
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: SERVICES ──────────────────────────────────────────── */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-[#e05000] text-sm font-semibold uppercase tracking-widest mb-2">
              Beyond the Product
            </p>
            <h2 className="text-[#0f2a4a] font-black text-3xl lg:text-4xl">
              Full Lifecycle Support
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.title}
                  className="bg-white border border-[#e8edf2] rounded-xl p-8"
                >
                  <Icon className="w-8 h-8 text-[#e05000]" strokeWidth={1.75} />
                  <p className="font-bold text-[#0f2a4a] text-xl mt-4">{s.title}</p>
                  <p className="text-[#566677] mt-3 leading-relaxed text-sm">{s.desc}</p>
                  <a href="/support" className="text-[#e05000] text-sm font-semibold mt-5 inline-block hover:underline">
                    Learn More
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: SOCIAL PROOF / QUOTE ─────────────────────────────── */}
      <section className="bg-[#0f2a4a] py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-16 text-center">
          <p className="text-[#e05000] text-6xl font-black leading-none mb-6">&ldquo;</p>
          <blockquote className="text-white text-xl lg:text-2xl font-medium leading-relaxed">
            Cosasco&rsquo;s monitoring systems have been integral to our corrosion management program for over 15 years. The data quality is unmatched.
          </blockquote>
          <p className="text-[#94aabb] mt-6 text-sm font-medium">
            &mdash; Senior Corrosion Engineer, Major Gulf Coast Operator
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
            {['SHELL', 'CHEVRON', 'EXXONMOBIL', 'BP', 'SAUDI ARAMCO'].map((co, i, arr) => (
              <span key={co} className="flex items-center gap-6">
                <span className="text-[#4a6a84] font-semibold text-sm tracking-wider">{co}</span>
                {i < arr.length - 1 && (
                  <span className="text-[#2a4a64] font-bold">&middot;</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: CONSULTATION CTA ──────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left: Copy */}
            <div>
              <h2 className="text-[#0f2a4a] font-black text-3xl lg:text-4xl leading-tight">
                Talk to a Corrosion Expert
              </h2>
              <p className="text-[#566677] mt-4 text-lg leading-relaxed">
                Tell us about your application and we&rsquo;ll recommend the right monitoring solution for your process environment, budget, and compliance requirements.
              </p>
              <ul className="mt-8 flex flex-col gap-4">
                {[
                  'No commitment required',
                  'Response within 1 business day',
                  'Direct access to application engineers',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#e05000] shrink-0" />
                    <span className="text-[#334155] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Form */}
            <div className="bg-[#f7f9fc] rounded-xl p-8 border border-[#e8edf2]">
              <form className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#334155] mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full border border-[#d1dbe6] rounded-lg px-4 py-3 text-sm text-[#0f2a4a] bg-white placeholder-[#94aabb] focus:outline-none focus:border-[#e05000] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#334155] mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Your company"
                    className="w-full border border-[#d1dbe6] rounded-lg px-4 py-3 text-sm text-[#0f2a4a] bg-white placeholder-[#94aabb] focus:outline-none focus:border-[#e05000] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#334155] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full border border-[#d1dbe6] rounded-lg px-4 py-3 text-sm text-[#0f2a4a] bg-white placeholder-[#94aabb] focus:outline-none focus:border-[#e05000] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#334155] mb-1">
                    Industry
                  </label>
                  <select
                    className="w-full border border-[#d1dbe6] rounded-lg px-4 py-3 text-sm text-[#0f2a4a] bg-white focus:outline-none focus:border-[#e05000] transition-colors appearance-none"
                  >
                    <option value="">Select your industry</option>
                    <option>Oil &amp; Gas</option>
                    <option>Petrochemical</option>
                    <option>Water Treatment</option>
                    <option>Chemical Processing</option>
                    <option>Pulp &amp; Paper</option>
                    <option>Utilities</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#334155] mb-1">
                    What&rsquo;s your biggest corrosion challenge?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your application, environment, or specific monitoring needs..."
                    className="w-full border border-[#d1dbe6] rounded-lg px-4 py-3 text-sm text-[#0f2a4a] bg-white placeholder-[#94aabb] focus:outline-none focus:border-[#e05000] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#e05000] text-white font-semibold rounded-lg py-3 hover:bg-[#c44400] transition-colors mt-1"
                >
                  Request Consultation
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}
