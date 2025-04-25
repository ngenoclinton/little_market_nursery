import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"

const newsItems = [
  {
    id: 1,
    title: "Summer Camp Registration Now Open",
    excerpt: "Join us for an exciting summer of learning and adventure. Limited spots available!",
    date: "April 15, 2025",
    image: "https://img.freepik.com/free-photo/children-playing-grass_23-2148161554.jpg?w=740",
    category: "Events",
  },
  {
    id: 2,
    title: "New Art Program Launching Next Month",
    excerpt: "We're expanding our creative arts curriculum with new specialized programs.",
    date: "April 10, 2025",
    image: "https://img.freepik.com/free-photo/children-having-fun-during-art-class_23-2148633138.jpg?w=740",
    category: "Curriculum",
  },
  {
    id: 3,
    title: "Parent-Teacher Conference Schedule",
    excerpt: "Schedule your meeting to discuss your child's progress and development.",
    date: "April 5, 2025",
    image: "https://img.freepik.com/free-photo/teacher-talking-with-parent_23-2148633217.jpg?w=740",
    category: "Announcements",
  },
]

export default function NewsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3aa756]">Latest News</h2>
          <Link
          //  href="/news"
          href="/"
            className="text-[#3aa756] hover:text-[#2d8444] font-medium">
            View All News →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-[#df2020] text-white text-sm px-3 py-1 rounded-full">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link 
                // href={`/news/${item.id}`} 
                href="/"
                className="text-[#3aa756] hover:text-[#2d8444] font-medium">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
