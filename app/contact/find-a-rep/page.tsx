import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function FindARepPage() {
  const regions = [
    {
      name: "Americas",
      contact: "David Reyes",
      email: "d.reyes@cosasco.com",
      phone: "+1 (562) 949-0123",
      flag: "🌎",
      countries: "USA, Canada, Mexico, Brazil, Colombia",
    },
    {
      name: "Europe",
      contact: "Sophie Müller",
      email: "s.muller@cosasco.com",
      phone: "+44 20 7123 4567",
      flag: "🌍",
      countries: "UK, Germany, France, Netherlands, Nordics",
    },
    {
      name: "Middle East",
      contact: "Omar Al-Rashid",
      email: "o.alrashid@cosasco.com",
      phone: "+971 4 234 5678",
      flag: "🌏",
      countries: "UAE, Saudi Arabia, Kuwait, Qatar, Oman",
    },
    {
      name: "Africa",
      contact: "Amara Diallo",
      email: "a.diallo@cosasco.com",
      phone: "+27 11 345 6789",
      flag: "🌍",
      countries: "South Africa, Nigeria, Egypt, Angola, Algeria",
    },
    {
      name: "Asia Pacific",
      contact: "Lin Wei",
      email: "l.wei@cosasco.com",
      phone: "+65 6789 0123",
      flag: "🌏",
      countries: "Singapore, China, Japan, South Korea, India",
    },
    {
      name: "Oceania",
      contact: "James Hartley",
      email: "j.hartley@cosasco.com",
      phone: "+61 2 8765 4321",
      flag: "🌏",
      countries: "Australia, New Zealand, Papua New Guinea",
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="bg-[#0f2a4a] pt-[75px] pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#f4a65d] text-sm font-semibold tracking-widest uppercase mb-4">Global Network</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Find Your Local Representative</h1>
          <p className="text-[#8ab4d4] text-lg max-w-xl mx-auto">
            Connect with a Cosasco expert in your region for product selection, technical support, and custom quotes.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form — col-span-2 */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#0f2a4a] mb-2">Connect with a Cosasco Expert Near You</h2>
              <p className="text-[#6b7280] mb-8">
                Tell us about your location and needs, and we&apos;ll match you with the right regional contact.
              </p>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-1.5">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 border border-[#e8edf2] rounded-lg text-[#374151] placeholder-[#6b7280] focus:outline-none focus:border-[#0f2a4a] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-1.5">Last Name</label>
                    <input
                      type="text"
                      placeholder="Smith"
                      className="w-full px-4 py-3 border border-[#e8edf2] rounded-lg text-[#374151] placeholder-[#6b7280] focus:outline-none focus:border-[#0f2a4a] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-1.5">Company</label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    className="w-full px-4 py-3 border border-[#e8edf2] rounded-lg text-[#374151] placeholder-[#6b7280] focus:outline-none focus:border-[#0f2a4a] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-1.5">Country / Region</label>
                  <select className="w-full px-4 py-3 border border-[#e8edf2] rounded-lg text-[#374151] bg-white focus:outline-none focus:border-[#0f2a4a] transition-colors">
                    <option value="">Select your country or region...</option>
                    <optgroup label="Americas">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                      <option>Brazil</option>
                      <option>Colombia</option>
                      <option>Other — Americas</option>
                    </optgroup>
                    <optgroup label="Europe">
                      <option>United Kingdom</option>
                      <option>Germany</option>
                      <option>France</option>
                      <option>Netherlands</option>
                      <option>Norway / Sweden / Denmark</option>
                      <option>Other — Europe</option>
                    </optgroup>
                    <optgroup label="Middle East">
                      <option>United Arab Emirates</option>
                      <option>Saudi Arabia</option>
                      <option>Kuwait</option>
                      <option>Qatar</option>
                      <option>Oman</option>
                      <option>Other — Middle East</option>
                    </optgroup>
                    <optgroup label="Africa">
                      <option>South Africa</option>
                      <option>Nigeria</option>
                      <option>Egypt</option>
                      <option>Other — Africa</option>
                    </optgroup>
                    <optgroup label="Asia Pacific">
                      <option>Singapore</option>
                      <option>China</option>
                      <option>Japan</option>
                      <option>South Korea</option>
                      <option>India</option>
                      <option>Indonesia</option>
                      <option>Malaysia</option>
                      <option>Other — Asia Pacific</option>
                    </optgroup>
                    <optgroup label="Oceania">
                      <option>Australia</option>
                      <option>New Zealand</option>
                      <option>Other — Oceania</option>
                    </optgroup>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-1.5">Industry</label>
                  <select className="w-full px-4 py-3 border border-[#e8edf2] rounded-lg text-[#374151] bg-white focus:outline-none focus:border-[#0f2a4a] transition-colors">
                    <option value="">Select your industry...</option>
                    <option>Oil &amp; Gas — Upstream</option>
                    <option>Oil &amp; Gas — Midstream / Pipelines</option>
                    <option>Oil &amp; Gas — Downstream / Refining</option>
                    <option>Petrochemical &amp; Chemical Processing</option>
                    <option>Power Generation</option>
                    <option>Water &amp; Wastewater</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-1.5">What do you need help with?</label>
                  <select className="w-full px-4 py-3 border border-[#e8edf2] rounded-lg text-[#374151] bg-white focus:outline-none focus:border-[#0f2a4a] transition-colors">
                    <option value="">Select an inquiry type...</option>
                    <option>Product Selection</option>
                    <option>Technical Support</option>
                    <option>Quote Request</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-1.5">Additional Details (optional)</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your application, current challenges, or any specific products you're interested in..."
                    className="w-full px-4 py-3 border border-[#e8edf2] rounded-lg text-[#374151] placeholder-[#6b7280] focus:outline-none focus:border-[#0f2a4a] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#f4a65d] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e8954a] transition-colors"
                >
                  Find Representatives
                </button>
              </form>
            </div>

            {/* Direct contact card — col-span-1 */}
            <div className="lg:col-span-1">
              <div className="bg-[#f7f9fc] border border-[#e8edf2] rounded-xl p-7 sticky top-24">
                <h3 className="font-bold text-[#0f2a4a] text-lg mb-5">Or contact us directly</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#f4a65d] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-wide mb-0.5">Main Phone</p>
                      <a href="tel:+15629490123" className="text-[#374151] text-sm font-medium hover:text-[#f4a65d] transition-colors">
                        +1 (562) 949-0123
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#f4a65d] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-wide mb-0.5">Email</p>
                      <a href="mailto:info@cosasco.com" className="text-[#374151] text-sm font-medium hover:text-[#f4a65d] transition-colors">
                        info@cosasco.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#f4a65d] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-wide mb-0.5">Office Hours</p>
                      <p className="text-[#374151] text-sm">Mon – Fri: 7:30 AM – 5:00 PM PT</p>
                      <p className="text-[#6b7280] text-xs mt-0.5">Closed weekends and US public holidays</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#f4a65d] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-wide mb-0.5">Headquarters</p>
                      <p className="text-[#374151] text-sm">11552 Knott Ave<br />Santa Fe Springs, CA 90670<br />United States</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-[#e8edf2]">
                  <a
                    href="/contact"
                    className="block text-center bg-[#0f2a4a] text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-[#1a3d6b] transition-colors"
                  >
                    Visit Full Contact Page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGIONAL CONTACTS */}
      <section className="bg-[#f7f9fc] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#0f2a4a]">Regional Contacts</h2>
            <p className="text-[#6b7280] mt-2">Our global team is ready to support you wherever you operate.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region) => (
              <div
                key={region.name}
                className="bg-white border border-[#e8edf2] rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl" role="img" aria-label={region.name}>{region.flag}</span>
                  <div>
                    <h3 className="font-bold text-[#0f2a4a] text-base">{region.name}</h3>
                    <p className="text-[#6b7280] text-xs">{region.countries}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-[#374151]">{region.contact}</p>
                  <a
                    href={`mailto:${region.email}`}
                    className="flex items-center gap-2 text-sm text-[#f4a65d] hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    {region.email}
                  </a>
                  <a
                    href={`tel:${region.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#374151] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {region.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
