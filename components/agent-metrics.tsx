import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { HRAgent } from "@/models/agent-model"

interface AgentMetricsProps {
  agent: HRAgent
}

export function AgentMetrics({ agent }: AgentMetricsProps) {
  // Calculate average accuracy across capabilities
  const avgAccuracy = agent.capabilities.reduce((sum, cap) => sum + cap.accuracy, 0) / agent.capabilities.length

  // Count capabilities by maturity level
  const maturityLevels = agent.capabilities.reduce(
    (acc, cap) => {
      acc[cap.maturityLevel] = (acc[cap.maturityLevel] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  // Calculate implementation complexity distribution
  const complexityDistribution = agent.useCases.reduce(
    (acc, useCase) => {
      acc[useCase.implementationComplexity] = (acc[useCase.implementationComplexity] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <Card className="bg-[#002050] border-[#0a3166]">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-gray-300">Average Accuracy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-[#36b6b0]">{avgAccuracy.toFixed(1)}%</div>
          <div className="mt-1 text-xs text-gray-400">Across all capabilities</div>
        </CardContent>
      </Card>

      <Card className="bg-[#002050] border-[#0a3166]">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-gray-300">Capability Maturity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            {Object.entries(maturityLevels).map(([level, count]) => (
              <div key={level} className="flex-1">
                <div className="text-2xl font-bold text-white">{count}</div>
                <div className="text-xs text-gray-400">{level}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#002050] border-[#0a3166]">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-gray-300">Business Use Cases</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-[#36b6b0]">{agent.useCases.length}</div>
          <div className="mt-1 text-xs text-gray-400">Validated implementations</div>
        </CardContent>
      </Card>

      <Card className="bg-[#002050] border-[#0a3166]">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-gray-300">Implementation Effort</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-1">
            {["Low", "Medium", "High"].map((level) => (
              <div
                key={level}
                className={`h-6 rounded-sm ${
                  level === "Low" ? "bg-green-500" : level === "Medium" ? "bg-amber-500" : "bg-red-500"
                }`}
                style={{
                  width: `${((complexityDistribution[level] || 0) / agent.useCases.length) * 100}%`,
                  minWidth: (complexityDistribution[level] || 0) > 0 ? "20%" : "0%",
                }}
              ></div>
            ))}
          </div>
          <div className="mt-1 text-xs text-gray-400 flex justify-between">
            <span>Low</span>
            <span>Medium</span>
            <span>High</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

