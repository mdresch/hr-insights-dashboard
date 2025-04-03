import type { HRScoreAssessment } from "@/models/hr-score-model"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2, Clock, Target } from "lucide-react"

interface HRScoreRoadmapProps {
  assessment: HRScoreAssessment
}

export function HRScoreRoadmap({ assessment }: HRScoreRoadmapProps) {
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

  // Create a roadmap for each category
  const roadmapStages = assessment.categories
    .map((category) => {
      // Find the highest priority activities
      const priorityActivities = assessment.topPriorities
        .filter((p) => p.categoryId === category.id)
        .map((p) => {
          const dimension = category.dimensions.find((d) => d.id === p.dimensionId)
          const activity = dimension?.activities.find((a) => a.id === p.activityId)
          return { dimension, activity, priority: p.priority }
        })
        .filter((item) => item.dimension && item.activity)
        .sort((a, b) => b.priority - a.priority)
        .slice(0, 2)

      return {
        id: category.id,
        name: category.name,
        currentMaturity: category.maturityLevel,
        targetMaturity: category.dimensions.reduce((highest, dim) => {
          const targetLevel = dim.targetMaturity
          const levels = ["Initial", "Developing", "Established", "Advanced", "Optimized"]
          const currentIndex = levels.indexOf(highest)
          const targetIndex = levels.indexOf(targetLevel)
          return targetIndex > currentIndex ? targetLevel : highest
        }, "Initial"),
        priorityActivities,
        timeframe: category.overallScore < 2 ? "Short-term" : category.overallScore < 3 ? "Medium-term" : "Long-term",
      }
    })
    .sort((a, b) => {
      // Sort by priority (those with more priority activities first)
      if (a.priorityActivities.length !== b.priorityActivities.length) {
        return b.priorityActivities.length - a.priorityActivities.length
      }

      // Then by maturity level (lower maturity first)
      const levels = ["Initial", "Developing", "Established", "Advanced", "Optimized"]
      return levels.indexOf(a.currentMaturity) - levels.indexOf(b.currentMaturity)
    })

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">HR Maturity Roadmap</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          A strategic plan to improve HR maturity across key categories, based on your HR Score assessment.
        </p>
      </div>

      <div className="relative">
        <div className="absolute top-10 left-[calc(50%-1px)] h-[calc(100%-5rem)] w-0.5 bg-[#0a3166] z-0"></div>

        <div className="space-y-12 relative z-10">
          {roadmapStages.map((stage, index) => (
            <div key={stage.id} className="flex items-start gap-8">
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 order-2"}`}>
                <h3 className="text-2xl font-bold text-white mb-2">{stage.name}</h3>
                <div className="flex items-center gap-2 mb-3 justify-end">
                  <Badge className={`${getMaturityColor(stage.currentMaturity)}`}>
                    Current: {stage.currentMaturity}
                  </Badge>
                  <ArrowRight className="h-4 w-4" />
                  <Badge className={`${getMaturityColor(stage.targetMaturity)}`}>Target: {stage.targetMaturity}</Badge>
                </div>

                <Card className="bg-[#001a40] border-[#0a3166]">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm text-[#36b6b0]">Priority Activities</CardTitle>
                      <Badge className="bg-[#0047CC]">
                        <Clock className="h-3 w-3 mr-1" />
                        {stage.timeframe}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {stage.priorityActivities.length > 0 ? (
                      <ul className="space-y-3">
                        {stage.priorityActivities.map((item, idx) => (
                          <li key={idx} className="bg-[#002050] p-3 rounded-lg">
                            <div className="flex items-start gap-2 mb-1">
                              <Target className="h-4 w-4 text-[#36b6b0] shrink-0 mt-0.5" />
                              <div>
                                <div className="text-xs text-gray-400">{item.dimension?.name}</div>
                                <div className="font-medium text-sm text-slate-200">{item.activity?.name}</div>
                              </div>
                            </div>
                            <div className="ml-6 text-xs">
                              <div className="text-gray-400 mb-1">Current: {item.activity?.currentState}</div>
                              <div className="text-[#36b6b0]">Target: {item.activity?.targetState}</div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="text-center text-gray-400 py-2">No priority activities identified.</div>
                    )}
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

