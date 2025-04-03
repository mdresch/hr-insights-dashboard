export function TrendAnalysis() {
  return (
    <section className="py-16 bg-[#002050]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">AI-Powered Trend Analysis</h2>
            <p className="text-gray-300 mb-6">
              Our AI agents continuously analyze data from thousands of sources to identify emerging trends and predict
              their impact on your HR strategy.
            </p>

            <div className="space-y-4">
              <div className="bg-[#001a40] p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Remote Work Adoption</span>
                  <span className="text-[#36b6b0]">+32% YoY</span>
                </div>
                <div className="w-full bg-[#0a3166] rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-[#36b6b0] to-[#0047CC] h-2 rounded-full"
                    style={{ width: "78%" }}
                  ></div>
                </div>
              </div>

              <div className="bg-[#001a40] p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">AI in Recruitment</span>
                  <span className="text-[#36b6b0]">+65% YoY</span>
                </div>
                <div className="w-full bg-[#0a3166] rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-[#36b6b0] to-[#0047CC] h-2 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>

              <div className="bg-[#001a40] p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Employee Wellbeing Focus</span>
                  <span className="text-[#36b6b0]">+47% YoY</span>
                </div>
                <div className="w-full bg-[#0a3166] rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-[#36b6b0] to-[#0047CC] h-2 rounded-full"
                    style={{ width: "47%" }}
                  ></div>
                </div>
              </div>
            </div>

            <button className="mt-8 text-[#36b6b0] hover:underline flex items-center">
              View Complete Trend Report
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          <div className="bg-[#001a40] rounded-lg p-6 border border-[#0a3166]">
            <h3 className="text-xl font-bold mb-4">AI Agent Prediction Accuracy</h3>
            <div className="aspect-square w-full bg-[#002050] rounded-lg flex items-center justify-center">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="AI prediction accuracy chart"
                className="max-w-full h-auto"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-[#002050] p-3 rounded-lg">
                <div className="text-sm text-gray-300">Historical Accuracy</div>
                <div className="text-2xl font-bold text-[#36b6b0]">92.4%</div>
              </div>
              <div className="bg-[#002050] p-3 rounded-lg">
                <div className="text-sm text-gray-300">Confidence Level</div>
                <div className="text-2xl font-bold text-[#36b6b0]">High</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

