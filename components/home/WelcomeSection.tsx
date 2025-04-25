import Image from "next/image"
import Link from "next/link"

export default function WelcomeSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#3aa756]">
              Welcome to Little Market Nursery & Shcool Club
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              At Little Market Nursery, we believe every child deserves the best start in life. Our nurturing
              environment encourages curiosity, creativity, and confidence in young learners.
            </p>
            <p className="text-gray-700 mb-8 text-lg">
              Our dedicated team of educators is committed to providing a safe, stimulating, and inclusive space where
              children can explore, learn, and grow at their own pace.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="about-us/our-story"
                className="px-6 py-3 bg-[#3aa756] hover:bg-[#2d8444] text-white rounded-full transition-colors duration-300"
              >
                About Us
              </Link>
              <Link
                href="gallery/baby-gallery"
                className="px-6 py-3 border-2 border-[#3aa756] text-[#3aa756] hover:bg-[#3aa756] hover:text-white rounded-full transition-colors duration-300"
              >
                Virtual Tour
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/homeImg/camp.png"
                alt="Teacher helping children with activities"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#df2020] text-white p-4 rounded-lg shadow-lg">
              <p className="text-xl font-bold">15+ Years</p>
              <p>of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
