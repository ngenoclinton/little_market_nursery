import { redirect } from "next/navigation"

export default function ContactPage() {
  // Redirect to the first contact page
  redirect("/contact/arrange-visit")
}
