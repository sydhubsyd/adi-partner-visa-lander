import { Phone, AlertCircle } from 'lucide-react'

export default function Sorry() {
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

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <div className="w-16 h-16 bg-gold-light rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-8 h-8 text-gold" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
          We May Not Be the Right Fit
        </h1>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Partner visas require that one partner is an Australian citizen or
          permanent resident. Based on your response, our partner visa service
          may not apply to your situation.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
          <p className="font-semibold text-navy text-sm mb-2">Not sure? We can still help.</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            If you believe your situation may still qualify, or if you need help
            with a different visa type, call us directly and we will point you in
            the right direction.
          </p>
        </div>

        <a
          href="tel:1300729331"
          className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-6 py-3 rounded-lg hover:bg-navy-light transition-colors"
        >
          <Phone className="w-5 h-5" />
          Call 1300 729 331
        </a>
        <p className="text-xs text-gray-400 mt-3">Mon – Fri, 9am – 6pm AEST</p>
      </div>
    </div>
  )
}
