import Link from 'next/link'
import {
  Shield,
  Activity,
  Droplets,
  Monitor,
  ArrowRight,
  FileText,
  Wrench,
  Globe,
  CheckCircle,
  Download,
  ChevronRight,
} from 'lucide-react'

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Static data                                                                */
/* ─────────────────────────────────────────────────────────────────────────── */

const products = [
  {
    icon: Shield,
    title: 'Corrosion Monitoring',
    desc: 'ER probes, LPR systems, access fittings, and coupon holders for continuous or periodic corrosion measurement.',
    tags: ['Intrusive', 'Non-Intrusive'],
    href: '/products/corrosion-monitoring',
  },
  {
    icon: Activity,
    title: 'Erosion Monitoring',
    desc: 'Ultrasonic wall thickness, sand detection probes, and erosion monitors for high-velocity flow environments.',
    tags: ['Sand Detection', 'UT Sensors'],
    href: '/products/erosion-monitoring',
  },
  {
    icon: Droplets,
    title: 'Chemical Injection',
    desc: 'Quill assemblies, injection valves, and dosing systems engineered for reliable chemical delivery into pressurized pipelines.',
    tags: ['Quill Assemblies', 'Injection Valves'],
    href: '/products/chemical-injection',
  },
  {
    icon: Monitor,
    title: 'Data Acquisition',
    desc: 'FieldCom wireless loggers, cloud dashboards, and SCADA-compatible systems for real-time corrosion data.',
    tags: ['Wireless', 'Cloud'],
    href: '/products/data-acquisition',
  },
]

const industries = [
  { num: '01', name: 'Oil & Gas', desc: 'Upstream, midstream, and downstream asset protection.', slug: 'oil-gas' },
  { num: '02', name: 'Petrochemical', desc: 'High-temperature, corrosive process environments.', slug: 'petrochemical' },
  { num: '03', name: 'Water Treatment', desc: 'Monitoring for potable, produced, and wastewater systems.', slug: 'water-treatment' },
  { num: '04', name: 'Chemical Processing', desc: 'Corrosion-resistant solutions for aggressive media.', slug: 'chemical-processing' },
  { num: '05', name: 'Pulp & Paper', desc: 'Asset monitoring in wet, abrasive mill environments.', slug: 'pulp-paper' },
  { num: '06', name: 'Utilities', desc: 'Power generation and transmission infrastructure.', slug: 'utilities' },
]

const stats = [
  { value: '70+', label: 'Years in Service' },
  { value: '1,000+', label: 'Products Available' },
  { value: '50+', label: 'Countries Served' },
  { value: '24/7', label: 'Technical Support' },
]

const heroStats = [
  { value: '70+', label: 'Years of Expertise' },
  { value: '1,000+', label: 'Products & Systems' },
  { value: '50+', label: 'Countries Served' },
  { value: 'ISO 9001', label: 'Certified Quality' },
]

const features = [
  {
    icon: Shield,
    title: 'Application-First Engineering',
    desc: 'We design around your process conditions, not around a catalog.',
  },
  {
    icon: Wrench,
    title: 'Full Lifecycle Support',
    desc: 'From specification through commissioning and long-term service.',
  },
  {
    icon: Globe,
    title: 'Global Reach, Local Expertise',
    desc: 'Engineering centers and distributors across 50+ countries.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Certified',
    desc: 'ISO 9001:2015, NACE, API, and ATEX/IECEx compliance.',
  },
]

const resources = [
  {
    title: 'Corrosion Probe Selection Guide',
    type: 'PDF',
    pages: '24 pages',
    desc: 'A comprehensive guide to selecting the right probe technology for your corrosion monitoring application.',
  },
  {
    title: 'Chemical Injection System Design',
    type: 'Technical Brief',
    pages: '16 pages',
    desc: 'Engineering considerations for designing reliable chemical injection systems in high-pressure pipelines.',
  },
  {
    title: 'Pipeline Monitoring Best Practices',
    type: 'White Paper',
    pages: null,
    desc: 'Industry-aligned best practices for continuous pipeline integrity monitoring and corrosion risk management.',
  },
]

const operators = ['Shell', 'Chevron', 'ExxonMobil', 'BP', 'Saudi Aramco']

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Page                                                                       */
/* ─────────────────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <main>
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section
        className="grid-bg relative overflow-hidden"
        style={{
          background: '#0a1628',
          minHeight: 'calc(100vh - 68px)',
          paddingTop: '68px',
        }}
      >
        {/* Radial glow */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 70% 50% at 60% 50%, rgba(26,61,110,0.6) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          className="cx relative"
          style={{
            display: 'flex',
            alignItems: 'center',
            minHeight: 'calc(100vh - 68px)',
            paddingTop: '5rem',
            paddingBottom: '5rem',
            gap: '4rem',
          }}
        >
          {/* Left column */}
          <div style={{ flex: '1 1 0', minWidth: 0 }}>
            {/* Eyebrow */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.5rem',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#e05000',
                  flexShrink: 0,
                }}
              />
              <span className="eyebrow">Corrosion Management Solutions</span>
            </div>

            {/* H1 */}
            <h1
              style={{
                fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                marginBottom: '1.5rem',
              }}
            >
              Protecting Critical
              <br />
              Infrastructure.
              <br />
              <span style={{ color: '#f5600a' }}>Since 1955.</span>
            </h1>

            {/* Subtext */}
            <p
              style={{
                color: '#b8c8da',
                fontSize: '1.125rem',
                lineHeight: 1.7,
                maxWidth: '540px',
                marginBottom: '2.5rem',
              }}
            >
              Advanced corrosion and erosion monitoring, chemical injection
              systems, and data acquisition for oil&nbsp;&amp;&nbsp;gas,
              petrochemical, and critical industry worldwide.
            </p>

            {/* CTA buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/products" className="btn btn-primary">
                Explore Products
                <ArrowRight size={16} />
              </Link>
              <Link href="/solutions" className="btn btn-outline-white">
                Find Your Industry
              </Link>
            </div>

            {/* Certifications micro-bar */}
            <div
              style={{
                marginTop: '3rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                flexWrap: 'wrap',
              }}
            >
              {['ISO 9001:2015', 'NACE Approved', 'API Compliant', 'ATEX / IECEx'].map(
                (cert) => (
                  <span
                    key={cert}
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: '#637c95',
                      borderLeft: '2px solid #1a3d6e',
                      paddingLeft: '0.75rem',
                    }}
                  >
                    {cert}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right column — stats card */}
          <div
            style={{
              flex: '0 0 380px',
              maxWidth: '380px',
            }}
          >
            <div
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '0.75rem',
                padding: '2rem',
                backdropFilter: 'blur(8px)',
              }}
            >
              <p
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#637c95',
                  marginBottom: '1.75rem',
                }}
              >
                Cosasco by the Numbers
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0',
                }}
              >
                {heroStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    style={{
                      padding: '1.25rem',
                      borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                      borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                    }}
                  >
                    <div
                      style={{
                        fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                        fontWeight: 800,
                        color: '#e05000',
                        lineHeight: 1,
                        marginBottom: '0.375rem',
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: '0.8125rem',
                        color: '#637c95',
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div
                style={{
                  marginTop: '1.75rem',
                  paddingTop: '1.75rem',
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Link
                  href="/contact"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: '#ffffff',
                    fontWeight: 600,
                    fontSize: '0.9375rem',
                    textDecoration: 'none',
                    transition: 'color 0.15s',
                  }}
                >
                  <span>Speak with an Engineer</span>
                  <ChevronRight size={16} color="#e05000" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST BAR ─────────────────────────────────────────────────── */}
      <section
        style={{
          background: '#eef2f7',
          borderTop: '1px solid #dde4ef',
          borderBottom: '1px solid #dde4ef',
          padding: '2.25rem 0',
        }}
      >
        <div className="cx">
          <p
            style={{
              textAlign: 'center',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#637c95',
              marginBottom: '1.5rem',
            }}
          >
            Trusted by leading operators in critical industries
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            {operators.map((op) => (
              <span
                key={op}
                style={{
                  padding: '0.5rem 1.5rem',
                  border: '1px solid #b8c8da',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#637c95',
                  letterSpacing: '0.03em',
                  background: 'rgba(255,255,255,0.6)',
                }}
              >
                {op}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. PRODUCT DISCOVERY ─────────────────────────────────────────── */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="cx">
          {/* Section header */}
          <div style={{ marginBottom: '3.5rem', maxWidth: '640px' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>
              Product Families
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                color: '#0d1f3c',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}
            >
              Find the Right Solution
            </h2>
            <p style={{ color: '#637c95', fontSize: '1.0625rem', lineHeight: 1.7 }}>
              70 years of corrosion engineering, distilled into product families
              for every application.
            </p>
          </div>

          {/* Product cards grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {products.map(({ icon: Icon, title, desc, tags, href }) => (
              <Link
                key={title}
                href={href}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <article
                  className="card card-accent"
                  style={{
                    padding: '1.75rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      background: '#0d1f3c',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color="#e05000" />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.0625rem',
                      fontWeight: 700,
                      color: '#0d1f3c',
                      lineHeight: 1.3,
                    }}
                  >
                    {title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.9375rem',
                      color: '#637c95',
                      lineHeight: 1.65,
                      flexGrow: 1,
                    }}
                  >
                    {desc}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {tags.map((tag) => (
                      <span key={tag} className="badge badge-slate">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer link */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      color: '#e05000',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      marginTop: '0.25rem',
                    }}
                  >
                    <span>View Products</span>
                    <ArrowRight size={14} />
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/products" className="btn btn-outline-navy">
              Browse Full Product Catalog
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. INDUSTRIES STRIP ──────────────────────────────────────────── */}
      <section className="section" style={{ background: '#f7f9fc' }}>
        <div className="cx">
          {/* Section header */}
          <div style={{ marginBottom: '3rem', maxWidth: '560px' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>
              Industries Served
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                color: '#0d1f3c',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              Across 6 Critical Sectors
            </h2>
          </div>

          {/* Industry cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
            }}
          >
            {industries.map(({ num, name, desc, slug }) => (
              <Link
                key={slug}
                href={`/solutions/${slug}`}
                style={{ textDecoration: 'none' }}
              >
                <article
                  className="card"
                  style={{
                    padding: '1.5rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    background: '#ffffff',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: '#e05000',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {num}
                  </span>
                  <h3
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#0d1f3c',
                      lineHeight: 1.3,
                    }}
                  >
                    {name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: '#637c95',
                      lineHeight: 1.6,
                      flexGrow: 1,
                    }}
                  >
                    {desc}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      color: '#e05000',
                      fontWeight: 600,
                      fontSize: '0.8125rem',
                      marginTop: '0.25rem',
                    }}
                  >
                    <span>Learn more</span>
                    <ArrowRight size={13} />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. STATS (DARK) ──────────────────────────────────────────────── */}
      <section style={{ background: '#0d1f3c', padding: '5rem 0' }}>
        <div className="cx">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 0,
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  textAlign: 'center',
                  padding: '2rem 1rem',
                  borderRight:
                    i < stats.length - 1
                      ? '1px solid rgba(255,255,255,0.08)'
                      : 'none',
                }}
              >
                <div className="stat-number" style={{ marginBottom: '0.5rem' }}>
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '0.9375rem',
                    color: '#637c95',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. WHY COSASCO ───────────────────────────────────────────────── */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="cx">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '5rem',
              alignItems: 'start',
            }}
          >
            {/* Left column */}
            <div style={{ position: 'sticky', top: '5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>
                Why Cosasco
              </p>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 800,
                  color: '#0d1f3c',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  marginBottom: '1.25rem',
                }}
              >
                The Cosasco
                <br />
                Difference
              </h2>
              <p
                style={{
                  color: '#637c95',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  marginBottom: '2rem',
                }}
              >
                For seven decades, Cosasco has set the standard for corrosion
                management excellence. We combine deep engineering expertise
                with field-proven technology to protect your most critical assets.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Contact an Engineer
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right 2x2 feature blocks */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem',
              }}
            >
              {features.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  style={{
                    padding: '1.75rem',
                    border: '1px solid #dde4ef',
                    borderRadius: '0.5rem',
                    background: '#fafbfd',
                    transition: 'box-shadow 0.18s ease',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      background: '#fde8d8',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                    }}
                  >
                    <Icon size={20} color="#e05000" />
                  </div>
                  <h3
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#0d1f3c',
                      marginBottom: '0.5rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9375rem',
                      color: '#637c95',
                      lineHeight: 1.65,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. RESOURCES ─────────────────────────────────────────────────── */}
      <section className="section" style={{ background: '#f7f9fc' }}>
        <div className="cx">
          {/* Section header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '1.5rem',
              marginBottom: '3rem',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>
                Engineering Library
              </p>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 800,
                  color: '#0d1f3c',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                }}
              >
                Technical Resources
              </h2>
            </div>
            <Link
              href="/resources"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
                color: '#e05000',
                fontWeight: 600,
                fontSize: '0.9375rem',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              View all resources
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Resource cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {resources.map(({ title, type, pages, desc }) => (
              <div
                key={title}
                className="card"
                style={{
                  background: '#ffffff',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                {/* Icon + badge row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      background: '#eef2f7',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <FileText size={20} color="#0d1f3c" />
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                    <span className="badge badge-navy">{type}</span>
                    {pages && (
                      <span className="badge badge-slate">{pages}</span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div style={{ flexGrow: 1 }}>
                  <h3
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#0d1f3c',
                      lineHeight: 1.35,
                      marginBottom: '0.625rem',
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9375rem',
                      color: '#637c95',
                      lineHeight: 1.65,
                    }}
                  >
                    {desc}
                  </p>
                </div>

                {/* Download button */}
                <Link
                  href="/resources"
                  className="btn btn-outline-navy"
                  style={{ fontSize: '0.875rem', padding: '0.625rem 1.25rem' }}
                >
                  <Download size={14} />
                  Download
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA BAND ────────────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #e05000 0%, #c94700 100%)',
          padding: '5rem 0',
        }}
      >
        <div className="cx">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '3rem',
              flexWrap: 'wrap',
            }}
          >
            {/* Text */}
            <div style={{ maxWidth: '580px' }}>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  marginBottom: '1rem',
                }}
              >
                Ready to protect your
                <br />
                infrastructure?
              </h2>
              <p
                style={{
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: '1.0625rem',
                  lineHeight: 1.7,
                }}
              >
                Speak with a Cosasco engineer today. We&apos;ll recommend the
                right monitoring solution for your application.
              </p>
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', flexShrink: 0 }}>
              <Link
                href="/contact"
                className="btn"
                style={{
                  background: '#ffffff',
                  color: '#0d1f3c',
                  borderColor: '#ffffff',
                  fontWeight: 700,
                }}
              >
                Contact an Engineer
                <ArrowRight size={16} />
              </Link>
              <Link href="/products" className="btn btn-outline-white">
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
