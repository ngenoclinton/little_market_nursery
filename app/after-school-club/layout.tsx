import type React from "react"
import type { Metadata } from "next"
import AfterSchoolClubBreadcrumb from "@/components/AfterSchoolClubBreadcrumb"
import AfterSchoolClubNavigation from "@/components/AfterSchoolClubNavigation"

export const metadata: Metadata = {
  title: "After School Club | Little Market Nursery",
  description: "Learn about our After School Club services, activities, and holiday programs.",
}

export default function AfterSchoolClubLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <AfterSchoolClubBreadcrumb />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <AfterSchoolClubNavigation />
        </div>

        <div className="md:col-span-3">{children}</div>
      </div>
    </div>
  )
}
