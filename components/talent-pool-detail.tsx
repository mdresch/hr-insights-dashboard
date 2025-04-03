import type { TalentPool } from "@/models/succession-model"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Target, User, PieChart } from "lucide-react"

interface TalentPoolDetailProps {
  pool: TalentPool
}

export function TalentPoolDetail({ pool }: TalentPoolDetailProps) {
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

  const getBenchStrengthColor = (strength: number) => {
    if (strength >= 75) return "bg-green-500"
    if (strength >= 50) return "bg-amber-500"
    if (strength >= 25) return "bg-red-500"
    return "bg-red-700"
  }

  return (
    <div className="space-y-6">
      <Card className="bg-[#001a40] border-[#0a3166]">
        <CardHeader>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <CardTitle className="text-2xl text-white">{pool.name}</CardTitle>
              <div className="text-sm text-gray-300 mt-1">{pool.description}</div>
            </div>
            <Badge className={getBenchStrengthColor(pool.benchStrength)}>{pool.benchStrength}% Bench Strength</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#002050] p-4 rounded-lg">
              <h3 className="text-lg font-medium text-white mb-3 flex items-center">
                <Target className="h-5 w-5 text-[#36b6b0] mr-2" />
                Target Roles
              </h3>
              <div className="flex flex-wrap gap-2">
                {pool.targetRoles.map((role, index) => (
                  <div key={index} className="bg-[#001a40] px-3 py-1 rounded-full text-sm text-slate-200">
                    {role}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#002050] p-4 rounded-lg">
              <h3 className="text-lg font-medium text-white mb-3 flex items-center">
                <Users className="h-5 w-5 text-[#36b6b0] mr-2" />
                Pool Composition
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-300">Members</div>
                  <div className="text-sm font-medium text-white">{pool.members.length}</div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-300">Bench Strength</div>
                  <div className="text-sm font-medium text-white">{pool.benchStrength}%</div>
                </div>

                <Progress
                  value={pool.benchStrength}
                  className="h-2"
                  indicatorClassName={getBenchStrengthColor(pool.benchStrength)}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="members" className="w-full">
        <TabsList className="bg-[#002050] border border-[#0a3166] mb-6">
          <TabsTrigger value="members" className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white">
            Pool Members
          </TabsTrigger>
          <TabsTrigger value="diversity" className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white">
            Diversity Metrics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="members" className="mt-0">
          <Card className="bg-[#001a40] border-[#0a3166]">
            <CardHeader>
              <CardTitle className="text-xl text-white">Pool Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pool.members.map((member) => (
                  <div key={member.id} className="bg-[#002050] p-4 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="font-medium text-white">{member.name}</div>
                        <div className="text-sm text-gray-300">{member.currentRole}</div>
                      </div>
                      <Badge className={getReadinessColor(member.readiness)}>{member.readiness}</Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Performance</div>
                        <Badge className={getPerformanceColor(member.performance)}>{member.performance}</Badge>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Potential</div>
                        <Badge className={getPotentialColor(member.potential)}>{member.potential}</Badge>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Key Strengths</div>
                        <div className="flex flex-wrap gap-1">
                          {member.keyStrengths.slice(0, 2).map((strength, index) => (
                            <div key={index} className="bg-[#001a40] px-2 py-1 rounded-full text-xs text-slate-300">
                              {strength}
                            </div>
                          ))}
                          {member.keyStrengths.length > 2 && (
                            <div className="bg-[#001a40] px-2 py-1 rounded-full text-xs text-slate-300">
                              +{member.keyStrengths.length - 2} more
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-gray-400 mb-1">Development Areas</div>
                        <div className="flex flex-wrap gap-1">
                          {member.developmentAreas.slice(0, 2).map((area, index) => (
                            <div key={index} className="bg-[#001a40] px-2 py-1 rounded-full text-xs text-slate-300">
                              {area}
                            </div>
                          ))}
                          {member.developmentAreas.length > 2 && (
                            <div className="bg-[#001a40] px-2 py-1 rounded-full text-xs text-slate-300">
                              +{member.developmentAreas.length - 2} more
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="diversity" className="mt-0">
          <Card className="bg-[#001a40] border-[#0a3166]">
            <CardHeader>
              <CardTitle className="text-xl text-white">Diversity Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              {pool.diversityMetrics ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#002050] p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-white mb-3 flex items-center">
                      <User className="h-5 w-5 text-[#36b6b0] mr-2" />
                      Gender Distribution
                    </h3>

                    <div className="space-y-3">
                      {Object.entries(pool.diversityMetrics.gender).map(([key, value]) =>
                        value > 0 ? (
                          <div key={key}>
                            <div className="flex justify-between text-sm mb-1 text-slate-300">
                              <span>{key}</span>
                              <span>{value}%</span>
                            </div>
                            <Progress
                              value={value}
                              className="h-2"
                              indicatorClassName={
                                key === "Male" ? "bg-blue-500" : key === "Female" ? "bg-pink-500" : "bg-purple-500"
                              }
                            />
                          </div>
                        ) : null,
                      )}
                    </div>
                  </div>

                  <div className="bg-[#002050] p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-white mb-3 flex items-center">
                      <PieChart className="h-5 w-5 text-[#36b6b0] mr-2" />
                      Ethnicity Distribution
                    </h3>

                    <div className="space-y-3">
                      {Object.entries(pool.diversityMetrics.ethnicity).map(([key, value], index) =>
                        value > 0 ? (
                          <div key={key}>
                            <div className="flex justify-between text-sm mb-1 text-slate-300">
                              <span>{key}</span>
                              <span>{value}%</span>
                            </div>
                            <Progress
                              value={value}
                              className="h-2"
                              indicatorClassName={
                                index === 0
                                  ? "bg-blue-500"
                                  : index === 1
                                    ? "bg-green-500"
                                    : index === 2
                                      ? "bg-amber-500"
                                      : index === 3
                                        ? "bg-red-500"
                                        : "bg-purple-500"
                              }
                            />
                          </div>
                        ) : null,
                      )}
                    </div>
                  </div>

                  <div className="bg-[#002050] p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-white mb-3 flex items-center">
                      <Users className="h-5 w-5 text-[#36b6b0] mr-2" />
                      Generation Distribution
                    </h3>

                    <div className="space-y-3">
                      {Object.entries(pool.diversityMetrics.generation).map(([key, value], index) =>
                        value > 0 ? (
                          <div key={key}>
                            <div className="flex justify-between text-sm mb-1 text-slate-300">
                              <span>{key}</span>
                              <span>{value}%</span>
                            </div>
                            <Progress
                              value={value}
                              className="h-2"
                              indicatorClassName={
                                index === 0
                                  ? "bg-purple-500"
                                  : index === 1
                                    ? "bg-blue-500"
                                    : index === 2
                                      ? "bg-green-500"
                                      : "bg-amber-500"
                              }
                            />
                          </div>
                        ) : null,
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-400">
                  No diversity metrics available for this talent pool.
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

