"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

const weeklyData = [
  { name: "Seg", abertos: 24, resolvidos: 28 },
  { name: "Ter", abertos: 32, resolvidos: 35 },
  { name: "Qua", abertos: 18, resolvidos: 22 },
  { name: "Qui", abertos: 29, resolvidos: 31 },
  { name: "Sex", abertos: 35, resolvidos: 38 },
  { name: "Sáb", abertos: 8, resolvidos: 12 },
  { name: "Dom", abertos: 5, resolvidos: 7 },
]

const priorityData = [
  { name: "Crítico", value: 3, color: "oklch(0.55 0.2 25)" },
  { name: "Alto", value: 12, color: "oklch(0.7 0.2 50)" },
  { name: "Médio", value: 27, color: "oklch(0.7 0.18 200)" },
  { name: "Baixo", value: 5, color: "oklch(0.65 0.22 150)" },
]

const categoryData = [
  { name: "Hardware", value: 35 },
  { name: "Software", value: 42 },
  { name: "Rede", value: 18 },
  { name: "Segurança", value: 12 },
  { name: "Outros", value: 8 },
]

const slaData = [
  { name: "Jan", cumprido: 92, meta: 95 },
  { name: "Fev", cumprido: 94, meta: 95 },
  { name: "Mar", cumprido: 91, meta: 95 },
  { name: "Abr", cumprido: 96, meta: 95 },
  { name: "Mai", cumprido: 94, meta: 95 },
]

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ color: string; name: string; value: number }>; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-popover border border-border rounded-lg shadow-xl p-3">
        <p className="text-sm font-medium text-foreground mb-2">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div 
              className="h-2 w-2 rounded-full" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-muted-foreground">{entry.name}:</span>
            <span className="font-semibold text-foreground">{entry.value}</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export function Charts() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-foreground">Análise de Chamados</h2>
        <p className="text-sm text-muted-foreground">Métricas detalhadas de performance</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Weekly Evolution */}
        <Card className="bg-card border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold text-foreground">Evolução Semanal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyData}>
                  <defs>
                    <linearGradient id="colorAbertos" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="oklch(0.7 0.18 200)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="oklch(0.7 0.18 200)" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorResolvidos" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="oklch(0.65 0.22 150)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="oklch(0.65 0.22 150)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.22 0.005 260)" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: 'oklch(0.65 0 0)', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: 'oklch(0.65 0 0)', fontSize: 12 }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area 
                    type="monotone" 
                    dataKey="abertos" 
                    name="Abertos"
                    stroke="oklch(0.7 0.18 200)" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorAbertos)" 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="resolvidos" 
                    name="Resolvidos"
                    stroke="oklch(0.65 0.22 150)" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorResolvidos)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "oklch(0.7 0.18 200)" }} />
                <span className="text-sm text-muted-foreground">Abertos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "oklch(0.65 0.22 150)" }} />
                <span className="text-sm text-muted-foreground">Resolvidos</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Priority Distribution */}
        <Card className="bg-card border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold text-foreground">Por Prioridade</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={priorityData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {priorityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {priorityData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div 
                    className="h-3 w-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                  <span className="text-sm font-semibold text-foreground ml-auto">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Category Distribution */}
        <Card className="bg-card border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold text-foreground">Por Categoria</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.22 0.005 260)" horizontal={false} />
                  <XAxis 
                    type="number"
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: 'oklch(0.65 0 0)', fontSize: 12 }}
                  />
                  <YAxis 
                    type="category"
                    dataKey="name"
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: 'oklch(0.65 0 0)', fontSize: 12 }}
                    width={80}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="value" 
                    name="Chamados"
                    fill="oklch(0.7 0.18 200)" 
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* SLA Compliance */}
        <Card className="bg-card border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold text-foreground">Cumprimento de SLA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={slaData}>
                  <defs>
                    <linearGradient id="colorSLA" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="oklch(0.65 0.22 150)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="oklch(0.65 0.22 150)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.22 0.005 260)" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: 'oklch(0.65 0 0)', fontSize: 12 }}
                  />
                  <YAxis 
                    domain={[85, 100]}
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: 'oklch(0.65 0 0)', fontSize: 12 }}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip 
                    content={<CustomTooltip />}
                    formatter={(value) => [`${value}%`, '']}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="cumprido" 
                    name="Cumprido"
                    stroke="oklch(0.65 0.22 150)" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorSLA)" 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="meta" 
                    name="Meta"
                    stroke="oklch(0.7 0.2 50)" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    fillOpacity={0} 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "oklch(0.65 0.22 150)" }} />
                <span className="text-sm text-muted-foreground">Cumprido</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-0.5 w-6" style={{ backgroundColor: "oklch(0.7 0.2 50)", borderStyle: "dashed" }} />
                <span className="text-sm text-muted-foreground">Meta (95%)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
