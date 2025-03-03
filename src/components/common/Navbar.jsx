"use client"
import { useState, useEffect } from "react"
import { FaBars, FaTimes, FaChevronDown, FaUserCircle } from "react-icons/fa"
import Link from "next/link"
import Router from "next/router"
import Image from "next/image"
import { navLinks } from "../../components/common/data/navbar"
import image from "../../assets/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const toggleSidebar = () => setIsOpen(!isOpen)

  const toggleDropdown = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index))
  }

  const handleMouseEnter = (index) => {
    if (window.innerWidth >= 1024) {
      setActiveDropdown(index)
    }
  }

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setActiveDropdown(null)
    }
  }



  const goToProfile = () => {
    Router.push("/profile")
    setIsOpen(false)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)

    // Make sure sidebar is closed initially on mobile
    if (window.innerWidth < 1024) {
      setIsOpen(false)
    }

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isOpen])

  return (
    <div>
      <nav className="bg-white text-black p-1 border-b-2 relative">
        <div className="w-11/12 mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold">
              <Image
                src={image || "/placeholder.svg"}
                alt="logo"
                className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] h-auto max-w-full"
              />
            </Link>

            {/* Desktop Links */}
            <ul className="hidden lg:flex space-x-6 items-center">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.path}
                    className="flex items-center font-bold hover:text-[#efcc41]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                    {link.sublinks && <FaChevronDown className="ml-1 mt-[3px]" />}
                  </Link>
                  {link.sublinks && activeDropdown === index && (
                    <ul className="absolute left-0 z-50 top-4 mt-2 w-40 bg-white text-black shadow-lg">
                      {link.sublinks.map((sublink, subIndex) => (
                        <li key={subIndex} className="py-2 px-4 font-bold hover:text-[#efcc41]">
                          <Link href={sublink.path}>{sublink.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

           

           
            </ul>

            {/* Mobile Sidebar Button */}
            <div className="lg:hidden">
              <button onClick={toggleSidebar} className=" bg-red">
                {!isOpen ? <FaBars size={24} /> : <FaTimes size={24} />}
              </button>
            </div>
          </div>

          {isOpen && (
            <button
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
              onClick={toggleSidebar}
            ></button>
          )}

          {/* Mobile Sidebar */}
          <div
            className={`lg:hidden fixed top-0 left-0 z-50 w-64 h-full bg-white p-4 border-r-4 border-gray-300 transition-transform transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <Image src={image || "/placeholder.svg"} alt="not found" className="h-14" />
              <button onClick={toggleSidebar}>
                <FaTimes size={24} />
              </button>
            </div>
            <hr className="border-b border-gray-300 mb-4" />

            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={index} className="relative">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleDropdown(index)}
                  >
                    <Link href={link.path} className="block text-black font-bold" onClick={toggleSidebar}>
                      {link.name}
                    </Link>
                    {link.sublinks && <FaChevronDown />}
                  </div>
                  {link.sublinks && activeDropdown === index && (
                    <ul className="mt-2 bg-blue-400 space-y-2">
                      {link.sublinks.map((sublink, subIndex) => (
                        <li key={subIndex} className="py-1 px-4">
                          <Link href={sublink.path} className="text-white" onClick={toggleSidebar}>
                            {sublink?.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

            
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

