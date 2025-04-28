"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

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
    <section className="relative w-full min-h-screen flex flex-col">
      {/* Carousel */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ top: 0, bottom: 0, left: 0, right: 0 }}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.alt}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 flex-grow flex flex-col justify-center items-start">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Every Child Deserves The Best Possible Start!
          </h1>
          <p className="text-xl md:text-2xl mb-8">Nurturing young minds with care and creativity since 2011.</p>
          <Link
            href="curriculum/our-approach"
            className="inline-block px-8 py-4 bg-[#fcb900] hover:bg-[#e6a800] text-white font-medium rounded-full transition-colors duration-300"
          >
            Explore Our Curriculum
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
