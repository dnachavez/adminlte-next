"use client"

import * as React from "react"

type Skin =
  | "skin-blue"
  | "skin-blue-light"
  | "skin-green"
  | "skin-green-light"
  | "skin-red"
  | "skin-red-light"
  | "skin-yellow"
  | "skin-yellow-light"
  | "skin-purple"
  | "skin-purple-light"
  | "skin-black"
  | "skin-black-light"

interface AdminLTELayoutState {
  skin: Skin
  sidebarCollapsed: boolean
  sidebarMobileOpen: boolean
  isMobile: boolean
  isFixed: boolean
  isBoxed: boolean
  controlSidebarOpen: boolean
  sidebarMini: boolean
}

interface AdminLTELayoutActions {
  setSkin: (skin: Skin) => void
  toggleSidebar: () => void
  openSidebar: () => void
  closeSidebar: () => void
  closeMobileSidebar: () => void
  setFixed: (fixed: boolean) => void
  setBoxed: (boxed: boolean) => void
  toggleControlSidebar: () => void
  setSidebarMini: (mini: boolean) => void
}

type AdminLTELayoutContextValue = AdminLTELayoutState & AdminLTELayoutActions

const AdminLTELayoutContext = React.createContext<AdminLTELayoutContextValue | null>(null)

export function useAdminLTELayout() {
  const context = React.useContext(AdminLTELayoutContext)
  if (!context) {
    throw new Error("useAdminLTELayout must be used within AdminLTELayoutProvider")
  }
  return context
}

interface AdminLTELayoutProviderProps {
  children: React.ReactNode
  defaultSkin?: Skin
  defaultCollapsed?: boolean
  defaultFixed?: boolean
  defaultBoxed?: boolean
  sidebarMini?: boolean
  collapseScreenSize?: number
}

export function AdminLTELayoutProvider({
  children,
  defaultSkin = "skin-blue",
  defaultCollapsed = false,
  defaultFixed = false,
  defaultBoxed = false,
  sidebarMini = true,
  collapseScreenSize = 767,
}: AdminLTELayoutProviderProps) {
  const [skin, setSkin] = React.useState<Skin>(defaultSkin)
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(defaultCollapsed)
  const [sidebarMobileOpen, setSidebarMobileOpen] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(false)
  const [isFixed, setFixed] = React.useState(defaultFixed)
  const [isBoxed, setBoxed] = React.useState(defaultBoxed)
  const [controlSidebarOpen, setControlSidebarOpen] = React.useState(false)
  const [isSidebarMini, setSidebarMini] = React.useState(sidebarMini)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= collapseScreenSize)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [collapseScreenSize])

  const toggleSidebar = React.useCallback(() => {
    if (isMobile) {
      setSidebarMobileOpen((prev) => !prev)
    } else {
      setSidebarCollapsed((prev) => !prev)
    }
  }, [isMobile])

  const openSidebar = React.useCallback(() => {
    if (isMobile) setSidebarMobileOpen(true)
    else setSidebarCollapsed(false)
  }, [isMobile])

  const closeSidebar = React.useCallback(() => {
    if (isMobile) setSidebarMobileOpen(false)
    else setSidebarCollapsed(true)
  }, [isMobile])

  const closeMobileSidebar = React.useCallback(() => {
    if (isMobile) setSidebarMobileOpen(false)
  }, [isMobile])

  const toggleControlSidebar = React.useCallback(() => {
    setControlSidebarOpen((prev) => !prev)
  }, [])

  const value: AdminLTELayoutContextValue = {
    skin,
    sidebarCollapsed,
    sidebarMobileOpen,
    isMobile,
    isFixed,
    isBoxed,
    controlSidebarOpen,
    sidebarMini: isSidebarMini,
    setSkin,
    toggleSidebar,
    openSidebar,
    closeSidebar,
    closeMobileSidebar,
    setFixed,
    setBoxed,
    toggleControlSidebar,
    setSidebarMini,
  }

  return (
    <AdminLTELayoutContext.Provider value={value}>
      {children}
    </AdminLTELayoutContext.Provider>
  )
}

export type { Skin, AdminLTELayoutState, AdminLTELayoutActions, AdminLTELayoutContextValue }
