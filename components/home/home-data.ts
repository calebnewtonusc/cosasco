import {
  Flame,
  FlaskConical,
  BookOpen,
  Shield,
  Activity,
  Droplet,
  BarChart2,
  FileText,
  Settings,
  Wrench,
  Award,
  Globe,
  Users,
  TrendingDown,
  Route,
  Gauge,
  Settings2,
} from 'lucide-react'

// Six industries from cosasco.com — matches site 100%. Links to /industry/[slug].
export const industries = [
  {
    icon: Flame,
    name: 'Upstream',
    desc: 'Real-time corrosion monitoring for the most challenging environments.',
    href: '/industry/upstream',
    detail: 'Cosasco\'s dependable corrosion management solutions provide upstream engineers with the information they need to make quick, accurate decisions in severe, remote, and rapidly changing environments.',
    color: 'from-orange-500/10 to-orange-500/5',
    accent: '#ea580c',
  },
  {
    icon: Route,
    name: 'Midstream',
    desc: 'Safe, compliant transport and storage of oil and gas products.',
    href: '/industry/midstream',
    detail: 'Balance regulatory requirements, asset performance, and cost with real-time monitoring for pipeline, processing, and storage assets. Detect internal and external corrosion before it causes damage or failure.',
    color: 'from-slate-500/10 to-slate-500/5',
    accent: '#64748b',
  },
  {
    icon: FlaskConical,
    name: 'Downstream',
    desc: 'Critical asset monitoring to optimize production and safety.',
    href: '/industry/downstream',
    detail: 'In high-risk downstream environments, real-time corrosion monitoring helps optimize maintenance spend, protect people and assets, and maximize uptime with reliable monitoring technology.',
    color: 'from-purple-500/10 to-purple-500/5',
    accent: '#7c3aed',
  },
  {
    icon: Gauge,
    name: 'Gas Transmission',
    desc: 'Internal and external threat identification and risk reduction.',
    href: '/industry/gas-transmission',
    detail: 'Meet regulatory and integrity management requirements such as PHMSA Mega-Rules with real-time monitoring. Detect internal and external material degradation and defects.',
    color: 'from-slate-500/10 to-slate-500/5',
    accent: '#64748b',
  },
  {
    icon: BookOpen,
    name: 'Pulp & Paper',
    desc: 'Protect critical assets in sensitive environments.',
    href: '/industry/pulp-paper',
    detail: 'Measure and mitigate airborne, internal, and external corrosion in real-time. Reduce unplanned maintenance and equipment replacement costs through tighter control of atmospheric corrosion.',
    color: 'from-amber-500/10 to-amber-500/5',
    accent: '#d97706',
  },
  {
    icon: Settings2,
    name: 'Specialty Applications',
    desc: 'Customized solutions for unique environments where corrosion is a threat.',
    href: '/industry/specialty-applications',
    detail: 'From airborne contaminants to high-risk environments, our corrosion specialists help engineer custom solutions to maximize uptime and protect people and assets.',
    color: 'from-green-500/10 to-green-500/5',
    accent: '#16a34a',
  },
]

export const productFamilies = [
  {
    icon: Shield,
    category: 'Protection',
    name: 'Corrosion Monitoring',
    desc: 'ER probes, LPR instruments, and access fittings for real-time metal loss measurement across any process environment.',
    href: '/products/corrosion-monitoring',
    keyProducts: ['ER Probes', 'LPR Systems', 'Access Fittings', 'Corrosion Coupons'],
  },
  {
    icon: Activity,
    category: 'Flow Assurance',
    name: 'Erosion Monitoring',
    desc: 'Ultrasonic thickness sensors, sand detection probes, and erosion monitors for high-velocity multiphase flow.',
    href: '/products/erosion-monitoring',
    keyProducts: ['UT Sensors', 'Sand Detection', 'Erosion Probes', 'Wall Mapping'],
  },
  {
    icon: Droplet,
    category: 'Chemical Control',
    name: 'Chemical Injection',
    desc: 'Quill assemblies, injection valves, and precision dosing systems for inhibitor programs and chemical treatment.',
    href: '/products/chemical-injection',
    keyProducts: ['Quill Assemblies', 'Injection Valves', 'Pulsation Dampeners', 'Dosing Skids'],
  },
  {
    icon: BarChart2,
    category: 'Intelligence',
    name: 'Data Acquisition',
    desc: 'Microcor® wireless transmitters, CDO (Cosasco Data Online) software, SCADA integration, and cloud-based analytics that turn field data into actionable insight.',
    href: '/products/data-acquisition',
    keyProducts: ['Microcor® Wireless', 'CDO Software', 'SCADA Integration', 'Data Loggers'],
  },
]

export const services = [
  {
    icon: FileText,
    title: 'Design & Documentation',
    desc: 'Cosasco technicians partner with EPCs, Design Engineers, and Corrosion Engineers to identify the optimal probe placement and monitoring devices based on the system and operator needs.',
    href: '/services',
  },
  {
    icon: Settings,
    title: 'Installation',
    desc: "Cosasco's factory-trained team installs and configures corrosion monitoring and chemical injection systems to ensure they're correctly set up and providing the quality data needed.",
    href: '/services',
  },
  {
    icon: Wrench,
    title: 'Service & Maintenance',
    desc: 'Routine system maintenance and servicing performed by the best-trained technicians in the industry. Our global service network supports your program in 110+ countries.',
    href: '/services',
  },
]

export const trustPoints = [
  'No sales pressure; speak directly with an application engineer',
  'Response within one business day',
  'Global support in 110 countries',
]

export const comparisonData = [
  { feature: 'Real-time measurement', erProbe: true, coupon: false, ut: true, lpr: true },
  { feature: 'Any fluid (non-conductive OK)', erProbe: true, coupon: true, ut: true, lpr: false },
  { feature: 'No process shutdown required', erProbe: true, coupon: true, ut: true, lpr: true },
  { feature: 'Lab-acceptable data (regulatory)', erProbe: false, coupon: true, ut: false, lpr: false },
  { feature: 'Non-intrusive (external)', erProbe: false, coupon: false, ut: true, lpr: false },
  { feature: 'Sand / erosion detection', erProbe: false, coupon: false, ut: true, lpr: false },
  { feature: 'Remote wireless data', erProbe: true, coupon: false, ut: true, lpr: true },
  { feature: 'ATEX / IECEx certified', erProbe: true, coupon: true, ut: true, lpr: true },
]

export const testimonials = [
  {
    quote: "There are a lot of companies that supply equipment. There aren't so many companies that are capable of providing the full service of both supply and service, which is one of the reasons why we use Cosasco – because they provide the full servicing.",
    role: 'Corrosion Engineer',
    company: 'International Supermajor',
  },
  {
    quote: "Cosasco's application engineering support is second to none. When we face unusual process conditions, their team helps us specify exactly the right solution rather than just selling a standard product.",
    role: 'Process Engineer',
    company: 'North Sea Operator',
  },
  {
    quote: "The quality of data we get from Cosasco monitoring systems has transformed how we manage corrosion inhibitor programs. We make better decisions, faster.",
    role: 'Integrity Manager',
    company: 'Gulf Coast Refinery',
  },
]

export const certifications = [
  { name: 'ISO 9001:2015', desc: 'Quality Management' },
  { name: 'AMPP Member', desc: 'Corrosion Society' },
  { name: 'Halma Group', desc: 'Safety Technology Portfolio' },
  { name: 'ATEX Certified', desc: 'Hazardous Area Equipment' },
]

export const valueMetrics = [
  { icon: TrendingDown, value: '75+ Years', label: 'Pioneering corrosion management since 1950', desc: '' },
  { icon: Globe, value: '110 Countries', label: 'Where Cosasco is trusted', desc: '' },
  { icon: Users, value: '1 Million+', label: 'Monitoring locations worldwide', desc: '' },
]
