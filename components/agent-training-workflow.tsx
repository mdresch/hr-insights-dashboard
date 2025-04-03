import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Database, Brain, BarChart, Users, CheckCircle } from "lucide-react"

export function AgentTrainingWorkflow() {
  const trainingSteps = [
    {
      id: "hr-score-data",
      title: "HR Score Assessment Data",
      description: "Incorporate HR Score maturity assessments as foundational training data.",
      icon: Database,
      benefits: [
        "Establishes baseline maturity levels",
        "Identifies critical capability gaps",
        "Provides industry benchmarks",
        "Defines target maturity states",
      ],
    },
    {
      id: "domain-expertise",
      title: "Domain-Specific Training",
      description: "Train agents on specialized HR domains with maturity progression paths.",
      icon: Brain,
      benefits: [
        "Develops deep domain expertise",
        "Aligns recommendations with maturity levels",
        "Enables contextual understanding of challenges",
        "Supports progressive capability building",
      ],
    },
    {
      id: "maturity-indicators",
      title: "Maturity Indicators & Metrics",
      description: "Train agents to recognize and track key maturity indicators.",
      icon: BarChart,
      benefits: [
        "Enables continuous maturity monitoring",
        "Provides early warning of regression",
        "Measures improvement progress",
        "Quantifies business impact of changes",
      ],
    },
    {
      id: "human-feedback",
      title: "HR Leader Feedback Loop",
      description: "Incorporate feedback from HR leaders to refine recommendations.",
      icon: Users,
      benefits: [
        "Validates AI recommendations",
        "Adapts to organizational context",
        "Builds trust with HR stakeholders",
        "Improves recommendation relevance",
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">Agent Training Workflow</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          How AI agents are trained to understand and improve HR maturity using the Gartner HR Score framework.
        </p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#0a3166] z-0 transform -translate-y-1/2"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
          {trainingSteps.map((step, index) => (
            <div key={step.id} className="flex flex-col">
              <div className="flex items-center justify-center mb-4 md:mb-8">
                <div className="bg-[#0047CC] rounded-full p-4 relative">
                  <step.icon className="h-6 w-6 text-white" />
                  <div className="absolute -top-2 -right-2 bg-[#36b6b0] rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
              </div>

              <Card className="bg-[#001a40] border-[#0a3166] flex-1">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-white">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">{step.description}</p>

                  <div className="space-y-2">
                    {step.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-[#36b6b0] shrink-0 mt-0.5" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {index < trainingSteps.length - 1 && (
                <div className="hidden md:flex justify-center mt-4">
                  <ArrowRight className="h-6 w-6 text-[#36b6b0]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Card className="bg-[#002050] border-[#0a3166] mt-8">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-white mb-4">Continuous Improvement Cycle</h3>
          <p className="text-gray-300 mb-6">
            AI agents continuously learn from new HR Score assessments, implementation outcomes, and HR leader feedback
            to improve their recommendations and adapt to evolving HR maturity requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#001a40] p-4 rounded-lg">
              <Badge className="bg-[#36b6b0] mb-2">Phase 1</Badge>
              <h4 className="font-bold mb-2 text-slate-300">Maturity Assessment</h4>
              <p className="text-sm text-gray-300">
                Agents analyze HR Score data to identify maturity gaps and prioritize improvement areas.
              </p>
            </div>

            <div className="bg-[#001a40] p-4 rounded-lg">
              <Badge className="bg-[#36b6b0] mb-2">Phase 2</Badge>
              <h4 className="font-bold mb-2 text-slate-300">Targeted Recommendations</h4>
              <p className="text-sm text-gray-300">
                Agents provide specific recommendations aligned with the organization's maturity level and goals.
              </p>
            </div>

            <div className="bg-[#001a40] p-4 rounded-lg">
              <Badge className="bg-[#36b6b0] mb-2">Phase 3</Badge>
              <h4 className="font-bold mb-2 text-slate-300">Implementation & Learning</h4>
              <p className="text-sm text-gray-300">
                Agents track implementation outcomes and refine their models based on what works.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

