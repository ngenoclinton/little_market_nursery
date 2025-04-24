"use client"

import { useState } from "react"
import type { GalleryImage } from "./gallery-grid"

interface GalleryFilterProps {
  categories: string[]
  images: GalleryImage[]
  onFilter: (filteredImages: GalleryImage[]) => void
}

export default function GalleryFilter({ categories, images, onFilter }: GalleryFilterProps) {
  const [activeCategory, setActiveCategory] = useState("All")

  const handleFilter = (category: string) => {
    setActiveCategory(category)

    if (category === "All") {
      onFilter(images)
    } else {
      const filtered = images.filter((image) => image.caption.toLowerCase().includes(category.toLowerCase()))
      onFilter(filtered)
    }
  }

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-[#3aa756] mb-4">Filter by Activity</h2>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleFilter("All")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === "All" ? "bg-[#3aa756] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category ? "bg-[#3aa756] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
