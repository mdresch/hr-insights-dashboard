import type { SuccessionCandidate } from "@/models/succession-model"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Star, CheckCircle, AlertTriangle, BookOpen, Briefcase, Users, GraduationCap } from "lucide-react"

interface SuccessionCandidateDetailProps {
  candidate: SuccessionCandidate
}

export function SuccessionCandidateDetail({ candidate }: SuccessionCandidateDetailProps) {
  const getReadinessColor = (readiness: string) => {
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

  const getActionTypeIcon = (type: string) => {
    switch (type) {
      case "Training":
        return <BookOpen className="h-4 w-4" />
      case "Experience":
        return <Briefcase className="h-4 w-4" />
      case "Exposure":
        return <Users className="h-4 w-4" />
      case "Education":
        return <GraduationCap className="h-4 w-4" />
      case "Coaching":
        return <User className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  const getActionStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500"
      case "In Progress":
        return "bg-amber-500"
      case "Not Started":
        return "bg-gray-500"
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
              <CardTitle className="text-2xl text-white">{candidate.name}</CardTitle>
              <div className="text-sm text-gray-300 mt-1">
                {candidate.currentRole} • {candidate.department} • {candidate.location}
              </div>
            </div>
            <Badge className={getReadinessColor(candidate.readiness)}>{candidate.readiness}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#002050] p-4 rounded-lg">
              <h3 className="text-lg font-medium text-white mb-3 flex items-center">
                <User className="h-5 w-5 text-[#36b6b0] mr-2" />
                Profile
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-xs text-gray-400 mb-1">Time in Role</div>
                  <div className="text-sm text-gray-300">{candidate.timeInRole} months</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">Performance</div>
                  <Badge className={getPerformanceColor(candidate.performance)}>{candidate.performance}</Badge>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">Potential</div>
                  <Badge className={getPotentialColor(candidate.potential)}>{candidate.potential}</Badge>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">Retention Risk</div>
                  <Badge className={getRiskColor(candidate.retentionRisk)}>{candidate.retentionRisk}</Badge>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">Impact of Loss</div>
                  <Badge className={getRiskColor(candidate.impactOfLoss)}>{candidate.impactOfLoss}</Badge>
                </div>
              </div>

              {candidate.careerAspirations && (
                <div className="mt-4">
                  <div className="text-xs text-gray-400 mb-1">Career Aspirations</div>
                  <div className="text-sm text-gray-300">{candidate.careerAspirations}</div>
                </div>
              )}
            </div>

            <div className="bg-[#002050] p-4 rounded-lg">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-[#36b6b0] mb-2">Key Strengths</h3>
                  <div className="space-y-1">
                    {candidate.keyStrengths.map((strength, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-[#36b6b0] mb-2">Development Areas</h3>
                  <div className="space-y-1">
                    {candidate.developmentAreas.map((area, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {candidate.notes && (
            <div className="mt-4 bg-[#002050] p-3 rounded-lg">
              <div className="text-xs text-gray-400 mb-1">Notes</div>
              <div className="text-sm text-gray-300">{candidate.notes}</div>
            </div>
          )}
        </CardContent>
      </Card>

      <Tabs defaultValue="competencies" className="w-full">
        <TabsList className="bg-[#002050] border border-[#0a3166] mb-6">
          <TabsTrigger value="competencies" className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white">
            Competency Assessment
          </TabsTrigger>
          <TabsTrigger value="development" className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white">
            Development Plan
          </TabsTrigger>
        </TabsList>

        <TabsContent value="competencies" className="mt-0">
          <Card className="bg-[#001a40] border-[#0a3166]">
            <CardHeader>
              <CardTitle className="text-xl text-white">Competency Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {candidate.competencies.map((competency) => (
                  <div key={competency.id} className="bg-[#002050] p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-medium text-white">{competency.name}</div>
                        <div className="text-xs text-gray-300 mt-1">{competency.description}</div>
                      </div>
                      <div className={`text-sm ${(competency.gap || 0) <= 0 ? "text-green-500" : "text-amber-500"}`}>
                        {(competency.gap || 0) <= 0 ? "Met" : `Gap: ${competency.gap}`}
                      </div>
                    </div>

                    <div className="space-y-3 mt-4">
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Current Level</div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((level) => (
                            <Star
                              key={level}
                              className={`h-4 w-4 ${level <= (competency.currentRating || 0) ? "text-[#36b6b0]" : "text-gray-600"}`}
                              fill={level <= (competency.currentRating || 0) ? "#36b6b0" : "transparent"}
                            />
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-gray-400 mb-1">Required Level</div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((level) => (
                            <Star
                              key={level}
                              className={`h-4 w-4 ${level <= (competency.requiredRating || 0) ? "text-gray-400" : "text-gray-600"}`}
                              fill={level <= (competency.requiredRating || 0) ? "gray" : "transparent"}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="development" className="mt-0">
          <Card className="bg-[#001a40] border-[#0a3166]">
            <CardHeader>
              <CardTitle className="text-xl text-white">Development Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {candidate.developmentActions.map((action) => (
                  <div key={action.id} className="bg-[#002050] p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-full ${
                          action.type === "Training"
                            ? "bg-blue-500/20"
                            : action.type === "Experience"
                              ? "bg-green-500/20"
                              : action.type === "Exposure"
                                ? "bg-purple-500/20"
                                : action.type === "Education"
                                  ? "bg-amber-500/20"
                                  : "bg-red-500/20"
                        }`}
                      >
                        {getActionTypeIcon(action.type)}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium text-white">{action.description}</div>
                          <Badge className={getActionStatusColor(action.status)}>{action.status}</Badge>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className="border-[#36b6b0] text-[#36b6b0]">
                            {action.type}
                          </Badge>
                          <Badge variant="outline" className="border-[#36b6b0] text-[#36b6b0]">
                            {action.timeframe}
                          </Badge>
                        </div>

                        <div>
                          <div className="text-xs text-gray-400 mb-1">Target Competencies</div>
                          <div className="flex flex-wrap gap-1">
                            {action.targetCompetencies.map((compId) => {
                              const comp = candidate.competencies.find((c) => c.id === compId)
                              return comp ? (
                                <div key={compId} className="bg-[#001a40] px-2 py-1 rounded-full text-xs text-slate-300">
                                  {comp.name}
                                </div>
                              ) : null
                            })}
                          </div>
                        </div>

                        {action.notes && (
                          <div className="mt-3">
                            <div className="text-xs text-gray-400 mb-1">Notes</div>
                            <div className="text-sm text-gray-300">{action.notes}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

