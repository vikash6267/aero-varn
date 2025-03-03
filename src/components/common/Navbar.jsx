"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1e1e2e] text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src={logo} alt="Logo" width={150} height={150} className="h-14 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-[#ffae42] font-semibold text-lg">
          <Link href="/" className="hover:text-[#ffcc70] transition duration-300">Home</Link>
          <Link href="/about" className="hover:text-[#ffcc70] transition duration-300">About</Link>
          <Link href="/services" className="hover:text-[#ffcc70] transition duration-300">Services</Link>
          <Link href="/contact" className="hover:text-[#ffcc70] transition duration-300">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={30} className="text-[#ffcc70]" /> : <Menu size={30} className="text-[#ffcc70]" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 100 }}
            className="fixed top-0 left-0 w-72 h-full bg-[#252542] shadow-xl z-50 p-6"
          >
            <button className="absolute top-5 right-5 text-white" onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>
            <div className="flex flex-col items-center mt-10">
              <Image src={logo} alt="Logo" width={130} height={130} className="h-16 w-auto" />
            </div>
            <div className="mt-10 space-y-6 text-[#ffae42] font-semibold text-lg">
              <Link href="/" className="block hover:text-[#ffcc70] transition duration-300" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/about" className="block hover:text-[#ffcc70] transition duration-300" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="/services" className="block hover:text-[#ffcc70] transition duration-300" onClick={() => setIsOpen(false)}>Services</Link>
              <Link href="/contact" className="block hover:text-[#ffcc70] transition duration-300" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;