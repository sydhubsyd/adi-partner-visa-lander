import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Why should I use a Registered Migration Agent?',
    a: 'A registered migration agent is legally qualified to provide immigration advice and represent you with the Department of Home Affairs. Using an unregistered provider puts your application at risk. ADI is fully registered with MARA (MARN 1465541).',
  },
  {
    q: 'Who will manage my visa application?',
    a: 'Eli Bekker, our principal migration agent, personally manages every partner visa application. Your case will never be passed to junior staff or outsourced.',
  },
  {
    q: 'What types of partner visas can you help with?',
    a: 'We handle Onshore Partner Visas (subclass 820/801), Offshore Partner Visas (subclass 309/100), and Prospective Marriage Visas (subclass 300).',
  },
  {
    q: "I'm in a de facto relationship — can I still apply?",
    a: 'Yes. De facto relationships are recognised under Australian immigration law. You will need to provide evidence of your genuine and continuing relationship.',
  },
  {
    q: 'How long does a partner visa take?',
    a: 'Processing times vary depending on the visa subclass and individual circumstances. During your free consultation, we can provide an estimate based on your specific situation and current Department processing times.',
  },
  {
    q: 'What happens during the free consultation?',
    a: 'We assess your eligibility, recommend the right visa pathway, explain the process and timeline, and answer all your questions. There is no cost and no obligation.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <span className="font-medium text-sm text-navy pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-4">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
