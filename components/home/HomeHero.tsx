"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "https://img.freepik.com/free-photo/woman-teaching-kids-about-planets_23-2148925468.jpg?w=740",
    alt: "Happy children playing in classroom",
  },
  {
    id: 2,
    image: "https://img.freepik.com/free-photo/young-children-with-autism-playing-together_23-2151241968.jpg?w=740",
    alt: "Children engaged in creative activities",
  },
  {
    id: 3,
    image: "https://img.freepik.com/free-photo/happy-kids-elementary-school_53876-138141.jpg?w=740",
    alt: "Children learning in outdoor environment",
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/premium-photo/group-children-playing-with-wooden-blocks-wooden-train-background_763111-285634.jpg?w=740",
    alt: "Teacher reading to children",
  },
  {
    id: 5,
    image:
      "https://img.freepik.com/premium-photo/teacher-pupils-using-flower-shapes-montessori-school_1218270-4014.jpg?w=740",
    alt: "Children playing with educational toys",
  },
]

const HomeHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Carousel */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.alt}
            fill
            priority={index === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/1 bg-opacity-4" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start">
        <div className="max-w-2xl text-white pt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Kid&apos;s Promising Tomorrow Ahead</h1>
          <p className="text-xl md:text-2xl mb-8">Nurturing young minds with care and creativity.</p>
          <Link
            href="/curriculum"
            className="inline-block px-8 py-4 bg-[#3aa756] hover:bg-[#2d8444] text-white font-medium rounded-full transition-colors duration-300"
          >
            Explore Our Curriculum
          </Link>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white w-10" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>       
      </div>

       {/* Content Overlay */}
       {/* <div className="absolute bottom-0 left-0 right-0 z-20 bg-[#3aa756]/90 text-white">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold">Enabling Success for All</h2>
            <button className="bg-white bg-opacity-20 p-2 rounded-full">
              <ChevronDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default HomeHero
