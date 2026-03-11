import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function AlwaysKnowSection() {
  return (
    <section className="bg-white py-16 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-black text-2xl md:text-3xl text-[#0f2a4a] leading-tight mb-4">
          Always know what&apos;s happening inside your pipes. Better data means better decisions.
        </h2>
        <p className="text-[#566677] text-lg leading-relaxed mb-8">
          Cosasco is the only company that is exclusively dedicated to corrosion management with a complete product and service offering giving you real-time and precise data to make the best decisions.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="font-semibold text-[#0f2a4a] mb-3">Greater intelligence reduces:</p>
            <ul className="space-y-2 text-[#566677]">
              <li>• Frequent and costly manual inspections</li>
              <li>• Unplanned shutdowns and repairs</li>
              <li>• Harmful and damaging leaks</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-[#0f2a4a] mb-3">Cosasco helps engineers improve:</p>
            <ul className="space-y-2 text-[#566677]">
              <li>• Uptime through enhanced decision making</li>
              <li>• Savings from optimizing chemical injections</li>
              <li>• Asset performance</li>
              <li>• Safety</li>
            </ul>
          </div>
        </div>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-[#f4a65d] font-semibold hover:text-[#d4892a] transition-colors"
        >
          Our Products
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}
