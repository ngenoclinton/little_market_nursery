import Link from "next/link"
import Image from "next/image"

export default function ToddlersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">2–3 Years (Toddlers)</h1>

      <div className="bg-[#ff6900]/12 bg-opacity-10 p-6 rounded-lg mb-8 border-l-4 border-[#ff6900]">
        <h2 className="text-2xl font-bold text-[#ff6900] mb-2">Jelly Tots Room</h2>
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="bg-[#3aa756] text-white px-4 py-2 rounded-md">
            <span className="font-bold">Age Group:</span> Two Years to Three Years
          </div>
          <div className="bg-[#3aa756] text-white px-4 py-2 rounded-md">
            <span className="font-bold">Staff Ratio:</span> 1 - 4
          </div>
        </div>
      </div>

      <div className="prose max-w-none">
        <p className="mb-4">
          In this room children can confidently explore activities that are based around the EYFS in a safe, stimulating
          and warm environment. There are a variety of activities for them to work through both indoors and outdoors.
        </p>

        <p className="mb-4">
          Exciting opportunities are available for your child such as learning new languages like Turkish and Punjabi
          which are included into their daily routine.
        </p>

        <p className="mb-4">
          We work closely with parents to encourage and support children as they achieve milestones like toilet
          training.
        </p>

        <p className="mb-8">
          Each child has a key-person who will work in close partnership with parents and carers, providing a daily
          communication book in order to let you know what your child has experienced in the day.
        </p>

        <div className="relative h-64 md:h-80 mb-8 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Toddlers learning environment"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex justify-center">
          <Link
            href="/gallery/toddlers"
            className="inline-flex items-center px-6 py-3 bg-[#3aa756] text-white rounded-md hover:bg-[#2d8444] transition-colors"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </div>
  )
}
