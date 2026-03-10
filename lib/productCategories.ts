export type ProductCategory = {
  id: string
  label: string
  href: string
}

// Top-level product families for the nav + /products page,
// in the exact order we want to expose from the Excel/PDF
export const topLevelProductCategories: ProductCategory[] = [
  {
    id: 'access-fittings',
    label: 'Access Fittings',
    href: '/products/access-fittings',
  },
  {
    id: 'corrosion-monitoring',
    label: 'Corrosion Monitoring',
    href: '/products/corrosion-monitoring',
  },
  {
    id: 'specialized-monitoring',
    label: 'Specialized Monitoring',
    href: '/products/specialized-monitoring',
  },
  {
    id: 'injection-and-sampling-systems',
    label: 'Injection and Sampling Systems',
    href: '/products/injection-and-sampling-systems',
  },
  {
    id: 'service-tools',
    label: 'Service Tools',
    href: '/products/service-tools',
  },
  {
    id: 'data-management-systems',
    label: 'Cosasco Data Management Systems',
    href: '/products/data-management-systems',
  },
]

