"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Search, Globe, Menu, X, ChevronRight, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdowns, setActiveDropdowns] = useState<Record<string, boolean>>({})
  const [contactBanner, setContactBanner] = useState<string | null>(null)
  const pathname = usePathname()
  const mobileNavRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    // Reset all dropdowns when closing the menu
    if (mobileMenuOpen) {
      setActiveDropdowns({})
    }
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
        setContactBanner("The Wykeham Centre, Market Place, Romford, RM1 3AB")
        break
      case "phone":
        setContactBanner("Nursery: Tel: 01708 608434 | Mobile: 07983 612443 || School Club: Tel: 01708 729186 | Mobile: 07495 190473")
        break
      case "email":
        setContactBanner("Nursery: admin@littlemarketnursery.co.uk || School Club: admin@littlemarketschoolclub.co.uk")
        break
      default:
        setContactBanner(null)
    }
  }

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false)
    // Reset all dropdowns
    setActiveDropdowns({})
    // Scroll to top of the page
    window.scrollTo(0, 0)
  }

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}>
      {/* Contact Banner */}
      {contactBanner && (
        <div className="bg-[#3aa756] text-white px-4 flex justify-between items-center">
          <div className="flex items-center justify-end">
            <MapPin size={16} className="mr-2" />
            <span>{contactBanner}</span>
          </div>
          <button onClick={() => setContactBanner(null)} className="text-white hover:text-gray-200">
            <X size={18} />
          </button>
        </div>
      )}

      {/* Top Navigation - Logo, School Name & Contact Icons */}
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            {/* Logo and School Name */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="relative h-24 w-24 md:h-28 md:w-28 lg:h-36 lg:w-36 -mt-6">
                  <Image src="/Nursery-logo.png" alt="Kid's Promising Tomorrow Logo" fill className="object-contain" />
                </div>
                <div className="ml-3">
                  <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-[#3aa756]">
                    Little Market <span className="text-[#df2020]">Nursery</span>
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
             
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="p-2 text-[#3aa756] focus:outline-none mobile-menu-button"
                aria-label="Menu"
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-[#3aa756] text-white">
        <div className="container mx-auto">
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex justify-between">
              <li className="nav-item relative group">
                <Link
                  href="/"
                  className={`block px-4 py-4 text-center hover:bg-[#2d8444] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                    pathname === "/" ? "after:scale-x-100 bg-[#2d8444]" : ""
                  }`}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item relative group">
                <Link
                  href="/about-us/our-story"
                  className={`block px-4 py-4 text-center hover:bg-[#2d8444] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                    pathname.startsWith("/about-us") ? "after:scale-x-100 bg-[#2d8444]" : ""
                  }`}
                >
                  About Us
                </Link>
                <div className="dropdown-menu absolute left-0 top-full bg-white shadow-md min-w-[200px] hidden group-hover:block z-10 animate-fadeIn">
                  <Link
                    href="/about-us/our-story"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Our Story
                  </Link>
                  <Link
                    href="/about-us/vision-mission"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Vision & Mission
                  </Link>
                  <Link
                    href="/about-us/our-team"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Our Team
                  </Link>
                  {/* <Link
                    href="/about-us/facilities"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Facilities
                  </Link> */}
                  <Link
                    href="/about-us/board-of-governors"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Board of Governors
                  </Link>
                  <Link
                    href="/about-us/our-prospectus"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444]"
                  >
                    Our Prospectus
                  </Link>
                </div>
              </li>

              <li className="nav-item relative group">
                <Link
                  href="/curriculum"
                  className={`block px-4 py-4 text-center hover:bg-[#2d8444] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                    pathname.startsWith("/curriculum") ? "after:scale-x-100 bg-[#2d8444]" : ""
                  }`}
                >
                  Curriculum
                </Link>
                <div className="dropdown-menu absolute left-0 top-full bg-white shadow-md min-w-[200px] hidden group-hover:block z-10 animate-fadeIn max-h-[300px] overflow-y-auto">
                  <Link
                    href="/curriculum/our-approach"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Our Approach
                  </Link>
                  <Link
                    href="/curriculum/babies"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    0–2 Years (Babies)
                  </Link>
                  <Link
                    href="/curriculum/toddlers"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    2–3 Years (Toddlers)
                  </Link>
                  <Link
                    href="/curriculum/preschoolers"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    3–5 Years (Preschoolers)
                  </Link>
                  <Link
                    href="/curriculum/after-school-club"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    After School Club
                  </Link>
                  <Link
                    href="/curriculum/holiday-club"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Holiday Club
                  </Link>
                  <Link
                    href="/curriculum/learning-tools"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Learning Tools
                  </Link>
                  <Link
                    href="/curriculum/assessments"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Assessments
                  </Link>
                  <Link
                    href="/curriculum/learning-support"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Learning Support
                  </Link>
                  <Link
                    href="/curriculum/extra-activities"
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
                    pathname.startsWith("/key-info") ? "after:scale-x-100 bg-[#2d8444]" : ""
                  }`}
                >
                  Key Information
                </Link>
                <div className="dropdown-menu absolute left-0 top-full bg-white shadow-md min-w-[200px] hidden group-hover:block z-10 animate-fadeIn max-h-[300px] overflow-y-auto">
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
                    Calendar
                  </Link>
                  <Link
                    href="/key-info/fees-and-funding"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Fees & Funding
                  </Link>
                  <Link
                    href="/key-info/meals-and-menu"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Meals & Menu
                  </Link>
                  <Link
                    href="/key-info/transport"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Transport
                  </Link>
                  <Link
                    href="/key-info/parent-partnership"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444]"
                  >
                    Parent Partnership
                  </Link>
                </div>
              </li>

              <li className="nav-item relative group">
                <Link
                  href="/gallery"
                  className={`block px-4 py-4 text-center hover:bg-[#2d8444] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                    pathname.startsWith("/gallery") ? "after:scale-x-100 bg-[#2d8444]" : ""
                  }`}
                >
                  Galleries
                </Link>
                <div className="dropdown-menu absolute left-0 top-full bg-white shadow-md min-w-[200px] hidden group-hover:block z-10 animate-fadeIn max-h-[300px] overflow-y-auto">
                  <Link
                    href="/gallery/baby-gallery"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Baby Gallery
                  </Link>
                  <Link
                    href="/gallery/pre-school-gallery"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Pre-School Gallery
                  </Link>
                  <Link
                    href="/gallery/tots-gallery"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Tots Gallery
                  </Link>
                  <Link
                    href="/gallery/activity-gallery"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444]"
                  >
                    Activity Gallery
                  </Link>
                </div>
              </li>

              <li className="nav-item relative group">
                <Link
                  href="/funding"
                  className={`block px-4 py-4 text-center hover:bg-[#2d8444] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                    pathname === "/funding" ? "after:scale-x-100 bg-[#2d8444]" : ""
                  }`}
                >
                  Funding
                </Link>
              </li>

              <li className="nav-item relative group">
                <Link
                  href="/holiday-club"
                  className={`block px-4 py-4 text-center hover:bg-[#2d8444] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                    pathname.startsWith("/holiday-club") ? "after:scale-x-100 bg-[#2d8444]" : ""
                  }`}
                >
                  Holiday Club
                </Link>
                <div className="dropdown-menu absolute left-0 top-full bg-white shadow-md min-w-[200px] hidden group-hover:block z-10 animate-fadeIn">
                  <Link
                    href="/holiday-club"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Information
                  </Link>
                  <Link
                    href="/holiday-club/gallery"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444]"
                  >
                    Gallery
                  </Link>
                </div>
              </li>

              <li className="nav-item relative group">
                <Link
                  href="/contact"
                  className={`block px-4 py-4 text-center hover:bg-[#2d8444] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                    pathname.startsWith("/contact") ? "after:scale-x-100 bg-[#2d8444]" : ""
                  }`}
                >
                  Contact Us
                </Link>
                <div className="dropdown-menu absolute left-0 top-full bg-white shadow-md min-w-[200px] hidden group-hover:block z-10 animate-fadeIn max-h-[300px] overflow-y-auto">
                  <Link
                    href="/contact/arrange-visit"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Arrange a Visit
                  </Link>
                  <Link
                    href="/contact/ask-question"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Ask A Question
                  </Link>
                  <Link
                    href="/contact/register-your-child"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444] border-b border-gray-200"
                  >
                    Register Your Child
                  </Link>
                  <Link
                    href="/contact/find-us"
                    className="block py-3 px-4 text-[#3aa756] hover:bg-gray-100 hover:text-[#2d8444]"
                  >
                    Find Us
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "0", height: "100vh" }}
        ref={mobileNavRef}
      >
        {/* Mobile Header */}
        <div className="flex justify-between items-center p-4 border-b flex-shrink-0">
          <Link href="/" className="flex items-center" onClick={handleMobileLinkClick}>
            <div className="relative w-12 h-12 mr-2">
              <Image src="/Nursery-logo.png" alt="School Logo" fill className="object-contain" />
            </div>
            <h1 className="text-xl font-bold text-[#3aa756]">
              Little Market <span className="text-[#df2020]">Nursery</span>
            </h1>
          </Link>
          <button className="p-2 text-[#df2020] mobile-menu-button" onClick={toggleMobileMenu} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Navigation Area */}
        <div className="flex-grow overflow-hidden">
          <nav className="h-full overflow-y-auto custom-scrollbar p-4">
            <ul className="space-y-1">
              <li>
                <Link
                  href="/"
                  className={`block py-3 px-4 text-lg font-medium ${
                    pathname === "/" ? "text-[#3aa756] bg-gray-100" : "text-gray-800"
                  } hover:text-[#3aa756] hover:bg-gray-50 rounded-md`}
                  onClick={handleMobileLinkClick}
                >
                  Home
                </Link>
              </li>

              <li className="border-b border-gray-100">
                <div
                  className={`flex justify-between items-center py-3 px-4 text-lg font-medium ${
                    pathname.startsWith("/about-us") ? "text-[#3aa756] bg-gray-100" : "text-gray-800"
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
                  className={`pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 custom-scrollbar ${
                    activeDropdowns["about"] ? "max-h-60 overflow-y-auto" : "max-h-0"
                  }`}
                >
                  <li>
                    <Link
                      href="/about-us/our-story"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us/vision-mission"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Vision & Mission
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us/our-team"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Our Team
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href="/about-us/facilities"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Facilities
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      href="/about-us/board-of-governors"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Board of Governors
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us/our-prospectus"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Our Prospectus
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="border-b border-gray-100">
                <div
                  className={`flex justify-between items-center py-3 px-4 text-lg font-medium ${
                    pathname.startsWith("/curriculum") ? "text-[#3aa756] bg-gray-100" : "text-gray-800"
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
                  className={`pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 custom-scrollbar ${
                    activeDropdowns["curriculum"] ? "max-h-[40vh] overflow-y-auto pb-2" : "max-h-0"
                  }`}
                >
                  <li>
                    <Link
                      href="/curriculum/our-approach"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Our Approach
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/curriculum/babies"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      0–2 Years (Babies)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/curriculum/toddlers"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      2–3 Years (Toddlers)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/curriculum/preschoolers"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      3–5 Years (Preschoolers)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/curriculum/after-school-club"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      After School Club
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/curriculum/holiday-club"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Holiday Club
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/curriculum/learning-tools"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Learning Tools
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/curriculum/assessments"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Assessments
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/curriculum/learning-support"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Learning Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/curriculum/extra-activities"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Extra Activities
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="border-b border-gray-100">
                <div
                  className={`flex justify-between items-center py-3 px-4 text-lg font-medium ${
                    pathname.startsWith("/key-info") ? "text-[#3aa756] bg-gray-100" : "text-gray-800"
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
                  className={`pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 custom-scrollbar ${
                    activeDropdowns["key-info"] ? "max-h-96 overflow-y-auto" : "max-h-0"
                  }`}
                >
                  <li>
                    <Link
                      href="/key-info/admissions"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Admissions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/key-info/calendar"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Calendar
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/key-info/fees-and-funding"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Fees & Funding
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/key-info/meals-and-menu"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Meals & Menu
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/key-info/transport"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Transport
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/key-info/parent-partnership"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Parent Partnership
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="border-b border-gray-100">
                <div
                  className={`flex justify-between items-center py-3 px-4 text-lg font-medium ${
                    pathname.startsWith("/gallery") ? "text-[#3aa756] bg-gray-100" : "text-gray-800"
                  } hover:text-[#3aa756] hover:bg-gray-50 rounded-md cursor-pointer`}
                  onClick={() => toggleDropdown("gallery")}
                >
                  <span>Galleries</span>
                  {activeDropdowns["gallery"] ? (
                    <ChevronDown className="h-5 w-5 transition-transform duration-200" />
                  ) : (
                    <ChevronRight className="h-5 w-5 transition-transform duration-200" />
                  )}
                </div>
                <ul
                  className={`pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 custom-scrollbar ${
                    activeDropdowns["gallery"] ? "max-h-60 overflow-y-auto" : "max-h-0"
                  }`}
                >
                  <li>
                    <Link
                      href="/gallery/baby-gallery"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Baby Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gallery/pre-school-gallery"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Pre-School Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gallery/tots-gallery"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Tots Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gallery/activity-gallery"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Activity Gallery
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="border-b border-gray-100">
                <Link
                  href="/funding"
                  className={`block py-3 px-4 text-lg font-medium ${
                    pathname === "/funding" ? "text-[#3aa756] bg-gray-100" : "text-gray-800"
                  } hover:text-[#3aa756] hover:bg-gray-50 rounded-md`}
                  onClick={handleMobileLinkClick}
                >
                  Funding
                </Link>
              </li>

              <li className="border-b border-gray-100">
                <div
                  className={`flex justify-between items-center py-3 px-4 text-lg font-medium ${
                    pathname.startsWith("/holiday-club") ? "text-[#3aa756] bg-gray-100" : "text-gray-800"
                  } hover:text-[#3aa756] hover:bg-gray-50 rounded-md cursor-pointer`}
                  onClick={() => toggleDropdown("holiday-club")}
                >
                  <span>Holiday Club</span>
                  {activeDropdowns["holiday-club"] ? (
                    <ChevronDown className="h-5 w-5 transition-transform duration-200" />
                  ) : (
                    <ChevronRight className="h-5 w-5 transition-transform duration-200" />
                  )}
                </div>
                <ul
                  className={`pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 custom-scrollbar ${
                    activeDropdowns["holiday-club"] ? "max-h-60 overflow-y-auto" : "max-h-0"
                  }`}
                >
                  <li>
                    <Link
                      href="/holiday-club"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Information
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/holiday-club/gallery"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Gallery
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="border-b border-gray-100">
                <div
                  className={`flex justify-between items-center py-3 px-4 text-lg font-medium ${
                    pathname.startsWith("/contact") ? "text-[#3aa756] bg-gray-100" : "text-gray-800"
                  } hover:text-[#3aa756] hover:bg-gray-50 rounded-md cursor-pointer`}
                  onClick={() => toggleDropdown("contact")}
                >
                  <span>Contact Us</span>
                  {activeDropdowns["contact"] ? (
                    <ChevronDown className="h-5 w-5 transition-transform duration-200" />
                  ) : (
                    <ChevronRight className="h-5 w-5 transition-transform duration-200" />
                  )}
                </div>
                <ul
                  className={`pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 custom-scrollbar ${
                    activeDropdowns["contact"] ? "max-h-60 overflow-y-auto" : "max-h-0"
                  }`}
                >
                  <li>
                    <Link
                      href="/contact/arrange-visit"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Arrange a Visit
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact/ask-question"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Ask A Question
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact/register-your-child"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Register Your Child
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact/find-us"
                      className="block py-2 px-4 text-gray-600 hover:text-[#3aa756] hover:bg-gray-50 rounded-md"
                      onClick={handleMobileLinkClick}
                    >
                      Find Us
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Footer */}
        <div className="p-4 bg-[#3aa756] text-white flex-shrink-0">
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
