"use client"

import { useState, useEffect } from "react"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function FindUsPage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Find Us</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-[#3aa756] mb-4">Little Market Day Nursery & After School Club</h2>
          <p className="text-gray-700 mb-6">
            We are conveniently located in the heart of Romford, providing easy access for families in the surrounding
            areas.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start">
              <MapPin className="text-[#df2020] mt-1 mr-3 flex-shrink-0" />
              <p>The Wykeham Centre, Market Place, Romford, RM1 3AB</p>
            </div>

            <div className="flex items-start">
              <Phone className="text-[#df2020] mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium">Nursery:</p>
                <p>Tel: 01708 608434 | Mobile: 07983 612443</p>
                <p className="mt-2 font-medium">School Club:</p>
                <p>Tel: 01708 729186 | Mobile: 07495 190473</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="text-[#df2020] mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium">Nursery:</p>
                <p>admin@littlemarketnursery.co.uk</p>
                <p className="mt-2 font-medium">School Club:</p>
                <p>admin@littlemarketschoolclub.co.uk</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="text-[#df2020] mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium">Opening Hours:</p>
                <p>Monday to Friday: 7:30 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {isMobile && (
            <div className="flex space-x-4 mb-6">
              <Link
                href="https://wa.me/447983612443"
                className="flex items-center justify-center px-4 py-2 bg-[#25D366] text-white rounded-md"
              >
                <MessageCircle className="mr-2" size={18} />
                WhatsApp
              </Link>
              <Link
                href="tel:01708608434"
                className="flex items-center justify-center px-4 py-2 bg-[#3aa756] text-white rounded-md"
              >
                <Phone className="mr-2" size={18} />
                Call Us
              </Link>
            </div>
          )}

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-[#3aa756] mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-[#1877F2] text-white rounded-full hover:bg-opacity-90 transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-[#1DA1F2] text-white rounded-full hover:bg-opacity-90 transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-[#E4405F] text-white rounded-full hover:bg-opacity-90 transition-colors"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="h-[400px] md:h-full min-h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.9340635018455!2d0.1798991!3d51.5764752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a6f1a8eb3e21%3A0x4c728b9776b8c44e!2sMarket%20Place%2C%20Romford%20RM1%203AB!5e0!3m2!1sen!2suk!4v1650000000000!5m2!1sen!2suk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Little Market Nursery Location"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-[#3aa756] mb-4">Getting Here</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-[#3aa756] mb-2">By Car</h3>
            <p className="text-gray-700 mb-3">
              There are several car parks in the vicinity of the nursery, including Market Place Car Park (2-minute
              walk) and The Brewery Car Park (5-minute walk).
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-[#3aa756] mb-2">By Public Transport</h3>
            <p className="text-gray-700 mb-3">
              Romford Station is approximately a 10-minute walk from the nursery. Several bus routes stop near Romford
              Market Place, including routes 5, 86, 128, 165, 174, 175, 193, 247, 252, 294, 296, 365, 370, and 496.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
