import { Phone } from 'lucide-react'

export default function FinalCTA() {
  const scrollToForm = () => {
    document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-14 sm:py-20 bg-navy">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Ready to Start Your Partner Visa?
        </h2>
        <p className="text-gray-300 mb-8 text-sm max-w-lg mx-auto">
          Book your free consultation with Eli Bekker. No obligation, no cost —
          just clear guidance on your visa pathway.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToForm}
            className="bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-base cursor-pointer"
          >
            Book Free Consultation
          </button>
          <a
            href="tel:1300729331"
            className="flex items-center gap-2 text-white font-semibold hover:text-gray-200 transition-colors"
          >
            <Phone className="w-5 h-5" />
            1300 729 331
          </a>
        </div>
      </div>
    </section>
  )
}
