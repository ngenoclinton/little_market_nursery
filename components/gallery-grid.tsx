"use client"

import { useState } from "react"
import ImageModal from "./image-modal"

export interface GalleryImage {
  src: string
  alt: string
  caption: string
}

interface GalleryGridProps {
  images: GalleryImage[]
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <div
          key={index}
          className="group overflow-hidden rounded-lg shadow-md border border-gray-200 transition-all duration-300 hover:shadow-xl"
        >
          <ImageModal
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            caption={image.caption}
            index={index}
            totalImages={images.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </div>
      ))}
    </div>
  )
}
