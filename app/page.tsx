"use client"

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { TopBar } from "@/components/top-bar"
import { ExecutiveSummary } from "@/components/executive-summary"
import { Charts } from "@/components/charts"
import { Inventory } from "@/components/inventory"
import { StrategicUpdates } from "@/components/strategic-updates"
import { StrategicProjects } from "@/components/strategic-projects"

export default function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <TopBar />
        <main className="flex-1 overflow-auto">
          <div className="container max-w-7xl mx-auto p-6 space-y-8">
            {/* Header */}
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold text-foreground tracking-tight">Dashboard de TI</h1>
              <p className="text-muted-foreground">
                Bem-vindo ao painel de gestão. Última atualização: {new Date().toLocaleDateString('pt-BR', { 
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>

            {/* Executive Summary */}
            <ExecutiveSummary />

            {/* Charts */}
            <Charts />

            {/* Inventory */}
            <Inventory />

            {/* Strategic Updates Timeline */}
            <StrategicUpdates />

            {/* Strategic Projects */}
            <StrategicProjects />

            {/* Footer */}
            <footer className="text-center py-6 border-t border-border">
              <p className="text-xs text-muted-foreground">
                IT Control Enterprise Dashboard © 2026 • Desenvolvido para gestão estratégica de TI
              </p>
            </footer>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
