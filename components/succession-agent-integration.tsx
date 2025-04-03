import type { HRAgent } from "@/models/agent-model"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Lightbulb, ArrowRight, CheckCircle } from "lucide-react"

interface SuccessionAgentIntegrationProps {
  agents: HRAgent[]
}

export function SuccessionAgentIntegration({ agents }: SuccessionAgentIntegrationProps) {
  // Find the workforce planning agent which is most relevant for succession planning
  const successionAgent = agents.find((agent) => agent.id === "workforce-planning")

  // Succession planning use cases and capabilities
  const successionUseCase = {
    title: "AI-Driven Succession Planning",
    description:
      "Leverage AI to identify high-potential talent, assess leadership readiness, and create targeted development plans.",
    capabilities: [
      {
        title: "Successor Identification & Assessment",
        description:
          "Analyze performance data, competencies, and potential to identify and assess succession candidates.",
        aiModels: ["Predictive Analytics", "Competency Matching Algorithms"],
        accuracy: 82,
        maturityLevel: "Developing",
      },
      {
        title: "Leadership Bench Strength Analysis",
        description: "Evaluate the depth and readiness of leadership pipeline for critical roles.",
        aiModels: ["Risk Assessment Models", "Readiness Prediction"],
        accuracy: 78,
        maturityLevel: "Developing",
      },
      {
        title: "Development Plan Generation",
        description: "Create personalized development plans based on competency gaps and career aspirations.",
        aiModels: ["Recommendation Systems", "Gap Analysis AI"],
        accuracy: 85,
        maturityLevel: "Established",
      },
      {
        title: "Flight Risk Prediction",
        description: "Identify retention risks among high-potential succession candidates.",
        aiModels: ["Attrition Prediction", "Engagement Analysis"],
        accuracy: 76,
        maturityLevel: "Emerging",
      },
    ],
    applications: [
      "Automate succession candidate identification based on performance, potential, and competency data",
      "Generate real-time bench strength metrics for critical positions",
      "Create personalized development plans to close competency gaps",
      "Predict leadership pipeline risks and recommend mitigation strategies",
      "Analyze diversity in succession pipeline and recommend inclusion strategies",
      "Monitor successor readiness and provide progress updates",
      "Identify hidden talent through pattern recognition in performance data",
      "Simulate leadership scenarios to test successor readiness",
    ],
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">AI-Powered Succession Planning</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          How our specialized AI agents can transform your succession planning process, from identifying high-potential
          talent to developing future leaders.
        </p>
      </div>

      <Card className="bg-[#001a40] border-[#0a3166]">
        <CardHeader>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="bg-[#0047CC] p-2 rounded-lg">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-xl text-white">{successionUseCase.title}</CardTitle>
            </div>
          </div>
          <p className="text-gray-300 ml-10 mb-2">{successionUseCase.description}</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {successionUseCase.capabilities.map((capability, index) => (
              <div key={index} className="bg-[#002050] p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-[#36b6b0] p-2 rounded-lg shrink-0">
                    <Lightbulb className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="font-medium text-white">{capability.title}</div>
                      <Badge
                        className={
                          capability.maturityLevel === "Advanced"
                            ? "bg-purple-500"
                            : capability.maturityLevel === "Established"
                              ? "bg-green-500"
                              : capability.maturityLevel === "Developing"
                                ? "bg-amber-500"
                                : "bg-blue-500"
                        }
                      >
                        {capability.maturityLevel}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-300 mb-2">{capability.description}</div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {capability.aiModels.map((model, idx) => (
                        <Badge key={idx} variant="outline" className="border-[#36b6b0] text-[#36b6b0]">
                          {model}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-xs text-[#36b6b0]">Accuracy: {capability.accuracy}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#002050] p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="bg-[#0047CC] p-2 rounded-lg shrink-0">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-medium text-white mb-2">AI Applications in Succession Planning</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {successionUseCase.applications.map((application, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-[#001a40] border-[#0a3166]">
          <CardHeader>
            <CardTitle className="text-lg text-white">Benefits of AI-Powered Succession Planning</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="bg-[#002050] p-3 rounded-lg">
                <div className="font-medium text-white mb-1">Data-Driven Decision Making</div>
                <div className="text-sm text-gray-300">
                  Replace subjective assessments with objective, data-driven insights about potential and readiness.
                </div>
              </div>
              <div className="bg-[#002050] p-3 rounded-lg">
                <div className="font-medium text-white mb-1">Proactive Risk Management</div>
                <div className="text-sm text-gray-300">
                  Identify leadership pipeline gaps and flight risks before they become critical issues.
                </div>
              </div>
              <div className="bg-[#002050] p-3 rounded-lg">
                <div className="font-medium text-white mb-1">Personalized Development</div>
                <div className="text-sm text-gray-300">
                  Create targeted development plans based on individual competency gaps and learning preferences.
                </div>
              </div>
              <div className="bg-[#002050] p-3 rounded-lg">
                <div className="font-medium text-white mb-1">Hidden Talent Discovery</div>
                <div className="text-sm text-gray-300">
                  Uncover high-potential employees who might be overlooked in traditional succession processes.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#001a40] border-[#0a3166]">
          <CardHeader>
            <CardTitle className="text-lg text-white">Implementation Roadmap</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="bg-[#002050] p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Badge className="bg-[#36b6b0]">Phase 1</Badge>
                  <div className="font-medium text-white">Data Foundation</div>
                </div>
                <div className="text-sm text-gray-300">
                  Integrate performance, potential, and competency data to create a comprehensive talent profile
                  database.
                </div>
              </div>
              <div className="bg-[#002050] p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Badge className="bg-[#36b6b0]">Phase 2</Badge>
                  <div className="font-medium text-white">AI Model Deployment</div>
                </div>
                <div className="text-sm text-gray-300">
                  Implement succession-specific AI models for successor identification, bench strength analysis, and
                  development planning.
                </div>
              </div>
              <div className="bg-[#002050] p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Badge className="bg-[#36b6b0]">Phase 3</Badge>
                  <div className="font-medium text-white">Process Integration</div>
                </div>
                <div className="text-sm text-gray-300">
                  Embed AI insights into succession planning meetings, talent reviews, and development discussions.
                </div>
              </div>
              <div className="bg-[#002050] p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Badge className="bg-[#36b6b0]">Phase 4</Badge>
                  <div className="font-medium text-white">Continuous Improvement</div>
                </div>
                <div className="text-sm text-gray-300">
                  Refine AI models based on succession outcomes and evolving leadership requirements.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

