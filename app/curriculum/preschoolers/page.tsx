import Link from "next/link"
import Image from "next/image"

export default function PreschoolersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">3–5 Years (Preschoolers)</h1>

      <div className="bg-[#3aa756]/12 bg-opacity-10 p-6 rounded-lg mb-8 border-l-4 border-[#3aa756]">
        <h2 className="text-2xl font-bold text-[#3aa756] mb-2">Jelly Beans Room</h2>
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="bg-[#3aa756] text-white px-4 py-2 rounded-md">
            <span className="font-bold">Age Group:</span> Three Years to Four Years
          </div>
          <div className="bg-[#3aa756] text-white px-4 py-2 rounded-md">
            <span className="font-bold">Staff Ratio:</span> 1 - 8
          </div>
        </div>
      </div>

      <div className="prose max-w-none">
        <p className="mb-4">
          This room provides a stimulating, warm environment for your child to enjoy through various activities.
          There&apos;s also a sensory area (which is available to all children), an outdoor garden which gives them
          plenty of room to move around.
        </p>

        <p className="mb-4">
          All nursery activities are based on the EYFS covering the seven areas, and the children get to build on their
          previous knowledge by developing new interests and trying out new experiences such as learning languages like
          French and Spanish.
        </p>

        <p className="mb-8">
          Each child has a key-person who will work in close partnership with parents/carers, providing a daily
          communication book so you know what your child has experienced in the day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/galleries/nursery-images/pre-school/IMG_3677.webp"
                    alt="After School Club activities"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
        
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/galleries/nursery-images/pre-school/IMG_3693.webp"
                    alt="After School Club activities"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

        <div className="flex justify-center">
          <Link
            href="/gallery/pre-school-gallery"
            className="inline-flex items-center px-6 py-3 bg-[#3aa756] text-white rounded-md hover:bg-[#2d8444] transition-colors"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </div>
  )
}