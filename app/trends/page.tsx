"use client"

import { hrAgents } from "@/data/hr-agents"
import { hrTrends } from "@/data/hr-trends-data"
import { HRTrendsSection } from "@/components/hr-trends-section"
import { TrendsAgentIntegration } from "@/components/trends-agent-integration"

export default function HRTrendsPage() {
  return (
    <div className="min-h-screen bg-[#002050] text-white">
      <header className="border-b border-[#0a3166]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">HR Trends & AI Insights</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <HRTrendsSection trends={hrTrends} />
        </section>

        <section className="py-8 border-t border-[#0a3166]">
          <TrendsAgentIntegration trends={hrTrends} agents={hrAgents} />
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

