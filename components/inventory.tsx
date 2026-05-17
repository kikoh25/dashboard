"use client"

import { Monitor, Laptop, Printer, Server, WifiOff, Wifi, HardDrive, Cpu } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

const inventoryItems = [
  {
    name: "Computadores",
    icon: Monitor,
    total: 245,
    online: 238,
    offline: 7,
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
    progressColor: "bg-chart-1",
  },
  {
    name: "Notebooks",
    icon: Laptop,
    total: 128,
    online: 121,
    offline: 7,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    progressColor: "bg-chart-2",
  },
  {
    name: "Impressoras",
    icon: Printer,
    total: 34,
    online: 31,
    offline: 3,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    progressColor: "bg-chart-3",
  },
  {
    name: "Servidores",
    icon: Server,
    total: 12,
    online: 12,
    offline: 0,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    progressColor: "bg-chart-4",
  },
]

const offlineDevices = [
  { name: "PC-FINANCEIRO-03", type: "Desktop", location: "3º Andar", lastSeen: "2h atrás", ip: "192.168.1.45" },
  { name: "NB-COMERCIAL-12", type: "Notebook", location: "2º Andar", lastSeen: "30min atrás", ip: "192.168.1.112" },
  { name: "IMP-RH-01", type: "Impressora", location: "4º Andar", lastSeen: "1h atrás", ip: "192.168.1.201" },
  { name: "PC-TI-BACKUP", type: "Desktop", location: "Sala TI", lastSeen: "15min atrás", ip: "192.168.1.10" },
]

export function Inventory() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-foreground">Inventário de TI</h2>
        <p className="text-sm text-muted-foreground">Status dos equipamentos em tempo real</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Equipment Summary */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {inventoryItems.map((item) => {
            const percentage = Math.round((item.online / item.total) * 100)
            return (
              <Card key={item.name} className="bg-card border-border hover:border-chart-1/30 transition-all duration-300">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div className={cn("p-2.5 rounded-lg", item.bgColor)}>
                      <item.icon className={cn("h-5 w-5", item.color)} />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Wifi className="h-3.5 w-3.5 text-chart-2" />
                        <span className="text-sm font-semibold text-foreground">{item.online}</span>
                      </div>
                      <div className="text-muted-foreground">/</div>
                      <div className="flex items-center gap-1">
                        <WifiOff className="h-3.5 w-3.5 text-destructive" />
                        <span className="text-sm font-semibold text-destructive">{item.offline}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-end justify-between mb-2">
                      <p className="text-sm font-medium text-foreground">{item.name}</p>
                      <p className="text-2xl font-bold text-foreground">{item.total}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Disponibilidade</span>
                        <span className="font-medium text-foreground">{percentage}%</span>
                      </div>
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div 
                          className={cn("h-full rounded-full transition-all duration-500", item.progressColor)}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Offline Devices */}
        <Card className="bg-card border-border">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
                <WifiOff className="h-4 w-4 text-destructive" />
                Equipamentos Offline
              </CardTitle>
              <span className="text-xs font-medium text-destructive bg-destructive/10 px-2 py-1 rounded-full">
                {offlineDevices.length} dispositivos
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {offlineDevices.map((device) => (
              <div 
                key={device.name} 
                className="p-3 rounded-lg bg-secondary/50 border border-border hover:border-destructive/30 transition-all duration-200 group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground group-hover:text-destructive transition-colors">
                      {device.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{device.type} • {device.location}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{device.lastSeen}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <code className="text-xs text-muted-foreground font-mono bg-background px-2 py-0.5 rounded">
                    {device.ip}
                  </code>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
