import Link from 'next/link'
import StatCounter from '@/components/StatCounter'

const heroParticles = [
  { cx: '10%', cy: 80, r: 2, dur: '6s', delay: '0s' },
  { cx: '25%', cy: 200, r: 1.5, dur: '8s', delay: '1s' },
  { cx: '40%', cy: 120, r: 2.5, dur: '7s', delay: '2s' },
  { cx: '60%', cy: 300, r: 1.5, dur: '9s', delay: '0.5s' },
  { cx: '75%', cy: 60, r: 2, dur: '6.5s', delay: '3s' },
  { cx: '88%', cy: 220, r: 1, dur: '10s', delay: '1.5s' },
  { cx: '15%', cy: 350, r: 2, dur: '7.5s', delay: '4s' },
  { cx: '50%', cy: 420, r: 1.5, dur: '8.5s', delay: '2.5s' },
]

const pipelineYPositions = [60, 160, 260, 360, 460]

function AnimatedPipeline() {
  return (
    <svg
      viewBox="0 0 440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-lg mx-auto"
      aria-label="Animated pipeline cross-section with corrosion monitoring probe"
    >
      {/* Particle flow lines */}
      <g opacity="0.25">
        <circle cx="0" cy="180" r="3" fill="#f4a65d">
          <animateMotion dur="3s" repeatCount="indefinite" begin="0s">
            <mpath href="#flow-path" />
          </animateMotion>
        </circle>
        <circle cx="0" cy="180" r="2" fill="#94aabb">
          <animateMotion dur="3s" repeatCount="indefinite" begin="0.8s">
            <mpath href="#flow-path" />
          </animateMotion>
        </circle>
        <circle cx="0" cy="180" r="2.5" fill="#f4a65d">
          <animateMotion dur="3s" repeatCount="indefinite" begin="1.6s">
            <mpath href="#flow-path" />
          </animateMotion>
        </circle>
        <circle cx="0" cy="180" r="1.5" fill="#94aabb">
          <animateMotion dur="3s" repeatCount="indefinite" begin="2.4s">
            <mpath href="#flow-path" />
          </animateMotion>
        </circle>
      </g>
      <defs>
        <path id="flow-path" d="M 50 180 L 390 180" />
      </defs>

      {/* Pipe body */}
      <rect x="50" y="145" width="340" height="110" rx="8" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
      <rect x="50" y="145" width="340" height="14" rx="4" fill="rgba(255,255,255,0.12)" />
      <rect x="50" y="241" width="340" height="14" rx="4" fill="rgba(255,255,255,0.06)" />

      {/* Flow direction arrow */}
      <line x1="70" y1="195" x2="130" y2="195" stroke="rgba(244,166,93,0.5)" strokeWidth="1.5" strokeDasharray="4 3">
        <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1s" repeatCount="indefinite" />
      </line>
      <polyline points="126,190 134,195 126,200" stroke="rgba(244,166,93,0.5)" strokeWidth="1.5" fill="none" />
      <text x="76" y="188" fill="rgba(244,166,93,0.6)" fontSize="9" fontFamily="monospace">FLOW</text>

      {/* Access fitting */}
      <rect x="200" y="103" width="30" height="44" rx="4" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.40)" strokeWidth="2" />
      <rect x="193" y="101" width="44" height="8" rx="3" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
      <rect x="198" y="73" width="34" height="30" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.30)" strokeWidth="1.5" />
      <rect x="206" y="67" width="18" height="10" rx="2" fill="rgba(244,166,93,0.3)" stroke="rgba(244,166,93,0.6)" strokeWidth="1.5" />

      {/* Probe stem */}
      <line x1="215" y1="67" x2="215" y2="238" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />

      {/* Probe measurement rings */}
      <circle cx="215" cy="183" r="7" fill="rgba(244,166,93,0.15)" stroke="rgba(244,166,93,0.8)" strokeWidth="1.5">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="215" cy="205" r="7" fill="rgba(244,166,93,0.15)" stroke="rgba(244,166,93,0.8)" strokeWidth="1.5">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="0.3s" repeatCount="indefinite" />
      </circle>
      <circle cx="215" cy="226" r="4" fill="rgba(255,255,255,0.5)" stroke="rgba(255,255,255,0.8)" strokeWidth="1" />
      <line x1="211" y1="238" x2="219" y2="238" stroke="rgba(244,166,93,0.9)" strokeWidth="2" />

      {/* Data readout box */}
      <rect x="260" y="73" width="120" height="80" rx="6" fill="rgba(15,42,74,0.90)" stroke="rgba(244,166,93,0.5)" strokeWidth="1.5" />
      <rect x="260" y="73" width="120" height="18" rx="6" fill="rgba(244,166,93,0.25)" />
      <text x="268" y="85.5" fill="rgba(244,166,93,0.9)" fontSize="7" fontFamily="monospace" fontWeight="bold">MICROCOR® · LIVE</text>
      <circle cx="366" cy="82" r="2.5" fill="#4ade80">
        <animate attributeName="opacity" values="1;0.2;1" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <text x="268" y="103" fill="rgba(255,255,255,0.6)" fontSize="7.5" fontFamily="monospace">Corr. Rate</text>
      <text x="268" y="116" fill="#f4a65d" fontSize="14" fontFamily="monospace" fontWeight="bold">0.023 mpy</text>
      <polyline points="268,137 278,135 288,138 298,132 308,136 318,130 328,133 338,127 350,130" stroke="rgba(244,166,93,0.7)" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <line x1="268" y1="140" x2="374" y2="140" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="268" y="150" fill="rgba(74,222,128,0.8)" fontSize="7" fontFamily="monospace">TREND: -2.3% WoW</text>
      <line x1="232" y1="80" x2="258" y2="100" stroke="rgba(244,166,93,0.35)" strokeWidth="1" strokeDasharray="3 3" />

      {/* Pipe end caps */}
      <rect x="46" y="143" width="8" height="114" rx="4" fill="rgba(255,255,255,0.15)" />
      <rect x="386" y="143" width="8" height="114" rx="4" fill="rgba(255,255,255,0.15)" />
      <text x="60" y="270" fill="rgba(255,255,255,0.30)" fontSize="8" fontFamily="monospace">CARBON STEEL PIPELINE · LIVE MONITORING</text>

      {/* Particle rings around probe rings */}
      <g opacity="0.4">
        <circle cx="215" cy="183" r="14" stroke="#f4a65d" strokeWidth="0.5" fill="none">
          <animate attributeName="r" values="12;18;12" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="215" cy="205" r="14" stroke="#f4a65d" strokeWidth="0.5" fill="none">
          <animate attributeName="r" values="12;18;12" dur="3s" begin="0.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  )
}

export default function HeroSection() {
  return (
    <section
      className="pt-[75px] relative overflow-hidden"
      style={{ backgroundColor: '#0f2a4a' }}
    >
      {/* Background particle SVG layer */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          {pipelineYPositions.map((y, i) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="100%"
              y2={y}
              stroke={`rgba(244,166,93,${0.03 + i * 0.005})`}
              strokeWidth="1"
              strokeDasharray="6 18"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to={i % 2 === 0 ? '-48' : '48'}
                dur={`${4 + i}s`}
                repeatCount="indefinite"
              />
            </line>
          ))}
          {heroParticles.map((p) => (
            <circle key={`${p.cx}-${p.cy}`} cx={p.cx} cy={p.cy} r={p.r} fill="rgba(244,166,93,0.35)">
              <animate
                attributeName="cy"
                values={`${p.cy};${p.cy - 40};${p.cy}`}
                dur={p.dur}
                begin={p.delay}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;0.6;0"
                dur={p.dur}
                begin={p.delay}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </svg>
      </div>

      <div className="py-24 lg:py-32 px-4 relative z-10">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* Left: headline + buttons + stats */}
          <div className="text-center lg:text-left">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-6"
              style={{ backgroundColor: 'rgba(244,166,93,0.2)', color: '#f4a65d' }}
            >
              Trusted in 110 Countries · Since 1950
            </span>

            <h1
              className="font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05]"
              style={{ color: '#ffffff' }}
            >
              Complete confidence in
              <br />
              <span style={{ color: '#f4a65d' }}>corrosion management.</span>
            </h1>

            <p className="text-xl mt-6 max-w-2xl mx-auto lg:mx-0" style={{ color: '#94aabb' }}>
              We exist to be the most complete and precise solution to measure and monitor
              corrosion — improving the safety of people and the environment while protecting
              assets and enhancing our customers&apos; bottom line.
            </p>

            <div className="mt-10 flex justify-center lg:justify-start gap-4 flex-wrap">
              <Link
                href="/solutions"
                className="font-semibold px-8 py-3.5 rounded-md text-base bg-[#f4a65d] hover:bg-[#d4892a] text-white transition-colors"
              >
                Explore Industries
              </Link>
              <Link
                href="/contact"
                className="font-semibold px-8 py-3.5 rounded-md text-base border transition-colors"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#ffffff' }}
              >
                Contact an Expert
              </Link>
            </div>

            <div
              className="mt-16 pt-8 border-t grid grid-cols-1 sm:grid-cols-3 max-w-2xl mx-auto lg:mx-0"
              style={{ borderColor: 'rgba(255,255,255,0.1)' }}
            >
              <StatCounter end={70} suffix="+" label="Years Experience" />
              <StatCounter end={110} suffix="" label="Countries Served" />
              <StatCounter end={1} suffix="M+" label="Monitoring Locations" />
            </div>
          </div>

          {/* Right: SVG pipeline illustration */}
          <div className="hidden lg:flex items-center justify-center mt-0">
            <AnimatedPipeline />
          </div>

        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="relative h-12 overflow-hidden" style={{ backgroundColor: '#0f2a4a' }}>
        <svg
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-12"
          fill="white"
        >
          <path d="M0,48 L0,24 Q360,0 720,24 Q1080,48 1440,24 L1440,48 Z" />
        </svg>
      </div>
    </section>
  )
}
