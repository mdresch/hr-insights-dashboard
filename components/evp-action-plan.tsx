import type { EVPAnalysis } from "@/models/evp-model"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Zap, CheckCircle, ArrowRight } from "lucide-react"

interface EVPActionPlanProps {
  analysis: EVPAnalysis
}

export function EVPActionPlan({ analysis }: EVPActionPlanProps) {
  const timeframes = [
    {
      id: "immediate",
      name: "Immediate Actions",
      description: "High-impact actions that can be implemented within 30-90 days",
      actions: analysis.recommendedActions.immediate,
    },
    {
      id: "short-term",
      name: "Short-Term Initiatives",
      description: "Strategic initiatives to implement within 3-6 months",
      actions: analysis.recommendedActions.shortTerm,
    },
    {
      id: "long-term",
      name: "Long-Term Transformation",
      description: "Transformational changes to implement within 6-18 months",
      actions: analysis.recommendedActions.longTerm,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">EVP Enhancement Action Plan</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          A prioritized roadmap of actions to strengthen your Employee Value Proposition and address key opportunity
          areas.
        </p>
      </div>

      <Tabs defaultValue="immediate" className="w-full">
        <TabsList className="bg-[#002050] border border-[#0a3166] mb-6">
          <TabsTrigger value="immediate" className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white">
            Immediate Actions
          </TabsTrigger>
          <TabsTrigger value="short-term" className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white">
            Short-Term Initiatives
          </TabsTrigger>
          <TabsTrigger value="long-term" className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white">
            Long-Term Transformation
          </TabsTrigger>
        </TabsList>

        {timeframes.map((timeframe) => (
          <TabsContent key={timeframe.id} value={timeframe.id} className="mt-0">
            <Card className="bg-[#001a40] border-[#0a3166]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#0047CC] p-2 rounded-lg">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">{timeframe.name}</CardTitle>
                  </div>
                  <Badge
                    className={
                      timeframe.id === "immediate"
                        ? "bg-red-500"
                        : timeframe.id === "short-term"
                          ? "bg-amber-500"
                          : "bg-blue-500"
                    }
                  >
                    {timeframe.id === "immediate"
                      ? "30-90 Days"
                      : timeframe.id === "short-term"
                        ? "3-6 Months"
                        : "6-18 Months"}
                  </Badge>
                </div>
                <p className="text-gray-300 ml-10">{timeframe.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {timeframe.actions.map((action, index) => (
                    <div key={index} className="bg-[#002050] p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="bg-[#36b6b0] text-white rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-medium text-white mb-1">{action}</div>
                          <div className="flex items-center text-xs text-[#36b6b0] mt-3">
                            <Zap className="h-3 w-3 mr-1" />
                            <span>AI Agent Recommendation</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-[#002050] rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#0047CC] p-2 rounded-lg shrink-0">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium mb-1 text-slate-300">Implementation Support</div>
                      <div className="text-sm text-gray-300 mb-3">
                        Our AI agents can provide detailed implementation guidance for each action, including:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {[
                          "Step-by-step implementation plans",
                          "Resource requirements and timelines",
                          "Success metrics and measurement approaches",
                          "Best practice examples from similar organizations",
                          "Change management and communication templates",
                          "ROI calculation frameworks",
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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

