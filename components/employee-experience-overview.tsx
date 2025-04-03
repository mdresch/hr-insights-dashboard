import type { EmployeeExperienceDashboard } from "@/models/employee-experience-model"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, ArrowRight, Users, Activity } from "lucide-react"

interface EmployeeExperienceOverviewProps {
  dashboard: EmployeeExperienceDashboard
}

export function EmployeeExperienceOverview({ dashboard }: EmployeeExperienceOverviewProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-green-500"
    if (score >= 70) return "bg-blue-500"
    if (score >= 60) return "bg-amber-500"
    return "bg-red-500"
  }

  // Sort dimensions by score
  const sortedDimensions = [...dashboard.dimensionScores].sort((a, b) => b.score - a.score)
  const highestDimensions = sortedDimensions.slice(0, 3)
  const lowestDimensions = sortedDimensions.slice(-3).reverse()

  // Get drivers with largest gaps
  const positiveGapDrivers = dashboard.drivers
    .filter((driver) => (driver.gap || 0) > 0)
    .sort((a, b) => (b.gap || 0) - (a.gap || 0))
    .slice(0, 3)

  const negativeGapDrivers = dashboard.drivers
    .filter((driver) => (driver.gap || 0) < 0)
    .sort((a, b) => (a.gap || 0) - (b.gap || 0))
    .slice(0, 3)

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">Employee Experience Dashboard</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          A comprehensive view of your organization's employee experience, engagement trends, and key drivers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="bg-[#002050] border-[#0a3166]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-300">Overall Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#36b6b0]">{dashboard.overallEngagementScore}/100</div>
            <Progress
              value={dashboard.overallEngagementScore}
              className="h-2 mt-2"
              indicatorClassName={getScoreColor(dashboard.overallEngagementScore)}
            />
            <div className="flex justify-between mt-1 text-xs text-gray-400">
              <span>0</span>
              <span>100</span>
            </div>
            <div className="flex items-center mt-2">
              {dashboard.overallEngagementScore >= dashboard.benchmarkEngagement ? (
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
              )}
              <span className="text-sm">
                {dashboard.overallEngagementScore >= dashboard.benchmarkEngagement ? (
                  <span className="text-green-500">
                    {dashboard.overallEngagementScore - dashboard.benchmarkEngagement} points above benchmark
                  </span>
                ) : (
                  <span className="text-red-500">
                    {dashboard.benchmarkEngagement - dashboard.overallEngagementScore} points below benchmark
                  </span>
                )}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#002050] border-[#0a3166]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-300">Survey Participation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="text-3xl font-bold text-[#36b6b0]">{dashboard.responseRate}%</div>
              <div className="text-sm text-gray-300">Response Rate</div>
            </div>
            <Progress
              value={dashboard.responseRate}
              className="h-2 mt-2"
              indicatorClassName={
                dashboard.responseRate >= 80
                  ? "bg-green-500"
                  : dashboard.responseRate >= 60
                    ? "bg-blue-500"
                    : dashboard.responseRate >= 40
                      ? "bg-amber-500"
                      : "bg-red-500"
              }
            />
            <div className="mt-2 flex items-center">
              <Users className="h-4 w-4 text-[#36b6b0] mr-2" />
              <span className="text-sm text-gray-300">{dashboard.participantCount} participants</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#002050] border-[#0a3166]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-300">Engagement Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-12 flex items-end">
              {dashboard.engagementTrend.map((point, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className={`w-6 ${getScoreColor(point.score)}`}
                    style={{ height: `${point.score * 0.04}rem` }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-1 text-xs text-gray-400">
              {dashboard.engagementTrend.map((point, index) =>
                index % 2 === 0 ? <span key={index}>{point.date.slice(5)}</span> : <span key={index}></span>,
              )}
            </div>
            <div className="mt-2 flex items-center">
              <Activity className="h-4 w-4 text-[#36b6b0] mr-2" />
              <span className="text-sm text-gray-300">
                {dashboard.engagementTrend[dashboard.engagementTrend.length - 1].score >
                dashboard.engagementTrend[0].score
                  ? `+${
                      dashboard.engagementTrend[dashboard.engagementTrend.length - 1].score -
                      dashboard.engagementTrend[0].score
                    } points in past 6 months`
                  : `${
                      dashboard.engagementTrend[dashboard.engagementTrend.length - 1].score -
                      dashboard.engagementTrend[0].score
                    } points in past 6 months`}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#002050] border-[#0a3166]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-300">Action Plans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#36b6b0]">{dashboard.actionPlans.length}</div>
            <div className="mt-2 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-300">Completed</span>
                <span className="text-xs text-gray-300">
                  {dashboard.actionPlans.filter((plan) => plan.status === "Completed").length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-300">In Progress</span>
                <span className="text-xs text-gray-300">
                  {dashboard.actionPlans.filter((plan) => plan.status === "In Progress").length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-300">Not Started</span>
                <span className="text-xs text-gray-300">
                  {dashboard.actionPlans.filter((plan) => plan.status === "Not Started").length}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="bg-[#001a40] border-[#0a3166]">
          <CardHeader>
            <CardTitle className="text-xl text-white">Experience Dimensions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dashboard.dimensionScores.map((dimension) => (
                <div key={dimension.dimension}>
                  <div className="flex justify-between mb-1 text-slate-300">
                    <span className="text-sm text-slate-300">{dimension.dimension}</span>
                    <div className="flex items-center text-slate-300">
                      <span className="text-sm mr-2 text-slate-300">{dimension.score}</span>
                      {(dimension.change || 0) > 0 ? (
                        <Badge className="bg-green-500">+{dimension.change}</Badge>
                      ) : (dimension.change || 0) < 0 ? (
                        <Badge className="bg-red-500">{dimension.change}</Badge>
                      ) : (
                        <Badge className="bg-gray-500">0</Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress
                      value={dimension.score}
                      className="h-2 flex-1"
                      indicatorClassName={getScoreColor(dimension.score)}
                    />
                    {dimension.benchmark && (
                      <div className="relative h-2 w-0">
                        <div
                          className="absolute top-1/2 -translate-y-1/2 w-1 h-4 bg-white opacity-80"
                          style={{ left: `${dimension.benchmark}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#001a40] border-[#0a3166]">
          <CardHeader>
            <CardTitle className="text-xl text-white">Experience Strengths & Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-[#36b6b0] mb-2">Top Dimensions</h3>
                <div className="space-y-2">
                  {highestDimensions.map((dimension) => (
                    <div
                      key={dimension.dimension}
                      className="bg-[#002050] p-3 rounded-lg flex justify-between items-center text-slate-300"
                    >
                      <span>{dimension.dimension}</span>
                      <Badge className={getScoreColor(dimension.score)}>{dimension.score}</Badge>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-[#36b6b0] mb-2">Improvement Areas</h3>
                <div className="space-y-2">
                  {lowestDimensions.map((dimension) => (
                    <div
                      key={dimension.dimension}
                      className="bg-[#002050] p-3 rounded-lg flex justify-between items-center text-slate-300"
                    >
                      <span>{dimension.dimension}</span>
                      <Badge className={getScoreColor(dimension.score)}>{dimension.score}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-[#001a40] border-[#0a3166]">
        <CardHeader>
          <CardTitle className="text-xl text-white">Key Experience Drivers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-[#36b6b0] mb-4">Competitive Advantages</h3>
              <div className="space-y-4">
                {positiveGapDrivers.map((driver) => (
                  <div key={driver.id} className="bg-[#002050] p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-medium text-white">{driver.name}</div>
                        <div className="text-xs text-gray-400">{driver.dimension}</div>
                      </div>
                      <Badge className="bg-green-500">+{driver.gap} vs benchmark</Badge>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-gray-300">Score:</span>
                      <Progress
                        value={driver.satisfactionScore}
                        className="h-2 flex-1"
                        indicatorClassName={getScoreColor(driver.satisfactionScore || 0)}
                      />
                      <span className="text-xs text-white">{driver.satisfactionScore}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-300">Impact:</span>
                      <Progress
                        value={driver.impactOnEngagement}
                        className="h-2 flex-1"
                        indicatorClassName="bg-[#36b6b0]"
                      />
                      <span className="text-xs text-white">{driver.impactOnEngagement}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-[#36b6b0] mb-4">Improvement Priorities</h3>
              <div className="space-y-4">
                {negativeGapDrivers.map((driver) => (
                  <div key={driver.id} className="bg-[#002050] p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-medium text-white">{driver.name}</div>
                        <div className="text-xs text-gray-400">{driver.dimension}</div>
                      </div>
                      <Badge className="bg-red-500">{driver.gap} vs benchmark</Badge>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-gray-300">Score:</span>
                      <Progress
                        value={driver.satisfactionScore}
                        className="h-2 flex-1"
                        indicatorClassName={getScoreColor(driver.satisfactionScore || 0)}
                      />
                      <span className="text-xs text-white">{driver.satisfactionScore}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-300">Impact:</span>
                      <Progress
                        value={driver.impactOnEngagement}
                        className="h-2 flex-1"
                        indicatorClassName="bg-[#36b6b0]"
                      />
                      <span className="text-xs text-white">{driver.impactOnEngagement}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#001a40] border-[#0a3166]">
        <CardHeader>
          <CardTitle className="text-xl text-white">Recent Employee Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {dashboard.recentFeedback.slice(0, 4).map((feedback) => (
              <div key={feedback.id} className="bg-[#002050] p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <Badge
                    className={
                      feedback.sentiment === "Very Positive"
                        ? "bg-green-500"
                        : feedback.sentiment === "Positive"
                          ? "bg-blue-500"
                          : feedback.sentiment === "Neutral"
                            ? "bg-gray-500"
                            : feedback.sentiment === "Negative"
                              ? "bg-amber-500"
                              : "bg-red-500"
                    }
                  >
                    {feedback.sentiment}
                  </Badge>
                  <div className="text-xs text-gray-400">{new Date(feedback.timestamp).toLocaleDateString()}</div>
                </div>
                <div className="mb-2">
                  <div className="font-medium text-white">{feedback.topic}</div>
                  <div className="text-xs text-gray-400">{feedback.dimension}</div>
                </div>
                <p className="text-sm text-gray-300 italic">"{feedback.verbatim}"</p>
                {feedback.actionTaken && (
                  <div className="mt-2 text-xs bg-[#001a40] p-2 rounded border border-[#36b6b0] text-slate-300">
                    <span className="text-[#36b6b0]">Action Taken:</span> {feedback.actionTaken}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <button className="text-[#36b6b0] hover:underline flex items-center mx-auto">
              View all feedback
              <ArrowRight className="ml-1 h-4 w-4" />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

