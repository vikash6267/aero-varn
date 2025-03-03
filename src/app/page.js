import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import one from "../assets/aerodibba.jpg";

import ImageSlider from "@/components/common/ImageSlider";
import Navbar from "@/components/common/Navbar";
import Herosection from "@/components/Home/Herosection";
import ProductSection from "@/components/Home/ProductSection";
import IngredientsSection from "@/components/Home/IngredientsSection";
import DirectionsSection from "@/components/Home/DirectionsSection";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
    <Navbar />
    <Herosection />
    <ProductSection />
    <IngredientsSection />
    <DirectionsSection />
    <Footer />

    

     
    </div>
  );
}
