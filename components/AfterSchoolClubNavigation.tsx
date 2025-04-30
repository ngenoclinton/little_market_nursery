"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, ChevronRight } from "lucide-react"

export default function AfterSchoolClubNavigation() {
  const pathname = usePathname()
  const [isGalleryExpanded, setIsGalleryExpanded] = useState(pathname.startsWith("/after-school-club/gallery"))

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
          <li>
            <Link
              href="/after-school-club/activities"
              className={`block px-4 py-2 rounded-md ${
                isActive("/after-school-club/activities") ? "bg-[#3aa756] text-white" : "hover:bg-gray-100"
              }`}
            >
              Activities
            </Link>
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
          <li>
            <div className="px-4 py-2">
              <button
                onClick={() => setIsGalleryExpanded(!isGalleryExpanded)}
                className="flex items-center justify-between w-full text-left"
              >
                <span>Gallery</span>
                {isGalleryExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </button>
            </div>
            {isGalleryExpanded && (
              <ul className="pl-4 space-y-1 mt-1">
                <li>
                  <Link
                    href="/after-school-club/gallery"
                    className={`block px-4 py-2 rounded-md ${
                      isActive("/after-school-club/gallery") ? "bg-[#3aa756] text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    All Galleries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/after-school-club/gallery/activities"
                    className={`block px-4 py-2 rounded-md ${
                      isActive("/after-school-club/gallery/activities")
                        ? "bg-[#3aa756] text-white"
                        : "hover:bg-gray-100"
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
                        ? "bg-[#3aa756] text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    Holiday Club
                  </Link>
                </li>
                <li>
                  <Link
                    href="/after-school-club/gallery/special-events"
                    className={`block px-4 py-2 rounded-md ${
                      isActive("/after-school-club/gallery/special-events")
                        ? "bg-[#3aa756] text-white"
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
                      isActive("/after-school-club/gallery/trips") ? "bg-[#3aa756] text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    Trips & Outings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/after-school-club/gallery/seasonal"
                    className={`block px-4 py-2 rounded-md ${
                      isActive("/after-school-club/gallery/seasonal") ? "bg-[#3aa756] text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    Seasonal
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              href="/after-school-club/registration"
              className={`block px-4 py-2 rounded-md ${
                isActive("/after-school-club/registration") ? "bg-[#3aa756] text-white" : "hover:bg-gray-100"
              }`}
            >
              Registration
            </Link>
          </li>
          <li>
            <Link
              href="/after-school-club/contact"
              className={`block px-4 py-2 rounded-md ${
                isActive("/after-school-club/contact") ? "bg-[#3aa756] text-white" : "hover:bg-gray-100"
              }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
