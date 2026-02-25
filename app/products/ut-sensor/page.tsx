import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ultrasonic Wall Thickness Sensors | Cosasco',
  description: 'Non-intrusive UT sensors for continuous pipe wall thickness and erosion monitoring.',
}

import Link from "next/link";
import {
  ChevronRight,
  CheckCircle,
  MessageSquare,
  FileText,
  Phone,
  Mail,
  Download,
  ArrowRight,
  ScanLine,
} from "lucide-react";
import RecentlyViewed from '@/components/RecentlyViewed';

export default function UTSensorPage() {
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
            <Link href="/products/erosion-monitoring" className="hover:text-white transition-colors">Erosion Monitoring</Link>
            <ChevronRight size={14} className="opacity-50" />
            <span className="text-white font-medium">UT Sensors</span>
          </nav>

          <h1 className="text-white font-black text-4xl lg:text-5xl leading-tight mb-4">
            Ultrasonic Wall Thickness (UT) Sensors
          </h1>
          <p className="text-[#94aabb] text-lg max-w-2xl leading-relaxed mb-8">
            Non-intrusive, high-resolution ultrasonic transducers for continuous external wall
            thickness monitoring - detect corrosion and erosion thinning without process
            interruption or pipe penetration.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              { label: "Resolution: 0.01 mm" },
              { label: "Range: 3–100 mm" },
              { label: "DNV-GL Certified" },
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
              <ScanLine size={72} className="text-[#0f2a4a] opacity-30" />
              <span className="text-[#566677] font-semibold text-lg">Ultrasonic Wall Thickness (UT) Sensors</span>
            </div>

            <div className="space-y-4 text-[#566677] leading-relaxed mb-10">
              <p>
                Cosasco Ultrasonic Wall Thickness Sensors provide continuous, non-intrusive
                measurement of pipe and vessel wall thickness from the external surface, requiring
                no penetration of the pressure boundary. By emitting a 5 MHz ultrasonic pulse
                through the pipe wall and measuring the time-of-flight of the returning echo,
                the system resolves wall thickness to 0.01 mm - sufficient to detect early-stage
                corrosion and erosion thinning well before it reaches critical alert thresholds.
              </p>
              <p>
                Sensors are available in two attachment configurations: permanent weld-on mounts
                bonded directly to the pipe exterior for fixed monitoring points, and magnetic
                clamp-on holders for temporary surveys and inspection campaigns. The permanent
                weld-on configuration is compatible with the Microcor® Wireless Transmitter,
                enabling autonomous, continuous wall thickness trending with no operator visits
                between reading cycles. Measurement range covers wall thicknesses from 3 mm to
                100 mm, making the sensors applicable across small-bore instrument tubing,
                standard process piping, and large-diameter storage vessel shells.
              </p>
              <p>
                Operating temperature range of -40°C to 150°C suits both arctic onshore
                pipelines and hot process vessel monitoring without high-temperature couplant
                or special hardware. All Cosasco UT sensors carry DNV-GL type approval for marine
                and offshore applications, as well as ATEX Zone 1 certification for classified
                hazardous areas. Outputs are compatible with all standard ultrasonic instruments
                and the Cosasco CDO data acquisition system.
              </p>
            </div>

            <h3 className="text-[#0f2a4a] font-bold text-xl mb-4">Key Features</h3>
            <ul className="space-y-3">
              {[
                "0.01 mm resolution at 5 MHz - detects sub-millimeter wall loss early in corrosion cycle",
                "Non-intrusive external attachment - no pipe penetration or process shutdown required",
                "Wall thickness range 3 mm to 100 mm for tubing to large-bore vessel shells",
                "Permanent weld-on and temporary magnetic clamp-on configurations available",
                "Operating temperature -40°C to 150°C; compatible with all pipe insulation systems",
                "DNV-GL marine type approval; ATEX Zone 1 & 2 certified for hazardous areas",
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
                    ["Frequency", "5 MHz standard", "2.25 MHz and 10 MHz available"],
                    ["Resolution", "0.01 mm (10 microns)", "A-scan time-of-flight measurement"],
                    ["Measurement Range", "3–100 mm wall thickness", "Pipe wall and vessel shell"],
                    ["Temperature", "-40°C to 150°C", "No high-temp couplant required to 150°C"],
                    ["Attachment", "Permanent weld-on or magnetic clamp", "Weld-on for continuous; magnetic for surveys"],
                    ["Compatibility", "Standard UT instruments", "All major brands; Microcor® Wireless compatible"],
                    ["Certifications", "DNV-GL, ATEX Zone 1 & 2", "Marine and hazardous area approved"],
                    ["Connector", "LEMO 00 Series", "Industry standard UT instrument interface"],
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
                    ["UT-5MHZ-WO-STD", "5 MHz UT Sensor, Permanent Weld-On", "316SS Housing", "N/A (external)"],
                    ["UT-5MHZ-MAG-STD", "5 MHz UT Sensor, Magnetic Clamp", "Carbon Steel Magnet", "N/A (external)"],
                    ["UT-5MHZ-WO-ATEX", "5 MHz UT Sensor, Weld-On, ATEX Z1", "316SS Housing", "N/A (external)"],
                    ["UT-2MHZ-WO-STD", "2.25 MHz UT Sensor, Weld-On, Thick Wall", "316SS Housing", "N/A (external)"],
                    ["UT-FC-ADAPTER", "Microcor® Wireless Adapter for UT Sensor", "GRP Enclosure", "N/A"],
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
                { name: "Microcor® Wireless DAQ", desc: "Connect weld-on UT sensors to the Microcor® Wireless Transmitter for autonomous continuous monitoring.", href: "/products/data-acquisition" },
                { name: "ER Probe Systems", desc: "Combine UT external thickness trending with ER probe internal corrosion rate data for full-picture integrity.", href: "/products/er-probe" },
                { name: "Retrieval Access Fittings", desc: "For applications requiring both non-intrusive UT and intrusive probe monitoring at the same location.", href: "/products/access-fittings" },
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
                <MessageSquare size={24} />
                <span className="font-bold text-lg">Request a Quote</span>
              </div>
              <p className="text-orange-100 text-sm mb-5 leading-relaxed">
                Specify frequency, attachment type, ATEX requirement, and quantity for a fast, accurate quote.
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
              <p className="text-[#566677] text-xs mb-1">COSASCO_UT_Sensors_DS.pdf</p>
              <p className="text-[#8898aa] text-xs mb-4">2.0 MB · PDF</p>
              <button className="inline-flex items-center gap-2 bg-[#0f2a4a] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#1a3a5c] transition-colors w-full justify-center">
                <Download size={14} /> Download
              </button>
            </div>

            <div className="bg-white border border-[#e8edf2] rounded-xl p-5">
              <h4 className="font-bold text-[#1e2b3a] mb-3">Technical Support</h4>
              <div className="flex items-center gap-2.5 text-sm text-[#566677] mb-2">
                <Phone size={15} className="text-[#0f2a4a] flex-shrink-0" />
                +1 (562) 949-0123
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
                  { name: "Microcor® Wireless DAQ", href: "/products/data-acquisition" },
                  { name: "ER Probe Systems", href: "/products/er-probe" },
                  { name: "Retrieval Access Fittings", href: "/products/access-fittings" },
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
      <RecentlyViewed currentProduct={{ name: "UT Sensors", href: "/products/ut-sensor", category: "Erosion Monitoring" }} />
    </>
  );
}