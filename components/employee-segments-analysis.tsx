import type { EmployeeSegmentInsight } from "@/models/employee-experience-model"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Users } from "lucide-react"

interface EmployeeSegmentsAnalysisProps {
  segments: EmployeeSegmentInsight[]
}

export function EmployeeSegmentsAnalysis({ segments }: EmployeeSegmentsAnalysisProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-green-500"
    if (score >= 70) return "bg-blue-500"
    if (score >= 60) return "bg-amber-500"
    return "bg-red-500"
  }

  const getRiskColor = (risk: number) => {
    if (risk < 20) return "bg-green-500"
    if (risk < 30) return "bg-blue-500"
    if (risk < 40) return "bg-amber-500"
    return "bg-red-500"
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">Employee Segment Analysis</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Analyzing experience differences across employee segments to target improvement initiatives.
        </p>
      </div>

      <Tabs defaultValue={segments[0].segment} className="w-full">
        <TabsList className="bg-[#002050] border border-[#0a3166] mb-6 flex flex-wrap h-auto">
          {segments.map((segment) => (
            <TabsTrigger
              key={segment.segment}
              value={segment.segment}
              className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white"
            >
              {segment.segment}
            </TabsTrigger>
          ))}
        </TabsList>

        {segments.map((segment) => (
          <TabsContent key={segment.segment} value={segment.segment} className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <Card className="bg-[#001a40] border-[#0a3166] h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{segment.segment} Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="h-5 w-5 text-[#36b6b0]" />
                          <h3 className="font-medium text-white">Population</h3>
                        </div>
                        <div className="bg-[#002050] p-3 rounded-lg">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-300">Percentage:</span>
                            <span className="text-sm text-white">{segment.populationPercentage}%</span>
                          </div>
                          <Progress
                            value={segment.populationPercentage}
                            className="h-1.5 mb-3"
                            indicatorClassName="bg-[#36b6b0]"
                          />
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-300">Count:</span>
                            <span className="text-sm text-white">{segment.count} employees</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium text-white mb-2">Engagement Score</h3>
                        <div className="bg-[#002050] p-3 rounded-lg">
                          <div className="flex items-center justify-between mb-3">
                            <div className="text-3xl font-bold text-[#36b6b0]">{segment.engagementScore}</div>
                            <div className="flex items-center">
                              {segment.benchmarkEngagement && (
                                <>
                                  {segment.engagementScore >= (segment.benchmarkEngagement || 0) ? (
                                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                                  ) : (
                                    <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                                  )}
                                  <span className="text-sm">
                                    {segment.engagementScore >= (segment.benchmarkEngagement || 0) ? (
                                      <span className="text-green-500">
                                        +{segment.engagementScore - (segment.benchmarkEngagement || 0)}
                                      </span>
                                    ) : (
                                      <span className="text-red-500">
                                        {segment.engagementScore - (segment.benchmarkEngagement || 0)}
                                      </span>
                                    )}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                          <Progress
                            value={segment.engagementScore}
                            className="h-2"
                            indicatorClassName={getScoreColor(segment.engagementScore)}
                          />
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium text-white mb-2">Retention Risk</h3>
                        <div className="bg-[#002050] p-3 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-2xl font-bold text-white">{segment.retentionRisk}%</div>
                            <Badge className={getRiskColor(segment.retentionRisk)}>
                              {segment.retentionRisk < 20
                                ? "Low"
                                : segment.retentionRisk < 30
                                  ? "Moderate"
                                  : segment.retentionRisk < 40
                                    ? "High"
                                    : "Critical"}
                            </Badge>
                          </div>
                          <Progress
                            value={segment.retentionRisk}
                            className="h-2"
                            indicatorClassName={getRiskColor(segment.retentionRisk)}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                  <Card className="bg-[#001a40] border-[#0a3166]">
                    <CardHeader>
                      <CardTitle className="text-lg text-white">Key Strengths</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {segment.topDrivers.map((driver, index) => (
                          <div key={index} className="bg-[#002050] p-4 rounded-lg">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                              <div>
                                <div className="font-medium text-white">{driver.driverName}</div>
                                <div className="flex items-center mt-2">
                                  <Progress
                                    value={driver.satisfactionScore}
                                    className="h-2 w-32"
                                    indicatorClassName={getScoreColor(driver.satisfactionScore)}
                                  />
                                  <span className="ml-2 text-sm">{driver.satisfactionScore}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#001a40] border-[#0a3166]">
                    <CardHeader>
                      <CardTitle className="text-lg text-white">Improvement Areas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {segment.bottomDrivers.map((driver, index) => (
                          <div key={index} className="bg-[#002050] p-4 rounded-lg">
                            <div className="flex items-start gap-3">
                              <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                              <div>
                                <div className="font-medium text-white">{driver.driverName}</div>
                                <div className="flex items-center mt-2">
                                  <Progress
                                    value={driver.satisfactionScore}
                                    className="h-2 w-32"
                                    indicatorClassName={getScoreColor(driver.satisfactionScore)}
                                  />
                                  <span className="ml-2 text-sm">{driver.satisfactionScore}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-[#001a40] border-[#0a3166] mt-6">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Recommended Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {segment.recommendedActions.map((action, index) => (
                        <div key={index} className="bg-[#002050] p-3 rounded-lg flex items-start gap-2">
                          <div className="bg-[#36b6b0] text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                            {index + 1}
                          </div>
                          <span className="text-sm text-gray-300">{action}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

