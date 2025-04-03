import type { HRTrend } from "@/models/hr-trend-model"

export const hrTrends: HRTrend[] = [
  {
    id: "ai-transformation",
    title: "AI-Driven HR Transformation",
    description:
      "Artificial intelligence is reshaping HR functions from recruitment to employee development, requiring new skills and operating models.",
    impact: "High",
    timeframe: "Immediate",
    stats: [
      {
        value: "89%",
        label: "of HR leaders plan to increase AI investments in 2025",
        source: "Gartner HR Leadership Survey",
      },
      {
        value: "42%",
        label: "reduction in time-to-hire achieved by organizations using AI in recruitment",
        source: "Gartner Talent Acquisition Research",
      },
      {
        value: "3.5x",
        label: "ROI reported by organizations with mature AI implementations in HR",
        source: "Gartner HR Technology Survey",
      },
    ],
    relatedAgents: ["talent-acquisition", "workforce-planning", "learning-development"],
    actions: [
      {
        title: "Conduct AI readiness assessment",
        description:
          "Evaluate current HR processes, data quality, and team capabilities to identify AI implementation opportunities.",
      },
      {
        title: "Develop AI governance framework",
        description:
          "Create guidelines for responsible AI use that address ethics, bias, transparency, and data privacy.",
      },
      {
        title: "Upskill HR team on AI capabilities",
        description:
          "Train HR professionals to effectively collaborate with AI systems and interpret AI-generated insights.",
      },
    ],
    imageUrl: "/Square 1@4x.png?height=400&width=600",
  },
  {
    id: "skills-first",
    title: "Skills-First Talent Approach",
    description:
      "Organizations are shifting from role-based to skills-based talent strategies to increase workforce agility and address critical skill gaps.",
    impact: "High",
    timeframe: "Short-term",
    stats: [
      {
        value: "76%",
        label: "of HR leaders cite skills shortages as their top talent challenge",
        source: "Gartner CHRO Survey",
      },
      {
        value: "54%",
        label: "increase in internal mobility at organizations with skills-based talent practices",
        source: "Gartner Workforce Planning Research",
      },
      {
        value: "2x",
        label: "faster time to productivity for new hires selected through skills-based assessment",
        source: "Gartner Talent Analytics Study",
      },
    ],
    relatedAgents: ["talent-acquisition", "workforce-planning", "learning-development"],
    actions: [
      {
        title: "Implement dynamic skills taxonomy",
        description:
          "Create a comprehensive, regularly updated framework for classifying and tracking skills across the organization.",
      },
      {
        title: "Redesign talent processes around skills",
        description:
          "Shift recruitment, performance management, and career development to prioritize skills over traditional qualifications.",
      },
      {
        title: "Launch internal talent marketplace",
        description:
          "Develop a platform that matches employees to projects and opportunities based on skills and aspirations.",
      },
    ],
    imageUrl: "/Square 2@4x.png?height=400&width=600",
  },
  {
    id: "employee-wellbeing",
    title: "Holistic Employee Wellbeing",
    description:
      "Organizations are expanding wellbeing strategies beyond physical health to address mental, financial, and social dimensions of employee wellness.",
    impact: "High",
    timeframe: "Immediate",
    stats: [
      {
        value: "68%",
        label: "of employees report experiencing burnout in the past year",
        source: "Gartner Employee Experience Survey",
      },
      {
        value: "47%",
        label: "reduction in turnover at organizations with comprehensive wellbeing programs",
        source: "Gartner HR Benchmarking Study",
      },
      {
        value: "35%",
        label: "increase in productivity reported by employees who feel their wellbeing is supported",
        source: "Gartner Performance Management Research",
      },
    ],
    relatedAgents: ["employee-experience", "compensation-benefits"],
    actions: [
      {
        title: "Implement wellbeing assessment",
        description:
          "Conduct regular assessments to understand employee wellbeing needs across physical, mental, financial, and social dimensions.",
      },
      {
        title: "Personalize wellbeing offerings",
        description: "Develop targeted wellbeing programs based on employee segments and individual needs.",
      },
      {
        title: "Train managers on wellbeing support",
        description:
          "Equip managers with skills to recognize wellbeing issues and provide appropriate support and resources.",
      },
    ],
    imageUrl: "/Square 3@4x.png?height=400&width=600",
  },
  {
    id: "hybrid-work",
    title: "Hybrid Work Optimization",
    description:
      "Organizations are refining hybrid work models to balance flexibility with collaboration, culture, and performance needs.",
    impact: "High",
    timeframe: "Short-term",
    stats: [
      {
        value: "82%",
        label: "of employees prefer hybrid work arrangements",
        source: "Gartner Future of Work Survey",
      },
      {
        value: "39%",
        label: "of organizations report challenges with maintaining culture in hybrid environments",
        source: "Gartner HR Leadership Poll",
      },
      {
        value: "27%",
        label: "higher retention rates at organizations with well-designed hybrid work policies",
        source: "Gartner Talent Analytics Research",
      },
    ],
    relatedAgents: ["employee-experience", "workforce-planning"],
    actions: [
      {
        title: "Develop intentional collaboration framework",
        description: "Create guidelines for when, why, and how teams should collaborate in-person versus virtually.",
      },
      {
        title: "Redesign physical workspaces",
        description:
          "Transform offices to support collaboration, innovation, and social connection rather than individual work.",
      },
      {
        title: "Implement hybrid-specific management practices",
        description:
          "Train managers on leading hybrid teams with a focus on outcomes, inclusion, and equitable experiences.",
      },
    ],
    imageUrl: "/Square 4@4x.png?height=400&width=600",
  },
  {
    id: "human-leadership",
    title: "Human-Centered Leadership",
    description:
      "Organizations are prioritizing leadership capabilities that emphasize empathy, inclusion, and purpose to drive engagement and performance.",
    impact: "Medium",
    timeframe: "Medium-term",
    stats: [
      {
        value: "91%",
        label: "of employees say empathetic leadership is important for retention",
        source: "Gartner Employee Experience Survey",
      },
      {
        value: "3.2x",
        label: "higher employee performance under human-centered leaders",
        source: "Gartner Leadership Effectiveness Study",
      },
      {
        value: "26%",
        label: "of organizations report their leaders are prepared for future leadership challenges",
        source: "Gartner Leadership Development Benchmark",
      },
    ],
    relatedAgents: ["employee-experience", "learning-development"],
    actions: [
      {
        title: "Redefine leadership competency model",
        description:
          "Update leadership frameworks to emphasize human-centered capabilities like empathy, inclusion, and purpose.",
      },
      {
        title: "Implement leadership development programs",
        description: "Create targeted development experiences that build human-centered leadership capabilities.",
      },
      {
        title: "Align performance management with new leadership model",
        description: "Ensure leadership evaluation and rewards reinforce human-centered leadership behaviors.",
      },
    ],
    imageUrl: "/Square 1@4x.png?height=400&width=600",
  },
]

