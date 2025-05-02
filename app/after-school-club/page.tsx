import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, MapPin, Users, FileText, Phone, Mail, Calendar, CheckCircle, Download } from "lucide-react"

export const metadata = {
  title: "After School Club | Little Market Nursery",
  description:
    "Our After School Club provides a safe, fun, and enriching environment for children after regular school hours.",
}

export default function AfterSchoolClubPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">After School Club</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <div className="prose max-w-none">
            <p className="text-lg">
              Welcome to Little Market After School Club, a dedicated service distinct from our Nursery program,
              designed to provide care and enrichment for school-aged children outside of regular school hours.
            </p>

            <h2 className="text-2xl font-semibold text-[#3aa756] mt-6">What We Offer</h2>
            <p>Our After School Club provides a safe, supportive, and stimulating environment where children can:</p>
            <ul>
              <li>Engage in supervised homework completion with staff assistance</li>
              <li>Participate in a variety of recreational activities and games</li>
              <li>Enjoy arts, crafts, and creative projects</li>
              <li>Develop social skills through group activities and free play</li>
              <li>Relax and unwind after a busy school day</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#3aa756] mt-6">Our Approach</h2>
            <p>
              We understand that children need a balance of structure and freedom after a full day of school. Our
              program is designed to be flexible, allowing children to choose activities that interest them while
              ensuring they have opportunities for physical activity, creative expression, and social interaction.
            </p>

            <h2 className="text-2xl font-semibold text-[#3aa756] mt-6">How It Works</h2>
            <p>
              Our After School Club operates Monday through Friday during term time, with extended hours available
              during school holidays through our Holiday Club program. We provide:
            </p>
            <ul>
              <li>Collection from local schools by our qualified staff</li>
              <li>Nutritious snacks and refreshments</li>
              <li>A varied weekly activity schedule</li>
              <li>Indoor and outdoor play opportunities (weather permitting)</li>
              <li>Flexible booking options to suit your family's needs</li>
            </ul>
          </div>

          <div className="mt-8 space-y-6">
            <div className="bg-[#fcb900]/10 p-6 rounded-lg border border-[#fcb900]">
              <h2 className="text-xl font-semibold text-[#3aa756] mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-[#fcb900]" />
                Enrollment Process
              </h2>
              <ol className="space-y-4 ml-6 list-decimal">
                <li>
                  <span className="font-medium">Register Your Interest</span>: Complete our registration form to secure
                  your child's place
                </li>
                <li>
                  <span className="font-medium">Parental Contract</span>: Download, complete, and return our parental
                  contract
                </li>
                <li>
                  <span className="font-medium">Confirmation</span>: Receive confirmation of your child's place and
                  start date
                </li>
                <li>
                  <span className="font-medium">Induction</span>: Attend a brief induction session with your child to
                  meet the team and familiarize yourselves with our facilities
                </li>
              </ol>
              <div className="mt-4 flex flex-wrap gap-4">
                <Link href="/after-school-club/register">
                  <Button className="bg-[#3aa756] hover:bg-[#2d8444] text-white">Register Your Child</Button>
                </Link>
                <Link href="/after-school-club/parental-contract">
                  <Button
                    variant="outline"
                    className="border-[#3aa756] text-[#3aa756] hover:bg-[#3aa756] hover:text-white"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Parental Contract
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-[#ff6900]/10 p-6 rounded-lg border border-[#ff6900]">
              <h2 className="text-xl font-semibold text-[#3aa756] mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-[#ff6900]" />
                Why Choose Our After School Club?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#ff6900] text-white flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">Qualified Staff</h3>
                    <p className="text-sm">All our staff are DBS checked and qualified in childcare</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#ff6900] text-white flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">Engaging Activities</h3>
                    <p className="text-sm">Varied program of activities to keep children entertained and stimulated</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#ff6900] text-white flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">Convenient Locations</h3>
                    <p className="text-sm">Two locations serving multiple local schools</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#ff6900] text-white flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium">Flexible Booking</h3>
                    <p className="text-sm">Book regular sessions or ad-hoc days to suit your needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="py-0">
            <CardHeader className="bg-[#3aa756] text-white text-base md:text-lg lg:text-xl py-4">
              <CardTitle>Quick Information</CardTitle>
            </CardHeader>
            <CardContent className="pt-5">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-2 text-[#3aa756] mt-0.5" />
                  <div>
                    <h3 className="font-medium">Opening Hours</h3>
                    <p className="text-sm text-gray-600">Monday - Friday: 3:00 PM - 6:00 PM</p>
                    <p className="text-sm text-gray-600">Term time only</p>
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
                  <Phone className="h-5 w-5 mr-2 text-[#3aa756] mt-0.5" />
                  <div>
                    <h3 className="font-medium">Contact</h3>
                    <p className="text-sm text-gray-600">Tel: 01708 729186</p>
                    <p className="text-sm text-gray-600">Mobile: 07495 190473</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-2 text-[#3aa756] mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-gray-600">admin@littlemarketschoolclub.co.uk</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="py-0">
            <CardHeader className="bg-[#df2020] text-white text-base md:text-lg lg:text-xl py-4">
              <CardTitle>Parental Contract</CardTitle>
            </CardHeader>
            <CardContent className="pt-5">
              <p className="text-sm mb-4">
                To enroll your child in our After School Club, please download, complete, and return our parental
                contract.
              </p>
              <div className="space-y-3">
                <Link href="/documents/after-school-club-contract.pdf" target="_blank">
                  <Button
                    variant="outline"
                    className="w-full border-[#df2020] text-[#df2020] hover:bg-[#df2020] hover:text-white"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Contract
                  </Button>
                </Link>
                <Link href="/after-school-club/parental-contract">
                  <Button
                    variant="outline"
                    className="w-full border-[#df2020] text-[#df2020] hover:bg-[#df2020] hover:text-white"
                  >
                    Upload Completed Contract
                  </Button>
                </Link>
              </div>
              <p className="text-sm mt-3 text-gray-600">
                You may also bring the filled contract to the school office in person.
              </p>
            </CardContent>
          </Card>

          <Card className="py-0">
            <CardHeader className="bg-[#fcb900] text-white text-base md:text-lg lg:text-xl py-4">
              <CardTitle>Fees</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>After School Session</span>
                  <span className="font-medium">£12.00 per day</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekly Rate (5 days)</span>
                  <span className="font-medium">£55.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Late Collection Fee</span>
                  <span className="font-medium">£5.00 per 15 mins</span>
                </div>
                <div className="flex justify-between">
                  <span>Sibling Discount</span>
                  <span className="font-medium">10%</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Fees include collection from school, all activities, and a healthy snack.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-[#3aa756] mb-6">Explore Our After School Club</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/after-school-club/our-activities" className="no-underline">
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-[#3aa756]">Activities</CardTitle>
                <CardDescription>Discover our range of fun activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-40 w-full rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=160&width=320"
                    alt="Children engaged in after school activities"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/after-school-club/holiday-club" className="no-underline">
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-[#3aa756]">Holiday Club</CardTitle>
                <CardDescription>Full day care during school holidays</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-40 w-full rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=160&width=320"
                    alt="Children at holiday club"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/after-school-club/gallery" className="no-underline">
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-[#3aa756]">Gallery</CardTitle>
                <CardDescription>See our club in action</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-40 w-full rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=160&width=320"
                    alt="After school club gallery"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/after-school-club/our-people" className="no-underline">
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-[#3aa756]">Our Team</CardTitle>
                <CardDescription>Meet our dedicated staff</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-40 w-full rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=160&width=320"
                    alt="After school club staff"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-[#3aa756] mb-6">Testimonials</h2>
        <Tabs defaultValue="parents" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="parents">Parents</TabsTrigger>
            <TabsTrigger value="children">Children</TabsTrigger>
          </TabsList>
          <TabsContent value="parents" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="italic text-gray-600 mb-4">
                    "The After School Club has been a lifesaver for our family. The staff are wonderful and my son loves
                    the activities they provide. He's always excited to go and never wants to leave!"
                  </p>
                  <p className="font-medium">Sarah P, Parent</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="italic text-gray-600 mb-4">
                    "I appreciate how the staff help my daughter with her homework before she engages in fun activities.
                    It's the perfect balance of learning and play."
                  </p>
                  <p className="font-medium">Michael T, Parent</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="children" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="italic text-gray-600 mb-4">
                    "I love coming to After School Club because we get to play fun games and do cool art projects. The
                    teachers are really nice and help me with my homework."
                  </p>
                  <p className="font-medium">Emma, Age 8</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="italic text-gray-600 mb-4">
                    "After School Club is the best! I've made lots of new friends and I really like the sports
                    activities we do outside when it's sunny."
                  </p>
                  <p className="font-medium">James, Age 10</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
