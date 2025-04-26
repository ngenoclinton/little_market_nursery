import { Accordion, AccordionItem } from "@/components/accordion"
import Image from "next/image"

export default function FeesAndFundingPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#3aa756] mb-6">Fees & Funding</h1>

      <div className="prose max-w-none">
        <div className="bg-[#3aa756]/12 bg-opacity-10 p-6 rounded-lg mb-8 border-l-4 border-[#3aa756]">
          <h2 className="text-2xl font-bold text-[#3aa756] mb-2">Fees & Sessions</h2>
          <p>
            Little Market Day Nursery provides an affordable day care service for children under four. Depending on your
            child's age and your income, you may be able to get free childcare.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Nursery Fees</h2>

        <p className="mb-6">Our nursery prices are as follows:</p>

        <div className="mb-8">
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lDDLHkvvUQ5YpMH4p6WrNdHkIZk1lf.png"
              alt="Nursery Fees Table"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Funding Options</h2>

        <p className="mb-6">
          There are several funding options available to help with childcare costs. Please review the information below
          to see what you might be eligible for:
        </p>

        <Accordion>
          <AccordionItem title="Nursery Fees Exemption For Two Year Olds">
            <p className="mb-4">Free education and childcare is available to some two year olds in England.</p>
            <p className="mb-4">If you receive one of the following, then your child will be eligible:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Child Tax Credit and/or Working Tax Credit and have an annual income under £16,190</li>
              <li>Income Support</li>
              <li>Income-based Jobseeker's Allowance (JSA)</li>
              <li>Income-related Employment and Support Allowance (ESA)</li>
              <li>Support through part six of the Immigration and Asylum Act</li>
              <li>The guaranteed element of State Pension Credit</li>
              <li>
                The Working Tax Credit 4-week run on (the payment you get when you stop qualifying for Working Tax
                Credit)
              </li>
              <li>Universal Credit</li>
            </ul>
            <p className="mb-4">In addition a child is eligible for a free space if:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>They're looked after by a local council</li>
              <li>
                They have a current statement of special education needs (SEN) or an education health and care plan
              </li>
              <li>They get Disability Living Allowance</li>
              <li>They've left care under a special guardianship order, child arrangements order or adoption order</li>
            </ul>
            <p>
              If your child meets the criteria above, you can start claiming once they've turned two. The date you can
              claim will depend on when their birthday is.
            </p>
          </AccordionItem>

          <AccordionItem title="Free Spaces For Three And Four Year Olds">
            <p className="mb-4">
              All three and four year olds can get free early education or childcare for up to 15 hours a week over 38
              weeks a year (570 hours a year), plus 30 hours of government funding.
            </p>
            <p className="mb-4">
              You can start to claim this after your child turns three.{" "}
              <a href="#" className="text-[#3aa756] hover:underline">
                Find out more here
              </a>
              .
            </p>
            <p>
              Little Market Nursery also offer the Stretched Funding for 2, 3, and 4 year olds for 11 hours per week
              over the 52 weeks of the year.
            </p>
          </AccordionItem>

          <AccordionItem title="Tax Credits">
            <p>
              You could get extra money towards your childcare costs in the form of tax credits while you're working.
            </p>
          </AccordionItem>

          <AccordionItem title="Child care vouchers">
            <p className="mb-4">
              Your employer may offer a Childcare Voucher scheme which means you can reduce your day nursery fees, and
              if there are two parents or carers then you can make double the savings.
            </p>
            <p className="mb-4">
              Changes are being introduced to the scheme from Autumn 2015 and it will alter what you are entitled to.
            </p>
            <p className="mb-4">
              The vouchers may also affect your tax credits so get in touch with you local Working Tax credit office to
              find out more. Also if your cash salary is below the National Minimum Wage you may not be eligible.
            </p>
            <p className="mb-4">
              If your employer does run the childcare voucher scheme, come and talk to us so we can give you the
              necessary information.
            </p>
            <p>
              You can find out more about childcare vouchers at:{" "}
              <a
                href="https://www.childcarevouchers.co.uk"
                className="text-[#3aa756] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                childcarevouchers.co.uk
              </a>
            </p>
          </AccordionItem>

          <AccordionItem title="Full-time students">
            <p>
              If you are in full-time education and in receipt of student finance, you can get some contributions
              towards your nursery fees. This is paid on top of your student finance, and you don't have to pay it back.
            </p>
          </AccordionItem>
        </Accordion>

        <div className="mt-8 bg-[#fcb900]/12 bg-opacity-10 p-6 rounded-lg border border-[#fcb900]">
          <h3 className="text-xl font-bold text-[#ff6900] mb-2">Payment Terms</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Fees are payable monthly in advance by the 1st of each month.</li>
            <li>We accept payment by bank transfer, childcare vouchers, and tax-free childcare.</li>
            <li>Late payment may incur an additional charge.</li>
            <li>Fees are reviewed annually, and any changes will be communicated with at least one month's notice.</li>
            <li>
              Fees are payable during periods of absence including sickness and holidays, as your child's place is
              secured during these periods.
            </li>
          </ul>
        </div>

        <div className="mt-8 bg-[#3aa756]/12 bg-opacity-10 p-6 rounded-lg border border-[#3aa756]">
          <h3 className="text-xl font-bold text-[#3aa756] mb-2">Need Help?</h3>
          <p className="mb-4">
            If you have any questions about fees, funding options, or payment methods, please don't hesitate to contact
            us:
          </p>
          <div className="text-[#3aa756]">
            <strong className="text-red-600">Contact:</strong> admin@littlemarketschoolclub.co.uk | <strong className="text-red-600">Phone:</strong> 01708 608434 | <strong className="text-red-600">Mobile:</strong> 07495 190473
          </div>
        </div>
      </div>
    </div>
  )
}
