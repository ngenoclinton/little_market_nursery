import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "After School Club | Little Market Nursery",
  description: "Our After School Club provides a safe, fun, and enriching environment for children after school hours.",
}

export default function AfterSchoolClubPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">After School Club</h1>

      <div className="prose max-w-none">
        <div className="bg-[#3aa756]/10 bg-opacity-10 p-6 rounded-lg mb-8 border-l-4 border-[#3aa756]">
          <h2 className="text-2xl font-bold text-[#3aa756] mb-2">Welcome to Little Market After School Club</h2>
          <p className="text-gray-950">
            Our After School Club provides a safe, fun, and enriching environment for children after school hours. We
            offer a variety of activities designed to support children's development, including homework help, sports,
            arts and crafts, and more.
          </p>
        </div>

        <div className="relative h-64 md:h-80 mb-8 rounded-lg overflow-hidden">
          <Image
            src="/galleries/school-club-images/holiday-club/holiday5.jpg"
            alt="Children enjoying after school activities"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Our Services</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#3aa756] mb-3">After School Care</h3>
            <p className="mb-4">
              We provide care for children aged 4-11 years after school hours until 6:30pm. Our program includes a
              healthy snack, supervised homework time, and a variety of engaging activities.
            </p>
            <Link href="/after-school-club/activities" className="text-[#3aa756] font-medium hover:underline">
              Learn more about our activities →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#3aa756] mb-3">Holiday Club</h3>
            <p className="mb-4">
              During school holidays, we offer full-day care with exciting themed activities, field trips, and special
              events to keep children engaged and entertained.
            </p>
            <Link href="/after-school-club/holiday-club" className="text-[#3aa756] font-medium hover:underline">
              Explore our Holiday Club →
            </Link>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Why Choose Us?</h2>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Qualified and experienced staff</li>
          <li>Safe and secure environment</li>
          <li>Diverse range of activities</li>
          <li>Healthy snacks provided</li>
          <li>Homework support</li>
          <li>Flexible booking options</li>
          <li>Affordable rates</li>
          <li>Convenient location</li>
        </ul>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Opening Hours</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-[#3aa756] mb-2">After School Club</h3>
              <p>Monday to Friday: 3:00 PM - 6:30 PM</p>
            </div>
            <div>
              <h3 className="font-bold text-[#3aa756] mb-2">Holiday Club</h3>
              <p>Monday to Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-sm text-gray-600">(During school holidays)</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/after-school-club/registration"
            className="px-6 py-3 bg-[#3aa756] text-white font-medium rounded-md hover:bg-[#2d8444] transition-colors text-center"
          >
            Register Your Child
          </Link>
          <Link
            href="/after-school-club/contact"
            className="px-6 py-3 bg-white border border-[#3aa756] text-[#3aa756] font-medium rounded-md hover:bg-gray-50 transition-colors text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
