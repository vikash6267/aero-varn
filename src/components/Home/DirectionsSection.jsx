import { CheckCircle, Download } from "lucide-react"

function DirectionsSection() {
  return (
    <section id="directions" className="bg-gradient-to-r from-blue-50 to-gray-100 py-8 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Content Card */}
          <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 md:p-8 border border-gray-200 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 md:mb-6 text-center">
              Directions
            </h2>

            <p className="text-gray-700 text-base md:text-lg text-center">For adults and children 12 years and over:</p>

            <ul className="mt-4 md:mt-6 space-y-3 md:space-y-4 max-w-xl mx-auto">
              {[
                "Place 1 powder on tongue every 6 hours, while symptoms persist",
                "Drink a full glass of water with each dose",
                "Or may stir powder into a glass of water or other liquid",
                "Do not take more than 4 powders in 24 hours unless directed by a doctor",
              ].map((text, index) => (
                <li key={index} className="flex items-start space-x-3 text-left">
                  <CheckCircle className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 text-sm sm:text-base md:text-lg">{text}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-700 mt-5 md:mt-6 text-base md:text-lg text-center">
              For children under 12 years of age: ask a doctor.
            </p>

            {/* Download Button */}
            <div className="mt-6 md:mt-8 flex justify-center">
              <a
                href="/Aero_Leaflet.pdf"
                download="Aero_Leaflet.pdf"
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 sm:py-3 sm:px-6 rounded-lg transition-all shadow-lg text-sm sm:text-base w-full sm:w-auto"
              >
                <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Download Leaflet
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DirectionsSection

