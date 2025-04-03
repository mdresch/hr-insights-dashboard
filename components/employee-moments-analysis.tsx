import type React from "react"
import type { MomentExperience } from "@/models/employee-experience-model"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  TrendingUp,
  TrendingDown,
  Calendar,
  User,
  MessageSquare,
  CheckCircle,
  AlertTriangle,
  Clock,
} from "lucide-react"

interface EmployeeMomentsAnalysisProps {
  moments: MomentExperience[]
}

export function EmployeeMomentsAnalysis({ moments }: EmployeeMomentsAnalysisProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-green-500"
    if (score >= 70) return "bg-blue-500"
    if (score >= 60) return "bg-amber-500"
    return "bg-red-500"
  }

  const getCompletionColor = (rate: number) => {
    if (rate >= 90) return "bg-green-500"
    if (rate >= 75) return "bg-blue-500"
    if (rate >= 60) return "bg-amber-500"
    return "bg-red-500"
  }

  const getImpactColor = (impact: number) => {
    const absImpact = Math.abs(impact)
    if (absImpact >= 70) return impact > 0 ? "bg-green-500" : "bg-red-500"
    if (absImpact >= 50) return impact > 0 ? "bg-blue-500" : "bg-amber-500"
    if (absImpact >= 30) return impact > 0 ? "bg-blue-300" : "bg-amber-300"
    return "bg-gray-500"
  }

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case "Email":
        return <MessageSquare className="h-4 w-4" />
      case "In-person":
        return <User className="h-4 w-4" />
      case "Video Call":
        return <User className="h-4 w-4" />
      case "System":
        return <CheckCircle className="h-4 w-4" />
      case "Manager":
        return <User className="h-4 w-4" />
      case "Notification":
        return <MessageSquare className="h-4 w-4" />
      default:
        return <MessageSquare className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">Employee Moments Analysis</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Measuring and optimizing key moments that shape the employee experience throughout their journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {moments.slice(0, 4).map((moment) => (
          <Card key={moment.id} className="bg-[#002050] border-[#0a3166]">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-white">{moment.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-2">
                <Badge
                  className={
                    moment.type === "Onboarding"
                      ? "bg-green-500"
                      : moment.type === "Performance Review"
                        ? "bg-amber-500"
                        : moment.type === "Role Change"
                          ? "bg-blue-500"
                          : moment.type === "Return from Leave"
                            ? "bg-purple-500"
                            : "bg-gray-500"
                  }
                >
                  {moment.type}
                </Badge>
                <Badge className={getScoreColor(moment.overallSatisfaction)}>{moment.overallSatisfaction}%</Badge>
              </div>
              <Progress
                value={moment.overallSatisfaction}
                className="h-2 mb-2"
                indicatorClassName={getScoreColor(moment.overallSatisfaction)}
              />
              <div className="space-y-1 text-xs text-gray-300">
                <div className="flex justify-between">
                  <span>Completion Rate:</span>
                  <span className={moment.completionRate >= 85 ? "text-green-500" : "text-amber-500"}>
                    {moment.completionRate}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Touchpoints:</span>
                  <span>{moment.touchpoints.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Impact on Retention:</span>
                  <span className={moment.impactOnRetention >= 50 ? "text-green-500" : "text-amber-500"}>
                    {moment.impactOnRetention}%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue={moments[0].id} className="w-full">
        <TabsList className="bg-[#002050] border border-[#0a3166] mb-6 flex flex-wrap h-auto">
          {moments.map((moment) => (
            <TabsTrigger
              key={moment.id}
              value={moment.id}
              className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white"
            >
              {moment.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {moments.map((moment) => (
          <TabsContent key={moment.id} value={moment.id} className="mt-0">
            <Card className="bg-[#001a40] border-[#0a3166]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-white">{moment.name}</CardTitle>
                    <p className="text-sm text-gray-300 mt-1">{moment.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-[#36b6b0]">{moment.frequency}</Badge>
                    <Badge
                      className={
                        moment.type === "Onboarding"
                          ? "bg-green-500"
                          : moment.type === "Performance Review"
                            ? "bg-amber-500"
                            : moment.type === "Role Change"
                              ? "bg-blue-500"
                              : moment.type === "Return from Leave"
                                ? "bg-purple-500"
                                : "bg-gray-500"
                      }
                    >
                      {moment.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-[#002050] p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-[#36b6b0] mb-3">Satisfaction</h3>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-2xl font-bold text-white">{moment.overallSatisfaction}%</div>
                      {moment.benchmarkSatisfaction && (
                        <div className="flex items-center">
                          {moment.overallSatisfaction >= moment.benchmarkSatisfaction ? (
                            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                          ) : (
                            <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                          )}
                          <span className="text-sm">
                            {moment.overallSatisfaction >= moment.benchmarkSatisfaction ? (
                              <span className="text-green-500">
                                +{moment.overallSatisfaction - moment.benchmarkSatisfaction} vs benchmark
                              </span>
                            ) : (
                              <span className="text-red-500">
                                {moment.overallSatisfaction - moment.benchmarkSatisfaction} vs benchmark
                              </span>
                            )}
                          </span>
                        </div>
                      )}
                    </div>
                    <Progress
                      value={moment.overallSatisfaction}
                      className="h-2"
                      indicatorClassName={getScoreColor(moment.overallSatisfaction)}
                    />
                  </div>

                  <div className="bg-[#002050] p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-[#36b6b0] mb-3">Completion Rate</h3>
                    <div className="text-2xl font-bold text-white mb-2">{moment.completionRate}%</div>
                    <Progress
                      value={moment.completionRate}
                      className="h-2"
                      indicatorClassName={getCompletionColor(moment.completionRate)}
                    />
                    {moment.completionRate < 90 && (
                      <div className="flex items-center gap-1 mt-2 text-xs text-amber-500">
                        <AlertTriangle className="h-3 w-3" />
                        <span>Improve completion to enhance experience impact</span>
                      </div>
                    )}
                  </div>

                  <div className="bg-[#002050] p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-[#36b6b0] mb-3">Retention Impact</h3>
                    <div className="text-2xl font-bold text-white mb-2">{moment.impactOnRetention}%</div>
                    <Progress
                      value={Math.abs(moment.impactOnRetention)}
                      className="h-2"
                      indicatorClassName={getImpactColor(moment.impactOnRetention)}
                    />
                    <div className="flex items-center gap-1 mt-2 text-xs text-gray-300">
                      <InfoIcon className="h-3 w-3" />
                      <span>Correlation with 12-month retention</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-medium text-white mb-4">Touchpoint Journey</h3>
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-[#0a3166]"></div>
                  <div className="space-y-6">
                    {moment.touchpoints.map((touchpoint, index) => (
                      <div key={touchpoint.id} className="relative flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 ${
                            touchpoint.satisfactionScore && touchpoint.satisfactionScore >= 80
                              ? "bg-green-500/20"
                              : touchpoint.satisfactionScore && touchpoint.satisfactionScore >= 70
                                ? "bg-blue-500/20"
                                : touchpoint.satisfactionScore && touchpoint.satisfactionScore >= 60
                                  ? "bg-amber-500/20"
                                  : "bg-red-500/20"
                          }`}
                        >
                          {index === 0 ? (
                            <Calendar className="h-6 w-6 text-[#36b6b0]" />
                          ) : (
                            <Clock className="h-6 w-6 text-[#36b6b0]" />
                          )}
                        </div>
                        <div className="bg-[#002050] p-4 rounded-lg flex-1">
                          <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                            <div>
                              <div className="font-medium text-white">{touchpoint.name}</div>
                              <div className="text-xs text-gray-400 mt-1">
                                <span className="mr-2">{touchpoint.timing}</span>
                                <span>Owner: {touchpoint.owner}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className="border-[#36b6b0] text-[#36b6b0] flex items-center gap-1"
                              >
                                {getChannelIcon(touchpoint.channel)}
                                <span>{touchpoint.channel}</span>
                              </Badge>
                              {touchpoint.satisfactionScore && (
                                <Badge className={getScoreColor(touchpoint.satisfactionScore)}>
                                  {touchpoint.satisfactionScore}%
                                </Badge>
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-gray-300">{touchpoint.content}</p>
                          {touchpoint.satisfactionScore && (
                            <div className="mt-3">
                              <div className="text-xs text-gray-400 mb-1">Satisfaction</div>
                              <Progress
                                value={touchpoint.satisfactionScore}
                                className="h-1.5"
                                indicatorClassName={getScoreColor(touchpoint.satisfactionScore)}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 bg-[#002050] p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-[#36b6b0] mb-3">Improvement Opportunities</h3>
                  <div className="space-y-2">
                    {moment.touchpoints
                      .filter((t) => t.satisfactionScore && t.satisfactionScore < 75)
                      .sort((a, b) => (a.satisfactionScore || 0) - (b.satisfactionScore || 0))
                      .slice(0, 2)
                      .map((touchpoint) => (
                        <div key={`${touchpoint.id}-opportunity`} className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                          <div className="text-sm text-gray-300">
                            Enhance <span className="text-white">{touchpoint.name}</span> experience to improve overall
                            moment satisfaction.
                          </div>
                        </div>
                      ))}
                    {moment.completionRate < 90 && (
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                        <div className="text-sm text-gray-300">
                          Improve touchpoint completion rate to maximize the positive impact of this moment.
                        </div>
                      </div>
                    )}
                    {moment.touchpoints.length > 0 &&
                      moment.touchpoints[moment.touchpoints.length - 1].satisfactionScore &&
                      moment.touchpoints[0].satisfactionScore &&
                      moment.touchpoints[moment.touchpoints.length - 1].satisfactionScore <
                        moment.touchpoints[0].satisfactionScore - 5 && (
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                          <div className="text-sm text-gray-300">
                            Address declining satisfaction throughout the journey by focusing on later touchpoints.
                          </div>
                        </div>
                      )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

// Helper InfoIcon component
function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}

