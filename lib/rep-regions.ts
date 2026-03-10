export interface Office {
  country: string
  city?: string
  phone?: string
  email: string
  note?: string
  isHQ?: boolean
}

export interface Region {
  id: string
  label: string
  offices: Office[]
}

// Regions and offices aligned with Cosasco's global presence (Find a Rep)
export const repRegions: Region[] = [
  {
    id: 'north-america',
    label: 'North America',
    offices: [
      { country: 'United States (HQ)', city: 'Santa Fe Springs, CA', phone: '+1 (562) 949-0123', email: 'info@cosasco.com', isHQ: true },
      { country: 'United States (Gulf Coast)', city: 'Houston, TX', phone: '+1 (562) 949-0123', email: 'info@cosasco.com' },
      { country: 'Canada', city: 'Markham, Ontario', email: 'info@cosasco.com' },
    ],
  },
  {
    id: 'south-america',
    label: 'South America',
    offices: [
      { country: 'Brazil', email: 'info@cosasco.com' },
      { country: 'Colombia', email: 'info@cosasco.com' },
      { country: 'Ecuador', email: 'info@cosasco.com' },
      { country: 'Mexico', email: 'info@cosasco.com' },
      { country: 'Peru', email: 'info@cosasco.com' },
      { country: 'Trinidad & Tobago', email: 'info@cosasco.com' },
      { country: 'Venezuela', email: 'info@cosasco.com' },
    ],
  },
  {
    id: 'europe',
    label: 'Europe',
    offices: [
      { country: 'United Kingdom', city: 'Aberdeen, Scotland', email: 'info@cosasco.com' },
      { country: 'France', email: 'info@cosasco.com' },
      { country: 'Germany', email: 'info@cosasco.com' },
      { country: 'Italy', email: 'info@cosasco.com' },
      { country: 'Poland', email: 'info@cosasco.com' },
      { country: 'Portugal', email: 'info@cosasco.com' },
      { country: 'Spain', email: 'info@cosasco.com' },
      { country: 'Israel', email: 'info@cosasco.com' },
    ],
  },
  {
    id: 'middle-east',
    label: 'Middle East',
    offices: [
      { country: 'United Arab Emirates', city: 'Dubai', email: 'info@cosasco.com' },
      { country: 'Saudi Arabia', note: '2 offices', email: 'info@cosasco.com' },
      { country: 'Qatar', email: 'info@cosasco.com' },
      { country: 'Kuwait', email: 'info@cosasco.com' },
      { country: 'Bahrain', email: 'info@cosasco.com' },
      { country: 'Sultanate of Oman', email: 'info@cosasco.com' },
      { country: 'Pakistan', email: 'info@cosasco.com' },
    ],
  },
  {
    id: 'africa',
    label: 'Africa',
    offices: [
      { country: 'Nigeria', email: 'info@cosasco.com' },
      { country: 'South Africa', email: 'info@cosasco.com' },
      { country: 'Egypt', email: 'info@cosasco.com' },
      { country: 'Libya', email: 'info@cosasco.com' },
    ],
  },
  {
    id: 'asia-pacific',
    label: 'Asia Pacific',
    offices: [
      { country: 'Malaysia', city: 'Kuala Lumpur', email: 'info@cosasco.com' },
      { country: 'Singapore', email: 'info@cosasco.com' },
      { country: 'Indonesia', email: 'info@cosasco.com' },
      { country: 'India', email: 'info@cosasco.com' },
      { country: 'Japan', email: 'info@cosasco.com' },
      { country: 'China (P.R.)', email: 'info@cosasco.com' },
      { country: 'South Korea', email: 'info@cosasco.com' },
      { country: 'Taiwan', email: 'info@cosasco.com' },
      { country: 'Thailand', email: 'info@cosasco.com' },
      { country: 'Vietnam', email: 'info@cosasco.com' },
      { country: 'Brunei', email: 'info@cosasco.com' },
    ],
  },
  {
    id: 'australia',
    label: 'Australia',
    offices: [
      { country: 'Australia', city: 'Perth', email: 'info@cosasco.com' },
    ],
  },
]
