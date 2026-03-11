/**
 * Services content aligned with www.cosasco.com/services
 */

export const servicesList = [
  {
    slug: 'corrosion-program-development',
    title: 'Corrosion Program Development',
    summary:
      'With over 70 years of distinguished corrosion monitoring experience, we can support all your program development needs.',
    href: '/services/corrosion-program-development',
  },
  {
    slug: 'preventative-maintenance',
    title: 'Preventative Maintenance',
    summary:
      'Optimize the life and reliability of your corrosion monitoring products with regular maintenance and troubleshooting.',
    href: '/services/preventative-maintenance',
  },
  {
    slug: 'installation-commissioning',
    title: 'Installation & Commissioning',
    summary:
      'We safely and effectively install your corrosion monitoring products to produce quality data that is integral to your maintenance program.',
    href: '/services/installation-commissioning',
  },
  {
    slug: 'access-under-pressure',
    title: 'Access Under Pressure',
    summary:
      'Pioneers of access under pressure, allowing safe installations for intrusive monitoring and chemical injection for locations around the world.',
    href: '/services/access-under-pressure',
  },
  {
    slug: 'data-acquisition-analysis',
    title: 'Data Acquisition & Analysis',
    summary:
      'Corrosion rate interpretation, coupon analysis and reporting for fast and accurate decision making.',
    href: '/services/data-acquisition-analysis',
  },
  {
    slug: 'safr-web-application',
    title: 'SAFR Web Application',
    summary:
      'Safe Access Fitting Register is a mobile friendly, cloud-based web portal to log, track and assess all your monitoring locations.',
    href: '/services/safr-web-application',
  },
] as const

export type ServiceSlug = (typeof servicesList)[number]['slug']

export function getServiceBySlug(slug: string) {
  return servicesList.find((s) => s.slug === slug)
}
