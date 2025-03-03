"use client";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Maximize, X } from "lucide-react";
import one from "../../assets/backSideNew.jpg";
import two from "../../assets/packetNew.jpg";

const images = [one, two];

export default function ImageSlider() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true, 
    speed: 800,  
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true, 
    cssEase: "ease-in-out",
    arrows: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div className="w-screen flex justify-center">
      <div className="w-full max-w-lg relative">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="relative flex justify-center">
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                width={500}
                height={500}
                className="object-contain w-full max-w-full h-auto"
              />
              {/* Zoom Icon */}
              <button
                className="absolute top-2 cursor-pointer right-6 bg-black bg-opacity-50 p-2 rounded-full text-white"
                onClick={() => setIsFullscreen(true)}
              >
                <Maximize size={24} />
              </button>
            </div>
          ))}
        </Slider>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
          <div className="w-full max-w-3xl relative">
            <Slider
              {...settings}
              initialSlide={currentSlide}
              infinite={true}
            >
              {images.map((img, index) => (
                <div key={index} className="flex justify-center">
                  <Image
                    src={img}
                    alt={`Fullscreen Slide ${index + 1}`}
                    width={800}
                    height={800}
                    className="object-contain w-full max-w-full h-auto"
                  />
                </div>
              ))}
            </Slider>

            {/* Close Button */}
            <button
              className="absolute top-0 cursor-pointer right-5 bg-red-500 rounded-b-full text-black text-3xl"
              onClick={() => setIsFullscreen(false)}
            >
              <X size={30} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
