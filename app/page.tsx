"use client"

import { useState } from "react"
import { hrAgents } from "@/data/hr-agents"
import { sampleHRScoreAssessment } from "@/data/hr-score-data"
import { AgentDetail } from "@/components/agent-detail"
import { AgentMetrics } from "@/components/agent-metrics"
import { AgentOrchestration } from "@/components/agent-orchestration"
import { AgentRoadmap } from "@/components/agent-roadmap"
import { AgentBestPractices } from "@/components/agent-best-practices"
import { HRScoreOverview } from "@/components/hr-score-overview"
import { AgentHRScoreIntegration } from "@/components/agent-hr-score-integration"
import { HRScoreRoadmap } from "@/components/hr-score-roadmap"
import { AgentTrainingWorkflow } from "@/components/agent-training-workflow"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, BarChart2, DollarSign, GraduationCap } from "lucide-react"

export default function AIAgentsPage() {
  const [selectedAgentId, setSelectedAgentId] = useState(hrAgents[0].id)
  const [activeTab, setActiveTab] = useState("capabilities")
  const selectedAgent = hrAgents.find((agent) => agent.id === selectedAgentId) || hrAgents[0]

  const getAgentIcon = (iconName: string) => {
    switch (iconName) {
      case "users":
        return <Users className="h-5 w-5" />
      case "heart":
        return <Heart className="h-5 w-5" />
      case "bar-chart-2":
        return <BarChart2 className="h-5 w-5" />
      case "dollar-sign":
        return <DollarSign className="h-5 w-5" />
      case "graduation-cap":
        return <GraduationCap className="h-5 w-5" />
      default:
        return <Users className="h-5 w-5" />
    }
  }

  return (
    <div className="min-h-screen bg-[#002050] text-white">
      <header className="border-b border-[#0a3166]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">AI Agents for HR Excellence</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <HRScoreOverview assessment={sampleHRScoreAssessment} />
        </section>

        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Transform HR with Specialized AI Agents</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Purpose-built AI agents that deliver actionable insights and automate complex HR processes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {hrAgents.map((agent) => (
              <Card
                key={agent.id}
                className={`cursor-pointer transition-all ${
                  selectedAgentId === agent.id
                    ? "bg-[#0047CC] border-[#36b6b0] shadow-lg"
                    : "bg-[#001a40] border-[#0a3166] hover:bg-[#001a40]/80"
                }`}
                onClick={() => setSelectedAgentId(agent.id)}
              >
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div
                    className={`p-3 rounded-full mb-3 ${
                      selectedAgentId === agent.id ? "bg-[#36b6b0]" : "bg-[#002050]"
                    }`}
                  >
                    {getAgentIcon(agent.icon)}
                  </div>
                  <h3 className="font-medium text-sm text-slate-300">{agent.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <AgentMetrics agent={selectedAgent} />

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mt-8">
            <TabsList className="bg-[#002050] border border-[#0a3166] mb-6">
              <TabsTrigger
                value="capabilities"
                className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white"
              >
                Agent Capabilities
              </TabsTrigger>
              <TabsTrigger value="hr-score" className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white">
                HR Score Integration
              </TabsTrigger>
            </TabsList>

            <TabsContent value="capabilities" className="mt-0">
              <AgentDetail agent={selectedAgent} />
            </TabsContent>

            <TabsContent value="hr-score" className="mt-0">
              <AgentHRScoreIntegration agent={selectedAgent} assessment={sampleHRScoreAssessment} />
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-12 py-8 border-t border-[#0a3166]">
          <AgentOrchestration agents={hrAgents} />
        </section>

        <section className="mb-12 py-8 border-t border-[#0a3166]">
          <AgentTrainingWorkflow />
        </section>

        <section className="mb-12 py-8 border-t border-[#0a3166]">
          <HRScoreRoadmap assessment={sampleHRScoreAssessment} />
        </section>

        <section className="mb-12 py-8 border-t border-[#0a3166]">
          <AgentBestPractices />
        </section>

        <section className="py-8 border-t border-[#0a3166]">
          <AgentRoadmap />
        </section>
      </main>

      <footer className="border-t border-[#0a3166] py-6 bg-[#001a40]">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} HR Insights AI. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

