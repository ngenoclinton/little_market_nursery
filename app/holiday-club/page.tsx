"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Download } from "lucide-react"

export default function HolidayClubPage() {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    childName: "",
    childAge: "",
    selectedDays: [] as string[],
    notes: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      selectedDays: checked ? [...prev.selectedDays, value] : prev.selectedDays.filter((day) => day !== value),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="container mx-auto px-4 pb-12 md:pt-[100px] bg-[#ffffff]">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Holiday Club</h1>
          <p className="text-lg mb-6">
            Little Market After School Club offers a holiday club predominately throughout the summer term situated at
            Concordia Academy.
          </p>
          <p className="text-lg mb-6">
            We provide the children with numerous activities and outings. To name a few, these are:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-8">
            <li>Southend Adventure Island</li>
            <li>Colchester Zoo</li>
            <li>Queen Elizabeth Park, Stratford</li>
            <li>Princess Diana Memorial Park, Hyde Park</li>
            <li>Splash Parks</li>
            <li>Snakes Alive (Live animal interaction)</li>
            <li>Paradise Wildlife Park</li>
            <li>Bowling</li>
            <li>Kidspace</li>
            <li>Museums</li>
            <li>Battersea Park Zoo</li>
            <li>Cinema</li>
          </ul>
        </div>
        <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/galleries/school-club-images/holiday-club/camp.png"
            alt="Holiday Club Promotional Image"
            fill
            className="object-cover"            
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold text-[#3aa756] mb-6">Book Your Child's Place</h2>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="inline-block p-2 rounded-full bg-[#3aa756] text-white mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#3aa756] mb-2">Booking Submitted!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for booking with Little Market Holiday Club. We will contact you shortly to confirm your child's
              place.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2 bg-[#3aa756] text-white rounded-md hover:bg-[#2d8444] transition-colors"
            >
              Make Another Booking
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <p className="text-gray-600 mb-4">
                Please fill out the form below to book your child's place at our Holiday Club. Alternatively, you can
                download the booking form and return it to us.
              </p>
              <div className="flex justify-end mb-4">
                <Link
                  href="#"
                  className="inline-flex items-center px-4 py-2 bg-[#df2020] text-white rounded-md hover:bg-[#c51c1c] transition-colors"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Booking Form
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1">
                  Parent Name <span className="text-[#df2020]">*</span>
                </label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3aa756] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone <span className="text-[#df2020]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3aa756] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-[#df2020]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3aa756] focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-1">
                  Child's Name <span className="text-[#df2020]">*</span>
                </label>
                <input
                  type="text"
                  id="childName"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3aa756] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-1">
                  Child's Age <span className="text-[#df2020]">*</span>
                </label>
                <input
                  type="text"
                  id="childAge"
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3aa756] focus:border-transparent"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Selected Days <span className="text-[#df2020]">*</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
                  <label key={day} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={day}
                      checked={formData.selectedDays.includes(day)}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-[#3aa756] focus:ring-[#3aa756]"
                    />
                    <span>{day}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                Notes / Additional Info
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3aa756] focus:border-transparent"
              ></textarea>
            </div>

            <div className="md:col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-[#df2020] text-white rounded-md hover:bg-[#c51c1c] transition-colors disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Submit Booking"}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#3aa756]">Gallery of Club Activities</h2>
          <Link href="/holiday-club/gallery" className="text-[#3aa756] hover:text-[#2d8444] font-medium">
            View All Photos →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="relative h-48 rounded-lg overflow-hidden shadow-md">
              <Image
                src={`/placeholder.svg?height=300&width=400&text=Holiday+Club+${index}`}
                alt={`Holiday Club Activity ${index}`}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div> */}

      <div className="bg-white p-8 rounded-lg shadow-md mb-12">
        <div className="flex items-center mb-6">
          <div className="h-8 w-2 bg-[#3aa756] mr-3"></div>
          <h2 className="text-2xl font-bold text-[#3aa756]">Services & Locations</h2>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold text-[#ff6900] mb-4">Wrap-around Care That Grows with Your Child</h3>
          <p className="text-lg mb-6">
            We operate popular Breakfast and After School Clubs from two convenient locations:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-[#3aa756]/10 bg-opacity-10 p-6 rounded-lg">
            <h4 className="text-lg font-bold text-[#3aa756] mb-3">➤ Wykeham Hall, Romford</h4>
            <ul className="space-y-2">
              <li className="flex items-baseline">
                <span className="font-medium mr-2">Breakfast Club:</span>
                <span>7:00am – School Start</span>
              </li>
              <li className="flex items-baseline">
                <span className="font-medium mr-2">After School Club:</span>
                <span>School End – 7:00pm</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#df2020]/10 bg-opacity-10 p-6 rounded-lg">
            <h4 className="text-lg font-bold text-[#df2020] mb-3">➤ Concordia Academy, Romford</h4>
            <ul className="space-y-2">
              <li className="flex items-baseline">
                <span className="font-medium mr-2">Breakfast Club:</span>
                <span>7:00am – School Start</span>
              </li>
              <li className="flex items-baseline">
                <span className="font-medium mr-2">After School Club:</span>
                <span>School End – 6:30pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#fcb900]/12 bg-opacity-10 p-6 rounded-lg border-l-4 border-[#fcb900]">
          <p className="text-lg">
            Children are safely collected from schools in the area and brought to Wykeham Hall unless they attend
            Concordia Academy, where they stay on-site.
          </p>
        </div>
      </div>
    </div>
  )
}
