"use client"

import { useState } from "react"
import type { HRAgent } from "@/models/agent-model"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle, Zap } from "lucide-react"

interface AgentDetailProps {
  agent: HRAgent
}

export function AgentDetail({ agent }: AgentDetailProps) {
  const [activeTab, setActiveTab] = useState("capabilities")

  const getMaturityColor = (level: string) => {
    switch (level) {
      case "Emerging":
        return "bg-amber-500"
      case "Developing":
        return "bg-blue-500"
      case "Established":
        return "bg-green-500"
      case "Advanced":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  const getComplexityColor = (level: string) => {
    switch (level) {
      case "Low":
        return "bg-green-500"
      case "Medium":
        return "bg-amber-500"
      case "High":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getTimeToValueColor = (time: string) => {
    switch (time) {
      case "Immediate":
        return "bg-green-500"
      case "Short-term":
        return "bg-emerald-500"
      case "Medium-term":
        return "bg-amber-500"
      case "Long-term":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="bg-[#001a40] rounded-xl border border-[#0a3166] p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">{agent.name}</h2>
        <p className="text-gray-300 text-lg">{agent.description}</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-[#002050] border border-[#0a3166] mb-6">
          <TabsTrigger value="capabilities" className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white">
            AI Capabilities
          </TabsTrigger>
          <TabsTrigger value="usecases" className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white">
            Business Use Cases
          </TabsTrigger>
          <TabsTrigger
            value="considerations"
            className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white"
          >
            Implementation & Ethics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="capabilities" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {agent.capabilities.map((capability) => (
              <Card key={capability.id} className="bg-[#002050] border-[#0a3166] overflow-hidden">
                <div
                  className={`h-1 w-full ${capability.accuracy >= 85 ? "bg-green-500" : capability.accuracy >= 75 ? "bg-amber-500" : "bg-red-500"}`}
                ></div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-white">{capability.name}</CardTitle>
                    <Badge className={`${getMaturityColor(capability.maturityLevel)} text-white`}>
                      {capability.maturityLevel}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4">{capability.description}</CardDescription>

                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-[#36b6b0] mb-1">AI Models</div>
                      <div className="flex flex-wrap gap-2">
                        {capability.aiModels.map((model, idx) => (
                          <Badge key={idx} variant="outline" className="border-[#36b6b0] text-[#36b6b0]">
                            {model}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="text-[#36b6b0]">Accuracy:</span> {capability.accuracy}%
                      </div>
                      <div className="w-32 bg-[#0a3166] rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[#36b6b0] to-[#0047CC] h-2 rounded-full"
                          style={{ width: `${capability.accuracy}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="usecases" className="mt-0">
          <div className="grid grid-cols-1 gap-6">
            {agent.useCases.map((useCase) => (
              <Card key={useCase.id} className="bg-[#002050] border-[#0a3166]">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-white">{useCase.title}</CardTitle>
                    <div className="flex gap-2">
                      <Badge className={`${getComplexityColor(useCase.implementationComplexity)} text-white`}>
                        {useCase.implementationComplexity} Complexity
                      </Badge>
                      <Badge className={`${getTimeToValueColor(useCase.timeToValue)} text-white`}>
                        {useCase.timeToValue} Value
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-gray-300">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-[#36b6b0] mb-3">Business Impact</div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {useCase.businessImpact.map((impact, idx) => (
                      <div key={idx} className="bg-[#001a40] p-4 rounded-lg">
                        <div className="text-sm text-gray-300 mb-1">{impact.metric}</div>
                        <div className="text-lg font-bold text-white flex items-center">
                          <Zap className="h-4 w-4 text-[#36b6b0] mr-1" />
                          {impact.improvement}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="considerations" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-[#002050] border-[#0a3166]">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Integration Ecosystem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {agent.integrations.map((integration, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className="h-2 w-2 rounded-full bg-[#36b6b0] mr-2"></div>
                      {integration}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#002050] border-[#0a3166]">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
                  Ethical Considerations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {agent.ethicalConsiderations.map((consideration, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <div className="h-2 w-2 rounded-full bg-amber-500 mr-2 mt-2"></div>
                      {consideration}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

