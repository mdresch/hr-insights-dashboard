import type { KeyPosition, ReadinessLevel } from "@/models/succession-model"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Users, AlertTriangle, Clock, CheckCircle, Star } from "lucide-react"

interface KeyPositionDetailProps {
  position: KeyPosition
}

export function KeyPositionDetail({ position }: KeyPositionDetailProps) {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "bg-green-500"
      case "Medium":
        return "bg-amber-500"
      case "High":
        return "bg-red-500"
      case "Critical":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  const getReadinessColor = (readiness: ReadinessLevel) => {
    switch (readiness) {
      case "Ready Now":
        return "bg-green-500"
      case "Ready in 1-2 Years":
        return "bg-amber-500"
      case "Ready in 3+ Years":
        return "bg-red-500"
      case "Development Needed":
        return "bg-gray-500"
      default:
        return "bg-gray-500"
    }
  }

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case "Exceptional":
        return "bg-green-500"
      case "Exceeds Expectations":
        return "bg-blue-500"
      case "Meets Expectations":
        return "bg-amber-500"
      case "Below Expectations":
        return "bg-red-500"
      case "Unsatisfactory":
        return "bg-red-700"
      default:
        return "bg-gray-500"
    }
  }

  const getPotentialColor = (potential: string) => {
    switch (potential) {
      case "High Potential":
        return "bg-green-500"
      case "Promotable":
        return "bg-blue-500"
      case "Valuable Contributor":
        return "bg-amber-500"
      case "Underperformer":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      <Card className="bg-[#001a40] border-[#0a3166]">
        <CardHeader>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <CardTitle className="text-2xl text-white">{position.title}</CardTitle>
              <div className="text-sm text-gray-300 mt-1">
                {position.department} • {position.location}
              </div>
            </div>
            <Badge className={getRiskColor(position.criticality)}>{position.criticality} Criticality</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#002050] p-4 rounded-lg">
              <h3 className="text-lg font-medium text-white mb-3 flex items-center">
                <User className="h-5 w-5 text-[#36b6b0] mr-2" />
                Current Incumbent
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-xl font-medium text-white">{position.incumbent.name}</div>
                  <div className="text-sm text-gray-300">{position.incumbent.timeInRole} months in role</div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Performance</div>
                    <Badge className={getPerformanceColor(position.incumbent.performanceRating)}>
                      {position.incumbent.performanceRating}
                    </Badge>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Flight Risk</div>
                    <Badge className={getRiskColor(position.incumbent.flightRisk)}>
                      {position.incumbent.flightRisk}
                    </Badge>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Retirement Risk</div>
                    <Badge className={getRiskColor(position.incumbent.retirementRisk)}>
                      {position.incumbent.retirementRisk}
                    </Badge>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Vacancy Risk</div>
                    <Badge className={getRiskColor(position.vacancyRisk)}>{position.vacancyRisk}</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#002050] p-4 rounded-lg">
              <h3 className="text-lg font-medium text-white mb-3 flex items-center">
                <Users className="h-5 w-5 text-[#36b6b0] mr-2" />
                Succession Pipeline
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-300">Bench Strength</div>
                  <div className="text-sm font-medium text-white">{position.benchStrength}%</div>
                </div>
                <Progress
                  value={position.benchStrength}
                  className="h-2"
                  indicatorClassName={
                    position.benchStrength >= 75
                      ? "bg-green-500"
                      : position.benchStrength >= 50
                        ? "bg-amber-500"
                        : position.benchStrength >= 25
                          ? "bg-red-500"
                          : "bg-red-700"
                  }
                />

                <div className="mt-3">
                  {position.benchStrength < 50 ? (
                    <div className="flex items-start gap-2 bg-[#001a40] p-2 rounded-lg">
                      <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                      <div className="text-xs text-gray-300">
                        Low bench strength. Consider external talent mapping and accelerated development for internal
                        candidates.
                      </div>
                    </div>
                  ) : position.benchStrength < 75 ? (
                    <div className="flex items-start gap-2 bg-[#001a40] p-2 rounded-lg">
                      <Clock className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      <div className="text-xs text-gray-300">
                        Moderate bench strength. Continue development of identified successors and consider adding to
                        pipeline.
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start gap-2 bg-[#001a40] p-2 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      <div className="text-xs text-gray-300">
                        Strong bench strength. Maintain development momentum and retention strategies for key
                        successors.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {position.notes && (
            <div className="mt-4 bg-[#002050] p-3 rounded-lg">
              <div className="text-xs text-gray-400 mb-1">Notes</div>
              <div className="text-sm text-gray-300">{position.notes}</div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="bg-[#001a40] border-[#0a3166]">
        <CardHeader>
          <CardTitle className="text-xl text-white">Required Competencies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {position.requiredCompetencies.map((competency) => (
              <div key={competency.id} className="bg-[#002050] p-3 rounded-lg">
                <div className="font-medium text-white mb-1">{competency.name}</div>
                <div className="text-xs text-gray-300 mb-3">{competency.description}</div>
                <div className="flex items-center">
                  <div className="text-xs text-gray-400 mr-2">Required Level:</div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <Star
                        key={level}
                        className={`h-4 w-4 ${level <= (competency.requiredRating || 0) ? "text-[#36b6b0]" : "text-gray-600"}`}
                        fill={level <= (competency.requiredRating || 0) ? "#36b6b0" : "transparent"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#001a40] border-[#0a3166]">
        <CardHeader>
          <CardTitle className="text-xl text-white">Succession Candidates</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="table" className="w-full">
            <TabsList className="bg-[#002050] border border-[#0a3166] mb-6">
              <TabsTrigger value="table" className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white">
                Table View
              </TabsTrigger>
              <TabsTrigger value="cards" className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white">
                Card View
              </TabsTrigger>
            </TabsList>

            <TabsContent value="table" className="mt-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#0a3166]">
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Name</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Current Role</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Performance</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Potential</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Readiness</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Retention Risk</th>
                    </tr>
                  </thead>
                  <tbody>
                    {position.successors.map((successor) => (
                      <tr key={successor.id} className="border-b border-[#0a3166]">
                        <td className="py-3 px-4 text-sm font-medium">{successor.name}</td>
                        <td className="py-3 px-4 text-sm">{successor.currentRole}</td>
                        <td className="py-3 px-4">
                          <Badge className={getPerformanceColor(successor.performance)}>{successor.performance}</Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Badge className={getPotentialColor(successor.potential)}>{successor.potential}</Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Badge className={getReadinessColor(successor.readiness)}>{successor.readiness}</Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Badge className={getRiskColor(successor.retentionRisk)}>{successor.retentionRisk}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="cards" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {position.successors.map((successor) => (
                  <div key={successor.id} className="bg-[#002050] p-4 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="font-medium text-white">{successor.name}</div>
                        <div className="text-sm text-gray-300">{successor.currentRole}</div>
                      </div>
                      <Badge className={getReadinessColor(successor.readiness)}>{successor.readiness}</Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Performance</div>
                        <Badge className={getPerformanceColor(successor.performance)}>{successor.performance}</Badge>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Potential</div>
                        <Badge className={getPotentialColor(successor.potential)}>{successor.potential}</Badge>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Time in Role</div>
                        <div className="text-sm">{successor.timeInRole} months</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Retention Risk</div>
                        <Badge className={getRiskColor(successor.retentionRisk)}>{successor.retentionRisk}</Badge>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Key Strengths</div>
                        <div className="flex flex-wrap gap-1">
                          {successor.keyStrengths.map((strength, index) => (
                            <div key={index} className="bg-[#001a40] px-2 py-1 rounded-full text-xs">
                              {strength}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-gray-400 mb-1">Development Areas</div>
                        <div className="flex flex-wrap gap-1">
                          {successor.developmentAreas.map((area, index) => (
                            <div key={index} className="bg-[#001a40] px-2 py-1 rounded-full text-xs">
                              {area}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

