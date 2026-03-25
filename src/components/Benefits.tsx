import { CheckCircle } from 'lucide-react'

const benefits = [
  {
    title: 'Every Application Personally Managed',
    description: 'Eli Bekker handles your case from start to finish. You will never be passed to a junior staff member.',
  },
  {
    title: '600+ Verified Google Reviews',
    description: 'One of the most reviewed partner visa specialists in Australia, with a 4.9-star average rating.',
  },
  {
    title: 'Free Initial Consultation',
    description: 'Understand your visa pathway, eligibility, and timeline — no cost, no obligation.',
  },
  {
    title: 'MARA Registered & Qualified Lawyer',
    description: 'Fully registered with the Migration Agents Registration Authority. Legally qualified to represent you.',
  },
  {
    title: 'Clear Communication Throughout',
    description: 'You will know exactly where your application stands at every stage. No surprises, no chasing updates.',
  },
  {
    title: 'Fast-Tracked Preparation',
    description: 'Proprietary systems built over 15 years to minimise delays and get your application submitted sooner.',
  },
]

export default function Benefits() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">
            Why Families Choose ADI
          </h2>
          <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
            Trusted by over 600 families to handle their partner visa with care and expertise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <CheckCircle className="w-5 h-5 text-green mb-3" />
              <h3 className="font-semibold text-navy text-[15px] mb-1.5">{b.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
