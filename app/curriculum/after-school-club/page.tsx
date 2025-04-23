import Link from "next/link"
import Image from "next/image"

export default function AfterSchoolClubPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">After School Club (5–11 Years)</h1>

      <div className="prose max-w-none">
        <div className="bg-[#df2020]/12 bg-opacity-10 p-6 rounded-lg mb-8 border-l-4 border-[#df2020]">
          <h2 className="text-2xl font-bold text-[#df2020] mb-2">School Club</h2>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="bg-[#3aa756] text-white px-4 py-2 rounded-md">
              <span className="font-bold">Age Group:</span> Five Years to Eleven Years
            </div>
            <div className="bg-[#3aa756] text-white px-4 py-2 rounded-md">
              <span className="font-bold">Staff Ratio:</span> 1 - 10
            </div>
          </div>
        </div>

        <p className="mb-4">
          Our After School Club provides a safe, fun, and enriching environment for school-age children. We offer a
          range of activities designed to complement their school day and provide opportunities for relaxation, play,
          and continued learning.
        </p>

        <p className="mb-4">
          Children can enjoy supervised homework support, arts and crafts, sports, games, and special interest clubs.
          Our experienced staff ensure that each child&apos;s individual needs and interests are catered to, while
          promoting social skills, independence, and confidence.
        </p>

        <p className="mb-4">
          We provide healthy snacks and refreshments, and work closely with parents and schools to ensure continuity of
          care. Transportation from local schools to our facility is available.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#3aa756] mb-2">Activities Include</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Homework support</li>
              <li>Arts and crafts</li>
              <li>Sports and outdoor games</li>
              <li>Reading corner</li>
              <li>Board games and puzzles</li>
              <li>Cooking club</li>
              <li>Science experiments</li>
              <li>Drama and music</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#3aa756] mb-2">Hours of Operation</h3>
            <p className="mb-2">
              <strong>After School:</strong> 3:00 PM - 6:00 PM (Monday to Friday during term time)
            </p>
            <p className="mb-2">
              <strong>Holiday Club:</strong> 8:00 AM - 6:00 PM (Monday to Friday during school holidays)
            </p>
            <p>
              <strong>Contact:</strong> 07495 190473 | admin@littlemarketschoolclub.co.uk
            </p>
          </div>
        </div>

        <div className="relative h-64 md:h-80 mb-8 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="After School Club activities"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex justify-center">
          <Link
            href="/gallery/after-school-club"
            className="inline-flex items-center px-6 py-3 bg-[#3aa756] text-white rounded-md hover:bg-[#2d8444] transition-colors"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </div>
  )
}
