"use client"

import type React from "react"

import { useState } from "react"
import FormInput from "@/components/form-input"

export default function ArrangeVisitPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    childName: "",
    childAge: "",
    additionalInfo: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      name: "",
      phone: "",
      email: "",
      childName: "",
      childAge: "",
      additionalInfo: "",
    })
  }

  return (
    <div>
      <div className="bg-[#3aa756] text-white py-6 px-8 rounded-t-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Arrange a Visit</h1>
        <div className="w-full max-w-md mx-auto h-1 bg-white opacity-30 mb-4"></div>
        <p className="text-center">
          Please complete the form below
          <br />
          and we will contact you to confirm a time for your visit.
        </p>
      </div>

      {isSubmitted ? (
        <div className="bg-white p-8 rounded-b-lg shadow-md">
          <div className="text-center">
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
            <h2 className="text-2xl font-bold text-[#3aa756] mb-2">Thank You!</h2>
            <p className="text-gray-600 mb-6">
              Your visit request has been submitted successfully. We will contact you shortly to confirm a time for your
              visit.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2 bg-[#3aa756] text-white rounded-md hover:bg-[#2d8444] transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-b-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-6">
            <FormInput id="name" label="Your name" icon="user" required value={formData.name} onChange={handleChange} />
            <FormInput
              id="phone"
              label="Your phone"
              type="tel"
              icon="phone"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <FormInput
            id="email"
            label="Your e-mail"
            type="email"
            icon="mail"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <div className="grid md:grid-cols-2 gap-6">
            <FormInput
              id="childName"
              label="Child's name"
              icon="child"
              value={formData.childName}
              onChange={handleChange}
            />
            <FormInput
              id="childAge"
              label="Child's age"
              icon="calendar"
              value={formData.childAge}
              onChange={handleChange}
            />
          </div>

          <FormInput
            id="additionalInfo"
            label="Any Additional Information"
            icon="edit"
            textarea
            value={formData.additionalInfo}
            onChange={handleChange}
          />

          <div className="mt-6 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-[#df2020] text-white rounded-md hover:bg-[#c51c1c] transition-colors disabled:opacity-70"
            >
              {isSubmitting ? "SENDING..." : "SEND"}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
