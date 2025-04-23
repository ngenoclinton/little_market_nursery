import Image from "next/image"

const ageGroups = [
  {
    name: "Babies",
    ageRange: "0–14 months",
    description:
      "A loving, nurturing environment tailored to your baby's routine, with daily feedback and sensory activities.",
    color: "#fcb900",
    icon: "/icons/baby-icon.svg",
  },
  {
    name: "Toddlers",
    ageRange: "12–24 months",
    description: "Sensory exploration, gross motor activities, and social interaction.",
    color: "#ff6900",
    icon: "/icons/toddler-icon.svg",
  },
  {
    name: "Pre-Preschool",
    ageRange: "22–36 months",
    description: "Communication, imaginative play, puzzles, and language-rich activities.",
    color: "#df2020",
    icon: "/icons/pre-preschool-icon.svg",
  },
  {
    name: "Preschool",
    ageRange: "3–5 years",
    description: "Prepares for primary school through structured play, roleplay, crafts, reading, and outdoor play.",
    color: "#3aa756",
    icon: "/icons/preschool-icon.svg",
  },
]

export default function AgeGroupPrograms() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3aa756]">Our Age Group Programs</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We provide specialized care and education for children of all ages, with programs designed to nurture their
            development and learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ageGroups.map((group, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="w-40 h-40 rounded-full flex items-center justify-center mb-6 p-2 animate-float"
                style={{
                  background: `linear-gradient(135deg, ${group.color}, ${group.color}CC)`,
                  boxShadow: `0 10px 15px -3px ${group.color}40`,
                }}
              >
                <div className="bg-white rounded-full w-full h-full flex items-center justify-center p-4">
                  <div className="relative w-24 h-24">
                    <Image src={group.icon || "/placeholder.svg"} alt={group.name} fill className="object-contain" />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-1" style={{ color: group.color }}>
                {group.name}
              </h3>
              <p className="text-sm text-gray-500 mb-3">({group.ageRange})</p>
              <p className="text-center text-gray-700">{group.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
