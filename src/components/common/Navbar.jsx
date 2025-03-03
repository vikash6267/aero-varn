"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for open/close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-800">AERO</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="font-medium hover:text-blue-700">
            Home
          </Link>
          <Link href="#product" className="font-medium hover:text-blue-700">
            Product
          </Link>
          <Link href="#ingredients" className="font-medium hover:text-blue-700">
            Ingredients
          </Link>
          <Link href="#directions" className="font-medium hover:text-blue-700">
            Directions
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                href="/"
                className="block font-medium text-gray-800 hover:text-blue-700"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#product"
                className="block font-medium text-gray-800 hover:text-blue-700"
                onClick={() => setIsOpen(false)}
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                href="#ingredients"
                className="block font-medium text-gray-800 hover:text-blue-700"
                onClick={() => setIsOpen(false)}
              >
                Ingredients
              </Link>
            </li>
            <li>
              <Link
                href="#directions"
                className="block font-medium text-gray-800 hover:text-blue-700"
                onClick={() => setIsOpen(false)}
              >
                Directions
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
