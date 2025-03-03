import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import one from "../assets/aerodibba.jpg";
import two from "../assets/packet.jpg";
import three from "../assets/backside.jpg";
import ImageSlider from "@/components/common/ImageSlider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-800">AERO</div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="font-medium hover:text-blue-700">
              Home
            </Link>
            <Link href="#product" className="font-medium hover:text-blue-700">
              Product
            </Link>
            <Link
              href="#ingredients"
              className="font-medium hover:text-blue-700"
            >
              Ingredients
            </Link>
            <Link
              href="#directions"
              className="font-medium hover:text-blue-700"
            >
              Directions
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                FAST PAIN RELIEF
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                AERO Extra Strength Headache Powder
              </h1>
              <p className="text-lg md:text-xl">
                Fast-acting pain relief in a convenient, dissolvable powder form
              </p>
              <Link
                href="#product"
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src={two}
                alt="AERO Extra Strength Headache Powder Box"
                width={500}
                height={500}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </section>

        {/* Product Section */}
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

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative">
              <ImageSlider></ImageSlider>
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

        {/* Ingredients Section */}
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

        {/* Directions Section */}
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

                <div className="flex items-center justify-center">
                  <Image
                    src={one}
                    alt="AERO Extra Strength Headache Powder Packet"
                    width={300}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

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
    </div>
  );
}
