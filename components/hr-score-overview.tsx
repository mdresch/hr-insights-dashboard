import type { HRScoreAssessment } from "@/models/hr-score-model"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BarChart, TrendingUp, AlertTriangle } from "lucide-react"

interface HRScoreOverviewProps {
  assessment: HRScoreAssessment
}

export function HRScoreOverview({ assessment }: HRScoreOverviewProps) {
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

  const getScoreColor = (score: number) => {
    if (score >= 4) return "bg-green-500"
    if (score >= 3) return "bg-blue-500"
    if (score >= 2) return "bg-amber-500"
    return "bg-red-500"
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">HR AI Agent Maturity Assessment</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Based on the compnay HR Score framework, this assessment measures the maturity of critical HR activities and
          identifies priority areas for improvement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="bg-[#001a40] border-[#0a3166]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-300">Overall Maturity Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#36b6b0]">{assessment.overallMaturityScore.toFixed(1)}/5.0</div>
            <Badge className={`mt-2 ${getMaturityColor(assessment.overallMaturityLevel)}`}>
              {assessment.overallMaturityLevel}
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-[#001a40] border-[#0a3166]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-300">Category Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {assessment.categories.map((category) => (
                <div key={category.id} className="flex items-center gap-2">
                  <div className="w-24 truncate text-xs text-slate-300">{category.name.split(" ")[0]}</div>
                  <Progress
                    value={category.overallScore * 20}
                    className={`h-2 flex-1 text-slate-300 ${getScoreColor(category.overallScore)}`}
                  />
                  <div className="text-xs text-slate-300">{category.overallScore.toFixed(1)}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#001a40] border-[#0a3166]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-300">Maturity Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end h-20 gap-1">
              {["Initial", "Developing", "Established", "Advanced", "Optimized"].map((level) => {
                const count = assessment.categories.filter((c) => c.maturityLevel === level).length
                const percentage = (count / assessment.categories.length) * 100
                return (
                  <div
                    key={level}
                    className={`${getMaturityColor(level)} rounded-t w-full`}
                    style={{ height: `${percentage}%` }}
                  ></div>
                )
              })}
            </div>
            <div className="flex justify-between mt-1 text-xs text-gray-400">
              <span>Initial</span>
              <span>Developing</span>
              <span>Established</span>
              <span>Advanced</span>
              <span>Optimized</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#001a40] border-[#0a3166]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-300">Priority Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#36b6b0]">{assessment.topPriorities.length}</div>
            <div className="mt-1 text-xs text-gray-400">High-priority improvement areas</div>
            <div className="mt-2">
              <Badge className="bg-red-500">Critical</Badge>
              <Badge className="bg-amber-500 ml-1">High</Badge>
              <Badge className="bg-blue-500 ml-1">Medium</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-[#001a40] border-[#0a3166]">
        <CardHeader>
          <CardTitle className="text-xl flex items-center text-slate-300">
            <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
            Top Priority Improvement Areas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {assessment.topPriorities.slice(0, 3).map((priority, index) => {
              const category = assessment.categories.find((c) => c.id === priority.categoryId)
              const dimension = category?.dimensions.find((d) => d.id === priority.dimensionId)
              const activity = dimension?.activities.find((a) => a.id === priority.activityId)

              if (!category || !dimension || !activity) return null

              return (
                <div key={index} className="bg-[#002050] p-4 rounded-lg">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{category.name}</div>
                      <div className="font-medium text-slate-300">{activity.name}</div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="text-xs text-gray-400 mb-1">Current State</div>
                    <div className="text-sm bg-[#001a40] p-2 rounded text-slate-300">{activity.currentState}</div>
                  </div>

                  <div className="mb-3">
                    <div className="text-xs text-gray-400 mb-1">Target State</div>
                    <div className="text-sm bg-[#001a40] p-2 rounded text-[#36b6b0]">{activity.targetState}</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-[#36b6b0] mr-1" />
                      <span className="text-xs text-slate-300">Gap: {activity.gap}/4</span>
                    </div>
                    <div className="flex items-center">
                      <BarChart className="h-4 w-4 text-[#36b6b0] mr-1" />
                      <span className="text-xs text-slate-300">Priority: {activity.priority}/10</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

