import Image from "next/image"

export default function OurTeamPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Our Team</h1>

      <div className="prose max-w-none">
        <div className="bg-[#3aa756]/12 bg-opacity-10 p-6 rounded-lg mb-8">
          <p className="text-lg">
            At Little Market, we have two dedicated teams of professionals committed to providing exceptional care and
            education for your children. Our staff members are carefully selected for their qualifications, experience,
            and passion for early childhood development.
          </p>
        </div>

        {/* Little Market Day Nursery Team */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="h-8 w-2 bg-[#3aa756] mr-3"></div>
            <h2 className="text-2xl font-bold text-[#3aa756]">Little Market Day Nursery Team</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/galleries/nursery-images/Our_People/tezcan-nursery-proprietor-manager.webp"
                  alt="Tezcan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#3aa756]">Tezcan</h3>
                <p className="text-[#ff6900] font-medium mb-3">Nursery Proprietor</p>
                <p className="text-sm text-gray-600 mb-2">NVQ Level 4</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/galleries/nursery-images/Our_People/emine-nursery-manager.webp"
                  alt="Emine"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#3aa756]">Emine</h3>
                <p className="text-[#ff6900] font-medium mb-3">Nursery Manager</p>
                <p className="text-sm text-gray-600 mb-2">NVQ Level 3</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/galleries/nursery-images/Our_People/nicola-deputy-nursery-manager.webp"
                  alt="Nicola"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#3aa756]">Nicola</h3>
                <p className="text-[#ff6900] font-medium mb-3">Deputy Manager</p>
                <p className="text-sm text-gray-600 mb-2">NVQ Level 3</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="mb-4">
              Our close knit team consists of fully qualified staff who hold a level 2, 3, 4 and staff training towards
              a level 5.
            </p>
            <p className="mb-4">
              All staff go through an enhanced DBS check and all qualified practitioners and apprenticeships are
              paediatric first aid trained.
            </p>
            <p className="mb-4">We are fortunate to have a highly qualified, experienced and talented staff.</p>
            <p className="mb-4">
              However we also offer opportunities to those who want to learn the profession, by taking on apprentices
              who have a strong passion for working with children.
            </p>
            <p className="mb-4">
              We are staff who are committed to developing children through a variety of teaching and opportunities,
              staff are committed to receiving a high level of ongoing training and work well as a team.
            </p>
            <p>
              We clearly define boundaries of acceptable behaviour and encourage each child to aspire to achieve his or
              her full potential and beyond.
            </p>
          </div>
        </div>

        {/* Little Market After School Club Team */}
        <div>
          <div className="flex items-center mb-6">
            <div className="h-8 w-2 bg-[#df2020] mr-3"></div>
            <h2 className="text-2xl font-bold text-[#df2020]">Little Market After School Club Team</h2>
          </div>

          <div className="bg-[#df2020]/10 bg-opacity-10 p-6 rounded-lg mb-8 border-l-4 border-[#df2020]">
            <h3 className="text-xl font-bold text-[#df2020] mb-2">Meet the People Who Make It All Happen</h3>
            <p>
              At Little Market After School Club, we believe that it takes a caring and dedicated team to build a safe
              and enriching environment for children. Our passionate staff bring years of childcare experience,
              creativity, and compassion to every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/galleries/school-club-images/Our_People/kathy-james-proprietor-manager.jpg"
                  alt="Kathy James"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#df2020]">Kathy James</h3>
                <p className="text-[#ff6900] font-medium mb-3">Club Manager & Proprietor</p>
                <p className="text-sm text-gray-600 mb-2">NVQ Level 3 (currently working towards Level 5)</p>
              </div>
            </div>

            {/* <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/galleries/school-club-images/Our_People/michael-business-support-manager.jpeg"
                  alt="Michael Moodie"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#df2020]">Michael Moodie</h3>
                <p className="text-[#ff6900] font-medium mb-3">Business Support Manager</p>
                <p className="text-sm text-gray-600 mb-2">NVQ Level 2, NVQ Level 3</p>
              </div>
            </div> */}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-bold text-[#df2020] mb-4">Early Years Playworkers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-50 p-3 rounded-lg text-center">Angela</div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">Elizabeth</div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">Louise</div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">Maya</div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">Jade</div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">Leah B</div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">Leah D</div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">Andrew</div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">Amy</div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">Lauren</div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">Marium</div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">Sam</div>
            </div>

            <h3 className="text-xl font-bold text-[#df2020] mb-4">Work Experience</h3>
            <div className="bg-gray-50 p-3 rounded-lg mb-6 inline-block">Jazmine</div>

            <p>
              Every member of our team undergoes enhanced DBS checks and receives regular training to ensure your
              child's safety and development are our top priorities.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
