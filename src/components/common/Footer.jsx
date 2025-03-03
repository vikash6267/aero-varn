import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="text-2xl font-bold mb-4">AERO</div>
          <p className="text-gray-400">
            Fast-acting pain relief in a convenient, dissolvable powder
            form.
          </p>
        </div>
        <div className="md:text-right">
          <p className="text-gray-400">
            © {new Date().getFullYear()} AERO. All rights reserved.
          </p>
          {/* <p className="text-gray-400 mt-2">Charlotte, NC 28211</p> */}
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer