import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Download, ExternalLink } from "lucide-react"

export const metadata = {
  title: "Our Prospectus | After School Club | Little Market Nursery",
  description: "Download our After School Club prospectus to learn more about our services, activities, and approach.",
}

export default function OurProspectusPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Our Prospectus</h1>

      <div className="bg-[#fcb900]/10 p-6 rounded-lg border border-[#fcb900] mb-8">
        <h2 className="text-xl font-semibold text-[#3aa756] mb-4">About Our Prospectus</h2>
        <p>
          Our After School Club prospectus provides comprehensive information about our services, including our
          approach, activities, facilities, and practical details for parents. It's designed to give you a complete
          overview of what we offer and how we can support your family's needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="md:col-span-2">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-[#3aa756] mt-6">What's Inside</h2>
            <ul>
              <li>Welcome message and our philosophy</li>
              <li>Information about our team and qualifications</li>
              <li>Details of our daily routines and activities</li>
              <li>Our approach to supporting children's development</li>
              <li>Practical information about sessions, fees, and booking</li>
              <li>Testimonials from parents and children</li>
              <li>Frequently asked questions</li>
              <li>Registration process and contact details</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#3aa756] mt-6">How to Use the Prospectus</h2>
            <p>
              Our prospectus is designed to give you a comprehensive overview of our After School Club. It's a great
              starting point for parents considering our services, but we also encourage you to:
            </p>
            <ul>
              <li>Arrange a visit to see our facilities in person</li>
              <li>Speak to our staff about any specific questions</li>
              <li>Talk to current parents about their experiences</li>
            </ul>
            <p>We update our prospectus annually to ensure all information is current and accurate.</p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/files/little-market-nursery-prospectus.pdf" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#3aa756] hover:bg-[#2d8444] text-white w-full sm:w-auto">
                <Download className="h-4 w-4 mr-2" />
                Download Prospectus
              </Button>
            </Link>
            <Link href="/after-school-club/arrange-visit">
              <Button
                variant="outline"
                className="border-[#3aa756] text-[#3aa756] hover:bg-[#3aa756] hover:text-white w-full sm:w-auto"
              >
                Arrange a Visit
              </Button>
            </Link>
          </div>
        </div>

        <div className="">
          <Card className="overflow-hidden py-0">
            <div className="relative h-80 w-full">
              <Image
                src="/prospectus.png"
                alt="After School Club Prospectus Cover"
                fill
                className="object-contain"
              />
            </div>
            <CardContent className="p-4 bg-[#3aa756] text-white text-center">
              <p className="font-semibold">2023-2024 Prospectus</p>
            </CardContent>
          </Card>

          <div className="mt-6 bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-[#3aa756] mb-2 flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Also Available
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/documents/after-school-club-registration-form.pdf"
                  className="text-[#3aa756] hover:underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Registration Form
                </Link>
              </li>
              <li>
                <Link
                  href="/documents/after-school-club-parent-handbook.pdf"
                  className="text-[#3aa756] hover:underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Parent Handbook
                </Link>
              </li>
              <li>
                <Link
                  href="/documents/after-school-club-term-dates.pdf"
                  className="text-[#3aa756] hover:underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Term Dates
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#df2020]/10 p-6 rounded-lg border border-[#df2020]">
        <h2 className="text-2xl font-semibold text-[#3aa756] mb-4 flex items-center">
          <FileText className="h-6 w-6 mr-2 text-[#df2020]" />
          Read Online
        </h2>
        <p className="mb-4">
          If you prefer to read our prospectus online without downloading, you can view it directly in your browser.
        </p>
        <Link href="/files/little-market-nursery-prospectus.pdf" className="inline-block">
          <Button className="bg-[#df2020] hover:bg-[#c01010] text-white">
            <ExternalLink className="h-4 w-4 mr-2" />
            View Prospectus Online
          </Button>
        </Link>
      </div>
    </div>
  )
}
