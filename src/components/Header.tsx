import { Phone } from 'lucide-react'

export default function Header() {
  const scrollToForm = () => {
    document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-navy rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-sm">ADI</span>
          </div>
          <div className="leading-tight">
            <span className="font-semibold text-navy text-sm sm:text-base">ADI Immigration</span>
            <span className="hidden sm:block text-[11px] text-gray-500 leading-none">Partner Visa Specialists</span>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="tel:1300729331"
            className="flex items-center gap-1.5 text-navy font-semibold text-sm sm:text-base hover:text-blue-accent transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">1300 729 331</span>
            <span className="sm:hidden">Call</span>
          </a>
          <button
            onClick={scrollToForm}
            className="bg-navy text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-navy-light transition-colors cursor-pointer"
          >
            Free Consultation
          </button>
        </div>
      </div>
    </header>
  )
}
