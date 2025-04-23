import Image from "next/image"

const facilities = [
  {
    name: "Classrooms",
    description:
      "Our bright, spacious classrooms are designed to create an optimal learning environment. Each room is equipped with age-appropriate materials and resources to support different aspects of development.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Outdoor Play Area",
    description:
      "Our secure outdoor play area features a variety of equipment to promote physical development, including climbing structures, slides, and tricycle paths. The space also includes gardening areas where children can learn about nature.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Sensory Room",
    description:
      "Our specialized sensory room provides a calming space with various sensory experiences to support children's sensory development and regulation.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Dining Area",
    description:
      "Our cheerful dining area is where children enjoy nutritious meals and snacks prepared in our on-site kitchen. This space also serves as an opportunity for social interaction and developing mealtime routines.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function FacilitiesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Our Facilities</h1>

      <p className="text-lg mb-8">
        Kid&apos;s Promising Tomorrow is housed in a purpose-designed facility that provides a safe, stimulating, and
        comfortable environment for children to learn and grow. Our spaces are thoughtfully created to support various
        aspects of early childhood development.
      </p>

      <div className="space-y-12">
        {facilities.map((facility, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="relative h-64 md:h-80">
              <Image src={facility.image || "/placeholder.svg"} alt={facility.name} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#3aa756] mb-3">{facility.name}</h2>
              <p className="text-gray-700">{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
