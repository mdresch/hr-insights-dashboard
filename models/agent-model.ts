export interface AgentCapability {
  id: string
  name: string
  description: string
  aiModels: string[]
  dataSourcesRequired: string[]
  accuracy: number // 0-100
  maturityLevel: "Emerging" | "Developing" | "Established" | "Advanced"
}

export interface AgentUseCase {
  id: string
  title: string
  description: string
  businessImpact: {
    metric: string
    improvement: string
  }[]
  implementationComplexity: "Low" | "Medium" | "High"
  timeToValue: "Immediate" | "Short-term" | "Medium-term" | "Long-term"
}

export interface HRAgent {
  id: string
  name: string
  description: string
  icon: string
  domain: string
  capabilities: AgentCapability[]
  useCases: AgentUseCase[]
  integrations: string[]
  ethicalConsiderations: string[]
}

