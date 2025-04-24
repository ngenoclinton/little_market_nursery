import { redirect } from "next/navigation"

export default function GalleryPage() {
  // Redirect to the first gallery
  redirect("/gallery/baby-gallery")
}
