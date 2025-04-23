export default function CalendarPage() {
    return (
      <div>
        <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Calendar</h1>
  
        <div className="prose max-w-none">
          <div className="bg-[#3aa756]/12 bg-opacity-10 p-6 rounded-lg mb-8 border-l-4 border-[#3aa756]">
            <h2 className="text-2xl font-bold text-[#3aa756] mb-2">Term Dates & Holidays</h2>
            <p>
              Little Market Nursery operates year-round, with the exception of bank holidays and a short closure period
              between Christmas and New Year. This allows us to provide consistent care for working parents throughout the
              year.
            </p>
          </div>
  
          <h2 className="text-2xl font-bold text-[#3aa756] mb-4">2025 Calendar</h2>
  
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-[#3aa756] mb-2 text-center">Spring Term</h3>
              <div className="space-y-2">
                <p>
                  <strong>Term Starts:</strong> Monday, 6th January 2025
                </p>
                <p>
                  <strong>Half Term:</strong> 17th - 21st February 2025
                </p>
                <p>
                  <strong>Term Ends:</strong> Friday, 4th April 2025
                </p>
              </div>
            </div>
  
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-[#3aa756] mb-2 text-center">Summer Term</h3>
              <div className="space-y-2">
                <p>
                  <strong>Term Starts:</strong> Monday, 21st April 2025
                </p>
                <p>
                  <strong>Half Term:</strong> 26th - 30th May 2025
                </p>
                <p>
                  <strong>Term Ends:</strong> Friday, 18th July 2025
                </p>
              </div>
            </div>
  
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-[#3aa756] mb-2 text-center">Autumn Term</h3>
              <div className="space-y-2">
                <p>
                  <strong>Term Starts:</strong> Monday, 1st September 2025
                </p>
                <p>
                  <strong>Half Term:</strong> 27th - 31st October 2025
                </p>
                <p>
                  <strong>Term Ends:</strong> Friday, 19th December 2025
                </p>
              </div>
            </div>
          </div>
  
          <div className="bg-[#fcb900]/12  bg-opacity-10 p-6 rounded-lg mb-8 border-l-4 border-[#fcb900]">
            <h3 className="text-xl font-bold text-[#ff6900] mb-2">Bank Holiday Closures 2025</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>New Year's Day: Wednesday, 1st January</li>
              <li>Good Friday: Friday, 18th April</li>
              <li>Easter Monday: Monday, 21st April</li>
              <li>Early May Bank Holiday: Monday, 5th May</li>
              <li>Spring Bank Holiday: Monday, 26th May</li>
              <li>Summer Bank Holiday: Monday, 25th August</li>
              <li>Christmas Day: Thursday, 25th December</li>
              <li>Boxing Day: Friday, 26th December</li>
            </ul>
          </div>
  
          <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Operating Hours</h2>
  
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
            <p className="mb-4">
              Little Market Nursery is open from <strong>7:30 AM to 6:00 PM</strong>, Monday through Friday, throughout
              the year (except for bank holidays and the Christmas closure period).
            </p>
            <p>
              We offer flexible attendance options to accommodate different family needs, including full-day sessions and
              part-time options. Please see our Fees & Funding page for more details on session times and costs.
            </p>
          </div>
  
          <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Daily Schedule Example</h2>
  
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-[#3aa756] text-white">
                  <th className="py-2 px-4 border-b text-left">Time</th>
                  <th className="py-2 px-4 border-b text-left">Activity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">7:30 - 8:45 AM</td>
                  <td className="py-2 px-4 border-b">Arrival and breakfast</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b font-medium">8:45 - 9:15 AM</td>
                  <td className="py-2 px-4 border-b">Free play and settling in</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">9:15 - 9:30 AM</td>
                  <td className="py-2 px-4 border-b">Circle time and morning greeting</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b font-medium">9:30 - 10:00 AM</td>
                  <td className="py-2 px-4 border-b">Planned activities based on EYFS</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">10:00 - 10:15 AM</td>
                  <td className="py-2 px-4 border-b">Morning snack</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b font-medium">10:15 - 11:15 AM</td>
                  <td className="py-2 px-4 border-b">Outdoor play (weather permitting)</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">11:15 - 11:30 AM</td>
                  <td className="py-2 px-4 border-b">Story time</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b font-medium">11:30 AM - 12:30 PM</td>
                  <td className="py-2 px-4 border-b">Lunch time</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">12:30 - 2:30 PM</td>
                  <td className="py-2 px-4 border-b">Nap/quiet time (age dependent)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b font-medium">2:30 - 3:00 PM</td>
                  <td className="py-2 px-4 border-b">Afternoon activities</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">3:00 - 3:30 PM</td>
                  <td className="py-2 px-4 border-b">Tea time</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b font-medium">3:30 - 4:30 PM</td>
                  <td className="py-2 px-4 border-b">Free play and focused activities</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">4:30 - 5:30 PM</td>
                  <td className="py-2 px-4 border-b">Outdoor play (weather permitting)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b font-medium">5:30 - 5:45 PM</td>
                  <td className="py-2 px-4 border-b">Late snack</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b font-medium">5:45 - 6:00 PM</td>
                  <td className="py-2 px-4 border-b">Quiet activities and home time</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <div className="bg-[#3aa756]/12 bg-opacity-10 p-6 rounded-lg border border-[#3aa756]">
            <h3 className="text-xl font-bold text-[#3aa756] mb-2">Important Notes</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                The daily schedule may vary slightly depending on the age group and individual needs of the children.
              </li>
              <li>
                Babies follow their own individual routines for feeding, sleeping, and play, as directed by parents.
              </li>
              <li>
                We encourage parents to arrive at least 10 minutes before closing time to allow for a smooth handover and
                discussion about their child's day.
              </li>
              <li>
                Please inform us in advance if someone different will be collecting your child, as we have strict security
                procedures in place.
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  