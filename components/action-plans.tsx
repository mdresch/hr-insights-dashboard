import type { ActionPlan } from "@/models/employee-experience-model"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock, AlertTriangle, User, CalendarDays, Target, TrendingUp } from "lucide-react"

interface ActionPlansProps {
  plans: ActionPlan[]
}

export function ActionPlans({ plans }: ActionPlansProps) {
  const getStatusColor = (status: string) => {
    switch (status) {\
      case '  {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500'
      case 'In Progress':
        return 'bg-amber-500'
      case 'Not Started':
        return 'bg-gray-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getActionStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500'
      case 'In Progress':
        return 'bg-amber-500'
      case 'Not Started':
        return 'bg-gray-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getDimensionColor = (dimension: string) => {
    switch (dimension) {
      case 'Work Content':
        return 'bg-blue-500'
      case 'Work Environment':
        return 'bg-green-500'
      case 'Work Relationships':
        return 'bg-purple-500'
      case 'Work Tools':
        return 'bg-amber-500'
      case 'Work-Life Balance':
        return 'bg-pink-500'
      case 'Growth & Development':
        return 'bg-cyan-500'
      case 'Rewards & Recognition':
        return 'bg-red-500'
      case 'Organizational Alignment':
        return 'bg-indigo-500'
      default:
        return 'bg-gray-500'
    }
  }

  const calculateOverallProgress = (plan: ActionPlan) => {
    if (plan.actions.length === 0) return 0;
    const totalProgress = plan.actions.reduce((sum, action) => sum + action.progress, 0);
    return Math.round(totalProgress / plan.actions.length);
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">Action Plans</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Track and manage initiatives designed to improve the employee experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="bg-[#002050] border-[#0a3166]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-300">Total Plans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#36b6b0]">{plans.length}</div>
            <div className="mt-2 space-y-1">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-xs text-gray-300">Completed</span>
                </div>
                <span className="text-xs text-gray-300">
                  {plans.filter(plan => plan.status === 'Completed').length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                  <span className="text-xs text-gray-300">In Progress</span>
                </div>
                <span className="text-xs text-gray-300">
                  {plans.filter(plan => plan.status === 'In Progress').length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-gray-500"></div>
                  <span className="text-xs text-gray-300">Not Started</span>
                </div>
                <span className="text-xs text-gray-300">
                  {plans.filter(plan => plan.status === 'Not Started').length}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#002050] border-[#0a3166]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-300">Overall Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#36b6b0]">
              {Math.round(plans.reduce((sum, plan) => sum + calculateOverallProgress(plan), 0) / plans.length)}%
            </div>
            <Progress 
              value={plans.reduce((sum, plan) => sum + calculateOverallProgress(plan), 0) / plans.length} 
              className="h-2 mt-2"
              indicatorClassName="bg-[#36b6b0]"
            />
          </CardContent>
        </Card>

        <Card className="bg-[#002050] border-[#0a3166]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-300">Focus Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {Array.from(new Set(plans.map(plan => plan.targetDimension))).map((dimension) => (
                <div key={dimension} className="flex items-center gap-2">
                  <Badge className={getDimensionColor(dimension)}>
                    {dimension}
                  </Badge>
                  <span className="text-xs text-gray-300">
                    {plans.filter(plan => plan.targetDimension === dimension).length} plans
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#002050] border-[#0a3166]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-300">Expected Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#36b6b0]">
              {Math.round(plans.reduce((sum, plan) => sum + plan.expectedImpact, 0) / plans.length)}%
            </div>
            <Progress 
              value={plans.reduce((sum, plan) => sum + plan.expectedImpact, 0) / plans.length} 
              className="h-2 mt-2"
              indicatorClassName={
                plans.reduce((sum, plan) => sum + plan.expectedImpact, 0) / plans.length >= 75 ? 'bg-green-500' :
                plans.reduce((sum, plan) => sum + plan.expectedImpact, 0) / plans.length >= 60 ? 'bg-amber-500' :
                'bg-red-500'
              }
            />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue={plans[0].id} className="w-full">
        <TabsList className="bg-[#002050] border border-[#0a3166] mb-6 flex flex-wrap h-auto">
          {plans.map((plan) => (
            <TabsTrigger
              key={plan.id}
              value={plan.id}
              className="data-[state=active]:bg-[#0047CC] data-[state=active]:text-white"
            >
              {plan.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {plans.map((plan) => (
          <TabsContent key={plan.id} value={plan.id} className="mt-0">
            <Card className="bg-[#001a40] border-[#0a3166]">
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl text-white">{plan.title}</CardTitle>
                    <p className="text-sm text-gray-300 mt-1">{plan.description}</p>
                  </div>
                  <Badge className={getStatusColor(plan.status)}>
                    {plan.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-[#002050] p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-[#36b6b0] mb-3 flex items-center">
                      <Target className="h-4 w-4 mr-2" />
                      Targeting
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Dimension</div>
                        <Badge className={getDimensionColor(plan.targetDimension)}>
                          {plan.targetDimension}
                        </Badge>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Experience Drivers</div>
                        <div className="flex flex-wrap gap-1">
                          {plan.targetDrivers.map((driver) => (
                            <div key={driver} className="bg-[#001a40] px-2 py-1 rounded-full text-xs">
                              {driver}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Employee Segments</div>
                        <div className="flex flex-wrap gap-1">
                          {plan.targetSegments.map((segment) => (
                            <div key={segment} className="bg-[#001a40] px-2 py-1 rounded-full text-xs">
                              {segment}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#002050] p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-[#36b6b0] mb-3 flex items-center">
                      <CalendarDays className="h-4 w-4 mr-2" />
                      Timeline
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Start Date</div>
                        <div className="text-sm">{new Date(plan.startDate).toLocaleDateString()}</div>
                      </div>
                      {plan.endDate && (
                        <div>
                          <div className="text-xs text-gray-400 mb-1">End Date</div>
                          <div className="text-sm">{new Date(plan.endDate).toLocaleDateString()}</div>
                        </div>
                      )}
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Owner</div>
                        <div className="text-sm flex items-center">
                          <User className="h-4 w-4 text-[#36b6b0] mr-1" />
                          {plan.owner}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#002050] p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-[#36b6b0] mb-3 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Impact
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Expected Impact</div>
                        <div className="flex items-center gap-2">
                          <Progress 
                            value={plan.expectedImpact} 
                            className="h-2 flex-1"
                            indicatorClassName={
                              plan.expectedImpact >= 75 ? 'bg-green-500' :
                              plan.expectedImpact >= 60 ? 'bg-amber-500' :
                              'bg-red-500'
                            }
                          />
                          <span className="text-sm">{plan.expectedImpact}%</span>
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-gray-400 mb-1">Overall Progress</div>
                        <div className="flex items-center gap-2">
                          <Progress 
                            value={calculateOverallProgress(plan)} 
                            className="h-2 flex-1"
                            indicatorClassName="bg-[#36b6b0]"
                          />
                          <span className="text-sm">{calculateOverallProgress(plan)}%</span>
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-gray-400 mb-1">Actions</div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
                            <span className="text-xs">{plan.actions.filter(a => a.status === 'Completed').length}</span>
                          </div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-amber-500 mr-1"></div>
                            <span className="text-xs">{plan.actions.filter(a => a.status === 'In Progress').length}</span>
                          </div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-gray-500 mr-1"></div>
                            <span className="text-xs">{plan.actions.filter(a => a.status === 'Not Started').length}</span>
                          </div>
                          <div className="text-xs text-gray-400">/ {plan.actions.length}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-medium text-white mb-4">Action Items</h3>
                <div className="space-y-4">
                  {plan.actions.map((action) => (
                    <div key={action.id} className="bg-[#002050] p-4 rounded-lg">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-full ${
                            action.status === 'Completed' ? 'bg-green-500/20' :
                            action.status === 'In Progress' ? 'bg-amber-500/20' :
                            'bg-gray-500/20'
                          }`}>
                            {action.status === 'Completed' ? (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : action.status === 'In Progress' ? (
                              <Clock className="h-5 w-5 text-amber-500" />
                            ) : (
                              <AlertTriangle className="h-5 w-5 text-gray-500" />
                            )}
                          </div>
                          <div>
                            <div className="font-medium text-white">{action.description}</div>
                            <div className="text-xs text-gray-400 mt-1">Owner: {action.owner}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getActionStatusColor(action.status)}>
                            {action.status}
                          </Badge>
                          <div className="text-xs text-gray-300">
                            Due: {new Date(action.dueDate).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-gray-400">Progress:</div>
                        <Progress 
                          value={action.progress} 
                          className="h-2 flex-1"
                          indicatorClassName={
                            action.status === 'Completed' ? 'bg-green-500' :
                            action.status === 'In Progress' ? 'bg-amber-500' :
                            'bg-gray-500'
                          }
                        />
                        <div className="text-xs">{action.progress}%</div>
                      </div>
                      {action.notes && (
                        <div className="mt-2 text-xs text-gray-300">
                          <span className="text-[#36b6b0]">Notes:</span> {action.notes}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

