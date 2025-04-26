import Link from "next/link"
import { FileText, Download } from "lucide-react"

export default function OurProspectusPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Our Prospectus</h1>

      <p className="text-lg mb-8">
        Our prospectus provides comprehensive information about Little Market Nursery, including our educational
        philosophy, curriculum, daily routines, and practical information for parents. Download our prospectus to learn
        more about what we offer and how we can support your child&apos;s early development.
      </p>

      <div className="bg-[#3aa756]/10 bg-opacity-10 p-8 rounded-lg border border-[#3aa756] mb-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
            <FileText size={100} className="text-[#3aa756]" />
          </div>
          <div className="md:w-3/4">
            <h2 className="text-2xl font-bold text-[#3aa756] mb-3">Little Market Nursery Prospectus 2025</h2>
            <p className="text-gray-700 mb-6">
              Our latest prospectus contains detailed information about our programs, facilities, staff, and enrollment
              procedures. It also includes testimonials from parents and answers to frequently asked questions.
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-6 py-3 bg-[#3aa756] text-white rounded-md hover:bg-[#2d8444] transition-colors"
            >
              <Download size={20} className="mr-2" />
              Download Prospectus (PDF)
            </Link>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-[#3aa756] mb-2">What&apos;s Inside Our Prospectus</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Detailed information about our educational approach and curriculum</li>
            <li>Overview of our daily routines and activities</li>
            <li>Introduction to our facilities and learning environments</li>
            <li>Staff qualifications and expertise</li>
            <li>Enrollment procedures and fee structure</li>
            <li>Policies on health, safety, and nutrition</li>
            <li>Parent involvement opportunities</li>
            <li>Testimonials from current and past families</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-[#3aa756] mb-2">Request a Physical Copy</h2>
          <p className="mb-4">
            If you prefer a physical copy of our prospectus, please contact our office. We would be happy to mail one to
            you or have one ready for pickup during your visit to our nursery.
          </p>
          <div className="text-[#3aa756]">
            <strong className="text-red-600">Contact:</strong> admin@littlemarketschoolclub.co.uk | <strong className="text-red-600">Phone:</strong> 01708 608434 | <strong className="text-red-600">Mobile:</strong> 07495 190473
          </div>
        </div>
      </div>
    </div>
  )
}
