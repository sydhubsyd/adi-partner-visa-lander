import { Star, Shield, Clock, UserCheck } from 'lucide-react'

const stats = [
  {
    icon: Star,
    label: '600+ Five-Star Reviews',
    sublabel: 'Verified on Google',
    accent: true,
  },
  {
    icon: Shield,
    label: 'MARA Registered',
    sublabel: 'MARN 1465541',
  },
  {
    icon: Clock,
    label: '15+ Years Experience',
    sublabel: 'Partner visa specialist',
  },
  {
    icon: UserCheck,
    label: 'Personally Managed',
    sublabel: 'By Eli Bekker directly',
  },
]

export default function TrustBar() {
  return (
    <section className="bg-gray-50 border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-start gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${stat.accent ? 'bg-gold-light' : 'bg-blue-light'}`}>
                <stat.icon className={`w-5 h-5 ${stat.accent ? 'text-gold' : 'text-navy'}`} />
              </div>
              <div>
                <p className="font-semibold text-sm text-navy">{stat.label}</p>
                <p className="text-xs text-gray-500">{stat.sublabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
