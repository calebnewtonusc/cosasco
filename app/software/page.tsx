import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Corrosion Monitoring Software | Cosasco FieldCom',
  description: 'FieldCom cloud platform, CorrView desktop, and mobile apps for corrosion data acquisition.',
}

import { BarChart2, Monitor, Smartphone, CheckCircle2, Cloud, Download } from "lucide-react";

export default function SoftwarePage() {
  const products = [
    {
      icon: <BarChart2 className="w-10 h-10 text-[#f4a65d]" />,
      badge: "Cloud-based",
      badgeColor: "bg-sky-100 text-sky-700",
      title: "FieldCom Cloud Platform",
      desc: "A real-time corrosion monitoring dashboard accessible from any browser. Connect your FieldCom wireless transmitters and view live data, trends, and alerts from anywhere in the world.",
      features: [
        "Real-time sensor data from all connected devices",
        "Configurable alarm thresholds and email/SMS alerts",
        "Multi-site dashboards with role-based access control",
        "Automated reporting and data export (CSV, PDF)",
      ],
    },
    {
      icon: <Monitor className="w-10 h-10 text-[#f4a65d]" />,
      badge: "Desktop App",
      badgeColor: "bg-purple-100 text-purple-700",
      title: "CorrView Desktop",
      desc: "A powerful offline data analysis application for Windows. Import logged data from FieldCom data loggers, perform corrosion rate calculations, and generate detailed compliance reports.",
      features: [
        "Offline data import from FieldCom hardware",
        "Advanced corrosion rate trend analysis tools",
        "Customizable report templates for compliance",
        "Batch data processing for large deployments",
      ],
    },
    {
      icon: <Smartphone className="w-10 h-10 text-[#f4a65d]" />,
      badge: "Mobile",
      badgeColor: "bg-green-100 text-green-700",
      title: "FieldCom Mobile",
      desc: "Monitor your corrosion data on the go with the FieldCom Mobile app for iOS and Android. Perfect for field technicians conducting inspections or engineers who need instant access to site data.",
      features: [
        "Live sensor readings and historical trends",
        "Push notifications for critical alarm conditions",
        "Offline mode for areas with limited connectivity",
        "QR code scanning for rapid probe identification",
      ],
    },
  ];

  const sysReqs = [
    { label: "Operating System", value: "Windows 10 / 11 (64-bit)" },
    { label: "Processor", value: "Intel Core i5 or AMD equivalent (2.0 GHz+)" },
    { label: "Memory", value: "8 GB RAM minimum; 16 GB recommended" },
    { label: "Storage", value: "2 GB available disk space" },
    { label: "Display", value: "1280 × 800 minimum resolution" },
    { label: "Browser (Cloud)", value: "Chrome 100+, Firefox 100+, Edge 100+, Safari 16+" },
    { label: "Mobile OS", value: "iOS 15+ or Android 11+" },
    { label: ".NET Runtime", value: ".NET 6.0 or later (CorrView Desktop)" },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="bg-[#0f2a4a] pt-[75px] pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#f4a65d] text-sm font-semibold tracking-widest uppercase mb-4">
            Software & Tools
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Corrosion Monitoring Software
          </h1>
          <p className="text-lg text-[#8ab4d4] max-w-2xl mx-auto">
            From real-time cloud dashboards to offline desktop analysis, Cosasco software keeps your corrosion data working for you.
          </p>
        </div>
      </section>

      {/* LOGIN CTA */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Login card */}
            <div className="bg-[#f7f9fc] border border-[#e8edf2] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Cloud className="w-6 h-6 text-[#f4a65d]" />
                <h2 className="text-xl font-bold text-[#0f2a4a]">FieldCom Software Login</h2>
              </div>
              <p className="text-[#6b7280] text-sm mb-6">
                Access your FieldCom cloud dashboard. Sign in with your Cosasco account credentials.
              </p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="fieldcom-email" className="block text-sm font-medium text-[#374151] mb-1.5">Email Address</label>
                  <input
                    id="fieldcom-email"
                    type="email"
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 border border-[#e8edf2] rounded-lg text-[#374151] placeholder-[#6b7280] bg-white focus:outline-none focus:border-[#0f2a4a] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="fieldcom-password" className="block text-sm font-medium text-[#374151] mb-1.5">Password</label>
                  <input
                    id="fieldcom-password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border border-[#e8edf2] rounded-lg text-[#374151] placeholder-[#6b7280] bg-white focus:outline-none focus:border-[#0f2a4a] transition-colors"
                  />
                </div>
                <button className="w-full bg-[#0f2a4a] text-white py-3 rounded-lg font-semibold hover:bg-[#1a3d6b] transition-colors">
                  Login to FieldCom
                </button>
              </div>
              <p className="mt-4 text-center">
                <a href="#" className="text-[#f4a65d] text-sm hover:underline">
                  Forgot your password?
                </a>
              </p>
              <p className="mt-3 text-[#6b7280] text-xs text-center leading-relaxed">
                Access is granted to authorized Cosasco customers only. Contact your sales representative to set up or manage account access.
              </p>
            </div>

            {/* No account card */}
            <div className="bg-[#0f2a4a] rounded-2xl p-8 text-white">
              <h2 className="text-xl font-bold mb-4">Don&apos;t have an account?</h2>
              <p className="text-[#8ab4d4] text-sm mb-6 leading-relaxed">
                FieldCom Cloud access is included with qualifying FieldCom hardware purchases. Contact our team to set up your cloud account, request a software trial, or get help with an existing login.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Free account setup with hardware purchase",
                  "Dedicated onboarding from Cosasco support",
                  "Multi-user access for your entire team",
                  "14-day trial available for evaluations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#8ab4d4]">
                    <CheckCircle2 className="w-4 h-4 text-[#f4a65d] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-[#f4a65d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e8954a] transition-colors"
              >
                Contact Us to Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SECTIONS */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#0f2a4a]">Our Software Suite</h2>
            <p className="text-[#6b7280] mt-3 max-w-xl mx-auto">
              Three purpose-built tools that cover every stage of the corrosion monitoring workflow.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.title}
                className="bg-white border border-[#e8edf2] rounded-xl p-8 flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  {product.icon}
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${product.badgeColor}`}>
                    {product.badge}
                  </span>
                </div>
                <h3 className="font-bold text-[#0f2a4a] text-lg mb-3">{product.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-5">{product.desc}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[#374151]">
                      <CheckCircle2 className="w-4 h-4 text-[#f4a65d] mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3 mt-auto">
                  <Link
                    href="/contact"
                    className="flex-1 text-center border border-[#0f2a4a] text-[#0f2a4a] px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#0f2a4a] hover:text-white transition-colors"
                  >
                    Learn More
                  </Link>
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-[#f4a65d] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#e8954a] transition-colors"
                  >
                    <Download className="w-4 h-4" /> Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM REQUIREMENTS */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0f2a4a] mb-8">System Requirements</h2>
            <div className="border border-[#e8edf2] rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0f2a4a] text-white">
                    <th className="text-left px-6 py-4 font-semibold">Requirement</th>
                    <th className="text-left px-6 py-4 font-semibold">Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {sysReqs.map((req, i) => (
                    <tr key={req.label} className={i % 2 === 0 ? "bg-white" : "bg-[#f7f9fc]"}>
                      <td className="px-6 py-4 font-medium text-[#374151]">{req.label}</td>
                      <td className="px-6 py-4 text-[#6b7280]">{req.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[#6b7280] text-xs mt-4">
              * Requirements apply to CorrView Desktop. FieldCom Cloud runs in-browser; FieldCom Mobile requires iOS 15+ or Android 11+. Specifications subject to change with software updates.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
