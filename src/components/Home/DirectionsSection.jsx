import React from 'react'
import Image from "next/image";
import one from "../../assets/aerodibba.jpg";

function DirectionsSection() {
  return (
    <section id="directions" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Directions</h2>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      For adults and children 12 years and over:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-700 mr-2">•</span>
                        <span>
                          Place 1 powder on tongue every 6 hours, while symptoms
                          persist
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-700 mr-2">•</span>
                        <span>Drink a full glass of water with each dose</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-700 mr-2">•</span>
                        <span>
                          Or may stir powder into a glass of water or other
                          liquid
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-700 mr-2">•</span>
                        <span>
                          Do not take more than 4 powders in 24 hours unless
                          directed by a doctor
                        </span>
                      </li>
                    </ul>
                    <p className="text-gray-600 mt-4">
                      For children under 12 years of age: ask a doctor
                    </p>
                  </div>

                  <div className="mt-8">
                    <a
                      href="/Aero_Leaflet.pdf"
                      download="Aero_Leaflet.pdf"
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-all shadow-lg text-lg mt-6"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 8a1 1 0 011-1h4V3a1 1 0 112 0v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0V9H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Download Leaflet
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
  )
}

export default DirectionsSection