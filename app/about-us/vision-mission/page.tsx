export default function VisionMissionPage() {
    return (
      <div>
        <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Vision & Mission</h1>
  
        <div className="prose max-w-none">
          <div className="bg-[#fcb900]/10 bg-opacity-10 p-6 rounded-lg mb-8 border-l-4 border-[#fcb900]">
            <h2 className="text-2xl font-bold text-[#ff6900] mb-2">Our Vision</h2>
            <p className="text-lg">
              To be a leading early childhood education provider where every child is empowered to reach their full
              potential in a safe, nurturing, and stimulating environment.
            </p>
          </div>
  
          <div className="bg-[#3aa756]/10 bg-opacity-10 p-6 rounded-lg mb-8 border-l-4 border-[#3aa756]">
            <h2 className="text-2xl font-bold text-[#3aa756] mb-2">Our Mission</h2>
            <p className="text-lg">
              To provide high-quality childcare and education that promotes the physical, social, emotional, and cognitive
              development of each child through play-based learning and individualized attention.
            </p>
          </div>
  
          <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Our Core Values</h2>
  
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-[#3aa756] mb-2">Excellence</h3>
              <p>
                We strive for excellence in all aspects of our service, continuously improving our practices and programs
                to provide the best possible care and education.
              </p>
            </div>
  
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-[#3aa756] mb-2">Respect</h3>
              <p>
                We respect each child as a unique individual with their own strengths, interests, and learning styles,
                valuing diversity and promoting inclusion.
              </p>
            </div>
  
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-[#3aa756] mb-2">Collaboration</h3>
              <p>
                We work in partnership with families and the community to create a supportive network that enhances each
                child&apos;s learning journey.
              </p>
            </div>
  
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-[#3aa756] mb-2">Innovation</h3>
              <p>
                We embrace innovative approaches to early childhood education, incorporating research-based practices and
                creative teaching methods.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  