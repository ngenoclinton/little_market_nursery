"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"

interface SideNavigationProps {
  items: { title: string; href: string }[]
  basePath: string
  title?: string
}

export default function SideNavigation({ items, basePath, title }: SideNavigationProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden">
      {/* Mobile view - collapsible */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full p-4 bg-[#3aa756] text-white font-medium"
        >
          <span>{title || "Navigation"}</span>
          {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </button>

        {isOpen && (
          <nav className="p-2">
            <ul className="space-y-1">
              {items.map((item) => {
                const isActive = pathname === `${basePath}/${item.href}`
                return (
                  <li key={item.href}>
                    <Link
                      href={`${basePath}/${item.href}`}
                      className={`block px-4 py-2 rounded-md ${
                        isActive ? "bg-[#3aa756] text-white" : "text-gray-700 hover:bg-gray-200 hover:text-[#3aa756]"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop view */}
      <div className="hidden md:block">
        <nav className="p-0">
          <ul className="space-y-0">
            {items.map((item) => {
              const isActive = pathname === `${basePath}/${item.href}`
              return (
                <li key={item.href} className="border-b border-gray-200 last:border-b-0">
                  <Link
                    href={`${basePath}/${item.href}`}
                    className={`block px-4 py-3 transition-colors ${
                      isActive
                        ? "bg-[#3aa756] text-white border-l-4 border-[#2d8444]"
                        : "text-gray-700 hover:bg-gray-200 hover:text-[#3aa756] border-l-4 border-transparent"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}
