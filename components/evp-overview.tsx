import type { EVPAnalysis } from "@/models/evp-model"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, CheckCircle, AlertTriangle } from "lucide-react"

interface EVPOverviewProps {
  analysis: EVPAnalysis
}

export function EVPOverview({ analysis }: EVPOverviewProps) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">Employee Value Proposition Assessment</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          A comprehensive analysis of your organization's EVP performance across key categories, with benchmarking
          against industry standards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="bg-[#002050] border-[#0a3166]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-300">Overall EVP Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#36b6b0]">{analysis.overallScore}/100</div>
            <div className="flex items-center mt-2">
              {analysis.overallScore >= analysis.benchmarkScore ? (
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
              )}
              <span className="text-sm">
                {analysis.overallScore >= analysis.benchmarkScore ? (
                  <span className="text-green-500">
                    {analysis.overallScore - analysis.benchmarkScore} points above benchmark
                  </span>
                ) : (
                  <span className="text-red-500">
                    {analysis.benchmarkScore - analysis.overallScore} points below benchmark
                  </span>
                )}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#002050] border-[#0a3166]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-300">Category Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {analysis.categories.map((category) => (
                <div key={category.id} className="flex items-center gap-2">
                  <div className="w-24 truncate text-xs text-slate-300">{category.name.split(" ")[0]}</div>
                  <Progress
                    value={category.overallScore}
                    className="h-2 flex-1"
                    indicatorClassName={
                      (category.overallScore || 0) >= (category.benchmarkScore || 0) ? "bg-green-500" : "bg-red-500"
                    }
                  />
                  <div className="text-xs text-slate-300">{category.overallScore}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#002050] border-[#0a3166]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-300">Top Strengths</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {analysis.strengths.slice(0, 3).map((strength, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-300">{strength}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#002050] border-[#0a3166]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-300">Top Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {analysis.opportunities.slice(0, 3).map((opportunity, index) => (
                <div key={index} className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-300">{opportunity}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-[#001a40] border-[#0a3166]">
        <CardHeader>
          <CardTitle className="text-xl text-white">EVP Category Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {analysis.categories.map((category) => (
              <div key={category.id} className="bg-[#002050] p-4 rounded-lg">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-white">{category.name}</h3>
                    <p className="text-sm text-gray-300">{category.description}</p>
                  </div>
                  <Badge
                    className={
                      category.priority === "Critical"
                        ? "bg-red-500"
                        : category.priority === "High"
                          ? "bg-amber-500"
                          : category.priority === "Medium"
                            ? "bg-blue-500"
                            : "bg-green-500"
                    }
                  >
                    {category.priority} Priority
                  </Badge>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl font-bold text-[#36b6b0]">{category.overallScore}</div>
                  <div className="text-sm">
                    <div className="text-gray-400">Your Score</div>
                    <div className="flex items-center">
                      <span className="text-gray-300 mr-2">vs. {category.benchmarkScore} Benchmark</span>
                      {(category.overallScore || 0) >= (category.benchmarkScore || 0) ? (
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-500" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {category.attributes.map((attribute) => (
                    <div key={attribute.id} className="bg-[#001a40] p-3 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="font-medium text-white">{attribute.name}</div>
                          <div className="text-xs text-gray-400">Importance: {attribute.importance}/10</div>
                        </div>
                        <div className={`text-sm ${(attribute.gap || 0) >= 0 ? "text-green-500" : "text-red-500"}`}>
                          {(attribute.gap || 0) >= 0 ? "+" : ""}
                          {attribute.gap}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-gray-400">Your Score:</div>
                        <Progress
                          value={attribute.satisfactionScore}
                          className="h-1.5 flex-1"
                          indicatorClassName={
                            (attribute.satisfactionScore || 0) >= (attribute.benchmarkScore || 0)
                              ? "bg-green-500"
                              : "bg-red-500"
                          }
                        />
                        <div className="text-xs">{attribute.satisfactionScore}</div>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="text-xs text-gray-400">Benchmark:</div>
                        <Progress
                          value={attribute.benchmarkScore}
                          className="h-1.5 flex-1"
                          indicatorClassName="bg-gray-500"
                        />
                        <div className="text-xs">{attribute.benchmarkScore}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

