"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, ChevronRight } from "lucide-react"

export default function AfterSchoolClubNavigation() {
  const pathname = usePathname()
  const [isGalleryExpanded, setIsGalleryExpanded] = useState(false)
  const [isAboutExpanded, setIsAboutExpanded] = useState(false)
  const [isContactExpanded, setIsContactExpanded] = useState(false)

  useEffect(() => {
    if (pathname) {
      setIsGalleryExpanded(pathname.startsWith("/after-school-club/gallery"))
      setIsAboutExpanded(pathname.includes("/after-school-club/our-"))
      setIsContactExpanded(
        pathname.includes("/after-school-club/arrange-visit") ||
          pathname.includes("/after-school-club/ask-question") ||
          pathname.includes("/after-school-club/find-us") ||
          pathname.includes("/after-school-club/register"),
      )
    }
  }, [pathname])

  if (!pathname) return null // Safely handle null case

  const isActive = (path: string) => pathname === path

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 bg-[#3aa756] text-white">
        <h2 className="text-xl font-bold">After School Club</h2>
      </div>

      <nav className="p-2">
        <ul className="space-y-1">
          <li>
            <Link
              href="/after-school-club"
              className={`block px-4 py-2 rounded-md ${
                isActive("/after-school-club") ? "bg-[#3aa756] text-white" : "hover:bg-gray-100"
              }`}
            >
              Overview
            </Link>
          </li>

          {/* About Us Section */}
          <li>
            <div className="px-4 py-2">
              <button
                onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="font-medium text-[#3aa756]">About Us</span>
                {isAboutExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </button>
            </div>
            {isAboutExpanded && (
              <ul className="pl-4 space-y-1 mt-1">
                <li>
                  <Link
                    href="/after-school-club/our-activities"
                    className={`block px-4 py-2 rounded-md ${
                      isActive("/after-school-club/our-activities") ? "bg-[#3aa756] text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    Our Activities
                  </Link>
                </li>
                <li>
                  <Link
                    href="/after-school-club/our-people"
                    className={`block px-4 py-2 rounded-md ${
                      isActive("/after-school-club/our-people") ? "bg-[#3aa756] text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    Our People
                  </Link>
                </li>
                <li>
                  <Link
                    href="/after-school-club/our-parents"
                    className={`block px-4 py-2 rounded-md ${
                      isActive("/after-school-club/our-parents") ? "bg-[#3aa756] text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    Our Parents
                  </Link>
                </li>
                <li>
                  <Link
                    href="/after-school-club/our-policies"
                    className={`block px-4 py-2 rounded-md ${
                      isActive("/after-school-club/our-policies") ? "bg-[#3aa756] text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    Our Policies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/after-school-club/our-prospectus"
                    className={`block px-4 py-2 rounded-md ${
                      isActive("/after-school-club/our-prospectus") ? "bg-[#3aa756] text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    Our Prospectus
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              href="/after-school-club/holiday-club"
              className={`block px-4 py-2 rounded-md ${
                isActive("/after-school-club/holiday-club") ? "bg-[#3aa756] text-white" : "hover:bg-gray-100"
              }`}
            >
              Holiday Club
            </Link>
          </li>

          {/* Gallery Section */}
          <li>
            <div className="px-4 py-2">
              <button
                onClick={() => setIsGalleryExpanded(!isGalleryExpanded)}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="font-medium text-[#fcb900]">Gallery</span>
                {isGalleryExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </button>
            </div>
            {isGalleryExpanded && (
              <ul className="pl-4 space-y-1 mt-1">
                <li>
                  <Link
                    href="/after-school-club/gallery"
                    className={`block px-4 py-2 rounded-md ${
                      isActive("/after-school-club/gallery") ? "bg-[#fcb900] text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    All Galleries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/after-school-club/gallery/activity"
                    className={`block px-4 py-2 rounded-md ${
                      isActive("/after-school-club/gallery/activity") ? "bg-[#fcb900] text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    Activities
                  </Link>
                </li>
                <li>
                  <Link
                    href="/after-school-club/gallery/holiday-club"
                    className={`block px-4 py-2 rounded-md ${
                      isActive("/after-school-club/gallery/holiday-club")
                        ? "bg-[#fcb900] text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    Holiday Club
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/after-school-club/gallery/special-events"
                    className={`block px-4 py-2 rounded-md ${
                      isActive("/after-school-club/gallery/special-events")
                        ? "bg-[#fcb900] text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    Special Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/after-school-club/gallery/trips"
                    className={`block px-4 py-2 rounded-md ${
                      isActive("/after-school-club/gallery/trips") ? "bg-[#fcb900] text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    Trips & Outings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/after-school-club/gallery/seasonal"
                    className={`block px-4 py-2 rounded-md ${
                      isActive("/after-school-club/gallery/seasonal") ? "bg-[#fcb900] text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    Seasonal
                  </Link>
                </li> */}
              </ul>
            )}
          </li>

          {/* Contact Us Section */}
          <li>
            <div className="px-4 py-2">
              <button
                onClick={() => setIsContactExpanded(!isContactExpanded)}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="font-medium text-[#ff6900]">Contact Us</span>
                {isContactExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </button>
            </div>
            {isContactExpanded && (
              <ul className="pl-4 space-y-1 mt-1">
                <li>
                  <Link
                    href="/after-school-club/arrange-visit"
                    className={`block px-4 py-2 rounded-md ${
                      isActive("/after-school-club/arrange-visit") ? "bg-[#ff6900] text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    Arrange A Visit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/after-school-club/ask-question"
                    className={`block px-4 py-2 rounded-md ${
                      isActive("/after-school-club/ask-question") ? "bg-[#ff6900] text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    Ask A Question
                  </Link>
                </li>
                <li>
                  <Link
                    href="/after-school-club/register"
                    className={`block px-4 py-2 rounded-md ${
                      isActive("/after-school-club/register") ? "bg-[#ff6900] text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    Register Your Child
                  </Link>
                </li>
                <li>
                  <Link
                    href="/after-school-club/find-us"
                    className={`block px-4 py-2 rounded-md ${
                      isActive("/after-school-club/find-us") ? "bg-[#ff6900] text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    Find Us
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              href="/after-school-club/parental-contract"
              className={`block px-4 py-2 rounded-md ${
                isActive("/after-school-club/parental-contract") ? "bg-[#df2020] text-white" : "hover:bg-gray-100"
              }`}
            >
              <span className="text-[#df2020] font-medium">Parental Contract</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
