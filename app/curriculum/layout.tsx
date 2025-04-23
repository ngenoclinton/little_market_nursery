import Breadcrumb from "@/components/breadcrump"
import SideNavigation from "@/components/SideNavigation/SideNavigation"
import type { ReactNode } from "react"
const curriculumNavItems = [
  { title: "Our Approach", href: "our-approach" },
  { title: "0–2 Years (Babies)", href: "babies" },
  { title: "2–3 Years (Toddlers)", href: "toddlers" },
  { title: "3–5 Years (Preschoolers)", href: "preschoolers" },
  { title: "After School Club", href: "after-school-club" },
  { title: "Learning Tools", href: "learning-tools" },
  { title: "Assessments", href: "assessments" },
  { title: "Learning Support", href: "learning-support" },
  { title: "Extra Activities", href: "extra-activities" },
]

export default function CurriculumLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <SideNavigation items={curriculumNavItems} basePath="/curriculum" title="Curriculum" />
          </div>

          <div className="md:col-span-3">
            <div className="bg-white p-6 rounded-lg">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
