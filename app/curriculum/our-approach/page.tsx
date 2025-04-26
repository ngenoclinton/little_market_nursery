import Link from "next/link"

export default function OurApproachPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Our Approach</h1>

      <div className="prose max-w-none">
        <div className="bg-[#3aa756]/15 bg-opacity-10 p-6 rounded-lg mb-8 border-l-4 border-[#3aa756]">
          <h2 className="text-2xl font-bold text-[#3aa756] mb-2">Our Philosophy</h2>
          <p className="text-lg">
            We are passionate about helping children develop at Little Market Nursery. We provide a range of
            age-appropriate, stimulating, and educational activities to help your child grow, learn, and develop.
          </p>
        </div>

        <p className="mb-4">
          At Little Market Nursery, we work with the children on their language and speech so they get to use a variety
          of expressions in structured and unplanned scenarios. Communication plays a key role in the nursery activities
          your child is involved with, and they will learn how to communicate emotions and positive thoughts and develop
          curiosity.
        </p>

        <p className="mb-4">
          They will learn to predict situations by talking about events that may occur and identify similarities and
          differences. Your child will develop the ability to identify, collect and organise information, and will learn
          to converse with others by asking appropriate questions and respond to instructions and questions.
        </p>

        <p className="mb-8">
          Some of the activities will be age-specific; here&apos;s a breakdown of what we offer based on your
          child&apos;s age.
        </p>

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
