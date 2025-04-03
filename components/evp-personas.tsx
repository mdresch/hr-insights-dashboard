import type { EVPPersona, EVPCategory } from "@/models/evp-model"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Target, Heart, AlertCircle, CheckCircle } from "lucide-react"

interface EVPPersonasProps {
  personas: EVPPersona[]
  categories: EVPCategory[]
}

export function EVPPersonas({ personas, categories }: EVPPersonasProps) {
  // Helper function to get attribute details by ID
  const getAttributeDetails = (attributeId: string) => {
    for (const category of categories) {
      const attribute = category.attributes.find((attr) => attr.id === attributeId)
      if (attribute) {
        return {
          ...attribute,
          categoryName: category.name,
          categoryId: category.id,
        }
      }
    }
    return null
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">Employee Personas & EVP Preferences</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Understanding the unique needs and preferences of different employee segments to create targeted EVP
          strategies.
        </p>
      </div>

      <Tabs defaultValue={personas[0].id} className="w-full">
        <TabsList className="bg-[#002050] border border-[#0a3166] mb-6 flex flex-wrap h-auto">
          {personas.map((persona) => (
            <TabsTrigger
              key={persona.id}
              value={persona.id}
              className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white"
            >
              {persona.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {personas.map((persona) => (
          <TabsContent key={persona.id} value={persona.id} className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <Card className="bg-[#001a40] border-[#0a3166] h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-[#0047CC] p-2 rounded-full">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-xl text-white">{persona.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6">{persona.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-[#36b6b0] mb-2">Demographics</h4>
                      <div className="flex flex-wrap gap-2">
                        {persona.demographics.map((demo, index) => (
                          <div key={index} className="bg-[#002050] px-3 py-1 rounded-full text-xs text-slate-300">
                            {demo}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[#002050] p-4 rounded-lg mb-6">
                      <div className="text-sm font-medium text-[#36b6b0] mb-2">In Their Words</div>
                      <blockquote className="text-gray-300 italic border-l-2 border-[#36b6b0] pl-3">
                        "{persona.quote}"
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                  <Card className="bg-[#001a40] border-[#0a3166]">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="bg-[#002050] p-2 rounded-lg">
                          <Heart className="h-5 w-5 text-[#36b6b0]" />
                        </div>
                        <CardTitle className="text-lg text-white">Top EVP Priorities</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {persona.topAttributes.map((attrId, index) => {
                          const attribute = getAttributeDetails(attrId)
                          if (!attribute) return null

                          return (
                            <div key={attrId} className="bg-[#002050] p-3 rounded-lg">
                              <div className="flex items-start gap-2">
                                <div className="bg-[#0047CC] text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                  {index + 1}
                                </div>
                                <div>
                                  <div className="font-medium text-white">{attribute.name}</div>
                                  <div className="text-xs text-gray-400">{attribute.categoryName}</div>
                                  <div className="text-sm text-gray-300 mt-1">{attribute.description}</div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#001a40] border-[#0a3166]">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="bg-[#002050] p-2 rounded-lg">
                          <Target className="h-5 w-5 text-[#36b6b0]" />
                        </div>
                        <CardTitle className="text-lg text-white">Goals & Pain Points</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-[#36b6b0] mb-2">Key Goals</h4>
                        <div className="space-y-2">
                          {persona.goals.map((goal, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-300">{goal}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-[#36b6b0] mb-2">Pain Points</h4>
                        <div className="space-y-2">
                          {persona.painPoints.map((pain, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-300">{pain}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

