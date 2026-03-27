"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface MainSidebarProps extends React.HTMLAttributes<HTMLElement> {
  collapsed?: boolean
  mobileOpen?: boolean
  isFixed?: boolean
}

const MainSidebar = React.forwardRef<HTMLElement, MainSidebarProps>(
  (
    {
      className,
      collapsed = false,
      mobileOpen = false,
      isFixed = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <aside
        ref={ref}
        className={cn(
          "left-0 top-0 pt-[50px] min-h-full z-[810]",
          "bg-[var(--adminlte-skin-sidebar-bg)]",
          "transition-[transform,width] duration-300 ease-in-out",
          isFixed ? "fixed" : "absolute",
          collapsed ? "w-[50px]" : "w-[230px]",
          // Mobile: hidden by default, shown when mobileOpen
          "max-md:fixed max-md:z-[1035]",
          !mobileOpen && "max-md:-translate-x-[230px]",
          mobileOpen && "max-md:translate-x-0",
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "h-full overflow-y-auto overflow-x-hidden",
            collapsed && "overflow-visible"
          )}
        >
          {children}
        </div>
      </aside>
    )
  }
)
MainSidebar.displayName = "MainSidebar"

export { MainSidebar }
export type { MainSidebarProps }
