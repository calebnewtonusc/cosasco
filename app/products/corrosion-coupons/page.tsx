import Link from "next/link";
import {
  ChevronRight,
  CheckCircle,
  ShoppingCart,
  FileText,
  Phone,
  Mail,
  Download,
  ArrowRight,
  FlaskConical,
} from "lucide-react";

export default function CorrosionCouponsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#0f2a4a] pt-[75px] pb-16 px-6 md:px-10 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-1.5 text-sm text-[#8ab4d4] mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="opacity-50" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight size={14} className="opacity-50" />
            <Link href="/products/corrosion-monitoring" className="hover:text-white transition-colors">Corrosion Monitoring</Link>
            <ChevronRight size={14} className="opacity-50" />
            <span className="text-white font-medium">Corrosion Coupon Systems</span>
          </nav>

          <h1 className="text-white font-black text-4xl lg:text-5xl leading-tight mb-4">
            Corrosion Coupon Systems
          </h1>
          <p className="text-[#94aabb] text-lg max-w-2xl leading-relaxed mb-8">
            Proven weight-loss corrosion measurement for pipelines and process systems —
            the gold-standard reference method per NACE TM-0169 across all fluid environments.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              { label: "NACE TM-0169 Standard" },
              { label: "20+ Material Options" },
              { label: "1\" to 6\" NPT Racks" },
            ].map((s) => (
              <span
                key={s.label}
                className="bg-[#1a3a5c] rounded-lg px-4 py-2 inline-flex items-center gap-2 text-white text-sm font-semibold"
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BODY GRID ────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16 py-12 lg:grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-0">

          {/* 1. OVERVIEW */}
          <section className="bg-white py-12">
            <div className="bg-[#f7f9fc] border border-[#e8edf2] rounded-2xl aspect-[4/3] flex flex-col items-center justify-center mb-10 gap-4">
              <FlaskConical size={72} className="text-[#0f2a4a] opacity-30" />
              <span className="text-[#566677] font-semibold text-lg">Corrosion Coupon Systems</span>
            </div>

            <div className="space-y-4 text-[#566677] leading-relaxed mb-10">
              <p>
                Cosasco Corrosion Coupon Systems deliver the most fundamental form of corrosion
                measurement: direct gravimetric weight loss. Precision-machined metal coupons of
                known dimensions and composition are inserted into the process stream, exposed for
                a defined period, then retrieved and analyzed for mass loss, pitting, and surface
                attack. Results are reported as a corrosion rate in mils per year (mpy) and
                compared against industry corrosion allowance criteria.
              </p>
              <p>
                Coupons are manufactured to NACE TM-0169 specifications from more than 20 standard
                alloys, including carbon steel, 304 and 316 stainless steel, duplex stainless,
                Alloy 20, Hastelloy C-276, titanium, copper alloys, and inhibitor evaluation grades.
                Standard coupon dimensions are 1&quot;&times;4&quot; and 2&quot;&times;4&quot;;
                custom geometries and weight classes are available on request. Coupon racks thread
                directly into Cosasco access fittings, accepting multiple coupons simultaneously
                for parallel alloy comparison and inhibitor effectiveness testing.
              </p>
              <p>
                The system is widely used as a verification and calibration reference alongside
                continuous ER and LPR electronic monitoring. Exposure periods typically range from
                30 to 90 days depending on corrosion severity and reporting requirements, but
                Cosasco racks support both shorter upset-condition exposures and multi-month
                baseline surveys. All coupon assemblies include traceable certificates of
                conformance with alloy composition data.
              </p>
            </div>

            <h3 className="text-[#0f2a4a] font-bold text-xl mb-4">Key Features</h3>
            <ul className="space-y-3">
              {[
                "Manufactured to NACE TM-0169 / ISO 11463 for standardized corrosion rate calculations",
                "20+ alloy options for parallel multi-material exposure and inhibitor testing",
                "Standard 1\"×4\" and 2\"×4\" coupon forms; custom geometries available",
                "Rack sizes from 1\" to 6\" NPT; compatible with all Cosasco access fittings",
                "Typical exposure periods 30–90 days; supports short-term upset event monitoring",
                "Traceable certificates of conformance with full alloy composition analysis",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-[#1e2b3a] text-sm">
                  <CheckCircle size={18} className="text-[#f4a65d] flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </section>

          {/* 2. SPECIFICATIONS TABLE */}
          <section className="bg-[#f7f9fc] py-12">
            <h3 className="text-[#0f2a4a] font-bold text-xl mb-6">Technical Specifications</h3>
            <div className="rounded-xl overflow-hidden border border-[#e8edf2]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0f2a4a] text-white text-left">
                    <th className="px-5 py-3 text-sm font-semibold">Parameter</th>
                    <th className="px-5 py-3 text-sm font-semibold">Value</th>
                    <th className="px-5 py-3 text-sm font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Design Standard", "NACE TM-0169 / ISO 11463", "Gravimetric weight-loss method"],
                    ["Coupon Sizes", "1\"×4\", 2\"×4\"", "Custom sizes available on request"],
                    ["Rack NPT Sizes", "1\" to 6\" NPT", "Matches Cosasco access fitting sizes"],
                    ["Standard Materials", "20+ alloys available", "CS, 304SS, 316SS, Duplex, Alloy 20, HC-276, Ti"],
                    ["Exposure Period", "30–90 days typical", "Short-term and long-term surveys supported"],
                    ["Corrosion Rate Output", "mpy or mm/yr", "Per NACE TM-0169 calculation method"],
                    ["Certifications", "MTR / CoC per heat", "Alloy composition traceable per order"],
                    ["Coupons Per Rack", "Up to 6 per assembly", "Parallel alloy or inhibitor testing"],
                  ].map(([param, value, notes], i) => (
                    <tr key={param} className={i % 2 === 0 ? "bg-white" : "bg-[#f7f9fc]"}>
                      <td className="px-5 py-3 text-sm font-semibold text-[#1e2b3a] border-b border-[#e8edf2]">{param}</td>
                      <td className="px-5 py-3 text-sm text-[#1e2b3a] border-b border-[#e8edf2]">{value}</td>
                      <td className="px-5 py-3 text-sm text-[#566677] border-b border-[#e8edf2]">{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. ORDERING INFORMATION */}
          <section className="bg-white py-8">
            <h3 className="text-[#0f2a4a] font-bold text-xl mb-6">Part Numbers &amp; Ordering</h3>
            <div className="rounded-xl overflow-hidden border border-[#e8edf2]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0f2a4a] text-white text-left">
                    <th className="px-5 py-3 text-sm font-semibold">Part Number</th>
                    <th className="px-5 py-3 text-sm font-semibold">Description</th>
                    <th className="px-5 py-3 text-sm font-semibold">Material</th>
                    <th className="px-5 py-3 text-sm font-semibold">Pressure Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["CC-1X4-CS-STD", "1\"×4\" Coupon, Carbon Steel, Std Grade", "Carbon Steel A36", "N/A (coupon)"],
                    ["CC-1X4-316SS", "1\"×4\" Coupon, 316 Stainless Steel", "316L SS", "N/A (coupon)"],
                    ["CC-RACK-1NPT-3", "1\" NPT Rack, 3-Coupon Holder", "316 SS Body", "3,000 PSI"],
                    ["CC-RACK-2NPT-6", "2\" NPT Rack, 6-Coupon Holder", "316 SS Body", "3,000 PSI"],
                    ["CC-1X4-HC276", "1\"×4\" Coupon, Hastelloy C-276", "Hastelloy C-276", "N/A (coupon)"],
                  ].map(([pn, desc, mat, psi], i) => (
                    <tr key={pn} className={i % 2 === 0 ? "bg-white" : "bg-[#f7f9fc]"}>
                      <td className="px-5 py-3 text-sm font-mono font-semibold text-[#0f2a4a] border-b border-[#e8edf2]">{pn}</td>
                      <td className="px-5 py-3 text-sm text-[#1e2b3a] border-b border-[#e8edf2]">{desc}</td>
                      <td className="px-5 py-3 text-sm text-[#566677] border-b border-[#e8edf2]">{mat}</td>
                      <td className="px-5 py-3 text-sm text-[#566677] border-b border-[#e8edf2]">{psi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. RELATED ACCESSORIES */}
          <section className="bg-[#f7f9fc] py-8">
            <h3 className="text-[#0f2a4a] font-bold text-xl mb-6">Compatible Accessories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { name: "Retrieval Access Fittings", desc: "NPT and flanged access fittings for safe under-pressure coupon insertion and retrieval.", href: "/products/access-fittings" },
                { name: "ER Probe Systems", desc: "Continuous ER monitoring to complement periodic coupon gravimetric measurements.", href: "/products/er-probe" },
                { name: "FieldCom Wireless DAQ", desc: "Data loggers to record ambient conditions and correlate with coupon exposure results.", href: "/products/fieldcom" },
              ].map((acc) => (
                <div key={acc.name} className="bg-white border border-[#e8edf2] rounded-xl p-5">
                  <h4 className="text-[#0f2a4a] font-bold text-sm mb-2">{acc.name}</h4>
                  <p className="text-[#566677] text-xs leading-relaxed mb-4">{acc.desc}</p>
                  <Link href={acc.href} className="inline-flex items-center gap-1.5 text-[#f4a65d] text-xs font-semibold hover:text-[#d4892a] transition-colors">
                    View Product <ArrowRight size={12} />
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ── SIDEBAR ── */}
        <aside className="lg:col-span-1 mt-12 lg:mt-0">
          <div className="sticky top-[95px] space-y-5">

            <div className="bg-[#f4a65d] rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <ShoppingCart size={24} />
                <span className="font-bold text-lg">Request a Quote</span>
              </div>
              <p className="text-orange-100 text-sm mb-5 leading-relaxed">
                Specify coupon alloy, rack size, and quantity for a same-day quotation.
              </p>
              <button className="bg-white text-[#f4a65d] font-bold w-full py-3 rounded-lg hover:bg-orange-50 transition-colors">
                Request a Quote
              </button>
              <Link href="/contact" className="block text-center text-orange-100 text-sm mt-3 hover:text-white transition-colors">
                Contact an Engineer
              </Link>
            </div>

            <div className="bg-white border border-[#e8edf2] rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <FileText size={20} className="text-[#0f2a4a]" />
                <span className="font-bold text-[#1e2b3a]">Download Datasheet</span>
              </div>
              <p className="text-[#566677] text-xs mb-1">COSASCO_Corrosion_Coupons_DS.pdf</p>
              <p className="text-[#8898aa] text-xs mb-4">1.2 MB · PDF</p>
              <button className="inline-flex items-center gap-2 bg-[#0f2a4a] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#1a3a5c] transition-colors w-full justify-center">
                <Download size={14} /> Download
              </button>
            </div>

            <div className="bg-white border border-[#e8edf2] rounded-xl p-5">
              <h4 className="font-bold text-[#1e2b3a] mb-3">Technical Support</h4>
              <div className="flex items-center gap-2.5 text-sm text-[#566677] mb-2">
                <Phone size={15} className="text-[#0f2a4a] flex-shrink-0" />
                +1 (562) 595-5671
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#566677]">
                <Mail size={15} className="text-[#0f2a4a] flex-shrink-0" />
                support@cosasco.com
              </div>
            </div>

            <div className="bg-white border border-[#e8edf2] rounded-xl p-5">
              <h4 className="font-bold text-[#1e2b3a] mb-4">Related Products</h4>
              <ul className="space-y-3">
                {[
                  { name: "Retrieval Access Fittings", href: "/products/access-fittings" },
                  { name: "ER Probe Systems", href: "/products/er-probe" },
                  { name: "FieldCom Wireless DAQ", href: "/products/fieldcom" },
                ].map((p) => (
                  <li key={p.name}>
                    <Link href={p.href} className="flex items-center justify-between text-sm text-[#0f2a4a] hover:text-[#f4a65d] font-medium transition-colors group">
                      {p.name}
                      <ArrowRight size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </aside>
      </div>
    </>
  );
}
