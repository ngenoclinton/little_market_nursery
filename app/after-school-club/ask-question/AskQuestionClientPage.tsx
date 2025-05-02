"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Phone, Mail } from "lucide-react"


export default function AskQuestionClientPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    // For this example, we'll just show a success message
    setFormSubmitted(true)
  }

  const faqs = [
    {
      question: "What are your opening hours?",
      answer:
        "Our After School Club operates from the end of the school day (typically 3:00-3:30 PM depending on the school) until 6:00 PM, Monday to Friday during term time. Our Holiday Club runs from 8:00 AM to 6:00 PM during school holidays.",
    },
    {
      question: "How do you transport children from school to the club?",
      answer:
        "We have dedicated staff who collect children from local partner schools. They wear identifiable uniforms and carry ID. For schools within walking distance, children are walked to our facilities. For schools further away, we use our minibus service which is fully insured and meets all safety requirements.",
    },
    {
      question: "What food do you provide?",
      answer:
        "We provide a healthy, balanced snack when children arrive at the club, typically including fresh fruit, vegetables, and a carbohydrate option like crackers or bread sticks. Water and milk are always available. For children staying later, we offer a light tea. All dietary requirements and allergies are catered for.",
    },
    {
      question: "How do I book sessions?",
      answer:
        "You can book regular sessions for the term or ad-hoc sessions (subject to availability) through our online booking system or by contacting the After School Club directly. We recommend booking regular sessions in advance to secure your place.",
    },
    {
      question: "What happens if I'm late collecting my child?",
      answer:
        "We understand that occasional delays are unavoidable. Please call us as soon as possible if you're running late. A late fee may apply for collections after 6:00 PM to cover additional staffing costs.",
    },
  ]

  if (formSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="bg-[#3aa756] text-white">
          <CardTitle className="text-xl">Question Submitted</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center p-6">
            <CheckCircle className="h-16 w-16 text-[#3aa756] mb-4" />
            <h2 className="text-2xl font-bold text-[#3aa756] mb-2">Thank You!</h2>
            <p className="text-lg mb-4">
              Your question has been submitted successfully. A member of our team will respond to your inquiry within 2
              working days.
            </p>
            <p className="text-gray-600">If you need an immediate response, please call us directly at 01708 729186.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Ask A Question</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="md:col-span-2">
          <div className="prose max-w-none mb-6">
            <p className="text-lg">
              Have a question about our After School Club? We're here to help! Check our frequently asked questions
              below, or fill out the form to get in touch with our team directly.
            </p>
          </div>

          <Card className="py-0">
            <CardHeader className="bg-[#3aa756] text-white text-lg md:text-xl lg:text-2xl p-4">
              <CardTitle>Contact Form</CardTitle>
              <CardDescription className="text-white/80">
                All fields marked with an asterisk (*) are required
              </CardDescription>
            </CardHeader>
            <CardContent className="py-4">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input id="name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="topic">Topic *</Label>
                    <Select required>
                      <SelectTrigger id="topic">
                        <SelectValue placeholder="Select topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="registration">Registration</SelectItem>
                        <SelectItem value="fees">Fees and Payments</SelectItem>
                        <SelectItem value="activities">Activities and Schedule</SelectItem>
                        <SelectItem value="holiday-club">Holiday Club</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="question">Your Question *</Label>
                  <Textarea
                    id="question"
                    placeholder="Please provide as much detail as possible so we can best assist you"
                    className="min-h-[150px]"
                    required
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
                  Submit Question
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="py-0">
            <CardHeader className="bg-[#3aa756] text-white text-lg md:text-xl lg:text-2xl p-4">
              <CardTitle>Contact Us Directly</CardTitle>
            </CardHeader>
            <CardContent className="py-6 px-2">
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

          <Card className="py-0">
            <CardHeader className="bg-[#3aa756] text-white text-lg md:text-xl lg:text-2xl p-4">
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="py-5">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-600">
                  Can't find the answer you're looking for? Please submit your question using the form, and we'll get
                  back to you as soon as possible.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
