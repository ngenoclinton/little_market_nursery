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
    src: "/galleries/nursery-images/activities/IMG_1622.webp",
    alt: "Tot 4",
    caption: "A curious discovering new things.",
  },
  {
    src: "/galleries/nursery-images/activities/IMG_1623.webp",
    alt: "Tot 5",
    caption: "A joyful sharing a moment.",
  },
  {
    src: "/galleries/nursery-images/activities/IMG_1624.webp",
    alt: "Tot 6",
    caption: "A sweet having fun.",
  },
  {
    src: "/galleries/nursery-images/activities/IMG_1627.webp",
    alt: "Children gardening",
    caption: "Our gardening activities teach children about nature and where food comes from",
  },
  {
    src: "/galleries/nursery-images/activities/IMG_1632.webp",
    alt: "Sports day activities",
    caption: "Sports day encourages physical development and teamwork",
  },
  {
    src: "/galleries/nursery-images/activities/IMG_1634.webp",
    alt: "Children during cooking activities",
    caption: "Cooking activities develop measuring skills and understanding of nutrition",
  },
  {
    src: "/galleries/nursery-images/activities/IMG_1644.webp",
    alt: "Cultural celebration activities",
    caption: "Cultural celebrations help children learn about diversity and traditions",
  },
  {
    src: "/galleries/nursery-images/activities/IMG_1718.webp",
    alt: "Children during forest school",
    caption: "Forest school provides opportunities for outdoor learning and risk assessment",
  },
  {
    src: "/galleries/nursery-images/activities/IMG_1719.webp",
    alt: "Children during art exhibition",
    caption: "Our art exhibitions showcase children's creativity and self-expression",
  },
  {
    src: "/galleries/nursery-images/activities/IMG_1720.webp",
    alt: "Science week activities",
    caption: "Science week encourages curiosity and scientific thinking",
  },
  {
    src: "/galleries/nursery-images/activities/IMG_1721.webp",
    alt: "Children during community visits",
    caption: "Community visits help children understand their local environment",
  },
  {
    src: "/galleries/nursery-images/activities/IMG_1722.webp",
    alt: "Children during special visitors",
    caption: "Special visitors provide insights into different occupations and skills",
  },

  {
    src: "/galleries/nursery-images/activities/IMG_1723.webp",
    alt: "Children during community visits",
    caption: "Community visits help children understand their local environment",
  },
  {
    src: "/galleries/nursery-images/activities/IMG_1876.webp",
    alt: "Children during special visitors",
    caption: "Special visitors provide insights into different occupations and skills",
  }, 
  {
    src: "/galleries/nursery-images/activities/IMG_1877.webp",
    alt: "Children during community visits",
    caption: "Community visits help children understand their local environment",
  },
  {
    src: "/galleries/nursery-images/activities/IMG_1878.webp",
    alt: "Children during special visitors",
    caption: "Special visitors provide insights into different occupations and skills",
  },

  {
    src: "/galleries/nursery-images/activities/IMG_3447.webp",
    alt: "Tot 4",
    caption: "A curious discovering new things.",
  },
  {
    src: "/galleries/nursery-images/activities/IMG_3449.webp",
    alt: "Tot 5",
    caption: "A joyful sharing a moment.",
  },
  {
    src: "/galleries/nursery-images/activities/IMG_3456.webp",
    alt: "Tot 6",
    caption: "A sweet having fun.",
  },
  {
    src: "/galleries/nursery-images/activities/IMG_3534.webp",
    alt: "Children gardening",
    caption: "Our gardening activities teach children about nature and where food comes from",
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

      {/* <GalleryFilter categories={categories} images={activityGalleryImages} onFilter={setFilteredImages} /> */}

      <GalleryGrid images={filteredImages} />
    </div>
  )
}
