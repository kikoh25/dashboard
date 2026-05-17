"use client"

import { Calendar, Users, Target, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Project {
  id: string
  name: string
  description: string
  progress: number
  startDate: string
  endDate: string
  team: string[]
  status: "on_track" | "at_risk" | "delayed" | "completed"
  milestones: { name: string; completed: boolean }[]
}

const statusConfig = {
  on_track: { label: "No Prazo", color: "text-chart-2", bgColor: "bg-chart-2/10", dotColor: "bg-chart-2" },
  at_risk: { label: "Em Risco", color: "text-chart-4", bgColor: "bg-chart-4/10", dotColor: "bg-chart-4" },
  delayed: { label: "Atrasado", color: "text-destructive", bgColor: "bg-destructive/10", dotColor: "bg-destructive" },
  completed: { label: "Concluído", color: "text-chart-2", bgColor: "bg-chart-2/10", dotColor: "bg-chart-2" },
}

const projects: Project[] = [
  {
    id: "1",
    name: "Modernização Data Center",
    description: "Atualização completa da infraestrutura do data center principal com virtualização",
    progress: 75,
    startDate: "Jan 2026",
    endDate: "Jun 2026",
    team: ["CS", "PS", "LF"],
    status: "on_track",
    milestones: [
      { name: "Planejamento", completed: true },
      { name: "Aquisições", completed: true },
      { name: "Instalação", completed: true },
      { name: "Migração", completed: false },
      { name: "Testes", completed: false },
    ],
  },
  {
    id: "2",
    name: "Zero Trust Security",
    description: "Implementação do modelo de segurança Zero Trust em toda a organização",
    progress: 45,
    startDate: "Mar 2026",
    endDate: "Set 2026",
    team: ["AC", "MO"],
    status: "on_track",
    milestones: [
      { name: "Assessment", completed: true },
      { name: "Políticas", completed: true },
      { name: "IAM", completed: false },
      { name: "Microsegmentação", completed: false },
      { name: "Monitoramento", completed: false },
    ],
  },
  {
    id: "3",
    name: "Migração Microsoft 365",
    description: "Migração de e-mails e documentos para Microsoft 365 com OneDrive",
    progress: 90,
    startDate: "Nov 2025",
    endDate: "Mai 2026",
    team: ["JM", "CS", "AC"],
    status: "at_risk",
    milestones: [
      { name: "Licenciamento", completed: true },
      { name: "Piloto", completed: true },
      { name: "Migração", completed: true },
      { name: "Treinamento", completed: true },
      { name: "Suporte", completed: false },
    ],
  },
  {
    id: "4",
    name: "Automação ITSM",
    description: "Automatização de processos de service desk com IA e chatbots",
    progress: 30,
    startDate: "Abr 2026",
    endDate: "Dez 2026",
    team: ["PS", "LF", "MO"],
    status: "delayed",
    milestones: [
      { name: "Mapeamento", completed: true },
      { name: "Desenvolvimento", completed: false },
      { name: "Integração", completed: false },
      { name: "Deploy", completed: false },
      { name: "Otimização", completed: false },
    ],
  },
]

export function StrategicProjects() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Projetos Estratégicos</h2>
          <p className="text-sm text-muted-foreground">Acompanhamento de projetos em andamento</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            {Object.entries(statusConfig).slice(0, 3).map(([key, config]) => (
              <div key={key} className="flex items-center gap-1.5">
                <div className={cn("h-2 w-2 rounded-full", config.dotColor)} />
                <span className="text-xs text-muted-foreground">{config.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project) => {
          const config = statusConfig[project.status]
          const completedMilestones = project.milestones.filter(m => m.completed).length
          
          return (
            <Card 
              key={project.id} 
              className="bg-card border-border hover:border-chart-1/30 transition-all duration-300 group"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-base font-semibold text-foreground group-hover:text-chart-1 transition-colors">
                        {project.name}
                      </CardTitle>
                      <span className={cn(
                        "text-xs font-medium px-2 py-0.5 rounded-full",
                        config.bgColor,
                        config.color
                      )}>
                        {config.label}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-secondary border-4 border-background shrink-0 ml-4">
                    <span className="text-lg font-bold text-foreground">{project.progress}%</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full rounded-full transition-all duration-700",
                        project.status === "delayed" ? "bg-destructive" : 
                        project.status === "at_risk" ? "bg-chart-4" : "bg-chart-1"
                      )}
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Milestones */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Marcos do Projeto</span>
                    <span className="font-medium text-foreground">{completedMilestones}/{project.milestones.length}</span>
                  </div>
                  <div className="flex gap-1.5">
                    {project.milestones.map((milestone, index) => (
                      <div key={index} className="flex-1 group/milestone relative">
                        <div 
                          className={cn(
                            "h-1.5 rounded-full transition-all",
                            milestone.completed ? "bg-chart-2" : "bg-secondary"
                          )}
                        />
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover/milestone:opacity-100 transition-opacity bg-popover border border-border rounded px-2 py-1 text-xs whitespace-nowrap z-10">
                          {milestone.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{project.startDate} - {project.endDate}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5 text-muted-foreground mr-1" />
                    <div className="flex -space-x-2">
                      {project.team.map((member, index) => (
                        <div 
                          key={index}
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-chart-1 text-[10px] font-medium text-white border-2 border-card"
                        >
                          {member}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
