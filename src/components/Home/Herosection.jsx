import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import landingImage from "../../assets/hero.jpg";

function Herosection() {
  return (
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
        <div className="flex justify-center h-full">
          <Image
            src={landingImage}
            alt="AERO Extra Strength Headache Powder Box"
            layout="intrinsic"
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Herosection;
