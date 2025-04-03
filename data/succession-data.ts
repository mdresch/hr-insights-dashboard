import type {
  SuccessionPlan,
  KeyPosition,
  SuccessionCandidate,
  TalentPool,
  Competency,
  DevelopmentAction,
} from "@/models/succession-model"

// Sample competencies
export const leadershipCompetencies: Competency[] = [
  {
    id: "strategic-thinking",
    name: "Strategic Thinking",
    description: "Ability to understand the organization's position in the market and create competitive strategies.",
    requiredRating: 4,
  },
  {
    id: "business-acumen",
    name: "Business Acumen",
    description: "Understanding of business operations, finance, and market dynamics.",
    requiredRating: 4,
  },
  {
    id: "change-leadership",
    name: "Change Leadership",
    description: "Ability to lead and manage organizational change effectively.",
    requiredRating: 4,
  },
  {
    id: "decision-making",
    name: "Decision Making",
    description: "Ability to make timely, informed decisions considering multiple perspectives.",
    requiredRating: 5,
  },
  {
    id: "people-development",
    name: "People Development",
    description: "Skill in developing talent and building high-performing teams.",
    requiredRating: 4,
  },
  {
    id: "influence",
    name: "Influence & Collaboration",
    description: "Ability to build relationships and influence across the organization.",
    requiredRating: 4,
  },
  {
    id: "innovation",
    name: "Innovation & Creativity",
    description: "Ability to foster innovation and creative problem-solving.",
    requiredRating: 3,
  },
  {
    id: "resilience",
    name: "Resilience & Adaptability",
    description: "Capacity to adapt to changing circumstances and recover from setbacks.",
    requiredRating: 4,
  },
  {
    id: "communication",
    name: "Communication",
    description: "Ability to communicate clearly and effectively with diverse stakeholders.",
    requiredRating: 5,
  },
  {
    id: "results-orientation",
    name: "Results Orientation",
    description: "Focus on achieving outcomes and driving performance.",
    requiredRating: 4,
  },
]

// Sample development actions
export const developmentActions: DevelopmentAction[] = [
  {
    id: "action-1",
    type: "Experience",
    description: "Lead a cross-functional strategic initiative",
    targetCompetencies: ["strategic-thinking", "influence", "change-leadership"],
    timeframe: "Short-term",
    status: "In Progress",
  },
  {
    id: "action-2",
    type: "Training",
    description: "Executive leadership development program",
    targetCompetencies: ["strategic-thinking", "business-acumen", "decision-making"],
    timeframe: "Short-term",
    status: "Not Started",
  },
  {
    id: "action-3",
    type: "Coaching",
    description: "Executive coaching with focus on strategic leadership",
    targetCompetencies: ["strategic-thinking", "change-leadership", "decision-making"],
    timeframe: "Immediate",
    status: "In Progress",
  },
  {
    id: "action-4",
    type: "Exposure",
    description: "Board meeting presentations and exposure",
    targetCompetencies: ["communication", "influence", "business-acumen"],
    timeframe: "Short-term",
    status: "Not Started",
  },
  {
    id: "action-5",
    type: "Experience",
    description: "International assignment to develop global perspective",
    targetCompetencies: ["resilience", "innovation", "change-leadership"],
    timeframe: "Long-term",
    status: "Not Started",
  },
  {
    id: "action-6",
    type: "Education",
    description: "Executive MBA or specialized leadership program",
    targetCompetencies: ["business-acumen", "strategic-thinking", "decision-making"],
    timeframe: "Long-term",
    status: "Not Started",
  },
  {
    id: "action-7",
    type: "Experience",
    description: "P&L responsibility for a business unit",
    targetCompetencies: ["business-acumen", "results-orientation", "decision-making"],
    timeframe: "Short-term",
    status: "Not Started",
  },
  {
    id: "action-8",
    type: "Training",
    description: "Advanced financial acumen workshop",
    targetCompetencies: ["business-acumen", "decision-making"],
    timeframe: "Immediate",
    status: "Not Started",
  },
]

// Sample succession candidates
export const successionCandidates: SuccessionCandidate[] = [
  {
    id: "candidate-1",
    name: "Alex Morgan",
    currentRole: "VP of Operations",
    department: "Operations",
    location: "New York",
    timeInRole: 36,
    performance: "Exceptional",
    potential: "High Potential",
    readiness: "Ready in 1-2 Years",
    retentionRisk: "Medium",
    impactOfLoss: "High",
    keyStrengths: ["Operational excellence", "Team leadership", "Process optimization"],
    developmentAreas: ["Strategic thinking", "External stakeholder management"],
    competencies: [
      { ...leadershipCompetencies[0], currentRating: 3, gap: 1 },
      { ...leadershipCompetencies[1], currentRating: 4, gap: 0 },
      { ...leadershipCompetencies[2], currentRating: 4, gap: 0 },
      { ...leadershipCompetencies[3], currentRating: 4, gap: 1 },
      { ...leadershipCompetencies[4], currentRating: 5, gap: -1 },
      { ...leadershipCompetencies[5], currentRating: 3, gap: 1 },
      { ...leadershipCompetencies[8], currentRating: 4, gap: 1 },
      { ...leadershipCompetencies[9], currentRating: 5, gap: -1 },
    ],
    developmentActions: [developmentActions[0], developmentActions[2], developmentActions[3]],
    careerAspirations: "COO or General Manager role with global responsibility",
  },
  {
    id: "candidate-2",
    name: "Jamie Chen",
    currentRole: "Senior Director, Product",
    department: "Product",
    location: "San Francisco",
    timeInRole: 24,
    performance: "Exceeds Expectations",
    potential: "High Potential",
    readiness: "Ready in 1-2 Years",
    retentionRisk: "High",
    impactOfLoss: "High",
    keyStrengths: ["Product innovation", "Customer focus", "Strategic vision"],
    developmentAreas: ["People leadership at scale", "Financial management"],
    competencies: [
      { ...leadershipCompetencies[0], currentRating: 5, gap: -1 },
      { ...leadershipCompetencies[1], currentRating: 3, gap: 1 },
      { ...leadershipCompetencies[2], currentRating: 4, gap: 0 },
      { ...leadershipCompetencies[3], currentRating: 4, gap: 1 },
      { ...leadershipCompetencies[4], currentRating: 3, gap: 1 },
      { ...leadershipCompetencies[6], currentRating: 5, gap: -2 },
      { ...leadershipCompetencies[7], currentRating: 4, gap: 0 },
      { ...leadershipCompetencies[8], currentRating: 4, gap: 1 },
    ],
    developmentActions: [developmentActions[1], developmentActions[4], developmentActions[7]],
    careerAspirations: "Chief Product Officer or CEO of a product-led company",
  },
  {
    id: "candidate-3",
    name: "Taylor Washington",
    currentRole: "VP of Marketing",
    department: "Marketing",
    location: "Chicago",
    timeInRole: 30,
    performance: "Exceeds Expectations",
    potential: "Promotable",
    readiness: "Ready in 1-2 Years",
    retentionRisk: "Medium",
    impactOfLoss: "High",
    keyStrengths: ["Brand strategy", "Digital transformation", "Cross-functional leadership"],
    developmentAreas: ["P&L management", "Global market expertise"],
    competencies: [
      { ...leadershipCompetencies[0], currentRating: 4, gap: 0 },
      { ...leadershipCompetencies[1], currentRating: 3, gap: 1 },
      { ...leadershipCompetencies[2], currentRating: 4, gap: 0 },
      { ...leadershipCompetencies[5], currentRating: 5, gap: -1 },
      { ...leadershipCompetencies[6], currentRating: 4, gap: -1 },
      { ...leadershipCompetencies[7], currentRating: 4, gap: 0 },
      { ...leadershipCompetencies[8], currentRating: 5, gap: 0 },
    ],
    developmentActions: [developmentActions[4], developmentActions[6], developmentActions[7]],
    careerAspirations: "CMO or General Manager with commercial focus",
  },
  {
    id: "candidate-4",
    name: "Jordan Smith",
    currentRole: "Senior Director, Finance",
    department: "Finance",
    location: "London",
    timeInRole: 48,
    performance: "Exceeds Expectations",
    potential: "Promotable",
    readiness: "Ready Now",
    retentionRisk: "Low",
    impactOfLoss: "High",
    keyStrengths: ["Financial strategy", "Business partnering", "Risk management"],
    developmentAreas: ["Broader business leadership", "Change management"],
    competencies: [
      { ...leadershipCompetencies[0], currentRating: 4, gap: 0 },
      { ...leadershipCompetencies[1], currentRating: 5, gap: -1 },
      { ...leadershipCompetencies[2], currentRating: 3, gap: 1 },
      { ...leadershipCompetencies[3], currentRating: 5, gap: 0 },
      { ...leadershipCompetencies[4], currentRating: 3, gap: 1 },
      { ...leadershipCompetencies[5], currentRating: 4, gap: 0 },
      { ...leadershipCompetencies[9], currentRating: 4, gap: 0 },
    ],
    developmentActions: [developmentActions[0], developmentActions[2], developmentActions[5]],
    careerAspirations: "CFO with expanded responsibility in operations or strategy",
  },
  {
    id: "candidate-5",
    name: "Riley Johnson",
    currentRole: "VP of Technology",
    department: "IT",
    location: "Austin",
    timeInRole: 18,
    performance: "Exceptional",
    potential: "High Potential",
    readiness: "Ready in 3+ Years",
    retentionRisk: "High",
    impactOfLoss: "Critical",
    keyStrengths: ["Technical vision", "Digital transformation", "Innovation leadership"],
    developmentAreas: ["Business acumen", "Executive presence", "Cross-functional leadership"],
    competencies: [
      { ...leadershipCompetencies[0], currentRating: 4, gap: 0 },
      { ...leadershipCompetencies[1], currentRating: 2, gap: 2 },
      { ...leadershipCompetencies[2], currentRating: 3, gap: 1 },
      { ...leadershipCompetencies[3], currentRating: 4, gap: 1 },
      { ...leadershipCompetencies[5], currentRating: 3, gap: 1 },
      { ...leadershipCompetencies[6], currentRating: 5, gap: -2 },
      { ...leadershipCompetencies[7], currentRating: 4, gap: 0 },
      { ...leadershipCompetencies[8], currentRating: 3, gap: 2 },
    ],
    developmentActions: [developmentActions[1], developmentActions[3], developmentActions[7]],
    careerAspirations: "CTO or CIO with enterprise-wide digital transformation responsibility",
  },
  {
    id: "candidate-6",
    name: "Morgan Lee",
    currentRole: "Senior Director, HR",
    department: "Human Resources",
    location: "Toronto",
    timeInRole: 36,
    performance: "Exceeds Expectations",
    potential: "High Potential",
    readiness: "Ready in 1-2 Years",
    retentionRisk: "Medium",
    impactOfLoss: "High",
    keyStrengths: ["Talent strategy", "Organizational development", "Change management"],
    developmentAreas: ["Business acumen", "Digital HR transformation"],
    competencies: [
      { ...leadershipCompetencies[0], currentRating: 4, gap: 0 },
      { ...leadershipCompetencies[1], currentRating: 3, gap: 1 },
      { ...leadershipCompetencies[2], currentRating: 5, gap: -1 },
      { ...leadershipCompetencies[4], currentRating: 5, gap: -1 },
      { ...leadershipCompetencies[5], currentRating: 4, gap: 0 },
      { ...leadershipCompetencies[7], currentRating: 4, gap: 0 },
      { ...leadershipCompetencies[8], currentRating: 4, gap: 1 },
    ],
    developmentActions: [developmentActions[1], developmentActions[6], developmentActions[7]],
    careerAspirations: "CHRO or COO with people and culture focus",
  },
]

// Sample key positions
export const keyPositions: KeyPosition[] = [
  {
    id: "position-1",
    title: "Chief Executive Officer",
    department: "Executive",
    location: "New York",
    criticality: "Critical",
    incumbent: {
      id: "incumbent-1",
      name: "Chris Williams",
      timeInRole: 60,
      retirementRisk: "Medium",
      performanceRating: "Exceptional",
      flightRisk: "Low",
    },
    requiredCompetencies: leadershipCompetencies,
    successors: [successionCandidates[0], successionCandidates[1], successionCandidates[2]],
    benchStrength: 65,
    vacancyRisk: "Medium",
    notes: "Current incumbent planning to retire in 3-5 years. Developing internal candidates is a priority.",
  },
  {
    id: "position-2",
    title: "Chief Financial Officer",
    department: "Finance",
    location: "New York",
    criticality: "High",
    incumbent: {
      id: "incumbent-2",
      name: "Pat Rodriguez",
      timeInRole: 48,
      retirementRisk: "Low",
      performanceRating: "Exceeds Expectations",
      flightRisk: "Medium",
    },
    requiredCompetencies: leadershipCompetencies.filter((c) =>
      [
        "strategic-thinking",
        "business-acumen",
        "decision-making",
        "influence",
        "communication",
        "results-orientation",
      ].includes(c.id),
    ),
    successors: [successionCandidates[3]],
    benchStrength: 40,
    vacancyRisk: "High",
    notes:
      "Limited internal pipeline. Consider external talent mapping and accelerated development for internal candidates.",
  },
  {
    id: "position-3",
    title: "Chief Technology Officer",
    department: "Technology",
    location: "San Francisco",
    criticality: "High",
    incumbent: {
      id: "incumbent-3",
      name: "Sam Johnson",
      timeInRole: 36,
      retirementRisk: "Low",
      performanceRating: "Exceeds Expectations",
      flightRisk: "High",
    },
    requiredCompetencies: leadershipCompetencies.filter((c) =>
      ["strategic-thinking", "innovation", "change-leadership", "decision-making", "people-development"].includes(c.id),
    ),
    successors: [successionCandidates[4]],
    benchStrength: 35,
    vacancyRisk: "High",
    notes:
      "Current incumbent being recruited by competitors. Need to strengthen retention strategy and accelerate successor development.",
  },
  {
    id: "position-4",
    title: "Chief Human Resources Officer",
    department: "Human Resources",
    location: "Chicago",
    criticality: "High",
    incumbent: {
      id: "incumbent-4",
      name: "Jesse Martinez",
      timeInRole: 24,
      retirementRisk: "Low",
      performanceRating: "Exceeds Expectations",
      flightRisk: "Low",
    },
    requiredCompetencies: leadershipCompetencies.filter((c) =>
      ["strategic-thinking", "change-leadership", "people-development", "influence", "communication"].includes(c.id),
    ),
    successors: [successionCandidates[5]],
    benchStrength: 60,
    vacancyRisk: "Medium",
    notes: "Strong internal candidate being developed. Consider rotational assignment to broaden business experience.",
  },
  {
    id: "position-5",
    title: "Chief Operating Officer",
    department: "Operations",
    location: "Chicago",
    criticality: "Critical",
    incumbent: {
      id: "incumbent-5",
      name: "Taylor Kim",
      timeInRole: 42,
      retirementRisk: "Medium",
      performanceRating: "Exceptional",
      flightRisk: "Low",
    },
    requiredCompetencies: leadershipCompetencies.filter((c) =>
      [
        "strategic-thinking",
        "business-acumen",
        "decision-making",
        "people-development",
        "results-orientation",
      ].includes(c.id),
    ),
    successors: [successionCandidates[0]],
    benchStrength: 55,
    vacancyRisk: "Medium",
    notes:
      "Primary successor on track but needs broader enterprise experience. Consider additional candidates for pipeline.",
  },
]

// Sample talent pools
export const talentPools: TalentPool[] = [
  {
    id: "pool-1",
    name: "Executive Leadership Pipeline",
    description: "High-potential leaders being developed for C-suite roles",
    targetRoles: [
      "Chief Executive Officer",
      "Chief Operating Officer",
      "Chief Financial Officer",
      "Chief Technology Officer",
      "Chief Human Resources Officer",
    ],
    members: [successionCandidates[0], successionCandidates[1], successionCandidates[3], successionCandidates[5]],
    benchStrength: 60,
    diversityMetrics: {
      gender: {
        Male: 50,
        Female: 50,
        "Non-binary": 0,
      },
      ethnicity: {
        White: 50,
        Asian: 25,
        Black: 25,
        Hispanic: 0,
        Other: 0,
      },
      generation: {
        "Gen X": 75,
        Millennial: 25,
        "Baby Boomer": 0,
        "Gen Z": 0,
      },
    },
  },
  {
    id: "pool-2",
    name: "Technology Leadership Pipeline",
    description: "Technical leaders being developed for senior technology roles",
    targetRoles: ["Chief Technology Officer", "Chief Information Officer", "Chief Digital Officer"],
    members: [successionCandidates[4]],
    benchStrength: 35,
    diversityMetrics: {
      gender: {
        Male: 100,
        Female: 0,
        "Non-binary": 0,
      },
      ethnicity: {
        White: 100,
        Asian: 0,
        Black: 0,
        Hispanic: 0,
        Other: 0,
      },
      generation: {
        "Gen X": 0,
        Millennial: 100,
        "Baby Boomer": 0,
        "Gen Z": 0,
      },
    },
  },
  {
    id: "pool-3",
    name: "Commercial Leadership Pipeline",
    description: "Business leaders being developed for commercial executive roles",
    targetRoles: ["Chief Marketing Officer", "Chief Revenue Officer", "Chief Commercial Officer"],
    members: [successionCandidates[2]],
    benchStrength: 40,
    diversityMetrics: {
      gender: {
        Male: 0,
        Female: 100,
        "Non-binary": 0,
      },
      ethnicity: {
        White: 0,
        Asian: 0,
        Black: 100,
        Hispanic: 0,
        Other: 0,
      },
      generation: {
        "Gen X": 100,
        Millennial: 0,
        "Baby Boomer": 0,
        "Gen Z": 0,
      },
    },
  },
]

// Sample succession metrics
export const successionMetrics = {
  overallBenchStrength: 52,
  readinessDistribution: {
    "Ready Now": 10,
    "Ready in 1-2 Years": 60,
    "Ready in 3+ Years": 20,
    "Development Needed": 10,
  },
  criticalPositionCoverage: 65,
  averageTimeToReadiness: 18, // months
  retentionRateOfHighPotentials: 85,
  internalPromotionRate: 70,
  successionPlanEffectiveness: 68,
  diversityInSuccessionPipeline: {
    gender: {
      Male: 50,
      Female: 50,
      "Non-binary": 0,
    },
    ethnicity: {
      White: 50,
      Asian: 17,
      Black: 33,
      Hispanic: 0,
      Other: 0,
    },
    generation: {
      "Gen X": 67,
      Millennial: 33,
      "Baby Boomer": 0,
      "Gen Z": 0,
    },
  },
}

// Complete succession plan
export const sampleSuccessionPlan: SuccessionPlan = {
  organizationName: "Sample Corporation",
  lastUpdated: "2023-11-15",
  keyPositions,
  talentPools,
  metrics: successionMetrics,
}

