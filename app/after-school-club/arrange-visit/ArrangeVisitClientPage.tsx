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
import { Calendar, Clock, MapPin, Phone, Mail, CheckCircle } from "lucide-react"

export default function ArrangeVisitClientPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    // For this example, we'll just show a success message
    setFormSubmitted(true)
  }

  if (formSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="bg-[#3aa756] text-white">
          <CardTitle className="text-xl">Visit Request Submitted</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center p-6">
            <CheckCircle className="h-16 w-16 text-[#3aa756] mb-4" />
            <h2 className="text-2xl font-bold text-[#3aa756] mb-2">Thank You!</h2>
            <p className="text-lg mb-4">
              Your visit request has been submitted successfully. A member of our team will contact you within 2 working
              days to confirm your visit.
            </p>
            <p className="text-gray-600">
              If you have any questions in the meantime, please don't hesitate to contact us directly.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Arrange A Visit</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="md:col-span-2">
          <div className="prose max-w-none mb-6">
            <p className="text-lg">
              We'd be delighted to show you around our After School Club facilities and introduce you to our team.
              Please complete the form below to request a visit, and we'll get back to you to confirm the arrangements.
            </p>
          </div>

          <Card className="py-0">
            <CardHeader className="bg-[#3aa756] text-white text-lg md:text-xl lg:text-2xl p-4">
              <CardTitle>Visit Request Form</CardTitle>
              <CardDescription className="text-white/80">
                All fields marked with an asterisk (*) are required
              </CardDescription>
            </CardHeader>
            <CardContent className="py-5">
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
                    <Label htmlFor="child-age">Child's Age *</Label>
                    <Select required>
                      <SelectTrigger id="child-age">
                        <SelectValue placeholder="Select age" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4">4 years</SelectItem>
                        <SelectItem value="5">5 years</SelectItem>
                        <SelectItem value="6">6 years</SelectItem>
                        <SelectItem value="7">7 years</SelectItem>
                        <SelectItem value="8">8 years</SelectItem>
                        <SelectItem value="9">9 years</SelectItem>
                        <SelectItem value="10">10 years</SelectItem>
                        <SelectItem value="11">11 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="school">Current/Prospective School *</Label>
                    <Input id="school" required />
                  </div>
                </div>

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
                  <Label>Preferred Visit Days (select all that apply) *</Label>
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
                  <Label>Preferred Visit Time *</Label>
                  <RadioGroup defaultValue="afternoon" required>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="afternoon" id="afternoon" />
                      <Label htmlFor="afternoon">Afternoon (3:30 PM - 4:30 PM)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="evening" id="evening" />
                      <Label htmlFor="evening">Evening (5:00 PM - 6:00 PM)</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    placeholder="Please let us know any specific questions or requirements you have for your visit"
                    className="min-h-[100px]"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="consent" className="rounded text-[#3aa756]" required />
                  <Label htmlFor="consent" className="text-sm">
                    I consent to Little Market After School Club storing and processing my data in accordance with the
                    Privacy Policy *
                  </Label>
                </div>

                <Button type="submit" className="bg-[#3aa756] hover:bg-[#2d8444] text-white">
                  Submit Visit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="py-0">
            <CardHeader className="bg-[#3aa756] text-white text-lg md:text-xl lg:text-2xl p-4">
              <CardTitle>Visit Information</CardTitle>
            </CardHeader>
            <CardContent className="py-5">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-2 text-[#3aa756] mt-0.5" />
                  <div>
                    <h3 className="font-medium">Visit Times</h3>
                    <p className="text-sm text-gray-600">Monday - Friday</p>
                    <p className="text-sm text-gray-600">Afternoon: 3:30 PM - 4:30 PM</p>
                    <p className="text-sm text-gray-600">Evening: 5:00 PM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="h-5 w-5 mr-2 text-[#3aa756] mt-0.5" />
                  <div>
                    <h3 className="font-medium">What to Expect</h3>
                    <p className="text-sm text-gray-600">Your visit will last approximately 30 minutes</p>
                    <p className="text-sm text-gray-600">You'll meet our staff and see our facilities</p>
                    <p className="text-sm text-gray-600">We'll answer any questions you have</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 text-[#3aa756] mt-0.5" />
                  <div>
                    <h3 className="font-medium">Locations</h3>
                    <p className="text-sm text-gray-600">Concordia Academy</p>
                    <p className="text-sm text-gray-600">Union Road, Romford, RM7 0HG</p>
                    <p className="text-sm text-gray-600 mt-2">Wykeham Hall</p>
                    <p className="text-sm text-gray-600">Market Place, Romford, RM1 3AB</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="py-0">
            <CardHeader className="bg-[#3aa756] text-white text-lg md:text-xl lg:text-2xl p-3">
              <CardTitle>Contact Us Directly</CardTitle>
            </CardHeader>
            <CardContent className="py-5 px-3">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-[#3aa756]" />
                  <p>01708 729186</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-[#3aa756]" />
                  <p>admin@littlemarketschoolclub.co.uk</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
