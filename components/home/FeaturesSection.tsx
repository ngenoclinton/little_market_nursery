import { BookOpen, Users, Clock, Award, Heart, Shield } from "lucide-react"

const features = [
  {
    icon: <BookOpen className="h-10 w-10 text-[#3aa756]" />,
    title: "Comprehensive Curriculum",
    description: "Age-appropriate learning experiences designed to develop key skills and knowledge.",
  },
  {
    icon: <Users className="h-10 w-10 text-[#3aa756]" />,
    title: "Small Class Sizes",
    description: "Ensuring each child receives personalized attention and support.",
  },
  {
    icon: <Clock className="h-10 w-10 text-[#3aa756]" />,
    title: "Flexible Hours",
    description: "Extended day options to accommodate working parents' schedules.",
  },
  {
    icon: <Award className="h-10 w-10 text-[#3aa756]" />,
    title: "Qualified Educators",
    description: "Experienced and passionate teachers dedicated to early childhood education.",
  },
  {
    icon: <Heart className="h-10 w-10 text-[#3aa756]" />,
    title: "Nurturing Environment",
    description: "A warm, welcoming space where children feel safe to explore and learn.",
  },
  {
    icon: <Shield className="h-10 w-10 text-[#3aa756]" />,
    title: "Safety First",
    description: "Comprehensive safety measures and protocols to protect our children.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3aa756]">Why Choose Us</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            At Little Market Nursery, we provide exceptional early education and care in a nurturing environment
            that fosters growth and development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
