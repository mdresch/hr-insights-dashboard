import type { HRAgent } from "@/models/agent-model"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Lightbulb, ArrowRight, CheckCircle } from "lucide-react"

interface EmployeeExperienceAgentIntegrationProps {
  agents: HRAgent[]
}

export function EmployeeExperienceAgentIntegration({ agents }: EmployeeExperienceAgentIntegrationProps) {
  // Find the employee experience agent
  const employeeExperienceAgent = agents.find((agent) => agent.id === "employee-experience")

  // Employee experience use cases and capabilities
  const experienceUseCase = {
    title: "AI-Driven Employee Experience",
    description: "Leverage AI to understand, measure, and enhance employee experiences across the organization.",
    capabilities: [
      {
        title: "Continuous Sentiment Analysis",
        description: "Monitor employee sentiment in real-time through various communication channels.",
        aiModels: ["Natural Language Processing", "Emotion AI"],
        accuracy: 84,
        maturityLevel: "Established",
      },
      {
        title: "Personalized Experience Recommendations",
        description: "Deliver tailored recommendations to enhance individual employee experiences.",
        aiModels: ["Recommendation Systems", "Personalization Engine"],
        accuracy: 78,
        maturityLevel: "Developing",
      },
      {
        title: "Moment Impact Analysis",
        description: "Identify and optimize key moments that shape the employee experience journey.",
        aiModels: ["Predictive Analytics", "Journey Mapping AI"],
        accuracy: 82,
        maturityLevel: "Developing",
      },
      {
        title: "Experience Driver Identification",
        description: "Determine key factors that influence engagement and satisfaction across segments.",
        aiModels: ["Correlation Analysis", "Factor Analytics"],
        accuracy: 88,
        maturityLevel: "Established",
      },
    ],
    applications: [
      "Monitor employee sentiment in real-time across communication channels",
      "Personalize employee experiences based on preferences and needs",
      "Identify and prioritize experience improvement opportunities",
      "Predict engagement trends and proactively address issues",
      "Measure and optimize key employee journey moments",
      "Create targeted experience initiatives for specific employee segments",
      "Analyze the effectiveness of experience improvement actions",
      "Generate meaningful insights from employee feedback",
    ],
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">AI-Powered Employee Experience</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          How our specialized AI agents can transform your employee experience strategy, from measurement to
          personalization.
        </p>
      </div>

      <Card className="bg-[#001a40] border-[#0a3166]">
        <CardHeader>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="bg-[#0047CC] p-2 rounded-lg">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-xl text-white">{experienceUseCase.title}</CardTitle>
            </div>
          </div>
          <p className="text-gray-300 ml-10 mb-2">{experienceUseCase.description}</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {experienceUseCase.capabilities.map((capability, index) => (
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
                <div className="font-medium text-white mb-2">AI Applications in Employee Experience</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {experienceUseCase.applications.map((application, idx) => (
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
            <CardTitle className="text-lg text-white">Benefits of AI-Powered Employee Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="bg-[#002050] p-3 rounded-lg">
                <div className="font-medium text-white mb-1">Real-Time Understanding</div>
                <div className="text-sm text-gray-300">
                  Continuously monitor employee sentiment and engagement rather than relying on point-in-time surveys.
                </div>
              </div>
              <div className="bg-[#002050] p-3 rounded-lg">
                <div className="font-medium text-white mb-1">Personalized Experiences</div>
                <div className="text-sm text-gray-300">
                  Create tailored experiences that address individual preferences, needs, and career stages.
                </div>
              </div>
              <div className="bg-[#002050] p-3 rounded-lg">
                <div className="font-medium text-white mb-1">Proactive Intervention</div>
                <div className="text-sm text-gray-300">
                  Identify engagement risks and experience issues before they impact retention or performance.
                </div>
              </div>
              <div className="bg-[#002050] p-3 rounded-lg">
                <div className="font-medium text-white mb-1">Democratized Insights</div>
                <div className="text-sm text-gray-300">
                  Make employee experience insights accessible and actionable for managers at all levels.
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
                  <div className="font-medium text-white">Experience Measurement</div>
                </div>
                <div className="text-sm text-gray-300">
                  Implement AI-powered listening tools across multiple channels to gather continuous feedback.
                </div>
              </div>
              <div className="bg-[#002050] p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Badge className="bg-[#36b6b0]">Phase 2</Badge>
                  <div className="font-medium text-white">Experience Analysis</div>
                </div>
                <div className="text-sm text-gray-300">
                  Deploy AI analytics to identify key experience drivers, segment insights, and prioritize actions.
                </div>
              </div>
              <div className="bg-[#002050] p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Badge className="bg-[#36b6b0]">Phase 3</Badge>
                  <div className="font-medium text-white">Personalized Experiences</div>
                </div>
                <div className="text-sm text-gray-300">
                  Deliver tailored experiences, content, and support based on individual employee needs.
                </div>
              </div>
              <div className="bg-[#002050] p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Badge className="bg-[#36b6b0]">Phase 4</Badge>
                  <div className="font-medium text-white">Predictive Experience</div>
                </div>
                <div className="text-sm text-gray-300">
                  Implement predictive models that anticipate engagement risks and proactively suggest interventions.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

