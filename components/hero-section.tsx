import { Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 bg-[#001a40]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#36b6b0] mb-6">
              AI Agents for Human Resources Leaders
            </h1>
            <p className="text-xl mb-8">
              Get actionable, objective insight from AI agents trained on specialized HR domains. Our agents identify
              emerging HR trends and anticipate challenges to help you achieve your top priorities.
            </p>

            <div className="mt-8">
              <div className="relative inline-block">
                <select className="appearance-none bg-transparent border border-[#36b6b0] text-[#36b6b0] rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-[#36b6b0]">
                  <option value="">Select Your Mission-Critical Priority</option>
                  <option value="talent">Talent Acquisition & Retention</option>
                  <option value="dei">Diversity, Equity & Inclusion</option>
                  <option value="future">Future of Work</option>
                  <option value="culture">Organizational Culture</option>
                  <option value="performance">Performance Management</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 fill-current text-[#36b6b0]" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#002050] border border-[#0a3166] rounded-lg p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#002050]/80 to-transparent z-10"></div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="AI-powered HR insights visualization"
                className="rounded w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <button className="bg-[#36b6b0] hover:bg-[#2a8a86] text-white rounded-full p-4 transition-all hover:scale-105">
                  <Play className="h-8 w-8" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#002050] to-transparent p-6 z-20">
                <h3 className="text-2xl font-bold text-[#36b6b0]">Unlock CHRO Excellence with AI Agents</h3>
                <p className="text-white mt-2">Watch Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

