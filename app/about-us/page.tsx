import { redirect } from "next/navigation"

export default function AboutUsPage() {
  // Redirect to the first sub-page
  redirect("/about-us/our-story")
}
