import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText } from "lucide-react"

export const metadata = {
  title: "Our Policies | After School Club | Little Market Nursery",
  description:
    "Key policies and procedures for our After School Club, ensuring the safety and wellbeing of all children.",
}

export default function OurPoliciesPage() {
  const policies = [
    {
      category: "Safeguarding",
      items: [
        {
          title: "Safeguarding and Child Protection",
          description: "Our approach to keeping children safe and procedures for reporting concerns.",
          link: "/files/little-market-nursery-prospectus.pdf"
        },
        {
          title: "Health and Safety",
          description: "How we maintain a safe environment for all children and staff.",
          link: "/files/little-market-nursery-prospectus.pdf"
        },
        {
          title: "Risk Assessment",
          description: "Our process for identifying and managing potential risks.",
          link: "/files/little-market-nursery-prospectus.pdf",
        },
        {
          title: "Emergency Procedures",
          description: "Actions taken in case of emergency, including evacuation plans.",
          link: "/files/little-market-nursery-prospectus.pdf"
        },
      ],
    },
    {
      category: "Operational",
      items: [
        {
          title: "Admissions and Fees",
          description: "Criteria for admission and details of our fee structure.",
          link: "/files/little-market-nursery-prospectus.pdf",
        },
        {
          title: "Arrivals and Departures",
          description: "Procedures for dropping off and collecting children.",
          link: "/files/little-market-nursery-prospectus.pdf",
        },
        {
          title: "Missing Child",
          description: "Procedures followed if a child goes missing.",
          link: "/files/little-market-nursery-prospectus.pdf"
        },
        {
          title: "Uncollected Child",
          description: "Actions taken if a child is not collected at the end of a session.",
          link: "/files/little-market-nursery-prospectus.pdf",
        },
      ],
    },
    {
      category: "Care and Wellbeing",
      items: [
        {
          title: "Behavior Management",
          description: "Our approach to promoting positive behavior and managing challenging behavior.",
          link: "/files/little-market-nursery-prospectus.pdf",
        },
        {
          title: "Equality and Inclusion",
          description: "How we ensure all children are treated equally and inclusively.",
          link: "/files/little-market-nursery-prospectus.pdf",
        },
        {
          title: "Special Educational Needs",
          description: "Support provided for children with additional needs.",
          link: "/files/little-market-nursery-prospectus.pdf",
        },
        {
          title: "Food and Nutrition",
          description: "Our approach to providing healthy snacks and meals.",
          link: "/files/little-market-nursery-prospectus.pdf",
        },
      ],
    },
    {
      category: "Communication",
      items: [
        {
          title: "Complaints",
          description: "How to raise concerns and our complaints procedure.",
          link: "/files/little-market-nursery-prospectus.pdf"      },
        {
          title: "Confidentiality and Data Protection",
          description: "How we handle personal information and maintain confidentiality.",
          link: "/files/little-market-nursery-prospectus.pdf",
        },
        {
          title: "Partnership with Parents",
          description: "How we work with parents to provide the best care for children.",
          link: "/files/little-market-nursery-prospectus.pdf",
        },
        {
          title: "Social Media and E-Safety",
          description: "Guidelines for safe use of technology and social media.",
          link: "/files/little-market-nursery-prospectus.pdf",
        },
      ],
    },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Our Policies</h1>

      <div className="prose max-w-none mb-8">
        <p className="text-lg">
          At Little Market After School Club, we are committed to providing a safe, nurturing, and inclusive environment
          for all children. Our comprehensive policies and procedures guide our practice and ensure consistency in our
          approach.
        </p>
        <p>
          All our policies are regularly reviewed and updated to reflect current best practice and legislative
          requirements. Full copies of all policies are available at the club for parents to view at any time, or you
          can download them using the links below.
        </p>
      </div>

      <Tabs defaultValue="Safeguarding" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          {policies.map((policy) => (
            <TabsTrigger key={policy.category} value={policy.category}>
              {policy.category}
            </TabsTrigger>
          ))}
        </TabsList>

        {policies.map((policy) => (
          <TabsContent key={policy.category} value={policy.category} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {policy.items.map((item, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-[#3aa756] flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      {item.title}
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={item.link}
                      className="text-[#df2020] hover:underline font-medium bg-amber-100 p-2   rounded-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download PDF
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-10 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-[#3aa756] mb-4">Policy Updates</h2>
        <p className="mb-4">
          We regularly review and update our policies to ensure they reflect current best practice and legislative
          requirements. Parents will be notified of any significant changes to our policies.
        </p>
        <p>
          If you have any questions about our policies or would like to discuss them further, please speak to the After
          School Club Manager.
        </p>
      </div>
    </div>
  )
}
