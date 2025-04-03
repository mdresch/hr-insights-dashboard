import type { HRAgent } from "@/models/agent-model"
import type { HRScoreAssessment, HRScoreCategory } from "@/models/hr-score-model"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowUpRight, CheckCircle2, Zap } from "lucide-react"

interface AgentHRScoreIntegrationProps {
  agent: HRAgent
  assessment: HRScoreAssessment
}

export function AgentHRScoreIntegration({ agent, assessment }: AgentHRScoreIntegrationProps) {
  // Map agent domains to HR Score categories
  const getMatchingCategory = (): HRScoreCategory | undefined => {
    const categoryMap: Record<string, string> = {
      Recruitment: "talent-acquisition",
      "Employee Engagement": "employee-experience",
      "Workforce Planning": "workforce-planning",
      "Compensation & Benefits": "compensation-benefits",
      "Learning & Development": "learning-development",
    }

    const categoryId = categoryMap[agent.domain]
    return assessment.categories.find((c) => c.id === categoryId)
  }

  const category = getMatchingCategory()

  if (!category) {
    return (
      <div className="bg-[#001a40] rounded-xl border border-[#0a3166] p-6">
        <div className="text-center text-gray-400">No matching HR Score category found for this agent.</div>
      </div>
    )
  }

  const getMaturityColor = (level: string) => {
    switch (level) {
      case "Initial":
        return "bg-red-500"
      case "Developing":
        return "bg-amber-500"
      case "Established":
        return "bg-blue-500"
      case "Advanced":
        return "bg-green-500"
      case "Optimized":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  // Find priority activities for this category
  const priorityActivities = assessment.topPriorities
    .filter((p) => p.categoryId === category.id)
    .map((p) => {
      const dimension = category.dimensions.find((d) => d.id === p.dimensionId)
      const activity = dimension?.activities.find((a) => a.id === p.activityId)
      return { dimension, activity, priority: p.priority }
    })
    .filter((item) => item.dimension && item.activity)
    .sort((a, b) => b.priority - a.priority)

  // Map agent capabilities to HR Score dimensions
  const getCapabilityMatches = () => {
    const matches = []

    for (const capability of agent.capabilities) {
      for (const dimension of category.dimensions) {
        // Simple matching based on keywords in names and descriptions
        const capabilityKeywords = [
          ...capability.name.toLowerCase().split(" "),
          ...capability.description.toLowerCase().split(" "),
        ]

        const dimensionKeywords = [
          ...dimension.name.toLowerCase().split(" "),
          ...dimension.description.toLowerCase().split(" "),
        ]

        const commonKeywords = capabilityKeywords.filter((word) => word.length > 4 && dimensionKeywords.includes(word))

        if (commonKeywords.length > 0) {
          matches.push({ capability, dimension, relevance: commonKeywords.length })
        }
      }
    }

    return matches.sort((a, b) => b.relevance - a.relevance).slice(0, 3)
  }

  const capabilityMatches = getCapabilityMatches()

  return (
    <div className="bg-[#001a40] rounded-xl border border-[#0a3166] p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-white">HR Score Integration</h3>
          <Badge className={`${getMaturityColor(category.maturityLevel)}`}>{category.maturityLevel} Maturity</Badge>
        </div>
        <p className="text-gray-300">
          This AI agent can help improve the maturity of your {category.name} capabilities by addressing key gaps
          identified in your HR Score assessment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="bg-[#002050] border-[#0a3166]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-300">Maturity Assessment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl font-bold text-[#36b6b0]">{category.overallScore.toFixed(1)}</div>
              <div className="text-sm">
                <div className="text-gray-400">Current Score</div>
                <div className="text-white">{category.maturityLevel} Level</div>
              </div>
            </div>

            <div className="space-y-3">
              {category.dimensions.map((dimension) => (
                <div key={dimension.id}>
                  <div className="flex justify-between text-sm mb-1 text-slate-300">
                    <div>{dimension.name}</div>
                    <div className="text-[#36b6b0]">{dimension.score}/5</div>
                  </div>
                  <Progress
                    value={dimension.score * 20}
                    className="h-1.5"
                    indicatorClassName={getMaturityColor(dimension.currentMaturity)}
                    indicatorClassName={getMaturityColor(dimension.currentMaturity)}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#002050] border-[#0a3166]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-300">Priority Improvement Areas</CardTitle>
          </CardHeader>
          <CardContent>
            {priorityActivities.length > 0 ? (
              <div className="space-y-3">
                {priorityActivities.slice(0, 3).map((item, index) => (
                  <div key={index} className="bg-[#001a40] p-3 rounded-lg">
                    <div className="flex items-start gap-2 mb-2">
                      <div className="bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {item.priority}
                      </div>
                      <div>
                        <div className="text-xs text-gray-400">{item.dimension?.name}</div>
                        <div className="font-medium text-sm text-[#36b6b0]">{item.activity?.name}</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-300 ml-7">{item.activity?.targetState}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-400 py-4">No priority activities found for this category.</div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-bold text-white mb-3">AI Agent Capabilities for Maturity Improvement</h4>
        <div className="space-y-3">
          {capabilityMatches.map((match, index) => (
            <div key={index} className="bg-[#002050] p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="bg-[#36b6b0] p-2 rounded-lg shrink-0">
                  <Zap className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="font-medium">{match.capability.name}</div>
                    <Badge className={`${getMaturityColor(match.dimension.targetMaturity)}`}>
                      Target: {match.dimension.targetMaturity}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-300 mb-2">{match.capability.description}</div>
                  <div className="flex items-center text-xs text-[#36b6b0]">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    <span>Helps improve {match.dimension.name}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-lg font-bold text-white mb-3">Implementation Recommendations</h4>
        <div className="bg-[#002050] p-4 rounded-lg">
          <ul className="space-y-2">
            {category.priorityActions.map((action, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                <span className="text-gray-300">{action}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

