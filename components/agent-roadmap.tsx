import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, ArrowRight } from "lucide-react"

export function AgentRoadmap() {
  const roadmapStages = [
    {
      id: "foundation",
      title: "Foundation Building",
      timeframe: "1-3 months",
      description: "Establish the data infrastructure and governance needed for AI agent deployment.",
      activities: [
        { name: "Data quality assessment", status: "required" },
        { name: "Skills taxonomy development", status: "required" },
        { name: "Ethical AI framework", status: "required" },
        { name: "Change management planning", status: "required" },
      ],
    },
    {
      id: "pilot",
      title: "Pilot Implementation",
      timeframe: "2-4 months",
      description:
        "Deploy initial agent capabilities in controlled environments to validate value and refine approach.",
      activities: [
        { name: "Select high-impact use cases", status: "required" },
        { name: "Define success metrics", status: "required" },
        { name: "User acceptance testing", status: "required" },
        { name: "Feedback collection system", status: "recommended" },
      ],
    },
    {
      id: "scale",
      title: "Scaled Deployment",
      timeframe: "4-8 months",
      description: "Expand agent capabilities across the organization and integrate into HR workflows.",
      activities: [
        { name: "Integration with core HR systems", status: "required" },
        { name: "User training programs", status: "required" },
        { name: "Continuous improvement process", status: "recommended" },
        { name: "ROI measurement framework", status: "recommended" },
      ],
    },
    {
      id: "orchestration",
      title: "Agent Orchestration",
      timeframe: "8-12 months",
      description: "Connect multiple agents to create end-to-end HR solutions and maximize business impact.",
      activities: [
        { name: "Cross-agent data sharing", status: "required" },
        { name: "Unified user experience", status: "required" },
        { name: "Advanced analytics dashboard", status: "recommended" },
        { name: "Predictive scenario modeling", status: "optional" },
      ],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "required":
        return "bg-red-500"
      case "recommended":
        return "bg-amber-500"
      case "optional":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">Implementation Roadmap</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          A phased approach to implementing AI agents in your HR function, from foundation to full orchestration.
        </p>
      </div>

      <div className="relative">
        <div className="absolute top-10 left-[calc(50%-1px)] h-[calc(100%-5rem)] w-0.5 bg-[#0a3166] z-0"></div>

        <div className="space-y-12 relative z-10">
          {roadmapStages.map((stage, index) => (
            <div key={stage.id} className="flex items-start gap-8">
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 order-2"}`}>
                <h3 className="text-2xl font-bold text-white mb-2">{stage.title}</h3>
                <Badge className="bg-[#36b6b0] mb-3">
                  <Clock className="h-3 w-3 mr-1" />
                  {stage.timeframe}
                </Badge>
                <p className="text-gray-300 mb-4">{stage.description}</p>

                <Card className="bg-[#001a40] border-[#0a3166]">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-[#36b6b0]">Key Activities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {stage.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-center justify-between text-sm">
                          <span className="text-gray-300">{activity.name}</span>
                          <Badge className={`${getStatusColor(activity.status)} text-white`}>{activity.status}</Badge>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="flex items-center justify-center bg-[#0047CC] rounded-full h-10 w-10 z-20">
                <CheckCircle2 className="h-5 w-5 text-white" />
              </div>

              <div className={`w-1/2 ${index % 2 === 0 ? "order-2 pl-8" : "pr-8"}`}>
                {index < roadmapStages.length - 1 && (
                  <div className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} mt-16`}>
                    <ArrowRight className={`h-8 w-8 text-[#36b6b0] ${index % 2 === 1 ? "rotate-180" : ""}`} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

