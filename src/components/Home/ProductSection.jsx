import React from 'react'
import ImageSlider from '../common/ImageSlider'

function ProductSection() {
  return (
    <section id="product" className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Fast-Acting Pain Relief
        </h2>
        <p className="text-lg text-gray-600">
          Single pack delivers fast-acting pain relief in a convenient,
          dissolvable powder form that works directly at the site of pain.
          This powerful formula provides quick relief for minor aches and
          pains caused by headaches, arthritis, and colds.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="relative">        <ImageSlider />
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Portable & Convenient</h3>
          <p className="text-gray-600">
            Each dose comes in a portable, sealed pack for easy, on-the-go
            use. Simply open and take for fast, effective relief whenever
            you need it.
          </p>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h4 className="font-bold mb-2">Key Benefits:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-700 mr-2">•</span>
                <span>Fast-acting relief for headaches</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 mr-2">•</span>
                <span>Convenient powder form</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 mr-2">•</span>
                <span>Portable individual packets</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 mr-2">•</span>
                <span>Works directly at the site of pain</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ProductSection