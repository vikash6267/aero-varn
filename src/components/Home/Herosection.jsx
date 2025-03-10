import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import hero from "../../assets/heroNew.png";
import two from "../../assets/heromobile.jpg";

export default function HeroSection() {
  return (
    <>

   
    <section className="relative w-full text-white lg:min-h-[90vh] min-h-[35vh] lg:flex hidden md:flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full lg:h-full">
        <Image
          src={hero}
          alt="Hero background"
          fill
          className="object-cover  object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/10 "></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto lg:px-6  px-2 py-1 sm:py-20 md:py-24 lg:py-28 ">
        <div className="lg:max-w-sm md:max-w-sm max-w-[50vw] lg:space-y-6 space-y-2 text-center md:text-left bg-blue-950/90 lg:p-6 p-3 rounded-3xl shadow-2xl shadow-b">
          <div className="inline-block bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-md">
            FAST PAIN RELIEF
          </div>

          <h1 className="lg:text-2xl text-[16px]  font-extrabold leading-tight text-white drop-shadow-[3px_3px_8px_rgba(0,0,0,0.7)]">
            AERO Extra Strength Headache Powder
          </h1>

          <p className="lg:text-sm  text-[10px] text-gray-200 max-w-prose drop-shadow-md">
            Fast-acting pain relief in a convenient, dissolvable powder form.
          </p>

          <div className="pt-2">
            <Link
              href="#product"
              className="inline-flex text-[14px] lg:text-lg items-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-1 px-2 rounded-md transition-transform duration-200 transform hover:scale-105 shadow-lg"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="relative  lg:hidden md:hidden text-white py-16 md:py-24 h-[90vh]">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-no-repeat bg-cover bg-center "
    style={{ backgroundImage: `url(${two.src})` }}
  ></div>

  {/* Content */}
  <div className="relative container mx-auto lg:px-6  px-2 py-1 sm:py-20 md:py-24 lg:py-28 ">
        <div className="lg:max-w-sm md:max-w-sm max-w-[50vw] lg:space-y-6 space-y-2 text-center md:text-left bg-blue-950/90 lg:p-6 p-3 rounded-3xl shadow-2xl shadow-b">
          <div className="inline-block bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-md">
            FAST PAIN RELIEF
          </div>

          <h1 className="lg:text-2xl text-[16px]  font-extrabold leading-tight text-white drop-shadow-[3px_3px_8px_rgba(0,0,0,0.7)]">
            AERO Extra Strength Headache Powder
          </h1>

          <p className="lg:text-sm  text-[10px] text-gray-200 max-w-prose drop-shadow-md">
            Fast-acting pain relief in a convenient, dissolvable powder form.
          </p>

          <div className="pt-2">
            <Link
              href="#product"
              className="inline-flex text-[14px] lg:text-lg items-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-1 px-2 rounded-md transition-transform duration-200 transform hover:scale-105 shadow-lg"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
</section>


        </>
  );
}
