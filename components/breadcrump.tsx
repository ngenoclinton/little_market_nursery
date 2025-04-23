"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"

export default function Breadcrumb() {
  const pathname = usePathname()

  if (pathname === "/") return null

  const pathSegments = pathname.split("/").filter(Boolean)

  return (
    <nav aria-label="Breadcrumb" className="py-2 px-4 bg-gray-50 text-sm">
      <ol className="flex items-center space-x-1">
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`
          const isLast = index === pathSegments.length - 1
          const formattedSegment = segment
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")

          return (
            <li key={href} className="flex items-center">
              {index > 0 && <ChevronRight size={14} className="mx-1 text-gray-400" />}
              {isLast ? (
                <span className="font-medium text-[#3aa756]">{formattedSegment}</span>
              ) : (
                <Link href={href} className="text-gray-500 hover:text-[#3aa756]">
                  {formattedSegment}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
