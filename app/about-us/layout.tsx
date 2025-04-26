import Breadcrumb from "@/components/breadcrump"
import SideNavigation from "@/components/SideNavigation/SideNavigation"
import type { ReactNode } from "react"

const aboutUsNavItems = [
  { title: "Our Story", href: "our-story" },
  { title: "Vision & Mission", href: "vision-mission" },
  { title: "Our Team", href: "our-team" },
  // { title: "Facilities", href: "facilities" },
  { title: "Board of Governors", href: "board-of-governors" },
  { title: "Our Prospectus", href: "our-prospectus" },
]

export default function AboutUsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      {/* <Breadcrumb/> */}

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <SideNavigation items={aboutUsNavItems} basePath="/about-us" />
          </div>

          <div className="md:col-span-3">
            <div className="bg-white p-6 rounded-lg">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
