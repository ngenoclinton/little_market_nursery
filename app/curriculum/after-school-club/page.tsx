import Image from "next/image"
import Link from "next/link"

const AfterSchoolClubPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">After School Club</h1>

      <div className="prose prose-lg mx-auto text-gray-700">
        <p>
          Welcome to our After School Club! We provide a safe, fun, and engaging environment for children after school
          hours. Our club offers a variety of activities to cater to different interests and age groups.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a nurturing and stimulating environment where children can learn, grow, and develop
          their social skills. We aim to support working parents by offering a reliable and affordable after-school care
          solution.
        </p>

        <h2>Activities</h2>
        <p>We offer a wide range of activities, including:</p>
        <ul>
          <li>Arts and Crafts</li>
          <li>Sports and Games</li>
          <li>Homework Help</li>
          <li>Reading and Story Time</li>
          <li>Outdoor Play</li>
        </ul>

        <h2>Schedule</h2>
        <p>
          Our After School Club operates from Monday to Friday, from school dismissal until 6:00 PM. We also offer
          holiday programs during school breaks.
        </p>

        <h2>Registration</h2>
        <p>
          To register your child for our After School Club, please download the registration form from our website and
          submit it to our office. Spaces are limited, so early registration is encouraged.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions or would like to learn more about our After School Club, please contact us at (555)
          123-4567 or email us at info@afterschoolclub.com.
        </p>
      </div>

      {/* Image Gallery */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/galleries/Activities/activity-1.png"
            alt="After School Club activities"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/galleries/Activities/activity-01.png"
            alt="After School Club activities"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      
<div className="flex justify-center">
          <Link
            href="/holiday-club/gallery"
            className="inline-flex items-center px-6 py-3 bg-[#3aa756] text-white rounded-md hover:bg-[#2d8444] transition-colors"
          >
            View Gallery
          </Link>
        </div>
    </div>
  )
}

export default AfterSchoolClubPage
