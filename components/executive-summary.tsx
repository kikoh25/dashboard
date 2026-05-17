"use client"

import { 
  Ticket, 
  AlertTriangle, 
  Clock, 
  CheckCircle2,
  TrendingUp,
  TrendingDown
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const stats = [
  {
    title: "Total de Chamados",
    value: "1,284",
    change: "+12%",
    trend: "up",
    description: "vs. mês anterior",
    icon: Ticket,
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
  },
  {
    title: "Chamados Abertos",
    value: "47",
    change: "-8%",
    trend: "down",
    description: "vs. semana anterior",
    icon: Clock,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
  {
    title: "SLA Cumprido",
    value: "94.2%",
    change: "+2.1%",
    trend: "up",
    description: "meta: 95%",
    icon: CheckCircle2,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    title: "Chamados Críticos",
    value: "3",
    change: "-2",
    trend: "down",
    description: "requer atenção",
    icon: AlertTriangle,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    title: "Tempo Médio Resolução",
    value: "2.4h",
    change: "-15min",
    trend: "down",
    description: "últimas 24h",
    icon: Clock,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
]

export function ExecutiveSummary() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Resumo Executivo</h2>
          <p className="text-sm text-muted-foreground">Visão geral das métricas de TI</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="h-2 w-2 rounded-full bg-chart-2 animate-pulse" />
          Atualizado em tempo real
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((stat) => (
          <Card 
            key={stat.title} 
            className="bg-card border-border hover:border-chart-1/30 transition-all duration-300 hover:shadow-lg hover:shadow-chart-1/5 group"
          >
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div className={cn("p-2.5 rounded-lg", stat.bgColor)}>
                  <stat.icon className={cn("h-5 w-5", stat.color)} />
                </div>
                <div className={cn(
                  "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
                  stat.trend === "up" ? "text-chart-2 bg-chart-2/10" : "text-chart-2 bg-chart-2/10"
                )}>
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {stat.change}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold text-foreground tracking-tight">{stat.value}</p>
                <p className="text-sm font-medium text-foreground mt-1">{stat.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
