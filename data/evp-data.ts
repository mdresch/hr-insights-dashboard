import type { EVPAnalysis, EVPCategory, EVPPersona } from "@/models/evp-model"

// EVP Categories and Attributes
export const evpCategories: EVPCategory[] = [
  {
    id: "compensation",
    name: "Compensation & Benefits",
    description:
      "The total rewards package including salary, bonuses, health benefits, retirement plans, and other financial incentives.",
    priority: "High",
    overallScore: 68,
    benchmarkScore: 72,
    attributes: [
      {
        id: "base-pay",
        name: "Base Salary",
        description: "Competitive base pay relative to market rates for similar roles.",
        importance: 9,
        satisfactionScore: 65,
        benchmarkScore: 70,
        gap: -5,
      },
      {
        id: "variable-pay",
        name: "Variable Pay & Bonuses",
        description: "Performance-based incentives and bonus opportunities.",
        importance: 8,
        satisfactionScore: 72,
        benchmarkScore: 68,
        gap: 4,
      },
      {
        id: "health-benefits",
        name: "Health & Wellness Benefits",
        description: "Comprehensive health insurance and wellness programs.",
        importance: 9,
        satisfactionScore: 78,
        benchmarkScore: 75,
        gap: 3,
      },
      {
        id: "retirement",
        name: "Retirement Benefits",
        description: "Retirement savings plans and employer contributions.",
        importance: 7,
        satisfactionScore: 70,
        benchmarkScore: 73,
        gap: -3,
      },
      {
        id: "financial-wellbeing",
        name: "Financial Wellbeing Programs",
        description: "Resources and support for financial planning and stability.",
        importance: 6,
        satisfactionScore: 55,
        benchmarkScore: 62,
        gap: -7,
      },
    ],
  },
  {
    id: "work-life",
    name: "Work-Life Balance",
    description:
      "Policies and practices that support employees in managing professional and personal responsibilities.",
    priority: "Critical",
    overallScore: 72,
    benchmarkScore: 65,
    attributes: [
      {
        id: "flexibility",
        name: "Flexible Work Arrangements",
        description: "Options for when and where work is performed.",
        importance: 10,
        satisfactionScore: 82,
        benchmarkScore: 70,
        gap: 12,
      },
      {
        id: "time-off",
        name: "Paid Time Off",
        description: "Vacation, sick leave, and other paid time away from work.",
        importance: 8,
        satisfactionScore: 75,
        benchmarkScore: 72,
        gap: 3,
      },
      {
        id: "workload",
        name: "Sustainable Workload",
        description: "Reasonable expectations for work volume and hours.",
        importance: 9,
        satisfactionScore: 60,
        benchmarkScore: 58,
        gap: 2,
      },
      {
        id: "family-support",
        name: "Family Support Programs",
        description: "Parental leave, childcare assistance, and other family-friendly benefits.",
        importance: 7,
        satisfactionScore: 68,
        benchmarkScore: 60,
        gap: 8,
      },
    ],
  },
  {
    id: "development",
    name: "Career Growth & Development",
    description: "Opportunities for skill development, career advancement, and professional growth.",
    priority: "High",
    overallScore: 58,
    benchmarkScore: 68,
    attributes: [
      {
        id: "learning-opportunities",
        name: "Learning Opportunities",
        description: "Access to training, education, and skill development resources.",
        importance: 8,
        satisfactionScore: 62,
        benchmarkScore: 70,
        gap: -8,
      },
      {
        id: "career-advancement",
        name: "Career Advancement Paths",
        description: "Clear pathways for progression and promotion within the organization.",
        importance: 9,
        satisfactionScore: 55,
        benchmarkScore: 65,
        gap: -10,
      },
      {
        id: "mentorship",
        name: "Mentorship & Coaching",
        description: "Access to guidance from experienced professionals and leaders.",
        importance: 7,
        satisfactionScore: 60,
        benchmarkScore: 68,
        gap: -8,
      },
      {
        id: "feedback",
        name: "Continuous Feedback",
        description: "Regular, constructive feedback on performance and development.",
        importance: 8,
        satisfactionScore: 58,
        benchmarkScore: 67,
        gap: -9,
      },
    ],
  },
  {
    id: "culture",
    name: "Culture & Work Environment",
    description: "The organizational culture, values, and social environment of the workplace.",
    priority: "High",
    overallScore: 75,
    benchmarkScore: 70,
    attributes: [
      {
        id: "inclusion",
        name: "Diversity & Inclusion",
        description: "Commitment to creating an inclusive workplace for all employees.",
        importance: 9,
        satisfactionScore: 78,
        benchmarkScore: 72,
        gap: 6,
      },
      {
        id: "recognition",
        name: "Recognition & Appreciation",
        description: "Acknowledgment and appreciation of employee contributions.",
        importance: 8,
        satisfactionScore: 72,
        benchmarkScore: 68,
        gap: 4,
      },
      {
        id: "collaboration",
        name: "Collaborative Environment",
        description: "Culture that encourages teamwork and cross-functional collaboration.",
        importance: 7,
        satisfactionScore: 80,
        benchmarkScore: 73,
        gap: 7,
      },
      {
        id: "social-connection",
        name: "Social Connection",
        description: "Opportunities for meaningful social connections with colleagues.",
        importance: 6,
        satisfactionScore: 70,
        benchmarkScore: 65,
        gap: 5,
      },
    ],
  },
  {
    id: "purpose",
    name: "Purpose & Impact",
    description: "The meaning, purpose, and impact of work on the organization and society.",
    priority: "Medium",
    overallScore: 70,
    benchmarkScore: 65,
    attributes: [
      {
        id: "mission-alignment",
        name: "Mission Alignment",
        description: "Connection between individual work and organizational mission.",
        importance: 8,
        satisfactionScore: 75,
        benchmarkScore: 68,
        gap: 7,
      },
      {
        id: "social-impact",
        name: "Social Impact",
        description: "Contribution to society and addressing important social issues.",
        importance: 7,
        satisfactionScore: 68,
        benchmarkScore: 65,
        gap: 3,
      },
      {
        id: "sustainability",
        name: "Environmental Sustainability",
        description: "Commitment to environmental responsibility and sustainable practices.",
        importance: 6,
        satisfactionScore: 72,
        benchmarkScore: 60,
        gap: 12,
      },
      {
        id: "meaningful-work",
        name: "Meaningful Work",
        description: "Work that provides a sense of purpose and accomplishment.",
        importance: 9,
        satisfactionScore: 65,
        benchmarkScore: 67,
        gap: -2,
      },
    ],
  },
]

// EVP Personas
export const evpPersonas: EVPPersona[] = [
  {
    id: "early-career",
    name: "Early Career Professional",
    description:
      "Recent graduates and professionals in the first 5 years of their career, focused on skill development and establishing their professional identity.",
    demographics: ["Age 22-30", "0-5 years experience", "Digital native", "Often single or early family formation"],
    topAttributes: ["learning-opportunities", "career-advancement", "base-pay", "flexibility", "social-connection"],
    painPoints: [
      "Limited professional network",
      "Unclear career path",
      "Student loan debt",
      "Desire for rapid advancement",
      "Need for mentorship",
    ],
    goals: [
      "Develop marketable skills",
      "Gain diverse experiences",
      "Build professional reputation",
      "Increase earning potential",
      "Find work-life integration",
    ],
    quote:
      "I want to work somewhere that invests in my growth and gives me opportunities to make an impact early in my career.",
  },
  {
    id: "mid-career",
    name: "Mid-Career Specialist",
    description:
      "Experienced professionals with specialized expertise, seeking balance between career advancement and personal responsibilities.",
    demographics: [
      "Age 30-45",
      "5-15 years experience",
      "Often with family responsibilities",
      "Established in career field",
    ],
    topAttributes: ["flexibility", "base-pay", "career-advancement", "workload", "health-benefits"],
    painPoints: [
      "Work-life balance challenges",
      "Caregiving responsibilities",
      "Career plateau concerns",
      "Burnout risk",
      "Financial pressures (housing, education, etc.)",
    ],
    goals: [
      "Advance to leadership positions",
      "Maintain work-life balance",
      "Increase financial security",
      "Deepen expertise",
      "Make meaningful contributions",
    ],
    quote:
      "I need flexibility to manage my family responsibilities while still having opportunities to grow my career and make an impact.",
  },
  {
    id: "senior-leader",
    name: "Senior Leader",
    description:
      "Experienced leaders focused on strategic impact, legacy, and developing the next generation of talent.",
    demographics: ["Age 45+", "15+ years experience", "Leadership position", "Extensive professional network"],
    topAttributes: ["mission-alignment", "meaningful-work", "recognition", "variable-pay", "retirement"],
    painPoints: [
      "Maintaining relevance in changing environment",
      "Legacy concerns",
      "Executive stress and pressure",
      "Retirement planning",
      "Balancing strategic and operational demands",
    ],
    goals: [
      "Create lasting organizational impact",
      "Develop future leaders",
      "Secure financial future",
      "Maintain health and wellbeing",
      "Leave a positive legacy",
    ],
    quote:
      "At this stage in my career, I'm focused on making a meaningful impact and developing the next generation of leaders.",
  },
  {
    id: "technical-expert",
    name: "Technical Expert",
    description:
      "Highly specialized technical professionals who value continuous learning, autonomy, and solving complex problems.",
    demographics: ["Various ages", "Deep technical expertise", "Often advanced degrees", "Values technical mastery"],
    topAttributes: ["learning-opportunities", "meaningful-work", "collaboration", "base-pay", "flexibility"],
    painPoints: [
      "Keeping skills current in rapidly changing fields",
      "Desire for technical rather than managerial advancement",
      "Need for autonomy and creative freedom",
      "Recognition for technical contributions",
      "Work with outdated technologies or processes",
    ],
    goals: [
      "Work on cutting-edge projects",
      "Continuous technical learning",
      "Solve complex, meaningful problems",
      "Collaborate with other experts",
      "Receive recognition for expertise",
    ],
    quote:
      "I want to work on challenging problems with the latest technologies alongside other experts who share my passion.",
  },
  {
    id: "remote-worker",
    name: "Remote-First Worker",
    description:
      "Professionals who prioritize location flexibility and digital collaboration, valuing results-based performance over physical presence.",
    demographics: [
      "Various ages",
      "Digital-first mindset",
      "Values autonomy",
      "Often has caregiving or lifestyle priorities",
    ],
    topAttributes: ["flexibility", "workload", "collaboration", "feedback", "learning-opportunities"],
    painPoints: [
      "Isolation and disconnection",
      "Visibility concerns for career advancement",
      "Work-life boundary challenges",
      "Digital collaboration friction",
      "Maintaining engagement remotely",
    ],
    goals: [
      "Location independence",
      "Results-based performance evaluation",
      "Digital-first collaboration",
      "Work-life integration",
      "Career advancement without relocation",
    ],
    quote: "I want to be evaluated on the quality of my work and results, not where or when I do it.",
  },
]

// Sample EVP Analysis
export const sampleEVPAnalysis: EVPAnalysis = {
  organizationName: "Sample Corporation",
  overallScore: 68,
  benchmarkScore: 70,
  categories: evpCategories,
  strengths: [
    "Strong flexible work arrangements with satisfaction 12 points above benchmark",
    "Positive collaborative environment with high employee satisfaction",
    "Above-benchmark performance in health and wellness benefits",
    "Strong commitment to environmental sustainability",
    "Family support programs rated 8 points above industry benchmark",
  ],
  opportunities: [
    "Career advancement paths satisfaction is 10 points below benchmark",
    "Learning opportunities lag industry standards by 8 points",
    "Financial wellbeing programs need improvement (7 points below benchmark)",
    "Mentorship and coaching programs require enhancement",
    "Continuous feedback systems underperforming compared to benchmark",
  ],
  personas: evpPersonas,
  recommendedActions: {
    immediate: [
      "Conduct career path workshops to clarify advancement opportunities",
      "Launch financial wellbeing education program",
      "Implement structured mentorship program",
      "Enhance manager training on delivering effective feedback",
      "Communicate existing EVP strengths more effectively to employees",
    ],
    shortTerm: [
      "Develop personalized learning pathways for key roles",
      "Create career development framework with clear progression criteria",
      "Expand financial planning resources and tools",
      "Implement quarterly career conversations between managers and employees",
      "Launch EVP ambassador program to highlight employee experiences",
    ],
    longTerm: [
      "Redesign career architecture to provide multiple advancement paths",
      "Implement AI-powered personalized learning recommendations",
      "Create comprehensive financial wellness program with personalized support",
      "Build internal talent marketplace to increase visibility of opportunities",
      "Develop EVP measurement dashboard to track progress and impact",
    ],
  },
}

