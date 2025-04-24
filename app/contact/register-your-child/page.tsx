"use client"

import type React from "react"

import { useState } from "react"
import FormInput from "@/components/form-input"
import { User } from "lucide-react"

export default function RegisterYourChildPage() {
  const [formData, setFormData] = useState({
    // Child's Details
    childName: "",
    childDob: "",
    childGender: "",
    startDate: "",

    // Parent/Carer 1 Details
    parent1Name: "",
    parent1Relationship: "",
    parent1Email: "",
    parent1Phone: "",
    parent1Address: "",
    parent1Postcode: "",

    // Parent/Carer 2 Details
    parent2Name: "",
    parent2Relationship: "",
    parent2Email: "",
    parent2Phone: "",
    parent2Address: "",
    parent2Postcode: "",

    // Booking Pattern
    mondayPattern: "",
    tuesdayPattern: "",
    wednesdayPattern: "",
    thursdayPattern: "",
    fridayPattern: "",

    // Funding Options
    twoYearFunding: "",
    fifteenHoursFunding: "",
    thirtyHoursFunding: "",

    // Additional Info
    additionalInfo: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (day: string, value: string) => {
    setFormData((prev) => ({ ...prev, [`${day}Pattern`]: value }))
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
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Register Your Child</h1>

      {isSubmitted ? (
        <div className="bg-white p-8 rounded-lg shadow-md">
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
            <h2 className="text-2xl font-bold text-[#3aa756] mb-2">Registration Successful!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for registering your child with Little Market Nursery. We will review your application and
              contact you shortly.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  // Reset all form fields
                  childName: "",
                  childDob: "",
                  childGender: "",
                  startDate: "",
                  parent1Name: "",
                  parent1Relationship: "",
                  parent1Email: "",
                  parent1Phone: "",
                  parent1Address: "",
                  parent1Postcode: "",
                  parent2Name: "",
                  parent2Relationship: "",
                  parent2Email: "",
                  parent2Phone: "",
                  parent2Address: "",
                  parent2Postcode: "",
                  mondayPattern: "",
                  tuesdayPattern: "",
                  wednesdayPattern: "",
                  thursdayPattern: "",
                  fridayPattern: "",
                  twoYearFunding: "",
                  fifteenHoursFunding: "",
                  thirtyHoursFunding: "",
                  additionalInfo: "",
                })
              }}
              className="px-6 py-2 bg-[#3aa756] text-white rounded-md hover:bg-[#2d8444] transition-colors"
            >
              Register Another Child
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
          {/* Child's Details Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b">Child's Details</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <FormInput
                id="childName"
                label="Child's name"
                icon="child"
                required
                value={formData.childName}
                onChange={handleChange}
              />
              <FormInput
                id="childDob"
                label="Child's Date of Birth"
                type="date"
                icon="calendar"
                required
                value={formData.childDob}
                onChange={handleChange}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="mb-4">
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <span className="mr-2">
                    <User size={18} className="text-[#df2020]" />
                  </span>
                  Child's Gender
                  <span className="text-[#df2020] ml-1">*</span>
                </label>
                <div className="flex space-x-4 mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="childGender"
                      value="male"
                      checked={formData.childGender === "male"}
                      onChange={handleChange}
                      className="form-radio h-4 w-4 text-[#3aa756]"
                    />
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="childGender"
                      value="female"
                      checked={formData.childGender === "female"}
                      onChange={handleChange}
                      className="form-radio h-4 w-4 text-[#3aa756]"
                    />
                    <span className="ml-2">Female</span>
                  </label>
                </div>
              </div>
              <FormInput
                id="startDate"
                label="Potential Start Date"
                type="date"
                icon="calendar"
                required
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Parent/Carer 1 Details Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b">
              Parent/Carer 1 (Bill Payer) Details
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <FormInput
                id="parent1Name"
                label="Full name"
                icon="user"
                required
                value={formData.parent1Name}
                onChange={handleChange}
              />
              <FormInput
                id="parent1Relationship"
                label="Relationship to Child"
                icon="relationship"
                required
                value={formData.parent1Relationship}
                onChange={handleChange}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <FormInput
                id="parent1Email"
                label="Your e-mail"
                type="email"
                icon="mail"
                required
                value={formData.parent1Email}
                onChange={handleChange}
              />
              <FormInput
                id="parent1Phone"
                label="Your phone"
                type="tel"
                icon="phone"
                required
                value={formData.parent1Phone}
                onChange={handleChange}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <FormInput
                id="parent1Address"
                label="Your address"
                icon="map"
                required
                value={formData.parent1Address}
                onChange={handleChange}
              />
              <FormInput
                id="parent1Postcode"
                label="Your postcode"
                icon="map"
                required
                value={formData.parent1Postcode}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Parent/Carer 2 Details Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b">Parent/Carer 2 Details</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <FormInput
                id="parent2Name"
                label="Full name"
                icon="user"
                value={formData.parent2Name}
                onChange={handleChange}
              />
              <FormInput
                id="parent2Relationship"
                label="Relationship to Child"
                icon="relationship"
                value={formData.parent2Relationship}
                onChange={handleChange}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <FormInput
                id="parent2Email"
                label="Your e-mail"
                type="email"
                icon="mail"
                value={formData.parent2Email}
                onChange={handleChange}
              />
              <FormInput
                id="parent2Phone"
                label="Your phone"
                type="tel"
                icon="phone"
                value={formData.parent2Phone}
                onChange={handleChange}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <FormInput
                id="parent2Address"
                label="Your address"
                icon="map"
                value={formData.parent2Address}
                onChange={handleChange}
              />
              <FormInput
                id="parent2Postcode"
                label="Your postcode"
                icon="map"
                value={formData.parent2Postcode}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Booking Pattern Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b">Booking Pattern</h2>

            {/* Monday */}
            <div className="mb-4">
              <p className="font-medium mb-2">Monday:</p>
              <div className="flex space-x-6">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="mondayPattern"
                    value="Morning"
                    checked={formData.mondayPattern === "Morning"}
                    onChange={() => handleRadioChange("monday", "Morning")}
                    className="form-radio h-4 w-4 text-[#3aa756]"
                  />
                  <span className="ml-2">Morning</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="mondayPattern"
                    value="Afternoon"
                    checked={formData.mondayPattern === "Afternoon"}
                    onChange={() => handleRadioChange("monday", "Afternoon")}
                    className="form-radio h-4 w-4 text-[#3aa756]"
                  />
                  <span className="ml-2">Afternoon</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="mondayPattern"
                    value="Full Day"
                    checked={formData.mondayPattern === "Full Day"}
                    onChange={() => handleRadioChange("monday", "Full Day")}
                    className="form-radio h-4 w-4 text-[#3aa756]"
                  />
                  <span className="ml-2">Full Day</span>
                </label>
              </div>
            </div>

            {/* Tuesday */}
            <div className="mb-4">
              <p className="font-medium mb-2">Tuesday:</p>
              <div className="flex space-x-6">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="tuesdayPattern"
                    value="Morning"
                    checked={formData.tuesdayPattern === "Morning"}
                    onChange={() => handleRadioChange("tuesday", "Morning")}
                    className="form-radio h-4 w-4 text-[#3aa756]"
                  />
                  <span className="ml-2">Morning</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="tuesdayPattern"
                    value="Afternoon"
                    checked={formData.tuesdayPattern === "Afternoon"}
                    onChange={() => handleRadioChange("tuesday", "Afternoon")}
                    className="form-radio h-4 w-4 text-[#3aa756]"
                  />
                  <span className="ml-2">Afternoon</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="tuesdayPattern"
                    value="Full Day"
                    checked={formData.tuesdayPattern === "Full Day"}
                    onChange={() => handleRadioChange("tuesday", "Full Day")}
                    className="form-radio h-4 w-4 text-[#3aa756]"
                  />
                  <span className="ml-2">Full Day</span>
                </label>
              </div>
            </div>

            {/* Wednesday */}
            <div className="mb-4">
              <p className="font-medium mb-2">Wednesday:</p>
              <div className="flex space-x-6">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="wednesdayPattern"
                    value="Morning"
                    checked={formData.wednesdayPattern === "Morning"}
                    onChange={() => handleRadioChange("wednesday", "Morning")}
                    className="form-radio h-4 w-4 text-[#3aa756]"
                  />
                  <span className="ml-2">Morning</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="wednesdayPattern"
                    value="Afternoon"
                    checked={formData.wednesdayPattern === "Afternoon"}
                    onChange={() => handleRadioChange("wednesday", "Afternoon")}
                    className="form-radio h-4 w-4 text-[#3aa756]"
                  />
                  <span className="ml-2">Afternoon</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="wednesdayPattern"
                    value="Full Day"
                    checked={formData.wednesdayPattern === "Full Day"}
                    onChange={() => handleRadioChange("wednesday", "Full Day")}
                    className="form-radio h-4 w-4 text-[#3aa756]"
                  />
                  <span className="ml-2">Full Day</span>
                </label>
              </div>
            </div>

            {/* Thursday */}
            <div className="mb-4">
              <p className="font-medium mb-2">Thursday:</p>
              <div className="flex space-x-6">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="thursdayPattern"
                    value="Morning"
                    checked={formData.thursdayPattern === "Morning"}
                    onChange={() => handleRadioChange("thursday", "Morning")}
                    className="form-radio h-4 w-4 text-[#3aa756]"
                  />
                  <span className="ml-2">Morning</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="thursdayPattern"
                    value="Afternoon"
                    checked={formData.thursdayPattern === "Afternoon"}
                    onChange={() => handleRadioChange("thursday", "Afternoon")}
                    className="form-radio h-4 w-4 text-[#3aa756]"
                  />
                  <span className="ml-2">Afternoon</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="thursdayPattern"
                    value="Full Day"
                    checked={formData.thursdayPattern === "Full Day"}
                    onChange={() => handleRadioChange("thursday", "Full Day")}
                    className="form-radio h-4 w-4 text-[#3aa756]"
                  />
                  <span className="ml-2">Full Day</span>
                </label>
              </div>
            </div>

            {/* Friday */}
            <div className="mb-4">
              <p className="font-medium mb-2">Friday:</p>
              <div className="flex space-x-6">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="fridayPattern"
                    value="Morning"
                    checked={formData.fridayPattern === "Morning"}
                    onChange={() => handleRadioChange("friday", "Morning")}
                    className="form-radio h-4 w-4 text-[#3aa756]"
                  />
                  <span className="ml-2">Morning</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="fridayPattern"
                    value="Afternoon"
                    checked={formData.fridayPattern === "Afternoon"}
                    onChange={() => handleRadioChange("friday", "Afternoon")}
                    className="form-radio h-4 w-4 text-[#3aa756]"
                  />
                  <span className="ml-2">Afternoon</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="fridayPattern"
                    value="Full Day"
                    checked={formData.fridayPattern === "Full Day"}
                    onChange={() => handleRadioChange("friday", "Full Day")}
                    className="form-radio h-4 w-4 text-[#3aa756]"
                  />
                  <span className="ml-2">Full Day</span>
                </label>
              </div>
            </div>
          </div>

          {/* Funding Options Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b">Funding Options</h2>
            <FormInput
              id="twoYearFunding"
              label="2 Year Funding - Add EY Funding Number"
              icon="calendar"
              value={formData.twoYearFunding}
              onChange={handleChange}
            />
            <FormInput
              id="fifteenHoursFunding"
              label="15 Hours Funding - Enter 10 digit code"
              icon="calendar"
              value={formData.fifteenHoursFunding}
              onChange={handleChange}
            />
            <FormInput
              id="thirtyHoursFunding"
              label="30 Hours Funding - Enter 10 digit code"
              icon="calendar"
              value={formData.thirtyHoursFunding}
              onChange={handleChange}
            />
          </div>

          {/* More Info Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b">More info</h2>
            <FormInput
              id="additionalInfo"
              label="Any Additional Information"
              icon="edit"
              textarea
              rows={5}
              value={formData.additionalInfo}
              onChange={handleChange}
            />
          </div>

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
