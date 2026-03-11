import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function FindRepSection() {
  return (
    <section className="bg-white py-16 md:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-black text-2xl md:text-3xl text-[#0f2a4a] leading-tight mb-4">
          Providing innovative solutions across the globe.
        </h2>
        <p className="text-[#566677] text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          Cosasco is trusted in 110 countries and counting, consistently delivering reliable and inventive corrosion monitoring and management solutions to protect both people and the environment. Connect with your representative today and see how Cosasco can improve the efficiency of your operation.
        </p>
        <Link
          href="/contact/find-a-rep"
          className="inline-flex items-center gap-2 bg-[#f4a65d] hover:bg-[#d4892a] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Find your rep
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}
