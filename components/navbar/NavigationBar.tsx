"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Search, Globe, Menu, X, ChevronRight, ChevronDown } from "lucide-react"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdowns, setActiveDropdowns] = useState<Record<string, boolean>>({})
  const [contactBanner, setContactBanner] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleDropdown = (key: string) => {
    setActiveDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const showContactBanner = (type: string) => {
    switch (type) {
      case "location":
        setContactBanner("Kid's Promising Tomorrow, 123 Education Avenue, Learning City, LC1 2ED")
        break
      case "phone":
        setContactBanner("+44 1234 567890")
        break
      case "email":
        setContactBanner("info@kidspromisingtomorrow.edu")
        break
      default:
        setContactBanner(null)
    }
  }

  // For demo purposes - in a real app, this would come from your router
  const currentPath = "/"

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}>
      {/* Contact Banner */}
      {contactBanner && (
        <div className="bg-[#3aa756] text-white py-2 px-4 flex justify-between items-center">
          <div className="flex items-center">
            <MapPin size={16} className="mr-2" />
            <span>{contactBanner}</span>
          </div>
          <button onClick={() => setContactBanner(null)} className="text-white hover:text-gray-200">
            <X size={18} />
          </button>
        </div>
      )}

      {/* Top Navigation - Logo, School Name & Contact Icons */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            {/* Logo and School Name */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="relative h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40">
                  <Image src="/Nursery-logo.png" alt="Kid's Promising Tomorrow Logo" fill className="object-contain" />
                </div>
                <div className="ml-3">
                  <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#3aa756]">
                    Kid&apos;s Promising <span className="text-[#df2020]">Tomorrow</span>
                  </h1>
                </div>
              </Link>
            </div>

            {/* Contact Icons */}
            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={() => showContactBanner("location")}
                className="flex items-center justify-center w-10 h-10 bg-[#3aa756] text-white rounded-none hover:bg-[#2d8444] transition-colors"
                aria-label="Location"
              >
                <MapPin size={20} />
              </button>
              <button
                onClick={() => showContactBanner("phone")}
                className="flex items-center justify-center w-10 h-10 bg-[#3aa756] text-white rounded-none hover:bg-[#2d8444] transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </button>
              <button
                onClick={() => showContactBanner("email")}
                className="flex items-center justify-center w-10 h-10 bg-[#3aa756] text-white rounded-none hover:bg-[#2d8444] transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </button>
              <button
                className="flex items-center justify-center w-10 h-10 bg-[#3aa756] text-white rounded-none hover:bg-[#2d8444] transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                className="flex items-center justify-center w-10 h-10 bg-[#3aa756] text-white rounded-none hover:bg-[#2d8444] transition-colors"
                aria-label="Language"
              >
                <Globe size={20} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="p-2 text-[#3aa756] focus:outline-none" aria-label="Menu" onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-[#3aa756]/80 text-white">
        <div className="container mx-auto">
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex justify-between">
              <li className="nav-item relative group">
                <Link
                  href="/"
                  className={`block px-4 py-4 text-center hover:bg-[#2d8444] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                    currentPath === "/" ? "after:scale-x-100 bg-[#2d8444]" : ""
                  }`}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item relative group">
                <Link
                  href="/about"
                  className={`block px-4 py-4 text-center hover:bg-[#2d8444] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                    currentPath === "/about" ? "after:scale-x-100 bg-[#2d8444]" : ""
                  }`}
                >
                  About Us
                </Link>
                <div className="dropdown-menu absolute left-0 top-full bg-white shadow-md min-w-[200px] hidden group-hover:block z-10 animate-fadeIn">
                  <Link
                    href="/about/our-story"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Our Story
                  </Link>
                  <Link
                    href="/about/our-team"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/about/facilities"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444]"
                  >
                    Facilities
                  </Link>
                </div>
              </li>

              <li className="nav-item relative group">
                <Link
                  href="/curriculum"
                  className={`block px-4 py-4 text-center hover:bg-[#2d8444] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                    currentPath === "/curriculum" ? "after:scale-x-100 bg-[#2d8444]" : ""
                  }`}
                >
                  Curriculum
                </Link>
                <div className="dropdown-menu absolute left-0 top-full bg-white shadow-md min-w-[200px] hidden group-hover:block z-10 animate-fadeIn">
                  <Link
                    href="/curriculum/early-years"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Early Years
                  </Link>
                  <Link
                    href="/curriculum/primary"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Primary Education
                  </Link>
                  <Link
                    href="/curriculum/activities"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444]"
                  >
                    Extra Activities
                  </Link>
                </div>
              </li>

              <li className="nav-item relative group">
                <Link
                  href="/key-info"
                  className={`block px-4 py-4 text-center hover:bg-[#2d8444] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                    currentPath === "/key-info" ? "after:scale-x-100 bg-[#2d8444]" : ""
                  }`}
                >
                  Key Information
                </Link>
                <div className="dropdown-menu absolute left-0 top-full bg-white shadow-md min-w-[200px] hidden group-hover:block z-10 animate-fadeIn">
                  <Link
                    href="/key-info/admissions"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Admissions
                  </Link>
                  <Link
                    href="/key-info/calendar"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    School Calendar
                  </Link>
                  <Link
                    href="/key-info/fees"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444]"
                  >
                    Fees & Funding
                  </Link>
                </div>
              </li>

              <li className="nav-item relative group">
                <Link
                  href="/safeguarding"
                  className={`block px-4 py-4 text-center hover:bg-[#2d8444] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                    currentPath === "/safeguarding" ? "after:scale-x-100 bg-[#2d8444]" : ""
                  }`}
                >
                  Safeguarding
                </Link>
                <div className="dropdown-menu absolute left-0 top-full bg-white shadow-md min-w-[200px] hidden group-hover:block z-10 animate-fadeIn">
                  <Link
                    href="/safeguarding/policy"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Safeguarding Policy
                  </Link>
                  <Link
                    href="/safeguarding/team"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Safeguarding Team
                  </Link>
                  <Link
                    href="/safeguarding/resources"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444]"
                  >
                    Resources
                  </Link>
                </div>
              </li>

              <li className="nav-item relative group">
                <Link
                  href="/policies"
                  className={`block px-4 py-4 text-center hover:bg-[#2d8444] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                    currentPath === "/policies" ? "after:scale-x-100 bg-[#2d8444]" : ""
                  }`}
                >
                  Policies
                </Link>
                <div className="dropdown-menu absolute left-0 top-full bg-white shadow-md min-w-[200px] hidden group-hover:block z-10 animate-fadeIn">
                  <Link
                    href="/policies/attendance"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Attendance
                  </Link>
                  <Link
                    href="/policies/behavior"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Behavior
                  </Link>
                  <Link
                    href="/policies/health"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444]"
                  >
                    Health & Safety
                  </Link>
                </div>
              </li>

              <li className="nav-item relative group">
                <Link
                  href="/contact"
                  className={`block px-4 py-4 text-center hover:bg-[#2d8444] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                    currentPath === "/contact" ? "after:scale-x-100 bg-[#2d8444]" : ""
                  }`}
                >
                  Contact Details
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "0", height: "100vh" }}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Link href="/" className="flex items-center">
            <div className="relative w-12 h-12 mr-2">
              <Image src="/Nursery-logo.png" alt="School Logo" fill className="object-contain" />
            </div>
            <h1 className="text-xl font-bold text-[#3aa756]">
              Kid&apos;s Promising <span className="text-[#df2020]">Tomorrow</span>
            </h1>
          </Link>
          <button className="p-2 text-[#df2020]" onClick={toggleMobileMenu} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-1">
            <li>
              <Link
                href="/"
                className={`block py-3 px-4 text-lg font-medium ${
                  currentPath === "/" ? "text-[#3aa756] bg-gray-100" : "text-gray-800"
                } hover:text-[#3aa756] hover:bg-gray-50 rounded-md`}
              >
                Home
              </Link>
            </li>

            <li className="border-b border-gray-100">
              <div
                className={`flex justify-between items-center py-3 px-4 text-lg font-medium ${
                  currentPath.startsWith("/about") ? "text-[#3aa756] bg-gray-100" : "text-gray-800"
                } hover:text-[#3aa756] hover:bg-gray-50 rounded-md cursor-pointer`}
                onClick={() => toggleDropdown("about")}
              >
                <span>About Us</span>
                {activeDropdowns["about"] ? (
                  <ChevronDown className="h-5 w-5 transition-transform duration-200" />
                ) : (
                  <ChevronRight className="h-5 w-5 transition-transform duration-200" />
                )}
              </div>
              <ul
                className={`pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                  activeDropdowns["about"] ? "max-h-60" : "max-h-0"
                }`}
              >
                <li>
                  <Link
                    href="/about/our-story"
                    className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/our-team"
                    className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/facilities"
                    className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                  >
                    Facilities
                  </Link>
                </li>
              </ul>
            </li>

            <li className="border-b border-gray-100">
              <div
                className={`flex justify-between items-center py-3 px-4 text-lg font-medium ${
                  currentPath.startsWith("/curriculum") ? "text-[#3aa756] bg-gray-100" : "text-gray-800"
                } hover:text-[#3aa756] hover:bg-gray-50 rounded-md cursor-pointer`}
                onClick={() => toggleDropdown("curriculum")}
              >
                <span>Curriculum</span>
                {activeDropdowns["curriculum"] ? (
                  <ChevronDown className="h-5 w-5 transition-transform duration-200" />
                ) : (
                  <ChevronRight className="h-5 w-5 transition-transform duration-200" />
                )}
              </div>
              <ul
                className={`pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                  activeDropdowns["curriculum"] ? "max-h-60" : "max-h-0"
                }`}
              >
                <li>
                  <Link
                    href="/curriculum/early-years"
                    className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                  >
                    Early Years
                  </Link>
                </li>
                <li>
                  <Link
                    href="/curriculum/primary"
                    className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                  >
                    Primary Education
                  </Link>
                </li>
                <li>
                  <Link
                    href="/curriculum/activities"
                    className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                  >
                    Extra Activities
                  </Link>
                </li>
              </ul>
            </li>

            <li className="border-b border-gray-100">
              <div
                className={`flex justify-between items-center py-3 px-4 text-lg font-medium ${
                  currentPath.startsWith("/key-info") ? "text-[#3aa756] bg-gray-100" : "text-gray-800"
                } hover:text-[#3aa756] hover:bg-gray-50 rounded-md cursor-pointer`}
                onClick={() => toggleDropdown("key-info")}
              >
                <span>Key Information</span>
                {activeDropdowns["key-info"] ? (
                  <ChevronDown className="h-5 w-5 transition-transform duration-200" />
                ) : (
                  <ChevronRight className="h-5 w-5 transition-transform duration-200" />
                )}
              </div>
              <ul
                className={`pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                  activeDropdowns["key-info"] ? "max-h-60" : "max-h-0"
                }`}
              >
                <li>
                  <Link
                    href="/key-info/admissions"
                    className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                  >
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/key-info/calendar"
                    className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                  >
                    School Calendar
                  </Link>
                </li>
                <li>
                  <Link
                    href="/key-info/fees"
                    className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                  >
                    Fees & Funding
                  </Link>
                </li>
              </ul>
            </li>

            <li className="border-b border-gray-100">
              <div
                className={`flex justify-between items-center py-3 px-4 text-lg font-medium ${
                  currentPath.startsWith("/safeguarding") ? "text-[#3aa756] bg-gray-100" : "text-gray-800"
                } hover:text-[#3aa756] hover:bg-gray-50 rounded-md cursor-pointer`}
                onClick={() => toggleDropdown("safeguarding")}
              >
                <span>Safeguarding</span>
                {activeDropdowns["safeguarding"] ? (
                  <ChevronDown className="h-5 w-5 transition-transform duration-200" />
                ) : (
                  <ChevronRight className="h-5 w-5 transition-transform duration-200" />
                )}
              </div>
              <ul
                className={`pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                  activeDropdowns["safeguarding"] ? "max-h-60" : "max-h-0"
                }`}
              >
                <li>
                  <Link
                    href="/safeguarding/policy"
                    className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                  >
                    Safeguarding Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/safeguarding/team"
                    className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                  >
                    Safeguarding Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/safeguarding/resources"
                    className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                  >
                    Resources
                  </Link>
                </li>
              </ul>
            </li>

            <li className="border-b border-gray-100">
              <div
                className={`flex justify-between items-center py-3 px-4 text-lg font-medium ${
                  currentPath.startsWith("/policies") ? "text-[#3aa756] bg-gray-100" : "text-gray-800"
                } hover:text-[#3aa756] hover:bg-gray-50 rounded-md cursor-pointer`}
                onClick={() => toggleDropdown("policies")}
              >
                <span>Policies</span>
                {activeDropdowns["policies"] ? (
                  <ChevronDown className="h-5 w-5 transition-transform duration-200" />
                ) : (
                  <ChevronRight className="h-5 w-5 transition-transform duration-200" />
                )}
              </div>
              <ul
                className={`pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                  activeDropdowns["policies"] ? "max-h-60" : "max-h-0"
                }`}
              >
                <li>
                  <Link
                    href="/policies/attendance"
                    className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                  >
                    Attendance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/policies/behavior"
                    className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                  >
                    Behavior
                  </Link>
                </li>
                <li>
                  <Link
                    href="/policies/health"
                    className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                  >
                    Health & Safety
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href="/contact"
                className={`block py-3 px-4 text-lg font-medium ${
                  currentPath === "/contact" ? "text-[#3aa756] bg-gray-100" : "text-gray-800"
                } hover:text-[#3aa756] hover:bg-gray-50 rounded-md`}
              >
                Contact Details
              </Link>
            </li>
          </ul>
        </nav>

        <div className="absolute bottom-0 w-full p-4 bg-[#3aa756] text-white">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <button onClick={() => showContactBanner("location")} className="hover:text-gray-200">
                <MapPin size={18} />
              </button>
              <button onClick={() => showContactBanner("phone")} className="hover:text-gray-200">
                <Phone size={18} />
              </button>
              <button onClick={() => showContactBanner("email")} className="hover:text-gray-200">
                <Mail size={18} />
              </button>
            </div>
            <div className="flex space-x-4">
              <button className="hover:text-gray-200">
                <Search size={18} />
              </button>
              <button className="hover:text-gray-200">
                <Globe size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
