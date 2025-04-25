export default function VisionMissionPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Vision & Mission</h1>

      <div className="prose max-w-none">
        <div className="bg-[#fcb900] bg-opacity-20 p-6 rounded-lg mb-8 border-l-4 border-[#fcb900]">
          <h2 className="text-2xl font-bold text-[#d95e00] mb-2">Our Vision</h2>
          <p className="text-lg text-gray-800">
            To cultivate a warm, inclusive, and stimulating environment where every child thrives as a happy, confident,
            and independent learner.
          </p>
        </div>

        <div className="bg-[#3aa756] bg-opacity-15 p-6 rounded-lg mb-8 border-l-4 border-[#3aa756]">
          <h2 className="text-2xl font-bold text-[#2d8444] mb-2">Our Mission</h2>
          <ul className="list-disc pl-5 space-y-2 text-lg text-gray-800">
            <li>Provide a safe and caring atmosphere that supports early childhood development</li>
            <li>Celebrate each child's individuality</li>
            <li>Partner with families to ensure children reach their full potential</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Our Core Values</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#2d8444] mb-2">Respect and Inclusivity</h3>
            <p className="text-gray-800">
              We value each child and family's unique background, culture, and perspective, creating an environment
              where everyone feels welcome and respected.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#3aa756] mb-2">Individuality and Creativity</h3>
            <p className="text-gray-800">
              We encourage children to express themselves, explore their interests, and develop their unique talents and
              abilities.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#3aa756] mb-2">Safety and Nurture</h3>
            <p className="text-gray-800">
              We provide a secure, caring environment where children feel protected, supported, and free to learn and
              grow.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#3aa756] mb-2">Confidence and Communication</h3>
            <p className="text-gray-800">
              We help children develop self-assurance and effective communication skills that will serve them throughout
              their lives.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#3aa756] mt-8 mb-4">British Values</h2>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <p className="mb-4 text-gray-800">
            At Little Market Nursery, we actively promote fundamental British values throughout our curriculum and daily
            activities:
          </p>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#3aa756] text-gray-800">
              <h3 className="font-bold text-[#3aa756]">Democracy</h3>
              <p>Encouraging children to make choices and decisions, and respecting their voices and opinions.</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#ff6900] text-gray-800">
              <h3 className="font-bold text-[#ff6900]">Rule of Law</h3>
              <p>Teaching children about boundaries, rules, and why they are important for our safety and wellbeing.</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#fcb900] text-gray-800">
              <h3 className="font-bold text-[#fcb900]">Individual Liberty</h3>
              <p>
                Supporting children to develop a positive sense of themselves and providing opportunities for personal
                growth.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#df2020] text-gray-800">
              <h3 className="font-bold text-[#df2020]">Mutual Respect and Tolerance</h3>
              <p>Celebrating diversity, teaching children to appreciate different cultures, traditions, and beliefs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
