export type ReadinessLevel = "Ready Now" | "Ready in 1-2 Years" | "Ready in 3+ Years" | "Development Needed"
export type RiskLevel = "Low" | "Medium" | "High" | "Critical"
export type PerformanceRating =
  | "Exceptional"
  | "Exceeds Expectations"
  | "Meets Expectations"
  | "Below Expectations"
  | "Unsatisfactory"
export type PotentialRating = "High Potential" | "Promotable" | "Valuable Contributor" | "Underperformer"

export interface Competency {
  id: string
  name: string
  description: string
  currentRating?: number // 1-5
  requiredRating?: number // 1-5
  gap?: number // Calculated
}

export interface DevelopmentAction {
  id: string
  type: "Training" | "Experience" | "Exposure" | "Education" | "Coaching"
  description: string
  targetCompetencies: string[] // IDs of competencies
  timeframe: "Immediate" | "Short-term" | "Long-term"
  status: "Not Started" | "In Progress" | "Completed"
  completionDate?: string
  notes?: string
}

export interface SuccessionCandidate {
  id: string
  name: string
  currentRole: string
  department: string
  location: string
  timeInRole: number // in months
  performance: PerformanceRating
  potential: PotentialRating
  readiness: ReadinessLevel
  retentionRisk: RiskLevel
  impactOfLoss: RiskLevel
  keyStrengths: string[]
  developmentAreas: string[]
  competencies: Competency[]
  developmentActions: DevelopmentAction[]
  careerAspirations?: string
  notes?: string
}

export interface KeyPosition {
  id: string
  title: string
  department: string
  location: string
  criticality: RiskLevel
  incumbent: {
    id: string
    name: string
    timeInRole: number // in months
    retirementRisk: RiskLevel
    performanceRating: PerformanceRating
    flightRisk: RiskLevel
  }
  requiredCompetencies: Competency[]
  successors: SuccessionCandidate[]
  benchStrength: number // 0-100
  vacancyRisk: RiskLevel
  notes?: string
}

export interface TalentPool {
  id: string
  name: string
  description: string
  targetRoles: string[] // Role titles
  members: SuccessionCandidate[]
  benchStrength: number // 0-100
  diversityMetrics?: {
    gender: Record<string, number>
    ethnicity: Record<string, number>
    generation: Record<string, number>
  }
}

export interface SuccessionMetrics {
  overallBenchStrength: number // 0-100
  readinessDistribution: Record<ReadinessLevel, number>
  criticalPositionCoverage: number // 0-100
  averageTimeToReadiness: number // in months
  retentionRateOfHighPotentials: number // 0-100
  internalPromotionRate: number // 0-100
  successionPlanEffectiveness: number // 0-100
  diversityInSuccessionPipeline: {
    gender: Record<string, number>
    ethnicity: Record<string, number>
    generation: Record<string, number>
  }
}

export interface SuccessionPlan {
  organizationName: string
  lastUpdated: string
  keyPositions: KeyPosition[]
  talentPools: TalentPool[]
  metrics: SuccessionMetrics
}

