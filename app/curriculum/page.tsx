import { redirect } from "next/navigation"

export default function CurriculumPage() {
  // Redirect to the first sub-page
  redirect("/curriculum/our-approach")
}
