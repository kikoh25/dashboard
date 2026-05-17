"use client"

import { Bell, Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"

export function TopBar() {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
        <div className="hidden md:flex items-center gap-2">
          <nav className="flex items-center gap-1">
            <span className="text-muted-foreground text-sm">Dashboard</span>
            <span className="text-muted-foreground/50">/</span>
            <span className="text-foreground text-sm font-medium">Visão Geral</span>
          </nav>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar..."
            className="w-64 pl-9 h-9 bg-secondary border-border text-sm placeholder:text-muted-foreground focus:ring-1 focus:ring-chart-1/50"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>

        <Button variant="ghost" size="icon" className="relative h-9 w-9 text-muted-foreground hover:text-foreground hover:bg-secondary">
          <Bell className="h-4 w-4" />
          <Badge className="absolute -top-0.5 -right-0.5 h-4 w-4 p-0 flex items-center justify-center text-[10px] font-bold bg-destructive text-destructive-foreground border-0">
            3
          </Badge>
          <span className="sr-only">Notificações</span>
        </Button>

        <div className="flex items-center gap-2 pl-2 border-l border-border">
          <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-secondary cursor-pointer transition-colors">
            <div className="h-2 w-2 rounded-full bg-chart-2 animate-pulse" />
            <span className="text-sm font-medium text-foreground">Sistema Online</span>
            <ChevronDown className="h-3 w-3 text-muted-foreground" />
          </div>
        </div>
      </div>
    </header>
  )
}
