import { Scale, Award, Shield } from 'lucide-react'
import eliPhoto from '../assets/eli-bekker.jpeg'

export default function EliSection() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src={eliPhoto}
                alt="Eli Bekker — Principal Migration Agent at ADI Immigration"
                className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl object-cover shadow-lg"
              />
              <div className="absolute -bottom-3 -right-3 bg-navy text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md">
                15+ Years
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">
              Meet Eli Bekker
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Eli's own family went through the immigration process — moving from country
              to country, waiting on visas that would determine their future. That experience
              drives every application he handles today.
            </p>
            <p className="text-gray-600 leading-relaxed">
              As a qualified migration lawyer and MARA registered agent, Eli personally
              manages every partner visa application. Your case will never be passed to
              a junior.
            </p>

            {/* Credentials */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                <Scale className="w-4 h-4 text-navy" />
                Qualified Migration Lawyer
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                <Shield className="w-4 h-4 text-navy" />
                MARN 1465541
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                <Award className="w-4 h-4 text-navy" />
                600+ Five-Star Reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
