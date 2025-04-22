import { Clock, MapPin } from "lucide-react"
import Link from "next/link"

const upcomingEvents = [
  {
    id: 1,
    title: "Parent Orientation Day",
    date: "May 5, 2025",
    time: "9:00 AM - 11:00 AM",
    location: "Main Hall",
    description: "Welcome session for new parents to learn about our programs and meet our staff.",
  },
  {
    id: 2,
    title: "Annual Sports Day",
    date: "May 15, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "School Playground",
    description: "A day of fun physical activities and friendly competitions for all age groups.",
  },
  {
    id: 3,
    title: "Art Exhibition",
    date: "May 25, 2025",
    time: "1:00 PM - 4:00 PM",
    location: "Art Room",
    description: "Showcasing creative works by our talented young artists from all classes.",
  },
]

export default function EventsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3aa756]">Upcoming Events</h2>
          <Link href="/events" className="text-[#3aa756] hover:text-[#2d8444] font-medium">
            View All Events →
          </Link>
        </div>

        <div className="space-y-6">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row gap-6"
            >
              <div className="md:w-1/4 flex flex-col items-center justify-center bg-[#3aa756] text-white p-4 rounded-lg">
                <span className="text-3xl font-bold">{event.date.split(",")[0].split(" ")[1]}</span>
                <span className="text-lg">{event.date.split(",")[0].split(" ")[0]}</span>
                <span>{event.date.split(",")[1]}</span>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <Link
                  href={`/events/${event.id}`}
                  className="mt-4 inline-block text-[#3aa756] hover:text-[#2d8444] font-medium"
                >
                  Event Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
