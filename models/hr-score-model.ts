export type MaturityLevel = "Initial" | "Developing" | "Established" | "Advanced" | "Optimized"

export interface MaturityDimension {
  id: string
  name: string
  description: string
  currentMaturity: MaturityLevel
  targetMaturity: MaturityLevel
  importance: "Low" | "Medium" | "High" | "Critical"
  score: number // 1-5
  activities: {
    id: string
    name: string
    description: string
    currentState: string
    targetState: string
    gap: number // 0-4
    priority: number // 1-10
  }[]
}

export interface HRScoreCategory {
  id: string
  name: string
  description: string
  dimensions: MaturityDimension[]
  overallScore: number // 1-5
  maturityLevel: MaturityLevel
  priorityActions: string[]
}

export interface HRScoreAssessment {
  id: string
  organizationName: string
  completedDate: string
  categories: HRScoreCategory[]
  overallMaturityScore: number // 1-5
  overallMaturityLevel: MaturityLevel
  topPriorities: {
    categoryId: string
    dimensionId: string
    activityId: string
    priority: number
  }[]
}

