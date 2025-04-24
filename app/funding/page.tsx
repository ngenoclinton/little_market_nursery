import Link from "next/link"

export default function FundingPage() {
  return (
    <div className="container mx-auto px-4 py-12 pt-[160px]">
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Funding</h1>

      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Nursery Vouchers</h2>
        <p className="mb-4">We accept all childcare vouchers and the HMRC government payment system.</p>
        <p className="mb-4">
          We cater for private sessions and can join voucher payments and private paid hours together.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Funding</h2>
        <p className="mb-6">
          We provide care for 2 year funding, 15 hours, 30 hours term time only and stretched funding to accommodate
          care for the whole year:
        </p>

        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li className="flex items-start">
            <span className="font-bold">15 hours</span>
            <span className="mx-2">=</span>
            <span>11 hours stretched plan</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold">30 hours</span>
            <span className="mx-2">=</span>
            <span>22 hours stretched plan</span>
          </li>
        </ul>

        <p className="mb-6">We cater for private sessions and can join funding and private paid hours together.</p>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-[#3aa756] mb-2">2 Year Funding</h3>
            <p className="text-gray-700">If clicked on then next option will ask for – EY Funding Number</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-[#3aa756] mb-2">15 Hours Funding</h3>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-[#3aa756] mb-2">30 Hours Funding</h3>
            <p className="text-gray-700">If clicked on then next option will ask for – 10 digit code</p>
          </div>
        </div>

        <div className="flex items-center mt-8">
          <p className="text-lg font-medium">
            In partnership with{" "}
            <Link
              href="https://www.childcarechoices.gov.uk/"
              className="text-[#3aa756] hover:underline"
              target="_blank"
            >
              Childcare Choices
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.gov.uk/help-with-childcare-costs"
              className="text-[#3aa756] hover:underline"
              target="_blank"
            >
              Early Years, Childcare & Funding
            </Link>
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Need Help?</h2>
        <p className="mb-4">
          If you have any questions about funding options or would like to discuss your specific situation, please
          contact us:
        </p>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <Link
            href="/contact/ask-question"
            className="inline-flex items-center px-6 py-3 bg-[#3aa756] text-white rounded-md hover:bg-[#2d8444] transition-colors"
          >
            Ask a Question
          </Link>
          <Link
            href="/contact/arrange-visit"
            className="inline-flex items-center px-6 py-3 border-2 border-[#3aa756] text-[#3aa756] hover:bg-[#3aa756] hover:text-white rounded-md transition-colors"
          >
            Arrange a Visit
          </Link>
        </div>
      </div>
    </div>
  )
}
