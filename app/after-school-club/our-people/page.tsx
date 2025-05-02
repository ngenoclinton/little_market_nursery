import Image from "next/image"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "Our People | After School Club | Little Market Nursery",
  description: "Meet our dedicated After School Club team who provide exceptional care for your children.",
}

export default function OurPeoplePage() {
  const teamMembers = [
    {
      name: "Kathy James",
      role: " Proprietor & Manager",
      qualifications: "BA (Hons) Childhood Studies, Level 3 Safeguarding",
      description:
        "Kathy has over years of experience working with children in various educational settings. She is passionate about creating a nurturing environment where children can thrive after school.",
      image: "/galleries/school-club-images/Our_people/kathy-james-proprietor-manager.jpg",
    },
    // {
    //   name: "David Thompson",
    //   role: "Deputy Manager",
    //   qualifications: "Level 3 Childcare, First Aid Certified",
    //   description:
    //     "David specializes in sports activities and outdoor play. He ensures that children have plenty of opportunities to be active and develop their physical skills.",
    //   image: "/placeholder.svg?height=300&width=300",
    // },
    // {
    //   name: "Emma Roberts",
    //   role: "Play Worker",
    //   qualifications: "Level 2 Childcare, Arts Specialist",
    //   description:
    //     "Emma brings creativity to the After School Club with her background in arts and crafts. She loves helping children express themselves through various creative projects.",
    //   image: "/placeholder.svg?height=300&width=300",
    // },
    // {
    //   name: "Michael Chen",
    //   role: "Play Worker",
    //   qualifications: "BSc Mathematics, Homework Support Specialist",
    //   description:
    //     "Michael provides expert homework support, particularly in mathematics and sciences. He makes learning fun and accessible for all children.",
    //   image: "/placeholder.svg?height=300&width=300",
    // },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Our People</h1>

      <div className="prose max-w-none mb-8">
        <p className="text-lg">
          Our After School Club is staffed by a dedicated team of childcare professionals who are passionate about
          providing high-quality care and engaging activities for your children. All our staff members are:
        </p>
        <ul>
          <li>DBS checked and fully vetted</li>
          <li>First aid trained</li>
          <li>Qualified in childcare or related fields</li>
          <li>Committed to ongoing professional development</li>
        </ul>
        <p>
          We maintain excellent staff-to-child ratios to ensure that every child receives the attention and support they
          need.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-[#3aa756] mb-6">Meet Our Team</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {teamMembers.map((member, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative h-48 md:h-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="md:col-span-2 p-4">
                <h3 className="text-xl font-semibold text-[#3aa756]">{member.name}</h3>
                <p className="font-medium text-gray-700">{member.role}</p>
                <p className="text-sm text-gray-500 mb-2">{member.qualifications}</p>
                <p className="text-sm">{member.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-[#3aa756] mb-4">Join Our Team</h2>
        <p className="mb-4">
          We're always looking for passionate individuals to join our After School Club team. If you love working with
          children and want to make a difference in their lives, we'd love to hear from you.
        </p>
        <p className="mb-4">
          Current vacancies are posted on our website and local job boards. For speculative applications, please send
          your CV and a covering letter to <span className="text-[#3aa756]">careers@littlemarketschoolclub.co.uk</span>.
        </p>
      </div>
    </div>
  )
}
