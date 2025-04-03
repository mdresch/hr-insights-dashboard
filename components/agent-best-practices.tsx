import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertTriangle, Users, Database, Shield, BarChart } from "lucide-react"

export function AgentBestPractices() {
  const bestPractices = [
    {
      id: "data-quality",
      title: "Ensure Data Quality & Governance",
      description:
        "Establish robust data standards, cleaning processes, and governance frameworks before implementing AI agents.",
      icon: Database,
      tips: [
        "Conduct a comprehensive data audit across HR systems",
        "Implement data quality monitoring and remediation processes",
        "Establish clear data ownership and governance policies",
        "Create a unified data dictionary for HR metrics and attributes",
      ],
    },
    {
      id: "human-oversight",
      title: "Maintain Human Oversight",
      description:
        "Design AI agent implementations with appropriate human review and intervention points to ensure quality and trust.",
      icon: Users,
      tips: [
        "Define clear roles for AI and human decision-makers",
        "Implement confidence thresholds for automated decisions",
        "Create escalation paths for complex or sensitive cases",
        "Train HR staff on effective AI collaboration techniques",
      ],
    },
    {
      id: "ethical-framework",
      title: "Develop an Ethical AI Framework",
      description:
        "Create guidelines for responsible AI use that address fairness, transparency, privacy, and accountability.",
      icon: Shield,
      tips: [
        "Establish an AI ethics committee with diverse representation",
        "Conduct regular bias audits of AI agent outputs",
        "Implement explainability features for key decisions",
        "Create clear policies for data privacy and consent",
      ],
    },
    {
      id: "measure-impact",
      title: "Measure Business Impact",
      description: "Develop comprehensive metrics to track the ROI and effectiveness of AI agent implementations.",
      icon: BarChart,
      tips: [
        "Define clear baseline metrics before implementation",
        "Create a balanced scorecard of efficiency and effectiveness measures",
        "Implement user satisfaction tracking for AI interactions",
        "Establish regular review cycles to assess and communicate value",
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">Implementation Best Practices</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Key considerations to ensure successful deployment and adoption of AI agents in your HR function.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bestPractices.map((practice) => (
          <Card key={practice.id} className="bg-[#002050] border-[#0a3166]">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="bg-[#001a40] p-2 rounded-lg">
                  <practice.icon className="h-5 w-5 text-[#36b6b0]" />
                </div>
                <CardTitle className="text-xl text-white">{practice.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">{practice.description}</p>

              <div className="space-y-2">
                {practice.tips.map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-300">{tip}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-[#001a40] border-[#0a3166] mt-8">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-white mb-1">Critical Success Factor</h3>
              <p className="text-gray-300">
                The most successful AI agent implementations in HR start with a clear business problem and focus on
                augmenting human capabilities rather than replacing them. Begin with high-impact use cases where AI can
                provide immediate value, then expand as organizational capabilities mature.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

