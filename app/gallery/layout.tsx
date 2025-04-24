import Breadcrumb from "@/components/breadcrump"
import SideNavigation from "@/components/SideNavigation/SideNavigation"
import type { ReactNode } from "react"

const galleryNavItems = [
  { title: "Baby Gallery", href: "baby-gallery" },
  { title: "Pre-School Gallery", href: "pre-school-gallery" },
  { title: "Tots Gallery", href: "tots-gallery" },
  { title: "Activity Gallery", href: "activity-gallery" },
]

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="sticky top-[180px]">
              <SideNavigation items={galleryNavItems} basePath="/gallery" title="Galleries" />
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="bg-white p-6 rounded-lg">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
