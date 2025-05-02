"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, FileText, Download } from "lucide-react"
import Link from "next/link"

// export const metadata = {
//   title: "Register Your Child | After School Club | Little Market Nursery",
//   description: "Register your child for our After School Club with our simple online form.",
// }

export default function RegisterPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    // For this example, we'll just show a success message
    setFormSubmitted(true)
  }

  if (formSubmitted) {
    return (
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="bg-[#3aa756] text-white">
          <CardTitle className="text-xl">Registration Submitted</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center p-6">
            <CheckCircle className="h-16 w-16 text-[#3aa756] mb-4" />
            <h2 className="text-2xl font-bold text-[#3aa756] mb-2">Thank You!</h2>
            <p className="text-lg mb-4">
              Your registration has been submitted successfully. A member of our team will contact you within 2 working
              days to confirm your child's place and discuss any questions you may have.
            </p>
            <p className="text-gray-600 mb-6">
              Please check your email for a confirmation of your registration details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/after-school-club/parental-contract">
                <Button className="bg-[#3aa756] hover:bg-[#2d8444] text-white w-full sm:w-auto">
                  <FileText className="h-4 w-4 mr-2" />
                  Complete Parental Contract
                </Button>
              </Link>
              <Link href="/after-school-club">
                <Button
                  variant="outline"
                  className="border-[#3aa756] text-[#3aa756] hover:bg-[#3aa756] hover:text-white w-full sm:w-auto"
                >
                  Return to After School Club
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Register Your Child</h1>

      <div className="prose max-w-none mb-8">
        <p className="text-lg">
          Thank you for your interest in our After School Club. Please complete the registration form below to secure
          your child's place. If you have any questions or need assistance, please don't hesitate to contact us.
        </p>
      </div>

      <Tabs defaultValue="after-school" className="w-full mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="after-school">After School Club</TabsTrigger>
          <TabsTrigger value="holiday">Holiday Club</TabsTrigger>
        </TabsList>

        <TabsContent value="after-school" className="mt-6">
          <Card className="py-0">
            <CardHeader className="bg-[#3aa756] text-white text-lg md:text-xl lg:text-2xl p-4">
              <CardTitle>After School Club Registration</CardTitle>
              <CardDescription className="text-white/80">
                All fields marked with an asterisk (*) are required
              </CardDescription>
            </CardHeader>
            <CardContent className="py-5">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#3aa756]">Child's Information</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="child-first-name">First Name *</Label>
                      <Input id="child-first-name" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="child-last-name">Last Name *</Label>
                      <Input id="child-last-name" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="child-dob">Date of Birth *</Label>
                      <Input id="child-dob" type="date" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="child-school">School *</Label>
                      <Input id="child-school" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="child-class">Class/Year Group *</Label>
                      <Input id="child-class" required />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#3aa756]">Parent/Guardian Information</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="parent-first-name">First Name *</Label>
                      <Input id="parent-first-name" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="parent-last-name">Last Name *</Label>
                      <Input id="parent-last-name" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="parent-relationship">Relationship to Child *</Label>
                      <Input id="parent-relationship" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="parent-email">Email Address *</Label>
                      <Input id="parent-email" type="email" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="parent-phone">Phone Number *</Label>
                      <Input id="parent-phone" type="tel" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="parent-address">Home Address *</Label>
                      <Input id="parent-address" required />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#3aa756]">Session Requirements</h3>

                  <div className="space-y-2">
                    <Label>Preferred Location *</Label>
                    <RadioGroup defaultValue="concordia" required>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="concordia" id="concordia" />
                        <Label htmlFor="concordia">Concordia Academy</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="wykeham" id="wykeham" />
                        <Label htmlFor="wykeham">Wykeham Hall</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label>Days Required (select all that apply) *</Label>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="monday" className="rounded text-[#3aa756]" />
                        <Label htmlFor="monday">Monday</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="tuesday" className="rounded text-[#3aa756]" />
                        <Label htmlFor="tuesday">Tuesday</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="wednesday" className="rounded text-[#3aa756]" />
                        <Label htmlFor="wednesday">Wednesday</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="thursday" className="rounded text-[#3aa756]" />
                        <Label htmlFor="thursday">Thursday</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="friday" className="rounded text-[#3aa756]" />
                        <Label htmlFor="friday">Friday</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="start-date">Requested Start Date *</Label>
                    <Input id="start-date" type="date" required />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#3aa756]">Additional Information</h3>

                  <div className="space-y-2">
                    <Label htmlFor="medical">Medical Conditions or Allergies</Label>
                    <Textarea
                      id="medical"
                      placeholder="Please provide details of any medical conditions, allergies, or dietary requirements"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additional-info">Additional Information</Label>
                    <Textarea
                      id="additional-info"
                      placeholder="Please provide any other information that you think would be helpful for us to know"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#3aa756]">Agreements</h3>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="terms" className="rounded text-[#3aa756]" required />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the terms and conditions of the After School Club *
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="photo-consent" className="rounded text-[#3aa756]" />
                    <Label htmlFor="photo-consent" className="text-sm">
                      I give permission for photographs of my child to be taken for use within the club and for
                      promotional purposes
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="privacy" className="rounded text-[#3aa756]" required />
                    <Label htmlFor="privacy" className="text-sm">
                      I consent to Little Market After School Club storing and processing my data in accordance with the
                      Privacy Policy *
                    </Label>
                  </div>
                </div>

                <Button type="submit" className="bg-[#3aa756] hover:bg-[#2d8444] text-white">
                  Submit Registration
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="holiday" className="mt-6">
          <Card className="py-0">
            <CardHeader className="bg-[#3aa756] text-white text-lg md:text-xl lg:text-2xl p-4">
              <CardTitle>Holiday Club Registration</CardTitle>
              <CardDescription className="text-white/80">
                All fields marked with an asterisk (*) are required
              </CardDescription>
            </CardHeader>
            <CardContent className="py-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#3aa756]">Child's Information</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="hc-child-first-name">First Name *</Label>
                      <Input id="hc-child-first-name" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hc-child-last-name">Last Name *</Label>
                      <Input id="hc-child-last-name" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hc-child-dob">Date of Birth *</Label>
                      <Input id="hc-child-dob" type="date" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hc-child-school">School *</Label>
                      <Input id="hc-child-school" required />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#3aa756]">Parent/Guardian Information</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="hc-parent-first-name">First Name *</Label>
                      <Input id="hc-parent-first-name" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hc-parent-last-name">Last Name *</Label>
                      <Input id="hc-parent-last-name" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hc-parent-email">Email Address *</Label>
                      <Input id="hc-parent-email" type="email" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hc-parent-phone">Phone Number *</Label>
                      <Input id="hc-parent-phone" type="tel" required />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#3aa756]">Holiday Club Requirements</h3>

                  <div className="space-y-2">
                    <Label>Preferred Location *</Label>
                    <RadioGroup defaultValue="concordia" required>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="concordia" id="hc-concordia" />
                        <Label htmlFor="hc-concordia">Concordia Academy</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="wykeham" id="hc-wykeham" />
                        <Label htmlFor="hc-wykeham">Wykeham Hall</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="holiday-period">Holiday Period *</Label>
                    <Select required>
                      <SelectTrigger id="holiday-period">
                        <SelectValue placeholder="Select holiday period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="october">October Half Term (23-27 Oct 2023)</SelectItem>
                        <SelectItem value="christmas">Christmas Holidays (18 Dec 2023 - 2 Jan 2024)</SelectItem>
                        <SelectItem value="february">February Half Term (12-16 Feb 2024)</SelectItem>
                        <SelectItem value="easter">Easter Holidays (1-12 Apr 2024)</SelectItem>
                        <SelectItem value="may">May Half Term (27-31 May 2024)</SelectItem>
                        <SelectItem value="summer">Summer Holidays (Jul-Aug 2024)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Days Required (select all that apply) *</Label>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="hc-monday" className="rounded text-[#3aa756]" />
                        <Label htmlFor="hc-monday">Monday</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="hc-tuesday" className="rounded text-[#3aa756]" />
                        <Label htmlFor="hc-tuesday">Tuesday</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="hc-wednesday" className="rounded text-[#3aa756]" />
                        <Label htmlFor="hc-wednesday">Wednesday</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="hc-thursday" className="rounded text-[#3aa756]" />
                        <Label htmlFor="hc-thursday">Thursday</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="hc-friday" className="rounded text-[#3aa756]" />
                        <Label htmlFor="hc-friday">Friday</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Session Type *</Label>
                    <RadioGroup defaultValue="full-day" required>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="full-day" id="full-day" />
                        <Label htmlFor="full-day">Full Day (8:00 AM - 6:00 PM)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="morning" id="morning" />
                        <Label htmlFor="morning">Morning Only (8:00 AM - 1:00 PM)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="afternoon" id="afternoon" />
                        <Label htmlFor="afternoon">Afternoon Only (1:00 PM - 6:00 PM)</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#3aa756]">Additional Information</h3>

                  <div className="space-y-2">
                    <Label htmlFor="hc-medical">Medical Conditions or Allergies</Label>
                    <Textarea
                      id="hc-medical"
                      placeholder="Please provide details of any medical conditions, allergies, or dietary requirements"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#3aa756]">Agreements</h3>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="hc-terms" className="rounded text-[#3aa756]" required />
                    <Label htmlFor="hc-terms" className="text-sm">
                      I agree to the terms and conditions of the Holiday Club *
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="hc-photo-consent" className="rounded text-[#3aa756]" />
                    <Label htmlFor="hc-photo-consent" className="text-sm">
                      I give permission for photographs of my child to be taken for use within the club and for
                      promotional purposes
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="hc-privacy" className="rounded text-[#3aa756]" required />
                    <Label htmlFor="hc-privacy" className="text-sm">
                      I consent to Little Market After School Club storing and processing my data in accordance with the
                      Privacy Policy *
                    </Label>
                  </div>
                </div>

                <Button type="submit" className="bg-[#3aa756] hover:bg-[#2d8444] text-white">
                  Submit Registration
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-[#3aa756]/10 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-[#3aa756] mb-4">Next Steps</h2>
        <p className="mb-4">
          After submitting your registration form, you will need to complete and return a parental contract. This can be
          done online or in person.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/after-school-club/parental-contract">
            <Button className="bg-[#3aa756] hover:bg-[#2d8444] text-white w-full sm:w-auto">
              <FileText className="h-4 w-4 mr-2" />
              Parental Contract
            </Button>
          </Link>
          <Link href="/documents/after-school-club-parent-handbook.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-[#3aa756] text-[#3aa756] hover:bg-[#3aa756] hover:text-white w-full sm:w-auto"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Parent Handbook
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
