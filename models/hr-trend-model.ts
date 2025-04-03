export interface HRTrendStat {
  value: string
  label: string
  source?: string
}

export interface HRTrendAction {
  title: string
  description: string
}

export interface HRTrend {
  id: string
  title: string
  description: string
  impact: "High" | "Medium" | "Low"
  timeframe: "Immediate" | "Short-term" | "Medium-term" | "Long-term"
  stats: HRTrendStat[]
  relatedAgents: string[]
  actions: HRTrendAction[]
  imageUrl?: string
}

