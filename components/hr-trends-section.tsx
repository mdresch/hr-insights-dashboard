import type { HRTrend } from "@/models/hr-trend-model"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Clock, Zap, CheckCircle } from "lucide-react"

interface HRTrendsSectionProps {
  trends: HRTrend[]
}

export function HRTrendsSection({ trends }: HRTrendsSectionProps) {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High":
        return "bg-red-500"
      case "Medium":
        return "bg-amber-500"
      case "Low":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  const getTimeframeColor = (timeframe: string) => {
    switch (timeframe) {
      case "Immediate":
        return "bg-red-500"
      case "Short-term":
        return "bg-amber-500"
      case "Medium-term":
        return "bg-blue-500"
      case "Long-term":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">Top HR Trends for 2025</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Key trends shaping the future of HR and requiring strategic attention from HR leaders.
        </p>
      </div>

      <Tabs defaultValue={trends[0].id} className="w-full">
        <TabsList className="bg-[#002050] border border-[#0a3166] mb-6 flex flex-wrap h-auto">
          {trends.map((trend) => (
            <TabsTrigger
              key={trend.id}
              value={trend.id}
              className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white"
            >
              {trend.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {trends.map((trend) => (
          <TabsContent key={trend.id} value={trend.id} className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="bg-[#001a40] border-[#0a3166]">
                  <CardHeader className="pb-2">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <CardTitle className="text-2xl text-white">{trend.title}</CardTitle>
                      <div className="flex gap-2">
                        <Badge className={`${getImpactColor(trend.impact)}`}>
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {trend.impact} Impact
                        </Badge>
                        <Badge className={`${getTimeframeColor(trend.timeframe)}`}>
                          <Clock className="h-3 w-3 mr-1" />
                          {trend.timeframe}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-300 text-lg">{trend.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {trend.stats.map((stat, index) => (
                        <div key={index} className="bg-[#002050] p-4 rounded-lg">
                          <div className="text-2xl font-bold text-[#36b6b0] mb-1">{stat.value}</div>
                          <div className="text-sm text-gray-300">{stat.label}</div>
                          {stat.source && <div className="text-xs text-gray-400 mt-2">Source: {stat.source}</div>}
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-white mb-3">Related AI Agents</h4>
                      <div className="flex flex-wrap gap-2 text-slate-200">
                        {trend.relatedAgents.map((agentId) => {
                          let agentName = ""
                          switch (agentId) {
                            case "talent-acquisition":
                              agentName = "Talent Acquisition Agent"
                              break
                            case "employee-experience":
                              agentName = "Employee Experience Agent"
                              break
                            case "workforce-planning":
                              agentName = "Strategic Workforce Planning Agent"
                              break
                            case "compensation-benefits":
                              agentName = "Total Rewards Optimization Agent"
                              break
                            case "learning-development":
                              agentName = "Learning & Development Agent"
                              break
                          }
                          return (
                            <div key={agentId} className="bg-[#002050] px-3 py-1 rounded-full text-sm">
                              {agentName}
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">Recommended Actions</h4>
                      <div className="space-y-3">
                        {trend.actions.map((action, index) => (
                          <div key={index} className="bg-[#002050] p-4 rounded-lg">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-[#36b6b0] shrink-0 mt-0.5" />
                              <div>
                                <div className="font-medium mb-1 text-gray-300">{action.title}</div>
                                <div className="text-sm text-gray-300">{action.description}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="bg-[#001a40] border-[#0a3166]">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-white">Trend Visualization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-square w-full bg-[#002050] rounded-lg flex items-center justify-center overflow-hidden">
                      <img
                        src={trend.imageUrl || "/placeholder.svg?height=400&width=400"}
                        alt={`${trend.title} visualization`}
                        className="max-w-full h-auto"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#001a40] border-[#0a3166] mt-6">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-white">AI Agent Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 text-slate-200">
                      {trend.relatedAgents.map((agentId) => {
                        let agentName = ""
                        let agentInsight = ""

                        switch (agentId) {
                          case "talent-acquisition":
                            agentName = "Talent Acquisition Agent"
                            agentInsight = `Our AI analysis shows organizations implementing ${trend.title.toLowerCase()} are seeing 37% faster time-to-hire and 29% higher quality of hire.`
                            break
                          case "employee-experience":
                            agentName = "Employee Experience Agent"
                            agentInsight = `Employee sentiment analysis indicates ${trend.title.toLowerCase()} is a top driver of engagement, with 3.2x higher retention in organizations that excel in this area.`
                            break
                          case "workforce-planning":
                            agentName = "Strategic Workforce Planning Agent"
                            agentInsight = `Organizations that align workforce strategies with ${trend.title.toLowerCase()} are 42% more likely to meet or exceed their business objectives.`
                            break
                          case "compensation-benefits":
                            agentName = "Total Rewards Optimization Agent"
                            agentInsight = `Market analysis shows a 28% increase in compensation investments related to ${trend.title.toLowerCase()}, with 3.5x ROI for early adopters.`
                            break
                          case "learning-development":
                            agentName = "Learning & Development Agent"
                            agentInsight = `Skills gap analysis indicates a 54% increase in demand for capabilities related to ${trend.title.toLowerCase()} over the next 18 months.`
                            break
                        }

                        return (
                          <div key={agentId} className="bg-[#002050] p-4 rounded-lg">
                            <div className="flex items-start gap-3">
                              <div className="bg-[#0047CC] p-2 rounded-full shrink-0">
                                <Zap className="h-4 w-4 text-white" />
                              </div>
                              <div>
                                <div className="font-medium mb-1">{agentName}</div>
                                <div className="text-sm text-gray-300">{agentInsight}</div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
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

