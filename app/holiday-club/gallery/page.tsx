"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function HolidayClubGalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Sample gallery images
  const galleryImages = [
    {
      src: "/galleries/school-club-images/holiday-club/holiday5.jpg",
      alt: "Children at Adventure Island",
      caption: "Fun day at Adventure Island",
    },
    {
      src: "/galleries/school-club-images/holiday-club/holiday4.jpg",
      alt: "Zoo trip",
      caption: "Our trip to Colchester Zoo",
    },
    {
      src: "/galleries/school-club-images/holiday-club/holiday3.jpg",
      alt: "Arts and crafts",
      caption: "Creative arts and crafts session",
    },
    {
      src: "/galleries/school-club-images/holiday-club/holiday2.jpg",
      alt: "Sports day",
      caption: "Sports activities in the park",
    },
    {
      src: "/galleries/school-club-images/club-activities/IMG_3545.jpg",
      alt: "Swimming",
      caption: "Swimming session at the local pool",
    },
    {
      src: "/galleries/school-club-images/club-activities/IMG_3546.jpg",
      alt: "Cooking class",
      caption: "Learning to make healthy snacks",
    },
    {
      src: "/galleries/school-club-images/club-activities/IMG_3547.jpg",
      alt: "Museum visit",
      caption: "Educational trip to the museum",
    },
    {
      src: "/galleries/school-club-images/club-activities/IMG_3564.jpg",
      alt: "Nature walk",
      caption: "Exploring nature in the local park",
    },
  ]

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1))
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!lightboxOpen) return
    if (e.key === "ArrowLeft") goToPrevious()
    if (e.key === "ArrowRight") goToNext()
    if (e.key === "Escape") closeLightbox()
  }

  return (
    <div className="container mx-auto px-4 pb-12 md:pt-[100px] bg-[#ffffff]" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="flex items-center mb-8">
        <Link href="/holiday-club" className="text-[#3aa756] hover:text-[#2d8444] mr-4">
          ← Back to Holiday Club
        </Link>
        <h1 className="text-3xl font-bold text-[#3aa756]">Holiday Club Gallery</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => openLightbox(index)}
          >
            <div className="relative h-48 sm:h-40 md:h-48 lg:h-40 xl:h-48">
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            </div>
            <div className="p-4">
              <p className="text-gray-700 text-sm">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              closeLightbox()
            }}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-1 shadow-md"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          <div
            className="relative max-w-5xl w-full bg-transparent rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[70vh]">
              <Image
                src={galleryImages[currentImageIndex].src || "/placeholder.svg"}
                alt={galleryImages[currentImageIndex].alt}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-4 bg-white bg-opacity-80 absolute bottom-0 left-0 right-0">
              <p className="text-gray-800 font-medium">{galleryImages[currentImageIndex].caption}</p>
              <p className="text-gray-600 text-sm mt-1">
                Image {currentImageIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
