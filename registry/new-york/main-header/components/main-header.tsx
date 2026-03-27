"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface MainHeaderProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode
  collapsed?: boolean
}

const MainHeader = React.forwardRef<HTMLElement, MainHeaderProps>(
  ({ className, logo, collapsed = false, children, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          "relative max-h-[100px] z-[1030] flex",
          className
        )}
        {...props}
      >
        {/* Logo area */}
        <div
          className={cn(
            "flex-shrink-0 transition-[width] duration-300",
            collapsed ? "w-[50px]" : "w-[230px]"
          )}
        >
          {logo}
        </div>
        {/* Navbar area */}
        <div className="flex-1 min-w-0">
          {children}
        </div>
      </header>
    )
  }
)
MainHeader.displayName = "MainHeader"

export { MainHeader }
export type { MainHeaderProps }
