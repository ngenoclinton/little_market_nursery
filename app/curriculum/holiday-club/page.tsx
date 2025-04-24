import Link from "next/link"
import Image from "next/image"

export default function CurriculumHolidayClubPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Holiday Club</h1>

      <div className="prose max-w-none">
        <div className="bg-[#3aa756] bg-opacity-10 p-6 rounded-lg mb-8 border-l-4 border-[#3aa756]">
          <h2 className="text-2xl font-bold text-[#3aa756] mb-2">Holiday Club Activities</h2>
          <p>
            Little Market After School Club offers a holiday club predominately throughout the summer term situated at
            Concordia Academy. Our holiday club provides a fun, safe, and stimulating environment for children during
            school holidays.
          </p>
        </div>

        <p className="mb-4">
          Our holiday club is designed to keep children engaged and entertained during school breaks. We offer a wide
          range of activities and outings that are both educational and enjoyable, ensuring that children have a
          memorable experience while developing new skills and making friends.
        </p>

        <div className="relative h-64 md:h-80 mb-8 rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vSqYKCJLmO0th8hwSE8WYiqT0XrF92.png"
            alt="Holiday Club promotional image"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Activities and Outings</h2>

        <p className="mb-4">We provide the children with numerous activities and outings, including:</p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#3aa756] mb-2">Exciting Trips</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Southend Adventure Island</li>
              <li>Colchester Zoo</li>
              <li>Queen Elizabeth Park, Stratford</li>
              <li>Princess Diana Memorial Park, Hyde Park</li>
              <li>Splash Parks</li>
              <li>Paradise Wildlife Park</li>
              <li>Battersea Park Zoo</li>
              <li>Cinema</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#3aa756] mb-2">On-Site Activities</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Arts and crafts</li>
              <li>Sports and games</li>
              <li>Cooking sessions</li>
              <li>Science experiments</li>
              <li>Snakes Alive (Live animal interaction)</li>
              <li>Bowling</li>
              <li>Kidspace</li>
              <li>Museum visits</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Benefits of Our Holiday Club</h2>

        <div className="space-y-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#3aa756]">
            <h3 className="font-bold text-[#3aa756]">Social Development</h3>
            <p>
              Children have the opportunity to make new friends and develop their social skills in a relaxed and
              supportive environment.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#ff6900]">
            <h3 className="font-bold text-[#ff6900]">Physical Activity</h3>
            <p>
              Our program includes plenty of physical activities to keep children active and healthy during their school
              break.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#fcb900]">
            <h3 className="font-bold text-[#fcb900]">Learning Through Play</h3>
            <p>
              While having fun, children continue to learn and develop new skills through our educational activities and
              outings.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#df2020]">
            <h3 className="font-bold text-[#df2020]">Convenience for Parents</h3>
            <p>Our holiday club provides a reliable childcare solution for working parents during school holidays.</p>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            href="/holiday-club"
            className="inline-flex items-center px-6 py-3 bg-[#3aa756] text-white rounded-md hover:bg-[#2d8444] transition-colors"
          >
            Learn More & Book a Place
          </Link>
        </div>
      </div>
    </div>
  )
}
