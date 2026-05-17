"use client"

import {
  LayoutDashboard,
  Ticket,
  Monitor,
  FolderKanban,
  Settings,
  Bell,
  Search,
  ChevronDown,
  Activity,
  Laptop,
  Printer,
  Wifi,
  WifiOff,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Visão Geral", icon: LayoutDashboard, active: true },
  { name: "Chamados", icon: Ticket, active: false },
  { name: "Inventário", icon: Monitor, active: false },
  { name: "Projetos", icon: FolderKanban, active: false },
]

const bottomNavigation = [
  { name: "Configurações", icon: Settings },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarHeader className="px-4 py-5 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-chart-1 to-chart-2">
            <Activity className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">IT Control</span>
            <span className="text-xs text-muted-foreground">Enterprise Dashboard</span>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-2 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-3 mb-2">
            Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    isActive={item.active}
                    className={cn(
                      "h-10 px-3 rounded-lg transition-all duration-200",
                      item.active 
                        ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                        : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="font-medium">{item.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-6">
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-3 mb-2">
            Inventário Rápido
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-2 px-3">
              <div className="flex items-center justify-between p-2 rounded-lg bg-sidebar-accent/30">
                <div className="flex items-center gap-2">
                  <Monitor className="h-4 w-4 text-chart-1" />
                  <span className="text-sm text-foreground">Desktops</span>
                </div>
                <span className="text-sm font-semibold text-foreground">245</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-sidebar-accent/30">
                <div className="flex items-center gap-2">
                  <Laptop className="h-4 w-4 text-chart-2" />
                  <span className="text-sm text-foreground">Notebooks</span>
                </div>
                <span className="text-sm font-semibold text-foreground">128</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-sidebar-accent/30">
                <div className="flex items-center gap-2">
                  <Printer className="h-4 w-4 text-chart-3" />
                  <span className="text-sm text-foreground">Impressoras</span>
                </div>
                <span className="text-sm font-semibold text-foreground">34</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-destructive/10 border border-destructive/20">
                <div className="flex items-center gap-2">
                  <WifiOff className="h-4 w-4 text-destructive" />
                  <span className="text-sm text-foreground">Offline</span>
                </div>
                <span className="text-sm font-semibold text-destructive">12</span>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-sidebar-border p-4">
        <SidebarMenu>
          {bottomNavigation.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton className="h-10 px-3 text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50 rounded-lg">
                <item.icon className="h-4 w-4" />
                <span className="font-medium">{item.name}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <div className="flex items-center gap-3 mt-3 p-3 rounded-lg bg-sidebar-accent/30">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatar.png" alt="Avatar" />
            <AvatarFallback className="bg-chart-1 text-white text-sm font-medium">AD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">Admin TI</p>
            <p className="text-xs text-muted-foreground truncate">admin@empresa.com</p>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
