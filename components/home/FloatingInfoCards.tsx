import Link from "next/link"
import { MapPin, Phone, Mail, Globe, Clock } from "lucide-react"

export default function FloatingInfoCards() {
  return (
    <div className="relative z-20 container mx-auto px-4 -mt-2">
      <div className="grid md:grid-cols-2 ">
        {/* Location Card */}
        <div className="bg-[#3aa756]/90 text-white shadow-xl p-5 transform transition-transform">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <MapPin className="mr-2" /> Location
          </h2>
          <div className="space-y-3">
            <p className="flex items-start">
              <MapPin className="mr-2 h-5 w-5 mt-1 flex-shrink-0" />
              <span>The Wykeham Centre, Market Place, Romford, RM1 3AB</span>
            </p>
            <p className="flex items-start">
              <Phone className="mr-2 h-5 w-5 mt-1 flex-shrink-0" />
              <span>Tel: 01708 608434 | Mobile: 07983 612443</span>
            </p>
            <p className="flex items-start">
              <Mail className="mr-2 h-5 w-5 mt-1 flex-shrink-0" />
              <span>admin@littlemarketnursery.co.uk</span>
            </p>
            <p className="flex items-start">
              <Globe className="mr-2 h-5 w-5 mt-1 flex-shrink-0" />
              <span>www.littlemarketnursery.co.uk</span>
            </p>

            <div className="pt-4 mt-4 border-t border-white/30">
              <h3 className="font-bold mb-2">School Club Information</h3>
              <p className="flex items-start">
                <Phone className="mr-2 h-5 w-5 mt-1 flex-shrink-0" />
                <span>Tel: 01708 729186 | Mobile: 07495 190473</span>
              </p>
              <p className="flex items-start">
                <Mail className="mr-2 h-5 w-5 mt-1 flex-shrink-0" />
                <span>admin@littlemarketschoolclub.co.uk</span>
              </p>
              <p className="flex items-start">
                <Globe className="mr-2 h-5 w-5 mt-1 flex-shrink-0" />
                <span>www.littlemarketschoolclub.co.uk</span>
              </p>
            </div>

            <div className="mt-4">
              <Link
                href="https://maps.google.com/?q=The+Wykeham+Centre,+Market+Place,+Romford,+RM1+3AB"
                target="_blank"
                className="inline-block bg-white text-[#3aa756] font-medium px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors"
              >
                Get Directions
              </Link>
            </div>
          </div>
        </div>

        {/* Hours/About Card */}
        <div className="bg-[#ff6900]/90 text-white shadow-xl p-6 transform transition-transform">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Clock className="mr-2" /> Hours Of Operation
          </h2>
          <div className="space-y-3">
            <p>Open from 7:30AM to 6:00PM, Monday through Friday</p>
            <p>Different programs are available for all age groups</p>

            <div className="pt-4 mt-4 border-t border-white/30">
              <h3 className="font-bold mb-2">About Us</h3>
              <p className="mb-3">
                Established in 2011, we provide high-quality childcare and wraparound services including day care,
                breakfast, and after-school clubs. Our experienced team is committed to nurturing happy, confident, and
                independent learners.
              </p>
              <p>
                <strong>Directors:</strong> Tezcan Mehmet and Kathy Jame
              </p>
            </div>

            <div className="mt-4">
              <Link
                href="/programs"
                className="inline-block bg-white text-[#ff6900] font-medium px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors"
              >
                View Different Programs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
