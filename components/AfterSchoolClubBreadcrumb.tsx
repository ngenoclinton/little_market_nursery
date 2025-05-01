"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const AfterSchoolClubBreadcrumb = () => {
  const pathname = usePathname()

  if (!pathname) {
    return null
  }

  // Since we've already checked if pathname is null above, TypeScript should know it's not null here
  // But to be extra safe, we'll use the non-null assertion operator
  const segments = pathname!.split("/").filter(Boolean)

  const breadcrumbs = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`
    const isLast = index === segments.length - 1

    return (
      <React.Fragment key={segment}>
        {!isLast ? (
          <>
            <Link href={href} className="hover:underline">
              {segment.replace(/-/g, " ")}
            </Link>
            <span> / </span>
          </>
        ) : (
          <span>{segment.replace(/-/g, " ")}</span>
        )}
      </React.Fragment>
    )
  })

  return (
    <div className="text-sm">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      <span> / </span>
      {breadcrumbs}
    </div>
  )
}

export default AfterSchoolClubBreadcrumb
