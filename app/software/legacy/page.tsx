import type { Metadata } from 'next'
import Link from 'next/link'
import { Download, AlertTriangle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Legacy Software Downloads | Cosasco',
  description:
    'Download previous versions of Cosasco software for older hardware compatibility. CorrView Classic, FieldLog Desktop, and DataCom Configurator legacy releases.',
}

const legacyDownloads = [
  {
    software: 'CorrView Classic',
    version: 'v3.2.1',
    releaseDate: 'Nov 2022',
    hardware: 'Series 3 Data Loggers',
    format: 'Windows EXE',
  },
  {
    software: 'CorrView Classic',
    version: 'v2.8.4',
    releaseDate: 'Mar 2021',
    hardware: 'Series 2 Data Loggers',
    format: 'Windows EXE',
  },
  {
    software: 'FieldLog Desktop',
    version: 'v1.9.2',
    releaseDate: 'Jan 2020',
    hardware: 'First-gen FieldLog units',
    format: 'Windows EXE',
  },
  {
    software: 'FieldLog Desktop',
    version: 'v1.7.0',
    releaseDate: 'Jun 2019',
    hardware: 'First-gen FieldLog units',
    format: 'Windows EXE',
  },
  {
    software: 'DataCom Configurator',
    version: 'v2.1.0',
    releaseDate: 'Aug 2020',
    hardware: 'Legacy serial probes',
    format: 'Windows EXE',
  },
]

export default function LegacySoftwarePage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[#0f2a4a] pt-[72px] pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-[#8ab4d4] mb-6">
            <Link href="/software" className="hover:text-white transition-colors">
              Software
            </Link>
            <span>/</span>
            <span className="text-white">Legacy Downloads</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Legacy Software Downloads
          </h1>
          <p className="text-lg text-[#8ab4d4] max-w-2xl">
            Download previous versions of Cosasco software for older hardware compatibility.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Warning Banner */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-amber-800 text-sm leading-relaxed">
              <span className="font-semibold">Legacy software notice:</span> Legacy software is
              provided for compatibility with older hardware only. For new deployments, we strongly
              recommend CDO (Cosasco Data Online). Legacy versions do not receive
              security updates.
            </p>
          </div>

          {/* Downloads Table */}
          <div className="border border-[#e8edf2] rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#0f2a4a] text-white">
                    <th className="text-left px-5 py-4 font-semibold">Software</th>
                    <th className="text-left px-5 py-4 font-semibold">Version</th>
                    <th className="text-left px-5 py-4 font-semibold">Release Date</th>
                    <th className="text-left px-5 py-4 font-semibold">Compatible Hardware</th>
                    <th className="text-left px-5 py-4 font-semibold">Format</th>
                    <th className="text-left px-5 py-4 font-semibold">Download</th>
                  </tr>
                </thead>
                <tbody>
                  {legacyDownloads.map((row, i) => (
                    <tr
                      key={row.software + row.version}
                      className={i % 2 === 0 ? 'bg-white' : 'bg-[#f7f9fc]'}
                    >
                      <td className="px-5 py-4 font-semibold text-[#0f2a4a]">{row.software}</td>
                      <td className="px-5 py-4 text-[#566677] font-mono text-xs">{row.version}</td>
                      <td className="px-5 py-4 text-[#566677]">{row.releaseDate}</td>
                      <td className="px-5 py-4 text-[#566677]">{row.hardware}</td>
                      <td className="px-5 py-4 text-[#566677]">{row.format}</td>
                      <td className="px-5 py-4">
                        <button
                          type="button"
                          className="bg-[#0f2a4a] hover:bg-[#1a3d5c] text-white text-xs font-semibold px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-colors"
                        >
                          <Download className="w-3.5 h-3.5" />
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Support Cards */}
          <div>
            <h2 className="text-2xl font-bold text-[#0f2a4a] mb-6">
              Need Support for Legacy Systems?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white border border-[#e8edf2] rounded-xl p-7">
                <h3 className="font-bold text-[#0f2a4a] text-lg mb-3">Upgrade Consultation</h3>
                <p className="text-[#566677] text-sm leading-relaxed mb-5">
                  Planning a transition to CDO? Our engineers can assess your hardware
                  and recommend a migration path.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0f2a4a] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1a3d5c] transition-colors"
                >
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-white border border-[#e8edf2] rounded-xl p-7">
                <h3 className="font-bold text-[#0f2a4a] text-lg mb-3">Legacy Technical Support</h3>
                <p className="text-[#566677] text-sm leading-relaxed mb-5">
                  Still running legacy hardware? We provide best-effort support for discontinued
                  products. Contact our team.
                </p>
                <Link
                  href="/support"
                  className="inline-flex items-center gap-2 bg-[#0f2a4a] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1a3d5c] transition-colors"
                >
                  Get Support <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <p className="text-[#8898aa] text-xs leading-relaxed">
            Cosasco provides these downloads as-is for hardware compatibility. Legacy software
            downloads require a valid Cosasco account. If you do not have an account, please
            contact{' '}
            <a href="mailto:support@cosasco.com" className="hover:underline">
              support@cosasco.com
            </a>
            .
          </p>

        </div>
      </section>
    </main>
  )
}
