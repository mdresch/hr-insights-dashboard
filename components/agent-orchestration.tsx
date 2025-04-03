import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { HRAgent } from "@/models/agent-model"
import { Network } from "lucide-react"

interface AgentOrchestrationProps {
  agents: HRAgent[]
}

export function AgentOrchestration({ agents }: AgentOrchestrationProps) {
  const orchestrationScenarios = [
    {
      id: "talent-optimization",
      title: "End-to-End Talent Optimization",
      description: "Orchestrates talent acquisition, development, and retention in a unified talent lifecycle.",
      agents: ["talent-acquisition", "learning-development", "employee-experience"],
      outcomes: [
        "Seamless candidate-to-employee experience",
        "Targeted skill development from day one",
        "Proactive retention of high performers",
      ],
    },
    {
      id: "strategic-workforce",
      title: "Strategic Workforce Evolution",
      description: "Aligns workforce planning, skill development, and compensation to future business needs.",
      agents: ["workforce-planning", "learning-development", "compensation-benefits"],
      outcomes: [
        "Future-ready workforce capabilities",
        "Optimized investment in human capital",
        "Aligned incentives for critical skills",
      ],
    },
    {
      id: "employee-lifecycle",
      title: "Personalized Employee Lifecycle",
      description: "Creates individualized employee journeys from onboarding through development and rewards.",
      agents: ["employee-experience", "learning-development", "compensation-benefits"],
      outcomes: [
        "Tailored employee experiences",
        "Personalized development pathways",
        "Customized total rewards packages",
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">Agent Orchestration Scenarios</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Combine multiple AI agents to create powerful end-to-end HR solutions that address complex business
          challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {orchestrationScenarios.map((scenario) => (
          <Card key={scenario.id} className="bg-[#002050] border-[#0a3166] hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-gradient-to-r from-[#36b6b0] to-[#0047CC] p-2 rounded-lg">
                  <Network className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-xl text-white">{scenario.title}</CardTitle>
              </div>
              <p className="text-gray-300">{scenario.description}</p>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="text-sm text-[#36b6b0] mb-2">Orchestrated Agents</div>
                <div className="flex flex-wrap gap-2">
                  {scenario.agents.map((agentId) => {
                    const agent = agents.find((a) => a.id === agentId)
                    return agent ? (
                      <div key={agentId} className="bg-[#001a40] px-3 py-1 rounded-full text-sm text-slate-300">
                        {agent.name}
                      </div>
                    ) : null
                  })}
                </div>
              </div>

              <div>
                <div className="text-sm text-[#36b6b0] mb-2">Business Outcomes</div>
                <ul className="space-y-1">
                  {scenario.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start text-gray-300 text-sm">
                      <div className="h-2 w-2 rounded-full bg-[#36b6b0] mr-2 mt-1.5"></div>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

