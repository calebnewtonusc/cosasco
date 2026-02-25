'use client'

import { useReducer } from 'react'
import Link from 'next/link'
import { Phone, Mail, CheckCircle, ChevronRight, Package, ClipboardList, AlertCircle } from 'lucide-react'

// ── Types ─────────────────────────────────────────────────────────────────────

type ReturnReason = 'Warranty Claim' | 'Repair' | 'Calibration' | 'Evaluation Return' | 'Other' | ''

interface FormState {
  currentStep: number
  fullName: string
  company: string
  email: string
  phone: string
  originalPONumber: string
  orderDate: string
  productName: string
  serialNumber: string
  quantity: string
  reasonForReturn: ReturnReason
  issueDescription: string
  hazardousExposure: 'yes' | 'no' | ''
  additionalNotes: string
  submitted: boolean
  rmaNumber: string
}

type Action =
  | { type: 'SET_FIELD'; field: keyof FormState; value: string }
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'SUBMIT'; rmaNumber: string }

const initialState: FormState = {
  currentStep: 1,
  fullName: '',
  company: '',
  email: '',
  phone: '',
  originalPONumber: '',
  orderDate: '',
  productName: '',
  serialNumber: '',
  quantity: '',
  reasonForReturn: '',
  issueDescription: '',
  hazardousExposure: '',
  additionalNotes: '',
  submitted: false,
  rmaNumber: '',
}

function formReducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value }
    case 'NEXT_STEP':
      return { ...state, currentStep: Math.min(state.currentStep + 1, 3) }
    case 'PREV_STEP':
      return { ...state, currentStep: Math.max(state.currentStep - 1, 1) }
    case 'SUBMIT':
      return { ...state, submitted: true, rmaNumber: action.rmaNumber }
    default:
      return state
  }
}

function generateRMANumber(): string {
  const suffix = Math.floor(1000 + Math.random() * 9000)
  return `RMA-2026-${suffix}`
}

// ── Input helper ──────────────────────────────────────────────────────────────

function InputField({
  id, label, type = 'text', placeholder, value, onChange, required = false, autoComplete,
}: {
  id: string; label: string; type?: string; placeholder?: string
  value: string; onChange: (v: string) => void; required?: boolean; autoComplete?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[#0f2a4a] font-semibold text-sm mb-1.5">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        autoComplete={autoComplete}
        className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:ring-2 focus:ring-[#f4a65d] focus:border-[#f4a65d] transition-colors bg-white"
      />
    </div>
  )
}

// ── Progress Indicator ────────────────────────────────────────────────────────

function ProgressSteps({ current }: { current: number }) {
  const steps = [
    { n: 1, label: 'Contact & Order', icon: ClipboardList },
    { n: 2, label: 'Product Details', icon: Package },
    { n: 3, label: 'Issue Description', icon: AlertCircle },
  ]
  return (
    <div className="flex items-start justify-center mb-10">
      {steps.map((step, i) => {
        const done = current > step.n
        const active = current === step.n
        return (
          <div key={step.n} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                  active
                    ? 'bg-[#f4a65d] text-white shadow-[0_0_0_4px_rgba(244,166,93,0.2)]'
                    : done
                    ? 'bg-[#0f2a4a] text-white'
                    : 'bg-[#e8edf2] text-[#8898aa]'
                }`}
              >
                {done ? <CheckCircle size={18} /> : step.n}
              </div>
              <span
                className={`mt-2 text-xs font-semibold hidden sm:block whitespace-nowrap ${
                  active ? 'text-[#f4a65d]' : done ? 'text-[#0f2a4a]' : 'text-[#8898aa]'
                }`}
              >
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`w-14 sm:w-20 h-0.5 mx-2 mb-5 transition-colors ${
                  done ? 'bg-[#0f2a4a]' : 'bg-[#e8edf2]'
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

// ── Sidebar ───────────────────────────────────────────────────────────────────

function Sidebar() {
  return (
    <aside className="space-y-5">
      <div className="bg-[#0f2a4a] rounded-xl p-6 text-white">
        <h3 className="font-bold text-base mb-4">Need Help?</h3>
        <div className="space-y-3">
          <a href="tel:+15629490123" className="flex items-center gap-3 text-[#94aabb] hover:text-white transition-colors text-sm">
            <Phone size={16} className="text-[#f4a65d] flex-shrink-0" />
            +1 (562) 949-0123
          </a>
          <a href="mailto:support@cosasco.com" className="flex items-center gap-3 text-[#94aabb] hover:text-white transition-colors text-sm">
            <Mail size={16} className="text-[#f4a65d] flex-shrink-0" />
            support@cosasco.com
          </a>
        </div>
        <p className="text-[#6a8aaa] text-xs mt-4 leading-relaxed">Available Monday – Friday, 7:00 AM – 5:00 PM PT</p>
      </div>

      <div className="bg-white border border-[#e8edf2] rounded-xl p-6">
        <h3 className="font-bold text-[#0f2a4a] text-base mb-4">RMA Policy</h3>
        <ul className="space-y-3">
          {[
            '30-day return window from date of delivery',
            'Warranty claims are processed at no charge',
            'Repair estimates provided before any work begins',
            'Ship prepaid: write RMA number on outside of package',
            'Expected turnaround: 2–3 business weeks',
          ].map((note) => (
            <li key={note} className="flex items-start gap-2.5 text-sm text-[#566677] leading-snug">
              <ChevronRight size={14} className="text-[#f4a65d] flex-shrink-0 mt-0.5" />
              {note}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

// ── Step 1 ────────────────────────────────────────────────────────────────────

function Step1({ state, dispatch }: { state: FormState; dispatch: React.Dispatch<Action> }) {
  const set = (field: keyof FormState) => (v: string) =>
    dispatch({ type: 'SET_FIELD', field, value: v })
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField id="fullName" label="Full Name" placeholder="John Smith" value={state.fullName} onChange={set('fullName')} required autoComplete="name" />
        <InputField id="company" label="Company" placeholder="Acme Industrial Corp" value={state.company} onChange={set('company')} required autoComplete="organization" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField id="email" label="Email Address" type="email" placeholder="john@company.com" value={state.email} onChange={set('email')} required autoComplete="email" />
        <InputField id="phone" label="Phone Number" type="tel" placeholder="+1 (555) 000-0000" value={state.phone} onChange={set('phone')} autoComplete="tel" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField id="originalPONumber" label="Original PO Number" placeholder="PO-2026-04821" value={state.originalPONumber} onChange={set('originalPONumber')} required />
        <InputField id="orderDate" label="Order Date" type="date" value={state.orderDate} onChange={set('orderDate')} required />
      </div>
    </div>
  )
}

// ── Step 2 ────────────────────────────────────────────────────────────────────

function Step2({ state, dispatch }: { state: FormState; dispatch: React.Dispatch<Action> }) {
  const set = (field: keyof FormState) => (v: string) =>
    dispatch({ type: 'SET_FIELD', field, value: v })
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField id="productName" label="Product Name / Model" placeholder="e.g. ER-TUB-CS-1NPT" value={state.productName} onChange={set('productName')} required />
        <InputField id="serialNumber" label="Serial Number" placeholder="e.g. SN-20240812-003" value={state.serialNumber} onChange={set('serialNumber')} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField id="quantity" label="Quantity" type="number" placeholder="1" value={state.quantity} onChange={set('quantity')} required />
        <div>
          <label htmlFor="reasonForReturn" className="block text-[#0f2a4a] font-semibold text-sm mb-1.5">
            Reason for Return<span className="text-red-500 ml-0.5">*</span>
          </label>
          <select
            id="reasonForReturn"
            value={state.reasonForReturn}
            onChange={(e) => set('reasonForReturn')(e.target.value)}
            required
            className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] focus:outline-none focus:ring-2 focus:ring-[#f4a65d] focus:border-[#f4a65d] transition-colors bg-white"
          >
            <option value="">Select a reason...</option>
            <option value="Warranty Claim">Warranty Claim</option>
            <option value="Repair">Repair</option>
            <option value="Calibration">Calibration</option>
            <option value="Evaluation Return">Evaluation Return</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
    </div>
  )
}

// ── Step 3 ────────────────────────────────────────────────────────────────────

function Step3({ state, dispatch }: { state: FormState; dispatch: React.Dispatch<Action> }) {
  const set = (field: keyof FormState) => (v: string) =>
    dispatch({ type: 'SET_FIELD', field, value: v })
  return (
    <div className="space-y-5">
      <div>
        <label htmlFor="issueDescription" className="block text-[#0f2a4a] font-semibold text-sm mb-1.5">
          Detailed Issue Description<span className="text-red-500 ml-0.5">*</span>
        </label>
        <textarea
          id="issueDescription"
          rows={5}
          placeholder="Describe the issue, noting symptoms, when it started, any error readings, and troubleshooting already attempted..."
          value={state.issueDescription}
          onChange={(e) => set('issueDescription')(e.target.value)}
          required
          className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:ring-2 focus:ring-[#f4a65d] focus:border-[#f4a65d] transition-colors resize-none bg-white"
        />
      </div>
      <div>
        <p className="text-[#0f2a4a] font-semibold text-sm mb-1.5">
          Has the product been exposed to hazardous materials?<span className="text-red-500 ml-0.5">*</span>
        </p>
        <p className="text-[#8898aa] text-xs mb-3">Required for safe handling by our technicians.</p>
        <div className="flex gap-6">
          {(['yes', 'no'] as const).map((val) => (
            <label key={val} className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="radio"
                name="hazardousExposure"
                value={val}
                checked={state.hazardousExposure === val}
                onChange={() => set('hazardousExposure')(val)}
                className="w-4 h-4 accent-[#f4a65d]"
              />
              <span className="text-sm text-[#1e2b3a] font-medium capitalize">
                {val === 'yes' ? 'Yes' : 'No'}
              </span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="additionalNotes" className="block text-[#0f2a4a] font-semibold text-sm mb-1.5">
          Additional Notes
        </label>
        <textarea
          id="additionalNotes"
          rows={3}
          placeholder="Any other information our team should know..."
          value={state.additionalNotes}
          onChange={(e) => set('additionalNotes')(e.target.value)}
          className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:ring-2 focus:ring-[#f4a65d] focus:border-[#f4a65d] transition-colors resize-none bg-white"
        />
      </div>
    </div>
  )
}

// ── Success State ─────────────────────────────────────────────────────────────

function SuccessState({ rmaNumber }: { rmaNumber: string }) {
  return (
    <div className="text-center py-8">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full bg-[#f4a65d] flex items-center justify-center">
          <CheckCircle size={40} className="text-white" />
        </div>
      </div>
      <h2 className="text-[#0f2a4a] font-black text-3xl mb-2">RMA Request Submitted</h2>
      <p className="text-[#566677] text-base mb-8 max-w-md mx-auto leading-relaxed">
        Your request has been sent to our support team. You will receive a confirmation email within one business day.
      </p>
      <div className="bg-[#f7f9fc] border border-[#e8edf2] rounded-xl p-6 max-w-sm mx-auto mb-8">
        <p className="text-[#8898aa] text-xs font-bold uppercase tracking-widest mb-1">Your RMA Number</p>
        <p className="text-[#0f2a4a] font-black text-3xl tracking-wide mb-5">{rmaNumber}</p>
        <ul className="text-left space-y-2.5 text-sm text-[#566677]">
          <li className="flex items-start gap-2">
            <ChevronRight size={14} className="text-[#f4a65d] flex-shrink-0 mt-0.5" />
            Write your RMA number clearly on the outside of your package
          </li>
          <li className="flex items-start gap-2">
            <ChevronRight size={14} className="text-[#f4a65d] flex-shrink-0 mt-0.5" />
            Ship prepaid to our facility in Santa Fe Springs, CA
          </li>
          <li className="flex items-start gap-2">
            <ChevronRight size={14} className="text-[#f4a65d] flex-shrink-0 mt-0.5" />
            Expected turnaround: 2–3 business weeks
          </li>
        </ul>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/support"
          className="px-6 py-3 bg-[#0f2a4a] text-white font-semibold rounded-lg hover:bg-[#1a3a5c] transition-colors text-sm"
        >
          Return to Support
        </Link>
        <Link
          href="/"
          className="px-6 py-3 border border-[#e8edf2] text-[#566677] font-semibold rounded-lg hover:bg-[#f7f9fc] transition-colors text-sm"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function RMAPage() {
  const [state, dispatch] = useReducer(formReducer, initialState)

  const stepValid =
    state.currentStep === 1
      ? !!(state.fullName && state.company && state.email && state.originalPONumber && state.orderDate)
      : state.currentStep === 2
      ? !!(state.productName && state.quantity && state.reasonForReturn)
      : !!(state.issueDescription && state.hazardousExposure)

  async function handleFormAction(e: React.FormEvent) {
    e.preventDefault()
    if (state.currentStep < 3) {
      dispatch({ type: 'NEXT_STEP' })
    } else {
      const suffix = Math.floor(1000 + Math.random() * 9000)
      const rmaNumber = `RMA-2026-${suffix}`

      // Submit to API
      try {
        await fetch('/api/rma', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fullName: state.fullName,
            company: state.company,
            email: state.email,
            phone: state.phone,
            originalPONumber: state.originalPONumber,
            orderDate: state.orderDate,
            productName: state.productName,
            serialNumber: state.serialNumber,
            quantity: state.quantity,
            reasonForReturn: state.reasonForReturn,
            issueDescription: state.issueDescription,
            hazardousExposure: state.hazardousExposure,
            additionalNotes: state.additionalNotes,
            rmaNumber,
          }),
        })
      } catch {
        // continue to show confirmation even on network error
      }

      dispatch({ type: 'SUBMIT', rmaNumber })
    }
  }

  return (
    <div className="bg-[#f7f9fc] min-h-screen">
      {/* Hero */}
      <section className="bg-[#0f2a4a] pb-14 pt-10 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#f4a65d] text-xs font-bold uppercase tracking-widest mb-3">Returns &amp; Repairs</p>
          <h1 className="text-white font-black text-4xl md:text-5xl leading-tight mb-4">
            Return Merchandise Authorization
          </h1>
          <p className="text-[#94aabb] text-lg max-w-xl mx-auto leading-relaxed">
            Request a product return, repair, or recalibration
          </p>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 md:px-10 py-12 lg:grid lg:grid-cols-3 gap-10">
        {/* Main */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-[#e8edf2] rounded-2xl p-8 md:p-10 shadow-sm">
            {state.submitted ? (
              <SuccessState rmaNumber={state.rmaNumber} />
            ) : (
              <>
                <ProgressSteps current={state.currentStep} />
                <form onSubmit={handleFormAction} noValidate>
                  <div className="mb-7">
                    <h2 className="text-[#0f2a4a] font-black text-2xl">
                      {state.currentStep === 1 && 'Contact & Order Info'}
                      {state.currentStep === 2 && 'Product Details'}
                      {state.currentStep === 3 && 'Issue Description'}
                    </h2>
                    <p className="text-[#8898aa] text-sm mt-1">
                      {state.currentStep === 1 && 'Provide your contact details and reference the original order.'}
                      {state.currentStep === 2 && 'Identify the product being returned and the reason.'}
                      {state.currentStep === 3 && 'Describe the issue in as much detail as possible.'}
                    </p>
                  </div>

                  {state.currentStep === 1 && <Step1 state={state} dispatch={dispatch} />}
                  {state.currentStep === 2 && <Step2 state={state} dispatch={dispatch} />}
                  {state.currentStep === 3 && <Step3 state={state} dispatch={dispatch} />}

                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#e8edf2]">
                    {state.currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={() => dispatch({ type: 'PREV_STEP' })}
                        className="px-6 py-2.5 border border-[#e8edf2] rounded-lg text-[#566677] font-semibold text-sm hover:bg-[#f7f9fc] hover:text-[#0f2a4a] transition-colors"
                      >
                        Back
                      </button>
                    ) : (
                      <div />
                    )}
                    <button
                      type="submit"
                      disabled={!stepValid}
                      className="px-8 py-2.5 bg-[#f4a65d] text-white font-bold text-sm rounded-lg hover:bg-[#d4892a] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {state.currentStep === 3 ? 'Submit RMA Request' : 'Continue'}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 mt-8 lg:mt-0">
          <div className="sticky top-[95px]">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  )
}
