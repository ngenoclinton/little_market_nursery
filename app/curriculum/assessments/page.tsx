export default function AssessmentsPage() {
    return (
      <div>
        <h1 className="text-3xl font-bold text-[#3aa756] mb-6">How Assessment Works</h1>
  
        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            At Little Market Nursery, we use ongoing assessment to understand each child&apos;s development, interests,
            and needs. This helps us plan appropriate learning experiences and ensure every child makes progress.
          </p>
  
          <div className="bg-[#3aa756]/12 bg-opacity-10 p-6 rounded-lg mb-8 border-l-4 border-[#3aa756]">
            <h2 className="text-2xl font-bold text-[#3aa756] mb-2">Our Assessment Approach</h2>
            <p>
              We believe in assessment that is meaningful, natural, and supportive of children&apos;s learning journeys.
              Our approach is based on observation, interaction, and partnership with parents and carers.
            </p>
          </div>
  
          <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Types of Assessment</h2>
  
          <div className="space-y-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-[#3aa756] mb-2">Formative Assessment (Ongoing)</h3>
              <p className="mb-4">
                Our practitioners observe children during their everyday activities and interactions. These observations
                help us understand:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>What children can do</li>
                <li>Their interests and preferences</li>
                <li>How they learn best</li>
                <li>Their next steps in development</li>
              </ul>
              <p>
                These observations are recorded in each child&apos;s learning journal on Tapestry and are used to plan
                future activities and experiences.
              </p>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-[#3aa756] mb-2">Summative Assessment (Periodic)</h3>
              <p className="mb-4">
                At key points throughout the year, we compile summative assessments that provide an overview of each
                child&apos;s development across all areas of learning. These include:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Progress checks at age two</li>
                <li>Termly development summaries</li>
                <li>Transition reports when moving to a new room or setting</li>
                <li>The Early Years Foundation Stage Profile at the end of Reception (for school-age children)</li>
              </ul>
              <p>
                These assessments are shared with parents during parent meetings and are used to identify any areas where
                additional support might be beneficial.
              </p>
            </div>
          </div>
  
          <h2 className="text-2xl font-bold text-[#3aa756] mb-4">The Assessment Cycle</h2>
  
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="bg-[#3aa756] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                1
              </div>
              <h3 className="font-bold text-[#3aa756] mb-2">Observe</h3>
              <p className="text-sm">Watch and listen to children during play and activities</p>
            </div>
  
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="bg-[#3aa756] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                2
              </div>
              <h3 className="font-bold text-[#3aa756] mb-2">Assess</h3>
              <p className="text-sm">Identify learning, development, and interests</p>
            </div>
  
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="bg-[#3aa756] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                3
              </div>
              <h3 className="font-bold text-[#3aa756] mb-2">Plan</h3>
              <p className="text-sm">Create experiences based on observations and assessments</p>
            </div>
  
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="bg-[#3aa756] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                4
              </div>
              <h3 className="font-bold text-[#3aa756] mb-2">Review</h3>
              <p className="text-sm">Evaluate effectiveness and plan next steps</p>
            </div>
          </div>
  
          <h2 className="text-2xl font-bold text-[#3aa756] mb-4">Parent Partnership in Assessment</h2>
  
          <p className="mb-4">
            Parents and carers are essential partners in the assessment process. We value your insights and observations
            about your child&apos;s development at home. You can contribute to your child&apos;s learning journey by:
          </p>
  
          <ul className="list-disc pl-5 space-y-1 mb-8">
            <li>Adding observations and photos to Tapestry</li>
            <li>Sharing significant events or achievements from home</li>
            <li>Attending parent meetings to discuss your child&apos;s progress</li>
            <li>Completing &quot;All About Me&quot; forms and questionnaires</li>
            <li>Participating in stay-and-play sessions</li>
          </ul>
  
          <div className="bg-[#ff6900]/12 bg-opacity-10 p-6 rounded-lg border border-[#ff6900]">
            <h3 className="text-xl font-bold text-[#ff6900] mb-2">Questions About Assessment?</h3>
            <p>
              If you have any questions about how we assess your child&apos;s development or would like to discuss their
              progress, please speak to your child&apos;s key person or our nursery manager. We&apos;re always happy to
              explain our approach and work together to support your child&apos;s learning journey.
            </p>
          </div>
        </div>
      </div>
    )
  }
  