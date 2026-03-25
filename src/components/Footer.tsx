export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-6 text-sm text-gray-500">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 bg-navy rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">ADI</span>
              </div>
              <span className="font-semibold text-navy text-sm">ADI Immigration</span>
            </div>
            <p className="text-xs leading-relaxed">
              Partner Visa Specialists<br />
              MARA Registered · MARN 1465541
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-navy text-xs uppercase tracking-wide mb-2">Contact</p>
            <p className="text-xs">Phone: 1300 729 331</p>
            <p className="text-xs">Email: adi@adibusinessgroup.com</p>
            <p className="text-xs">Mon – Fri, 9am – 6pm AEST</p>
          </div>

          {/* Compliance */}
          <div>
            <p className="font-semibold text-navy text-xs uppercase tracking-wide mb-2">Legal</p>
            <p className="text-xs leading-relaxed">
              Migration advice is regulated by the Office of the Migration Agents
              Registration Authority (OMARA). Government application fees are
              additional to professional fees.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6 pt-4 text-center">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} ADI Immigration. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
