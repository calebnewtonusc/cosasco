'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
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
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  ArrowRight,
  RotateCcw,
} from 'lucide-react'

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Wizard data                                                                */
/* ─────────────────────────────────────────────────────────────────────────── */

const steps = [
  {
    id: 'environment',
    question: 'What is your operating environment?',
    subtitle: 'Select the industry that best matches your application.',
    options: [
      { id: 'oil-gas', label: 'Oil & Gas', icon: Flame, desc: 'Upstream, midstream & downstream' },
      { id: 'petrochemical', label: 'Petrochemical', icon: FlaskConical, desc: 'Refineries & process units' },
      { id: 'water', label: 'Water Treatment', icon: Droplets, desc: 'Municipal & industrial water' },
      { id: 'chemical', label: 'Chemical Processing', icon: TestTube, desc: 'Reactors, columns & transfer lines' },
      { id: 'pulp-paper', label: 'Pulp & Paper', icon: BookOpen, desc: 'High-chloride & acidic environments' },
      { id: 'utilities', label: 'Utilities / Power', icon: Zap, desc: 'Generation & distribution infrastructure' },
    ],
  },
  {
    id: 'material',
    question: 'What is your primary pipe / vessel material?',
    subtitle: 'This helps us match the right probe and fitting configuration.',
    options: [
      { id: 'carbon-steel', label: 'Carbon Steel', icon: Shield, desc: 'Most common in oil & gas' },
      { id: 'stainless', label: 'Stainless Steel', icon: Shield, desc: '304 / 316 / duplex grades' },
      { id: 'alloy', label: 'High-Alloy', icon: Shield, desc: 'Inconel, Hastelloy, titanium' },
      { id: 'non-metallic', label: 'Non-Metallic', icon: Shield, desc: 'GRP, HDPE, lined pipe' },
    ],
  },
  {
    id: 'need',
    question: 'What is your primary monitoring need?',
    subtitle: 'Select the closest match; you can combine solutions later.',
    options: [
      { id: 'corrosion-rate', label: 'Real-Time Corrosion Rate', icon: Activity, desc: 'Instantaneous ER / LPR measurement' },
      { id: 'weight-loss', label: 'Periodic Weight-Loss Analysis', icon: Shield, desc: 'Coupon retrieval & lab analysis' },
      { id: 'erosion', label: 'Erosion / Sand Detection', icon: Activity, desc: 'UT sensors & erosion probes' },
      { id: 'chemical-injection', label: 'Chemical Injection / Dosing', icon: Droplet, desc: 'Quills, valves & skids' },
      { id: 'data-remote', label: 'Remote Data & Analytics', icon: BarChart2, desc: 'Microcor® Wireless + CDO cloud dashboards' },
    ],
  },
]

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Recommendation engine                                                      */
/* ─────────────────────────────────────────────────────────────────────────── */

type Answers = Record<string, string>

interface Recommendation {
  title: string
  description: string
  products: string[]
  href: string
  secondaryHref: string
  secondaryLabel: string
}

function getRecommendation(answers: Answers): Recommendation {
  const need = answers.need ?? ''
  const env = answers.environment ?? ''

  if (need === 'corrosion-rate') {
    return {
      title: 'ER Probe System with Microcor® Wireless Logger',
      description:
        'For continuous, real-time corrosion rate data we recommend an Electrical Resistance (ER) probe installed in a Cosasco access fitting, paired with a Microcor® Wireless logger. ER probes operate in any fluid (conductive or non-conductive), making them ideal for hydrocarbon and gas service.',
      products: ['ER Probe (flush-mount or retractable)', 'Standard Access Fitting (1" or 2")', 'Microcor® Wireless Logger', 'CDO (Cosasco Data Online) Software'],
      href: '/products/corrosion-monitoring',
      secondaryHref: '/products/data-acquisition',
      secondaryLabel: 'View Data Acquisition',
    }
  }
  if (need === 'weight-loss') {
    return {
      title: 'Corrosion Coupon Monitoring System',
      description:
        'Corrosion coupons are the gold standard for periodic weight-loss analysis. Cosasco coupon racks and retractable holders allow safe insertion and retrieval without process shutdown, delivering industry-accepted laboratory data for regulatory compliance.',
      products: ['Cosasco Coupon Rack Assembly', 'Retractable Coupon Holder', 'Access Fitting (1" NPT or flanged)', 'Pre-cleaned NACE standard coupons'],
      href: '/products/corrosion-monitoring',
      secondaryHref: '/contact',
      secondaryLabel: 'Request a Quote',
    }
  }
  if (need === 'erosion') {
    return {
      title: 'Ultrasonic Thickness & Erosion Probe System',
      description:
        'For sand detection and high-velocity erosion monitoring, Cosasco offers permanently mounted UT transducers for non-intrusive wall-thickness mapping, as well as intrusive ER erosion probes for quantitative sand and particle impingement measurement.',
      products: ['UT Transducer Array (permanent)', 'Intrusive Erosion ER Probe', 'Sand Detection System', 'Erosion Data Logger'],
      href: '/products/erosion-monitoring',
      secondaryHref: '/contact',
      secondaryLabel: 'Talk to an Engineer',
    }
  }
  if (need === 'chemical-injection') {
    return {
      title: 'Chemical Injection Quill & Dosing System',
      description:
        'Cosasco quill assemblies deliver precise inhibitor injection into the live process stream without bypassing or shutting down. Fixed and retractable quills are available in a wide range of materials and pressure ratings to match your process conditions.',
      products: ['Retractable Quill Assembly', 'Injection Check Valve', 'Pulsation Dampener', 'Dosing Skid (engineered to spec)'],
      href: '/products/chemical-injection',
      secondaryHref: '/contact',
      secondaryLabel: 'Request a Quote',
    }
  }
  if (need === 'data-remote') {
    return {
      title: 'Microcor® Wireless Data Acquisition System',
      description:
        'Microcor® Wireless is Cosasco\'s flagship wireless data acquisition platform. Loggers connect to existing ER probes and sensors, transmitting corrosion data over licensed radio or cellular to CDO (Cosasco Data Online), with no wiring required in hazardous areas.',
      products: ['Microcor® Wireless Logger (IS-rated)', 'CDO (Cosasco Data Online) Cloud Dashboard', 'SCADA Integration Module', 'CDO Analysis Software'],
      href: '/products/data-acquisition',
      secondaryHref: '/software',
      secondaryLabel: 'View CDO Software',
    }
  }

  // Fallback based on environment
  if (env === 'oil-gas' || env === 'petrochemical') {
    return {
      title: 'Complete Corrosion Monitoring Package',
      description:
        'Based on your operating environment, we recommend a complete monitoring package including ER probes, access fittings, corrosion coupons, and a Microcor® Wireless data logger for continuous, automated data collection.',
      products: ['ER Probe System', 'Access Fittings', 'Corrosion Coupons', 'Microcor® Wireless Data Logger'],
      href: '/products/corrosion-monitoring',
      secondaryHref: '/contact',
      secondaryLabel: 'Talk to an Engineer',
    }
  }

  return {
    title: 'Speak with a Cosasco Application Engineer',
    description:
      'Your application has unique requirements. Our team of application engineers will help you design the right monitoring and injection program for your specific process conditions, materials, and regulatory requirements.',
    products: ['Custom configuration available', 'Free application consultation', 'Response within one business day'],
    href: '/contact',
    secondaryHref: '/products',
    secondaryLabel: 'Browse All Products',
  }
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Component                                                                  */
/* ─────────────────────────────────────────────────────────────────────────── */

export default function ProductFinder() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [complete, setComplete] = useState(false)

  const step = steps[currentStep]
  const totalSteps = steps.length

  function selectOption(optionId: string) {
    const newAnswers = { ...answers, [step.id]: optionId }
    setAnswers(newAnswers)

    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setComplete(true)
    }
  }

  function goBack() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  function reset() {
    setCurrentStep(0)
    setAnswers({})
    setComplete(false)
  }

  const recommendation = complete ? getRecommendation(answers) : null

  return (
    <div className="bg-white rounded-2xl border border-[#e8edf2] shadow-lg overflow-hidden">

      {/* Header bar */}
      <div className="bg-[#0f2a4a] px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-[#f4a65d] text-xs font-bold uppercase tracking-widest">Product Finder</p>
          <p className="text-white text-sm font-medium mt-0.5">Find the right monitoring solution</p>
        </div>
        {(currentStep > 0 || complete) && (
          <button
            onClick={reset}
            className="flex items-center gap-1.5 text-[#8ab4d4] hover:text-white text-xs font-semibold transition-colors"
          >
            <RotateCcw size={12} />
            Start over
          </button>
        )}
      </div>

      {!complete ? (
        <div className="p-6">
          {/* Progress */}
          <div className="flex items-center gap-2 mb-6">
            {steps.map((s, i) => (
              <div key={s.id} className="flex items-center gap-2 flex-1 last:flex-none">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    i < currentStep
                      ? 'bg-[#f4a65d] text-white'
                      : i === currentStep
                      ? 'bg-[#0f2a4a] text-white ring-2 ring-[#f4a65d] ring-offset-2'
                      : 'bg-[#e8edf2] text-[#8898aa]'
                  }`}
                >
                  {i < currentStep ? <CheckCircle size={14} /> : i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`h-0.5 flex-1 transition-all duration-500 ${
                      i < currentStep ? 'bg-[#f4a65d]' : 'bg-[#e8edf2]'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step label */}
          <p className="text-xs font-semibold text-[#8898aa] uppercase tracking-wider mb-1">
            Step {currentStep + 1} of {totalSteps}
          </p>

          {/* Question */}
          <h3 className="text-[#0f2a4a] font-black text-xl mb-1">{step.question}</h3>
          <p className="text-[#566677] text-sm mb-5">{step.subtitle}</p>

          {/* Options grid */}
          <div className={`grid gap-3 ${step.options.length <= 4 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
            {step.options.map((option) => {
              const Icon = option.icon
              const selected = answers[step.id] === option.id
              return (
                <button
                  key={option.id}
                  onClick={() => selectOption(option.id)}
                  className={`flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all duration-200 group ${
                    selected
                      ? 'border-[#f4a65d] bg-[#fef8f0]'
                      : 'border-[#e8edf2] hover:border-[#f4a65d] hover:bg-[#fef8f0]'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      selected ? 'bg-[#f4a65d]' : 'bg-[#f0f4f8] group-hover:bg-[#f4a65d]'
                    }`}
                  >
                    <Icon size={16} className={selected ? 'text-white' : 'text-[#566677] group-hover:text-white'} />
                  </div>
                  <div>
                    <div
                      className={`font-semibold text-sm transition-colors ${
                        selected ? 'text-[#f4a65d]' : 'text-[#0f2a4a] group-hover:text-[#f4a65d]'
                      }`}
                    >
                      {option.label}
                    </div>
                    <div className="text-xs text-[#8898aa] mt-0.5">{option.desc}</div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Back button */}
          {currentStep > 0 && (
            <button
              onClick={goBack}
              className="mt-5 flex items-center gap-1.5 text-sm text-[#566677] hover:text-[#0f2a4a] transition-colors font-medium"
            >
              <ChevronLeft size={16} />
              Back
            </button>
          )}
        </div>
      ) : (
        recommendation && (
          <div className="p-6">
            {/* Success header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle size={16} className="text-green-600" />
              </div>
              <span className="text-sm font-semibold text-green-700">Recommendation ready</span>
            </div>

            {/* Recommendation title */}
            <h3 className="text-[#0f2a4a] font-black text-xl mb-2">{recommendation.title}</h3>
            <p className="text-[#566677] text-sm leading-relaxed mb-5">{recommendation.description}</p>

            {/* Product list */}
            <div className="bg-[#f7f9fc] rounded-xl p-4 mb-5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#8898aa] mb-3">Recommended Configuration</p>
              <ul className="space-y-2">
                {recommendation.products.map((product) => (
                  <li key={product} className="flex items-start gap-2 text-sm text-[#334150]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f4a65d] shrink-0 mt-1.5" />
                    {product}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={recommendation.href}
                className="flex items-center justify-center gap-2 bg-[#f4a65d] hover:bg-[#d4892a] text-white font-semibold text-sm px-5 py-3 rounded-lg transition-colors"
              >
                View Products
                <ArrowRight size={14} />
              </Link>
              <Link
                href={recommendation.secondaryHref}
                className="flex items-center justify-center gap-2 border border-[#0f2a4a] text-[#0f2a4a] hover:bg-[#0f2a4a] hover:text-white font-semibold text-sm px-5 py-3 rounded-lg transition-colors"
              >
                {recommendation.secondaryLabel}
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        )
      )}
    </div>
  )
}
