/**
 * Six industries from cosasco.com — matches site 100%.
 * URLs: /industry/upstream, /industry/midstream, etc.
 */

export const industrySlugs = [
  'upstream',
  'midstream',
  'downstream',
  'gas-transmission',
  'pulp-paper',
  'specialty-applications',
] as const

export type IndustrySlug = (typeof industrySlugs)[number]

export type Industry = {
  slug: IndustrySlug
  name: string
  tagline: string
  description: string
  benefits: string[]
}

export const industries: Industry[] = [
  {
    slug: 'upstream',
    name: 'Upstream',
    tagline: 'Real-time corrosion monitoring designed for the most challenging environments',
    description:
      'We understand that upstream environments are often severe, remote, and rapidly changing. Cosasco\'s dependable corrosion management solutions provide upstream engineers with the information they need to make quick, accurate decisions in these high risk scenarios.',
    benefits: [
      'Optimize production performance with customized engineering solutions designed specifically for your wells',
      'React quickly to changes in the pipes with real-time data from the most stable, fastest responding probe technology in the industry',
      'Protect people and assets in remote locations with accurate corrosion monitoring, proven in the world\'s most severe environments',
      'Maximize uptime and production with reliable corrosion monitoring devices that won\'t fail or require unnecessary shutdowns',
    ],
  },
  {
    slug: 'midstream',
    name: 'Midstream',
    tagline: 'Real-time corrosion monitoring for safe, compliant transport and storage of oil and gas products',
    description:
      'Corrosion is a leading cause of pipeline failure—and one of the most difficult to detect. Cosasco\'s efficient, reliable corrosion monitoring and management solutions allow you to balance regulatory requirements, asset performance, asset life and cost in order to:',
    benefits: [
      'Monitor corrosion in locations with limited access with the industry\'s highest accuracy ultrasonic technology for non-intrusive corrosion monitoring',
      'Retrieve data easily from remote locations with flexible data transmission solutions and service experts who travel to remote locations around the world',
      'Meet all regulatory and integrity management requirements with real-time monitoring for pipeline, processing and storage assets',
      'Extend the life of your assets by detecting internal and external corrosion before it causes pipeline damage or failure',
    ],
  },
  {
    slug: 'downstream',
    name: 'Downstream',
    tagline: 'Real-time critical asset monitoring to optimize production and safety in high-risk environments',
    description:
      'In high-risk downstream environments, containment is critical. Optimal corrosion management increases profitability and helps to avoid unscheduled repairs and maintenance. Adding real-time corrosion monitoring to asset integrity and maintenance programs allows engineers to make quick, accurate decisions so that they can:',
    benefits: [
      'Optimize your maintenance spend with a portfolio of automated monitoring technology that you can trust',
      'React quickly to changes in the pipes with real-time data from the most stable, fastest responding probe technology in the industry',
      'Protect people and assets with accurate corrosion monitoring designed for high-risk environments',
      'Maximize uptime and production with reliable corrosion monitoring devices that provide real-time data for critical process decisions',
    ],
  },
  {
    slug: 'gas-transmission',
    name: 'Gas Transmission',
    tagline: 'Corrosion monitoring for internal and external threat identification and risk reduction',
    description:
      'Internal corrosion is a leading cause of pipeline failure—and one of the most difficult to detect. Cosasco\'s reliable corrosion monitoring and management solutions allow you to balance regulatory requirements, asset performance, and maintenance costs in order to:',
    benefits: [
      'Monitor corrosion in locations with limited access with the industry\'s highest accuracy ultrasonic technology for non-intrusive corrosion monitoring',
      'Retrieve data easily from remote locations with flexible data transmission solutions and service experts who travel to remote locations around the world',
      'Meet regulatory and integrity management requirements such as PHMSA Mega-Rules with real-time monitoring for pipeline, processing, and storage assets',
      'Monitor asset performance by detecting internal and external material degradation and defects',
    ],
  },
  {
    slug: 'pulp-paper',
    name: 'Pulp & Paper',
    tagline: 'Protect critical assets and reduce the cost of corrosion in sensitive environments',
    description:
      'Papermaking involves complex chemical processes that release corrosive contaminants into the air that damage electronics and machinery. Cosasco\'s corrosion monitoring technology eliminates uncertainty by measuring the direct effect of airborne, internal, and external corrosion in real-time. This enables Pulp and Paper manufacturing companies to:',
    benefits: [
      'Optimize production by measuring and mitigating corrosion at every stage of the production process',
      'Reduce unplanned maintenance and downtime by detecting the real-time corrosion rate in critical asset locations',
      'Reduce equipment replacement costs through tighter control of atmospheric corrosion',
      'Ensure air filtration systems are working properly',
    ],
  },
  {
    slug: 'specialty-applications',
    name: 'Specialty Applications',
    tagline: 'Protect what matters most with customized corrosion management solutions designed for unique environments where corrosion is a threat',
    description:
      'Cosasco offers corrosion management solutions for a wide range of industrial applications. If we don\'t already have a system specifically designed for your needs, our team of corrosion specialists will help engineer a custom solution in order to:',
    benefits: [
      'Maintain a strictly controlled environment with hypersensitive sensors to measure the real-time effects of airborne contaminants',
      'Eliminate uncertainty and react quickly with accurate, real-time corrosion data',
      'Maximize uptime and production with reliable corrosion monitoring devices that won\'t fail or require unnecessary shutdowns, so you get more value from your operations',
      'Protect people and assets with accurate corrosion monitoring designed for high-risk environments',
    ],
  },
]

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug)
}

export function getIndustryHref(slug: IndustrySlug): string {
  return `/industry/${slug}`
}
