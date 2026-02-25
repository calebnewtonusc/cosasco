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
  FileText,
  Settings,
  Wrench,
  Award,
  Globe,
  Users,
  TrendingDown,
  Pickaxe,
  Fuel,
} from 'lucide-react'

export const industries = [
  {
    icon: Flame,
    name: 'Oil & Gas',
    desc: 'Upstream, midstream, and downstream asset protection.',
    href: '/solutions/oil-gas',
    detail: 'Protect pipelines, separators, production equipment, and injection systems from internal and external corrosion. Cosasco solutions meet API and NACE requirements for upstream through downstream service.',
    color: 'from-orange-500/10 to-orange-500/5',
    accent: '#ea580c',
  },
  {
    icon: FlaskConical,
    name: 'Petrochemical',
    desc: 'Precision monitoring in high-temperature process environments.',
    href: '/solutions/petrochemical',
    detail: 'High-temperature, high-pressure process environments demand materials and designs that standard products cannot deliver. Our HPHT-rated access fittings and alloy probe elements handle refinery and cracker service.',
    color: 'from-purple-500/10 to-purple-500/5',
    accent: '#7c3aed',
  },
  {
    icon: Droplets,
    name: 'Water Treatment',
    desc: 'Corrosion and scale control in distribution and treatment systems.',
    href: '/solutions/water-treatment',
    detail: 'Aqueous environments enable LPR real-time corrosion rate measurements alongside coupon programs. Cosasco systems monitor the effectiveness of scale and corrosion inhibitor dosing programs.',
    color: 'from-blue-500/10 to-blue-500/5',
    accent: '#2563eb',
  },
  {
    icon: TestTube,
    name: 'Chemical Processing',
    desc: 'Aggressive media monitoring for reactors, columns, and transfer lines.',
    href: '/solutions/chemical-processing',
    detail: 'Corrosive media, cyclic temperatures, and aggressive chemistries require exotic alloy probe elements and chemically resistant access fittings. Our engineering team specifies the right combination for your process.',
    color: 'from-green-500/10 to-green-500/5',
    accent: '#16a34a',
  },
  {
    icon: BookOpen,
    name: 'Pulp & Paper',
    desc: 'Continuous monitoring in high-chloride, acidic digester environments.',
    href: '/solutions/pulp-paper',
    detail: 'Digesters, bleach plant equipment, and black liquor lines present severe corrosion challenges. Cosasco provides stainless and high-alloy sensor elements and injection quills tailored for pulp mill service.',
    color: 'from-amber-500/10 to-amber-500/5',
    accent: '#d97706',
  },
  {
    icon: Zap,
    name: 'Utilities',
    desc: 'Corrosion management for power generation and distribution infrastructure.',
    href: '/solutions/utilities',
    detail: 'Cooling water systems, steam generators, and condensate return lines all require corrosion monitoring programs. Cosasco supports utility operators with ER, LPR, and coupon-based monitoring solutions.',
    color: 'from-cyan-500/10 to-cyan-500/5',
    accent: '#0891b2',
  },
  {
    icon: Pickaxe,
    name: 'Mining & Minerals',
    desc: 'Erosion-corrosion monitoring in aggressive ore slurry environments.',
    href: '/solutions/mining',
    detail: 'Abrasive ore slurries, acid mine drainage, and aggressive leach circuits demand wear-resistant probe materials and continuous erosion monitoring. Cosasco delivers purpose-built solutions for the mining sector.',
    color: 'from-stone-500/10 to-stone-500/5',
    accent: '#78716c',
  },
  {
    icon: Fuel,
    name: 'Gas Transmission',
    desc: 'Internal corrosion monitoring for high-pressure natural gas pipelines.',
    href: '/solutions/gas-transmission',
    detail: 'CO₂, H₂S, and water dropout in transmission pipelines drive internal corrosion at vulnerable low points. Cosasco ER probe networks and chemical injection systems provide continuous integrity management without shutdowns.',
    color: 'from-slate-500/10 to-slate-500/5',
    accent: '#64748b',
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
