import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Activities | After School Club | Little Market Nursery",
  description: "Explore the range of activities offered at our After School Club.",
}

export default function ActivitiesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Our Activities</h1>

      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          At our After School Club, we offer a wide range of engaging and educational activities designed to support
          children's development, interests, and well-being. Our balanced program ensures that children have
          opportunities for both structured and free play, allowing them to learn, explore, and have fun.
        </p>

        <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Daily Schedule</h2>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h3 className="text-xl font-bold text-[#3aa756] mb-4">Typical After School Club Schedule</h3>

          <div className="space-y-4">
            <div className="flex">
              <div className="w-24 font-medium">3:00 - 3:30</div>
              <div>
                <p className="font-medium">Arrival & Registration</p>
                <p className="text-sm text-gray-600">Children arrive from school, register, and settle in</p>
              </div>
            </div>

            <div className="flex">
              <div className="w-24 font-medium">3:30 - 4:00</div>
              <div>
                <p className="font-medium">Snack Time</p>
                <p className="text-sm text-gray-600">Healthy snacks and refreshments</p>
              </div>
            </div>

            <div className="flex">
              <div className="w-24 font-medium">4:00 - 4:45</div>
              <div>
                <p className="font-medium">Homework Support</p>
                <p className="text-sm text-gray-600">Quiet time for homework with staff assistance</p>
              </div>
            </div>

            <div className="flex">
              <div className="w-24 font-medium">4:45 - 5:45</div>
              <div>
                <p className="font-medium">Activity Time</p>
                <p className="text-sm text-gray-600">Structured activities or free play options</p>
              </div>
            </div>

            <div className="flex">
              <div className="w-24 font-medium">5:45 - 6:30</div>
              <div>
                <p className="font-medium">Wind Down & Collection</p>
                <p className="text-sm text-gray-600">Quiet activities as parents arrive for collection</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Activity Categories</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/galleries/school-club-images/club-activities/IMG_3716.jpg"
                alt="Sports and Physical Activities"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#3aa756] mb-2">Sports & Physical Activities</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Team sports (football, basketball, cricket)</li>
                <li>Outdoor games and playground activities</li>
                <li>Dance and movement sessions</li>
                <li>Yoga and mindfulness</li>
              </ul>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/galleries/school-club-images/club-activities/IMG_3610.jpg"
                alt="Arts and Crafts"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#3aa756] mb-2">Arts & Crafts</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Drawing and painting</li>
                <li>Seasonal craft projects</li>
                <li>Clay modeling and sculpture</li>
                <li>Recycled materials crafts</li>
              </ul>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/galleries/school-club-images/club-activities/IMG_3583.jpg"
                alt="STEM Activities"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#3aa756] mb-2">STEM Activities</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Science experiments</li>
                <li>Building and construction challenges</li>
                <li>Coding and technology projects</li>
                <li>Math games and puzzles</li>
              </ul>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/galleries/school-club-images/club-activities  /IMG_3609.jpg"
                alt="Performing Arts"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#3aa756] mb-2">Performing Arts</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Drama and role play</li>
                <li>Music and singing</li>
                <li>Puppet shows</li>
                <li>Talent shows and performances</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Special Events</h2>

        <p className="mb-4">
          Throughout the year, we organize special events and themed days to add excitement to our program:
        </p>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Seasonal celebrations</li>
          <li>Cultural awareness days</li>
          <li>Sports tournaments</li>
          <li>Art exhibitions</li>
          <li>Community service projects</li>
          <li>Cooking competitions</li>
          <li>Movie nights</li>
          <li>Special guest visitors</li>
        </ul>

        <div className="bg-[#3aa756]/10 bg-opacity-10 p-6 rounded-lg border-l-4 border-[#3aa756]">
          <h3 className="text-xl font-bold text-[#3aa756] mb-2">Activity Planning</h3>
          <p className="text-gray-900">
            Our activities are carefully planned to ensure they are age-appropriate, inclusive, and aligned with
            children's interests and developmental needs. We regularly seek feedback from children and parents to
            continually improve and expand our activity offerings.
          </p>
        </div>
      </div>
    </div>
  )
}
