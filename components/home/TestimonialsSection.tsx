"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Parent",
    quote:
      "Kid's Promising Tomorrow has been a wonderful second home for my daughter. The teachers are caring and attentive, and the curriculum is engaging and educational. I've seen tremendous growth in her confidence and skills.",
    image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=740",
  },
  {
    id: 2,
    name: "Michael Thompson",
    role: "Parent",
    quote:
      "We couldn't be happier with our decision to enroll our son at Kid's Promising Tomorrow. The staff creates such a positive and nurturing environment. Our son is always excited to go to school and comes home full of stories about what he learned.",
    image: "https://img.freepik.com/free-photo/young-beautiful-woman-smiling-posing-purple-wall_176420-2852.jpg?w=740",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Parent",
    quote:
      "The individualized attention my twins receive at Kid's Promising Tomorrow is remarkable. The teachers truly understand each child's unique needs and learning style. I've recommended this school to all my friends with young children.",
    image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=740",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-[#3aa756] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Parents Say</h2>
          <p className="max-w-3xl mx-auto">
            Hear from our community of parents about their experiences with Kid&apos;s Promising Tomorrow.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-lg">
            <Quote className="h-16 w-16 text-white/30 mb-6" />

            <div className="mb-8">
              <p className="text-lg md:text-xl italic mb-6">"{testimonials[currentIndex].quote}"</p>
              <div className="flex items-center">
                <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonials[currentIndex].name}</h4>
                  <p className="text-white/80">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-white w-8" : "bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-[#3aa756] h-12 w-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white text-[#3aa756] h-12 w-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
