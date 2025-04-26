export default function AdmissionsPage() {
    return (
      <div>
        <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Admissions</h1>
  
        <div className="prose max-w-none">
          <div className="bg-[#3aa756]/12 bg-opacity-10 p-6 rounded-lg mb-8 border-l-4 border-[#3aa756]">
            <h2 className="text-2xl font-bold text-[#3aa756] mb-2">Admissions & Registration Process</h2>
            <p>
              At Little Market Nursery, we aim to make the admissions process as straightforward as possible for families.
              We welcome children from 3 months to 5 years of age and offer a range of flexible attendance options to suit
              your needs.
            </p>
          </div>
  
          <h2 className="text-2xl font-bold text-[#3aa756] mb-4">How to Apply</h2>
  
          <div className="space-y-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-[#3aa756] mb-2">Step 1: Arrange a Visit</h3>
              <p>
                We encourage all prospective parents to visit our nursery to see our facilities and meet our staff. This
                gives you the opportunity to ask questions and get a feel for our environment. You can arrange a visit by
                calling us on 01708 608434 or emailing admin@littlemarketnursery.co.uk.
              </p>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-[#3aa756] mb-2">Step 2: Complete an Application Form</h3>
              <p>
                After your visit, if you would like to proceed, you will need to complete an application form. This can be
                done online or in person at the nursery. The form collects essential information about your child,
                including any specific needs or requirements.
              </p>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-[#3aa756] mb-2">Step 3: Secure Your Place</h3>
              <p>
                Once your application has been accepted, you will need to pay a registration fee of £50 (non-refundable)
                and a deposit of £100 (refundable when your child leaves the nursery) to secure your place. We will then
                arrange settling-in sessions for your child before their official start date.
              </p>
            </div>
          </div>
  
          <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Required Documentation</h2>
  
          <p className="mb-4">When registering your child, please bring the following documents:</p>
  
          <ul className="list-disc pl-5 space-y-1 mb-8">
            <li>Your child's birth certificate</li>
            <li>Proof of address (utility bill, council tax statement, etc.)</li>
            <li>Details of your child's GP</li>
            <li>Any relevant medical information, including allergies or dietary requirements</li>
            <li>Emergency contact details</li>
            <li>If applicable, documentation for funded childcare entitlement</li>
          </ul>
  
          <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Settling-In Process</h2>
  
          <p className="mb-4">
            We understand that starting nursery is a significant step for both children and parents. Our settling-in
            process is designed to make this transition as smooth as possible:
          </p>
  
          <ol className="list-decimal pl-5 space-y-1 mb-8">
            <li>
              <strong>Initial Visit:</strong> You and your child will visit the nursery together for a short period to
              meet the key person and explore the environment.
            </li>
            <li>
              <strong>Gradual Separation:</strong> Over subsequent visits, the time your child spends at nursery will
              increase, and the time you spend with them will decrease.
            </li>
            <li>
              <strong>Full Sessions:</strong> Once your child is comfortable, they will begin attending their scheduled
              sessions.
            </li>
          </ol>
  
          <div className="bg-[#fcb900]/12 bg-opacity-10 p-6 rounded-lg border border-[#fcb900] mb-8">
            <h3 className="text-xl font-bold text-[#ff6900] mb-2">Waiting List</h3>
            <p>
              If we do not have immediate availability for your preferred sessions, we can place your child on our waiting
              list. Places are allocated based on various factors, including the date of application, siblings already
              attending the nursery, and specific needs.
            </p>
          </div>
  
          <div className="bg-[#3aa756]/12 bg-opacity-10 p-6 rounded-lg border border-[#3aa756]">
            <h3 className="text-xl font-bold text-[#3aa756] mb-2">Contact Us</h3>
            <p className="mb-4">
              If you have any questions about the admissions process or would like to arrange a visit, please contact us:
            </p>
            <div className="text-[#3aa756]">
            <strong className="text-red-600">Contact:</strong> admin@littlemarketschoolclub.co.uk | <strong className="text-red-600">Phone:</strong> 01708 608434 | <strong className="text-red-600">Mobile:</strong> 07495 190473
          </div>
          </div>
        </div>
      </div>
    )
  }
  