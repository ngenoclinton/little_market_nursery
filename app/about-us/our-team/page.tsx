import Image from "next/image"

const teamMembers = [
  {
    name: "Tezcan Mehmet",
    role: "Director",
    bio: "With over 15 years of experience in early childhood education, Tezcan leads our team with passion and dedication. She holds a Master's degree in Early Childhood Education and is committed to providing the highest quality care and learning experiences.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Kathy Jame",
    role: "Director",
    bio: "Kathy brings 12 years of experience in childcare management to our team. Her background in child psychology and early development helps shape our curriculum and approach to individualized learning.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Sarah Johnson",
    role: "Lead Teacher - Preschool",
    bio: "Sarah specializes in preschool education and has been with us for 8 years. Her creative approach to learning through play has made her a favorite among children and parents alike.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Michael Thompson",
    role: "Lead Teacher - Toddlers",
    bio: "Michael has a special talent for connecting with toddlers and helping them develop their social and motor skills. His 6 years with us have been marked by innovation and enthusiasm.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function OurTeamPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Our Team</h1>

      <p className="text-lg mb-8">
        At Kid&apos;s Promising Tomorrow, our dedicated team of professionals is committed to providing exceptional care
        and education for your children. Each member brings unique skills and expertise to create a nurturing and
        stimulating environment.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3 relative h-48 sm:h-auto">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="sm:w-2/3 p-6">
                <h2 className="text-xl font-bold text-[#3aa756]">{member.name}</h2>
                <p className="text-[#ff6900] font-medium mb-3">{member.role}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
