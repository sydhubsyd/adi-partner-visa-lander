import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Star, Shield, Clock, UserCheck } from 'lucide-react'
import eliPhoto from '../assets/eli-bekker.jpeg'

const WEBHOOK_URL = 'YOUR_GHL_WEBHOOK_URL' // Replace with actual GHL webhook

const visaOptions = [
  'Partner Visa (Onshore 820/801)',
  'Partner Visa (Offshore 309/100)',
  'Prospective Marriage Visa (300)',
  'Not sure — need guidance',
]

export default function HeroSection() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    visaType: '',
    citizen: '',
  })
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    // Send to GHL webhook
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch {
      // Continue with redirect even if webhook fails
    }

    // Redirect based on citizen answer
    if (form.citizen === 'no') {
      navigate('/sorry')
    } else {
      navigate('/thank-you')
    }
  }

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  return (
    <section className="bg-white py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left — Copy */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-green-light text-green text-sm font-medium px-3 py-1.5 rounded-full">
            <Shield className="w-4 h-4" />
            MARA Registered Migration Agent
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-navy leading-tight tracking-tight">
            Your Partner Visa.<br />
            <span className="text-gray-600">Handled by Australia's Most Reviewed Specialist.</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            Over 600 families have trusted Eli Bekker to reunite them in Australia.
            Every application personally managed — never passed to junior staff.
          </p>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-3 pt-2">
            <div className="flex items-center gap-1.5 text-sm text-gray-700">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="font-semibold">4.9</span>
              <span className="text-gray-500">/ 600+ Reviews</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-gray-600">
              <Clock className="w-4 h-4 text-navy" />
              15+ Years Experience
            </div>
            <div className="flex items-center gap-1.5 text-sm text-gray-600">
              <UserCheck className="w-4 h-4 text-navy" />
              Personally Managed
            </div>
          </div>

          {/* Eli photo + credential — desktop only */}
          <div className="hidden lg:flex items-center gap-4 pt-4 border-t border-gray-100">
            <img
              src={eliPhoto}
              alt="Eli Bekker — Principal Migration Agent"
              className="w-14 h-14 rounded-full object-cover border-2 border-gray-200"
            />
            <div>
              <p className="font-semibold text-navy text-sm">Eli Bekker</p>
              <p className="text-xs text-gray-500">Principal Migration Agent · MARN 1465541</p>
              <p className="text-xs text-gray-500">Qualified Migration Lawyer · 15+ Years</p>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div id="hero-form" className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8">
          <h2 className="text-xl font-bold text-navy mb-1">Book Your Free Consultation</h2>
          <p className="text-sm text-gray-500 mb-6">
            Speak directly with a registered migration agent. No obligation.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-accent focus:border-blue-accent outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                placeholder="your@email.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-accent focus:border-blue-accent outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => update('phone', e.target.value)}
                placeholder="04XX XXX XXX"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-accent focus:border-blue-accent outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Which visa are you interested in? *</label>
              <select
                required
                value={form.visaType}
                onChange={(e) => update('visaType', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-accent focus:border-blue-accent outline-none transition bg-white"
              >
                <option value="">Select a visa type</option>
                {visaOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Is either you or your partner an Australian citizen or permanent resident? *
              </label>
              <div className="flex gap-3">
                <label className={`flex-1 border rounded-lg px-4 py-2.5 text-sm text-center cursor-pointer transition ${form.citizen === 'yes' ? 'border-blue-accent bg-blue-light text-blue-accent font-semibold' : 'border-gray-300 text-gray-600 hover:border-gray-400'}`}>
                  <input
                    type="radio"
                    name="citizen"
                    value="yes"
                    required
                    onChange={() => update('citizen', 'yes')}
                    className="sr-only"
                  />
                  Yes
                </label>
                <label className={`flex-1 border rounded-lg px-4 py-2.5 text-sm text-center cursor-pointer transition ${form.citizen === 'no' ? 'border-blue-accent bg-blue-light text-blue-accent font-semibold' : 'border-gray-300 text-gray-600 hover:border-gray-400'}`}>
                  <input
                    type="radio"
                    name="citizen"
                    value="no"
                    onChange={() => update('citizen', 'no')}
                    className="sr-only"
                  />
                  No
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-navy text-white font-semibold py-3 rounded-lg hover:bg-navy-light transition-colors text-base cursor-pointer disabled:opacity-60"
            >
              {submitting ? 'Submitting...' : 'Get My Free Consultation'}
            </button>

            <p className="text-xs text-gray-400 text-center">
              Your information is 100% confidential and will never be shared.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
