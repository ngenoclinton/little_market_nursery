"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, FileText, Download, Loader2 } from "lucide-react"
import { initEmailJS, sendFormData, EMAIL_TEMPLATES } from "@/lib/afterschool/emailjs"
import { useToast } from "@/hooks/use-toast"

export default function RegisterClientPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeTab, setActiveTab] = useState("after-school")
  const { toast } = useToast()

  const [afterSchoolFormData, setAfterSchoolFormData] = useState({
    childFirstName: "",
    childLastName: "",
    childDob: "",
    childSchool: "",
    childClass: "",
    parentFirstName: "",
    parentLastName: "",
    parentRelationship: "",
    parentEmail: "",
    parentPhone: "",
    parentAddress: "",
    location: "concordia",
    days: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
    },
    startDate: "",
    medical: "",
    additionalInfo: "",
    terms: false,
    photoConsent: false,
    privacy: false,
  })

  const [holidayFormData, setHolidayFormData] = useState({
    childFirstName: "",
    childLastName: "",
    childDob: "",
    childSchool: "",
    parentFirstName: "",
    parentLastName: "",
    parentEmail: "",
    parentPhone: "",
    location: "concordia",
    holidayPeriod: "",
    days: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
    },
    sessionType: "full-day",
    medical: "",
    terms: false,
    photoConsent: false,
    privacy: false,
  })

  useEffect(() => {
    // Initialize EmailJS when component mounts
    initEmailJS()
  }, [])

  const handleAfterSchoolInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type, checked } = e.target as HTMLInputElement

    if (type === "checkbox") {
      if (
        id.startsWith("monday") ||
        id.startsWith("tuesday") ||
        id.startsWith("wednesday") ||
        id.startsWith("thursday") ||
        id.startsWith("friday")
      ) {
        setAfterSchoolFormData((prev) => ({
          ...prev,
          days: {
            ...prev.days,
            [id]: checked,
          },
        }))
      } else {
        setAfterSchoolFormData((prev) => ({
          ...prev,
          [id]: checked,
        }))
      }
    } else {
      setAfterSchoolFormData((prev) => ({
        ...prev,
        [id]: value,
      }))
    }
  }

  const handleHolidayInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type, checked } = e.target as HTMLInputElement

    if (type === "checkbox") {
      if (
        id.startsWith("hc-monday") ||
        id.startsWith("hc-tuesday") ||
        id.startsWith("hc-wednesday") ||
        id.startsWith("hc-thursday") ||
        id.startsWith("hc-friday")
      ) {
        const dayKey = id.replace("hc-", "")
        setHolidayFormData((prev) => ({
          ...prev,
          days: {
            ...prev.days,
            [dayKey]: checked,
          },
        }))
      } else {
        const fieldName = id.replace("hc-", "")
        setHolidayFormData((prev) => ({
          ...prev,
          [fieldName]: checked,
        }))
      }
    } else {
      const fieldName = id.replace("hc-", "")
      setHolidayFormData((prev) => ({
        ...prev,
        [fieldName]: value,
      }))
    }
  }

  const handleAfterSchoolSelectChange = (id: string, value: string) => {
    setAfterSchoolFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleHolidaySelectChange = (id: string, value: string) => {
    const fieldName = id.replace("hc-", "")
    setHolidayFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      let emailData

      if (activeTab === "after-school") {
        // Format the days for email
        const selectedDays = Object.entries(afterSchoolFormData.days)
          .filter(([_, selected]) => selected)
          .map(([day]) => day.charAt(0).toUpperCase() + day.slice(1))
          .join(", ")

        emailData = {
          form_type: "After School Club Registration",
          child_first_name: afterSchoolFormData.childFirstName,
          child_last_name: afterSchoolFormData.childLastName,
          child_dob: afterSchoolFormData.childDob,
          child_school: afterSchoolFormData.childSchool,
          child_class: afterSchoolFormData.childClass,
          parent_first_name: afterSchoolFormData.parentFirstName,
          parent_last_name: afterSchoolFormData.parentLastName,
          parent_relationship: afterSchoolFormData.parentRelationship,
          parent_email: afterSchoolFormData.parentEmail,
          parent_phone: afterSchoolFormData.parentPhone,
          parent_address: afterSchoolFormData.parentAddress,
          location: afterSchoolFormData.location === "concordia" ? "Concordia Academy" : "Wykeham Hall",
          days_required: selectedDays || "None selected",
          start_date: afterSchoolFormData.startDate,
          medical_info: afterSchoolFormData.medical || "None provided",
          additional_info: afterSchoolFormData.additionalInfo || "None provided",
          photo_consent: afterSchoolFormData.photoConsent ? "Yes" : "No",
        }
      } else {
        // Format the days for email
        const selectedDays = Object.entries(holidayFormData.days)
          .filter(([_, selected]) => selected)
          .map(([day]) => day.charAt(0).toUpperCase() + day.slice(1))
          .join(", ")

        let sessionTypeText
        switch (holidayFormData.sessionType) {
          case "full-day":
            sessionTypeText = "Full Day (8:00 AM - 6:00 PM)"
            break
          case "morning":
            sessionTypeText = "Morning Only (8:00 AM - 1:00 PM)"
            break
          case "afternoon":
            sessionTypeText = "Afternoon Only (1:00 PM - 6:00 PM)"
            break
          default:
            sessionTypeText = holidayFormData.sessionType
        }

        emailData = {
          form_type: "Holiday Club Registration",
          child_first_name: holidayFormData.childFirstName,
          child_last_name: holidayFormData.childLastName,
          child_dob: holidayFormData.childDob,
          child_school: holidayFormData.childSchool,
          parent_first_name: holidayFormData.parentFirstName,
          parent_last_name: holidayFormData.parentLastName,
          parent_email: holidayFormData.parentEmail,
          parent_phone: holidayFormData.parentPhone,
          location: holidayFormData.location === "concordia" ? "Concordia Academy" : "Wykeham Hall",
          holiday_period: holidayFormData.holidayPeriod,
          days_required: selectedDays || "None selected",
          session_type: sessionTypeText
        }
      }

      const result = await sendFormData(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string, emailData)

      if (result.success) {
        setFormSubmitted(true)
        toast({
          title: "Registration Submitted",
          description: "Your registration has been sent successfully.",
        })
      } else {
        toast({
          title: "Submission Failed",
          description: "There was a problem sending your registration. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast({
        title: "Submission Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
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

      <Tabs defaultValue="after-school" className="w-full mb-8" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="after-school">After School Club</TabsTrigger>
          <TabsTrigger value="holiday">Holiday Club</TabsTrigger>
        </TabsList>

        <TabsContent value="after-school" className="mt-6">
          <Card>
            <CardHeader className="bg-[#3aa756] text-white">
              <CardTitle>After School Club Registration</CardTitle>
              <CardDescription className="text-white/80">
                All fields marked with an asterisk (*) are required
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#3aa756]">Child's Information</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="childFirstName">First Name *</Label>
                      <Input
                        id="childFirstName"
                        value={afterSchoolFormData.childFirstName}
                        onChange={handleAfterSchoolInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="childLastName">Last Name *</Label>
                      <Input
                        id="childLastName"
                        value={afterSchoolFormData.childLastName}
                        onChange={handleAfterSchoolInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="childDob">Date of Birth *</Label>
                      <Input
                        id="childDob"
                        type="date"
                        value={afterSchoolFormData.childDob}
                        onChange={handleAfterSchoolInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="childSchool">School *</Label>
                      <Input
                        id="childSchool"
                        value={afterSchoolFormData.childSchool}
                        onChange={handleAfterSchoolInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="childClass">Class/Year Group *</Label>
                      <Input
                        id="childClass"
                        value={afterSchoolFormData.childClass}
                        onChange={handleAfterSchoolInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#3aa756]">Parent/Guardian Information</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="parentFirstName">First Name *</Label>
                      <Input
                        id="parentFirstName"
                        value={afterSchoolFormData.parentFirstName}
                        onChange={handleAfterSchoolInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="parentLastName">Last Name *</Label>
                      <Input
                        id="parentLastName"
                        value={afterSchoolFormData.parentLastName}
                        onChange={handleAfterSchoolInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="parentRelationship">Relationship to Child *</Label>
                      <Input
                        id="parentRelationship"
                        value={afterSchoolFormData.parentRelationship}
                        onChange={handleAfterSchoolInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="parentEmail">Email Address *</Label>
                      <Input
                        id="parentEmail"
                        type="email"
                        value={afterSchoolFormData.parentEmail}
                        onChange={handleAfterSchoolInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="parentPhone">Phone Number *</Label>
                      <Input
                        id="parentPhone"
                        type="tel"
                        value={afterSchoolFormData.parentPhone}
                        onChange={handleAfterSchoolInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="parentAddress">Home Address *</Label>
                      <Input
                        id="parentAddress"
                        value={afterSchoolFormData.parentAddress}
                        onChange={handleAfterSchoolInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#3aa756]">Session Requirements</h3>

                  <div className="space-y-2">
                    <Label>Preferred Location *</Label>
                    <RadioGroup
                      defaultValue="concordia"
                      value={afterSchoolFormData.location}
                      onValueChange={(value) => handleAfterSchoolSelectChange("location", value)}
                      required
                    >
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
                        <input
                          type="checkbox"
                          id="monday"
                          className="rounded text-[#3aa756]"
                          checked={afterSchoolFormData.days.monday}
                          onChange={handleAfterSchoolInputChange}
                        />
                        <Label htmlFor="monday">Monday</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="tuesday"
                          className="rounded text-[#3aa756]"
                          checked={afterSchoolFormData.days.tuesday}
                          onChange={handleAfterSchoolInputChange}
                        />
                        <Label htmlFor="tuesday">Tuesday</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="wednesday"
                          className="rounded text-[#3aa756]"
                          checked={afterSchoolFormData.days.wednesday}
                          onChange={handleAfterSchoolInputChange}
                        />
                        <Label htmlFor="wednesday">Wednesday</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="thursday"
                          className="rounded text-[#3aa756]"
                          checked={afterSchoolFormData.days.thursday}
                          onChange={handleAfterSchoolInputChange}
                        />
                        <Label htmlFor="thursday">Thursday</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="friday"
                          className="rounded text-[#3aa756]"
                          checked={afterSchoolFormData.days.friday}
                          onChange={handleAfterSchoolInputChange}
                        />
                        <Label htmlFor="friday">Friday</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="startDate">Requested Start Date *</Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={afterSchoolFormData.startDate}
                      onChange={handleAfterSchoolInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#3aa756]">Additional Information</h3>

                  <div className="space-y-2">
                    <Label htmlFor="medical">Medical Conditions or Allergies</Label>
                    <Textarea
                      id="medical"
                      placeholder="Please provide details of any medical conditions, allergies, or dietary requirements"
                      value={afterSchoolFormData.medical}
                      onChange={handleAfterSchoolInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea
                      id="additionalInfo"
                      placeholder="Please provide any other information that you think would be helpful for us to know"
                      value={afterSchoolFormData.additionalInfo}
                      onChange={handleAfterSchoolInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#3aa756]">Agreements</h3>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="rounded text-[#3aa756]"
                      checked={afterSchoolFormData.terms}
                      onChange={handleAfterSchoolInputChange}
                      required
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the terms and conditions of the After School Club *
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="photoConsent"
                      className="rounded text-[#3aa756]"
                      checked={afterSchoolFormData.photoConsent}
                      onChange={handleAfterSchoolInputChange}
                    />
                    <Label htmlFor="photoConsent" className="text-sm">
                      I give permission for photographs of my child to be taken for use within the club and for
                      promotional purposes
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="rounded text-[#3aa756]"
                      checked={afterSchoolFormData.privacy}
                      onChange={handleAfterSchoolInputChange}
                      required
                    />
                    <Label htmlFor="privacy" className="text-sm">
                      I consent to Little Market After School Club storing and processing my data in accordance with the
                      Privacy Policy *
                    </Label>
                  </div>
                </div>

                <Button type="submit" className="bg-[#3aa756] hover:bg-[#2d8444] text-white" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Registration"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="holiday" className="mt-6">
          <Card>
            <CardHeader className="bg-[#3aa756] text-white">
              <CardTitle>Holiday Club Registration</CardTitle>
              <CardDescription className="text-white/80">
                All fields marked with an asterisk (*) are required
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#3aa756]">Child's Information</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="hc-childFirstName">First Name *</Label>
                      <Input
                        id="hc-childFirstName"
                        value={holidayFormData.childFirstName}
                        onChange={handleHolidayInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hc-childLastName">Last Name *</Label>
                      <Input
                        id="hc-childLastName"
                        value={holidayFormData.childLastName}
                        onChange={handleHolidayInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hc-childDob">Date of Birth *</Label>
                      <Input
                        id="hc-childDob"
                        type="date"
                        value={holidayFormData.childDob}
                        onChange={handleHolidayInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hc-childSchool">School *</Label>
                      <Input
                        id="hc-childSchool"
                        value={holidayFormData.childSchool}
                        onChange={handleHolidayInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#3aa756]">Parent/Guardian Information</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="hc-parentFirstName">First Name *</Label>
                      <Input
                        id="hc-parentFirstName"
                        value={holidayFormData.parentFirstName}
                        onChange={handleHolidayInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hc-parentLastName">Last Name *</Label>
                      <Input
                        id="hc-parentLastName"
                        value={holidayFormData.parentLastName}
                        onChange={handleHolidayInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hc-parentEmail">Email Address *</Label>
                      <Input
                        id="hc-parentEmail"
                        type="email"
                        value={holidayFormData.parentEmail}
                        onChange={handleHolidayInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hc-parentPhone">Phone Number *</Label>
                      <Input
                        id="hc-parentPhone"
                        type="tel"
                        value={holidayFormData.parentPhone}
                        onChange={handleHolidayInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#3aa756]">Holiday Club Requirements</h3>

                  <div className="space-y-2">
                    <Label>Preferred Location *</Label>
                    <RadioGroup
                      defaultValue="concordia"
                      value={holidayFormData.location}
                      onValueChange={(value) => handleHolidaySelectChange("hc-location", value)}
                      required
                    >
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
                    <Label htmlFor="holidayPeriod">Holiday Period *</Label>
                    <Select
                      required
                      value={holidayFormData.holidayPeriod}
                      onValueChange={(value) => handleHolidaySelectChange("hc-holidayPeriod", value)}
                    >
                      <SelectTrigger id="holidayPeriod">
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
                        <input
                          type="checkbox"
                          id="hc-monday"
                          className="rounded text-[#3aa756]"
                          checked={holidayFormData.days.monday}
                          onChange={handleHolidayInputChange}
                        />
                        <Label htmlFor="hc-monday">Monday</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="hc-tuesday"
                          className="rounded text-[#3aa756]"
                          checked={holidayFormData.days.tuesday}
                          onChange={handleHolidayInputChange}
                        />
                        <Label htmlFor="hc-tuesday">Tuesday</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="hc-wednesday"
                          className="rounded text-[#3aa756]"
                          checked={holidayFormData.days.wednesday}
                          onChange={handleHolidayInputChange}
                        />
                        <Label htmlFor="hc-wednesday">Wednesday</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="hc-thursday"
                          className="rounded text-[#3aa756]"
                          checked={holidayFormData.days.thursday}
                          onChange={handleHolidayInputChange}
                        />
                        <Label htmlFor="hc-thursday">Thursday</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="hc-friday"
                          className="rounded text-[#3aa756]"
                          checked={holidayFormData.days.friday}
                          onChange={handleHolidayInputChange}
                        />
                        <Label htmlFor="hc-friday">Friday</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Session Type *</Label>
                    <RadioGroup
                      defaultValue="full-day"
                      value={holidayFormData.sessionType}
                      onValueChange={(value) => handleHolidaySelectChange("hc-sessionType", value)}
                      required
                    >
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
                      value={holidayFormData.medical}
                      onChange={handleHolidayInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#3aa756]">Agreements</h3>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="hc-terms"
                      className="rounded text-[#3aa756]"
                      checked={holidayFormData.terms}
                      onChange={handleHolidayInputChange}
                      required
                    />
                    <Label htmlFor="hc-terms" className="text-sm">
                      I agree to the terms and conditions of the Holiday Club *
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="hc-photoConsent"
                      className="rounded text-[#3aa756]"
                      checked={holidayFormData.photoConsent}
                      onChange={handleHolidayInputChange}
                    />
                    <Label htmlFor="hc-photoConsent" className="text-sm">
                      I give permission for photographs of my child to be taken for use within the club and for
                      promotional purposes
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="hc-privacy"
                      className="rounded text-[#3aa756]"
                      checked={holidayFormData.privacy}
                      onChange={handleHolidayInputChange}
                      required
                    />
                    <Label htmlFor="hc-privacy" className="text-sm">
                      I consent to Little Market After School Club storing and processing my data in accordance with the
                      Privacy Policy *
                    </Label>
                  </div>
                </div>

                <Button type="submit" className="bg-[#3aa756] hover:bg-[#2d8444] text-white" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Registration"
                  )}
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
