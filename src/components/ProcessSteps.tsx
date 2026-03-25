const steps = [
  {
    number: '01',
    title: 'Free Assessment',
    description: 'We assess your eligibility and recommend the right visa pathway for your situation.',
  },
  {
    number: '02',
    title: 'Engagement',
    description: 'Clear fee agreement with no hidden costs. We outline exactly what happens next.',
  },
  {
    number: '03',
    title: 'Preparation & Lodgement',
    description: 'We gather your documents, prepare your application, and submit to the Department of Home Affairs.',
  },
  {
    number: '04',
    title: 'Approval & Support',
    description: 'We handle all correspondence, keep you updated, and support you through to visa grant.',
  },
]

export default function ProcessSteps() {
  return (
    <section className="py-14 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">
            How It Works
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Four straightforward steps from enquiry to visa approval.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line — desktop only */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-px bg-gray-300" />
              )}
              <div className="bg-white border border-gray-200 rounded-xl p-5 text-center relative">
                <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-navy text-[15px] mb-1.5">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
