import { CheckCircle, Phone, Clock, UserCheck, Star } from 'lucide-react'

const GHL_CALENDAR_EMBED = 'YOUR_GHL_CALENDAR_EMBED_URL' // Replace with actual GHL calendar widget URL

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-navy rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">ADI</span>
            </div>
            <span className="font-semibold text-navy">ADI Immigration</span>
          </div>
          <a href="tel:1300729331" className="flex items-center gap-1.5 text-navy font-semibold text-sm">
            <Phone className="w-4 h-4" />
            1300 729 331
          </a>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Success confirmation */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-green-light rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-navy mb-2">
            You're One Step Away
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto">
            We've received your details. Now book a time to speak directly with
            Eli Bekker — your consultation is completely free.
          </p>
        </div>

        {/* Why book now — persuasion section */}
        <div className="bg-blue-light border border-blue-muted rounded-xl p-6 mb-10">
          <h2 className="font-semibold text-navy text-lg mb-4 text-center">
            Why Book Your Call Now?
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-navy shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm text-navy">Spots Fill Quickly</p>
                <p className="text-xs text-gray-600">Eli personally handles every call. Availability is limited each week.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <UserCheck className="w-5 h-5 text-navy shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm text-navy">Speak to the Expert Directly</p>
                <p className="text-xs text-gray-600">No intake staff, no callbacks. You speak with a qualified migration agent.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Star className="w-5 h-5 text-navy shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm text-navy">Get Clarity in 30 Minutes</p>
                <p className="text-xs text-gray-600">Walk away knowing your eligibility, timeline, and next steps.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar embed */}
        <div className="border border-gray-200 rounded-xl overflow-hidden mb-8">
          <div className="bg-navy px-6 py-4">
            <h2 className="text-white font-semibold text-lg">
              Choose a Time That Works for You
            </h2>
            <p className="text-gray-300 text-sm">
              30-minute free consultation · Mon–Fri 9am–5pm AEST
            </p>
          </div>
          <div className="p-4 bg-white min-h-[500px] flex items-center justify-center">
            {/* GHL Calendar Widget — replace iframe src with actual embed */}
            <iframe
              src={GHL_CALENDAR_EMBED}
              className="w-full h-[600px] border-0"
              title="Book a consultation"
            />
          </div>
        </div>

        {/* Fallback CTA */}
        <div className="text-center bg-gray-50 rounded-xl p-6">
          <p className="text-sm text-gray-600 mb-3">
            Prefer to call? Speak to us directly:
          </p>
          <a
            href="tel:1300729331"
            className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-6 py-3 rounded-lg hover:bg-navy-light transition-colors"
          >
            <Phone className="w-5 h-5" />
            1300 729 331
          </a>
          <p className="text-xs text-gray-400 mt-3">Mon – Fri, 9am – 6pm AEST</p>
        </div>
      </div>
    </div>
  )
}
