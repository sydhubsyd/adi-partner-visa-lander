import { Phone } from 'lucide-react'

export default function MobileStickyBar() {
  const scrollToForm = () => {
    document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.08)] lg:hidden">
      <div className="flex items-center gap-3 px-4 py-3">
        <a
          href="tel:1300729331"
          className="flex items-center justify-center gap-2 border border-navy text-navy font-semibold py-2.5 px-4 rounded-lg text-sm flex-1"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <button
          onClick={scrollToForm}
          className="bg-navy text-white font-semibold py-2.5 px-4 rounded-lg text-sm flex-1 cursor-pointer"
        >
          Free Consultation
        </button>
      </div>
    </div>
  )
}
