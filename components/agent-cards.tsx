import { Users, TrendingUp, BarChart4, Briefcase, GraduationCap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function AgentCards() {
  const agents = [
    {
      title: "Talent Acquisition Agent",
      description: "Analyzes job market trends, candidate preferences, and hiring effectiveness.",
      icon: Users,
      color: "from-blue-600 to-blue-400",
    },
    {
      title: "Workforce Analytics Agent",
      description: "Monitors productivity metrics, engagement levels, and workforce planning needs.",
      icon: BarChart4,
      color: "from-emerald-600 to-emerald-400",
    },
    {
      title: "Compensation Strategy Agent",
      description: "Tracks market rates, internal equity, and total rewards effectiveness.",
      icon: TrendingUp,
      color: "from-purple-600 to-purple-400",
    },
    {
      title: "Employee Experience Agent",
      description: "Measures engagement, culture health, and workplace satisfaction.",
      icon: Briefcase,
      color: "from-amber-600 to-amber-400",
    },
    {
      title: "Learning & Development Agent",
      description: "Identifies skill gaps, learning trends, and development opportunities.",
      icon: GraduationCap,
      color: "from-rose-600 to-rose-400",
    },
  ]

  return (
    <section className="py-16 bg-[#002050]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">AI Agents by HR Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <Card key={index} className="bg-[#001a40] border-[#0a3166] text-white hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${agent.color} flex items-center justify-center mb-4`}
                >
                  <agent.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">{agent.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{agent.description}</CardDescription>
                <div className="mt-4 flex justify-between items-center">
                  <div className="text-sm text-[#36b6b0]">
                    <span className="font-medium">Latest update:</span> Today
                  </div>
                  <button className="text-sm text-[#36b6b0] hover:underline">Access Agent →</button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

