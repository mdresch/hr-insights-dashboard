import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function InsightsSection() {
  return (
    <section className="py-16 bg-[#001a40]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">AI-Generated HR Insights</h2>
        <p className="text-gray-300 mb-12 max-w-3xl">
          Our AI agents continuously analyze data from multiple sources to provide you with the most relevant insights
          for your HR strategy.
        </p>

        <Tabs defaultValue="trends" className="w-full">
          <TabsList className="bg-[#002050] border border-[#0a3166]">
            <TabsTrigger value="trends" className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white">
              Emerging Trends
            </TabsTrigger>
            <TabsTrigger value="challenges" className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white">
              Anticipated Challenges
            </TabsTrigger>
            <TabsTrigger
              value="opportunities"
              className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white"
            >
              Strategic Opportunities
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trends" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Skills-Based Hiring",
                  description:
                    "70% of organizations are shifting toward skills-based hiring over traditional credentials.",
                  confidence: 92,
                },
                {
                  title: "Hybrid Work Evolution",
                  description:
                    "Companies with flexible work policies report 35% higher retention rates than those without.",
                  confidence: 88,
                },
                {
                  title: "AI in HR Processes",
                  description: "AI-assisted recruitment reduces time-to-hire by 40% while improving candidate quality.",
                  confidence: 85,
                },
              ].map((insight, index) => (
                <Card key={index} className="bg-[#002050] border-[#0a3166]">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{insight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{insight.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="text-[#36b6b0]">AI Confidence:</span> {insight.confidence}%
                      </div>
                      <button className="text-sm text-[#36b6b0] hover:underline">Full Analysis →</button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="challenges" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Skill Obsolescence",
                  description:
                    "43% of current skills will become obsolete within the next 3-5 years due to AI and automation.",
                  impact: "High",
                },
                {
                  title: "Retention Pressure",
                  description: "Employee turnover costs are projected to increase by 25% in the next year.",
                  impact: "High",
                },
                {
                  title: "Regulatory Compliance",
                  description:
                    "New workplace regulations will require significant policy updates for 65% of organizations.",
                  impact: "Medium",
                },
              ].map((challenge, index) => (
                <Card key={index} className="bg-[#002050] border-[#0a3166]">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{challenge.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="text-[#36b6b0]">Impact Level:</span> {challenge.impact}
                      </div>
                      <button className="text-sm text-[#36b6b0] hover:underline">Mitigation Plan →</button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="opportunities" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Internal Talent Marketplace",
                  description: "Organizations with internal mobility programs see 41% longer employee tenure.",
                  roi: "3.2x",
                },
                {
                  title: "Wellness Program Expansion",
                  description: "Comprehensive wellness programs reduce healthcare costs by 18% and absenteeism by 28%.",
                  roi: "2.7x",
                },
                {
                  title: "Continuous Feedback Systems",
                  description:
                    "Real-time feedback tools increase performance improvement by 24% compared to annual reviews.",
                  roi: "1.9x",
                },
              ].map((opportunity, index) => (
                <Card key={index} className="bg-[#002050] border-[#0a3166]">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{opportunity.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="text-[#36b6b0]">Potential ROI:</span> {opportunity.roi}
                      </div>
                      <button className="text-sm text-[#36b6b0] hover:underline">Implementation Guide →</button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

