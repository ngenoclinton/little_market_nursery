


import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Clock, Bus, Car, Phone, Mail } from "lucide-react"

export const metadata = {
  title: "Find Us | After School Club | Little Market Nursery",
  description: "Locations and directions for our After School Club branches at Concordia Academy and Wykeham Hall.",
}

export default function FindUsPage() {
  const locations = [
    {
      id: "concordia",
      name: "Concordia Academy",
      address: "Union Road, Romford, RM7 0HG",
      phone: "01708 729186",
      mobile: "07495 190473",
      email: "admin@littlemarketschoolclub.co.uk",
      hours: "Monday - Friday: 3:00 PM - 6:00 PM (Term time)",
      mapImage: "https://img.freepik.com/premium-photo/diverse-school-kids-having-fun_53876-2096.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
      mapLink: "https://maps.google.com/?q=Concordia+Academy+Romford",
      directions: {
        car: "Parking is available in the school car park for pick-up and drop-off. Please display a visitor pass, which you can collect from reception.",
        public:
          "The 5, 86, 174, and 193 buses stop near the school. Romford station is a 15-minute walk away, with connections to the Elizabeth line and TfL Rail services.",
        walking: "The school is located just off Union Road, a short walk from Romford town center.",
      },
      schools: [
        "Concordia Academy",
        "St. Edward's Primary School",
        "Hylands Primary School",
        "Parklands Junior School",
      ],
    },
    {
      id: "wykeham",
      name: "Wykeham Hall",
      address: "Market Place, Romford, RM1 3AB",
      phone: "01708 729186",
      mobile: "07495 190473",
      email: "admin@littlemarketschoolclub.co.uk",
      hours: "Monday - Friday: 3:00 PM - 6:00 PM (Term time)",
      mapImage: "https://img.freepik.com/premium-photo/teacher-kids-school-learning-ecology-gardening_53876-22130.jpg?ga=GA1.1.1427997224.1745267148&semt=ais_hybrid&w=740",
      mapLink: "https://maps.google.com/?q=Wykeham+Hall+Romford",
      directions: {
        car: "Limited parking is available nearby at the Brewery Shopping Centre car park (charges apply). There is a drop-off point directly outside the hall.",
        public:
          "All Romford bus routes stop at Romford Market Place. Romford station is a 5-minute walk away, with connections to the Elizabeth line and TfL Rail services.",
        walking: "The hall is located in Romford Market Place, easily accessible from the town center.",
      },
      schools: [
        "St. Mary's Catholic Primary School",
        "Mawney Foundation School",
        "Crownfield Junior School",
        "Clockhouse Primary School",
      ],
    },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Find Us</h1>

      <div className="prose max-w-none mb-8">
        <p className="text-lg">
          Our After School Club operates from two convenient locations in Romford, serving different local schools.
          Please check which location serves your child's school, and feel free to contact us if you have any questions.
        </p>
      </div>

      <Tabs defaultValue="concordia" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="concordia">Concordia Academy</TabsTrigger>
          <TabsTrigger value="wykeham">Wykeham Hall</TabsTrigger>
        </TabsList>

        {locations.map((location) => (
          <TabsContent key={location.id} value={location.id} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Card className="overflow-hidden">
                  <div className="relative h-[300px] w-full">
                    <Image
                      src={location.mapImage || "/placeholder.svg"}
                      alt={`Map of ${location.name}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <a
                        href={location.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#3aa756] hover:bg-[#2d8444] text-white px-4 py-2 rounded-md flex items-center"
                      >
                        <MapPin className="h-4 w-4 mr-2" />
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold text-[#3aa756] mb-2">{location.name}</h2>
                    <p className="text-gray-700 mb-4">{location.address}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h3 className="font-semibold text-[#3aa756] mb-2 flex items-center">
                          <Car className="h-4 w-4 mr-2" />
                          By Car
                        </h3>
                        <p className="text-sm text-gray-700">{location.directions.car}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-[#3aa756] mb-2 flex items-center">
                          <Bus className="h-4 w-4 mr-2" />
                          Public Transport
                        </h3>
                        <p className="text-sm text-gray-700">{location.directions.public}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-[#3aa756] mb-4">Schools Served</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {location.schools.map((school, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <p className="font-medium">{school}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <p className="mt-4 text-sm text-gray-600">
                    If your child's school is not listed, please contact us to discuss pick-up arrangements.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="py-0">
                  <CardHeader className="bg-[#3aa756] text-white text-lg md:text-xl lg:text-2xl p-4">
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="py-6 text-lg md:text-xl lg:text-2xl p-4">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 mr-2 text-[#3aa756] mt-0.5" />
                        <div>
                          <h3 className="font-medium">Phone</h3>
                          <p className="text-sm text-gray-600">Tel: {location.phone}</p>
                          <p className="text-sm text-gray-600">Mobile: {location.mobile}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Mail className="h-5 w-5 mr-2 text-[#3aa756] mt-0.5" />
                        <div>
                          <h3 className="font-medium">Email</h3>
                          <p className="text-sm text-gray-600">{location.email}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-2 text-[#3aa756] mt-0.5" />
                        <div>
                          <h3 className="font-medium">Opening Hours</h3>
                          <p className="text-sm text-gray-600">{location.hours}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="py-0">
                  <CardHeader className="bg-[#3aa756] text-white text-lg md:text-xl lg:text-2xl p-4">
                    <CardTitle>Visit Us</CardTitle>
                  </CardHeader>
                  <CardContent className="py-6">
                    <p className="mb-4 text-sm">
                      We welcome visits from prospective parents. Please arrange a visit to see our facilities and meet
                      our team.
                    </p>
                    <Link href="/after-school-club/arrange-visit">
                      <Button className="w-full bg-[#3aa756] hover:bg-[#2d8444] text-white">Arrange a Visit</Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
