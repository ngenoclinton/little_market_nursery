import Image from "next/image"

export default function ExtraActivitiesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Extra Activities</h1>

      <div className="prose max-w-none">
        <p className="text-lg mb-8">
          At Little Market Nursery, we offer a range of extra activities to enrich your child's learning experience and
          help them develop new skills and interests. These activities complement our core curriculum and provide
          opportunities for children to explore different areas of learning in depth.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Music and Movement"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#3aa756] mb-2">Music and Movement</h2>
              <p className="mb-4">
                Our music and movement sessions are designed to develop children's coordination, rhythm, and
                self-expression. Led by a specialist teacher, these sessions include singing, dancing, and playing
                simple instruments.
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <span className="mr-4">
                  <strong>Ages:</strong> All age groups
                </span>
                <span>
                  <strong>Frequency:</strong> Weekly
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Language Sessions"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#3aa756] mb-2">Language Sessions</h2>
              <p className="mb-4">
                We offer introductory language sessions in French, Spanish, Turkish, and Punjabi. These fun, interactive
                sessions expose children to different languages through songs, stories, and games.
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <span className="mr-4">
                  <strong>Ages:</strong> 2+ years
                </span>
                <span>
                  <strong>Frequency:</strong> Twice weekly
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image src="/placeholder.svg?height=300&width=500" alt="Gardening Club" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#3aa756] mb-2">Gardening Club</h2>
              <p className="mb-4">
                Our gardening club gives children hands-on experience with growing plants, learning about nature, and
                understanding where food comes from. Children plant, tend, and harvest vegetables and flowers in our
                nursery garden.
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <span className="mr-4">
                  <strong>Ages:</strong> 2+ years
                </span>
                <span>
                  <strong>Frequency:</strong> Seasonal
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Sports and Physical Activities"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#3aa756] mb-2">Sports and Physical Activities</h2>
              <p className="mb-4">
                We offer a variety of sports and physical activities to promote healthy development and physical
                confidence. These include yoga, ball skills, and obstacle courses, all adapted to be age-appropriate.
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <span className="mr-4">
                  <strong>Ages:</strong> All age groups
                </span>
                <span>
                  <strong>Frequency:</strong> Daily
                </span>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Special Workshops and Events</h2>

        <p className="mb-6">
          Throughout the year, we organize special workshops and events to provide unique learning experiences and
          celebrate cultural festivals. These include:
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#3aa756]">
            <h3 className="font-bold text-[#3aa756]">Seasonal Celebrations</h3>
            <p>Activities and events to mark different cultural and seasonal festivals throughout the year.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#ff6900]">
            <h3 className="font-bold text-[#ff6900]">Visiting Specialists</h3>
            <p>Workshops led by visiting specialists, such as storytellers, artists, and musicians.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#fcb900]">
            <h3 className="font-bold text-[#fcb900]">Parent Participation Days</h3>
            <p>Opportunities for parents to join in with activities and see their children's learning in action.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#df2020]">
            <h3 className="font-bold text-[#df2020]">Community Outings</h3>
            <p>Supervised trips to local places of interest, such as parks, libraries, and community centers.</p>
          </div>
        </div>

        <div className="bg-[#3aa756]/12 bg-opacity-10 p-6 rounded-lg border border-[#3aa756] mb-8">
          <h3 className="text-xl font-bold text-[#3aa756] mb-2">Inclusion in Extra Activities</h3>
          <p>
            All our extra activities are designed to be inclusive and accessible to all children. We make adaptations as
            necessary to ensure that every child can participate and benefit from these enriching experiences. If your
            child has specific needs or requirements, please speak to their key person about how we can support their
            participation.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-[#3aa756] mb-2">Parent Information</h3>
          <p className="mb-4">
            Information about upcoming extra activities and events is shared through our parent communication channels,
            including Tapestry, newsletters, and notice boards. If you have any questions or would like to suggest an
            activity, please speak to your child's key person or the nursery manager.
          </p>
          <p>
            <strong>Contact:</strong> activities@littlemarketnursery.co.uk | <strong>Phone:</strong> 01708 608434
          </p>
        </div>
      </div>
    </div>
  )
}
