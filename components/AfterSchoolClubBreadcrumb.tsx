"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"

export default function AfterSchoolClubBreadcrumb() {
  const pathname = usePathname()

  // Format the path segments for display
  const formatPathSegment = (segment: string) => {
    // Handle special cases
    if (segment === "after-school-club") return "After School Club"
    if (segment === "holiday-club") return "Holiday Club"

    // General formatting: replace hyphens with spaces and capitalize each word
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  // Generate breadcrumb items
  const generateBreadcrumbs = () => {
    const segments = pathname.split("/").filter(Boolean)

    return segments.map((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join("/")}`
      const isLast = index === segments.length - 1

      return {
        href,
        label: formatPathSegment(segment),
        isLast,
      }
    })
  }

  const breadcrumbs = generateBreadcrumbs()

  return (
    <nav className="flex items-center text-sm mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap">
        <li className="flex items-center">
          <Link href="/" className="text-gray-500 hover:text-[#3aa756]">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
        </li>

        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center">
            {breadcrumb.isLast ? (
              <span className="font-medium text-[#3aa756]">{breadcrumb.label}</span>
            ) : (
              <>
                <Link href={breadcrumb.href} className="text-gray-500 hover:text-[#3aa756]">
                  {breadcrumb.label}
                </Link>
                <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
