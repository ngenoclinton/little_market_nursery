import Image from "next/image"
import Link from "next/link"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Gallery | After School Club | Little Market Nursery",
  description: "Browse photos of our After School Club activities, events, and facilities.",
}

export default function GalleryPage() {
  const galleryCategories = [
    {
      title: "Activities",
      description: "Arts, crafts, sports, and other daily activities",
      image: "/placeholder.svg?height=300&width=400",
      link: "/after-school-club/gallery/activity",
    },
    {
      title: "Holiday Club",
      description: "Fun and adventures during school holidays",
      image: "/placeholder.svg?height=300&width=400",
      link: "/after-school-club/gallery/holiday-club",
    },
    // {
    //   title: "Special Events",
    //   description: "Celebrations, parties, and themed days",
    //   image: "/placeholder.svg?height=300&width=400",
    //   link: "/after-school-club/gallery/special-events",
    // },
    // {
    //   title: "Trips & Outings",
    //   description: "Excursions to local attractions and places of interest",
    //   image: "/placeholder.svg?height=300&width=400",
    //   link: "/after-school-club/gallery/trips",
    // },
    // {
    //   title: "Seasonal",
    //   description: "Activities and events throughout the seasons",
    //   image: "/placeholder.svg?height=300&width=400",
    //   link: "/after-school-club/gallery/seasonal",
    // },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Gallery</h1>

      <div className="prose max-w-none mb-8">
        <p className="text-lg">
          Welcome to our After School Club gallery, where you can see the fun and engaging activities that children
          enjoy at our club. Browse through our categories to explore different aspects of our program.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {galleryCategories.map((category, index) => (
          <Link key={index} href={category.link} className="no-underline">
            <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image src={category.image || "/placeholder.svg"} alt={category.title} fill className="object-cover" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-[#3aa756]">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <p className="text-[#3aa756] text-sm font-medium">View Gallery →</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-10 bg-[#3aa756]/10 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-[#3aa756] mb-4">Photo Policy</h2>
        <p className="mb-4">
          We take photographs of activities and events at our After School Club to document children's experiences and
          share them with parents. All photographs are taken and used in accordance with our safeguarding policy and
          with parental consent.
        </p>
        <p>
          If you have any questions about our photo policy or would like to discuss your preferences regarding
          photographs of your child, please speak to the After School Club Manager.
        </p>
      </div>
    </div>
  )
}
