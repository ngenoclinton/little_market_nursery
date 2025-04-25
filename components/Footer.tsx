import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-50 via-[#e9f5ee] to-gray-50 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="relative h-16 w-16">
                <Image src="/Nursery-logo.png" alt="Little Market Nursery Logo" fill className="object-contain" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-bold text-[#3aa756]">
                  Little Market <span className="text-[#df2020]">Nursery</span>
                </h3>
                <p className="text-sm text-gray-600">Nurturing Young Minds</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Providing a nurturing environment where children can learn, grow, and thrive through play-based learning
              and individualized attention.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3aa756] text-white hover:bg-[#2d8444] transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3aa756] text-white hover:bg-[#2d8444] transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3aa756] text-white hover:bg-[#2d8444] transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-[#3aa756] mb-4 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#3aa756]"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-us/our-story"
                  className="text-gray-600 hover:text-[#3aa756] transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2 text-[#3aa756]" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/curriculum"
                  className="text-gray-600 hover:text-[#3aa756] transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2 text-[#3aa756]" />
                  Curriculum
                </Link>
              </li>
              <li>
                <Link
                  href="/key-info"
                  className="text-gray-600 hover:text-[#3aa756] transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2 text-[#3aa756]" />
                  Key Information
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-600 hover:text-[#3aa756] transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2 text-[#3aa756]" />
                  Galleries
                </Link>
              </li>
              <li>
                <Link
                  href="/funding"
                  className="text-gray-600 hover:text-[#3aa756] transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2 text-[#3aa756]" />
                  Funding
                </Link>
              </li>
              <li>
                <Link
                  href="/holiday-club"
                  className="text-gray-600 hover:text-[#3aa756] transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2 text-[#3aa756]" />
                  Holiday Club
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-[#3aa756] mb-4 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#3aa756]"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3aa756] bg-opacity-10 mr-3 flex-shrink-0">
                  <MapPin size={16} className="text-[#3aa756]" />
                </div>
                <span className="text-gray-600">
                Little Market Nursery, 123 Education Avenue, Learning City, LC1 2ED
                </span>
              </li>
              <li className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3aa756] bg-opacity-10 mr-3 flex-shrink-0">
                  <Phone size={16} className="text-[#3aa756]" />
                </div>
                <span className="text-gray-600">+44 1234 567890</span>
              </li>
              <li className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3aa756] bg-opacity-10 mr-3 flex-shrink-0">
                  <Mail size={16} className="text-[#3aa756]" />
                </div>
                <span className="text-gray-600">info@littlemarketnursery.edu</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold text-[#3aa756] mb-4 relative inline-block">
              Opening Hours
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#3aa756]"></span>
            </h3>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              <ul className="space-y-3">
                <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Monday - Friday:</span>
                  <span className="text-[#3aa756] font-bold">7:00am - 7:00pm</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Saturday:</span>
                  <span className="text-[#df2020] font-bold">Closed</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Sunday:</span>
                  <span className="text-[#df2020] font-bold">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Little Market Nursery. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-500 text-sm hover:text-[#3aa756] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-500 text-sm hover:text-[#3aa756] transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-gray-500 text-sm hover:text-[#3aa756] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
