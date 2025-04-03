export interface EVPAttribute {
  id: string
  name: string
  description: string
  importance: number // 1-10
  satisfactionScore?: number // 0-100
  benchmarkScore?: number // 0-100
  gap?: number // Calculated
}

export interface EVPCategory {
  id: string
  name: string
  description: string
  attributes: EVPAttribute[]
  overallScore?: number // 0-100
  benchmarkScore?: number // 0-100
  priority: "Critical" | "High" | "Medium" | "Low"
}

export interface EVPPersona {
  id: string
  name: string
  description: string
  demographics: string[]
  topAttributes: string[] // IDs of top EVP attributes
  painPoints: string[]
  goals: string[]
  quote: string
}

export interface EVPAnalysis {
  organizationName: string
  overallScore: number // 0-100
  benchmarkScore: number // 0-100
  categories: EVPCategory[]
  strengths: string[]
  opportunities: string[]
  personas: EVPPersona[]
  recommendedActions: {
    immediate: string[]
    shortTerm: string[]
    longTerm: string[]
  }
}

