import type { HRTrend } from "@/models/hr-trend-model"
import type { HRAgent } from "@/models/agent-model"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Lightbulb, ArrowRight } from "lucide-react"

interface TrendsAgentIntegrationProps {
  trends: HRTrend[]
  agents: HRAgent[]
}

export function TrendsAgentIntegration({ trends, agents }: TrendsAgentIntegrationProps) {
  // Create a mapping of trend-to-agent capabilities
  const trendAgentCapabilities = trends.map((trend) => {
    const relatedAgents = agents.filter((agent) => trend.relatedAgents.includes(agent.id))

    // For each related agent, find capabilities that are relevant to this trend
    const capabilities = relatedAgents.flatMap((agent) => {
      return agent.capabilities.map((capability) => ({
        agentId: agent.id,
        agentName: agent.name,
        capability,
      }))
    })

    // Sort capabilities by relevance (using accuracy as a proxy for relevance)
    const sortedCapabilities = capabilities.sort((a, b) => b.capability.accuracy - a.capability.accuracy)

    return {
      trend,
      capabilities: sortedCapabilities.slice(0, 3), // Take top 3 most relevant capabilities
    }
  })

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">AI Agents for Emerging HR Trends</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          How our specialized AI agents help you navigate and capitalize on the top HR trends of 2025.
        </p>
      </div>

      <div className="space-y-8">
        {trendAgentCapabilities.map(({ trend, capabilities }) => (
          <Card key={trend.id} className="bg-[#001a40] border-[#0a3166]">
            <CardHeader className="pb-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <CardTitle className="text-xl text-white">{trend.title}</CardTitle>
                <Badge className="bg-[#36b6b0]">{capabilities.length} AI Capabilities</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">{trend.description}</p>

              <div className="space-y-4">
                {capabilities.map((item, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-[#002050] p-4 rounded-lg">
                    <div className="md:col-span-3">
                      <div className="text-sm text-gray-400 mb-1">AI Agent</div>
                      <div className="font-medium flex items-center text-slate-300">
                        <Brain className="h-4 w-4 text-[#36b6b0] mr-2" />
                        {item.agentName}
                      </div>
                    </div>

                    <div className="md:col-span-4">
                      <div className="text-sm text-gray-400 mb-1">AI Capability</div>
                      <div className="font-medium text-slate-300">{item.capability.name}</div>
                    </div>

                    <div className="md:col-span-5">
                      <div className="text-sm text-gray-400 mb-1">Trend Application</div>
                      <div className="text-sm text-gray-300 flex items-start">
                        <Lightbulb className="h-4 w-4 text-[#36b6b0] shrink-0 mr-2 mt-0.5" />
                        <span>{getTrendApplication(trend.id, item.capability.id)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-[#002050] rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-[#0047CC] p-2 rounded-lg shrink-0">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium mb-1 text-slate-200">Next Steps</div>
                    <div className="text-sm text-gray-300">
                      Explore how our AI agents can help you capitalize on the {trend.title} trend by scheduling a demo
                      with our team. We'll show you how these capabilities can be customized to your organization's
                      specific needs and maturity level.
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

// Helper function to generate trend applications based on trend and capability IDs
function getTrendApplication(trendId: string, capabilityId: string): string {
  const applications: Record<string, Record<string, string>> = {
    "ai-transformation": {
      "resume-screening": "Automates candidate evaluation while reducing bias and improving quality of hire.",
      "candidate-matching":
        "Uses AI to match candidates to roles based on skills, cultural fit, and career trajectory.",
      "bias-detection":
        "Identifies and reduces bias in job descriptions, screening processes, and interview evaluations.",
      "sentiment-analysis": "Monitors employee sentiment toward AI adoption and identifies change management needs.",
      "personalized-support": "Delivers tailored AI training and support based on individual adoption readiness.",
      "skills-intelligence": "Maps current AI skills and identifies gaps to prioritize for development.",
      "workforce-simulation": "Models impact of AI implementation on workforce composition and skills requirements.",
      "personalized-learning": "Creates customized learning paths for AI skills development.",
      "skills-gap-analysis": "Identifies AI capability gaps and prioritizes development opportunities.",
    },
    "skills-first": {
      "resume-screening": "Evaluates candidates based on skills and potential rather than traditional credentials.",
      "candidate-matching": "Matches candidates to roles based on skills alignment rather than job history.",
      "skills-intelligence": "Creates and maintains a dynamic skills taxonomy across the organization.",
      "workforce-simulation": "Models different skills mix scenarios to optimize workforce composition.",
      "internal-mobility": "Matches employees to internal opportunities based on skills and aspirations.",
      "succession-planning": "Identifies high-potential employees based on skills rather than tenure.",
      "personalized-learning": "Delivers targeted learning to close specific skills gaps.",
      "skills-gap-analysis": "Continuously monitors skills supply and demand across the organization.",
      "content-curation": "Recommends learning resources based on identified skills gaps.",
    },
    "employee-wellbeing": {
      "sentiment-analysis": "Monitors wellbeing indicators through communication patterns and feedback.",
      "personalized-support": "Delivers tailored wellbeing recommendations based on individual needs.",
      "retention-risk": "Identifies burnout risk factors and suggests preventive interventions.",
      "culture-analysis": "Assesses organizational factors that impact employee wellbeing.",
      "benefits-personalization": "Recommends optimal benefits selections based on wellbeing needs.",
      "rewards-effectiveness": "Measures the impact of wellbeing programs on employee outcomes.",
    },
    "hybrid-work": {
      "sentiment-analysis": "Tracks employee sentiment toward hybrid work arrangements.",
      "personalized-support": "Delivers tailored resources based on individual hybrid work challenges.",
      "culture-analysis": "Assesses impact of hybrid work on organizational culture and connection.",
      "workforce-simulation": "Models different hybrid work scenarios to optimize collaboration and productivity.",
      "internal-mobility": "Facilitates project-based work across distributed teams.",
    },
    "human-leadership": {
      "sentiment-analysis": "Measures employee perception of leadership empathy and effectiveness.",
      "retention-risk": "Identifies leadership behaviors that impact retention risk.",
      "culture-analysis": "Assesses leadership impact on organizational culture.",
      "personalized-learning": "Creates targeted development for human-centered leadership capabilities.",
      "learning-effectiveness": "Measures the impact of leadership development on employee experience.",
    },
  }

  return (
    applications[trendId]?.[capabilityId] ||
    "Provides data-driven insights to help organizations capitalize on this trend."
  )
}

