import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Users, FileText } from "lucide-react"

export const metadata = {
  title: "Holiday Club | After School Club | Little Market Nursery",
  description: "Full day care during school holidays with exciting activities and trips for children aged 4-11 years.",
}

export default function HolidayClubPage() {
  const holidayPeriods = [
    {
      name: "Summer Holidays",
      months: "July - August",
      description: "Six weeks of fun-filled activities, outdoor adventures, and themed weeks.",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      name: "Easter Holidays",
      months: "March - April",
      description: "Two weeks of spring-themed activities, Easter celebrations, and outdoor play.",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      name: "Christmas Holidays",
      months: "December - January",
      description: "Festive fun with Christmas crafts, winter activities, and special celebrations.",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      name: "Half Term Breaks",
      months: "October, February, May",
      description: "Week-long programs with varied activities to keep children engaged and entertained.",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const activities = [
    {
      category: "Creative",
      items: [
        "Arts and crafts workshops",
        "Drama and role play",
        "Music and dance sessions",
        "Cooking and baking",
        "Photography projects",
      ],
    },
    {
      category: "Active",
      items: [
        "Sports tournaments",
        "Swimming (at local pool)",
        "Team games and challenges",
        "Obstacle courses",
        "Yoga and mindfulness",
      ],
    },
    {
      category: "Educational",
      items: [
        "Science experiments",
        "Nature exploration",
        "Cultural theme days",
        "Reading challenges",
        "STEM activities",
      ],
    },
    {
      category: "Trips & Outings",
      items: [
        "Local parks and playgrounds",
        "Museums and galleries",
        "Bowling and cinema",
        "Farm visits",
        "Adventure playgrounds",
      ],
    },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Holiday Club</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <div className="prose max-w-none">
            <p className="text-lg">
              Our Holiday Club provides full day care during school holidays, offering a safe, fun, and stimulating
              environment for children aged 4-11 years. With a varied program of activities, trips, and themed days, we
              ensure that children have an enjoyable and enriching experience while parents have peace of mind.
            </p>

            <h2 className="text-2xl font-semibold text-[#3aa756] mt-6">What We Offer</h2>
            <ul>
              <li>Full day care from 8:00 AM to 6:00 PM</li>
              <li>Flexible booking options - book by day or week</li>
              <li>Exciting program of activities and outings</li>
              <li>Nutritious breakfast, lunch, and snacks</li>
              <li>Care from qualified and experienced staff</li>
              <li>Indoor and outdoor play facilities</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#3aa756] mt-6">Our Approach</h2>
            <p>
              We believe that holidays should be fun! Our Holiday Club provides a more relaxed environment than school,
              while still offering structure and routine. Children can choose from a range of activities each day,
              allowing them to pursue their interests and make new friends.
            </p>
            <p>
              Our themed weeks and special events keep the program fresh and exciting, ensuring that children who attend
              regularly always have something new to look forward to.
            </p>
          </div>

          <div className="mt-8">
            <Link href="/after-school-club/register">
              <Button className="bg-[#3aa756] hover:bg-[#2d8444] text-white">Book Holiday Club</Button>
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="py-0">
            <CardHeader className="bg-[#3aa756] text-white text-base md:text-lg lg:text-xl py-4">
              <CardTitle>Quick Information</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-2 text-[#3aa756] mt-0.5" />
                  <div>
                    <h3 className="font-medium">Opening Hours</h3>
                    <p className="text-sm text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-sm text-gray-600">During school holidays</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="h-5 w-5 mr-2 text-[#3aa756] mt-0.5" />
                  <div>
                    <h3 className="font-medium">Age Groups</h3>
                    <p className="text-sm text-gray-600">4 - 11 years (Primary school age)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 text-[#3aa756] mt-0.5" />
                  <div>
                    <h3 className="font-medium">Locations</h3>
                    <p className="text-sm text-gray-600">Concordia Academy</p>
                    <p className="text-sm text-gray-600">Wykeham Hall</p>
                    <Link href="/after-school-club/find-us" className="text-sm text-[#3aa756] hover:underline">
                      View details
                    </Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="h-5 w-5 mr-2 text-[#3aa756] mt-0.5" />
                  <div>
                    <h3 className="font-medium">Upcoming Dates</h3>
                    <p className="text-sm text-gray-600">October Half Term: 23-27 Oct 2023</p>
                    <p className="text-sm text-gray-600">Christmas: 18 Dec 2023 - 2 Jan 2024</p>
                    <Link
                      href="/after-school-club/holiday-club/dates"
                      className="text-sm text-[#3aa756] hover:underline"
                    >
                      View all dates
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="py-0">
            <CardHeader className="bg-[#3aa756] text-white text-base md:text-lg lg:text-xl py-4">
              <CardTitle>Fees</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Full Day (8:00 AM - 6:00 PM)</span>
                  <span className="font-medium">£35.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Half Day (8:00 AM - 1:00 PM or 1:00 PM - 6:00 PM)</span>
                  <span className="font-medium">£20.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekly Rate (5 full days)</span>
                  <span className="font-medium">£160.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sibling Discount</span>
                  <span className="font-medium">10%</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Fees include all activities, meals, and snacks. Additional charges may apply for certain trips and
                  special events.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-[#3aa756] mb-6">Holiday Periods</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {holidayPeriods.map((period, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48">
              <Image src={period.image || "/placeholder.svg"} alt={period.name} fill className="object-cover" />
            </div>
            <CardContent className="pt-4">
              <h3 className="text-xl font-semibold text-[#3aa756]">{period.name}</h3>
              <p className="text-sm text-gray-500">{period.months}</p>
              <p className="mt-2 text-sm">{period.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-semibold text-[#3aa756] mb-6">Activities & Experiences</h2>
      <Tabs defaultValue="Creative" className="w-full mb-12">
        <TabsList className="grid w-full grid-cols-4">
          {activities.map((activity) => (
            <TabsTrigger key={activity.category} value={activity.category}>
              {activity.category}
            </TabsTrigger>
          ))}
        </TabsList>

        {activities.map((activity) => (
          <TabsContent key={activity.category} value={activity.category} className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#3aa756]">{activity.category} Activities</CardTitle>
                <CardDescription>
                  Our Holiday Club offers a wide range of {activity.category.toLowerCase()} activities to engage and
                  inspire children.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {activity.items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-[#3aa756] mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <div className="bg-[#3aa756]/10 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-[#3aa756] mb-4">Book Your Child's Place</h2>
        <p className="mb-6">
          Spaces at our Holiday Club are limited and often book up quickly, especially during summer holidays. We
          recommend booking early to avoid disappointment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/after-school-club/register">
            <Button className="bg-[#3aa756] hover:bg-[#2d8444] text-white w-full sm:w-auto">Book Now</Button>
          </Link>
          <Link href="/after-school-club/holiday-club/program">
            <Button
              variant="outline"
              className="border-[#3aa756] text-[#3aa756] hover:bg-[#3aa756] hover:text-white w-full sm:w-auto"
            >
              <FileText className="h-4 w-4 mr-2" />
              View Full Program
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
