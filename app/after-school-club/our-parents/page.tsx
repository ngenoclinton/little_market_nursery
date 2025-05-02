import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { QuoteIcon } from "lucide-react"

export const metadata = {
  title: "Our Parents | After School Club | Little Market Nursery",
  description: "Testimonials and resources for parents of children attending our After School Club.",
}

export default function OurParentsPage() {
  const testimonials = [
    {
      quote:
        "The After School Club has been a lifesaver for our family. My son loves attending and always comes home full of stories about the fun activities they've done. The staff are incredibly caring and professional.",
      parent: "Emma Thompson, parent of Jack (age 8)",
    },
    {
      quote:
        "I appreciate how the team helps my daughter with her homework before she engages in fun activities. It's the perfect balance of learning and play. The communication from staff is excellent too.",
      parent: "David Wilson, parent of Sophia (age 10)",
    },
    {
      quote:
        "As a working parent, I need reliable after-school care, and Little Market After School Club provides exactly that. The flexible booking system works perfectly for our changing schedule.",
      parent: "Sarah Ahmed, parent of Zain (age 7)",
    },
    {
      quote:
        "My children have attended the After School Club for three years now, and they still look forward to it every day. The variety of activities keeps them engaged, and they've made wonderful friendships.",
      parent: "Michael Chen, parent of Lily (age 9) and Ben (age 6)",
    },
  ]

  const resources = [
    {
      title: "Parent Handbook",
      description: "A comprehensive guide to our After School Club policies, procedures, and daily routines.",
      link: "/documents/after-school-club-parent-handbook.pdf",
    },
    {
      title: "Term Dates",
      description: "Calendar of term dates and holiday club availability for the current academic year.",
      link: "/after-school-club/term-dates",
    },
    {
      title: "Activity Schedule",
      description: "Weekly schedule of planned activities so you know what your child will be doing each day.",
      link: "/after-school-club/activity-schedule",
    },
    {
      title: "Healthy Eating Guide",
      description: "Information about the snacks we provide and our approach to nutrition.",
      link: "/documents/healthy-eating-guide.pdf",
    },
  ]

  const faqs = [
    {
      question: "What are your opening hours?",
      answer:
        "Our After School Club operates from the end of the school day (typically 3:00-3:30 PM depending on the school) until 6:00 PM, Monday to Friday during term time. Our Holiday Club runs from 8:00 AM to 6:00 PM during school holidays.",
    },
    {
      question: "How do you transport children from school to the club?",
      answer:
        "We have dedicated staff who collect children from local partner schools. They wear identifiable uniforms and carry ID. For schools within walking distance, children are walked to our facilities. For schools further away, we use our minibus service which is fully insured and meets all safety requirements.",
    },
    {
      question: "What food do you provide?",
      answer:
        "We provide a healthy, balanced snack when children arrive at the club, typically including fresh fruit, vegetables, and a carbohydrate option like crackers or bread sticks. Water and milk are always available. For children staying later, we offer a light tea. All dietary requirements and allergies are catered for.",
    },
    {
      question: "How do I book sessions?",
      answer:
        "You can book regular sessions for the term or ad-hoc sessions (subject to availability) through our online booking system or by contacting the After School Club directly. We recommend booking regular sessions in advance to secure your place.",
    },
    {
      question: "What happens if I'm late collecting my child?",
      answer:
        "We understand that occasional delays are unavoidable. Please call us as soon as possible if you're running late. A late fee may apply for collections after 6:00 PM to cover additional staffing costs.",
    },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Our Parents</h1>

      <Tabs defaultValue="testimonials" className="w-full mb-10">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          <TabsTrigger value="resources">Parent Resources</TabsTrigger>
          <TabsTrigger value="faqs">FAQs</TabsTrigger>
        </TabsList>

        <TabsContent value="testimonials" className="mt-6">
          <div className="prose max-w-none mb-6">
            <p className="text-lg">
              Don't just take our word for it - here's what our parents have to say about our After School Club:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <QuoteIcon className="h-8 w-8 text-[#3aa756] opacity-20 mb-4" />
                  <p className="italic text-gray-700 mb-4">{testimonial.quote}</p>
                  <p className="font-medium text-right">— {testimonial.parent}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resources" className="mt-6">
          <div className="prose max-w-none mb-6">
            <p className="text-lg">
              We've compiled these resources to help you navigate our After School Club services and support your
              child's experience with us:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#3aa756] mb-2">{resource.title}</h3>
                  <p className="text-gray-700 mb-4">{resource.description}</p>
                  <a
                    href={resource.link}
                    className="text-[#3aa756] hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download or View →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="faqs" className="mt-6">
          <div className="prose max-w-none mb-6">
            <p className="text-lg">Here are answers to some of the most frequently asked questions from parents:</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                <h3 className="text-lg font-semibold text-[#3aa756] mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-[#3aa756] mb-2">Have another question?</h3>
            <p className="mb-4">
              If you can't find the answer to your question here, please don't hesitate to contact us directly.
            </p>
            <a href="/after-school-club/ask-question" className="text-[#3aa756] hover:underline font-medium">
              Ask a Question →
            </a>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-[#3aa756] text-white p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Parent Partnership</h2>
        <p className="mb-4">
          We believe that strong partnerships with parents are essential for providing the best care for your child. We
          welcome your feedback, suggestions, and involvement in our After School Club.
        </p>
        <p>
          Throughout the year, we organize parent events, information evenings, and opportunities for you to see what
          your child has been doing at the club. Keep an eye on our newsletter and notice board for upcoming events.
        </p>
      </div>
    </div>
  )
}
