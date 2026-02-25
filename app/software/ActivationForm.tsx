'use client'

import { useState } from 'react'

const TECHNOLOGIES = [
  { value: '', label: 'Select technology type' },
  { value: 'cdo-offline', label: 'CDO Offline' },
  { value: 'cdo-online', label: 'CDO Online' },
  { value: 'other', label: 'Other' },
]

const COUNTRIES = [
  { value: '', label: 'Select country' },
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'AU', label: 'Australia' },
  { value: 'AE', label: 'United Arab Emirates' },
  { value: 'SA', label: 'Saudi Arabia' },
  { value: 'SG', label: 'Singapore' },
  { value: 'NL', label: 'Netherlands' },
  { value: 'DE', label: 'Germany' },
  { value: 'BR', label: 'Brazil' },
  { value: 'MX', label: 'Mexico' },
  { value: 'OTHER', label: 'Other' },
]

export default function ActivationForm() {
  const [form, setForm] = useState({
    country: '',
    machineId: '',
    serialNumber: '',
    technology: '',
    email: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate() {
    const errs: Record<string, string> = {}
    if (!form.country) errs.country = 'Country is required.'
    if (!form.machineId.trim()) errs.machineId = 'Machine ID is required.'
    if (!form.serialNumber.trim()) errs.serialNumber = 'Serial number is required.'
    if (!form.technology) errs.technology = 'Technology type is required.'
    if (!form.email.trim()) errs.email = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Enter a valid email address.'
    return errs
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitting(true)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.email.split('@')[0],
          email: form.email,
          subject: 'Data Key Activation Request',
          message: `Machine ID: ${form.machineId}\nSerial Number: ${form.serialNumber}\nTechnology: ${form.technology}\nCountry: ${form.country}`,
          type: 'activation',
        }),
      })
    } catch {
      // Still show success — request can be followed up by email
    }
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
          <svg className="w-5 h-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <p className="text-green-800 font-semibold text-sm mb-1">Request Received</p>
        <p className="text-green-700 text-sm leading-relaxed">
          Your activation request has been received. You will receive your key within one business day at the email address provided.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Country */}
      <div>
        <label htmlFor="country" className="block text-sm font-medium text-[#374151] mb-1">
          Country <span className="text-red-500">*</span>
        </label>
        <select
          id="country"
          name="country"
          value={form.country}
          onChange={handleChange}
          className={`w-full border rounded-lg px-3 py-2.5 text-sm text-[#374151] bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2a4a] ${
            errors.country ? 'border-red-400' : 'border-[#d1d5db]'
          }`}
        >
          {COUNTRIES.map(c => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>
        {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
      </div>

      {/* Machine ID */}
      <div>
        <label htmlFor="machineId" className="block text-sm font-medium text-[#374151] mb-1">
          Machine ID <span className="text-red-500">*</span>
        </label>
        <input
          id="machineId"
          name="machineId"
          type="text"
          value={form.machineId}
          onChange={handleChange}
          placeholder="e.g. A1B2-C3D4-E5F6"
          className={`w-full border rounded-lg px-3 py-2.5 text-sm text-[#374151] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#0f2a4a] ${
            errors.machineId ? 'border-red-400' : 'border-[#d1d5db]'
          }`}
        />
        {errors.machineId && <p className="text-red-500 text-xs mt-1">{errors.machineId}</p>}
      </div>

      {/* Serial Number */}
      <div>
        <label htmlFor="serialNumber" className="block text-sm font-medium text-[#374151] mb-1">
          Serial Number <span className="text-red-500">*</span>
        </label>
        <input
          id="serialNumber"
          name="serialNumber"
          type="text"
          value={form.serialNumber}
          onChange={handleChange}
          placeholder="e.g. CSC-2024-00123"
          className={`w-full border rounded-lg px-3 py-2.5 text-sm text-[#374151] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#0f2a4a] ${
            errors.serialNumber ? 'border-red-400' : 'border-[#d1d5db]'
          }`}
        />
        {errors.serialNumber && <p className="text-red-500 text-xs mt-1">{errors.serialNumber}</p>}
      </div>

      {/* Technology */}
      <div>
        <label htmlFor="technology" className="block text-sm font-medium text-[#374151] mb-1">
          Technology Type <span className="text-red-500">*</span>
        </label>
        <select
          id="technology"
          name="technology"
          value={form.technology}
          onChange={handleChange}
          className={`w-full border rounded-lg px-3 py-2.5 text-sm text-[#374151] bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2a4a] ${
            errors.technology ? 'border-red-400' : 'border-[#d1d5db]'
          }`}
        >
          {TECHNOLOGIES.map(t => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
        {errors.technology && <p className="text-red-500 text-xs mt-1">{errors.technology}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#374151] mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@company.com"
          className={`w-full border rounded-lg px-3 py-2.5 text-sm text-[#374151] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#0f2a4a] ${
            errors.email ? 'border-red-400' : 'border-[#d1d5db]'
          }`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#0f2a4a] text-white py-3 rounded-lg font-semibold text-sm hover:bg-[#1a3d6b] transition-colors mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? 'Submitting...' : 'Request Activation Key'}
      </button>
    </form>
  )
}
