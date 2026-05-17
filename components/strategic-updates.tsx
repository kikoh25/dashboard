"use client"

import { CheckCircle2, Clock, PlayCircle, AlertCircle, User, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type UpdateStatus = "completed" | "in_progress" | "pending" | "blocked"

interface Update {
  id: string
  title: string
  description: string
  status: UpdateStatus
  progress?: number
  responsible: string
  date: string
  category: string
}

const statusConfig: Record<UpdateStatus, { label: string; icon: typeof CheckCircle2; color: string; bgColor: string }> = {
  completed: {
    label: "Concluído",
    icon: CheckCircle2,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  in_progress: {
    label: "Em Progresso",
    icon: PlayCircle,
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
  },
  pending: {
    label: "A Iniciar",
    icon: Clock,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
  blocked: {
    label: "Bloqueado",
    icon: AlertCircle,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
}

const updates: Update[] = [
  {
    id: "1",
    title: "Migração para Cloud Azure",
    description: "Migração dos servidores de arquivos para ambiente cloud Azure com replicação geográfica",
    status: "in_progress",
    progress: 68,
    responsible: "Carlos Silva",
    date: "17 Mai 2026",
    category: "Infraestrutura",
  },
  {
    id: "2",
    title: "Implementação MFA",
    description: "Ativação de autenticação multifator para todos os colaboradores via Microsoft Authenticator",
    status: "completed",
    responsible: "Ana Costa",
    date: "15 Mai 2026",
    category: "Segurança",
  },
  {
    id: "3",
    title: "Atualização Firewall",
    description: "Upgrade do firmware do firewall principal e configuração de novas regras de segurança",
    status: "in_progress",
    progress: 45,
    responsible: "Pedro Santos",
    date: "16 Mai 2026",
    category: "Segurança",
  },
  {
    id: "4",
    title: "Deploy ERP v4.2",
    description: "Atualização do sistema ERP para versão 4.2 com novos módulos de RH",
    status: "pending",
    responsible: "Maria Oliveira",
    date: "20 Mai 2026",
    category: "Software",
  },
  {
    id: "5",
    title: "Backup Datacenter",
    description: "Aguardando aprovação de orçamento para expansão de storage de backup",
    status: "blocked",
    responsible: "Lucas Ferreira",
    date: "12 Mai 2026",
    category: "Infraestrutura",
  },
  {
    id: "6",
    title: "Treinamento Teams",
    description: "Capacitação de colaboradores no uso avançado do Microsoft Teams",
    status: "completed",
    responsible: "Julia Mendes",
    date: "10 Mai 2026",
    category: "Treinamento",
  },
]

export function StrategicUpdates() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Atualizações Estratégicas</h2>
          <p className="text-sm text-muted-foreground">Timeline de atividades e projetos de TI</p>
        </div>
        <div className="flex items-center gap-3">
          {Object.entries(statusConfig).map(([key, config]) => (
            <div key={key} className="hidden md:flex items-center gap-1.5">
              <div className={cn("h-2 w-2 rounded-full", config.bgColor)}>
                <div className={cn("h-2 w-2 rounded-full", config.color.replace("text-", "bg-"))} />
              </div>
              <span className="text-xs text-muted-foreground">{config.label}</span>
            </div>
          ))}
        </div>
      </div>

      <Card className="bg-card border-border">
        <CardContent className="p-0">
          <div className="divide-y divide-border">
            {updates.map((update, index) => {
              const config = statusConfig[update.status]
              const StatusIcon = config.icon
              
              return (
                <div 
                  key={update.id} 
                  className="p-5 hover:bg-secondary/30 transition-colors duration-200 group"
                >
                  <div className="flex gap-4">
                    {/* Timeline */}
                    <div className="flex flex-col items-center">
                      <div className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-200",
                        config.bgColor,
                        update.status === "completed" 
                          ? "border-chart-2" 
                          : update.status === "in_progress"
                            ? "border-chart-1"
                            : update.status === "blocked"
                              ? "border-destructive"
                              : "border-chart-4"
                      )}>
                        <StatusIcon className={cn("h-5 w-5", config.color)} />
                      </div>
                      {index < updates.length - 1 && (
                        <div className="w-0.5 h-full min-h-[40px] bg-border mt-2" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-sm font-semibold text-foreground group-hover:text-chart-1 transition-colors">
                              {update.title}
                            </h3>
                            <span className={cn(
                              "text-xs font-medium px-2 py-0.5 rounded-full",
                              config.bgColor,
                              config.color
                            )}>
                              {config.label}
                            </span>
                            <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                              {update.category}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2">
                            {update.description}
                          </p>
                          
                          {update.progress !== undefined && (
                            <div className="mt-3 max-w-xs">
                              <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                                <span>Progresso</span>
                                <span className="font-medium text-foreground">{update.progress}%</span>
                              </div>
                              <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                                <div 
                                  className="h-full rounded-full bg-chart-1 transition-all duration-500"
                                  style={{ width: `${update.progress}%` }}
                                />
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="hidden sm:flex flex-col items-end gap-2 shrink-0">
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <User className="h-3.5 w-3.5" />
                            <span>{update.responsible}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{update.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
