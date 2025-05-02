import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Our Activities | After School Club | Little Market Nursery",
  description:
    "Explore the range of engaging activities offered at our After School Club, designed to entertain and educate children.",
}

export default function OurActivitiesPage() {
  const activityCategories = [
    {
      id: "creative",
      name: "Creative Arts",
      description: "Encouraging self-expression and imagination through various art forms",
      activities: [
        {
          name: "Arts & Crafts",
          description:
            "Children explore different materials and techniques to create artwork, developing fine motor skills and creativity.",
          image: "/galleries/Activities/Arts&Crafts-1.jpg",
        },
        {
          name: "Drama & Role Play",
          description:
            "Through imaginative play and drama activities, children develop confidence, communication skills, and emotional understanding.",
          image: "/galleries/Activities/Drama&Role Play.jpg",
        },
        {
          name: "Music & Dance",
          description:
            "Children enjoy singing, playing instruments, and dancing to different styles of music, enhancing coordination and rhythm.",
          image: "/galleries/Activities/",
        },
      ],
    },
    {
      id: "physical",
      name: "Physical Activities",
      description: "Promoting health, fitness, and teamwork through active play",
      activities: [
        {
          name: "Sports & Games",
          description:
            "Children participate in a variety of sports and team games, developing physical skills, coordination, and sportsmanship.",
          image: "/galleries/Activities/Sports&Games.jpg",
        },
        {
          name: "Outdoor Adventures",
          description:
            "Weather permitting, children enjoy outdoor play, nature exploration, and adventure activities in our secure outdoor areas.",
          image: "/galleries/Activities/OutdoorAdventures.jpg",
        },
        {
          name: "Movement & Dance",
          description:
            "Structured movement activities and dance sessions help children develop coordination, balance, and body awareness.",
          image: "/galleries/Activities/",
        },
      ],
    },
    {
      id: "learning",
      name: "Learning & Discovery",
      description: "Supporting educational development through fun, engaging activities",
      activities: [
        {
          name: "Homework Support",
          description:
            "Dedicated time and assistance for children to complete their homework, with staff available to provide guidance.",
          image: "/galleries/Activities/",
        },
        {
          name: "Science Experiments",
          description:
            "Fun, hands-on science activities that encourage curiosity, critical thinking, and understanding of the world.",
          image: "/galleries/Activities/ScienceExperiments.jpg",
        },
        {
          name: "Reading Corner",
          description:
            "A quiet space with a selection of books where children can enjoy reading for pleasure and develop literacy skills.",
          image: "/galleries/Activities",
        },
      ],
    },
    {
      id: "social",
      name: "Social Development",
      description: "Building friendships, communication skills, and emotional intelligence",
      activities: [
        {
          name: "Group Projects",
          description: "Collaborative activities that encourage teamwork, communication, and problem-solving skills.",
          image: "/galleries/Activities/GroupProjects.jpg",
        },
        {
          name: "Circle Time",
          description:
            "Regular group discussions where children can share experiences, express feelings, and develop listening skills.",
          image: "/galleries/Activities/CircleTime.jpg",
        },
        {
          name: "Community Involvement",
          description:
            "Activities that connect children with the wider community, fostering a sense of belonging and social responsibility.",
          image: "/galleries/Activities/CommunityInvolvement.jpeg",
        },
      ],
    },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Our Activities</h1>

      <div className="prose max-w-none mb-8">
        <p className="text-lg">
          At Little Market After School Club, we offer a diverse range of activities designed to engage, entertain, and
          educate children after their school day. Our balanced program ensures that children can choose activities that
          interest them while developing important skills and having fun.
        </p>
        <p>
          Each day includes a mix of structured activities and free play, allowing children to unwind after school while
          still having opportunities for growth and development. Our qualified staff facilitate activities and provide
          support, ensuring all children can participate fully regardless of their abilities or interests.
        </p>
      </div>

      <Tabs defaultValue="creative" className="w-full mb-10">
        <TabsList className="grid w-full grid-cols-4">
          {activityCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {activityCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-6">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-[#3aa756]">{category.name}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {category.activities.map((activity, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={activity.image || "/placeholder.svg"}
                      alt={activity.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="text-xl font-semibold text-[#3aa756] mb-2">{activity.name}</h3>
                    <p className="text-sm">{activity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-[#3aa756]">Weekly Schedule</CardTitle>
            <CardDescription>
              While we maintain flexibility to respond to children's interests, we follow a general weekly schedule to
              provide structure.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Monday</h3>
                <p className="text-sm">Sports & Team Games, Arts & Crafts, Homework Support</p>
              </div>
              <div>
                <h3 className="font-semibold">Tuesday</h3>
                <p className="text-sm">Science Experiments, Outdoor Play, Reading Corner</p>
              </div>
              <div>
                <h3 className="font-semibold">Wednesday</h3>
                <p className="text-sm">Cooking Club, Drama Activities, Homework Support</p>
              </div>
              <div>
                <h3 className="font-semibold">Thursday</h3>
                <p className="text-sm">Music & Dance, Construction Play, Board Games</p>
              </div>
              <div>
                <h3 className="font-semibold">Friday</h3>
                <p className="text-sm">Movie Club, Free Choice Activities, Group Games</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-[#3aa756]">Daily Routine</CardTitle>
            <CardDescription>
              Our after school sessions follow a consistent routine to help children feel secure and know what to
              expect.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">3:00 - 3:30 PM</h3>
                <p className="text-sm">Collection from schools and arrival at the club</p>
              </div>
              <div>
                <h3 className="font-semibold">3:30 - 4:00 PM</h3>
                <p className="text-sm">Registration, hand washing, and healthy snack</p>
              </div>
              <div>
                <h3 className="font-semibold">4:00 - 4:45 PM</h3>
                <p className="text-sm">Homework support and quiet activities</p>
              </div>
              <div>
                <h3 className="font-semibold">4:45 - 5:30 PM</h3>
                <p className="text-sm">Structured activity of the day</p>
              </div>
              <div>
                <h3 className="font-semibold">5:30 - 6:00 PM</h3>
                <p className="text-sm">Free play and collection time</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-[#3aa756]/10 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-[#3aa756] mb-4">Special Activities & Clubs</h2>
        <p className="mb-6">
          Throughout the year, we offer special activities and clubs that children can opt into. These provide
          opportunities to develop specific skills and interests over a period of weeks. Recent examples include:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <li className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="font-semibold text-[#3aa756]">Cooking Club</h3>
            <p className="text-sm">Learning to prepare simple, healthy recipes</p>
          </li>
          <li className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="font-semibold text-[#3aa756]">Gardening Club</h3>
            <p className="text-sm">Growing plants and learning about nature</p>
          </li>
          <li className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="font-semibold text-[#3aa756]">Drama Club</h3>
            <p className="text-sm">Developing performances and building confidence</p>
          </li>
          <li className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="font-semibold text-[#3aa756]">STEM Club</h3>
            <p className="text-sm">Exploring science, technology, engineering, and math</p>
          </li>
          <li className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="font-semibold text-[#3aa756]">Art Club</h3>
            <p className="text-sm">Exploring different art techniques and styles</p>
          </li>
          <li className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="font-semibold text-[#3aa756]">Sports Club</h3>
            <p className="text-sm">Developing skills in various sports and games</p>
          </li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/after-school-club/gallery">
            <Button className="bg-[#3aa756] hover:bg-[#2d8444] text-white w-full sm:w-auto">
              View Activity Gallery
            </Button>
          </Link>
          <Link href="/after-school-club/register">
            <Button
              variant="outline"
              className="border-[#3aa756] text-[#3aa756] hover:bg-[#3aa756] hover:text-white w-full sm:w-auto"
            >
              Register Your Child
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
