import React from 'react'

function IngredientsSection() {
  return (
    <section id="ingredients" className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Active Ingredients</h2>
        <p className="text-lg text-gray-600">
          Our powerful formula combines three active ingredients to
          provide effective pain relief.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="py-3 px-4 text-left">Ingredient</th>
                <th className="py-3 px-4 text-left">Amount</th>
                <th className="py-3 px-4 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4">Acetaminophen</td>
                <td className="py-3 px-4">260 mg</td>
                <td className="py-3 px-4">Pain reliever</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="py-3 px-4">Aspirin (NSAID)*</td>
                <td className="py-3 px-4">520 mg</td>
                <td className="py-3 px-4">Pain reliever</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Caffeine</td>
                <td className="py-3 px-4">32.5 mg</td>
                <td className="py-3 px-4">Pain reliever aid</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          *nonsteroidal anti-inflammatory drug
        </p>
      </div>
    </div>
  </section>
  )
}

export default IngredientsSection