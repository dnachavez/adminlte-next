"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"
import {
  AdminLTELayoutProvider,
  useAdminLTELayout,
} from "@/registry/new-york/admin-layout/blocks/admin-layout-provider"
import type { Skin } from "@/registry/new-york/admin-layout/blocks/admin-layout-provider"

interface AdminLayoutProps {
  children: React.ReactNode
  defaultSkin?: Skin
  defaultCollapsed?: boolean
  defaultFixed?: boolean
  defaultBoxed?: boolean
  sidebarMini?: boolean
  className?: string
}

function AdminLayoutInner({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const {
    skin,
    sidebarCollapsed,
    sidebarMobileOpen,
    isFixed,
    isBoxed,
    sidebarMini,
  } = useAdminLTELayout()

  return (
    <div
      className={cn(
        "min-h-screen",
        skin,
        sidebarCollapsed && "sidebar-collapse",
        sidebarMobileOpen && "sidebar-open",
        isFixed && "fixed",
        isBoxed && "layout-boxed",
        sidebarMini && "sidebar-mini",
        className
      )}
    >
      <div className="relative min-h-screen">
        {children}
      </div>
    </div>
  )
}

function AdminLayout({
  children,
  defaultSkin = "skin-blue",
  defaultCollapsed = false,
  defaultFixed = false,
  defaultBoxed = false,
  sidebarMini = true,
  className,
}: AdminLayoutProps) {
  return (
    <AdminLTELayoutProvider
      defaultSkin={defaultSkin}
      defaultCollapsed={defaultCollapsed}
      defaultFixed={defaultFixed}
      defaultBoxed={defaultBoxed}
      sidebarMini={sidebarMini}
    >
      <AdminLayoutInner className={className}>
        {children}
      </AdminLayoutInner>
    </AdminLTELayoutProvider>
  )
}

export { AdminLayout }
export type { AdminLayoutProps }
