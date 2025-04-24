import Breadcrumb from "@/components/breadcrump"
import SideNavigation from "@/components/SideNavigation/SideNavigation"
import type { ReactNode } from "react"

const contactNavItems = [
  { title: "Arrange a Visit", href: "arrange-visit" },
  { title: "Ask A Question", href: "ask-question" },
  { title: "Register Your Child", href: "register-your-child" },
  { title: "Find Us", href: "find-us" },
]

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb/>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="sticky top-[180px]">
              <SideNavigation items={contactNavItems} basePath="/contact" title="Contact Us" />
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
