'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowRight, Info, RotateCcw, Ruler } from 'lucide-react'

// ── Pipe data (NPS → OD in inches, schedules → wall thickness in inches) ───────

type ScheduleKey = 'Sch 10' | 'Sch 20' | 'Sch 40' | 'Sch 80' | 'Sch 120' | 'Sch 160' | 'Sch XXS'

interface PipeSize {
  label: string
  od: number
  schedules: Partial<Record<ScheduleKey, number>>
}

const PIPE_SIZES: PipeSize[] = [
  { label: '1"',  od: 1.315, schedules: { 'Sch 40': 0.133, 'Sch 80': 0.179, 'Sch 160': 0.250, 'Sch XXS': 0.358 } },
  { label: '1½"', od: 1.900, schedules: { 'Sch 40': 0.145, 'Sch 80': 0.200, 'Sch 160': 0.281, 'Sch XXS': 0.400 } },
  { label: '2"',  od: 2.375, schedules: { 'Sch 40': 0.154, 'Sch 80': 0.218, 'Sch 120': 0.250, 'Sch 160': 0.344, 'Sch XXS': 0.436 } },
  { label: '3"',  od: 3.500, schedules: { 'Sch 40': 0.216, 'Sch 80': 0.300, 'Sch 120': 0.375, 'Sch 160': 0.438, 'Sch XXS': 0.600 } },
  { label: '4"',  od: 4.500, schedules: { 'Sch 40': 0.237, 'Sch 80': 0.337, 'Sch 120': 0.438, 'Sch 160': 0.531, 'Sch XXS': 0.674 } },
  { label: '6"',  od: 6.625, schedules: { 'Sch 40': 0.280, 'Sch 80': 0.432, 'Sch 120': 0.562, 'Sch 160': 0.719, 'Sch XXS': 0.864 } },
  { label: '8"',  od: 8.625, schedules: { 'Sch 20': 0.250, 'Sch 40': 0.322, 'Sch 80': 0.500, 'Sch 120': 0.719, 'Sch 160': 0.906 } },
  { label: '10"', od: 10.750, schedules: { 'Sch 20': 0.250, 'Sch 40': 0.365, 'Sch 80': 0.594, 'Sch 120': 0.844, 'Sch 160': 1.125 } },
  { label: '12"', od: 12.750, schedules: { 'Sch 20': 0.250, 'Sch 40': 0.406, 'Sch 80': 0.688, 'Sch 120': 1.000, 'Sch 160': 1.312 } },
  { label: '16"', od: 16.000, schedules: { 'Sch 10': 0.250, 'Sch 20': 0.312, 'Sch 40': 0.500, 'Sch 80': 0.844 } },
  { label: '20"', od: 20.000, schedules: { 'Sch 10': 0.250, 'Sch 20': 0.375, 'Sch 40': 0.594, 'Sch 80': 1.031 } },
  { label: '24"', od: 24.000, schedules: { 'Sch 10': 0.250, 'Sch 20': 0.375, 'Sch 40': 0.688, 'Sch 80': 1.219 } },
]

// Thread engagement by fitting NPT size (inches)
const FITTING_ENGAGEMENT: Record<string, number> = {
  '¾" NPT':  0.75,
  '1" NPT':  1.00,
  '1½" NPT': 1.25,
  '2" NPT':  1.50,
}

// Probe position options: fraction of ID from pipe wall
const POSITIONS = [
  { label: 'Centerline (ID / 2)', value: 'center' },
  { label: '⅓ ID from wall', value: 'third' },
  { label: '¼ ID from wall', value: 'quarter' },
  { label: 'Custom depth', value: 'custom' },
]

type Units = 'in' | 'mm'

function round2(n: number) { return Math.round(n * 100) / 100 }
function toMm(inches: number) { return round2(inches * 25.4) }
function fmt(n: number, units: Units) {
  return units === 'in' ? `${round2(n)}"` : `${toMm(n)} mm`
}

export default function DeviceLengthCalculatorPage() {
  const [pipeIdx, setPipeIdx] = useState(2)          // default: 2" pipe
  const [schedule, setSchedule] = useState<ScheduleKey>('Sch 40')
  const [fitting, setFitting] = useState('1" NPT')
  const [position, setPosition] = useState('center')
  const [customDepth, setCustomDepth] = useState('')
  const [units, setUnits] = useState<Units>('in')

  const pipe = PIPE_SIZES[pipeIdx]
  const wallThickness = pipe.schedules[schedule] ?? null
  const availableSchedules = Object.keys(pipe.schedules) as ScheduleKey[]

  // If selected schedule isn't available for this pipe, fallback to Sch 40
  const actualSchedule: ScheduleKey = availableSchedules.includes(schedule) ? schedule : (availableSchedules.find(s => s === 'Sch 40') ?? availableSchedules[0])
  const wt = pipe.schedules[actualSchedule] ?? 0
  const id = round2(pipe.od - 2 * wt)
  const engagement = FITTING_ENGAGEMENT[fitting] ?? 1.0

  const insertionDepth = useMemo(() => {
    if (position === 'center') return id / 2
    if (position === 'third')  return id / 3
    if (position === 'quarter') return id / 4
    if (position === 'custom') {
      const val = parseFloat(customDepth)
      return isNaN(val) ? null : val
    }
    return null
  }, [position, id, customDepth])

  const deviceLength = insertionDepth !== null ? round2(wt + engagement + insertionDepth) : null
  const maxSafeLength = round2(wt + engagement + id - 0.25) // leave ¼" clearance from far wall
  const minLength = round2(wt + engagement + 0.5) // at minimum, 0.5" past inside wall

  const customDepthNum = parseFloat(customDepth)
  const customTooDeep = position === 'custom' && !isNaN(customDepthNum) && customDepthNum > id - 0.25
  const customTooShallow = position === 'custom' && !isNaN(customDepthNum) && customDepthNum < 0.5

  function reset() {
    setPipeIdx(2)
    setSchedule('Sch 40')
    setFitting('1" NPT')
    setPosition('center')
    setCustomDepth('')
    setUnits('in')
  }

  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}
      <section className="bg-[#0f2a4a] pt-[72px] pb-14">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="text-[#5a7a94] text-sm mb-6 flex flex-wrap gap-1 items-center">
            <Link href="/innovation" className="hover:text-[#f4a65d] transition-colors">Innovation</Link>
            <span className="mx-1">/</span>
            <span className="text-white">Device Length Calculator</span>
          </nav>
          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight max-w-3xl mb-4">
            Device Length Calculator
          </h1>
          <p className="text-[#94aabb] text-lg max-w-2xl">
            Calculate the correct insertion length for Cosasco probes and corrosion coupons based on pipe size, schedule, and desired monitoring position.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Inputs */}
            <div className="lg:col-span-2 space-y-8">

              {/* Units toggle */}
              <div className="flex items-center gap-3">
                <span className="text-[#566677] text-sm font-semibold">Display units:</span>
                <div className="flex rounded-lg overflow-hidden border border-[#e8edf2]">
                  {(['in', 'mm'] as Units[]).map((u) => (
                    <button
                      key={u}
                      type="button"
                      onClick={() => setUnits(u)}
                      className={`px-4 py-1.5 text-sm font-semibold transition-colors ${units === u ? 'bg-[#0f2a4a] text-white' : 'bg-white text-[#566677] hover:bg-[#f0f4f8]'}`}
                    >
                      {u === 'in' ? 'Inches' : 'Millimeters'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 1 - Pipe Size */}
              <div>
                <h2 className="text-[#0f2a4a] font-black text-lg mb-1">1. Pipe Size (NPS)</h2>
                <p className="text-[#566677] text-sm mb-4">Select the nominal pipe size.</p>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {PIPE_SIZES.map((p, idx) => (
                    <button
                      key={p.label}
                      type="button"
                      onClick={() => {
                        setPipeIdx(idx)
                        const newPipe = PIPE_SIZES[idx]
                        const schKeys = Object.keys(newPipe.schedules) as ScheduleKey[]
                        if (!schKeys.includes(schedule)) setSchedule(schKeys.find(s => s === 'Sch 40') ?? schKeys[0])
                      }}
                      className={`py-2 rounded-lg text-sm font-bold border transition-all ${pipeIdx === idx ? 'bg-[#0f2a4a] text-white border-[#0f2a4a]' : 'bg-white text-[#334150] border-[#e8edf2] hover:border-[#f4a65d] hover:text-[#f4a65d]'}`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2 - Schedule */}
              <div>
                <h2 className="text-[#0f2a4a] font-black text-lg mb-1">2. Pipe Schedule</h2>
                <p className="text-[#566677] text-sm mb-4">Available schedules for {pipe.label} pipe (OD = {fmt(pipe.od, units)}).</p>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {availableSchedules.map((sch) => (
                    <button
                      key={sch}
                      type="button"
                      onClick={() => setSchedule(sch)}
                      className={`py-2 rounded-lg text-sm font-bold border transition-all ${actualSchedule === sch ? 'bg-[#0f2a4a] text-white border-[#0f2a4a]' : 'bg-white text-[#334150] border-[#e8edf2] hover:border-[#f4a65d] hover:text-[#f4a65d]'}`}
                    >
                      {sch}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3 - Access Fitting */}
              <div>
                <h2 className="text-[#0f2a4a] font-black text-lg mb-1">3. Access Fitting Thread Size</h2>
                <p className="text-[#566677] text-sm mb-4">Select the NPT thread size of the access fitting. This determines thread engagement allowance.</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {Object.keys(FITTING_ENGAGEMENT).map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFitting(f)}
                      className={`py-2 rounded-lg text-sm font-bold border transition-all ${fitting === f ? 'bg-[#0f2a4a] text-white border-[#0f2a4a]' : 'bg-white text-[#334150] border-[#e8edf2] hover:border-[#f4a65d] hover:text-[#f4a65d]'}`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4 - Probe Position */}
              <div>
                <h2 className="text-[#0f2a4a] font-black text-lg mb-1">4. Probe Tip Position</h2>
                <p className="text-[#566677] text-sm mb-4">Where should the probe tip sit relative to the pipe bore? Centerline is standard for most applications.</p>
                <div className="space-y-2">
                  {POSITIONS.map((pos) => (
                    <label
                      key={pos.value}
                      className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${position === pos.value ? 'border-[#f4a65d] bg-[#fef8f0]' : 'border-[#e8edf2] hover:border-[#f4a65d]'}`}
                    >
                      <input
                        type="radio"
                        name="position"
                        value={pos.value}
                        checked={position === pos.value}
                        onChange={() => setPosition(pos.value)}
                        className="accent-[#f4a65d]"
                      />
                      <span className="text-[#0f2a4a] font-semibold text-sm">{pos.label}</span>
                    </label>
                  ))}
                </div>
                {position === 'custom' && (
                  <div className="mt-3">
                    <label htmlFor="custom-depth" className="block text-[#566677] text-sm font-semibold mb-1">
                      Custom insertion depth (from inside pipe wall, in inches)
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        id="custom-depth"
                        type="number"
                        min="0"
                        step="0.25"
                        value={customDepth}
                        onChange={(e) => setCustomDepth(e.target.value)}
                        placeholder={`e.g. ${round2(id / 2)}`}
                        className={`border rounded-lg px-4 py-2.5 text-sm text-[#0f2a4a] w-40 outline-none transition-colors ${customTooDeep || customTooShallow ? 'border-red-400 bg-red-50' : 'border-[#e8edf2] focus:border-[#f4a65d]'}`}
                      />
                      <span className="text-[#8898aa] text-sm">inches</span>
                    </div>
                    {customTooDeep && (
                      <p className="text-red-600 text-xs mt-2">⚠ Depth exceeds pipe ID ({round2(id)}"). Probe would contact far wall.</p>
                    )}
                    {customTooShallow && (
                      <p className="text-amber-600 text-xs mt-2">⚠ Depth less than 0.5". Probe tip may not clear pipe wall reliably.</p>
                    )}
                  </div>
                )}
              </div>

              {/* Reset */}
              <button
                type="button"
                onClick={reset}
                className="flex items-center gap-2 text-[#8898aa] hover:text-[#566677] text-sm font-semibold transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Reset to defaults
              </button>
            </div>

            {/* Results Panel */}
            <div className="space-y-6">
              <div className="bg-[#f0f4f8] rounded-xl p-6 sticky top-[90px]">
                <div className="flex items-center gap-2 mb-5">
                  <Ruler className="w-5 h-5 text-[#f4a65d]" />
                  <h3 className="text-[#0f2a4a] font-black text-lg">Results</h3>
                </div>

                {/* Pipe geometry */}
                <dl className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <dt className="text-[#8898aa] text-xs font-semibold uppercase tracking-wider">Pipe OD</dt>
                    <dd className="text-[#0f2a4a] font-bold text-sm">{fmt(pipe.od, units)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[#8898aa] text-xs font-semibold uppercase tracking-wider">Wall Thickness</dt>
                    <dd className="text-[#0f2a4a] font-bold text-sm">{fmt(wt, units)}</dd>
                  </div>
                  <div className="flex justify-between border-t border-[#e8edf2] pt-3">
                    <dt className="text-[#8898aa] text-xs font-semibold uppercase tracking-wider">Internal Diameter</dt>
                    <dd className="text-[#0f2a4a] font-bold text-sm">{fmt(id, units)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[#8898aa] text-xs font-semibold uppercase tracking-wider">Thread Engagement</dt>
                    <dd className="text-[#0f2a4a] font-bold text-sm">{fmt(engagement, units)}</dd>
                  </div>
                </dl>

                {/* Recommended length */}
                <div className={`rounded-xl p-5 text-center mb-4 ${deviceLength !== null && !customTooDeep ? 'bg-[#0f2a4a]' : 'bg-[#e8edf2]'}`}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: deviceLength !== null && !customTooDeep ? '#94aabb' : '#8898aa' }}>
                    Recommended Device Length
                  </p>
                  {deviceLength !== null && !customTooDeep ? (
                    <p className="text-[#f4a65d] font-black text-4xl">{fmt(deviceLength, units)}</p>
                  ) : (
                    <p className="text-[#8898aa] font-black text-xl">-</p>
                  )}
                </div>

                {/* Min / Max */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-white rounded-lg p-3 text-center border border-[#e8edf2]">
                    <p className="text-[#8898aa] text-[10px] font-bold uppercase tracking-wider mb-1">Min Length</p>
                    <p className="text-[#0f2a4a] font-black text-base">{fmt(minLength, units)}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center border border-[#e8edf2]">
                    <p className="text-[#8898aa] text-[10px] font-bold uppercase tracking-wider mb-1">Max Safe Length</p>
                    <p className="text-[#0f2a4a] font-black text-base">{fmt(maxSafeLength, units)}</p>
                  </div>
                </div>

                {/* Formula note */}
                <div className="bg-white rounded-lg p-4 border border-[#e8edf2]">
                  <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-[#f4a65d] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[#566677] text-xs leading-relaxed">
                        <span className="font-semibold">Formula:</span> Device Length = Wall Thickness + Thread Engagement + Insertion Depth
                      </p>
                      {position === 'center' && (
                        <p className="text-[#8898aa] text-xs mt-1">
                          = {fmt(wt, units)} + {fmt(engagement, units)} + {fmt(id / 2, units)} (ID/2)
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="border border-[#e8edf2] rounded-xl p-5">
                <p className="text-[#0f2a4a] font-bold mb-2">Need custom device sizing?</p>
                <p className="text-[#566677] text-sm mb-4">Our engineers can spec devices for non-standard configurations, HPHT service, or large-bore pipelines.</p>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-[#f4a65d] font-semibold text-sm hover:text-[#d4892a] transition-colors"
                >
                  Contact an Engineer <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Usage notes */}
      <section className="py-12 bg-[#f7f9fc]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[#0f2a4a] font-black text-xl mb-6">How to Use This Calculator</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Identify your pipe', body: 'Use your piping isometric or P&ID to confirm the nominal pipe size (NPS) and schedule. If unknown, pipe schedule can be determined from wall thickness measurement.' },
              { step: '02', title: 'Select your fitting', body: 'Choose the NPT thread size of the Cosasco access fitting installed on your pipeline. Fitting size determines thread engagement allowance in the calculation.' },
              { step: '03', title: 'Choose probe position', body: 'Centerline placement is standard for most ER probe and corrosion coupon applications. For turbulent or high-velocity flows, consult a Cosasco engineer about optimal positioning.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#f4a65d]/20 text-[#f4a65d] flex items-center justify-center font-black text-sm">
                  {item.step}
                </div>
                <div>
                  <p className="text-[#0f2a4a] font-bold mb-1">{item.title}</p>
                  <p className="text-[#566677] text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[#8898aa] text-xs mt-8">
            All calculations are based on standard ASME B36.10M pipe dimensional data. Results are recommendations - final device specifications should be confirmed by a qualified corrosion engineer. Cosasco accepts no liability for field installations made solely on the basis of this calculator output.
          </p>
        </div>
      </section>

    </div>
  )
}
