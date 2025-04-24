"use client"

import GalleryFilter from "@/components/gallery-filter"
import GalleryGrid, { GalleryImage } from "@/components/gallery-grid"
import { useState } from "react"
// import GalleryGrid from "@/components/gallery-grid"
// import GalleryFilter from "@/components/gallery-filter"
// import type { GalleryImage } from "@/components/gallery-grid"

// Sample gallery images for activities
const activityGalleryImages: GalleryImage[] = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Children gardening",
    caption: "Our gardening activities teach children about nature and where food comes from",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Sports day activities",
    caption: "Sports day encourages physical development and teamwork",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Children during cooking activities",
    caption: "Cooking activities develop measuring skills and understanding of nutrition",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Cultural celebration activities",
    caption: "Cultural celebrations help children learn about diversity and traditions",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Children during forest school",
    caption: "Forest school provides opportunities for outdoor learning and risk assessment",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Children during art exhibition",
    caption: "Our art exhibitions showcase children's creativity and self-expression",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Science week activities",
    caption: "Science week encourages curiosity and scientific thinking",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Children during community visits",
    caption: "Community visits help children understand their local environment",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Children during special visitors",
    caption: "Special visitors provide insights into different occupations and skills",
  },
]

// Categories for filtering
const categories = ["Gardening", "Sports", "Cooking", "Cultural", "Forest School", "Art", "Science", "Community"]

export default function ActivityGalleryPage() {
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(activityGalleryImages)

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Activity Gallery</h1>

      <div className="prose max-w-none mb-8">
        <p className="text-lg">
          Throughout the year, we organize a wide range of special activities and events for children of all ages. These
          activities enrich our curriculum and provide unique learning experiences. Here you can see some highlights
          from our nursery events and activities.
        </p>
      </div>

      <GalleryFilter categories={categories} images={activityGalleryImages} onFilter={setFilteredImages} />

      <GalleryGrid images={filteredImages} />
    </div>
  )
}
