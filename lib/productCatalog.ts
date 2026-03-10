/**
 * Product catalog: families, subfamilies, and mock products.
 * Hierarchy follows the PDF category structure. ~40 mock products for prototype.
 */

export type ProductFamilyId =
  | 'access-fittings'
  | 'corrosion-monitoring'
  | 'specialized-monitoring'
  | 'injection-and-sampling-systems'
  | 'service-tools'
  | 'data-management-systems'

export type Subfamily = {
  id: string
  label: string
  productIds: string[]
}

export type ProductFamily = {
  id: ProductFamilyId
  label: string
  href: string
  subfamilies: Subfamily[]
}

export type MockProduct = {
  id: string
  name: string
  slug: string
  familyId: ProductFamilyId
  subfamilyId: string
  shortDescription: string
  featured?: boolean
}

// ─── Mock products (~40 total) ─────────────────────────────────────────────

export const mockProducts: MockProduct[] = [
  // Access Fittings (7)
  { id: 'af-1', name: 'ANSI Flange RF Access Fitting Assembly Model 57', slug: 'ansi-flange-rf-model-57', familyId: 'access-fittings', subfamilyId: 'mechanical-flanged', shortDescription: '2" ANSI Flange RF, full bore to 10,000 PSI.' },
  { id: 'af-2', name: 'ANSI Flange RJ Access Fitting Assembly Model 56', slug: 'ansi-flange-rj-model-56', familyId: 'access-fittings', subfamilyId: 'mechanical-flanged', shortDescription: '2" ANSI Flange RJ mounting.' },
  { id: 'af-3', name: 'Flarweld Access Fitting Assembly Model 50', slug: 'flarweld-model-50', familyId: 'access-fittings', subfamilyId: 'mechanical-non-flanged', shortDescription: 'Popular weld-on configuration for 2" schedule.' },
  { id: 'af-4', name: 'NPT Access Fitting Model 54', slug: 'npt-access-fitting-model-54', familyId: 'access-fittings', subfamilyId: 'mechanical-non-flanged', shortDescription: 'Threaded NPT for general service.' },
  { id: 'af-5', name: 'ANSI Flange RF Hydraulic Access Fitting 57H', slug: 'hydraulic-flange-rf-57h', familyId: 'access-fittings', subfamilyId: 'hydraulic-flanged', shortDescription: 'Hydraulic insertion/retrieval, flanged.' },
  { id: 'af-6', name: 'Hydraulic Access Fitting Assemblies Model 50H', slug: 'hydraulic-model-50h', familyId: 'access-fittings', subfamilyId: 'hydraulic-non-flanged', shortDescription: 'Full pressure hydraulic, flarweld style.' },
  { id: 'af-7', name: 'Buttweld Access Fitting Assembly Model 52', slug: 'buttweld-model-52', familyId: 'access-fittings', subfamilyId: 'mechanical-non-flanged', shortDescription: 'Butt-welded to 2" schedule 160.' },

  // Corrosion Monitoring (8)
  { id: 'cm-1', name: 'Corrosion Coupons CI', slug: 'corrosion-coupons-ci', familyId: 'corrosion-monitoring', subfamilyId: 'coupons-holders', shortDescription: 'Weight-loss coupons, NACE TM-0169.', featured: true },
  { id: 'cm-2', name: 'Disc Coupon Holder 6202', slug: 'disc-coupon-holder-6202', familyId: 'corrosion-monitoring', subfamilyId: 'coupons-holders', shortDescription: 'Coupon holder for pigged lines.' },
  { id: 'cm-3', name: 'Fixed Process ER Probe 2500/2520', slug: 'er-probe-2500-2520', familyId: 'corrosion-monitoring', subfamilyId: 'standard-er', shortDescription: 'Fixed ER probe, 200°C / 260°C.', featured: true },
  { id: 'cm-4', name: 'Retractable ER Probe 3500/3700', slug: 'er-probe-3500-3700', familyId: 'corrosion-monitoring', subfamilyId: 'standard-er', shortDescription: 'Retrievable under pressure to 10,000 PSI.' },
  { id: 'cm-5', name: 'Microcor® Wireless Transmitter (MWT)', slug: 'microcor-mwt', familyId: 'corrosion-monitoring', subfamilyId: 'microcor-er', shortDescription: '18-bit resolution, WirelessHART 7.', featured: true },
  { id: 'cm-6', name: 'LPR Probe 6112/7012', slug: 'lpr-probe-6112-7012', familyId: 'corrosion-monitoring', subfamilyId: 'lpr', shortDescription: 'Instant corrosion rate in conductive fluids.' },
  { id: 'cm-7', name: 'AquaMate® Portable LPR Instrument', slug: 'aquamate-portable-lpr', familyId: 'corrosion-monitoring', subfamilyId: 'lpr', shortDescription: 'Handheld spot measurement.' },
  { id: 'cm-8', name: 'Echo Point Wireless Ultrasonic', slug: 'echo-point', familyId: 'corrosion-monitoring', subfamilyId: 'non-intrusive', shortDescription: 'Non-intrusive UT, 932°F (500°C).' },

  // Specialized Monitoring (6)
  { id: 'sm-1', name: 'AirIQ Air Quality Monitor', slug: 'airiq-monitor', familyId: 'specialized-monitoring', subfamilyId: 'airiq', shortDescription: 'Real-time airborne corrosion monitoring.' },
  { id: 'sm-2', name: 'High Pressure Bio-Probe 6205', slug: 'bio-probe-6205', familyId: 'specialized-monitoring', subfamilyId: 'bio-probes', shortDescription: 'Bacteria sampling under pressure.' },
  { id: 'sm-3', name: 'Microcor® Erosion Probe S4500/S4700', slug: 'microcor-erosion-s4500', familyId: 'specialized-monitoring', subfamilyId: 'microcor-erosion', shortDescription: 'High-speed erosion monitoring.' },
  { id: 'sm-4', name: 'Hydrogen Probes 6400', slug: 'hydrogen-probes-6400', familyId: 'specialized-monitoring', subfamilyId: 'hydrogen', shortDescription: 'Hydrogen permeation, HIC risk.' },
  { id: 'sm-5', name: 'Downhole Corrosion Monitoring System DCMS™', slug: 'dcms', familyId: 'specialized-monitoring', subfamilyId: 'downhole', shortDescription: 'Downhole corrosion and temperature.' },
  { id: 'sm-6', name: 'LPR Retractable 8000 Series', slug: 'lpr-8000-retractable', familyId: 'specialized-monitoring', subfamilyId: 'galvanic', shortDescription: 'Galvanic/LPR retractable probes.' },

  // Injection and Sampling Systems (6)
  { id: 'is-1', name: 'Injection Quill – Fixed Model 6330', slug: 'injection-quill-fixed-6330', familyId: 'injection-and-sampling-systems', subfamilyId: 'injection-tubes', shortDescription: 'Fixed chemical injection quill.' },
  { id: 'is-2', name: 'Injection Quill – Retractable', slug: 'injection-quill-retractable', familyId: 'injection-and-sampling-systems', subfamilyId: 'injection-tubes', shortDescription: 'Retractable under pressure.' },
  { id: 'is-3', name: 'Injection Nozzle – Fixed', slug: 'injection-nozzle-fixed', familyId: 'injection-and-sampling-systems', subfamilyId: 'injection-nozzles', shortDescription: 'Fixed injection nozzle.' },
  { id: 'is-4', name: 'Sampling Quill – Retractable', slug: 'sampling-quill-retractable', familyId: 'injection-and-sampling-systems', subfamilyId: 'sampling-tubes', shortDescription: 'Process fluid sampling under pressure.' },
  { id: 'is-5', name: 'Sampling Nozzle – Retrievable', slug: 'sampling-nozzle-retrievable', familyId: 'injection-and-sampling-systems', subfamilyId: 'sampling-nozzles', shortDescription: 'Retrievable sampling assembly.' },
  { id: 'is-6', name: 'Chemical Injection NPT Access Fitting Model 54', slug: 'chemical-injection-npt-54', familyId: 'injection-and-sampling-systems', subfamilyId: 'injection-tubes', shortDescription: 'NPT chemical injection fitting.' },

  // Service Tools (7)
  { id: 'st-1', name: '3600-FR Service Valve Kit', slug: '3600-fr-service-valve-kit', familyId: 'service-tools', subfamilyId: 'service-valves', shortDescription: 'Fire-rated single isolation to 3600 PSI.', featured: true },
  { id: 'st-2', name: '3600C Single Service Valve Kit', slug: '3600c-single-service-valve', familyId: 'service-tools', subfamilyId: 'service-valves', shortDescription: 'Single isolation to 3600 PSI.' },
  { id: 'st-3', name: 'Double Block and Bleed Service Valve 6000 PSI', slug: 'dbb-service-valve-6000', familyId: 'service-tools', subfamilyId: 'service-valves', shortDescription: 'Double block and bleed, 6000 PSI.' },
  { id: 'st-4', name: 'Back Pressure Pump', slug: 'back-pressure-pump', familyId: 'service-tools', subfamilyId: 'pumps', shortDescription: 'Used with retrievers for pressure equalization.' },
  { id: 'st-5', name: 'Hot Tap Kit HTK', slug: 'hot-tap-kit-htk', familyId: 'service-tools', subfamilyId: 'hot-tap-kit', shortDescription: 'Add access fitting without shutdown.' },
  { id: 'st-6', name: 'HRSL Retriever Kit', slug: 'hrsl-retriever-kit', familyId: 'service-tools', subfamilyId: 'retrievers', shortDescription: 'Hydraulic retrieval for access fittings.' },
  { id: 'st-7', name: 'Access Fitting Re-Facer Tool', slug: 'access-fitting-refacer', familyId: 'service-tools', subfamilyId: 'accessories', shortDescription: 'Restore 2" fittings, no shutdown.' },

  // Data Management Systems (5)
  { id: 'dm-1', name: 'ICMS™ Rackmount', slug: 'icms-rackmount', familyId: 'data-management-systems', subfamilyId: 'icms', shortDescription: 'Integrated corrosion monitoring system, rack.' },
  { id: 'dm-2', name: 'ICMS™ Workstation', slug: 'icms-workstation', familyId: 'data-management-systems', subfamilyId: 'icms', shortDescription: 'ICMS workstation configuration.' },
  { id: 'dm-3', name: 'IIU Rackmount', slug: 'iiu-rackmount', familyId: 'data-management-systems', subfamilyId: 'iiu', shortDescription: 'Intelligent Interface Unit, rackmount.' },
  { id: 'dm-4', name: 'IIU Wallmount', slug: 'iiu-wallmount', familyId: 'data-management-systems', subfamilyId: 'iiu', shortDescription: 'IIU wall-mount version.' },
  { id: 'dm-5', name: 'Cosasco Data Online (CDO) Software', slug: 'cdo-software', familyId: 'data-management-systems', subfamilyId: 'cdo', shortDescription: 'Cloud data and reporting.', featured: true },
]

// ─── Family + subfamily hierarchy (PDF-aligned) ─────────────────────────────

const accessFittingsSubfamilies: Subfamily[] = [
  { id: 'mechanical-flanged', label: 'Mechanical Access Fittings – Flanged', productIds: ['af-1', 'af-2'] },
  { id: 'mechanical-non-flanged', label: 'Mechanical Access Fittings – Non-Flanged', productIds: ['af-3', 'af-4', 'af-7'] },
  { id: 'hydraulic-flanged', label: 'Hydraulic Access Fittings – Flanged', productIds: ['af-5'] },
  { id: 'hydraulic-non-flanged', label: 'Hydraulic Access Fittings – Non-Flanged', productIds: ['af-6'] },
]

const corrosionMonitoringSubfamilies: Subfamily[] = [
  { id: 'coupons-holders', label: 'Coupons & Coupon Holders', productIds: ['cm-1', 'cm-2'] },
  { id: 'standard-er', label: 'Standard ER Probes & Instrumentation', productIds: ['cm-3', 'cm-4'] },
  { id: 'microcor-er', label: 'Microcor® High Resolution ER', productIds: ['cm-5'] },
  { id: 'lpr', label: 'LPR Probes & Instrumentation', productIds: ['cm-6', 'cm-7'] },
  { id: 'non-intrusive', label: 'Non-Intrusive Monitoring', productIds: ['cm-8'] },
]

const specializedMonitoringSubfamilies: Subfamily[] = [
  { id: 'airiq', label: 'AirIQ Air Quality Monitoring', productIds: ['sm-1'] },
  { id: 'bio-probes', label: 'Bio-Probes', productIds: ['sm-2'] },
  { id: 'microcor-erosion', label: 'Microcor® Erosion Probes & Instrumentation', productIds: ['sm-3'] },
  { id: 'hydrogen', label: 'Hydrogen Probes', productIds: ['sm-4'] },
  { id: 'downhole', label: 'Downhole Probes / Coupons', productIds: ['sm-5'] },
  { id: 'galvanic', label: 'Galvanic Monitoring Probes & Instrumentation', productIds: ['sm-6'] },
]

const injectionSamplingSubfamilies: Subfamily[] = [
  { id: 'injection-tubes', label: 'Injection Tubes', productIds: ['is-1', 'is-2', 'is-6'] },
  { id: 'injection-nozzles', label: 'Injection Nozzles', productIds: ['is-3'] },
  { id: 'sampling-tubes', label: 'Sampling Tubes', productIds: ['is-4'] },
  { id: 'sampling-nozzles', label: 'Sampling Nozzles', productIds: ['is-5'] },
]

const serviceToolsSubfamilies: Subfamily[] = [
  { id: 'service-valves', label: 'Service Valves', productIds: ['st-1', 'st-2', 'st-3'] },
  { id: 'pumps', label: 'Pumps', productIds: ['st-4'] },
  { id: 'hot-tap-kit', label: 'Hot Tap Kit', productIds: ['st-5'] },
  { id: 'retrievers', label: 'Retrievers (High-Pressure)', productIds: ['st-6'] },
  { id: 'accessories', label: 'Accessories', productIds: ['st-7'] },
]

const dataManagementSubfamilies: Subfamily[] = [
  { id: 'icms', label: 'ICMS™ Integrated Corrosion Monitoring System', productIds: ['dm-1', 'dm-2'] },
  { id: 'iiu', label: 'IIU Intelligent Interface Unit', productIds: ['dm-3', 'dm-4'] },
  { id: 'cdo', label: 'Cosasco Data Online (CDO) Software', productIds: ['dm-5'] },
]

export const productFamilies: ProductFamily[] = [
  { id: 'access-fittings', label: 'Access Fittings', href: '/products/access-fittings', subfamilies: accessFittingsSubfamilies },
  { id: 'corrosion-monitoring', label: 'Corrosion Monitoring', href: '/products/corrosion-monitoring', subfamilies: corrosionMonitoringSubfamilies },
  { id: 'specialized-monitoring', label: 'Specialized Monitoring', href: '/products/specialized-monitoring', subfamilies: specializedMonitoringSubfamilies },
  { id: 'injection-and-sampling-systems', label: 'Injection and Sampling Systems', href: '/products/injection-and-sampling-systems', subfamilies: injectionSamplingSubfamilies },
  { id: 'service-tools', label: 'Service Tools', href: '/products/service-tools', subfamilies: serviceToolsSubfamilies },
  { id: 'data-management-systems', label: 'Cosasco Data Management Systems', href: '/products/data-management-systems', subfamilies: dataManagementSubfamilies },
]

export function getProductById(id: string): MockProduct | undefined {
  return mockProducts.find((p) => p.id === id)
}

export function getProductBySlug(slug: string): MockProduct | undefined {
  return mockProducts.find((p) => p.slug === slug)
}

export function getProductsByFamily(familyId: ProductFamilyId): MockProduct[] {
  return mockProducts.filter((p) => p.familyId === familyId)
}

export function getFamilyById(familyId: ProductFamilyId): ProductFamily | undefined {
  return productFamilies.find((f) => f.id === familyId)
}

export function getAllProducts(): MockProduct[] {
  return [...mockProducts]
}
