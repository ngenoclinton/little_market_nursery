"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ImageModalProps {
  src: string
  alt: string
  caption?: string
  index?: number
  totalImages?: number
  onPrevious?: () => void
  onNext?: () => void
}

export default function ImageModal({ src, alt, caption, index, totalImages, onPrevious, onNext }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
      if (e.key === "ArrowLeft" && onPrevious) onPrevious()
      if (e.key === "ArrowRight" && onNext) onNext()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onPrevious, onNext])

  return (
    <>
      <div className="cursor-pointer" onClick={openModal}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {caption && (
          <div className="p-4">
            <p className="text-gray-700 text-sm">{caption}</p>
          </div>
        )}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl w-full bg-transparent rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 z-10 bg-white rounded-full p-1 shadow-md"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {onPrevious && (
              <button
                onClick={onPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {onNext && (
              <button
                onClick={onNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            )}

            <div className="relative h-[70vh]">
              <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-contain" />
            </div>

            <div className="p-4 bg-white bg-opacity-80 absolute bottom-0 left-0 right-0">
              {caption && <p className="text-gray-800 font-medium">{caption}</p>}
              {totalImages && (
                <p className="text-gray-600 text-sm mt-1">
                  Image {(index || 0) + 1} of {totalImages}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
