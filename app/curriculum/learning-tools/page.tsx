import Image from "next/image"

export default function LearningToolsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Learning Tools</h1>

      <div className="prose max-w-none">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-[#3aa756]">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/4">
              <div className="relative h-40 w-40">
                <Image
                  src="/galleries/tapestry/tapestry-2.png"
                  alt="Tapestry Online Learning Journal"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="md:w-3/4">
              <h2 className="text-2xl font-bold text-[#3aa756] mb-2">Tapestry Online Learning Journal</h2>
              <p className="text-gray-700">
                At Little Market Nursery, we use Tapestry, an online learning journal to record photos, observations,
                and comments in line with the Early Years Foundation Stage curriculum. This builds up a record of your
                child&apos;s experiences during their time with us and allows for seamless parent involvement.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#3aa756] mb-4">How Tapestry Enhances Learning</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#3aa756] mb-2">For Children</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Creates a comprehensive record of development</li>
              <li>Captures special moments and achievements</li>
              <li>Helps identify learning patterns and preferences</li>
              <li>Supports personalized learning journeys</li>
              <li>Builds confidence through recognition of achievements</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#3aa756] mb-2">For Parents</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Instant access to your child&apos;s learning journey</li>
              <li>Regular updates on activities and progress</li>
              <li>Ability to add your own observations from home</li>
              <li>Strengthens the home-nursery connection</li>
              <li>Provides conversation starters about nursery experiences</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Other Learning Tools</h2>

        <div className="space-y-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#3aa756] mb-2">EYFS Framework</h3>
            <p>
              We follow the Early Years Foundation Stage (EYFS) framework, which sets the standards for learning,
              development, and care for children from birth to five years. This comprehensive approach ensures that all
              areas of development are addressed through play-based learning.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#3aa756] mb-2">Sensory Resources</h3>
            <p>
              Our nursery is equipped with a wide range of sensory resources that stimulate children&apos;s senses and
              support their cognitive and physical development. These include light tables, sensory bins, textured
              materials, and musical instruments.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#3aa756] mb-2">Technology Integration</h3>
            <p>
              We thoughtfully integrate age-appropriate technology into our learning environment, including interactive
              whiteboards, tablets with educational apps, and digital cameras for children to document their own
              learning experiences.
            </p>
          </div>
        </div>

        <div className="bg-[#fcb900]/12 bg-opacity-10 p-6 rounded-lg border border-[#fcb900]">
          <h3 className="text-xl font-bold text-[#ff6900] mb-2">Parent Access to Tapestry</h3>
          <p className="mb-4">
            When your child joins Little Market Nursery, you will receive login details for your Tapestry account. If
            you need any assistance with accessing or using Tapestry, please speak to your child&apos;s key person or
            contact our office.
          </p>
          <p>
          <strong className="text-[#df2020]">Email:</strong> admin@littlemarketnursery.co.uk | <strong className="text-[#df2020]">Phone:</strong> 01708 608 434 | <strong className="text-[#df2020]">Mobile:</strong> 07983 612 443          </p>
        </div>
      </div>
    </div>
  )
}
