"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface HeaderNavbarProps extends React.HTMLAttributes<HTMLElement> {
  sidebarToggle?: React.ReactNode
  leftContent?: React.ReactNode
  rightContent?: React.ReactNode
}

const HeaderNavbar = React.forwardRef<HTMLElement, HeaderNavbarProps>(
  (
    {
      className,
      sidebarToggle,
      leftContent,
      rightContent,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <nav
        ref={ref}
        className={cn(
          "min-h-[50px] bg-[var(--adminlte-skin-navbar-bg)] text-[var(--adminlte-skin-navbar-color)]",
          "border-none mb-0 flex items-center",
          "transition-[margin-left] duration-300 ease-in-out",
          className
        )}
        role="navigation"
        {...props}
      >
        {sidebarToggle && (
          <div className="flex items-center">{sidebarToggle}</div>
        )}
        {leftContent && (
          <div className="flex items-center">{leftContent}</div>
        )}
        {children}
        {rightContent && (
          <div className="flex items-center ml-auto">{rightContent}</div>
        )}
      </nav>
    )
  }
)
HeaderNavbar.displayName = "HeaderNavbar"

export { HeaderNavbar }
export type { HeaderNavbarProps }
