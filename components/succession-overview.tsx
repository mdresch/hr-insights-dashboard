import type { SuccessionPlan } from "@/models/succession-model"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, Users, Clock } from "lucide-react"

interface SuccessionOverviewProps {
  plan: SuccessionPlan
}

export function SuccessionOverview({ plan }: SuccessionOverviewProps) {
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

  const getStrengthColor = (strength: number) => {
    if (strength >= 75) return "bg-green-500"
    if (strength >= 50) return "bg-amber-500"
    if (strength >= 25) return "bg-red-500"
    return "bg-red-700"
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">Succession Planning Dashboard</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          A comprehensive view of your organization's leadership pipeline, bench strength, and succession readiness.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="bg-[#002050] border-[#0a3166]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-300">Overall Bench Strength</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#36b6b0]">{plan.metrics.overallBenchStrength}%</div>
            <Progress
              value={plan.metrics.overallBenchStrength}
              className="h-2 mt-2"
              indicatorClassName={getStrengthColor(plan.metrics.overallBenchStrength)}
            />
            <div className="flex justify-between mt-1 text-xs text-gray-400">
              <span>Weak</span>
              <span>Strong</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#002050] border-[#0a3166]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-300">Critical Position Coverage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#36b6b0]">{plan.metrics.criticalPositionCoverage}%</div>
            <Progress
              value={plan.metrics.criticalPositionCoverage}
              className="h-2 mt-2"
              indicatorClassName={getStrengthColor(plan.metrics.criticalPositionCoverage)}
            />
            <div className="mt-2 text-xs text-gray-400">
              {plan.metrics.criticalPositionCoverage < 50 ? (
                <div className="flex items-center">
                  <AlertTriangle className="h-3 w-3 text-red-500 mr-1" />
                  <span>High risk - immediate action needed</span>
                </div>
              ) : plan.metrics.criticalPositionCoverage < 75 ? (
                <div className="flex items-center">
                  <Clock className="h-3 w-3 text-amber-500 mr-1" />
                  <span>Moderate risk - continue development</span>
                </div>
              ) : (
                <div className="flex items-center">
                  <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                  <span>Strong coverage - maintain pipeline</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#002050] border-[#0a3166]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-300">Successor Readiness</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <div className="text-xs text-gray-300">Ready Now: {plan.metrics.readinessDistribution["Ready Now"]}%</div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-3 w-3 rounded-full bg-amber-500"></div>
              <div className="text-xs text-gray-300">
                1-2 Years: {plan.metrics.readinessDistribution["Ready in 1-2 Years"]}%
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="text-xs text-gray-300">
                3+ Years: {plan.metrics.readinessDistribution["Ready in 3+ Years"]}%
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-gray-500"></div>
              <div className="text-xs text-gray-300">
                Development Needed: {plan.metrics.readinessDistribution["Development Needed"]}%
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#002050] border-[#0a3166]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-300">Key Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="text-xs text-gray-300">High Potential Retention</div>
                <div className="text-sm font-medium text-[#36b6b0]">{plan.metrics.retentionRateOfHighPotentials}%</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-xs text-gray-300">Internal Promotion Rate</div>
                <div className="text-sm font-medium text-[#36b6b0]">{plan.metrics.internalPromotionRate}%</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-xs text-gray-300">Avg. Time to Readiness</div>
                <div className="text-sm font-medium text-[#36b6b0]">{plan.metrics.averageTimeToReadiness} months</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-xs text-gray-300">Plan Effectiveness</div>
                <div className="text-sm font-medium text-[#36b6b0]">{plan.metrics.successionPlanEffectiveness}%</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-[#001a40] border-[#0a3166]">
        <CardHeader>
          <CardTitle className="text-xl text-white">Critical Position Risk Assessment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#0a3166]">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Position</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Incumbent</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Criticality</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Flight Risk</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Bench Strength</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Vacancy Risk</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Successors</th>
                </tr>
              </thead>
              <tbody>
                {plan.keyPositions.map((position) => (
                  <tr key={position.id} className="border-b border-[#0a3166]">
                    <td className="py-3 px-4 text-sm text-slate-200">{position.title}</td>
                    <td className="py-3 px-4 text-sm text-slate-200">{position.incumbent.name}</td>
                    <td className="py-3 px-4">
                      <Badge className={getRiskColor(position.criticality)}>{position.criticality}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Badge className={getRiskColor(position.incumbent.flightRisk)}>
                        {position.incumbent.flightRisk}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Progress
                          value={position.benchStrength}
                          className="h-2 w-20"
                          indicatorClassName={getStrengthColor(position.benchStrength)}
                        />
                        <span className="text-sm text-slate-200">{position.benchStrength}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge className={getRiskColor(position.vacancyRisk)}>{position.vacancyRisk}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-[#36b6b0] mr-1" />
                        <span className="text-sm text-slate-200">{position.successors.length}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-[#001a40] border-[#0a3166]">
          <CardHeader>
            <CardTitle className="text-xl text-white">Talent Pool Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {plan.talentPools.map((pool) => (
                <div key={pool.id} className="bg-[#002050] p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-white">{pool.name}</h3>
                      <p className="text-xs text-gray-300">{pool.description}</p>
                    </div>
                    <Badge className={getStrengthColor(pool.benchStrength)}>{pool.benchStrength}% Strength</Badge>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3 text-slate-300">
                    {pool.targetRoles.map((role, index) => (
                      <div key={index} className="bg-[#001a40] px-2 py-1 rounded-full text-xs">
                        {role}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-[#36b6b0] mr-1" />
                      <span className="text-sm text-slate-200">{pool.members.length} members</span>
                    </div>
                    <div className="text-xs text-gray-400">
                      {pool.diversityMetrics && `${pool.diversityMetrics.gender["Female"]}% female representation`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#001a40] border-[#0a3166]">
          <CardHeader>
            <CardTitle className="text-xl text-white">Diversity in Succession Pipeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-[#36b6b0] mb-3">Gender Distribution</h3>
                <div className="flex h-6 rounded-md overflow-hidden">
                  {Object.entries(plan.metrics.diversityInSuccessionPipeline.gender).map(([key, value], index) =>
                    value > 0 ? (
                      <div
                        key={key}
                        className={`${index === 0 ? "bg-blue-500" : index === 1 ? "bg-pink-500" : "bg-purple-500"}`}
                        style={{ width: `${value}%` }}
                        title={`${key}: ${value}%`}
                      ></div>
                    ) : null,
                  )}
                </div>
                <div className="flex justify-between mt-1 text-xs text-gray-400">
                  {Object.entries(plan.metrics.diversityInSuccessionPipeline.gender).map(([key, value]) =>
                    value > 0 ? (
                      <div key={key} className="flex items-center gap-1">
                        <div
                          className={`h-2 w-2 rounded-full ${
                            key === "Male" ? "bg-blue-500" : key === "Female" ? "bg-pink-500" : "bg-purple-500"
                          }`}
                        ></div>
                        <span>
                          {key}: {value}%
                        </span>
                      </div>
                    ) : null,
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-[#36b6b0] mb-3">Ethnicity Distribution</h3>
                <div className="flex h-6 rounded-md overflow-hidden">
                  {Object.entries(plan.metrics.diversityInSuccessionPipeline.ethnicity).map(([key, value], index) =>
                    value > 0 ? (
                      <div
                        key={key}
                        className={`${
                          index === 0
                            ? "bg-blue-500"
                            : index === 1
                              ? "bg-green-500"
                              : index === 2
                                ? "bg-amber-500"
                                : index === 3
                                  ? "bg-red-500"
                                  : "bg-purple-500"
                        }`}
                        style={{ width: `${value}%` }}
                        title={`${key}: ${value}%`}
                      ></div>
                    ) : null,
                  )}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-xs text-gray-400">
                  {Object.entries(plan.metrics.diversityInSuccessionPipeline.ethnicity).map(([key, value], index) =>
                    value > 0 ? (
                      <div key={key} className="flex items-center gap-1">
                        <div
                          className={`h-2 w-2 rounded-full ${
                            index === 0
                              ? "bg-blue-500"
                              : index === 1
                                ? "bg-green-500"
                                : index === 2
                                  ? "bg-amber-500"
                                  : index === 3
                                    ? "bg-red-500"
                                    : "bg-purple-500"
                          }`}
                        ></div>
                        <span>
                          {key}: {value}%
                        </span>
                      </div>
                    ) : null,
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-[#36b6b0] mb-3">Generation Distribution</h3>
                <div className="flex h-6 rounded-md overflow-hidden">
                  {Object.entries(plan.metrics.diversityInSuccessionPipeline.generation).map(([key, value], index) =>
                    value > 0 ? (
                      <div
                        key={key}
                        className={`${
                          index === 0
                            ? "bg-purple-500"
                            : index === 1
                              ? "bg-blue-500"
                              : index === 2
                                ? "bg-green-500"
                                : "bg-amber-500"
                        }`}
                        style={{ width: `${value}%` }}
                        title={`${key}: ${value}%`}
                      ></div>
                    ) : null,
                  )}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-xs text-gray-400">
                  {Object.entries(plan.metrics.diversityInSuccessionPipeline.generation).map(([key, value], index) =>
                    value > 0 ? (
                      <div key={key} className="flex items-center gap-1">
                        <div
                          className={`h-2 w-2 rounded-full ${
                            index === 0
                              ? "bg-purple-500"
                              : index === 1
                                ? "bg-blue-500"
                                : index === 2
                                  ? "bg-green-500"
                                  : "bg-amber-500"
                          }`}
                        ></div>
                        <span>
                          {key}: {value}%
                        </span>
                      </div>
                    ) : null,
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

