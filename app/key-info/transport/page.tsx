export default function TransportPage() {
    return (
      <div>
        <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Transport Information</h1>
  
        <div className="prose max-w-none">
          <div className="bg-[#3aa756]/12 bg-opacity-10 p-6 rounded-lg mb-8 border-l-4 border-[#3aa756]">
            <h2 className="text-2xl font-bold text-[#3aa756] mb-2">Getting to Little Market Nursery</h2>
            <p>
              Little Market Nursery is conveniently located in the heart of Romford at The Wykeham Centre, Market Place,
              Romford, RM1 3AB. We are easily accessible by various modes of transportation.
            </p>
          </div>
  
          <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Public Transport</h2>
  
          <div className="space-y-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-[#3aa756] mb-2">By Train</h3>
              <p className="mb-4">
                Romford Station is approximately a 10-minute walk from the nursery. The station is served by:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>TfL Rail services from London Liverpool Street to Shenfield</li>
                <li>Greater Anglia services to various destinations in Essex and East Anglia</li>
                <li>Elizabeth Line (Crossrail) services</li>
              </ul>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-[#3aa756] mb-2">By Bus</h3>
              <p className="mb-4">Several bus routes stop near Romford Market Place, including:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Routes 5, 86, 128, 165, 174, 175, 193, 247, 252, 294, 296, 365, 370, and 496</li>
                <li>The nearest bus stops are located on South Street and Main Road</li>
              </ul>
            </div>
          </div>
  
          <h2 className="text-2xl font-bold text-[#3aa756] mb-4">By Car</h2>
  
          <div className="space-y-6 mb-8">
            <p>If you are driving to the nursery, there are several car parks in the vicinity:</p>
  
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-[#3aa756] mb-2">Market Place Car Park</h3>
                <p className="mb-2">
                  <strong>Distance:</strong> 2-minute walk
                </p>
                <p className="mb-2">
                  <strong>Address:</strong> Market Place, Romford, RM1 3AB
                </p>
                <p>
                  <strong>Parking Fees:</strong> Pay and display, rates vary
                </p>
              </div>
  
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-[#3aa756] mb-2">The Brewery Car Park</h3>
                <p className="mb-2">
                  <strong>Distance:</strong> 5-minute walk
                </p>
                <p className="mb-2">
                  <strong>Address:</strong> The Brewery, Romford, RM1 1AU
                </p>
                <p>
                  <strong>Parking Fees:</strong> Pay on exit, rates vary
                </p>
              </div>
  
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-[#3aa756] mb-2">Liberty Shopping Centre Car Park</h3>
                <p className="mb-2">
                  <strong>Distance:</strong> 7-minute walk
                </p>
                <p className="mb-2">
                  <strong>Address:</strong> Western Road, Romford, RM1 3NH
                </p>
                <p>
                  <strong>Parking Fees:</strong> Pay on exit, rates vary
                </p>
              </div>
  
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-[#3aa756] mb-2">Angel Way Car Park</h3>
                <p className="mb-2">
                  <strong>Distance:</strong> 8-minute walk
                </p>
                <p className="mb-2">
                  <strong>Address:</strong> Angel Way, Romford, RM1 1HR
                </p>
                <p>
                  <strong>Parking Fees:</strong> Pay and display, rates vary
                </p>
              </div>
            </div>
          </div>
  
          <div className="bg-[#fcb900]/12 bg-opacity-10 p-6 rounded-lg border border-[#fcb900] mb-8">
            <h3 className="text-xl font-bold text-[#ff6900] mb-2">Drop-off and Pick-up</h3>
            <p className="mb-4">
              For the safety of all children, please note the following guidelines for drop-off and pick-up:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                There is no dedicated parking directly outside the nursery, so please use one of the nearby car parks.
              </li>
              <li>Allow extra time for parking and walking to the nursery, especially during busy periods.</li>
              <li>Please do not leave siblings unattended in vehicles while dropping off or collecting your child.</li>
              <li>
                Hold your child's hand at all times when walking to and from the nursery, as the Market Place area can be
                busy.
              </li>
            </ul>
          </div>
  
          <h2 className="text-2xl font-bold text-[#3aa756] mb-4">School Pick-up Service</h2>
  
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
            <p className="mb-4">
              For our After School Club, we offer a pick-up service from selected local primary schools:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>St. Edward's Church of England Primary School</li>
              <li>Concordia Academy</li>
              <li>Hylands Primary School</li>
              <li>Mawney Foundation School</li>
              <li>St. Peter's Catholic Primary School</li>
            </ul>
            <p>
              Our staff collect children from these schools and safely transport them to our After School Club. If your
              child's school is not listed, please contact us to discuss possible arrangements.
            </p>
          </div>
  
          <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Cycling and Walking</h2>
  
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
            <p className="mb-4">We encourage environmentally friendly travel where possible:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Bicycle racks are available near the Wykeham Centre for secure bicycle parking.</li>
              <li>The nursery is accessible via pedestrian walkways from all directions.</li>
              <li>Walking routes from Romford Station and major bus stops are well-lit and have proper pavements.</li>
            </ul>
          </div>
  
          <div className="bg-[#3aa756]/12 bg-opacity-10 p-6 rounded-lg border border-[#3aa756]">
            <h3 className="text-xl font-bold text-[#3aa756] mb-2">Contact Us</h3>
            <p className="mb-4">
              If you have any questions about transport options or need directions to the nursery, please contact us:
            </p>
            <div className="text-[#3aa756]">
            <strong className="text-red-600">Contact:</strong> admin@littlemarketschoolclub.co.uk | <strong className="text-red-600">Phone:</strong> 01708 608434 | <strong className="text-red-600">Mobile:</strong> 07495 190473
          </div>
          </div>
        </div>
      </div>
    )
  }
  