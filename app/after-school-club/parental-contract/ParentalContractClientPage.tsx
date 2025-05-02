"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FileText, Upload, Download, CheckCircle, AlertCircle, Mail, Phone } from "lucide-react"

export default function ParentalContractClientPage() {
  const [file, setFile] = useState<File | null>(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]

    if (selectedFile) {
      // Check if file is a PDF
      if (selectedFile.type !== "application/pdf") {
        setError("Please upload a PDF file only")
        setFile(null)
        return
      }

      // Check file size (max 5MB)
      if (selectedFile.size > 5 * 1024 * 1024) {
        setError("File size exceeds 5MB limit")
        setFile(null)
        return
      }

      setError(null)
      setFile(selectedFile)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!file) {
      setError("Please select a file to upload")
      return
    }

    // In a real application, you would handle the file upload here
    // For this example, we'll just show a success message
    setFormSubmitted(true)
  }

  if (formSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="bg-[#3aa756] text-white">
          <CardTitle className="text-xl">Contract Uploaded</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center p-6">
            <CheckCircle className="h-16 w-16 text-[#3aa756] mb-4" />
            <h2 className="text-2xl font-bold text-[#3aa756] mb-2">Thank You!</h2>
            <p className="text-lg mb-4">
              Your parental contract has been uploaded successfully. Our team will review it and contact you if any
              additional information is needed.
            </p>
            <p className="text-gray-600 mb-6">
              You will receive a confirmation email shortly with a copy of your uploaded contract.
            </p>
            <Link href="/after-school-club">
              <Button className="bg-[#3aa756] hover:bg-[#2d8444] text-white">Return to After School Club</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Parental Contract</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="prose max-w-none mb-6">
            <p className="text-lg">
              To enroll your child in our After School Club, we require a completed and signed parental contract. This
              document outlines our terms and conditions, your responsibilities, and important information about our
              services.
            </p>
            <p>Please follow these steps to complete the registration process:</p>
            <ol>
              <li>Download the parental contract using the link below</li>
              <li>Fill out all required information and sign the document</li>
              <li>Upload the completed contract using the form below, or bring it to our office in person</li>
            </ol>
            <p>
              Once we receive your completed contract, our team will review it and contact you to confirm your child's
              place at the After School Club.
            </p>
          </div>

          <Card className="py-0">
            <CardHeader className="bg-[#3aa756] text-white text-lg md:text-xl lg:text-2xl p-4">
              <CardTitle>Upload Completed Contract</CardTitle>
              <CardDescription className="text-white/80">
                Please upload your completed and signed parental contract (PDF format only)
              </CardDescription>
            </CardHeader>
            <CardContent className="py-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="parent-name">Parent/Guardian Name *</Label>
                    <Input id="parent-name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="child-name">Child's Name *</Label>
                    <Input id="child-name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file-upload">Upload Contract (PDF only) *</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                    <Input id="file-upload" type="file" accept=".pdf" onChange={handleFileChange} className="hidden" />
                    <Label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center justify-center">
                      <Upload className="h-10 w-10 text-gray-400 mb-2" />
                      <span className="text-sm font-medium text-gray-700">
                        {file ? file.name : "Click to select a file"}
                      </span>
                      <span className="text-xs text-gray-500 mt-1">PDF only, max 5MB</span>
                    </Label>
                  </div>
                  {error && (
                    <div className="text-red-500 text-sm flex items-center mt-2">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {error}
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="consent" className="rounded text-[#3aa756]" required />
                  <Label htmlFor="consent" className="text-sm">
                    I confirm that all information provided in the contract is accurate and complete *
                  </Label>
                </div>

                <Button type="submit" className="bg-[#3aa756] hover:bg-[#2d8444] text-white">
                  Upload Contract
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="py-0">
            <CardHeader className="bg-[#3aa756] text-white text-lg md:text-xl lg:text-2xl p-4">
              <CardTitle>Download Contract</CardTitle>
            </CardHeader>
            <CardContent className="py-6">
              <p className="mb-4 text-sm">
                Please download, complete, and sign the parental contract before uploading it.
              </p>
              <Link href="/documents/after-school-club-contract.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="w-full border-[#3aa756] text-[#3aa756] hover:bg-[#3aa756] hover:text-white"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Contract
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="py-0">
            <CardHeader className="bg-[#3aa756] text-white text-lg md:text-xl lg:text-2xl p-4">
              <CardTitle>Alternative Options</CardTitle>
            </CardHeader>
            <CardContent className="py-6">
              <p className="mb-4 text-sm">If you prefer not to upload your contract online, you can:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <FileText className="h-4 w-4 mr-2 mt-0.5 text-[#3aa756]" />
                  <span>Bring the completed contract to our office in person</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-4 w-4 mr-2 mt-0.5 text-[#3aa756]" />
                  <span>Email the scanned contract to admin@littlemarketschoolclub.co.uk</span>
                </li>
                <li className="flex items-start">
                  <Phone className="h-4 w-4 mr-2 mt-0.5 text-[#3aa756]" />
                  <span>Call us at 01708 729186 if you need assistance</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="py-0">
            <CardHeader className="bg-[#3aa756] text-white text-lg md:text-xl p-4">
              <CardTitle>Important Information</CardTitle>
            </CardHeader>
            <CardContent className="py-6">
              <p className="mb-4 text-sm">The parental contract includes important information about:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-[#3aa756]" />
                  <span>Terms and conditions of our service</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-[#3aa756]" />
                  <span>Fee structure and payment terms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-[#3aa756]" />
                  <span>Collection arrangements and authorized persons</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-[#3aa756]" />
                  <span>Medical information and emergency contacts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-[#3aa756]" />
                  <span>Consent for photographs and outings</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
