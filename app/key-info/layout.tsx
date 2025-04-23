import Breadcrumb from "@/components/breadcrump"
import SideNavigation from "@/components/SideNavigation/SideNavigation"
import type { ReactNode } from "react"

const keyInfoNavItems = [
  { title: "Admissions", href: "admissions" },
  { title: "Calendar", href: "calendar" },
  { title: "Fees & Funding", href: "fees-and-funding" },
  { title: "Meals & Menu", href: "meals-and-menu" },
  { title: "Transport", href: "transport" },
  { title: "Parent Partnership", href: "parent-partnership" },
]

export default function KeyInfoLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="sticky top-[180px]">
              <SideNavigation items={keyInfoNavItems} basePath="/key-info" title="Key Information" />
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
