import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { comparisonData } from './home-data'

function CheckCell({ value }: { value: boolean }) {
  return (
    <td className="py-3.5 px-4 text-center border-b border-[#f0f4f8]">
      {value ? (
        <CheckCircle size={16} className="mx-auto text-[#f4a65d]" />
      ) : (
        <span className="w-4 h-0.5 bg-[#d1d9e0] inline-block align-middle" />
      )}
    </td>
  )
}

const tableFooterLinks = [
  { label: 'ER Probes', href: '/products/corrosion-monitoring' },
  { label: 'Coupons', href: '/products/corrosion-monitoring' },
  { label: 'UT Sensors', href: '/products/erosion-monitoring' },
  { label: 'LPR Probes', href: '/products/corrosion-monitoring' },
]

export default function ComparisonTableSection() {
  return (
    <AnimateOnScroll delay={0}>
      <section className="py-20 px-4" style={{ backgroundColor: '#f7f9fc' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#f4a65d' }}>
              Technology Comparison
            </span>
            <h2 className="font-black text-3xl lg:text-4xl mt-2" style={{ color: '#0f2a4a' }}>
              Which technology is right for you?
            </h2>
            <p className="mt-3 max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
              Each corrosion monitoring technology has distinct advantages. Use this
              table to quickly identify the best fit for your application requirements.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#e8edf2] shadow-sm">
            <table className="w-full bg-white text-sm min-w-[600px]">
              <caption className="sr-only">Corrosion monitoring technology comparison</caption>
              <thead>
                <tr style={{ backgroundColor: '#0f2a4a' }}>
                  <th scope="col" className="py-4 px-4 text-left text-xs font-bold uppercase tracking-wider text-[#8ab4d4] w-[40%]">
                    Capability
                  </th>
                  <th scope="col" className="py-4 px-4 text-center text-xs font-bold uppercase tracking-wider text-white">ER Probe</th>
                  <th scope="col" className="py-4 px-4 text-center text-xs font-bold uppercase tracking-wider text-white">Coupon</th>
                  <th scope="col" className="py-4 px-4 text-center text-xs font-bold uppercase tracking-wider text-white">UT Sensor</th>
                  <th scope="col" className="py-4 px-4 text-center text-xs font-bold uppercase tracking-wider text-white">LPR Probe</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr
                    key={row.feature}
                    style={{ backgroundColor: i % 2 === 0 ? '#ffffff' : '#fafbfc' }}
                  >
                    <td className="py-3.5 px-4 text-[#334150] font-medium border-b border-[#f0f4f8]">
                      {row.feature}
                    </td>
                    <CheckCell value={row.erProbe} />
                    <CheckCell value={row.coupon} />
                    <CheckCell value={row.ut} />
                    <CheckCell value={row.lpr} />
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr style={{ backgroundColor: '#f7f9fc' }}>
                  <td className="py-4 px-4" />
                  {tableFooterLinks.map((col) => (
                    <td key={col.label} className="py-4 px-4 text-center">
                      <Link
                        href={col.href}
                        className="text-xs font-semibold transition-colors inline-flex items-center gap-1 justify-center"
                        style={{ color: '#f4a65d' }}
                      >
                        View {col.label}
                        <ArrowRight size={12} />
                      </Link>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  )
}
