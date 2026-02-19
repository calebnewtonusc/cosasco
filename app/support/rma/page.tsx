import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'RMA Request | Cosasco Support',
}

export default function RMAPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#0f2a4a] pt-[72px] pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#94aabb] text-sm font-semibold uppercase tracking-widest mb-4">Returns &amp; Repairs</p>
          <h1 className="text-white font-black text-5xl md:text-6xl leading-tight mb-5">RMA Request</h1>
          <p className="text-[#94aabb] text-lg max-w-2xl mx-auto leading-relaxed">
            Submit a Return Merchandise Authorization request for warranty repair, calibration, or product exchange. Our team will respond within one business day.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-6 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="bg-[#1a3a5c] border border-[#2a4a6c] rounded-xl p-6 flex gap-4 items-start">
              <div className="w-9 h-9 rounded-full bg-[#f4a65d] text-white font-black text-base flex items-center justify-center flex-shrink-0">1</div>
              <div>
                <h3 className="text-white font-bold text-base mb-1">Submit Form</h3>
                <p className="text-[#94aabb] text-sm leading-relaxed">Complete and submit the RMA request form below with your product and issue details.</p>
              </div>
            </div>

            <div className="bg-[#1a3a5c] border border-[#2a4a6c] rounded-xl p-6 flex gap-4 items-start">
              <div className="w-9 h-9 rounded-full bg-[#f4a65d] text-white font-black text-base flex items-center justify-center flex-shrink-0">2</div>
              <div>
                <h3 className="text-white font-bold text-base mb-1">Receive RMA Number</h3>
                <p className="text-[#94aabb] text-sm leading-relaxed">Our team will review your request and email you an RMA number within one business day.</p>
              </div>
            </div>

            <div className="bg-[#1a3a5c] border border-[#2a4a6c] rounded-xl p-6 flex gap-4 items-start">
              <div className="w-9 h-9 rounded-full bg-[#f4a65d] text-white font-black text-base flex items-center justify-center flex-shrink-0">3</div>
              <div>
                <h3 className="text-white font-bold text-base mb-1">Ship Product</h3>
                <p className="text-[#94aabb] text-sm leading-relaxed">Package your product with the RMA number clearly marked and ship to our facility.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="bg-[#f7f9fc] py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white border border-[#e8edf2] rounded-2xl p-8 md:p-10">
            <h2 className="text-[#0f2a4a] font-black text-3xl mb-2">RMA Request Form</h2>
            <p className="text-[#566677] text-sm mb-8">All fields marked with <span className="text-red-500 font-semibold">*</span> are required.</p>
            <form className="space-y-6">
              <fieldset>
                <legend className="text-[#0f2a4a] font-black text-base mb-4 pb-2 border-b border-[#e8edf2] w-full">Contact Information</legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label htmlFor="rma-name" className="block text-[#0f2a4a] font-medium text-sm mb-1">Full Name <span className="text-red-500">*</span></label><input id="rma-name" type="text" placeholder="John Smith" required className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:border-[#f4a65d]" /></div>
                  <div><label htmlFor="rma-company" className="block text-[#0f2a4a] font-medium text-sm mb-1">Company <span className="text-red-500">*</span></label><input id="rma-company" type="text" placeholder="Acme Corp" required className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:border-[#f4a65d]" /></div>
                  <div><label htmlFor="rma-email" className="block text-[#0f2a4a] font-medium text-sm mb-1">Email <span className="text-red-500">*</span></label><input id="rma-email" type="email" placeholder="john@company.com" required className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:border-[#f4a65d]" /></div>
                  <div><label htmlFor="rma-phone" className="block text-[#0f2a4a] font-medium text-sm mb-1">Phone</label><input id="rma-phone" type="tel" placeholder="+1 (555) 000-0000" className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:border-[#f4a65d]" /></div>
                </div>
              </fieldset>
              <fieldset>
                <legend className="text-[#0f2a4a] font-black text-base mb-4 pb-2 border-b border-[#e8edf2] w-full">Order &amp; Product Information</legend>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="rma-order-number" className="block text-[#0f2a4a] font-medium text-sm mb-1">Order Number <span className="text-red-500">*</span></label>
                    <input id="rma-order-number" type="text" placeholder="e.g. COS-2026-04821" required className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:border-[#f4a65d]" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="rma-model" className="block text-[#0f2a4a] font-medium text-sm mb-1">Product Model / Part Number <span className="text-red-500">*</span></label>
                      <input id="rma-model" type="text" placeholder="e.g. ER-7012-SS" required className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:border-[#f4a65d]" />
                    </div>
                    <div>
                      <label htmlFor="rma-serial" className="block text-[#0f2a4a] font-medium text-sm mb-1">Serial Number <span className="text-[#8898aa] font-normal">(if applicable)</span></label>
                      <input id="rma-serial" type="text" placeholder="e.g. SN-20240812-003" className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:border-[#f4a65d]" />
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend className="text-[#0f2a4a] font-black text-base mb-4 pb-2 border-b border-[#e8edf2] w-full">Return Details</legend>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="rma-reason" className="block text-[#0f2a4a] font-medium text-sm mb-1">Reason for Return <span className="text-red-500">*</span></label>
                    <select id="rma-reason" required className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] focus:outline-none focus:border-[#f4a65d] bg-white">
                      <option value="">Select a reason...</option>
                      <option value="warranty-repair">Warranty Repair</option>
                      <option value="calibration">Calibration</option>
                      <option value="out-of-warranty-repair">Out-of-warranty Repair</option>
                      <option value="exchange-replacement">Exchange / Replacement</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="rma-issue" className="block text-[#0f2a4a] font-medium text-sm mb-1">Issue Description <span className="text-red-500">*</span></label>
                    <textarea id="rma-issue" rows={5} required placeholder="Describe the issue, symptoms, and any steps already taken to troubleshoot..." className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:border-[#f4a65d] resize-none" />
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend className="text-[#0f2a4a] font-black text-base mb-4 pb-2 border-b border-[#e8edf2] w-full">Shipping Address</legend>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="rma-address-line1" className="block text-[#0f2a4a] font-medium text-sm mb-1">Address Line 1 <span className="text-red-500">*</span></label>
                    <input id="rma-address-line1" type="text" placeholder="123 Industrial Blvd" required className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:border-[#f4a65d]" />
                  </div>
                  <div>
                    <label htmlFor="rma-address-line2" className="block text-[#0f2a4a] font-medium text-sm mb-1">Address Line 2</label>
                    <input id="rma-address-line2" type="text" placeholder="Suite 400" className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:border-[#f4a65d]" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="rma-city" className="block text-[#0f2a4a] font-medium text-sm mb-1">City <span className="text-red-500">*</span></label>
                      <input id="rma-city" type="text" placeholder="Houston" required className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:border-[#f4a65d]" />
                    </div>
                    <div>
                      <label htmlFor="rma-state" className="block text-[#0f2a4a] font-medium text-sm mb-1">State / Province <span className="text-red-500">*</span></label>
                      <input id="rma-state" type="text" placeholder="TX" required className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:border-[#f4a65d]" />
                    </div>
                    <div>
                      <label htmlFor="rma-zip" className="block text-[#0f2a4a] font-medium text-sm mb-1">ZIP / Postal Code <span className="text-red-500">*</span></label>
                      <input id="rma-zip" type="text" placeholder="77001" required className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:border-[#f4a65d]" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="rma-country" className="block text-[#0f2a4a] font-medium text-sm mb-1">Country <span className="text-red-500">*</span></label>
                    <input id="rma-country" type="text" placeholder="United States" required className="w-full border border-[#e8edf2] rounded-lg px-4 py-2.5 text-sm text-[#1e2b3a] placeholder-[#8898aa] focus:outline-none focus:border-[#f4a65d]" />
                  </div>
                </div>
              </fieldset>
              <button type="submit" className="w-full bg-[#f4a65d] text-white rounded-lg py-3.5 font-bold text-base hover:bg-[#d4892a] transition-colors">Submit RMA Request</button>
              <p className="text-center text-[#8898aa] text-xs">
                Need help?{" "}
                <Link href="/support" className="text-[#f4a65d] font-semibold hover:underline">Return to Support Center</Link>
                {" "}or call <span className="font-semibold text-[#566677]">+1 (562) 949-0123</span>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
