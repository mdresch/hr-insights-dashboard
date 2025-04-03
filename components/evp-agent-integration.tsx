import type { EVPCategory } from "@/models/evp-model"
import type { HRAgent } from "@/models/agent-model"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Lightbulb, ArrowRight, CheckCircle } from "lucide-react"

interface EVPAgentIntegrationProps {
  categories: EVPCategory[]
  agents: HRAgent[]
}

export function EVPAgentIntegration({ categories, agents }: EVPAgentIntegrationProps) {
  // Map EVP categories to relevant agents
  const categoryAgentMapping = [
    {
      categoryId: "compensation",
      agentIds: ["compensation-benefits"],
    },
    {
      categoryId: "work-life",
      agentIds: ["employee-experience"],
    },
    {
      categoryId: "development",
      agentIds: ["learning-development", "workforce-planning"],
    },
    {
      categoryId: "culture",
      agentIds: ["employee-experience"],
    },
    {
      categoryId: "purpose",
      agentIds: ["employee-experience", "workforce-planning"],
    },
  ]

  // Create integrated view of categories and agents
  const integratedView = categories.map((category) => {
    const mapping = categoryAgentMapping.find((m) => m.categoryId === category.id)
    const relevantAgents = mapping ? agents.filter((agent) => mapping.agentIds.includes(agent.id)) : []

    // Find relevant capabilities from these agents
    const relevantCapabilities = relevantAgents
      .flatMap((agent) => {
        return agent.capabilities.map((capability) => ({
          agentId: agent.id,
          agentName: agent.name,
          capability,
        }))
      })
      .slice(0, 3) // Limit to top 3 capabilities

    return {
      category,
      agents: relevantAgents,
      capabilities: relevantCapabilities,
    }
  })

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">AI Agents for EVP Enhancement</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          How our specialized AI agents can help you strengthen each component of your Employee Value Proposition.
        </p>
      </div>

      <div className="space-y-8">
        {integratedView.map(({ category, agents, capabilities }) => (
          <Card key={category.id} className="bg-[#001a40] border-[#0a3166]">
            <CardHeader className="pb-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="bg-[#0047CC] p-2 rounded-lg">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">{category.name}</CardTitle>
                </div>
                <Badge
                  className={
                    category.priority === "Critical"
                      ? "bg-red-500"
                      : category.priority === "High"
                        ? "bg-amber-500"
                        : category.priority === "Medium"
                          ? "bg-blue-500"
                          : "bg-green-500"
                  }
                >
                  {category.priority} Priority
                </Badge>
              </div>
              <p className="text-gray-300 ml-10 mb-2">{category.description}</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {category.attributes.slice(0, 3).map((attribute) => (
                  <div key={attribute.id} className="bg-[#002050] p-3 rounded-lg">
                    <div className="font-medium text-white mb-1">{attribute.name}</div>
                    <div className="text-xs text-gray-300 mb-2">{attribute.description}</div>
                    <div className="flex items-center justify-between">
                      <div className="text-xs">
                        <span className="text-gray-400">Score: </span>
                        <span className={(attribute.gap || 0) >= 0 ? "text-green-500" : "text-red-500"}>
                          {attribute.satisfactionScore} {(attribute.gap || 0) >= 0 ? "(+" : "("}
                          {attribute.gap})
                        </span>
                      </div>
                      <div className="text-xs text-gray-400">Importance: {attribute.importance}/10</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-bold text-white mb-3">AI Agent Capabilities</h4>
                <div className="space-y-3">
                  {capabilities.map((item, index) => (
                    <div key={index} className="bg-[#002050] p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="bg-[#36b6b0] p-2 rounded-lg shrink-0">
                          <Lightbulb className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <div className="font-medium text-white">{item.capability.name}</div>
                            <Badge variant="outline" className="border-[#36b6b0] text-[#36b6b0]">
                              {item.agentName}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-300 mb-2">{item.capability.description}</div>
                          <div className="text-xs text-[#36b6b0]">
                            Accuracy: {item.capability.accuracy}% | Maturity: {item.capability.maturityLevel}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#002050] p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-[#0047CC] p-2 rounded-lg shrink-0">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white mb-2">How AI Agents Can Help</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {getAgentApplications(category.id).map((application, idx) => (
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
        ))}
      </div>
    </div>
  )
}

// Helper function to get agent applications by category
function getAgentApplications(categoryId: string): string[] {
  const applications: Record<string, string[]> = {
    compensation: [
      "Analyze market compensation data to ensure competitive pay",
      "Identify pay equity issues and recommend adjustments",
      "Optimize benefits packages based on employee utilization and preferences",
      "Model financial impact of compensation changes",
      "Personalize total rewards statements to highlight value",
      "Benchmark compensation practices against industry standards",
    ],
    "work-life": [
      "Analyze workload patterns to identify burnout risks",
      "Recommend flexible work policies based on team needs",
      "Monitor work-life sentiment through communication analysis",
      "Suggest personalized wellbeing interventions",
      "Measure impact of flexibility policies on productivity and engagement",
      "Identify manager behaviors that support or hinder work-life balance",
    ],
    development: [
      "Create personalized learning pathways based on career goals",
      "Identify skill gaps and recommend targeted development",
      "Match employees to internal opportunities based on skills and aspirations",
      "Measure effectiveness of learning programs on performance",
      "Recommend mentorship pairings based on development needs",
      "Provide real-time feedback and coaching recommendations",
    ],
    culture: [
      "Analyze communication patterns to assess cultural health",
      "Identify inclusion issues through sentiment and language analysis",
      "Recommend recognition opportunities based on contributions",
      "Measure impact of cultural initiatives on engagement",
      "Provide managers with team culture insights and recommendations",
      "Benchmark cultural practices against high-performing organizations",
    ],
    purpose: [
      "Analyze alignment between individual work and organizational mission",
      "Identify opportunities to communicate impact more effectively",
      "Recommend purpose-driven projects based on employee interests",
      "Measure correlation between purpose alignment and engagement",
      "Suggest ways to connect daily work to broader social impact",
      "Identify purpose-related themes in employee feedback",
    ],
  }

  return applications[categoryId] || []
}

