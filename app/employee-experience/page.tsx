"use client"
import { employeeExperienceDashboard } from "@/data/employee-experience-data"
import { EmployeeExperienceOverview } from "@/components/employee-experience-overview"
import { EmployeeSegmentsAnalysis } from "@/components/employee-segments-analysis"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EmployeeExperiencePage() {
  return (
    <div className="min-h-screen bg-[#002050] text-white">
      <header className="border-b border-[#0a3166]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Employee Experience</h1>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <EmployeeExperienceOverview dashboard={employeeExperienceDashboard} />
        </section>
        
        <section className="mb-12 py-8 border-t border-[#0a3166]">
          <Tabs defaultValue="segments" className="w-full">
            <TabsList className="bg-[#002050] border border-[#0a3166] mb-6">
              <TabsTrigger 
                value="segments" 
                className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white"
              >
                Employee Segments
              </TabsTrigger>
              <TabsTrigger 
                value="moments" 
                className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white"
              >
                Employee Moments
              </TabsTrigger>
              <TabsTrigger 
                value="action-plans" 
                className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white"
              >
                Action Plans
              </TabsTrigger>
              <TabsTrigger 
                value="ai-integration" 
                className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white"
              >
                AI Integration
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="segments" className="mt-0">
              <EmployeeSegmentsAnalysis segments={employeeExperienceDashboard.segmentInsights} />
           </TabsContent>
          </Tabs>
      </section>
    </main>
</div>
  )
}