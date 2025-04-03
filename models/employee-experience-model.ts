// Employee Experience Models

export type SentimentLevel = "Very Positive" | "Positive" | "Neutral" | "Negative" | "Very Negative"
export type EngagementLevel = "Highly Engaged" | "Engaged" | "Passive" | "Disengaged" | "Actively Disengaged"
export type ExperienceDimension =
  | "Work Content"
  | "Work Environment"
  | "Work Relationships"
  | "Work Tools"
  | "Work-Life Balance"
  | "Growth & Development"
  | "Rewards & Recognition"
  | "Organizational Alignment"
export type EmployeeSegment =
  | "New Hire"
  | "Individual Contributor"
  | "Manager"
  | "Remote Worker"
  | "Hybrid Worker"
  | "Office-based"
  | "Frontline"
  | "High Performer"
  | "High Potential"
export type ResponseType = "Numerical" | "Text" | "Multiple Choice" | "Boolean"
export type MomentType =
  | "Onboarding"
  | "Role Change"
  | "Manager Change"
  | "Location Change"
  | "Return from Leave"
  | "Performance Review"
  | "Work Anniversary"
  | "Life Event"
  | "Project Completion"
  | "Training Completion"

export interface ExperienceDriver {
  id: string
  name: string
  dimension: ExperienceDimension
  description: string
  importance: number // 1-10
  satisfactionScore?: number // 0-100
  benchmarkScore?: number // 0-100
  gap?: number // Calculated
  impactOnEngagement: number // 0-100, correlation coefficient
  trendData?: {
    date: string
    score: number
  }[]
}

export interface EmployeeFeedback {
  id: string
  employeeId: string
  timestamp: string
  source:
    | "Pulse Survey"
    | "Annual Survey"
    | "Exit Interview"
    | "Stay Interview"
    | "Onboarding Survey"
    | "Performance Review"
    | "Open Feedback"
  sentiment: SentimentLevel
  topic: string
  dimension: ExperienceDimension
  verbatim: string
  keywords?: string[]
  actionTaken?: string
  actionDate?: string
}

export interface MomentExperience {
  id: string
  name: string
  type: MomentType
  description: string
  frequency: "One-time" | "Recurring" | "Conditional"
  touchpoints: {
    id: string
    name: string
    owner: string
    channel: "Email" | "SMS" | "Notification" | "In-person" | "Video Call" | "Phone" | "Manager" | "System"
    timing: string // e.g., "Day 1", "2 weeks before", "Upon completion"
    content: string
    satisfactionScore?: number
  }[]
  overallSatisfaction: number // 0-100
  benchmarkSatisfaction?: number // 0-100
  completionRate: number // 0-100
  impactOnRetention: number // -100 to 100, correlation coefficient
}

export interface SurveyQuestion {
  id: string
  text: string
  dimension: ExperienceDimension
  responseType: ResponseType
  options?: string[]
  required: boolean
  driver?: string // ID of associated driver
}

export interface SurveyResponse {
  id: string
  questionId: string
  employeeId: string
  surveyId: string
  timestamp: string
  numericalResponse?: number
  textResponse?: string
  selectedOptions?: string[]
  booleanResponse?: boolean
}

export interface EmployeeSegmentInsight {
  segment: EmployeeSegment
  populationPercentage: number
  count: number
  engagementScore: number
  benchmarkEngagement?: number
  topDrivers: {
    driverId: string
    driverName: string
    satisfactionScore: number
  }[]
  bottomDrivers: {
    driverId: string
    driverName: string
    satisfactionScore: number
  }[]
  retentionRisk: number // 0-100
  recommendedActions: string[]
}

export interface ActionPlan {
  id: string
  title: string
  description: string
  targetDimension: ExperienceDimension
  targetDrivers: string[] // Driver IDs
  targetSegments: EmployeeSegment[]
  status: "Not Started" | "In Progress" | "Completed"
  startDate: string
  endDate?: string
  owner: string
  expectedImpact: number // 0-100
  actualImpact?: number // 0-100
  actions: {
    id: string
    description: string
    owner: string
    dueDate: string
    status: "Not Started" | "In Progress" | "Completed"
    progress: number // 0-100
    notes?: string
  }[]
}

export interface EmployeeExperienceDashboard {
  overallEngagementScore: number
  benchmarkEngagement: number
  responseRate: number
  participantCount: number
  engagementTrend: {
    date: string
    score: number
  }[]
  dimensionScores: {
    dimension: ExperienceDimension
    score: number
    benchmark?: number
    change?: number
  }[]
  drivers: ExperienceDriver[]
  segmentInsights: EmployeeSegmentInsight[]
  recentFeedback: EmployeeFeedback[]
  actionPlans: ActionPlan[]
  moments: MomentExperience[]
}

