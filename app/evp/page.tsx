"use client"

import { sampleEVPAnalysis } from "@/data/evp-data"
import { hrAgents } from "@/data/hr-agents"
import { EVPOverview } from "@/components/evp-overview"
import { EVPPersonas } from "@/components/evp-personas"
import { EVPActionPlan } from "@/components/evp-action-plan"
import { EVPAgentIntegration } from "@/components/evp-agent-integration"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EVPPage() {
  return (
    <div className="min-h-screen bg-[#002050] text-white">
      <header className="border-b border-[#0a3166]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Employee Value Proposition</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <EVPOverview analysis={sampleEVPAnalysis} />
        </section>

        <section className="mb-12 py-8 border-t border-[#0a3166]">
          <Tabs defaultValue="personas" className="w-full">
            <TabsList className="bg-[#002050] border border-[#0a3166] mb-6">
              <TabsTrigger value="personas" className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white">
                Employee Personas
              </TabsTrigger>
              <TabsTrigger
                value="action-plan"
                className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white"
              >
                EVP Action Plan
              </TabsTrigger>
              <TabsTrigger
                value="ai-integration"
                className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white"
              >
                AI Agent Integration
              </TabsTrigger>
            </TabsList>

            <TabsContent value="personas" className="mt-0">
              <EVPPersonas personas={sampleEVPAnalysis.personas} categories={sampleEVPAnalysis.categories} />
            </TabsContent>

            <TabsContent value="action-plan" className="mt-0">
              <EVPActionPlan analysis={sampleEVPAnalysis} />
            </TabsContent>

            <TabsContent value="ai-integration" className="mt-0">
              <EVPAgentIntegration categories={sampleEVPAnalysis.categories} agents={hrAgents} />
            </TabsContent>
          </Tabs>
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

