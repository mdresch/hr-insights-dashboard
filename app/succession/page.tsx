"use client"

import { useState } from "react"
import { sampleSuccessionPlan } from "@/data/succession-data"
import { hrAgents } from "@/data/hr-agents"
import { SuccessionOverview } from "@/components/succession-overview"
import { KeyPositionDetail } from "@/components/key-position-detail"
import { SuccessionCandidateDetail } from "@/components/succession-candidate-detail"
import { TalentPoolDetail } from "@/components/talent-pool-detail"
import { SuccessionAgentIntegration } from "@/components/succession-agent-integration"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SuccessionPage() {
  const [selectedPositionId, setSelectedPositionId] = useState(sampleSuccessionPlan.keyPositions[0].id)
  const [selectedCandidateId, setSelectedCandidateId] = useState(sampleSuccessionPlan.keyPositions[0].successors[0].id)
  const [selectedPoolId, setSelectedPoolId] = useState(sampleSuccessionPlan.talentPools[0].id)

  const selectedPosition =
    sampleSuccessionPlan.keyPositions.find((p) => p.id === selectedPositionId) || sampleSuccessionPlan.keyPositions[0]
  const selectedCandidate =
    sampleSuccessionPlan.keyPositions.flatMap((p) => p.successors).find((c) => c.id === selectedCandidateId) ||
    sampleSuccessionPlan.keyPositions[0].successors[0]
  const selectedPool =
    sampleSuccessionPlan.talentPools.find((p) => p.id === selectedPoolId) || sampleSuccessionPlan.talentPools[0]

  return (
    <div className="min-h-screen bg-[#002050] text-white">
      <header className="border-b border-[#0a3166]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Succession Planning</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <SuccessionOverview plan={sampleSuccessionPlan} />
        </section>

        <section className="mb-12 py-8 border-t border-[#0a3166]">
          <Tabs defaultValue="positions" className="w-full">
            <TabsList className="bg-[#002050] border border-[#0a3166] mb-6">
              <TabsTrigger
                value="positions"
                className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white"
              >
                Key Positions
              </TabsTrigger>
              <TabsTrigger
                value="candidates"
                className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white"
              >
                Succession Candidates
              </TabsTrigger>
              <TabsTrigger value="pools" className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white">
                Talent Pools
              </TabsTrigger>
              <TabsTrigger
                value="ai-integration"
                className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white"
              >
                AI Integration
              </TabsTrigger>
            </TabsList>

            <TabsContent value="positions" className="mt-0">
              <div className="mb-6">
                <div className="text-lg font-bold mb-3">Select Position</div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {sampleSuccessionPlan.keyPositions.map((position) => (
                    <button
                      key={position.id}
                      className={`p-3 rounded-lg text-left transition-colors ${
                        selectedPositionId === position.id
                          ? "bg-[#0047CC] text-white"
                          : "bg-[#001a40] text-gray-300 hover:bg-[#001a40]/80"
                      }`}
                      onClick={() => setSelectedPositionId(position.id)}
                    >
                      <div className="font-medium">{position.title}</div>
                      <div className="text-xs mt-1">{position.department}</div>
                    </button>
                  ))}
                </div>
              </div>

              <KeyPositionDetail position={selectedPosition} />
            </TabsContent>

            <TabsContent value="candidates" className="mt-0">
              <div className="mb-6">
                <div className="text-lg font-bold mb-3">Select Candidate</div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {sampleSuccessionPlan.keyPositions
                    .flatMap((p) => p.successors)
                    .map((candidate) => (
                      <button
                        key={candidate.id}
                        className={`p-3 rounded-lg text-left transition-colors ${
                          selectedCandidateId === candidate.id
                            ? "bg-[#0047CC] text-white"
                            : "bg-[#001a40] text-gray-300 hover:bg-[#001a40]/80"
                        }`}
                        onClick={() => setSelectedCandidateId(candidate.id)}
                      >
                        <div className="font-medium">{candidate.name}</div>
                        <div className="text-xs mt-1">{candidate.currentRole}</div>
                      </button>
                    ))}
                </div>
              </div>

              <SuccessionCandidateDetail candidate={selectedCandidate} />
            </TabsContent>

            <TabsContent value="pools" className="mt-0">
              <div className="mb-6">
                <div className="text-lg font-bold mb-3">Select Talent Pool</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {sampleSuccessionPlan.talentPools.map((pool) => (
                    <button
                      key={pool.id}
                      className={`p-3 rounded-lg text-left transition-colors ${
                        selectedPoolId === pool.id
                          ? "bg-[#0047CC] text-white"
                          : "bg-[#001a40] text-gray-300 hover:bg-[#001a40]/80"
                      }`}
                      onClick={() => setSelectedPoolId(pool.id)}
                    >
                      <div className="font-medium">{pool.name}</div>
                      <div className="text-xs mt-1">{pool.members.length} members</div>
                    </button>
                  ))}
                </div>
              </div>

              <TalentPoolDetail pool={selectedPool} />
            </TabsContent>

            <TabsContent value="ai-integration" className="mt-0">
              <SuccessionAgentIntegration agents={hrAgents} />
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

