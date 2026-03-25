import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Federica Mazzucco',
    text: 'My experience with ADI was fantastic from start to finish. Professional, responsive, and genuinely caring about our outcome.',
    stars: 5,
  },
  {
    name: 'Abdalla Khalafalla',
    text: 'A friend recommended ADI and it turned out to be a group of people that actually care — they went above and beyond throughout the whole process.',
    stars: 5,
  },
  {
    name: 'Greg Portnoy',
    text: 'Excellent result. Made a complicated process feel manageable at every step. Would recommend to anyone going through the partner visa process.',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-14 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            {/* Google G logo approximation */}
            <svg viewBox="0 0 24 24" className="w-6 h-6" aria-label="Google">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-700">4.9 / 5</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">
            600+ Families Have Trusted ADI
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Real reviews from real clients on Google.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-gray-200 rounded-xl p-6 relative"
            >
              <Quote className="w-8 h-8 text-gray-200 absolute top-4 right-4" />
              <div className="flex mb-3">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">"{t.text}"</p>
              <p className="text-sm font-semibold text-navy">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
