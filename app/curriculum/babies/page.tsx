import Link from "next/link"
import Image from "next/image"

export default function BabiesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">0–2 Years (Babies)</h1>

      <div className="bg-[#fcb900]/15 bg-opacity-10 p-6 rounded-lg mb-8 border-l-4 border-[#fcb900]">
        <h2 className="text-2xl font-bold text-[#ff6900] mb-2">Jelly Baby Room</h2>
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="bg-[#3aa756] text-white px-4 py-2 rounded-md">
            <span className="font-bold">Age Group:</span> Three Months to Two Years
          </div>
          <div className="bg-[#3aa756] text-white px-4 py-2 rounded-md">
            <span className="font-bold">Staff Ratio:</span> 1 - 3
          </div>
        </div>
      </div>

      <div className="prose max-w-none">
        <p className="mb-4">
          This room is calm, warm and relaxed, offering your child and family a safe place and a range of engaging
          activities which line up with the requirements of the EYFS. Each child&apos;s routine is based on what they do
          at home meaning that sleep and meal times are flexible and do vary.
        </p>

        <p className="mb-4">
          The staff who specialise in working with this age group work very closely with parents and carers as well as
          relevant professionals to ensure that each child has best personal care. All the equipment, toys and nursery
          activities are stage and age appropriate and are risk assessed. Through staff observation, your child&apos;s
          interests and next steps are seen and activities are also planned around this.
        </p>

        <p className="mb-8">
          Children are encouraged to be independent in all areas of their daily routine. A daily report is provided by
          your key-person so you know what your child has done during the day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/galleries/nursery-images/babies/IMG_3675.webp"
                      alt="After School Club activities"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
        
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/galleries/nursery-images/babies/IMG_3676-1.webp"
                      alt="After School Club activities"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

        <div className="flex justify-center">
          <Link
            href="/gallery/baby-gallery"
            className="inline-flex items-center px-6 py-3 bg-[#3aa756] text-white rounded-md hover:bg-[#2d8444] transition-colors"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </div>
  )
}
