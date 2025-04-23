import { redirect } from "next/navigation"

export default function KeyInfoPage() {
  // Redirect to the first sub-page
  redirect("/key-info/admissions")
}
