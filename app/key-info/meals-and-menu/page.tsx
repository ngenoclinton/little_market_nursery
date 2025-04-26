"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function MealsAndMenuPage() {
  const [activeMenu, setActiveMenu] = useState<1 | 2>(1)

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Meals & Menu</h1>

      <div className="prose max-w-none">
        <div className="bg-[#3aa756]/12 bg-opacity-10 p-6 rounded-lg mb-8 border-l-4 border-[#3aa756]">
          <h2 className="text-2xl font-bold text-[#3aa756] mb-2">Nutrition & Meals</h2>
          <p>
            At Little Market Nursery, we understand the importance of providing nutritious, balanced meals to support
            children's growth, development, and learning. All our meals are freshly prepared on-site by our qualified
            cook, using high-quality ingredients.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Our Approach to Nutrition</h2>

        <div className="space-y-6 mb-8">
          <p>
            We believe that establishing healthy eating habits in early childhood is essential for lifelong wellbeing.
            Our menus are carefully planned to:
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Meet children's nutritional needs at different stages of development</li>
            <li>Introduce a wide variety of flavors, textures, and food groups</li>
            <li>Accommodate dietary requirements, allergies, and cultural preferences</li>
            <li>Promote positive attitudes towards food and mealtimes</li>
            <li>Support children's developing independence and social skills</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Our Menu</h2>

        <p className="mb-6">
          We operate on a two-week rotating menu to provide variety while ensuring children receive consistent
          nutrition. All meals include fresh fruits and vegetables, and we offer dairy-free alternatives for children
          with dietary requirements.
        </p>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-[#3aa756]">Week {activeMenu} Menu</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveMenu(1)}
                className={`px-3 py-1 rounded-md ${
                  activeMenu === 1 ? "bg-[#3aa756] text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                Week 1
              </button>
              <button
                onClick={() => setActiveMenu(2)}
                className={`px-3 py-1 rounded-md ${
                  activeMenu === 2 ? "bg-[#3aa756] text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                Week 2
              </button>
            </div>
          </div>

          <div className="relative w-full h-[400px] md:h-[600px] border border-gray-200 rounded-lg overflow-hidden">
            {activeMenu === 1 ? (
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0bRd8vxzEDq7g6sIoUK4mLCzQP4LGj.png"
                alt="Week 1 Menu"
                fill
                className="object-contain"
                priority
              />
            ) : (
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Mywa7vKqYoGmbbUkxv012JFwPo6W7H.png"
                alt="Week 2 Menu"
                fill
                className="object-contain"
                priority
              />
            )}
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={() => setActiveMenu(activeMenu === 1 ? 2 : 1)}
              className="flex items-center px-4 py-2 bg-[#3aa756] text-white rounded-md hover:bg-[#2d8444] transition-colors"
            >
              {activeMenu === 1 ? (
                <>
                  View Week 2 Menu <ChevronRight className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  <ChevronLeft className="mr-2 h-4 w-4" /> View Week 1 Menu
                </>
              )}
            </button>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Mealtimes at Little Market Nursery</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-[#3aa756] mb-2">Breakfast (7:00 - 8:45 AM)</h3>
            <p>
              A nutritious start to the day with options including cereals, toast, bagels, pancakes, and fresh fruit.
              Milk is offered to all children.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-[#3aa756] mb-2">Morning Snack (10:00 AM)</h3>
            <p>Fresh fruit and milk are provided to keep energy levels up until lunchtime.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-[#3aa756] mb-2">Lunch (11:30 AM - 12:30 PM)</h3>
            <p>
              A hot, balanced meal followed by a healthy dessert. Meals are served family-style to encourage
              independence and social skills.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-[#3aa756] mb-2">Tea (3:00 PM)</h3>
            <p>A lighter meal with a variety of nutritious options, followed by fresh fruit.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-[#3aa756] mb-2">Afternoon Snack (5:30 PM)</h3>
            <p>A small snack such as bread sticks, porridge, or fruit for children staying later.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-[#3aa756] mb-2">Drinks</h3>
            <p>Water is available throughout the day. Milk is offered at breakfast and morning snack time.</p>
          </div>
        </div>

        <div className="bg-[#fcb900]/12 bg-opacity-10 p-6 rounded-lg border border-[#fcb900] mb-8">
          <h3 className="text-xl font-bold text-[#ff6900] mb-2">Special Dietary Requirements</h3>
          <p className="mb-4">
            We cater for a range of dietary requirements, including allergies, intolerances, and cultural or religious
            preferences. Please discuss your child's specific needs with us during the registration process.
          </p>
          <p>
            Our cook prepares alternative meals for children with special dietary requirements, ensuring they receive
            nutritionally equivalent options that are safe and appropriate for their needs.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Food Education</h2>

        <p className="mb-4">
          At Little Market Nursery, we believe that mealtimes are not just about nutrition but also learning
          opportunities. We incorporate food education into our curriculum through:
        </p>

        <ul className="list-disc pl-5 space-y-1 mb-8">
          <li>Cooking activities where children help prepare simple dishes</li>
          <li>Growing vegetables and herbs in our nursery garden</li>
          <li>Learning about where food comes from</li>
          <li>Exploring different foods from around the world</li>
          <li>Developing independence skills such as serving themselves and using utensils</li>
        </ul>

        <div className="bg-[#3aa756]/12 bg-opacity-10 p-6 rounded-lg border border-[#3aa756]">
          <h3 className="text-xl font-bold text-[#3aa756] mb-2">Contact Us</h3>
          <p className="mb-4">
            If you have any questions about our menu or would like to discuss your child's dietary requirements, please
            contact us:
          </p>
          <div className="text-[#3aa756]">
            <strong className="text-red-600">Contact:</strong> admin@littlemarketschoolclub.co.uk | <strong className="text-red-600">Phone:</strong> 01708 608434 | <strong className="text-red-600">Mobile:</strong> 07495 190473
          </div>
        </div>
      </div>
    </div>
  )
}
